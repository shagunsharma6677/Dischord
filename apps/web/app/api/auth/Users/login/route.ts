import { NextResponse } from "next/server";
import { LoginSchema } from "../../../../../schemas/index";
import { signIn } from "../../../../../auth";
import { findByEmail } from "../../../../../data/user";
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from "../../../../../lib/tokens";
import {
  sendTwoFactorTokenEmail,
  sendVerificationEmail,
} from "../../../../../lib/mail";
import { getTwoFactorTokenByEmail } from "../../../../../data/two-factor-token";
import { getTwoFactorConfirmationByUserId } from "../../../../../data/two-factor-confirmation";
import { db } from "../../../../../lib/db";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate incoming data against LoginSchema
    const validationResult = LoginSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { message: "Validation failed !" },
        { status: 400 }
      );
    }

    const { email, password, code } = validationResult.data;

    // Find user by email
    const existingUser = await findByEmail(email);

    if (!existingUser || !existingUser.email || !existingUser.password) {
      return NextResponse.json(
        { message: "User not found !" },
        { status: 404 }
      );
    }
    //If we found user is not verified!
    //Then request for verification token from email.
    if (!existingUser?.emailVerified) {
      const verificationToken = await generateVerificationToken(
        existingUser.email
      );

      await sendVerificationEmail(
        verificationToken.email,
        verificationToken.token
      );
      return NextResponse.json(
        { message: "Confirmation email sent!" },
        { status: 201 }
      );
    }
    if (existingUser.isTwoFactorEnabled && existingUser.email) {
      if (code) {
        const twoFactorToken = await getTwoFactorTokenByEmail(
          existingUser.email
        );

        if (!twoFactorToken) {
          return NextResponse.json(
            { message: "Invalid code!" },
            { status: 401 }
          );
        }

        if (twoFactorToken.token !== code) {
          return NextResponse.json(
            { message: "Invalid code!" },
            { status: 401 }
          );
        }

        const hasExpired = new Date(twoFactorToken.expires) < new Date();

        if (hasExpired) {
          return NextResponse.json(
            { message: "Code expired!" },
            { status: 401 }
          );
        }

        await db.twoFactorToken.delete({
          where: { id: twoFactorToken.id },
        });

        const existingConfirmation = await getTwoFactorConfirmationByUserId(
          existingUser.id
        );

        if (existingConfirmation) {
          await db.twoFactorConfirmation.delete({
            where: { id: existingConfirmation.id },
          });
        }

        await db.twoFactorConfirmation.create({
          data: {
            userId: existingUser.id,
          },
        });
      } else {
        const twoFactorToken = await generateTwoFactorToken(existingUser.email);
        await sendTwoFactorTokenEmail(
          twoFactorToken.email,
          twoFactorToken.token
        );

        // return { twoFactor: true };
        return NextResponse.json(
          { message: "Two factor authentication done !!!" },
          { status: 200 }
        );
      }
    }

    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return NextResponse.json(
      { message: "Login successfull !!!" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong !" },
      { status: 500 }
    );
  }
}

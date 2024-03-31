import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { LoginSchema } from "../../../../../schemas/index";
import { findByEmail } from "../../../../../lib/utils";
import { signIn } from "../../../../../auth";
import { DEFAULT_LOGIN_REDIRECT } from "../../../../../routes";

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

    const { email, password } = validationResult.data;

    // Find user by email
    const existingUser = await findByEmail(email);
    if (!existingUser || !existingUser.email || !existingUser.password) {
      return NextResponse.json(
        { message: "User not found !" },
        { status: 404 }
      );
    }
    // Compare passwords
    const passwordMatch = await bcryptjs.compare(
      password,
      existingUser.password
    );
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid password !" },
        { status: 401 }
      );
    }

    await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    return NextResponse.json(
      { message: "Login successful !!!" },
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

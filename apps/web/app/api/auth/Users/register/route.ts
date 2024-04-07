import { NextResponse } from "next/server";
import { RegisterSchema } from "../../../../../schemas/index";
import bcryptjs from "bcryptjs";
import { addUser, findByEmail } from "../../../../../data/user";
import { generateVerificationToken } from "../../../../../lib/tokens";
import { sendVerificationEmail } from "../../../../../lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate incoming data against RegisterSchema
    const validationResult = RegisterSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { message: "Validation failed !" },
        { status: 400 }
      );
    }
    const { email, password, name } = validationResult.data;

    // Check for duplicate emails
    const duplicate = await findByEmail(email);
    if (duplicate) {
      return NextResponse.json(
        { message: "Email already in use!" },
        { status: 409 }
      );
    }

    // Hash password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create user
    await addUser({ email, password: hashPassword, name });

    const verificationToken = await generateVerificationToken(email);
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return NextResponse.json(
      { message: "Confirmation email send!" },
      { status: 201 }
    );
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { message: "Something went wrong !", error },
      { status: 500 }
    );
  }
}

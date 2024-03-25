import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { LoginSchema } from "../../../../../schemas/index";
import clientPromise from "../../../../../utils/db";
import { findByEmail } from "../../../../../utils/dbUtils";


export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    // Access a specific database and collection
    const db = client.db("dischord");
    const collection = db.collection("users");
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
    const user = await findByEmail(collection, email);
    if (!user) {
      return NextResponse.json(
        { message: "User not found !" },
        { status: 404 }
      );
    }

    // Compare passwords
    const passwordMatch = await bcryptjs.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json(
        { message: "Invalid password !" },
        { status: 401 }
      );
    }

    // Passwords match, login successful
    // Here you can generate a token, set cookies, or any other login-related logic

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

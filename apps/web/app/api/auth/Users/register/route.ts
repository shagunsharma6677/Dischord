import { NextResponse } from "next/server";
import { RegisterSchema } from "../../../../../schemas/index";
import bcryptjs from "bcryptjs";
import clientPromise from "../../../../../utils/db";
import { findByEmail } from "../../../../../utils/dbUtils";

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    // Access a specific database and collection
    const db = client.db("dischord");
    const collection = db.collection("users");
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
    const duplicate = await findByEmail(collection, email);
    if (duplicate) {
      return NextResponse.json(
        { message: "Duplicate Email !" },
        { status: 409 }
      );
    }

    // Hash password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create user
    await collection.insertOne({ email, password: hashPassword, name });

    return NextResponse.json({ message: "User Created !!" }, { status: 201 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { message: "Something went wrong !", error },
      { status: 500 }
    );
  }
}

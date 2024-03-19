import { NextResponse } from "next/server";
import { RegisterSchema } from "../../../../../schemas/index";
import bcryptjs from "bcryptjs";
import connectMongo from "../../../../../utils/db";
import UserModel from "../../../../(models)/User";


export async function POST(request: Request) {
  try {
    await connectMongo();
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
    const duplicate = await UserModel.findOne({ email }).lean().exec();
    if (duplicate) {
      return NextResponse.json({ message: "Duplicate Email !" }, { status: 409 });
    }

    // Hash password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create user
    await UserModel.create({ email, password: hashPassword, name });
  

    return NextResponse.json({ message: "User Created !!" }, { status: 201 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "Something went wrong !", error }, { status: 500 });
  }
}

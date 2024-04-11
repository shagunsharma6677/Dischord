// dbUtils.ts

import { db } from "../lib/db";


// Find a document by ID

export const getUserById = async (id: any) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};

// Find a document by email
export async function findByEmail(email: string): Promise<any> {
  try {
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
}

interface UserData {
  email: string;
  password: string;
  name: string;
}
// Add user document
export async function addUser(data: UserData): Promise<any> {
  try {
    const user = await db.user.create({ data });
    return user;
  } catch (error) {
    console.error("Error in addUser:", error);
    return null;
  }
}

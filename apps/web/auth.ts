import authConfig from "./auth.config";
import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
}: any = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
  ...authConfig,
});

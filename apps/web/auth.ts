import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./utils/db";
import authConfig from "./auth.config";
import NextAuth, { NextAuthConfig } from "next-auth";

export const {
  handlers: { GET, POST },
  auth,
}: any = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    // Set it as jwt instead of database
    strategy: "jwt",
  },
  ...authConfig,
});

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";

import { prisma } from "@/lib/prisma";

export const {
  handlers,
  signIn,
  signOut,
  auth,
} = NextAuth({
  adapter: PrismaAdapter(prisma),

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = !!auth?.user;

      const isDashboard =
        request.nextUrl.pathname.startsWith(
          "/dashboard"
        );

      if (isDashboard && !isLoggedIn) {
        return false;
      }

      return true;
    },
  },

  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET || "",
    }),

    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (
          !credentials?.email ||
          !credentials?.password
        ) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });

        if (!user || !user.password) {
          return null;
        }

        const passwordMatch =
          await bcrypt.compare(
            credentials.password as string,
            user.password
          );

        if (!passwordMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
});
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user) {
          return null;
        }

        // For now, we'll just check the email since we don't have password hashing
        // In a real app, you'd compare hashed passwords
        const isPasswordValid = credentials.password === "password123"; // Default password for demo
        
        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          username: user.username,
          displayName: user.displayName,
          avatarUrl: user.avatarUrl,
          isArtist: user.isArtist,
          isVerified: user.isVerified,
        };
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          username: user.username,
          displayName: user.displayName,
          avatarUrl: user.avatarUrl,
          isArtist: user.isArtist,
          isVerified: user.isVerified,
        };
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          username: token.username,
          displayName: token.displayName,
          avatarUrl: token.avatarUrl,
          isArtist: token.isArtist,
          isVerified: token.isVerified,
        }
      };
    }
  },
  pages: {
    signIn: "/auth/signin",
    signUp: "/auth/signup",
  }
};
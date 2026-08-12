import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import { compare } from "bcryptjs"

import clientPromise from "@/lib/mongodb"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: MongoDBAdapter(clientPromise),

  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      name: "Credentials",

      credentials: {
        identifier: {
          label: "Email or Mobile",
          type: "text",
          placeholder: "Email or mobile number",
        },

        password: {
          label: "Password",
          type: "password",
        },

        loginMethod: {
          label: "Login Method",
          type: "text",
        },
      },

      async authorize(credentials) {
        if (
          !credentials?.identifier ||
          !credentials?.password
        ) {
          return null
        }

        const identifier = String(credentials.identifier).trim()
        const password = String(credentials.password)
        const loginMethod = String(
          credentials.loginMethod || "email"
        )

        const client = await clientPromise
        const db = client.db()

        let user

        // Login with email
        if (loginMethod === "email") {
          user = await db.collection("users").findOne({
            email: identifier.toLowerCase(),
          })
        }

        // Login with mobile number
        if (loginMethod === "mobile") {
          user = await db.collection("users").findOne({
            mobile: identifier,
          })
        }

        if (!user) {
          return null
        }

        if (!user.password) {
          return null
        }

        const passwordMatch = await compare(
          password,
          user.password
        )

        if (!passwordMatch) {
          return null
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role ?? "user",
          mobile: user.mobile,
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.role = user.role
        token.mobile = user.mobile
      }

      return token
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string
        session.user.role = token.role as string
        session.user.mobile = token.mobile as string
      }

      return session
    },
  },

  pages: {
    signIn: "/auth/login",
  },
})
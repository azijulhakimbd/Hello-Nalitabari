import { NextResponse } from "next/server"
import { hash } from "bcryptjs"

import clientPromise from "@/lib/mongodb"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const {
      name,
      email,
      mobile,
      password,
    } = body

    // Required fields
    if (!name || !email || !mobile || !password) {
      return NextResponse.json(
        {
          message:
            "Name, email, mobile number and password are required",
        },
        {
          status: 400,
        }
      )
    }

    // Normalize values
    const normalizedName = String(name).trim()
    const normalizedEmail = String(email)
      .trim()
      .toLowerCase()
    const normalizedMobile = String(mobile).trim()
    const normalizedPassword = String(password)

    // Name validation
    if (normalizedName.length < 2) {
      return NextResponse.json(
        {
          message: "Name must be at least 2 characters",
        },
        {
          status: 400,
        }
      )
    }

    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json(
        {
          message: "Please enter a valid email address",
        },
        {
          status: 400,
        }
      )
    }

    // Bangladesh mobile validation
    const mobileRegex = /^01[3-9]\d{8}$/

    if (!mobileRegex.test(normalizedMobile)) {
      return NextResponse.json(
        {
          message:
            "Please enter a valid Bangladesh mobile number",
        },
        {
          status: 400,
        }
      )
    }

    // Password validation
    if (normalizedPassword.length < 6) {
      return NextResponse.json(
        {
          message:
            "Password must be at least 6 characters",
        },
        {
          status: 400,
        }
      )
    }

    const client = await clientPromise
    const db = client.db()

    // Check existing email
    const existingEmail = await db
      .collection("users")
      .findOne({
        email: normalizedEmail,
      })

    if (existingEmail) {
      return NextResponse.json(
        {
          message:
            "An account with this email already exists",
        },
        {
          status: 409,
        }
      )
    }

    // Check existing mobile
    const existingMobile = await db
      .collection("users")
      .findOne({
        mobile: normalizedMobile,
      })

    if (existingMobile) {
      return NextResponse.json(
        {
          message:
            "An account with this mobile number already exists",
        },
        {
          status: 409,
        }
      )
    }

    // Hash password
    const hashedPassword = await hash(
      normalizedPassword,
      12
    )

    // Create user
    const user = {
      name: normalizedName,
      email: normalizedEmail,
      mobile: normalizedMobile,
      password: hashedPassword,

      // Default role
      role: "user",

      // NextAuth / Auth.js fields
      emailVerified: null,
      image: null,

      createdAt: new Date(),
      updatedAt: new Date(),
    }

    await db.collection("users").insertOne(user)

    return NextResponse.json(
      {
        message: "Registration successful",
      },
      {
        status: 201,
      }
    )
  } catch (error) {
    console.error("REGISTER_ERROR:", error)

    return NextResponse.json(
      {
        message:
          "Something went wrong. Please try again.",
      },
      {
        status: 500,
      }
    )
  }
}
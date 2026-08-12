import { auth } from "@/auth"
import clientPromise from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const session = await auth()

    if (!session?.user) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    if (session.user.role !== "admin") {
      return NextResponse.json(
        { message: "Forbidden" },
        { status: 403 }
      )
    }

    const client = await clientPromise
    const db = client.db()

    const users = await db
      .collection("users")
      .find(
        {},
        {
          projection: {
            password: 0,
          },
        }
      )
      .sort({
        createdAt: -1,
      })
      .toArray()

    return NextResponse.json(users)
  } catch (error) {
    console.error("GET_USERS_ERROR:", error)

    return NextResponse.json(
      { message: "Failed to fetch users" },
      { status: 500 }
    )
  }
}
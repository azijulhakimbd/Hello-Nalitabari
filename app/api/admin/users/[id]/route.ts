import { auth } from "@/auth"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

const allowedRoles = [
  "user",
  "editor",
  "admin",
]

export async function PATCH(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ id: string }>
  }
) {
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

    const { id } = await params

    if (!ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid user ID" },
        { status: 400 }
      )
    }

    const body = await request.json()

    const { role } = body

    if (!allowedRoles.includes(role)) {
      return NextResponse.json(
        { message: "Invalid role" },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const db = client.db()

    const result = await db
      .collection("users")
      .updateOne(
        {
          _id: new ObjectId(id),
        },
        {
          $set: {
            role,
            updatedAt: new Date(),
          },
        }
      )

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      )
    }

    return NextResponse.json({
      message: "Role updated successfully",
    })
  } catch (error) {
    console.error(
      "UPDATE_USER_ROLE_ERROR:",
      error
    )

    return NextResponse.json(
      { message: "Failed to update role" },
      { status: 500 }
    )
  }
}
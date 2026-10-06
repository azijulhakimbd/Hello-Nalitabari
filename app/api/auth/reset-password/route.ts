import { createHash } from "node:crypto"
import { hash } from "bcryptjs"
import type { Document, ObjectId } from "mongodb"
import { NextResponse } from "next/server"
import { z } from "zod"

import clientPromise, { getMongoDatabase } from "@/lib/mongodb"

type PasswordResetToken = Document & {
  _id: string
  userId: ObjectId
  expiresAt: Date
  createdAt: Date
}

const resetSchema = z.object({
  token: z.string().regex(/^[a-f0-9]{64}$/),
  password: z.string().min(6).max(72),
})

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: "This reset link is invalid or expired." }, { status: 400 })
  }

  const result = resetSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ message: "Use a valid reset link and a password of at least 6 characters." }, { status: 400 })
  }

  try {
    const client = await clientPromise
    const db = getMongoDatabase(client)
    const tokenHash = createHash("sha256").update(result.data.token).digest("hex")
    const resetToken = await db.collection<PasswordResetToken>("passwordResetTokens").findOneAndDelete({
      _id: tokenHash,
      expiresAt: { $gt: new Date() },
    })

    if (!resetToken) {
      return NextResponse.json({ message: "This reset link is invalid or expired." }, { status: 400 })
    }

    const password = await hash(result.data.password, 12)
    const update = await db.collection("users").updateOne(
      { _id: resetToken.userId },
      { $set: { password, updatedAt: new Date() } }
    )

    if (!update.matchedCount) {
      return NextResponse.json({ message: "This reset link is invalid or expired." }, { status: 400 })
    }

    await db.collection<PasswordResetToken>("passwordResetTokens").deleteMany({ userId: resetToken.userId })

    return NextResponse.json({ message: "Your password has been reset. You can now sign in." })
  } catch (error) {
    console.error("RESET_PASSWORD_ERROR:", error)
    return NextResponse.json({ message: "Unable to reset your password right now." }, { status: 500 })
  }
}
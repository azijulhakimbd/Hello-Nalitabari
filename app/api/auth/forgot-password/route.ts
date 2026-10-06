import { createHash, randomBytes } from "node:crypto"
import type { Document, ObjectId } from "mongodb"
import { Resend } from "resend"
import { NextResponse } from "next/server"
import { z } from "zod"

import clientPromise, { getMongoDatabase } from "@/lib/mongodb"

const requestSchema = z.object({ email: z.email().trim().toLowerCase() })
const genericMessage = "If an account exists for that email, a reset link will be sent shortly."
type PasswordResetToken = Document & {
  _id: string
  userId: ObjectId
  expiresAt: Date
  createdAt: Date
}

export async function POST(request: Request) {
  let body: unknown

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 })
  }

  const result = requestSchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ message: "Enter a valid email address." }, { status: 400 })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  if (!resendApiKey) {
    console.error("Password reset email is unavailable: RESEND_API_KEY is not configured.")
    return NextResponse.json({ message: "Password reset is temporarily unavailable." }, { status: 503 })
  }

  try {
    const client = await clientPromise
    const db = getMongoDatabase(client)
    const user = await db.collection("users").findOne({ email: result.data.email })

    if (!user) {
      return NextResponse.json({ message: genericMessage })
    }

    const tokens = db.collection<PasswordResetToken>("passwordResetTokens")
    const now = new Date()
    const recentToken = await tokens.findOne({
      userId: user._id,
      createdAt: { $gt: new Date(now.getTime() - 60_000) },
    })

    if (recentToken) {
      return NextResponse.json({ message: genericMessage })
    }

    await tokens.createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 })
    await tokens.deleteMany({ userId: user._id })

    const token = randomBytes(32).toString("hex")
    const tokenHash = createHash("sha256").update(token).digest("hex")
    const expiresAt = new Date(now.getTime() + 60 * 60 * 1000)

    await tokens.insertOne({
      _id: tokenHash,
      userId: user._id,
      expiresAt,
      createdAt: now,
    })

    const configuredBaseUrl = process.env.AUTH_URL ?? process.env.NEXTAUTH_URL
    const baseUrl = configuredBaseUrl
      ?? (process.env.NODE_ENV === "development"
        ? new URL(request.url).origin
        : "https://nalitabari.sherpur.gov.bd")
    const resetUrl = new URL("/auth/reset-password", baseUrl)
    resetUrl.searchParams.set("token", token)

    const resend = new Resend(resendApiKey)
    const { error } = await resend.emails.send({
      from: "Nalitabari Portal <info@azijul.pro.bd>",
      to: [user.email],
      subject: "Reset your Nalitabari Portal password",
      text: `Hello ${user.name ?? "there"},\n\nUse this link to reset your password. It expires in one hour:\n${resetUrl.toString()}\n\nIf you did not request this, you can ignore this email.`,
      html: `
        <div style="max-width:560px;margin:32px auto;padding:28px;border:1px solid #e2e8f0;border-radius:12px;font-family:Arial,sans-serif;color:#172033">
          <h1 style="font-size:22px;margin:0 0 16px">Reset your password</h1>
          <p>Hello ${escapeHtml(String(user.name ?? "there"))},</p>
          <p>We received a request to reset your Nalitabari Portal password. This link expires in one hour.</p>
          <p style="margin:24px 0"><a href="${escapeHtml(resetUrl.toString())}" style="display:inline-block;padding:12px 18px;background:#15803d;color:#fff;text-decoration:none;border-radius:6px">Reset password</a></p>
          <p style="font-size:13px;color:#64748b">If you did not request this, you can ignore this email.</p>
        </div>
      `,
    })

    if (error) {
      await tokens.deleteOne({ _id: tokenHash })
      console.error("PASSWORD_RESET_EMAIL_ERROR:", error)
      return NextResponse.json({ message: "Unable to send the reset email right now. Please try again later." }, { status: 502 })
    }

    return NextResponse.json({ message: genericMessage })
  } catch (error) {
    console.error("FORGOT_PASSWORD_ERROR:", error)
    return NextResponse.json({ message: "Unable to process the request right now." }, { status: 500 })
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}
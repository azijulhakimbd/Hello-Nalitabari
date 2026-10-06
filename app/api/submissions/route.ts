import { auth } from "@/auth"
import clientPromise, { getMongoDatabase } from "@/lib/mongodb"
import { NextResponse } from "next/server"
import { z } from "zod"

const submissionSchema = z.object({
  name: z.string().trim().min(2).max(120),
  category: z.enum([
    "doctor",
    "hospital",
    "school",
    "college",
    "business",
    "government",
    "emergency",
    "place",
    "other",
  ]),
  description: z.string().trim().max(500).default(""),
  address: z.string().trim().min(4).max(300),
  mapUrl: z.union([z.literal(""), z.url()]).default(""),
  latitude: z.string().trim().max(30).default(""),
  longitude: z.string().trim().max(30).default(""),
  phoneNumbers: z.array(z.string().trim().min(5).max(24)).min(1).max(5),
  email: z.union([z.literal(""), z.email()]).default(""),
  website: z.union([z.literal(""), z.url()]).default(""),
  socialLinks: z.array(z.object({
    platform: z.string().trim().min(1).max(40),
    url: z.url(),
  })).max(8).default([]),
  imageData: z.union([
    z.literal(""),
    z.string().max(7_000_000).regex(/^data:image\/(png|jpeg|webp);base64,/),
  ]).default(""),
  openingHours: z.string().trim().max(100).default(""),
  weeklyClosing: z.string().trim().max(100).default(""),
  additionalInfo: z.string().trim().max(1000).default(""),
  submitterName: z.string().trim().min(2).max(120),
  submitterPhone: z.string().trim().min(5).max(24),
})

export async function GET() {
  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  try {
    const client = await clientPromise
    const submissions = await getMongoDatabase(client)
      .collection("submissions")
      .find({ userId: session.user.id })
      .sort({ createdAt: -1 })
      .limit(50)
      .toArray()

    return NextResponse.json(submissions.map((submission) => ({
      ...submission,
      _id: submission._id.toString(),
      createdAt: submission.createdAt.toISOString(),
    })))
  } catch (error) {
    console.error("GET_SUBMISSIONS_ERROR:", error)
    return NextResponse.json({ message: "Failed to fetch submissions" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const session = await auth()

  if (!session?.user?.id) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const result = submissionSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json(
        { message: "Please check the required fields and try again." },
        { status: 400 }
      )
    }

    const client = await clientPromise
    const now = new Date()
    const submission = {
      ...result.data,
      userId: session.user.id,
      submitterEmail: session.user.email ?? "",
      status: "pending",
      createdAt: now,
      updatedAt: now,
    }
    const insert = await getMongoDatabase(client).collection("submissions").insertOne(submission)

    return NextResponse.json(
      { id: insert.insertedId.toString(), message: "Information submitted for review." },
      { status: 201 }
    )
  } catch (error) {
    console.error("CREATE_SUBMISSION_ERROR:", error)
    return NextResponse.json({ message: "Failed to submit information." }, { status: 500 })
  }
}
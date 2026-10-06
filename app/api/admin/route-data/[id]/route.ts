import { auth } from "@/auth"
import clientPromise, { getMongoDatabase } from "@/lib/mongodb"
import { routeDataRecordSchema } from "@/lib/route-data-schema"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

async function requireAdmin() {
  const session = await auth()

  if (!session?.user) {
    return NextResponse.json({ message: "অনুমতি নেই। লগইন করুন।" }, { status: 401 })
  }

  if (session.user.role !== "admin") {
    return NextResponse.json({ message: "এই কাজের অনুমতি নেই।" }, { status: 403 })
  }

  return null
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const denied = await requireAdmin()
  if (denied) return denied

  const { id } = await params
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ message: "রেকর্ড আইডি সঠিক নয়।" }, { status: 400 })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: "অনুরোধের তথ্য সঠিক নয়।" }, { status: 400 })
  }

  const result = routeDataRecordSchema.safeParse((body as { data?: unknown })?.data)
  if (!result.success) {
    return NextResponse.json({ message: "রেকর্ডের তথ্য একটি JSON অবজেক্ট হতে হবে।" }, { status: 400 })
  }

  try {
    const client = await clientPromise
    const update = await getMongoDatabase(client).collection("routeData").updateOne(
      { _id: new ObjectId(id) },
      { $set: { data: result.data, updatedAt: new Date() } }
    )

    if (!update.matchedCount) {
      return NextResponse.json({ message: "রেকর্ড পাওয়া যায়নি।" }, { status: 404 })
    }

    return NextResponse.json({ message: "রেকর্ড হালনাগাদ হয়েছে।" })
  } catch (error) {
    console.error("UPDATE_ADMIN_ROUTE_DATA_ERROR:", error)
    return NextResponse.json({ message: "রেকর্ড হালনাগাদ করা যায়নি।" }, { status: 500 })
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const denied = await requireAdmin()
  if (denied) return denied

  const { id } = await params
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ message: "রেকর্ড আইডি সঠিক নয়।" }, { status: 400 })
  }

  try {
    const client = await clientPromise
    const result = await getMongoDatabase(client).collection("routeData").deleteOne({ _id: new ObjectId(id) })

    if (!result.deletedCount) {
      return NextResponse.json({ message: "রেকর্ড পাওয়া যায়নি।" }, { status: 404 })
    }

    return NextResponse.json({ message: "রেকর্ড মুছে ফেলা হয়েছে।" })
  } catch (error) {
    console.error("DELETE_ADMIN_ROUTE_DATA_ERROR:", error)
    return NextResponse.json({ message: "রেকর্ড মুছে ফেলা যায়নি।" }, { status: 500 })
  }
}
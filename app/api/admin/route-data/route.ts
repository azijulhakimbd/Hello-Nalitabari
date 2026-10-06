import { auth } from "@/auth"
import clientPromise, { getMongoDatabase } from "@/lib/mongodb"
import { isRouteDataKey } from "@/lib/route-data-keys"
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

export async function GET(request: Request) {
  const denied = await requireAdmin()
  if (denied) return denied

  const routeKey = new URL(request.url).searchParams.get("routeKey") ?? ""
  if (!isRouteDataKey(routeKey)) {
    return NextResponse.json({ message: "অজানা পৃষ্ঠা নির্বাচন করা হয়েছে।" }, { status: 400 })
  }

  try {
    const client = await clientPromise
    const records = await getMongoDatabase(client)
      .collection("routeData")
      .find({ routeKey })
      .sort({ position: 1 })
      .toArray()

    return NextResponse.json({
      records: records.map((record) => ({
        id: record._id.toString(),
        recordKey: record.recordKey,
        position: record.position,
        data: record.data,
      })),
    })
  } catch (error) {
    console.error("GET_ADMIN_ROUTE_DATA_ERROR:", error)
    return NextResponse.json({ message: "তথ্য লোড করা যায়নি।" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const denied = await requireAdmin()
  if (denied) return denied

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: "অনুরোধের তথ্য সঠিক নয়।" }, { status: 400 })
  }

  const routeKey = (body as { routeKey?: unknown })?.routeKey
  const dataResult = routeDataRecordSchema.safeParse((body as { data?: unknown })?.data)
  if (!isRouteDataKey(String(routeKey ?? "")) || !dataResult.success) {
    return NextResponse.json({ message: "পৃষ্ঠা বা রেকর্ডের তথ্য সঠিক নয়।" }, { status: 400 })
  }

  try {
    const client = await clientPromise
    const collection = getMongoDatabase(client).collection("routeData")
    const lastRecord = await collection.find({ routeKey }).sort({ position: -1 }).limit(1).next()
    const recordKey = new ObjectId().toString()
    const position = typeof lastRecord?.position === "number" ? lastRecord.position + 1 : 0
    const result = await collection.insertOne({ routeKey, recordKey, position, data: dataResult.data })

    return NextResponse.json({ id: result.insertedId.toString(), recordKey, position }, { status: 201 })
  } catch (error) {
    console.error("CREATE_ADMIN_ROUTE_DATA_ERROR:", error)
    return NextResponse.json({ message: "রেকর্ড যোগ করা যায়নি।" }, { status: 500 })
  }
}
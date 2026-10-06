import { auth } from "@/auth";
import clientPromise, { getMongoDatabase } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "admin") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  const { id } = await params;
  if (!ObjectId.isValid(id)) {
    return NextResponse.json({ message: "Invalid submission ID" }, { status: 400 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  const status = (body as { status?: unknown })?.status;
  if (status !== "approved" && status !== "rejected") {
    return NextResponse.json({ message: "Invalid submission status" }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const result = await getMongoDatabase(client).collection("submissions").updateOne(
      { _id: new ObjectId(id) },
      { $set: { status, reviewedAt: new Date(), reviewedBy: session.user.id } }
    );

    if (!result.matchedCount) {
      return NextResponse.json({ message: "Submission not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Submission updated", status });
  } catch (error) {
    console.error("UPDATE_SUBMISSION_ERROR:", error);
    return NextResponse.json({ message: "Failed to update submission" }, { status: 500 });
  }
}
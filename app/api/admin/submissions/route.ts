import { auth } from "@/auth";
import clientPromise, { getMongoDatabase } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "admin") {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  try {
    const client = await clientPromise;
    const submissions = await getMongoDatabase(client)
      .collection("submissions")
      .find({}, { projection: { imageData: 0 } })
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json(submissions.map((submission) => ({
      ...submission,
      _id: submission._id.toString(),
      createdAt: submission.createdAt.toISOString(),
    })));
  } catch (error) {
    console.error("GET_ADMIN_SUBMISSIONS_ERROR:", error);
    return NextResponse.json({ message: "Failed to fetch submissions" }, { status: 500 });
  }
}
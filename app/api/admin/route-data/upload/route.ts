import { auth } from "@/auth"
import { v2 as cloudinary } from "cloudinary"
import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const session = await auth()

  if (!session?.user) {
    return NextResponse.json({ message: "অনুমতি নেই। লগইন করুন।" }, { status: 401 })
  }

  if (session.user.role !== "admin") {
    return NextResponse.json({ message: "এই কাজের অনুমতি নেই।" }, { status: 403 })
  }

  try {
    const formData = await request.formData()
    const image = formData.get("image")

    if (!(image instanceof File)
      || !["image/png", "image/jpeg", "image/webp"].includes(image.type)
      || image.size > 5 * 1024 * 1024) {
      return NextResponse.json({ message: "৫ এমবির মধ্যে PNG, JPG বা WEBP ছবি দিন।" }, { status: 400 })
    }

    const cloudName = process.env.CLOUDINARY_CLOUD_NAME
    const apiKey = process.env.CLOUDINARY_API_KEY
    const apiSecret = process.env.CLOUDINARY_API_SECRET
    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json({ message: "Cloudinary সেটআপ করা নেই।" }, { status: 503 })
    }

    cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret })
    const buffer = Buffer.from(await image.arrayBuffer())
    const imageUrl = await new Promise<string>((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "nalitabari/routes", resource_type: "image" },
        (error, uploadedImage) => {
          if (error || !uploadedImage) {
            reject(error ?? new Error("Cloudinary upload returned no image."))
            return
          }
          resolve(uploadedImage.secure_url)
        }
      ).end(buffer)
    })

    return NextResponse.json({ imageUrl })
  } catch (error) {
    console.error("UPLOAD_ADMIN_ROUTE_IMAGE_ERROR:", error)
    return NextResponse.json({ message: "ছবি আপলোড করা যায়নি।" }, { status: 500 })
  }
}
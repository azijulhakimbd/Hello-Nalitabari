import { NextResponse } from "next/server"

import { getRouteData } from "@/lib/route-data"
import { isRouteDataKey } from "@/lib/route-data-keys"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ routeKey: string }> }
) {
  const { routeKey } = await params

  if (!isRouteDataKey(routeKey)) {
    return NextResponse.json({ message: "Unknown route data" }, { status: 404 })
  }

  try {
    const data = await getRouteData(routeKey)
    return NextResponse.json({ data })
  } catch (error) {
    console.error("GET_ROUTE_DATA_ERROR:", routeKey, error)
    return NextResponse.json({ message: "Failed to load route data" }, { status: 500 })
  }
}
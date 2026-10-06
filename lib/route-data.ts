import clientPromise, { getMongoDatabase } from "@/lib/mongodb"
import type { RouteDataKey } from "@/lib/route-data-keys"

type RouteDataDocument<T> = {
  routeKey: RouteDataKey
  recordKey: string
  position: number
  data: T
}

export async function getRouteData<T>(routeKey: RouteDataKey): Promise<T[]> {
  const client = await clientPromise
  const records = await getMongoDatabase(client)
    .collection<RouteDataDocument<T>>("routeData")
    .find({ routeKey })
    .sort({ position: 1 })
    .toArray()

  return records.map((record) => record.data)
}
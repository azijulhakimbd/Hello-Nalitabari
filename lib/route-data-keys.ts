export const ROUTE_DATA_KEYS = [
  "businesses",
  "colleges",
  "communities",
  "directory-categories",
  "directory-emergency-services",
  "directory-popular",
  "education-institutions",
  "emergency-services",
  "emergency-quick-numbers",
  "events",
  "government-services",
  "government-offices",
  "health-categories",
  "health-facilities",
  "hospitals",
  "notices",
  "pharmacies",
  "places",
  "place-details",
  "schools",
  "transports",
  "unions",
  "doctors",
] as const

export type RouteDataKey = (typeof ROUTE_DATA_KEYS)[number]

export function isRouteDataKey(value: string): value is RouteDataKey {
  return ROUTE_DATA_KEYS.includes(value as RouteDataKey)
}
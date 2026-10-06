"use client"

import { useEffect, useState } from "react"

import type { RouteDataKey } from "@/lib/route-data-keys"

export function useRouteData<T>(routeKey: RouteDataKey) {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    let active = true

    async function load() {
      try {
        const response = await fetch(`/api/route-data/${routeKey}`)
        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.message || "Failed to load data")
        }

        if (active) setData(result.data)
      } catch (loadError) {
        if (active) {
          setError(loadError instanceof Error ? loadError.message : "Failed to load data")
        }
      } finally {
        if (active) setLoading(false)
      }
    }

    load()
    return () => {
      active = false
    }
  }, [routeKey])

  return { data, loading, error }
}
import { readFile } from "node:fs/promises"
import path from "node:path"

import nextEnv from "@next/env"
import { MongoClient } from "mongodb"

const { loadEnvConfig } = nextEnv
const MONGODB_DATABASE = "Nalitabari-portal"

loadEnvConfig(process.cwd())

const seedFile = path.join(process.cwd(), "data/route-data-seed.json")
const extracted = JSON.parse(await readFile(seedFile, "utf8"))

for (const dataset of extracted) {
  console.log(`${dataset.routeKey}: ${dataset.records.length} records`)
}

if (process.argv.includes("--dry-run")) {
  console.log("Dry run complete; MongoDB was not modified.")
  process.exit(0)
}

const uri = process.env.MONGODB_URI
if (!uri) throw new Error("MONGODB_URI is not configured")

const client = new MongoClient(uri)
try {
  await client.connect()
  const collection = client.db(MONGODB_DATABASE).collection("routeData")
  await collection.createIndex({ routeKey: 1, recordKey: 1 }, { unique: true })

  let inserted = 0
  for (const dataset of extracted) {
    const operations = dataset.records.map((record, position) => {
      const value = record?.[dataset.keyField] ?? record?.name ?? record?.title ?? position
      return {
        updateOne: {
          filter: { routeKey: dataset.routeKey, recordKey: String(value) },
          update: {
            $setOnInsert: {
              routeKey: dataset.routeKey,
              recordKey: String(value),
              position,
              data: record,
              seededAt: new Date(),
            },
          },
          upsert: true,
        },
      }
    })

    if (operations.length > 0) {
      const result = await collection.bulkWrite(operations, { ordered: false })
      inserted += result.upsertedCount
    }
  }

  console.log(`Seed complete. Inserted ${inserted} records into ${MONGODB_DATABASE}.routeData.`)
} finally {
  await client.close()
}
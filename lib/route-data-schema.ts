import { z } from "zod"

export const routeDataRecordSchema = z.record(z.string(), z.unknown())
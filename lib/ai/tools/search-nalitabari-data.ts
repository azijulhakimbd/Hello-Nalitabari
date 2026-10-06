import { z } from "zod";
import { getRouteData } from "@/lib/route-data";
import type { RouteDataKey } from "@/lib/route-data-keys";

export const searchNalitabariDataSchema = z.object({
  category: z.enum([
    "hospitals",
    "schools",
    "colleges",
    "businesses",
    "places",
    "notices",
  ]).describe("The type of Nalitabari information to search"),

  query: z
    .string()
    .min(1)
    .max(100)
    .describe("The user's search query"),
});

export type SearchNalitabariDataInput = z.infer<
  typeof searchNalitabariDataSchema
>;

const routeKeys: Record<SearchNalitabariDataInput["category"], RouteDataKey> = {
  hospitals: "hospitals",
  schools: "schools",
  colleges: "colleges",
  businesses: "businesses",
  places: "places",
  notices: "notices",
};

export interface NalitabariSearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  location?: string;
}

export async function executeSearchNalitabariData(
  input: SearchNalitabariDataInput,
): Promise<NalitabariSearchResult[]> {
  const { category, query } = input;
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const records = await getRouteData<Record<string, unknown>>(routeKeys[category]);

  return records.flatMap((record): NalitabariSearchResult[] => {
    const title = textValue(record.name ?? record.title ?? record.englishName);
    const description = textValue(record.description ?? record.details ?? record.address);
    const location = textValue(record.location ?? record.address);
    const searchableText = `${title} ${description} ${location}`.toLocaleLowerCase();

    if (!searchableText.includes(normalizedQuery)) return [];

    return [{
      id: textValue(record.id ?? record.slug ?? title),
      title,
      description,
      category,
      location: location || undefined,
    }];
  });
}

function textValue(value: unknown): string {
  return typeof value === "string" || typeof value === "number" ? String(value) : "";
}
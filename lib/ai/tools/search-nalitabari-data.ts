import { z } from "zod";

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

  // Replace this with Prisma/database queries later.
  const demoData: NalitabariSearchResult[] = [
    {
      id: "1",
      title: "Nalitabari Upazila Health Complex",
      description: "A healthcare facility serving the Nalitabari area.",
      category: "hospitals",
      location: "Nalitabari, Sherpur",
    },
    {
      id: "2",
      title: "Nalitabari Model High School",
      description: "An educational institution in Nalitabari.",
      category: "schools",
      location: "Nalitabari, Sherpur",
    },
  ];

  const normalizedQuery = query.toLowerCase();

  return demoData.filter((item) => {
    const matchesCategory = item.category === category;

    const matchesQuery =
      item.title.toLowerCase().includes(normalizedQuery) ||
      item.description.toLowerCase().includes(normalizedQuery) ||
      item.location?.toLowerCase().includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}
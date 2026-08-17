import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, tool } from "ai";
import { z } from "zod";

import {
  executeSearchNalitabariData,
  searchNalitabariDataSchema,
} from "@/lib/ai/tools/search-nalitabari-data";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),

    system: `
You are an AI assistant for the Nalitabari information portal.

Use the searchNalitabariData tool when the user asks
for specific information about hospitals, schools, colleges,
businesses, tourist places, or notices.

Do not invent directory information.
If the tool returns no results, clearly tell the user.
`,

    messages: await convertToModelMessages(messages),

    tools: {
      searchNalitabariData: tool({
        description:
          "Search structured information from the Nalitabari portal.",

        inputSchema: searchNalitabariDataSchema,

        execute: executeSearchNalitabariData,
      }),
    },

    stopWhen: ({ steps }) => steps.length >= 3,
  });

  return result.toUIMessageStreamResponse();
}
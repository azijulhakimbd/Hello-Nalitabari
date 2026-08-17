import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, tool } from "ai";

import {
  executeSearchNalitabariData,
  searchNalitabariDataSchema,
} from "@/lib/ai/tools/search-nalitabari-data";

export async function POST(req: Request) {
  const { messages } = await req.json();

  /*
   * FE-08 TEST: 429 Rate Limit
   *
   * .env.local:
   * AI_TEST_429=true
   */
  if (process.env.AI_TEST_429 === "true") {
    return new Response(
      JSON.stringify({
        error: "Too many requests",
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  /*
   * FE-08 TEST: Route-level error
   *
   * .env.local:
   * AI_TEST_ROUTE_ERROR=true
   */
  if (process.env.AI_TEST_ROUTE_ERROR === "true") {
    throw new Error("FE-08 simulated route error");
  }

  /*
   * Validate request
   */
  if (!Array.isArray(messages)) {
    return new Response(
      JSON.stringify({
        error: "Invalid messages payload",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  try {
    const result = streamText({
      model: openai("gpt-4o-mini"),

      system: `
You are an AI assistant for the Nalitabari information portal.

Use the searchNalitabariData tool when the user asks
for specific information about hospitals, schools, colleges,
businesses, tourist places, or notices.

Do not invent directory information.

If the tool returns no results, clearly tell the user.

Always prefer information returned by the search tool
over general knowledge when the question is about Nalitabari.
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

    /*
     * Normal production response
     */
    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("AI chat route error:", error);

    return new Response(
      JSON.stringify({
        error: "AI service temporarily unavailable",
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
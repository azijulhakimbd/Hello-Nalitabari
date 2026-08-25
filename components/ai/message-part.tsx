"use client";

import type { UIMessage } from "ai";

type SearchInput = {
  category: string;
  query: string;
};

type SearchResult = {
  id: string;
  title: string;
  description: string;
  category: string;
  location?: string;
};

type MessagePartProps = {
  part: UIMessage["parts"][number];
};

export function MessagePart({ part }: MessagePartProps) {
  /*
   * Normal AI text
   */
  if (part.type === "text") {
    return (
      <p className="whitespace-pre-wrap leading-7 text-sm">
        {part.text}
      </p>
    );
  }

  /*
   * searchNalitabariData tool
   *
   * The tool has four UI states:
   *
   * 1. input-streaming
   * 2. input-available
   * 3. output-available
   * 4. output-error
   */
  if (part.type === "tool-searchNalitabariData") {
    switch (part.state) {
      /*
       * STEP 7
       * Tool input is still being generated.
       */
      case "input-streaming":
        return <ToolInputStreaming />;

      /*
       * STEP 8
       * Tool input has been completely generated.
       */
      case "input-available":
        return (
          <ToolInputAvailable
            input={part.input as SearchInput}
          />
        );

      /*
       * STEP 9
       * Tool successfully returned structured data.
       */
      case "output-available":
        return (
          <ToolOutputAvailable
            output={part.output as SearchResult[]}
          />
        );

      /*
       * STEP 10
       * Tool execution failed.
       */
      case "output-error":
        return (
          <ToolOutputError
            errorText={part.errorText}
          />
        );

      default:
        return null;
    }
  }

  return null;
}

/* 
   STEP 7
   INPUT STREAMING
    */

function ToolInputStreaming() {
  return (
    <div className="my-3 rounded-xl border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/40">
      <div className="flex items-center gap-3">
        {/* Animated indicator */}
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
          <div className="h-3 w-3 animate-pulse rounded-full bg-blue-600" />
        </div>

        <div className="min-w-0">
          <p className="font-semibold text-blue-900 dark:text-blue-100">
            Preparing search
          </p>

          <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
            The AI is preparing the search request...
          </p>
        </div>
      </div>
    </div>
  );
}

/* 
   STEP 8
   INPUT AVAILABLE
    */

function ToolInputAvailable({
  input,
}: {
  input: SearchInput;
}) {
  return (
    <div className="my-3 rounded-xl border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950/40">
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300">
          🔎
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-semibold text-amber-900 dark:text-amber-100">
            Search request ready
          </p>

          <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
            The AI is searching the Nalitabari information portal.
          </p>

          {/* Search parameters */}
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <div className="rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-amber-950/30">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Category
              </p>

              <p className="mt-1 font-medium text-foreground">
                {formatCategory(input.category)}
              </p>
            </div>

            <div className="rounded-lg border border-amber-200 bg-white p-3 dark:border-amber-800 dark:bg-amber-800/20">
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Query
              </p>

              <p className="mt-1 font-medium text-foreground">
                {input.query}
              </p>
            </div>
          </div>

          {/* Status */}
          <div className="mt-3 flex items-center gap-2 text-xs text-amber-700 dark:text-amber-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />

            Searching...
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
   STEP 9
   OUTPUT AVAILABLE
    */

function ToolOutputAvailable({
  output,
}: {
  output: SearchResult[];
}) {
  /*
   * Empty result
   */
  if (!output || output.length === 0) {
    return (
      <div className="my-3 rounded-xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
            🔍
          </div>

          <div>
            <p className="font-semibold">
              No results found
            </p>

            <p className="mt-1 text-sm text-muted-foreground">
              We couldn't find matching information in the
              Nalitabari portal.
            </p>
          </div>
        </div>
      </div>
    );
  }

  /*
   * Successful result
   */
  return (
    <div className="my-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900 dark:bg-emerald-950/40">
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
            ✓
          </div>

          <div>
            <p className="font-semibold text-emerald-900 dark:text-emerald-100">
              Search completed
            </p>

            <p className="mt-1 text-sm text-emerald-700 dark:text-emerald-300">
              {output.length}{" "}
              {output.length === 1 ? "result" : "results"} found
            </p>
          </div>
        </div>

        {/* Result count */}
        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
          {output.length}
        </span>
      </div>

      {/* Results */}
      <div className="mt-4 grid gap-3">
        {output.map((item) => (
          <SearchResultCard
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}

/* 
   RESULT CARD
    */

function SearchResultCard({
  item,
}: {
  item: SearchResult;
}) {
  return (
    <article className="rounded-xl border border-emerald-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-emerald-900 dark:bg-slate-950">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-semibold text-foreground">
            {item.title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            {item.description}
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
          {formatCategory(item.category)}
        </span>
      </div>

      {/* Location */}
      {item.location && (
        <div className="mt-3 flex items-center gap-2 border-t pt-3 text-sm text-muted-foreground">
          <span>📍</span>

          <span>{item.location}</span>
        </div>
      )}
    </article>
  );
}

/* 
   STEP 10
   OUTPUT ERROR
    */

function ToolOutputError({
  errorText,
}: {
  errorText?: string;
}) {
  return (
    <div className="my-3 rounded-xl border border-red-200 bg-red-50 p-4 dark:border-red-900 dark:bg-red-950/40">
      <div className="flex items-start gap-3">
        {/* Error icon */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 font-bold text-red-700 dark:bg-red-900 dark:text-red-300">
          !
        </div>

        <div className="min-w-0">
          <p className="font-semibold text-red-900 dark:text-red-100">
            Search failed
          </p>

          <p className="mt-1 text-sm leading-6 text-red-700 dark:text-red-300">
            {errorText ||
              "The information could not be retrieved right now."}
          </p>

          <div className="mt-3 rounded-lg border border-red-200 bg-white/70 p-3 text-xs text-red-700 dark:border-red-900 dark:bg-red-950/30 dark:text-red-300">
            Please try your request again. If the problem
            continues, the data service may be temporarily
            unavailable.
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
   HELPERS
    */

function formatCategory(category: string) {
  const categories: Record<string, string> = {
    hospitals: "Hospitals",
    schools: "Schools",
    colleges: "Colleges",
    businesses: "Businesses",
    places: "Tourist Places",
    notices: "Notices",
  };

  return categories[category] ?? category;
}
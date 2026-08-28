import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ExternalLink,
  Newspaper,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { getNalitabariNews } from "@/lib/google-news";

function formatNewsDate(date: string) {
  if (!date) {
    return "তারিখ নেই";
  }

  try {
    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "তারিখ নেই";
    }

    return new Intl.DateTimeFormat("bn-BD", {
      dateStyle: "medium",
    }).format(parsedDate);
  } catch {
    return "তারিখ নেই";
  }
}

export async function LatestNews() {
  const news = await getNalitabariNews({
    limit: 6,
  });

  return (
    <section
      aria-labelledby="latest-news-title"
      className="border-t bg-muted/30 py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge
              variant="secondary"
              className="mb-3 gap-2"
            >
              <Newspaper className="h-4 w-4" />
              সর্বশেষ সংবাদ
            </Badge>

            <h2
              id="latest-news-title"
              className="text-3xl font-black tracking-tight md:text-4xl"
            >
              নালিতাবাড়ীর সর্বশেষ সংবাদ
            </h2>

            <p className="mt-2 max-w-2xl text-muted-foreground">
              নালিতাবাড়ী ও আশেপাশের এলাকার সর্বশেষ সংবাদ ও খবর।
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="w-fit gap-2"
          >
            <Link href="/news">
              সব সংবাদ
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* News */}
        {news.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {news.map((item) => {
              const source =
                typeof item.source === "string" &&
                item.source.trim()
                  ? item.source
                  : "Google News";

              return (
                <Card
                  key={item.id}
                  className="group overflow-hidden border-border/60 bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Emoji News Cover */}
                  <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-background to-emerald-100 dark:from-emerald-950/40 dark:via-background dark:to-emerald-900/30">
                    {/* Decorative background */}
                    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />
                    <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-2xl" />

                    {/* Emoji */}
                    <div className="relative flex flex-col items-center justify-center">
                      <span
                        className="text-7xl drop-shadow-md transition-transform duration-500 group-hover:scale-110 md:text-8xl"
                        role="img"
                        aria-label="সংবাদ"
                      >
                        📰
                      </span>

                      <span className="mt-2 text-xs font-semibold uppercase tracking-widest text-emerald-600/70">
                        Nalitabari News
                      </span>
                    </div>

                    {/* Source Badge */}
                    <Badge
                      className="absolute left-3 top-3 max-w-[80%] truncate bg-emerald-600 text-white shadow-md hover:bg-emerald-600"
                    >
                      {source}
                    </Badge>
                  </div>

                  {/* Content */}
                  <CardContent className="flex min-h-[215px] flex-col p-5">
                    {/* Title */}
                    <h3 className="line-clamp-3 text-lg font-bold leading-relaxed transition-colors group-hover:text-emerald-600">
                      {item.title}
                    </h3>

                    <div className="mt-auto pt-5">
                      {/* Meta */}
                      <div className="mb-4 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                        <span
                          className="line-clamp-1 min-w-0"
                          title={source}
                        >
                          {source}
                        </span>

                        <span className="flex shrink-0 items-center gap-1">
                          <CalendarDays className="h-3.5 w-3.5" />

                          {formatNewsDate(
                            item.publishedAt,
                          )}
                        </span>
                      </div>

                      {/* Read More */}
                      {item.link &&
                      item.link !== "#" ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          referrerPolicy="no-referrer"
                          aria-label={`${item.title} - বিস্তারিত পড়ুন`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 hover:underline"
                        >
                          বিস্তারিত পড়ুন

                          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          বিস্তারিত তথ্য পাওয়া যায়নি
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border bg-background py-16 text-center">
            <div
              className="text-6xl"
              role="img"
              aria-label="কোনো সংবাদ নেই"
            >
              📰
            </div>

            <h3 className="mt-4 text-lg font-bold">
              বর্তমানে কোনো সংবাদ পাওয়া যায়নি
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              নতুন সংবাদ পাওয়া গেলে এখানে দেখানো হবে।
            </p>

            <Button
              asChild
              variant="outline"
              className="mt-6 gap-2"
            >
              <Link href="/news">
                সংবাদ পেজ দেখুন
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}

        {/* More */}
        {news.length > 0 && (
          <div className="mt-10 text-center">
            <Button
              asChild
              size="lg"
              className="gap-2"
            >
              <Link href="/news">
                আরও সব সংবাদ দেখুন
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
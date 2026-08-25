"use client"

import * as React from "react"
import {
  CalendarDays,
  ExternalLink,
  MapPin,
  Newspaper,
  RefreshCw,
  Search,
  X,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

/*  ======
   TYPES
 ====== */

type NewsCategory =
  | "স্থানীয় খবর"
  | "দুর্যোগ"
  | "বন্যা"
  | "যোগাযোগ"
  | "সড়ক দুর্ঘটনা"
  | "অন্যান্য"

type NewsItem = {
  id: string
  title: string
  excerpt: string
  date: string
  category: NewsCategory
  source: string
  sourceUrl: string
  location: string
  image?: string
  featured?: boolean

  // Google News fields
  link?: string
  originalLink?: string
  publishedAt?: string
  guid?: string
}

type NewsResponse = {
  success: boolean
  news: NewsItem[]
  count: number
  message?: string
  updatedAt?: string
}

/*  ======
   CONSTANTS
 ====== */

const categories = [
  "সব",
  "স্থানীয় খবর",
  "দুর্যোগ",
  "বন্যা",
  "যোগাযোগ",
  "সড়ক দুর্ঘটনা",
] as const

const FALLBACK_IMAGE =
  "/images/news-placeholder.jpg"

/*  ======
   DATE HELPERS
 ====== */

function formatDate(date: string) {
  if (!date) {
    return "তারিখ পাওয়া যায়নি"
  }

  const parsed = new Date(date)

  if (Number.isNaN(parsed.getTime())) {
    return "তারিখ পাওয়া যায়নি"
  }

  return new Intl.DateTimeFormat(
    "bn-BD",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    },
  ).format(parsed)
}

function formatRelativeDate(date: string) {
  if (!date) return ""

  const parsed = new Date(date)

  if (Number.isNaN(parsed.getTime())) {
    return ""
  }

  const diff =
    Date.now() - parsed.getTime()

  // Future article/date.
  if (diff < 0) {
    return ""
  }

  const minutes = Math.floor(
    diff / 1000 / 60,
  )

  if (minutes < 1) {
    return "এইমাত্র"
  }

  if (minutes < 60) {
    return `${minutes} মিনিট আগে`
  }

  const hours = Math.floor(
    minutes / 60,
  )

  if (hours < 24) {
    return `${hours} ঘণ্টা আগে`
  }

  const days = Math.floor(
    hours / 24,
  )

  if (days < 7) {
    return `${days} দিন আগে`
  }

  return ""
}

/*  ======
   URL HELPERS
 ====== */

function getArticleUrl(
  item: NewsItem,
) {
  const candidates = [
    item.link,
    item.originalLink,
  ]

  for (const value of candidates) {
    if (!value) continue

    try {
      const url = new URL(value)

      if (
        url.protocol === "http:" ||
        url.protocol === "https:"
      ) {
        return url.toString()
      }
    } catch {
      continue
    }
  }

  return ""
}

function getSourceHostname(
  sourceUrl: string,
) {
  if (!sourceUrl) return ""

  try {
    return new URL(
      sourceUrl,
    ).hostname.replace(
      /^www\./,
      "",
    )
  } catch {
    return ""
  }
}

/*  ======
   NEWS CARD
 ====== */

function NewsCard({
  item,
}: {
  item: NewsItem
}) {
  const [imageError, setImageError] =
    React.useState(false)

  const articleUrl =
    getArticleUrl(item)

  const hostname =
    getSourceHostname(
      item.sourceUrl,
    )

  const relativeDate =
    formatRelativeDate(
      item.publishedAt ||
        item.date,
    )

  const image =
    item.image &&
    item.image.trim() !== ""
      ? item.image
      : FALLBACK_IMAGE

  return (
    <Card className="group h-full overflow-hidden rounded-2xl border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex h-full flex-col p-0">
        {/* =================================================
            IMAGE
        ================================================= */}

        <div className="relative h-52 overflow-hidden bg-muted sm:h-56">
          {!imageError && image ? (
            <img
              src={image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              decoding="async"
              onError={() =>
                setImageError(true)
              }
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-600/15 via-green-500/10 to-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                <Newspaper className="h-8 w-8" />
              </div>
            </div>
          )}

          {/* Image overlay */}

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          {/* Featured badge */}

          {item.featured && (
            <Badge className="absolute left-4 top-4 border-0 bg-emerald-600 text-white shadow-lg">
              সর্বশেষ
            </Badge>
          )}

          {/* Source badge */}

          {item.source && (
            <div className="absolute bottom-3 left-3 max-w-[80%]">
              <span className="inline-flex max-w-full truncate rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                {item.source}
              </span>
            </div>
          )}
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          {/* Category + Source */}

          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="secondary"
              className="rounded-full font-normal"
            >
              {item.category}
            </Badge>

            {hostname && (
              <span className="max-w-[180px] truncate text-xs text-muted-foreground">
                {hostname}
              </span>
            )}
          </div>

          {/* Title */}

          <h2 className="mt-4 line-clamp-3 text-lg font-bold leading-8 tracking-tight sm:text-xl">
            {item.title}
          </h2>

          {/* Excerpt */}

          {item.excerpt && (
            <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
              {item.excerpt}
            </p>
          )}

          {/* Metadata */}

          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

              <span className="min-w-0">
                {formatDate(
                  item.publishedAt ||
                    item.date,
                )}

                {relativeDate && (
                  <>
                    <span
                      className="mx-2"
                      aria-hidden="true"
                    >
                      •
                    </span>

                    <span className="text-emerald-600">
                      {relativeDate}
                    </span>
                  </>
                )}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-emerald-600" />

              <span className="line-clamp-1">
                {item.location ||
                  "নালিতাবাড়ী"}
              </span>
            </div>
          </div>

          {/* CTA */}

          <div className="mt-auto pt-6">
            {articleUrl ? (
              <Button
                asChild
                variant="outline"
                className="w-full rounded-xl transition-colors group-hover:border-emerald-600 group-hover:text-emerald-600"
              >
                <a
                  href={articleUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  aria-label={`${item.title} — মূল সংবাদ পড়ুন`}
                >
                  মূল সংবাদ পড়ুন

                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            ) : (
              <Button
                disabled
                variant="outline"
                className="w-full rounded-xl"
              >
                সংবাদ লিংক পাওয়া যায়নি
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/*  ======
   SKELETON
 ====== */

function NewsSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({
        length: 6,
      }).map((_, index) => (
        <Card
          key={index}
          className="overflow-hidden rounded-2xl"
        >
          <div className="h-52 animate-pulse bg-muted sm:h-56" />

          <div className="space-y-4 p-6">
            <div className="h-4 w-24 animate-pulse rounded bg-muted" />

            <div className="h-6 w-full animate-pulse rounded bg-muted" />

            <div className="h-6 w-4/5 animate-pulse rounded bg-muted" />

            <div className="h-4 w-full animate-pulse rounded bg-muted" />

            <div className="h-4 w-32 animate-pulse rounded bg-muted" />

            <div className="h-10 w-full animate-pulse rounded-xl bg-muted" />
          </div>
        </Card>
      ))}
    </div>
  )
}

/*  ======
   EMPTY STATE
 ====== */

function EmptyState({
  onClear,
}: {
  onClear: () => void
}) {
  return (
    <div className="rounded-3xl border border-dashed p-8 text-center sm:p-12">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <Search className="h-7 w-7 text-muted-foreground" />
      </div>

      <h3 className="mt-5 text-xl font-bold">
        কোনো সংবাদ পাওয়া যায়নি
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-muted-foreground">
        অন্য কোনো শব্দ বা ক্যাটাগরি
        দিয়ে অনুসন্ধান করুন।
      </p>

      <Button
        onClick={onClear}
        variant="outline"
        className="mt-6 rounded-xl"
      >
        ফিল্টার পরিষ্কার করুন
      </Button>
    </div>
  )
}

/*  ======
   ERROR STATE
 ====== */

function ErrorState({
  message,
  onRetry,
}: {
  message: string
  onRetry: () => void
}) {
  return (
    <div className="rounded-3xl border border-dashed p-8 text-center sm:p-12">
      <Newspaper className="mx-auto h-10 w-10 text-muted-foreground" />

      <h3 className="mt-5 text-xl font-bold">
        সংবাদ লোড করা যায়নি
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-muted-foreground">
        {message}
      </p>

      <Button
        onClick={onRetry}
        className="mt-6 rounded-xl bg-emerald-600 hover:bg-emerald-700"
      >
        আবার চেষ্টা করুন
      </Button>
    </div>
  )
}

/*  ======
   MAIN PAGE
 ====== */

export default function NewsPage() {
  const [news, setNews] =
    React.useState<NewsItem[]>([])

  const [search, setSearch] =
    React.useState("")

  const [category, setCategory] =
    React.useState<
      (typeof categories)[number]
    >("সব")

  const [loading, setLoading] =
    React.useState(true)

  const [refreshing, setRefreshing] =
    React.useState(false)

  const [error, setError] =
    React.useState("")

  const [updatedAt, setUpdatedAt] =
    React.useState("")

  /*  ====
     LOAD NEWS
   ==== */

  const loadNews = React.useCallback(
    async (manual = false) => {
      try {
        if (manual) {
          setRefreshing(true)
        } else {
          setLoading(true)
        }

        setError("")

        const response =
          await fetch(
            "/api/news",
            {
              method: "GET",
              cache: "no-store",
              headers: {
                Accept:
                  "application/json",
              },
            },
          )

        if (!response.ok) {
          throw new Error(
            `News request failed: ${response.status}`,
          )
        }

        const data: NewsResponse =
          await response.json()

        if (
          !data.success ||
          !Array.isArray(data.news)
        ) {
          throw new Error(
            data.message ||
              "সংবাদ পাওয়া যায়নি",
          )
        }

        setNews(data.news)

        if (data.updatedAt) {
          setUpdatedAt(
            data.updatedAt,
          )
        } else {
          setUpdatedAt(
            new Date().toISOString(),
          )
        }
      } catch (error) {
        console.error(
          "News loading error:",
          error,
        )

        setError(
          "সর্বশেষ সংবাদ লোড করা সম্ভব হয়নি। কিছুক্ষণ পর আবার চেষ্টা করুন।",
        )
      } finally {
        setLoading(false)
        setRefreshing(false)
      }
    },
    [],
  )

  /*  ====
     INITIAL LOAD
   ==== */

  React.useEffect(() => {
    void loadNews()
  }, [loadNews])

  /*  ====
     FILTER
   ==== */

  const filteredNews =
    React.useMemo(() => {
      const query = search
        .trim()
        .toLocaleLowerCase(
          "bn-BD",
        )

      return news.filter((item) => {
        const matchesCategory =
          category === "সব" ||
          item.category === category

        if (!query) {
          return matchesCategory
        }

        const searchableText = [
          item.title,
          item.excerpt,
          item.source,
          item.location,
          item.category,
        ]
          .filter(Boolean)
          .join(" ")
          .toLocaleLowerCase(
            "bn-BD",
          )

        return (
          matchesCategory &&
          searchableText.includes(
            query,
          )
        )
      })
    }, [
      news,
      search,
      category,
    ])

  /*  ====
     CLEAR FILTERS
   ==== */

  const clearFilters =
    React.useCallback(() => {
      setSearch("")
      setCategory("সব")
    }, [])

  /*  ====
     FORMATTED UPDATED TIME
   ==== */

  const formattedUpdatedAt =
    React.useMemo(() => {
      if (!updatedAt) return ""

      const parsed =
        new Date(updatedAt)

      if (
        Number.isNaN(
          parsed.getTime(),
        )
      ) {
        return ""
      }

      return new Intl.DateTimeFormat(
        "bn-BD",
        {
          hour: "numeric",
          minute: "2-digit",
        },
      ).format(parsed)
    }, [updatedAt])

  /*  ====
     UI
   ==== */

  return (
    <main className="min-h-screen bg-background">
      {/*  
          HERO
        */}

      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-background to-green-500/5" />

        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

        <div className="container relative mx-auto px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-4 py-2 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-400">
              <Newspaper className="mr-2 h-4 w-4" />

              নালিতাবাড়ী সংবাদ
            </Badge>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              নালিতাবাড়ীর{" "}
              <span className="text-emerald-600">
                সর্বশেষ খবর
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              নালিতাবাড়ী উপজেলা ও আশপাশের
              এলাকার সাম্প্রতিক গুরুত্বপূর্ণ
              খবর বিভিন্ন সংবাদমাধ্যম থেকে
              এক জায়গায়।
            </p>

            {/* Search */}

            <div className="mx-auto mt-8 max-w-2xl sm:mt-10">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <Input
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target.value,
                    )
                  }
                  placeholder="খবরের শিরোনাম বা বিষয় খুঁজুন..."
                  className="h-14 rounded-2xl bg-background pl-12 pr-12 text-base shadow-lg"
                  aria-label="খবর অনুসন্ধান"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() =>
                      setSearch("")
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    aria-label="অনুসন্ধান মুছে ফেলুন"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  
          CATEGORY FILTER
        */}

      <section className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-5 sm:px-6 lg:px-8">
          <div
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin"
            role="tablist"
            aria-label="সংবাদ ক্যাটাগরি"
          >
            {categories.map(
              (item) => {
                const active =
                  category === item

                return (
                  <Button
                    key={item}
                    type="button"
                    variant={
                      active
                        ? "default"
                        : "outline"
                    }
                    onClick={() =>
                      setCategory(item)
                    }
                    className={`shrink-0 rounded-full ${
                      active
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : "bg-background"
                    }`}
                    aria-pressed={
                      active
                    }
                    role="tab"
                    aria-selected={
                      active
                    }
                  >
                    {item}
                  </Button>
                )
              },
            )}
          </div>
        </div>
      </section>

      {/*  
          NEWS
        */}

      <section className="container mx-auto px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        {/* Header */}

        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold text-emerald-600">
              Google News
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              সর্বশেষ সংবাদ
            </h2>

            {!loading &&
              !error && (
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                  <span>
                    মোট{" "}
                    <span className="font-semibold text-foreground">
                      {
                        filteredNews.length
                      }
                    </span>{" "}
                    টি সংবাদ
                  </span>

                  {formattedUpdatedAt && (
                    <>
                      <span aria-hidden="true">
                        •
                      </span>

                      <span>
                        আপডেট{" "}
                        {
                          formattedUpdatedAt
                        }
                    </span>
                  </>
                  )}
                </div>
              )}
          </div>

          <Button
            type="button"
            variant="outline"
            onClick={() =>
              void loadNews(true)
            }
            disabled={
              loading ||
              refreshing
            }
            className="w-full rounded-xl sm:w-auto"
          >
            <RefreshCw
              className={`mr-2 h-4 w-4 ${
                refreshing
                  ? "animate-spin"
                  : ""
              }`}
            />

            {refreshing
              ? "আপডেট হচ্ছে..."
              : "সংবাদ আপডেট করুন"}
          </Button>
        </div>

        {/* Loading */}

        {loading && (
          <NewsSkeleton />
        )}

        {/* Error */}

        {!loading && error && (
          <ErrorState
            message={error}
            onRetry={() =>
              void loadNews(true)
            }
          />
        )}

        {/* Results */}

        {!loading &&
          !error &&
          filteredNews.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredNews.map(
                (item) => (
                  <NewsCard
                    key={
                      item.id ||
                      item.guid ||
                      item.title
                    }
                    item={item}
                  />
                ),
              )}
            </div>
          )}

        {/* Empty */}

        {!loading &&
          !error &&
          filteredNews.length ===
            0 && (
            <EmptyState
              onClear={
                clearFilters
              }
            />
          )}
      </section>

      {/*  
          SOURCE NOTICE
        */}

      <section className="border-t bg-muted/20">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-background p-5 sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <Newspaper className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold">
                  সংবাদ উৎস সম্পর্কে
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  এই পেজে Google
                  News-এর মাধ্যমে
                  বিভিন্ন
                  সংবাদমাধ্যমে
                  প্রকাশিত
                  নালিতাবাড়ী ও
                  শেরপুর-সম্পর্কিত
                  সংবাদ দেখানো হয়।
                  সম্পূর্ণ প্রতিবেদন
                  পড়তে{" "}
                  <span className="font-medium text-foreground">
                    “মূল সংবাদ পড়ুন”
                  </span>{" "}
                  বাটনে ক্লিক করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
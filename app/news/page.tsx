"use client"

import * as React from "react"
import {
  CalendarDays,
  ExternalLink,
  MapPin,
  Newspaper,
  Search,
  X,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type NewsItem = {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  source: string
  sourceUrl: string
  location: string
  image?: string
  featured?: boolean
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "পাহাড়ি ঢলে নালিতাবাড়ীর চেল্লাখালী নদীর সেতু ভেসে গেল",
    excerpt:
      "ভারী বৃষ্টি ও উজান থেকে নেমে আসা পাহাড়ি ঢলের তীব্র স্রোতে নালিতাবাড়ী উপজেলার চেল্লাখালী নদীর ওপর একটি স্টিলের সেতু ভেসে যায়।",
    date: "২০ জুলাই ২০২৬",
    category: "দুর্যোগ",
    source: "bdnews24.com",
    sourceUrl: "https://bdnews24.com/bangladesh/1ac0eee84a21",
    image:
      "https://media-stg.assettype.com/bdnews/import/bangla/imgAll/2026July/sherpur-flood-200726-01-1784557420.jpg",
    location: "দক্ষিণ সন্ন্যাসীভিটা, নালিতাবাড়ী",
    featured: true,
  },
  {
    id: 2,
    title: "পাহাড়ি ঢলে নালিতাবাড়ীর নিম্নাঞ্চল প্লাবিত",
    excerpt:
      "টানা বৃষ্টি ও পাহাড়ি ঢলে চেল্লাখালী, ভোগাই ও মহারশি নদীর পানি বেড়ে নালিতাবাড়ীসহ শেরপুরের কয়েকটি নিম্নাঞ্চল প্লাবিত হয়।",
    date: "২০ জুলাই ২০২৬",
    category: "বন্যা",
    source: "আজকের পত্রিকা",
    sourceUrl:
      "https://www.ajkerpatrika.com/amp/bangladesh/sherpur/ajpquknuxrdw1",
    image: "https://images.ajkerpatrika.com/original_images/phr-dhl.jpg",
    location: "নালিতাবাড়ী, শেরপুর",
    featured: true,
  },
  {
    id: 3,
    title: "নালিতাবাড়ীতে সড়ক দুর্ঘটনায় অটোরিকশাচালকসহ নিহত ২",
    excerpt:
      "শেরপুর-নালিতাবাড়ী সড়কের সন্ন্যাসীভিটা এলাকায় একটি সড়ক দুর্ঘটনায় অটোরিকশাচালকসহ দুইজন নিহত হন।",
    date: "১৮ জুলাই ২০২৬",
    category: "সড়ক দুর্ঘটনা",
    source: "বাংলাদেশ সংবাদ সংস্থা (BSS)",
    sourceUrl: "https://www.bssnews.net/district/406744",
    image: "https://www.bssnews.net/assets/news_photos/2026/07/18/image-406744-1784372650.jpg",
    location: "সন্ন্যাসীভিটা, নালিতাবাড়ী",
    featured: true,
  },
  {
    id: 4,
    title: "পাহাড়ি ঢলে শেরপুর-নালিতাবাড়ী সড়কের ৩০ মিটার অংশ বিলীন",
    excerpt:
      "ভারী বৃষ্টি ও পাহাড়ি ঢলের প্রবল স্রোতে শেরপুর-নালিতাবাড়ী-গাজীরখামার সড়কের প্রায় ৩০ মিটার অংশ নদীগর্ভে বিলীন হয়ে যায়।",
    date: "১০ জুলাই ২০২৬",
    category: "যোগাযোগ",
    source: "আজকের পত্রিকা",
    sourceUrl:
      "https://www.ajkerpatrika.com/bangladesh/sherpur/ajppe3tsvmk2h",
    image: "https://images.ajkerpatrika.com/original_images/srpr-02..jpg",
    location: "শেরপুর-নালিতাবাড়ী সড়ক",
  },
  {
    id: 5,
    title: "পাহাড়ি ঢলে সড়ক ভেঙে যোগাযোগ বিচ্ছিন্ন",
    excerpt:
      "নালিতাবাড়ীর পোড়াগাঁও ইউনিয়নে পাহাড়ি ঢলে একটি সড়ক ক্ষতিগ্রস্ত হয়ে বাতকুচি গ্রামের সঙ্গে যোগাযোগে ভোগান্তি তৈরি হয়।",
    date: "২১ জুন ২০২৬",
    category: "যোগাযোগ",
    source: "জাগো নিউজ",
    sourceUrl: "https://www.jagonews24.com/country/news/1130014",
    image: "https://cdn.jagonews24.com/media/imgAllNew/BG/2023March/sherpur-20260621201103.jpg",
    location: "পোড়াগাঁও ইউনিয়ন",
  },
  {
    id: 6,
    title: "নালিতাবাড়ীতে সড়ক সংস্কার ও জলাবদ্ধতা নিরসনের দাবিতে মানববন্ধন",
    excerpt:
      "নিলামপট্টি-সাহাপাড়া এলাকার বেহাল সড়ক সংস্কার ও দীর্ঘদিনের জলাবদ্ধতা সমস্যার স্থায়ী সমাধানের দাবিতে স্থানীয়রা মানববন্ধন করেন।",
    date: "৪ জুন ২০২৬",
    category: "স্থানীয় খবর",
    source: "আজকের পত্রিকা",
    sourceUrl:
      "https://www.ajkerpatrika.com/bangladesh/mymensingh/ajpvia3ly1b1h",
    image: "https://images.ajkerpatrika.com/original_images/srpr-25.jpg",
    location: "নালিতাবাড়ী পৌরসভা",
  },
  {
    id: 7,
    title: "পাহাড়ি ঢলে নালিতাবাড়ীর নিম্নাঞ্চলে বন্যা পরিস্থিতি",
    excerpt:
      "ভারী বৃষ্টিপাত ও উজানের পানিতে নালিতাবাড়ীর নিম্নাঞ্চলের বিভিন্ন এলাকা প্লাবিত হওয়ার খবর পাওয়া যায়।",
    date: "১২ জুন ২০২৬",
    category: "দুর্যোগ",
    source: "The Daily Star",
    sourceUrl:
      "https://www.thedailystar.net/news/bangladesh/news/hill-runoff-floods-low-lying-sherpur-areas-4196666",
    image: "https://www.thedailystar.net/sites/default/files/styles/big_1/public/2026-06/Nalitabari.jpg?h=41c613e6",
    location: "নালিতাবাড়ী, শেরপুর",
  },
]

const categories = [
  "সব",
  "স্থানীয় খবর",
  "দুর্যোগ",
  "বন্যা",
  "যোগাযোগ",
  "সড়ক দুর্ঘটনা",
]

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <Card className="group h-full overflow-hidden rounded-2xl border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex h-full flex-col p-0">
        {/* Image */}
        <div className="relative h-52 overflow-hidden bg-muted">
          {item.image ? (
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-emerald-600/15 via-green-500/10 to-background">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
                <Newspaper className="h-8 w-8" />
              </div>
            </div>
          )}

          {/* Image overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

          {/* Featured badge */}
          {item.featured && (
            <Badge className="absolute left-4 top-4 border-0 bg-emerald-600 text-white shadow-lg">
              সর্বশেষ
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Category + source */}
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="secondary"
              className="rounded-full font-normal"
            >
              {item.category}
            </Badge>

            <span className="text-xs text-muted-foreground">
              {item.source}
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-4 line-clamp-2 text-xl font-bold leading-8 tracking-tight">
            {item.title}
          </h2>

          {/* Excerpt */}
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
            {item.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0 text-emerald-600" />
              <span>{item.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-emerald-600" />
              <span className="line-clamp-1">{item.location}</span>
            </div>
          </div>

          {/* Source button */}
          <div className="mt-auto pt-6">
            <Button
              asChild
              variant="outline"
              className="w-full rounded-xl transition-colors group-hover:border-emerald-600 group-hover:text-emerald-600"
            >
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                মূল সংবাদ পড়ুন
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function NewsPage() {
  const [search, setSearch] = React.useState("")
  const [category, setCategory] = React.useState("সব")

  const filteredNews = React.useMemo(() => {
    const query = search.trim().toLowerCase()

    return newsItems.filter((item) => {
      const matchesCategory =
        category === "সব" || item.category === category

      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        item.source.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [search, category])

  const clearFilters = () => {
    setSearch("")
    setCategory("সব")
  }

  return (
    <main className="min-h-screen bg-background">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden border-b">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-background to-green-500/5" />

        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

        {/* Content */}
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            {/* Label */}
            <Badge className="mb-5 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-4 py-2 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-400">
              <Newspaper className="mr-2 h-4 w-4" />
              নালিতাবাড়ী সংবাদ
            </Badge>

            {/* Heading */}
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              নালিতাবাড়ীর{" "}
              <span className="text-emerald-600">সর্বশেষ খবর</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              নালিতাবাড়ী উপজেলা ও আশপাশের এলাকার সাম্প্রতিক গুরুত্বপূর্ণ খবর
              বিভিন্ন সংবাদমাধ্যম থেকে এক জায়গায়।
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <Input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="খবরের শিরোনাম বা বিষয় খুঁজুন..."
                  className="h-14 rounded-2xl bg-background pl-12 pr-12 text-base shadow-lg"
                  aria-label="খবর অনুসন্ধান"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
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

      {/* =========================================================
          CATEGORY FILTER
      ========================================================= */}
      <section className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            role="tablist"
            aria-label="সংবাদ ক্যাটাগরি"
          >
            {categories.map((item) => {
              const active = category === item

              return (
                <Button
                  key={item}
                  type="button"
                  variant={active ? "default" : "outline"}
                  onClick={() => setCategory(item)}
                  className={`shrink-0 rounded-full ${
                    active
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "bg-background"
                  }`}
                  aria-pressed={active}
                >
                  {item}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          NEWS DIRECTORY
      ========================================================= */}
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold text-emerald-600">
              সংবাদ ডিরেক্টরি
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              সাম্প্রতিক সংবাদ
            </h2>
          </div>

          <p className="text-sm text-muted-foreground">
            {filteredNews.length}টি সংবাদ
          </p>
        </div>

        {/* News cards */}
        {filteredNews.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="rounded-3xl border border-dashed p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-7 w-7 text-muted-foreground" />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              কোনো সংবাদ পাওয়া যায়নি
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              অন্য কোনো শব্দ বা ক্যাটাগরি দিয়ে অনুসন্ধান করুন।
            </p>

            <Button
              onClick={clearFilters}
              variant="outline"
              className="mt-6 rounded-xl"
            >
              ফিল্টার পরিষ্কার করুন
            </Button>
          </div>
        )}
      </section>

      {/* =========================================================
          SOURCE NOTICE
      ========================================================= */}
      <section className="border-t bg-muted/20">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-background p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              {/* Icon */}
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <Newspaper className="h-5 w-5" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-bold">সংবাদ উৎস সম্পর্কে</h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  এই পেজের সংবাদগুলো বিভিন্ন অনলাইন সংবাদমাধ্যমে প্রকাশিত
                  প্রতিবেদনের ভিত্তিতে সংক্ষেপে উপস্থাপন করা হয়েছে। সম্পূর্ণ
                  প্রতিবেদন পড়তে প্রতিটি কার্ডের “মূল সংবাদ পড়ুন” বাটনে ক্লিক
                  করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
"use client"

import * as React from "react"
import {
  Bell,
  CalendarDays,
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  Search,
  X,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type NoticeItem = {
  id: number
  title: string
  description: string
  date: string
  category: string
  authority: string
  noticeNo?: string
  fileUrl?: string
  featured?: boolean
  deadline?: string
}

const notices: NoticeItem[] = [
  {
    id: 1,
    title: "নালিতাবাড়ী উপজেলার সকল শিক্ষা প্রতিষ্ঠানের জন্য জরুরি বিজ্ঞপ্তি",
    description:
      "সাম্প্রতিক পরিস্থিতি বিবেচনায় উপজেলার শিক্ষা প্রতিষ্ঠানসমূহকে প্রয়োজনীয় প্রস্তুতি গ্রহণ এবং সংশ্লিষ্ট নির্দেশনা অনুসরণের জন্য অনুরোধ করা হয়েছে।",
    date: "২০ জুলাই ২০২৬",
    category: "জরুরি বিজ্ঞপ্তি",
    authority: "উপজেলা প্রশাসন, নালিতাবাড়ী",
    noticeNo: "০৫.০০.০০০০.০০১.২০২৬",
    featured: true,
    deadline: "২৫ জুলাই ২০২৬",
  },
  {
    id: 2,
    title: "বন্যা পরিস্থিতিতে জনসাধারণের করণীয় সংক্রান্ত বিজ্ঞপ্তি",
    description:
      "উপজেলার নিম্নাঞ্চলে বন্যা পরিস্থিতির কারণে জনসাধারণকে নিরাপদ স্থানে অবস্থান এবং প্রয়োজনীয় সতর্কতা অবলম্বনের জন্য নির্দেশনা প্রদান করা হয়েছে।",
    date: "১৯ জুলাই ২০২৬",
    category: "দুর্যোগ",
    authority: "উপজেলা প্রশাসন, নালিতাবাড়ী",
    noticeNo: "০৫.৪১.৮৯০০.০০২.২০২৬",
    featured: true,
  },
  {
    id: 3,
    title: "সরকারি কর্মকর্তা-কর্মচারীদের উপস্থিতি সংক্রান্ত নোটিশ",
    description:
      "উপজেলা পর্যায়ের সকল সরকারি দপ্তরের কর্মকর্তা-কর্মচারীদের নির্ধারিত সময়ে কর্মস্থলে উপস্থিত থাকার বিষয়ে বিজ্ঞপ্তি।",
    date: "১৫ জুলাই ২০২৬",
    category: "প্রশাসন",
    authority: "উপজেলা নির্বাহী অফিসারের কার্যালয়",
    noticeNo: "০৫.৪১.৮৯০০.০০৩.২০২৬",
  },
  {
    id: 4,
    title: "উপজেলার বিভিন্ন ইউনিয়নে বৃক্ষরোপণ কর্মসূচি সংক্রান্ত বিজ্ঞপ্তি",
    description:
      "পরিবেশ সংরক্ষণ ও সবুজায়ন কার্যক্রমের অংশ হিসেবে উপজেলার বিভিন্ন ইউনিয়নে বৃক্ষরোপণ কর্মসূচি বাস্তবায়নের বিষয়ে বিজ্ঞপ্তি।",
    date: "১০ জুলাই ২০২৬",
    category: "পরিবেশ",
    authority: "উপজেলা প্রশাসন, নালিতাবাড়ী",
    noticeNo: "০৫.৪১.৮৯০০.০০৪.২০২৬",
    deadline: "৩০ জুলাই ২০২৬",
  },
  {
    id: 5,
    title: "সামাজিক নিরাপত্তা কর্মসূচির উপকারভোগীদের জন্য বিজ্ঞপ্তি",
    description:
      "সামাজিক নিরাপত্তা কর্মসূচির আওতায় বিভিন্ন ভাতা ও সুবিধার উপকারভোগীদের প্রয়োজনীয় তথ্য ও কাগজপত্র হালনাগাদ করার জন্য অনুরোধ করা হয়েছে।",
    date: "৫ জুলাই ২০২৬",
    category: "সামাজিক সেবা",
    authority: "উপজেলা সমাজসেবা কার্যালয়",
    noticeNo: "০৫.৪১.৮৯০০.০০৫.২০২৬",
  },
  {
    id: 6,
    title: "কৃষকদের জন্য সার ও কৃষি উপকরণ বিতরণ সংক্রান্ত বিজ্ঞপ্তি",
    description:
      "উপজেলার কৃষকদের মধ্যে নির্ধারিত কৃষি উপকরণ বিতরণ কার্যক্রমের সময়সূচি ও প্রয়োজনীয় নির্দেশনা জানানো হয়েছে।",
    date: "২ জুলাই ২০২৬",
    category: "কৃষি",
    authority: "উপজেলা কৃষি অফিস",
    noticeNo: "০৫.৪১.৮৯০০.০০৬.২০২৬",
    deadline: "২০ জুলাই ২০২৬",
  },
  {
    id: 7,
    title: "জাতীয় পরিচয়পত্র সংক্রান্ত সেবা গ্রহণের সময়সূচি",
    description:
      "জাতীয় পরিচয়পত্র সংক্রান্ত বিভিন্ন সেবা গ্রহণের জন্য নির্ধারিত সময় ও প্রয়োজনীয় কাগজপত্র সম্পর্কে বিজ্ঞপ্তি।",
    date: "২৮ জুন ২০২৬",
    category: "নাগরিক সেবা",
    authority: "উপজেলা নির্বাচন অফিস",
    noticeNo: "০৫.৪১.৮৯০০.০০৭.২০২৬",
  },
  {
    id: 8,
    title: "ভূমি সেবা সংক্রান্ত গণশুনানি আয়োজনের বিজ্ঞপ্তি",
    description:
      "উপজেলার ভূমি সংক্রান্ত বিভিন্ন সমস্যা ও অভিযোগ শুনানির জন্য নির্ধারিত তারিখে গণশুনানি অনুষ্ঠিত হবে।",
    date: "২৫ জুন ২০২৬",
    category: "ভূমি সেবা",
    authority: "সহকারী কমিশনার (ভূমি), নালিতাবাড়ী",
    noticeNo: "০৫.৪১.৮৯০০.০০৮.২০২৬",
  },
]

const categories = [
  "সব",
  "জরুরি বিজ্ঞপ্তি",
  "প্রশাসন",
  "দুর্যোগ",
  "নাগরিক সেবা",
  "সামাজিক সেবা",
  "কৃষি",
  "ভূমি সেবা",
  "পরিবেশ",
]

function NoticeCard({ notice }: { notice: NoticeItem }) {
  return (
    <Card className="group h-full overflow-hidden rounded-2xl border-border/60 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex h-full flex-col p-0">
        {/* Top accent */}
        <div className="h-1 bg-emerald-600" />

        <div className="flex flex-1 flex-col p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
              <FileText className="h-6 w-6" />
            </div>

            {notice.featured && (
              <Badge className="rounded-full border-0 bg-emerald-600 text-white">
                গুরুত্বপূর্ণ
              </Badge>
            )}
          </div>

          {/* Category */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <Badge
              variant="secondary"
              className="rounded-full font-normal"
            >
              {notice.category}
            </Badge>

            <span className="text-xs text-muted-foreground">
              {notice.authority}
            </span>
          </div>

          {/* Title */}
          <h2 className="mt-4 line-clamp-3 text-xl font-bold leading-8 tracking-tight">
            {notice.title}
          </h2>

          {/* Description */}
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
            {notice.description}
          </p>

          {/* Metadata */}
          <div className="mt-5 space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 shrink-0 text-emerald-600" />
              <span>প্রকাশ: {notice.date}</span>
            </div>

            {notice.noticeNo && (
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 shrink-0 text-emerald-600" />
                <span className="line-clamp-1">
                  স্মারক: {notice.noticeNo}
                </span>
              </div>
            )}

            {notice.deadline && (
              <div className="flex items-center gap-2 font-medium text-amber-600">
                <CalendarDays className="h-4 w-4 shrink-0" />
                <span>শেষ তারিখ: {notice.deadline}</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
            <Button
              variant="outline"
              className="rounded-xl group-hover:border-emerald-600 group-hover:text-emerald-600"
              asChild={Boolean(notice.fileUrl)}
              disabled={!notice.fileUrl}
            >
              {notice.fileUrl ? (
                <a
                  href={notice.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  বিস্তারিত
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <>
                  বিস্তারিত
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>

            <Button
              variant="default"
              className="rounded-xl bg-emerald-600 hover:bg-emerald-700"
              asChild={Boolean(notice.fileUrl)}
              disabled={!notice.fileUrl}
            >
              {notice.fileUrl ? (
                <a
                  href={notice.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  ডাউনলোড
                  <Download className="ml-2 h-4 w-4" />
                </a>
              ) : (
                <>
                  PDF নেই
                  <FileText className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function NoticesPage() {
  const [search, setSearch] = React.useState("")
  const [category, setCategory] = React.useState("সব")

  const filteredNotices = React.useMemo(() => {
    const query = search.trim().toLowerCase()

    return notices.filter((notice) => {
      const matchesCategory =
        category === "সব" || notice.category === category

      const matchesSearch =
        !query ||
        notice.title.toLowerCase().includes(query) ||
        notice.description.toLowerCase().includes(query) ||
        notice.authority.toLowerCase().includes(query) ||
        notice.category.toLowerCase().includes(query) ||
        notice.noticeNo?.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [search, category])

  const clearFilters = () => {
    setSearch("")
    setCategory("সব")
  }

  return (
    <main className="min-h-screen bg-background">
      {/* 
          HERO
       */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-background to-green-500/5" />

        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            {/* Label */}
            <Badge className="mb-5 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-4 py-2 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-400">
              <Bell className="mr-2 h-4 w-4" />
              নোটিশ ও বিজ্ঞপ্তি
            </Badge>

            {/* Heading */}
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              নালিতাবাড়ীর{" "}
              <span className="text-emerald-600">
                নোটিশ ও বিজ্ঞপ্তি
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              উপজেলা প্রশাসন, সরকারি দপ্তর ও বিভিন্ন প্রতিষ্ঠানের
              গুরুত্বপূর্ণ নোটিশ, বিজ্ঞপ্তি ও নির্দেশনা এক জায়গায়।
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <Input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="নোটিশের শিরোনাম বা বিষয় খুঁজুন..."
                  className="h-14 rounded-2xl bg-background pl-12 pr-12 text-base shadow-lg"
                  aria-label="নোটিশ অনুসন্ধান"
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

      {/* 
          CATEGORY FILTER
       */}
      <section className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div
            className="flex gap-2 overflow-x-auto pb-1"
            role="tablist"
            aria-label="নোটিশ ক্যাটাগরি"
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

      {/* 
          NOTICE DIRECTORY
       */}
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold text-emerald-600">
              নোটিশ ডিরেক্টরি
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              সাম্প্রতিক নোটিশ
            </h2>
          </div>

          <p className="text-sm text-muted-foreground">
            {filteredNotices.length}টি নোটিশ
          </p>
        </div>

        {/* Notice cards */}
        {filteredNotices.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredNotices.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="rounded-3xl border border-dashed p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-7 w-7 text-muted-foreground" />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              কোনো নোটিশ পাওয়া যায়নি
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

      {/* 
          NOTICE INFORMATION
       */}
      <section className="border-t bg-muted/20">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-2xl border bg-background p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                <Bell className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-bold">
                  নোটিশ সম্পর্কে গুরুত্বপূর্ণ তথ্য
                </h3>

                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  এই পেজে নালিতাবাড়ী উপজেলা প্রশাসন এবং বিভিন্ন সরকারি
                  দপ্তরের গুরুত্বপূর্ণ নোটিশ ও বিজ্ঞপ্তি প্রদর্শন করা হবে।
                  কোনো নোটিশের বিস্তারিত জানতে সংশ্লিষ্ট নোটিশের
                  বিস্তারিত বা ডাউনলোড অপশন ব্যবহার করুন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
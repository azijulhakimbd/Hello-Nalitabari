"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Building2,
  CalendarDays,
  ChevronRight,
  CircleHelp,
  HeartHandshake,
  MapPin,
  Search,
  ShieldCheck,
  Sparkles,
  Users,
  UsersRound,
  X,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

type CommunityCategory =
  | "সামাজিক সংগঠন"
  | "যুব সংগঠন"
  | "ক্রীড়া সংগঠন"
  | "স্বেচ্ছাসেবী সংগঠন"
  | "সাংস্কৃতিক সংগঠন"
  | "ধর্মীয় ও সামাজিক প্রতিষ্ঠান"

type CommunityItem = {
  id: number
  name: string
  category: CommunityCategory
  description: string
  location: string
  members?: string
  established?: string
  icon: React.ElementType
  featured?: boolean
}

const categories: {
  label: string
  value: CommunityCategory | "সব"
  icon: React.ElementType
}[] = [
  { label: "সব", value: "সব", icon: UsersRound },
  { label: "সামাজিক সংগঠন", value: "সামাজিক সংগঠন", icon: HeartHandshake },
  { label: "যুব সংগঠন", value: "যুব সংগঠন", icon: Users },
  { label: "ক্রীড়া সংগঠন", value: "ক্রীড়া সংগঠন", icon: Sparkles },
  {
    label: "স্বেচ্ছাসেবী সংগঠন",
    value: "স্বেচ্ছাসেবী সংগঠন",
    icon: ShieldCheck,
  },
  {
    label: "সাংস্কৃতিক সংগঠন",
    value: "সাংস্কৃতিক সংগঠন",
    icon: CalendarDays,
  },
  {
    label: "ধর্মীয় ও সামাজিক প্রতিষ্ঠান",
    value: "ধর্মীয় ও সামাজিক প্রতিষ্ঠান",
    icon: Building2,
  },
]

const communities: CommunityItem[] = [
  {
    id: 1,
    name: "নালিতাবাড়ী সামাজিক সংগঠনসমূহ",
    category: "সামাজিক সংগঠন",
    description:
      "স্থানীয় মানুষের সামাজিক উন্নয়ন, সহযোগিতা ও জনকল্যাণমূলক কার্যক্রমে কাজ করা সংগঠনগুলোর তথ্য।",
    location: "নালিতাবাড়ী উপজেলা",
    members: "স্থানীয় সদস্য",
    icon: HeartHandshake,
    featured: true,
  },
  {
    id: 2,
    name: "নালিতাবাড়ী যুব সমাজ",
    category: "যুব সংগঠন",
    description:
      "যুবকদের অংশগ্রহণে শিক্ষা, সচেতনতা, ক্রীড়া ও সামাজিক উন্নয়নমূলক কার্যক্রম।",
    location: "নালিতাবাড়ী",
    members: "যুব সদস্য",
    icon: Users,
  },
  {
    id: 3,
    name: "স্থানীয় ক্রীড়া ও যুব ক্লাব",
    category: "ক্রীড়া সংগঠন",
    description:
      "ফুটবল, ক্রিকেটসহ বিভিন্ন খেলাধুলা ও স্থানীয় ক্রীড়া কার্যক্রমে অংশগ্রহণের প্ল্যাটফর্ম।",
    location: "নালিতাবাড়ী উপজেলা",
    icon: Sparkles,
  },
  {
    id: 4,
    name: "স্বেচ্ছাসেবী কার্যক্রম",
    category: "স্বেচ্ছাসেবী সংগঠন",
    description:
      "দুর্যোগ, জনসচেতনতা, রক্তদান ও বিভিন্ন সামাজিক কাজে স্বেচ্ছাসেবীদের অংশগ্রহণ।",
    location: "নালিতাবাড়ী উপজেলা",
    icon: ShieldCheck,
  },
  {
    id: 5,
    name: "স্থানীয় সাংস্কৃতিক সংগঠন",
    category: "সাংস্কৃতিক সংগঠন",
    description:
      "স্থানীয় সংস্কৃতি, সাহিত্য, সংগীত, নাটক ও সাংস্কৃতিক ঐতিহ্য সংরক্ষণে কাজ করা সংগঠন।",
    location: "নালিতাবাড়ী",
    icon: CalendarDays,
  },
  {
    id: 6,
    name: "ধর্মীয় ও সামাজিক প্রতিষ্ঠান",
    category: "ধর্মীয় ও সামাজিক প্রতিষ্ঠান",
    description:
      "স্থানীয় ধর্মীয় ও সামাজিক প্রতিষ্ঠানগুলোর মাধ্যমে পরিচালিত বিভিন্ন জনকল্যাণমূলক কার্যক্রম।",
    location: "নালিতাবাড়ী উপজেলা",
    icon: Building2,
  },
]

function CommunityCard({ community }: { community: CommunityItem }) {
  const Icon = community.icon

  return (
    <Card className="group h-full overflow-hidden rounded-2xl border-border/60 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex h-full flex-col p-0">
        <div className="relative overflow-hidden bg-gradient-to-br from-emerald-500/15 via-green-500/10 to-transparent p-6">
          <div className="absolute right-0 top-0 h-28 w-28 translate-x-8 -translate-y-8 rounded-full bg-emerald-500/10 blur-2xl" />

          <div className="relative flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/20">
              <Icon className="h-7 w-7" />
            </div>

            {community.featured && (
              <Badge className="border-0 bg-emerald-600 text-white">
                <Sparkles className="mr-1 h-3.5 w-3.5" />
                গুরুত্বপূর্ণ
              </Badge>
            )}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <Badge
            variant="secondary"
            className="mb-3 w-fit rounded-full px-3 py-1 font-normal"
          >
            {community.category}
          </Badge>

          <h2 className="text-xl font-bold tracking-tight">
            {community.name}
          </h2>

          <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
            {community.description}
          </p>

          <div className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-emerald-600" />
              <span>{community.location}</span>
            </div>

            {community.members && (
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-emerald-600" />
                <span>{community.members}</span>
              </div>
            )}
          </div>

          <div className="mt-auto pt-6">
            <Button
              asChild
              variant="outline"
              className="w-full rounded-xl group-hover:border-emerald-600 group-hover:text-emerald-600"
            >
              <Link href={`/community/${community.id}`}>
                বিস্তারিত দেখুন
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function CommunityPage() {
  const [search, setSearch] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState<
    CommunityCategory | "সব"
  >("সব")

  const filteredCommunities = React.useMemo(() => {
    const query = search.trim().toLowerCase()

    return communities.filter((community) => {
      const matchesCategory =
        selectedCategory === "সব" ||
        community.category === selectedCategory

      const matchesSearch =
        !query ||
        community.name.toLowerCase().includes(query) ||
        community.category.toLowerCase().includes(query) ||
        community.description.toLowerCase().includes(query) ||
        community.location.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [search, selectedCategory])

  const clearFilters = () => {
    setSearch("")
    setSelectedCategory("সব")
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-background to-green-500/5" />

        <div className="absolute -left-24 top-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-4 py-2 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-400">
              <UsersRound className="mr-2 h-4 w-4" />
              নালিতাবাড়ীর কমিউনিটি
            </Badge>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              আমাদের{" "}
              <span className="text-emerald-600">কমিউনিটি</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              নালিতাবাড়ী উপজেলার সামাজিক সংগঠন, যুব সংগঠন, ক্রীড়া ক্লাব,
              স্বেচ্ছাসেবী উদ্যোগ ও বিভিন্ন কমিউনিটি প্রতিষ্ঠানের তথ্য এক জায়গায়।
            </p>
          </div>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="সংগঠন, ক্যাটাগরি বা এলাকার নাম দিয়ে খুঁজুন..."
                className="h-14 rounded-2xl border-border/70 bg-background pl-12 pr-12 text-base shadow-lg"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  aria-label="অনুসন্ধান মুছে ফেলুন"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b bg-muted/20">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((category) => {
              const Icon = category.icon
              const active = selectedCategory === category.value

              return (
                <Button
                  key={category.value}
                  type="button"
                  variant={active ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`shrink-0 rounded-full ${
                    active
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "bg-background"
                  }`}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {category.label}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold text-emerald-600">
              কমিউনিটি ডিরেক্টরি
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              স্থানীয় সংগঠন ও উদ্যোগ
            </h2>
          </div>

          <p className="text-sm text-muted-foreground">
            {filteredCommunities.length}টি তথ্য পাওয়া গেছে
          </p>
        </div>

        {filteredCommunities.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCommunities.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed p-10 text-center sm:p-16">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-7 w-7 text-muted-foreground" />
            </div>

            <h3 className="mt-5 text-xl font-bold">
              কোনো তথ্য পাওয়া যায়নি
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-muted-foreground">
              আপনার অনুসন্ধান বা নির্বাচিত ক্যাটাগরি পরিবর্তন করে আবার চেষ্টা করুন।
            </p>

            <Button
              type="button"
              variant="outline"
              onClick={clearFilters}
              className="mt-6 rounded-xl"
            >
              ফিল্টার পরিষ্কার করুন
            </Button>
          </div>
        )}
      </section>

      {/* Community contribution */}
      <section className="container mx-auto px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-green-700 px-6 py-10 text-white shadow-xl sm:px-10 lg:px-14">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <Badge className="border-0 bg-white/15 text-white hover:bg-white/20">
                <HeartHandshake className="mr-2 h-4 w-4" />
                কমিউনিটির অংশ হোন
              </Badge>

              <h2 className="mt-4 text-2xl font-black sm:text-3xl">
                আপনার এলাকার সংগঠনের তথ্য যোগ করুন
              </h2>

              <p className="mt-3 leading-7 text-emerald-50">
                নালিতাবাড়ীর কোনো সামাজিক সংগঠন, ক্লাব বা কমিউনিটি উদ্যোগের তথ্য
                এখানে নেই? আমাদের জানান। যাচাইয়ের পর তথ্যটি ডিরেক্টরিতে যুক্ত করা
                হবে।
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="shrink-0 rounded-xl bg-white text-emerald-700 hover:bg-emerald-50"
            >
              <Link href="/submit">
                তথ্য জমা দিন
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Help */}
      <section className="border-t bg-muted/20">
        <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                <CircleHelp className="h-5 w-5" />
              </div>

              <div>
                <p className="font-semibold">তথ্যে কোনো ভুল পেয়েছেন?</p>
                <p className="text-sm text-muted-foreground">
                  সঠিক তথ্য দিয়ে আমাদের সাহায্য করুন।
                </p>
              </div>
            </div>

            <Button asChild variant="ghost" className="rounded-xl">
              <Link href="/contact">
                যোগাযোগ করুন
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
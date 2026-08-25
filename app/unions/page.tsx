"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  MapPin,
  Search,
  Users,
  X,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { unions } from "@/public/data/unions"

export default function UnionsPage() {
  const [search, setSearch] = React.useState("")

  const filteredUnions = React.useMemo(() => {
    const query = search.trim().toLocaleLowerCase("bn-BD")

    if (!query) return unions

    return unions.filter((union) => {
      const nameBn = union.nameBn.toLocaleLowerCase("bn-BD")
      const nameEn = union.nameEn.toLocaleLowerCase("en-US")
      const slug = union.slug.toLocaleLowerCase("en-US")

      return (
        nameBn.includes(query) ||
        nameEn.includes(query) ||
        slug.includes(query)
      )
    })
  }, [search])

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/*  ==
          HERO
       === */}
      <section className="relative isolate overflow-hidden border-b bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 text-white dark:from-emerald-950 dark:via-green-950 dark:to-emerald-900">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-emerald-400/10 blur-3xl" />

          <div className="absolute -bottom-32 -left-32 h-[320px] w-[320px] rounded-full bg-green-400/10 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_35%)]" />
        </div>

        <div className="container relative mx-auto px-4 py-14 sm:py-18 md:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium backdrop-blur-md sm:text-sm">
              <Building2 className="size-4" />
              নালিতাবাড়ী উপজেলা
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              ইউনিয়ন পরিষদ
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-emerald-50 sm:text-base sm:leading-8 md:text-lg">
              নালিতাবাড়ী উপজেলার সকল ইউনিয়নের তথ্য, পরিষেবা,
              যোগাযোগ ও গুরুত্বপূর্ণ তথ্য এক জায়গায়।
            </p>
          </div>
        </div>
      </section>

      {/*  ==
          STATS
       === */}
      <section className="relative z-10 container mx-auto -mt-6 px-4 sm:-mt-8">
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          <StatCard
            icon={<Building2 className="size-5 sm:size-6" />}
            value={toBengaliNumber(unions.length)}
            label="মোট ইউনিয়ন"
            iconClassName="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-400"
          />

          <StatCard
            icon={<MapPin className="size-5 sm:size-6" />}
            value="১"
            label="পৌরসভা"
            iconClassName="bg-blue-100 text-blue-700 dark:bg-blue-950/70 dark:text-blue-400"
          />

          <StatCard
            icon={<Users className="size-5 sm:size-6" />}
            value="২০৫"
            label="মোট গ্রাম"
            iconClassName="bg-orange-100 text-orange-700 dark:bg-orange-950/70 dark:text-orange-400"
          />
        </div>
      </section>

      {/*  ==
          DIRECTORY
       === */}
      <section className="container mx-auto px-4 py-12 sm:py-14 md:py-16">
        <div className="mb-8 flex flex-col gap-6 lg:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 sm:text-sm">
              Union Directory
            </p>

            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              সকল ইউনিয়ন
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
              আপনার প্রয়োজনীয় ইউনিয়ন নির্বাচন করে বিস্তারিত তথ্য দেখুন।
            </p>
          </div>

          {/* Search */}
          <div className="w-full lg:max-w-md">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="ইউনিয়ন খুঁজুন..."
                aria-label="ইউনিয়ন খুঁজুন"
                className="h-11 rounded-xl border-border bg-background pl-10 pr-20 shadow-sm transition focus-visible:border-emerald-500 focus-visible:ring-emerald-500 sm:h-12"
              />

              {search.length > 0 && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-1 rounded-lg px-2 py-1.5 text-xs text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  aria-label="সার্চ পরিষ্কার করুন"
                >
                  <X className="size-3.5" />
                  পরিষ্কার
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Result Count */}
        <div
          className={`mb-5 text-sm text-muted-foreground transition-opacity ${
            search.trim() ? "opacity-100" : "opacity-0"
          }`}
          aria-live="polite"
        >
          <span className="font-semibold text-foreground">
            {toBengaliNumber(filteredUnions.length)}
          </span>{" "}
          টি ইউনিয়ন পাওয়া গেছে
        </div>

        {/*  ==
            UNION CARDS
         === */}
        {filteredUnions.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center sm:p-12">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-muted sm:size-16">
              <Search className="size-6 text-muted-foreground" />
            </div>

            <h3 className="font-semibold">
              কোনো ইউনিয়ন পাওয়া যায়নি
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
              অন্য কোনো নাম দিয়ে আবার চেষ্টা করুন।
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 active:scale-95"
            >
              সব ইউনিয়ন দেখুন
              <ArrowRight className="size-4" />
            </button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:gap-6">
            {filteredUnions.map((union) => (
              <UnionCard
                key={union.id}
                union={union}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

/* ======
   STAT CARD
 ====== */

function StatCard({
  icon,
  value,
  label,
  iconClassName,
}: {
  icon: React.ReactNode
  value: string | number
  label: string
  iconClassName: string
}) {
  return (
    <Card className="group border-border/60 bg-card text-card-foreground shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <CardContent className="flex items-center gap-3 p-4 sm:gap-4 sm:p-5">
        <div
          className={`shrink-0 rounded-xl p-2.5 transition-transform duration-300 group-hover:scale-110 sm:p-3 ${iconClassName}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xl font-bold tracking-tight sm:text-2xl">
            {value}
          </p>

          <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
            {label}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

/* ======
   UNION CARD
 ====== */

function UnionCard({
  union,
}: {
  union: (typeof unions)[number]
}) {
  const image =
    union.image && union.image.trim() !== ""
      ? union.image
      : null

  return (
    <Link
      href={`/unions/${union.slug}`}
      className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label={`${union.nameBn} বিস্তারিত তথ্য`}
    >
      <Card
        className="
          h-full
          overflow-hidden
          border-border
          bg-card
          text-card-foreground
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-primary/40
          hover:shadow-lg
        "
      >
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          {image ? (
            <Image
              src={image}
              alt={`${union.nameBn} - ${union.nameEn}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-primary/5">
              <Building2 className="size-14 text-primary/40" />
            </div>
          )}

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

          {/* Union Number */}
          <span
            className="
              absolute left-3 top-3
              rounded-full
              border border-white/30
              bg-background/90
              px-3 py-1
              text-[11px]
              font-semibold
              text-primary
              shadow-sm
              backdrop-blur-sm
              sm:left-4 sm:top-4 sm:text-xs
            "
          >
            {toBengaliNumber(String(union.id).padStart(2, "0"))} নং ইউনিয়ন
          </span>

          {/* Hover Arrow */}
          <div
            className="
              absolute bottom-4 right-4
              flex size-9
              translate-y-2
              items-center justify-center
              rounded-full
              bg-background/90
              text-primary
              opacity-0
              shadow-md
              backdrop-blur-sm
              transition-all
              duration-300
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <ArrowRight className="size-4" />
          </div>
        </div>

        {/* Content */}
        <CardHeader className="p-4 pb-2 sm:p-5 sm:pb-3">
          <CardTitle className="line-clamp-1 text-lg sm:text-xl">
            {union.nameBn}
          </CardTitle>

          <p className="line-clamp-1 text-sm text-muted-foreground">
            {union.nameEn}
          </p>
        </CardHeader>

        <CardContent className="p-4 pt-2 sm:p-5 sm:pt-2">
          {/* Location */}
          <div className="mb-4 flex items-start gap-2 text-xs leading-5 text-muted-foreground sm:text-sm">
            <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />

            <span>
              নালিতাবাড়ী, শেরপুর, ময়মনসিংহ
            </span>
          </div>

          {/* Details Button */}
          <div
            className="
              flex min-h-10
              items-center justify-center
              gap-2
              rounded-lg
              bg-primary
              px-4 py-2.5
              text-sm font-medium
              text-primary-foreground
              shadow-sm
              transition-all
              duration-300
              group-hover:bg-primary/90
              group-hover:shadow-md
            "
          >
            বিস্তারিত তথ্য

            <ArrowRight
              className="
                size-4
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

/* ======
   BENGALI NUMBER
 ====== */

function toBengaliNumber(value: string | number): string {
  const bengaliDigits = "০১২৩৪৫৬৭৮৯"

  return String(value).replace(
    /\d/g,
    (digit) => bengaliDigits[Number(digit)]
  )
}
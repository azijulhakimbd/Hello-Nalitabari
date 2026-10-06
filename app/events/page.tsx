
"use client"

import * as React from "react"
import {
  CalendarDays,
  Clock,
  MapPin,
  Search,
  Users,
  ArrowRight,
  Filter,
  CalendarCheck,
} from "lucide-react"
import { useRouteData } from "@/components/data/use-route-data"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

type EventStatus = "আসন্ন" | "চলমান" | "সমাপ্ত"

type Event = {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  organizer: string
  status: EventStatus
  image: string
  attendees?: string
}



type EventRecord = Event

function getStatusClass(status: EventStatus) {
  switch (status) {
    case "আসন্ন":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
    case "চলমান":
      return "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
    case "সমাপ্ত":
      return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
  }
}

function EventCard({ event }: { event: Event }) {
  return (
    <Card className="group h-full overflow-hidden rounded-2xl border bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4">
          <Badge className={`${getStatusClass(event.status)} border-0`}>
            {event.status}
          </Badge>
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-xl bg-background/95 px-3 py-2 text-sm font-semibold shadow-lg backdrop-blur">
          <CalendarDays className="h-4 w-4 text-emerald-600" />
          {event.date}
        </div>
      </div>

      <CardHeader className="space-y-3 pb-3">
        <div>
          <Badge
            variant="secondary"
            className="mb-3 rounded-full text-xs font-medium"
          >
            {event.category}
          </Badge>

          <h2 className="line-clamp-2 text-xl font-bold tracking-tight transition-colors group-hover:text-emerald-600">
            {event.title}
          </h2>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
          {event.description}
        </p>

        <div className="space-y-2.5 text-sm">
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span>{event.time}</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span className="line-clamp-2">{event.location}</span>
          </div>

          <div className="flex items-start gap-3">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
            <span>আনুমানিক অংশগ্রহণকারী: {event.attendees}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="border-t bg-muted/30 px-6 py-4">
        <div className="flex w-full items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground">
            আয়োজক
            <div className="mt-1 font-medium text-foreground">
              {event.organizer}
            </div>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="group/button gap-1 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950"
          >
            বিস্তারিত
            <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default function EventsPage() {
  const { data: events, loading } = useRouteData<EventRecord>("events")
  const [search, setSearch] = React.useState("")
  const [category, setCategory] = React.useState("সব")
  const [status, setStatus] = React.useState<"সব" | EventStatus>("সব")
  const categories = ["সব", ...new Set(events.map((event) => event.category))]

  const filteredEvents = React.useMemo(() => {
    const query = search.toLowerCase().trim()

    return events.filter((event) => {
      const matchesSearch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.organizer.toLowerCase().includes(query)

      const matchesCategory =
        category === "সব" || event.category === category

      const matchesStatus = status === "সব" || event.status === status

      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [events, search, category, status])

  const upcomingCount = events.filter(
    (event) => event.status === "আসন্ন"
  ).length

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-emerald-50 via-background to-green-50 dark:from-emerald-950/30 dark:via-background dark:to-green-950/20">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
              <CalendarCheck className="h-4 w-4 text-emerald-600" />
              নালিতাবাড়ী ইভেন্ট
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              নালিতাবাড়ীর{" "}
              <span className="text-emerald-600">অনুষ্ঠান ও ইভেন্ট</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              নালিতাবাড়ী উপজেলার সরকারি, সামাজিক, শিক্ষা, স্বাস্থ্য, কৃষি ও
              অন্যান্য গুরুত্বপূর্ণ অনুষ্ঠান সম্পর্কে জানুন।
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="rounded-2xl border bg-background px-5 py-3 shadow-sm">
                <div className="text-2xl font-bold text-emerald-600">
                  {upcomingCount}
                </div>
                <div className="text-xs text-muted-foreground">
                  আসন্ন ইভেন্ট
                </div>
              </div>

              <div className="rounded-2xl border bg-background px-5 py-3 shadow-sm">
                <div className="text-2xl font-bold">{events.length}</div>
                <div className="text-xs text-muted-foreground">
                  মোট ইভেন্ট
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b bg-background">
        <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="ইভেন্ট, স্থান বা আয়োজক খুঁজুন..."
                  className="h-11 rounded-xl pl-10"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(e.target.value as "সব" | EventStatus)
                  }
                  className="h-11 rounded-xl border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="সব">সব স্ট্যাটাস</option>
                  <option value="আসন্ন">আসন্ন</option>
                  <option value="চলমান">চলমান</option>
                  <option value="সমাপ্ত">সমাপ্ত</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => (
                <Button
                  key={item}
                  type="button"
                  variant={category === item ? "default" : "outline"}
                  onClick={() => setCategory(item)}
                  className={`shrink-0 rounded-full ${
                    category === item
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : ""
                  }`}
                  size="sm"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="container mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-emerald-600">
              EVENT DIRECTORY
            </p>

            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              সকল অনুষ্ঠান
            </h2>
          </div>

          <p className="text-sm text-muted-foreground">
            {filteredEvents.length} টি ইভেন্ট পাওয়া গেছে
          </p>
        </div>

        {loading ? (
          <p className="py-12 text-center text-sm text-muted-foreground">তথ্য লোড হচ্ছে...</p>
        ) : filteredEvents.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed px-6 py-16 text-center">
            <CalendarDays className="mx-auto h-12 w-12 text-muted-foreground/50" />

            <h3 className="mt-4 text-lg font-semibold">
              কোনো ইভেন্ট পাওয়া যায়নি
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              আপনার অনুসন্ধান বা ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।
            </p>

            <Button
              className="mt-5 rounded-xl"
              variant="outline"
              onClick={() => {
                setSearch("")
                setCategory("সব")
                setStatus("সব")
              }}
            >
              ফিল্টার রিসেট করুন
            </Button>
          </div>
        )}
      </section>
    </main>
  )
}

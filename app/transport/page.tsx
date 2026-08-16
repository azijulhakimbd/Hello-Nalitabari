"use client"

import * as React from "react"
import Link from "next/link"
import {
  ArrowRight,
  Bus,
  CarFront,
  Clock3,
  MapPin,
  Phone,
  Search,
  Ticket,
  TrainFront,
  Bike,
  Route,
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type TransportType =
  | "বাস"
  | "লোকাল বাস"
  | "সিএনজি"
  | "অটোরিকশা"
  | "মোটরসাইকেল"
  | "ট্রেন"

type Transport = {
  id: number
  name: string
  type: TransportType
  route: string
  departure: string
  returnTime?: string
  fare?: string
  phone?: string
  description?: string
}

const transports: Transport[] = [
  
  {
    id: 1,
    name: "হাজী পরিবহন",
    type: "বাস",
    route: "ঢাকা (মহাখালী) → নালিতাবাড়ী",
    departure: "সকাল ৬:০০",
    returnTime: "নালিতাবাড়ী → ঢাকা: দুপুর ১২:৩৫",
    fare: "৫০০ টাকা",
    phone: "01720216807",
  },
  {
    id: 2,
    name: "ভূঁইয়া পরিবহন",
    type: "বাস",
    route: "ঢাকা (মহাখালী) → নালিতাবাড়ী",
    departure: "সকাল ৬:২৫",
    returnTime: "নালিতাবাড়ী → ঢাকা: দুপুর ১২:৫৫",
    phone: "01790265300",
  },
  {
    id: 3,
    name: "লুবনা এক্সপ্রেস-২",
    type: "বাস",
    route: "ঢাকা → নালিতাবাড়ী",
    departure: "দুপুর ১২:২০",
    returnTime: "নালিতাবাড়ী → ঢাকা: ভোর ৪:২০",
    phone: "01746180649",
  },
  {
    id: 4,
    name: "সিরাত এক্সপ্রেস",
    type: "বাস",
    route: "ঢাকা (মহাখালী) → নালিতাবাড়ী",
    departure: "দুপুর ১২:৪০",
    returnTime: "নালিতাবাড়ী → ঢাকা: ভোর ৪:৪০",
    phone: "01758329092",
  },
  {
    id: 5,
    name: "মাকসিম ট্রাভেলস",
    type: "বাস",
    route: "ঢাকা (মহাখালী) → নালিতাবাড়ী",
    departure: "রাত ৮:০০",
    returnTime: "নালিতাবাড়ী → ঢাকা: সকাল ১১:৫০",
    fare: "",
    phone: "01786523939",
  },
  {
    id: 6,
    name: "ইউনাইটেড ট্রাভেলস",
    type: "বাস",
    route: "ঢাকা → নালিতাবাড়ী",
    departure: "রাত ১১:১০",
    returnTime: "নালিতাবাড়ী → ঢাকা: দুপুর ১২:১৫",
    phone: "01337990327",
  },
  {
    id: 7,
    name: "লোকাল বাস",
    type: "লোকাল বাস",
    route: "নালিতাবাড়ী → শেরপুর সদর",
    departure: "সকাল থেকে",
    fare: "",
    description:
      "নালিতাবাড়ী থেকে শেরপুর সদরসহ বিভিন্ন স্থানীয় রুটে লোকাল বাস চলাচল করে।",
  },
  {
    id: 8,
    name: "সিএনজি অটোরিকশা",
    type: "সিএনজি",
    route: "নালিতাবাড়ী শহর ও আশপাশের এলাকা",
    departure: "প্রয়োজন অনুযায়ী",
    description:
      "শহরের অভ্যন্তরে এবং আশপাশের বিভিন্ন এলাকায় দ্রুত যাতায়াতের জন্য ব্যবহৃত হয়।",
  },
  {
    id: 9,
    name: "অটোরিকশা / ইজিবাইক",
    type: "অটোরিকশা",
    route: "নালিতাবাড়ী পৌর এলাকা",
    departure: "প্রয়োজন অনুযায়ী",
    description:
      "পৌর এলাকার স্বল্প দূরত্বের যাতায়াতে সহজলভ্য পরিবহন।",
  },
  {
    id: 10,
    name: "ভাড়ায় মোটরসাইকেল",
    type: "মোটরসাইকেল",
    route: "নালিতাবাড়ী → পর্যটন এলাকা",
    departure: "প্রয়োজন অনুযায়ী",
    description:
      "মধুটিলা ও পানিহাটা-তারানিসহ বিভিন্ন পর্যটন স্থানে যাওয়ার জন্য ভাড়ায় মোটরসাইকেল পাওয়া যায়।",
  },

  {
    id: 11,
    name: "সাহা ট্রাভেলস",
    type: "বাস",
    route: "নালিতাবাড়ী → ঢাকা → নালিতাবাড়ী",
    departure: "নালিতাবাড়ী থেকে সকাল ৭:৪৫",
    returnTime: "ঢাকা থেকে দুপুর ২:৩০",
    phone: "01719-717780",
    description:
      "সমশ্চুড়া, ধোপাকুড়া, ননী, তিনানী ও পাঁচগাঁও রুটে চলাচল করে।",
  },
  {
    id: 12,
    name: "সাহা ট্রাভেলস",
    type: "বাস",
    route: "নালিতাবাড়ী → ঢাকা → নালিতাবাড়ী",
    departure: "নালিতাবাড়ী থেকে সকাল ৯:৩০",
    returnTime: "ঢাকা থেকে বিকাল ৪:০০",
    phone: "01780-707199",
    description:
      "তিনানী ও পাঁচগাঁওসহ বিভিন্ন রুটে ফিক্সড টাইম স্পেশাল গেইটলক সার্ভিস।",
  },
  {
    id: 13,
    name: "চৌধুরী পরিবহন",
    type: "বাস",
    route: "ঢাকা → নালিতাবাড়ী → ঢাকা",
    departure: "ঢাকা থেকে সকাল ৯:৫০",
    returnTime: "নালিতাবাড়ী থেকে বিকাল ৪:১০",
    description: "ঢাকা-নালিতাবাড়ী-ঢাকা রুটে স্পেশাল সিটিং সার্ভিস।",
  },
  {
    id: 14,
    name: "অগ্রিম ট্রাভেলস",
    type: "বাস",
    route: "নালিতাবাড়ী → ঢাকা → নালিতাবাড়ী",
    departure: "নালিতাবাড়ী থেকে সকাল ১১:০০",
    returnTime: "ঢাকা মহাখালী থেকে বিকাল ৬:০০",
    phone: "01716-676820",
    description: "ঢাকা-নালিতাবাড়ী রুটে স্পেশাল সিটিং সার্ভিস।",
  },
  {
    id: 15,
    name: "মেঘনা লাইন",
    type: "বাস",
    route: "ঢাকা → নালিতাবাড়ী → ঢাকা",
    departure: "ঢাকা থেকে সকাল ৮:১০",
    returnTime: "নালিতাবাড়ী থেকে দুপুর ২:৪০",
    phone: "01829-666336",
    description: "স্পেশাল গেইটলক সার্ভিস।",
  },
  {
    id: 16,
    name: "রেনু ট্রাভেলস",
    type: "বাস",
    route: "বৈশাখী বাজার → নালিতাবাড়ী → আশুলিয়া কাঠগড়া",
    departure: "বৈশাখী বাজার থেকে রাত ১০:০০",
    returnTime: "নালিতাবাড়ী থেকে রাত ১১:০০",
    description: "আশুলিয়া কাঠগড়া থেকে নালিতাবাড়ী রুটে চলাচল করে।",
  },
  {
    id: 17,
    name: "হ্যাভেন ক্লাসিক",
    type: "বাস",
    route: "বালুঘাটা বাজার → নালিতাবাড়ী → ঢাকা (কেরানীগঞ্জ)",
    departure: "বালুঘাটা বাজার থেকে সকাল ১০:২০",
    returnTime: "নালিতাবাড়ী থেকে সকাল ১১:৩০; ঢাকা থেকে সন্ধ্যা ৬:৩০",
    phone: "01768-522232",
    description:
      "সম্পূর্ণ ধূমপানমুক্ত, আরামদায়ক ও বিরতিহীন ডে-নাইট চেয়ার কোচ সার্ভিস।",
  },
  {
    id: 18,
    name: "নেভা ক্লাসিক-২",
    type: "বাস",
    route: "ননী → নালিতাবাড়ী → ঢাকা (মহাখালী)",
    departure: "ননী থেকে ভোর ৫:২০; নালিতাবাড়ী থেকে ভোর ৬:০০",
    returnTime: "ঢাকা মহাখালী থেকে দুপুর ১:২০",
    phone: "01717-529266",
    description:
      "নালিতাবাড়ী-ঢাকা-নালিতাবাড়ী রুটে ফিক্সড টাইম স্পেশাল গেইটলক সার্ভিস।",
  },
  {
    id: 19,
    name: "সোনার মদিনা",
    type: "বাস",
    route: "ঢাকা → নালিতাবাড়ী → ঢাকা",
    departure: "ঢাকা থেকে সকাল ১০:২০",
    returnTime: "নালিতাবাড়ী থেকে বিকাল ৪:৪০",
    description: "ঢাকা-নালিতাবাড়ী-ঢাকা রুটে স্পেশাল সিটিং সার্ভিস।",
  },
  {
    id: 20,
    name: "মিলন ট্রাভেলস",
    type: "বাস",
    route: "ঢাকা → নালিতাবাড়ী → ঢাকা",
    departure: "ননী থেকে সকাল ৭:৩০",
    returnTime: "ঢাকা থেকে বিকাল ৩:৩০",
    phone: "01608-077555",
    description:
      "নালিতাবাড়ী-ঢাকা-নালিতাবাড়ী রুটে স্পেশাল সিটিং সার্ভিস; তিনানী-ননী রুটেও চলাচল করে।",
  },
  {
    id: 21,
    name: "ভূঁইয়া পরিবহন",
    type: "বাস",
    route: "ঢাকা (মহাখালী) → নালিতাবাড়ী → ঢাকা",
    departure: "ঢাকা থেকে সকাল ৬:২৫",
    returnTime: "নালিতাবাড়ী থেকে দুপুর ১২:৫০",
    phone: "01790-265300",
    description: "ফিক্সড টাইম স্পেশাল গেইটলক সার্ভিস।",
  },
  {
    id: 22,
    name: "আশিক পরিবহন",
    type: "বাস",
    route: "ঢাকা (মহাখালী) → নালিতাবাড়ী",
    departure: "ঢাকা থেকে সকাল ৬:৫০",
    returnTime: "নালিতাবাড়ী থেকে দুপুর ১:১৫",
    phone: "01796-296823",
    description: "ফিক্সড টাইম গেইটলক সার্ভিস।",
  },
  {
    id: 23,
    name: "লুবনা ক্লাসিক",
    type: "বাস",
    route: "নালিতাবাড়ী → ঢাকা",
    departure: "নালিতাবাড়ী থেকে ভোর ৫:৫৫",
    returnTime: "ঢাকা থেকে দুপুর ১:২০",
    phone: "01310257636",
    description:
      "তিনানী-ননী-বারমারী রুটে ফিক্সড টাইম স্পেশাল গেইটলক সার্ভিস।",
  },
  {
    id: 24,
    name: "হিনো পরিবহন",
    type: "বাস",
    route: "ঢাকা → নালিতাবাড়ী → ঢাকা",
    departure: "ঢাকা থেকে সকাল ৬:২৫",
    returnTime: "নালিতাবাড়ী থেকে দুপুর ১২:৫০",
    phone: "01790-265300",
    description:
      "HINO AK 1J MKA (JAPAN) বাস; ফিক্সড টাইম স্পেশাল গেইটলক সার্ভিস।",
  },
  {
    id: 25,
    name: "লুবনা গেইটলক",
    type: "বাস",
    route: "নালিতাবাড়ী → ঢাকা",
    departure: "নালিতাবাড়ী থেকে ভোর ৫:৫৫",
    returnTime: "ঢাকা থেকে দুপুর ১:২০",
    phone: "01310257636",
    description:
      "তিনানী-ননী-বারমারী গাড়ি; ফিক্সড টাইম গেইটলক সার্ভিস।",
  },

  // =========================
  // স্থানীয় পরিবহন
  // =========================
  {
    id: 26,
    name: "লোকাল বাস",
    type: "লোকাল বাস",
    route: "নালিতাবাড়ী → শেরপুর সদর",
    departure: "সকাল থেকে",
    fare: "প্রায় ৩০–৫০ টাকা",
    description:
      "নালিতাবাড়ী থেকে শেরপুর সদরসহ বিভিন্ন স্থানীয় রুটে লোকাল বাস চলাচল করে।",
  },
  {
    id: 27,
    name: "সিএনজি অটোরিকশা",
    type: "সিএনজি",
    route: "নালিতাবাড়ী শহর ও আশপাশের এলাকা",
    departure: "প্রয়োজন অনুযায়ী",
    description:
      "শহরের অভ্যন্তরে এবং আশপাশের বিভিন্ন এলাকায় দ্রুত যাতায়াতের জন্য ব্যবহৃত হয়।",
  },
  {
    id: 28,
    name: "অটোরিকশা / ইজিবাইক",
    type: "অটোরিকশা",
    route: "নালিতাবাড়ী পৌর এলাকা",
    departure: "প্রয়োজন অনুযায়ী",
    description:
      "পৌর এলাকার স্বল্প দূরত্বের যাতায়াতে সহজলভ্য পরিবহন।",
  },
  {
    id: 29,
    name: "ভাড়ায় মোটরসাইকেল",
    type: "মোটরসাইকেল",
    route: "নালিতাবাড়ী → পর্যটন এলাকা",
    departure: "প্রয়োজন অনুযায়ী",
    description:
      "মধুটিলা ও পানিহাটা-তারানিসহ বিভিন্ন পর্যটন স্থানে যাওয়ার জন্য ভাড়ায় মোটরসাইকেল পাওয়া যায়।",
  },
];

const categories = [
  {
    label: "সব",
    value: "সব",
    icon: Route,
  },
  {
    label: "বাস",
    value: "বাস",
    icon: Bus,
  },
  {
    label: "লোকাল বাস",
    value: "লোকাল বাস",
    icon: Bus,
  },
  {
    label: "সিএনজি",
    value: "সিএনজি",
    icon: CarFront,
  },
  {
    label: "অটোরিকশা",
    value: "অটোরিকশা",
    icon: CarFront,
  },
  {
    label: "মোটরসাইকেল",
    value: "মোটরসাইকেল",
    icon: Bike,
  },
]

function getIcon(type: TransportType) {
  switch (type) {
    case "বাস":
    case "লোকাল বাস":
      return Bus
    case "সিএনজি":
    case "অটোরিকশা":
      return CarFront
    case "মোটরসাইকেল":
      return Bike
    case "ট্রেন":
      return TrainFront
    default:
      return Route
  }
}

export default function TransportPage() {
  const [search, setSearch] = React.useState("")
  const [category, setCategory] = React.useState("সব")

  const filteredTransports = React.useMemo(() => {
    return transports.filter((transport) => {
      const matchesCategory =
        category === "সব" || transport.type === category

      const searchText = search.toLowerCase().trim()

      const matchesSearch =
        !searchText ||
        transport.name.toLowerCase().includes(searchText) ||
        transport.route.toLowerCase().includes(searchText) ||
        transport.type.toLowerCase().includes(searchText)

      return matchesCategory && matchesSearch
    })
  }, [search, category])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-background to-green-500/5" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background/80 px-3 py-1.5 text-sm font-medium backdrop-blur">
              <Bus className="h-4 w-4 text-emerald-600" />
              নালিতাবাড়ী পরিবহন তথ্য
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              নালিতাবাড়ীর{" "}
              <span className="text-emerald-600">পরিবহন</span>
            </h1>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              ঢাকা, শেরপুর ও নালিতাবাড়ীর বিভিন্ন রুটের বাস,
              লোকাল পরিবহন এবং স্থানীয় যাতায়াতের তথ্য এক জায়গায়।
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="#transport-list">
                  পরিবহন দেখুন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button variant="outline" asChild>
                <Link href="/places">
                  পর্যটন গন্তব্য দেখুন
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border bg-card p-5">
            <Bus className="h-6 w-6 text-emerald-600" />
            <p className="mt-3 text-2xl font-bold">
              {transports.filter((item) => item.type === "বাস").length}
            </p>
            <p className="text-sm text-muted-foreground">
              আন্তঃজেলা বাস সার্ভিস
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5">
            <Route className="h-6 w-6 text-emerald-600" />
            <p className="mt-3 text-2xl font-bold">ঢাকা</p>
            <p className="text-sm text-muted-foreground">
              প্রধান দূরপাল্লার রুট
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5">
            <CarFront className="h-6 w-6 text-emerald-600" />
            <p className="mt-3 text-2xl font-bold">CNG</p>
            <p className="text-sm text-muted-foreground">
              স্থানীয় যাতায়াত
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-5">
            <MapPin className="h-6 w-6 text-emerald-600" />
            <p className="mt-3 text-2xl font-bold">স্থানীয়</p>
            <p className="text-sm text-muted-foreground">
              শহর ও পর্যটন রুট
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section
        id="transport-list"
        className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-14 sm:px-6 lg:px-8"
      >
        <div className="rounded-3xl border bg-card p-5 sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                পরিবহন তালিকা
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                রুট, পরিবহনের নাম অথবা ধরন দিয়ে খুঁজুন।
              </p>
            </div>

            <div className="relative w-full lg:max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="পরিবহন বা রুট খুঁজুন..."
                className="pl-9"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
            {categories.map((item) => {
              const Icon = item.icon
              const active = category === item.value

              return (
                <Button
                  key={item.value}
                  type="button"
                  variant={active ? "default" : "outline"}
                  className="shrink-0"
                  onClick={() => setCategory(item.value)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              )
            })}
          </div>

          {/* Cards */}
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredTransports.map((transport) => {
              const Icon = getIcon(transport.type)

              return (
                <article
                  key={transport.id}
                  className="group rounded-2xl border bg-background p-5 transition-all hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                      {transport.type}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold">
                    {transport.name}
                  </h3>

                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex gap-3">
                      <Route className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <span>{transport.route}</span>
                    </div>

                    <div className="flex gap-3">
                      <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                      <span>{transport.departure}</span>
                    </div>

                    {transport.returnTime && (
                      <div className="flex gap-3">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <span>{transport.returnTime}</span>
                      </div>
                    )}

                    {transport.fare && (
                      <div className="flex gap-3">
                        <Ticket className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                        <span>{transport.fare}</span>
                      </div>
                    )}
                  </div>

                  {transport.description && (
                    <p className="mt-4 border-t pt-4 text-sm leading-6 text-muted-foreground">
                      {transport.description}
                    </p>
                  )}

                  {transport.phone && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-5 w-full"
                      asChild
                    >
                      <a href={`tel:${transport.phone}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        {transport.phone}
                      </a>
                    </Button>
                  )}
                </article>
              )
            })}
          </div>

          {filteredTransports.length === 0 && (
            <div className="py-16 text-center">
              <Bus className="mx-auto h-10 w-10 text-muted-foreground" />

              <h3 className="mt-4 text-lg font-semibold">
                কোনো পরিবহন পাওয়া যায়নি
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                অন্য কোনো নাম, রুট অথবা ক্যাটাগরি দিয়ে চেষ্টা করুন।
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Travel Information */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-emerald-600">
                ভ্রমণ তথ্য
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                নালিতাবাড়ী পৌঁছানোর সহজ পথ
              </h2>

              <p className="mt-4 leading-7 text-muted-foreground">
                ঢাকা থেকে নালিতাবাড়ী যেতে ময়মনসিংহ ও শেরপুর হয়ে
                সড়কপথ ব্যবহার করা যায়। নালিতাবাড়ী থেকে স্থানীয়
                CNG, অটোরিকশা ও মোটরসাইকেলের মাধ্যমে বিভিন্ন এলাকায়
                যাওয়া যায়।
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 shrink-0 text-emerald-600" />

                <div>
                  <h3 className="font-semibold">
                    গুরুত্বপূর্ণ বাস টার্মিনাল
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    নালিতাবাড়ী বাস স্ট্যান্ড থেকে ঢাকা ও আশপাশের
                    বিভিন্ন রুটে বাস চলাচল করে।
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Nalitabari+Bus+Stand"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm font-medium text-emerald-600 hover:underline"
                  >
                    Google Maps-এ দেখুন
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tourism */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-emerald-600 p-7 text-white sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-emerald-100">
              পর্যটন পরিবহন
            </p>

            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              নালিতাবাড়ীর দর্শনীয় স্থানে যান
            </h2>

            <p className="mt-3 leading-7 text-emerald-50">
              মধুটিলা ইকোপার্ক, পানিহাটা-তারানিসহ বিভিন্ন
              পর্যটন এলাকায় স্থানীয় CNG, অটোরিকশা ও মোটরসাইকেল
              ব্যবহার করা যায়।
            </p>

            <Button
              variant="secondary"
              className="mt-6"
              asChild
            >
              <Link href="/places">
                দর্শনীয় স্থান দেখুন
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-muted/30 p-5 text-sm leading-6 text-muted-foreground">
          <strong className="text-foreground">
            তথ্য যাচাই:
          </strong>{" "}
          বাসের সময়, ভাড়া ও যোগাযোগ নম্বর পরিবর্তিত হতে পারে।
          যাত্রার আগে সংশ্লিষ্ট কাউন্টার/পরিবহন কর্তৃপক্ষের কাছে
          সর্বশেষ তথ্য যাচাই করুন।
        </div>
      </section>
    </main>
  )
}
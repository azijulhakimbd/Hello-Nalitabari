"use client";

import * as React from "react";
import {
  Search,
  Building2,
  Hospital,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Phone,
  MapPin,
  Users,
  School,
  Ambulance,
  Flame,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type DirectoryCategory = {
  title: string;
  description: string;
  icon: React.ElementType;
  count: string;
  color: string;
  items: string[];
};

type EmergencyService = {
  title: string;
  number: string;
  icon: React.ElementType;
};

type PopularDirectory = {
  title: string;
  category: string;
  location: string;
  icon: React.ElementType;
};

const directoryData: DirectoryCategory[] = [
  {
    title: "সরকারি অফিস",
    description:
      "উপজেলার বিভিন্ন সরকারি দপ্তর ও গুরুত্বপূর্ণ কার্যালয়ের তথ্য",
    icon: Building2,
    count: "২৫+",
    color: "bg-emerald-50 text-emerald-700",
    items: [
      "উপজেলা নির্বাহী অফিসারের কার্যালয়",
      "উপজেলা ভূমি অফিস",
      "উপজেলা সমাজসেবা কার্যালয়",
      "উপজেলা কৃষি অফিস",
      "উপজেলা প্রাণিসম্পদ অফিস",
    ],
  },
  {
    title: "স্বাস্থ্যসেবা",
    description:
      "হাসপাতাল, ক্লিনিক, চিকিৎসক ও জরুরি স্বাস্থ্যসেবার তথ্য",
    icon: Hospital,
    count: "২০+",
    color: "bg-red-50 text-red-600",
    items: [
      "উপজেলা স্বাস্থ্য কমপ্লেক্স",
      "কমিউনিটি ক্লিনিক",
      "সরকারি চিকিৎসক",
      "বেসরকারি হাসপাতাল",
      "অ্যাম্বুলেন্স সেবা",
    ],
  },
  {
    title: "শিক্ষাপ্রতিষ্ঠান",
    description:
      "স্কুল, কলেজ, মাদ্রাসা ও অন্যান্য শিক্ষাপ্রতিষ্ঠানের তথ্য",
    icon: GraduationCap,
    count: "১৫০+",
    color: "bg-blue-50 text-blue-700",
    items: [
      "সরকারি উচ্চ বিদ্যালয়",
      "বেসরকারি বিদ্যালয়",
      "কলেজ",
      "মাদ্রাসা",
      "প্রাথমিক বিদ্যালয়",
    ],
  },
  {
    title: "ব্যাংক ও আর্থিক প্রতিষ্ঠান",
    description:
      "ব্যাংক, এনজিও ও আর্থিক প্রতিষ্ঠানের প্রয়োজনীয় তথ্য",
    icon: Landmark,
    count: "৩০+",
    color: "bg-purple-50 text-purple-700",
    items: [
      "সরকারি ব্যাংক",
      "বেসরকারি ব্যাংক",
      "এজেন্ট ব্যাংকিং",
      "এনজিও",
      "মোবাইল ব্যাংকিং",
    ],
  },
  {
    title: "আইন-শৃঙ্খলা",
    description:
      "পুলিশ, ফায়ার সার্ভিস ও আইন-শৃঙ্খলা সংক্রান্ত তথ্য",
    icon: ShieldCheck,
    count: "১০+",
    color: "bg-orange-50 text-orange-700",
    items: [
      "নালিতাবাড়ী থানা",
      "পুলিশ ফাঁড়ি",
      "ফায়ার সার্ভিস",
      "আনসার ও ভিডিপি",
      "জরুরি আইন-শৃঙ্খলা সেবা",
    ],
  },
  {
    title: "জনপ্রতিনিধি",
    description:
      "উপজেলা ও ইউনিয়ন পর্যায়ের জনপ্রতিনিধিদের তথ্য",
    icon: Users,
    count: "১২+",
    color: "bg-teal-50 text-teal-700",
    items: [
      "উপজেলা পরিষদ",
      "উপজেলা চেয়ারম্যান",
      "ভাইস চেয়ারম্যান",
      "ইউনিয়ন পরিষদ",
      "ইউপি চেয়ারম্যান",
    ],
  },
];

const emergencyServices: EmergencyService[] = [
  {
    title: "জাতীয় জরুরি সেবা",
    number: "৯৯৯",
    icon: Phone,
  },
  {
    title: "অ্যাম্বুলেন্স",
    number: "৯৯৯",
    icon: Ambulance,
  },
  {
    title: "ফায়ার সার্ভিস",
    number: "৯৯৯",
    icon: Flame,
  },
  {
    title: "পুলিশ",
    number: "৯৯৯",
    icon: ShieldCheck,
  },
];

const popularDirectory: PopularDirectory[] = [
  {
    title: "নালিতাবাড়ী উপজেলা পরিষদ",
    category: "সরকারি অফিস",
    location: "নালিতাবাড়ী, শেরপুর",
    icon: Building2,
  },
  {
    title: "নালিতাবাড়ী উপজেলা স্বাস্থ্য কমপ্লেক্স",
    category: "স্বাস্থ্যসেবা",
    location: "নালিতাবাড়ী, শেরপুর",
    icon: Hospital,
  },
  {
    title: "নালিতাবাড়ী থানা",
    category: "আইন-শৃঙ্খলা",
    location: "নালিতাবাড়ী, শেরপুর",
    icon: ShieldCheck,
  },
  {
    title: "নালিতাবাড়ী সরকারি উচ্চ বিদ্যালয়",
    category: "শিক্ষাপ্রতিষ্ঠান",
    location: "নালিতাবাড়ী, শেরপুর",
    icon: School,
  },
];

export default function DirectoryPage() {
  const [search, setSearch] = React.useState<string>("");

  const filteredCategories = directoryData.filter((item) => {
    const text =
      `${item.title} ${item.description} ${item.items.join(" ")}`.toLowerCase();

    return text.includes(search.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-green-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center text-white">
            <Badge className="mb-5 border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur hover:bg-white/10">
              নালিতাবাড়ী তথ্য বাতায়ন
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              নালিতাবাড়ী ডিরেক্টরি
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-green-50 md:text-lg">
              নালিতাবাড়ী উপজেলার সরকারি-বেসরকারি প্রতিষ্ঠান,
              স্বাস্থ্যসেবা, শিক্ষাপ্রতিষ্ঠান, ব্যাংক, জরুরি সেবা এবং
              গুরুত্বপূর্ণ যোগাযোগের তথ্য এক জায়গায় খুঁজে নিন।
            </p>

            {/* Search */}
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <Input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="প্রতিষ্ঠান, সেবা বা বিভাগের নাম লিখে খুঁজুন..."
                  className="h-14 rounded-2xl border-0 bg-white pl-12 pr-4 text-base text-foreground shadow-xl placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="-mt-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["সরকারি অফিস", "২৫+"],
              ["শিক্ষাপ্রতিষ্ঠান", "১৫০+"],
              ["স্বাস্থ্যসেবা", "২০+"],
              ["গুরুত্বপূর্ণ সেবা", "৫০+"],
            ].map(([label, value]) => (
              <Card
                key={label}
                className="border-green-100 bg-card/95 shadow-lg backdrop-blur"
              >
                <CardContent className="p-5 text-center">
                  <p className="text-2xl font-bold text-green-700 md:text-3xl">
                    {value}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <Badge
            variant="outline"
            className="mb-3 border-green-200 text-green-700"
          >
            সেবা ও তথ্য
          </Badge>

          <h2 className="text-3xl font-bold md:text-4xl">
            বিভাগ অনুযায়ী তথ্য খুঁজুন
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            আপনার প্রয়োজনীয় তথ্য দ্রুত খুঁজে পেতে নিচের বিভাগগুলো থেকে
            নির্বাচন করুন।
          </p>
        </div>

        {filteredCategories.length === 0 ? (
          <Card className="mx-auto max-w-xl">
            <CardContent className="p-10 text-center">
              <Search className="mx-auto h-10 w-10 text-muted-foreground" />

              <h3 className="mt-4 text-xl font-semibold">
                কোনো তথ্য পাওয়া যায়নি
              </h3>

              <p className="mt-2 text-muted-foreground">
                অন্য কোনো শব্দ দিয়ে আবার চেষ্টা করুন।
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="group overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl"
                >
                  <CardContent className="p-0">
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                        >
                          <Icon className="h-6 w-6" />
                        </div>

                        <Badge
                          variant="secondary"
                          className="bg-green-50 text-green-700"
                        >
                          {item.count}
                        </Badge>
                      </div>

                      <h3 className="mt-5 text-xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>

                      <div className="mt-5 space-y-2">
                        {item.items.map((subItem) => (
                          <div
                            key={subItem}
                            className="flex items-center gap-2 text-sm"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                            <span>{subItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t bg-muted/30 p-4">
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-green-700 hover:bg-green-50 hover:text-green-800"
                      >
                        বিস্তারিত দেখুন
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </section>

      {/* Emergency */}
      <section className="bg-green-50/70 py-16 dark:bg-green-950/20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-100">
              জরুরি সেবা
            </Badge>

            <h2 className="text-3xl font-bold md:text-4xl">
              জরুরি প্রয়োজনে যোগাযোগ
            </h2>

            <p className="mt-3 text-muted-foreground">
              জরুরি পরিস্থিতিতে দ্রুত সঠিক নম্বরে যোগাযোগ করুন।
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {emergencyServices.map((service) => {
              const Icon = service.icon;

              return (
                <Card
                  key={service.title}
                  className="border-red-100 bg-background transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-4 font-semibold">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-2xl font-bold text-red-600">
                      {service.number}
                    </p>

                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="mt-4 w-full border-red-200 text-red-600 hover:bg-red-50"
                    >
                      <a href={`tel:${service.number}`}>
                        <Phone className="mr-2 h-4 w-4" />
                        কল করুন
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Directory */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Badge
              variant="outline"
              className="mb-3 border-green-200 text-green-700"
            >
              জনপ্রিয় প্রতিষ্ঠান
            </Badge>

            <h2 className="text-3xl font-bold md:text-4xl">
              গুরুত্বপূর্ণ প্রতিষ্ঠান
            </h2>

            <p className="mt-3 text-muted-foreground">
              নালিতাবাড়ীর কিছু গুরুত্বপূর্ণ প্রতিষ্ঠানের তথ্য।
            </p>
          </div>

          <Button
            variant="outline"
            className="border-green-200 text-green-700 hover:bg-green-50"
          >
            সব দেখুন
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {popularDirectory.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group transition hover:border-green-200 hover:shadow-lg"
              >
                <CardContent className="flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-950/40">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-green-50 text-green-700"
                    >
                      {item.category}
                    </Badge>

                    <h3 className="font-semibold">{item.title}</h3>

                    <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" />
                      {item.location}
                    </div>
                  </div>

                  <Button
                    size="icon"
                    variant="ghost"
                    className="shrink-0 text-green-700 hover:bg-green-50"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 pb-16">
        <Card className="overflow-hidden border-0 bg-gradient-to-r from-green-700 to-emerald-600 text-white shadow-xl">
          <CardContent className="relative p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10" />

            <div className="absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-white/10" />

            <div className="relative max-w-3xl">
              <h2 className="text-2xl font-bold md:text-3xl">
                আপনার এলাকার তথ্য আমাদের জানান
              </h2>

              <p className="mt-3 leading-7 text-green-50">
                কোনো প্রতিষ্ঠান, সেবা বা গুরুত্বপূর্ণ তথ্য আমাদের
                ডিরেক্টরিতে যুক্ত করতে চাইলে তথ্য পাঠাতে পারেন।
              </p>

              <Button className="mt-6 bg-white text-green-700 hover:bg-green-50">
                তথ্য জমা দিন
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
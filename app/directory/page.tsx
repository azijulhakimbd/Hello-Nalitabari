"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  Phone,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RouteIcon } from "@/components/data/route-icon";
import { useRouteData } from "@/components/data/use-route-data";

/* =========================================================
   TYPES
========================================================= */

type DirectoryCategory = {
  title: string;
  description: string;
  icon: React.ElementType | string;
  count: string;
  color: string;
  href: string;
  items: string[];
};

type EmergencyService = {
  title: string;
  number: string;
  icon: React.ElementType | string;
  href?: string;
};

type PopularDirectory = {
  title: string;
  category: string;
  location: string;
  icon: React.ElementType | string;
  href: string;
};

/* =========================================================
   DIRECTORY CATEGORIES
========================================================= */



/* =========================================================
   EMERGENCY SERVICES
========================================================= */



/* =========================================================
   POPULAR DIRECTORY
========================================================= */



type MongoDirectoryCategory = Omit<DirectoryCategory, "icon"> & { icon: string };
type MongoEmergencyService = Omit<EmergencyService, "icon"> & { icon: string };
type MongoPopularDirectory = Omit<PopularDirectory, "icon"> & { icon: string };

/* =========================================================
   STATS
========================================================= */

const directoryStats = [
  {
    label: "সরকারি অফিস",
    value: "২৫+",
  },
  {
    label: "শিক্ষাপ্রতিষ্ঠান",
    value: "১৫০+",
  },
  {
    label: "স্বাস্থ্যসেবা",
    value: "২০+",
  },
  {
    label: "গুরুত্বপূর্ণ সেবা",
    value: "৫০+",
  },
];

/* =========================================================
   PAGE
========================================================= */

export default function DirectoryPage() {
  const [search, setSearch] = React.useState("");
  const { data: directoryData } = useRouteData<MongoDirectoryCategory>("directory-categories");
  const { data: emergencyServices } = useRouteData<MongoEmergencyService>("directory-emergency-services");
  const { data: popularDirectory } = useRouteData<MongoPopularDirectory>("directory-popular");

  const filteredCategories = React.useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return directoryData;
    }

    return directoryData.filter((item) => {
      const text = [
        item.title,
        item.description,
        ...item.items,
      ]
        .join(" ")
        .toLowerCase();

      return text.includes(query);
    });
  }, [directoryData, search]);

  return (
    <main className="min-h-screen bg-background">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-green-500">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%)]" />

        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

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
                  aria-label="ডিরেক্টরি অনুসন্ধান"
                  className="h-14 rounded-2xl border-0 bg-white pl-12 pr-12 text-base text-foreground shadow-xl placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white"
                />

                {search && (
                  <button
                    type="button"
                    onClick={() => setSearch("")}
                    aria-label="অনুসন্ধান মুছে ফেলুন"
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
                  >
                    মুছুন
                  </button>
                )}
              </div>

              {search && (
                <p className="mt-3 text-sm text-green-50">
                  &quot;{search}&quot; এর জন্য{" "}
                  <span className="font-semibold">
                    {filteredCategories.length}
                  </span>{" "}
                  টি বিভাগ পাওয়া গেছে
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="relative z-10 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {directoryStats.map((stat) => (
              <Card
                key={stat.label}
                className="border-green-100 bg-card/95 shadow-lg backdrop-blur"
              >
                <CardContent className="p-5 text-center">
                  <p className="text-2xl font-bold text-green-700 md:text-3xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORIES
      ====================================================== */}

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

              <Button
                type="button"
                variant="outline"
                onClick={() => setSearch("")}
                className="mt-5"
              >
                সব বিভাগ দেখুন
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCategories.map((item) => {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group block h-full outline-none"
                >
                  <Card className="h-full overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2">
                    <CardContent className="flex h-full flex-col p-0">
                      <div className="flex-1 p-6">
                        <div className="flex items-start justify-between">
                          <div
                            className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color}`}
                          >
                            <RouteIcon name={item.icon} className="h-6 w-6" />
                          </div>

                          <Badge
                            variant="secondary"
                            className="bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400"
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
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />

                              <span>{subItem}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="border-t bg-muted/30 p-4">
                        <div className="flex w-full items-center justify-between text-green-700">
                          <span className="font-medium">
                            বিস্তারিত দেখুন
                          </span>

                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* =====================================================
          EMERGENCY SERVICES
      ====================================================== */}

      <section className="bg-green-50/70 py-16 dark:bg-green-950/20">
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <Badge className="mb-3 bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-950/40 dark:text-red-400">
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
              return (
                <Card
                  key={service.title}
                  className="border-red-100 bg-background transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/40 dark:text-red-400">
                      <RouteIcon name={service.icon} className="h-6 w-6" />
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
                      className="mt-4 w-full border-red-200 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
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

      {/* =====================================================
          POPULAR DIRECTORY
      ====================================================== */}

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
            asChild
            variant="outline"
            className="border-green-200 text-green-700 hover:bg-green-50"
          >
            <Link href="/directory">
              সব দেখুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {popularDirectory.map((item) => {
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group block outline-none"
              >
                <Card className="transition-all duration-300 hover:border-green-200 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400">
                      <RouteIcon name={item.icon} className="h-6 w-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <Badge
                        variant="secondary"
                        className="mb-2 bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-400"
                      >
                        {item.category}
                      </Badge>

                      <h3 className="font-semibold">
                        {item.title}
                      </h3>

                      <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 shrink-0" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-green-700 transition group-hover:bg-green-50 dark:group-hover:bg-green-950/40">
                      <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

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

              <Button
                asChild
                className="mt-6 bg-white text-green-700 hover:bg-green-50"
              >
                <Link href="/submit">
                  তথ্য জমা দিন
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
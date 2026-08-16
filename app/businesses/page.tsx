"use client";

import * as React from "react";
import {
  Search,
  MapPin,
  Phone,
  Globe,
  Building2,
  Store,
  Utensils,
  ShoppingBag,
  Wrench,
  BriefcaseBusiness,
  Filter,
  ExternalLink,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

type Business = {
  id: number;
  name: string;
  category: string;
  description: string;
  address: string;
  phone?: string;
  website?: string;
  mapsUrl?: string;
  icon: React.ElementType;
};

const businesses: Business[] = [
  {
    id: 1,
    name: "নালিতাবাড়ী বাজার",
    category: "বাজার ও শপিং",
    description:
      "নালিতাবাড়ী উপজেলার অন্যতম প্রধান বাণিজ্যিক এলাকা। এখানে বিভিন্ন ধরনের দোকান ও ব্যবসা প্রতিষ্ঠান রয়েছে।",
    address: "নালিতাবাড়ী পৌরসভা, শেরপুর",
    mapsUrl: "https://maps.google.com/",
    icon: ShoppingBag,
  },
  {
    id: 2,
    name: "নালিতাবাড়ী হোটেল অ্যান্ড রেস্টুরেন্ট",
    category: "রেস্টুরেন্ট",
    description:
      "স্থানীয় ও দেশীয় খাবারের জন্য পরিচিত একটি খাবারের প্রতিষ্ঠান।",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "01700000000",
    mapsUrl: "https://maps.google.com/",
    icon: Utensils,
  },
  {
    id: 3,
    name: "মা ডিজিটাল সেন্টার",
    category: "ডিজিটাল সেবা",
    description:
      "অনলাইন আবেদন, প্রিন্ট, ফটোকপি, কম্পিউটার ও বিভিন্ন ডিজিটাল সেবা প্রদান করা হয়।",
    address: "নালিতাবাড়ী বাজার, শেরপুর",
    phone: "01800000000",
    icon: BriefcaseBusiness,
  },
  {
    id: 4,
    name: "নালিতাবাড়ী ইলেকট্রনিক্স",
    category: "ইলেকট্রনিক্স",
    description:
      "ইলেকট্রনিক পণ্য, মোবাইল অ্যাক্সেসরিজ এবং বিভিন্ন প্রযুক্তি পণ্য পাওয়া যায়।",
    address: "নালিতাবাড়ী বাজার, শেরপুর",
    phone: "01900000000",
    icon: Store,
  },
  {
    id: 5,
    name: "জনতা হার্ডওয়্যার",
    category: "হার্ডওয়্যার",
    description:
      "নির্মাণ সামগ্রী, হার্ডওয়্যার ও বিভিন্ন প্রয়োজনীয় সরঞ্জামের দোকান।",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "01600000000",
    icon: Wrench,
  },
  {
    id: 6,
    name: "নালিতাবাড়ী ফার্মেসি",
    category: "ফার্মেসি",
    description:
      "স্থানীয়ভাবে ওষুধ ও স্বাস্থ্যসেবা সংক্রান্ত পণ্য সরবরাহকারী প্রতিষ্ঠান।",
    address: "নালিতাবাড়ী সদর, শেরপুর",
    phone: "01500000000",
    icon: Building2,
  },
];

const categories = [
  "সকল",
  ...Array.from(new Set(businesses.map((business) => business.category))),
];

export default function BusinessesPage() {
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("সকল");

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch =
      business.name.toLowerCase().includes(search.toLowerCase()) ||
      business.category.toLowerCase().includes(search.toLowerCase()) ||
      business.address.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "সকল" || business.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-emerald-600 via-green-600 to-teal-700 text-white">
        <div className="absolute inset-0 bg-black/10" />

        <div className="container relative mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
              <Store className="h-8 w-8" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              ব্যবসা প্রতিষ্ঠান
            </h1>

            <p className="mt-4 text-base text-emerald-50 md:text-lg">
              নালিতাবাড়ী উপজেলার বিভিন্ন ব্যবসা প্রতিষ্ঠান, দোকান,
              রেস্টুরেন্ট ও সেবাদানকারী প্রতিষ্ঠানের তথ্য খুঁজে নিন।
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="container mx-auto px-4 py-8">
        <Card className="mx-auto max-w-5xl shadow-sm">
          <CardContent className="p-4 md:p-6">
            <div className="grid gap-4 md:grid-cols-[1fr_240px_auto]">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="ব্যবসা প্রতিষ্ঠানের নাম বা ঠিকানা খুঁজুন..."
                  className="pl-10"
                />
              </div>

              {/* Category */}
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="ক্যাটাগরি নির্বাচন করুন" />
                </SelectTrigger>

                <SelectContent>
                  {categories.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Reset */}
              <Button
                variant="outline"
                onClick={() => {
                  setSearch("");
                  setCategory("সকল");
                }}
              >
                রিসেট
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Results */}
      <section className="container mx-auto px-4 pb-16">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">ব্যবসা প্রতিষ্ঠান</h2>
            <p className="text-sm text-muted-foreground">
              মোট {filteredBusinesses.length}টি প্রতিষ্ঠান পাওয়া গেছে
            </p>
          </div>

          <Badge variant="secondary" className="w-fit">
            <Store className="mr-1 h-3.5 w-3.5" />
            ব্যবসা ডিরেক্টরি
          </Badge>
        </div>

        {filteredBusinesses.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBusinesses.map((business) => {
              const Icon = business.icon;

              return (
                <Card
                  key={business.id}
                  className="group flex h-full flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardHeader>
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                        <Icon className="h-6 w-6" />
                      </div>

                      <Badge variant="outline">
                        {business.category}
                      </Badge>
                    </div>

                    <CardTitle className="text-xl">
                      {business.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1 space-y-4">
                    <p className="text-sm leading-6 text-muted-foreground">
                      {business.description}
                    </p>

                    <div className="flex items-start gap-2 text-sm">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      <span>{business.address}</span>
                    </div>

                    {business.phone && (
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-emerald-600" />
                        <a
                          href={`tel:${business.phone}`}
                          className="hover:text-emerald-600"
                        >
                          {business.phone}
                        </a>
                      </div>
                    )}
                  </CardContent>

                  <CardFooter className="flex flex-wrap gap-2 border-t bg-muted/30 pt-4">
                    {business.phone && (
                      <Button asChild size="sm">
                        <a href={`tel:${business.phone}`}>
                          <Phone className="mr-2 h-4 w-4" />
                          কল করুন
                        </a>
                      </Button>
                    )}

                    {business.mapsUrl && (
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={business.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="mr-2 h-4 w-4" />
                          ম্যাপ
                        </a>
                      </Button>
                    )}

                    {business.website && (
                      <Button asChild size="sm" variant="outline">
                        <a
                          href={business.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="mr-2 h-4 w-4" />
                          ওয়েবসাইট
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ) : (
          <Card className="py-16 text-center">
            <CardContent>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <Search className="h-7 w-7 text-muted-foreground" />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                কোনো প্রতিষ্ঠান পাওয়া যায়নি
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                আপনার সার্চ বা ক্যাটাগরি পরিবর্তন করে আবার চেষ্টা করুন।
              </p>

              <Button
                variant="outline"
                className="mt-5"
                onClick={() => {
                  setSearch("");
                  setCategory("সকল");
                }}
              >
                সব প্রতিষ্ঠান দেখুন
              </Button>
            </CardContent>
          </Card>
        )}
      </section>

      {/* Submit CTA */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <Card className="overflow-hidden border-emerald-200 bg-emerald-50 dark:border-emerald-900 dark:bg-emerald-950/30">
            <CardContent className="flex flex-col items-center justify-between gap-6 p-6 text-center md:flex-row md:p-8 md:text-left">
              <div>
                <h2 className="text-xl font-bold md:text-2xl">
                  আপনার ব্যবসা এখানে যুক্ত করুন
                </h2>

                <p className="mt-2 text-sm text-muted-foreground md:max-w-2xl">
                  নালিতাবাড়ীর কোনো ব্যবসা প্রতিষ্ঠান বা সেবাদানকারী প্রতিষ্ঠানের
                  তথ্য আমাদের ডিরেক্টরিতে যুক্ত করতে পারেন।
                </p>
              </div>

              <Button asChild className="shrink-0">
                <a href="/submit">
                  <Building2 className="mr-2 h-4 w-4" />
                  তথ্য জমা দিন
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
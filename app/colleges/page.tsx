"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Building2,
  GraduationCap,
  MapPin,
  Phone,
  Search,
  School,
  Sparkles,
  X,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const colleges = [
  {
    id: "nazmul-smriti",
    name: "সরকারি নাজমুল স্মৃতি কলেজ",
    englishName: "Govt. Nazmul Smriti College",
    eiin: "113826",
    type: "Government College",
    level: "Degree & Honours",
    location: "নালিতাবাড়ী পৌরসভা, নালিতাবাড়ী, শেরপুর",
    phone: "01984389699",
    established: "1972",
    image:
      "/colleges/Nazmul.png",
    description:
      "নালিতাবাড়ী উপজেলার অন্যতম গুরুত্বপূর্ণ উচ্চশিক্ষা প্রতিষ্ঠান। কলেজটি উচ্চ মাধ্যমিক ও উচ্চশিক্ষার বিভিন্ন কার্যক্রম পরিচালনা করে।",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Govt+Nazmul+Smriti+College+Nalitabari+Sherpur",
  },
  {
    id: "shahid-abdur-rashid",
    name: "নালিতাবাড়ী শহীদ আব্দুর রশিদ মহিলা কলেজ",
    englishName: "Nalitabari Shahid Abdur Rashid Mohila College",
    eiin: "113827",
    type: "Women's College",
    level: "Degree (Pass)",
    location: "সিটপাড়া, নালিতাবাড়ী, শেরপুর",
    phone: "01712942828",
    established: "1996",
    image:
      "/colleges/Abdur.png",
    description:
      "নালিতাবাড়ীর নারী শিক্ষার্থীদের জন্য গুরুত্বপূর্ণ একটি শিক্ষা প্রতিষ্ঠান। প্রতিষ্ঠানটি ডিগ্রি পর্যায় পর্যন্ত শিক্ষা কার্যক্রম পরিচালনা করে।",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nalitabari+Shahid+Abdur+Rashid+Mohila+College",
  },
  {
    id: "shahid-muktijoddha",
    name: "শহীদ মুক্তিযোদ্ধা কলেজ",
    englishName: "Shaheed Muktijoddha College",
    eiin: "131499",
    type: "College",
    level: "Higher Secondary",
    location: "নালিতাবাড়ী, শেরপুর",
    phone: "01914624625",
    established: "2009",
    image:
      "/colleges/Shohid.png",
    description:
      "নালিতাবাড়ী উপজেলার একটি উচ্চ মাধ্যমিক শিক্ষা প্রতিষ্ঠান। বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা বিভাগে শিক্ষা কার্যক্রম রয়েছে।",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Shaheed+Muktijoddha+College+Nalitabari+Sherpur",
  },
  {
    id: "haji-nurul-haque",
    name: "হাজী নুরুল হক নননী পোড়াগাঁও মৈত্রী কলেজ",
    englishName: "Haji Nurul Haque Nonni Poragaon Moitry College",
    eiin: "135248",
    type: "Non-Government College",
    level: "Higher Secondary",
    location: "নন্নী, নালিতাবাড়ী, শেরপুর",
    phone: "01716235623",
    established: "2011",
    image:
      "/colleges/Hazi.png",
    description:
      "নন্নী এলাকায় অবস্থিত একটি বেসরকারি কলেজ। প্রতিষ্ঠানটিতে বিজ্ঞান, মানবিক ও ব্যবসায় শিক্ষা বিভাগে উচ্চ মাধ্যমিক শিক্ষা কার্যক্রম রয়েছে।",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Haji+Nurul+Haque+Nonni+Poragaon+Moitry+College",
  },
  {
    id: "adarsha-technical",
    name: "আদর্শ টেকনিক্যাল অ্যান্ড বিজনেস ম্যানেজমেন্ট কলেজ",
    englishName: "Adarsha Technical and Business Management College",
    eiin: "132878",
    type: "Technical College",
    level: "Technical & Business Management",
    location: "কালিনগর, নালিতাবাড়ী, শেরপুর",
    phone: "",
    established: "",
    image:
      "/colleges/ATSC.png",
    description:
      "কারিগরি ও ব্যবসায় ব্যবস্থাপনা শিক্ষার জন্য নালিতাবাড়ী উপজেলার একটি শিক্ষা প্রতিষ্ঠান।",
    mapUrl:
      "",
  },
  {
    id: "technical-business",
    name: "নালিতাবাড়ী টেকনিক্যাল অ্যান্ড বিজনেস ম্যানেজমেন্ট কলেজ",
    englishName: "Nalitabari Technical and Business Management College",
    eiin: "132533",
    type: "Technical College",
    level: "Technical & Business Management",
    location: "রাণীগাও, নালিতাবাড়ী, শেরপুর",
    phone: "",
    established: "2004",
    image:
      "/colleges/NTBC.png",
    description:
      "কারিগরি ও ব্যবসায় ব্যবস্থাপনা বিষয়ে শিক্ষা প্রদানের জন্য নালিতাবাড়ীতে অবস্থিত একটি প্রতিষ্ঠান।",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nalitabari+Technical+Business+Management+College",
  },
];

export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredColleges = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return colleges;

    return colleges.filter((college) =>
      [
        college.name,
        college.englishName,
        college.eiin,
        college.type,
        college.level,
        college.location,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-green-50/70 via-background to-emerald-50/40 dark:from-green-950/20 dark:via-background dark:to-emerald-950/20">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden border-b">
        {/* Decorative background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(100,116,139,0.12)_1px,transparent_0)] [background-size:24px_24px]" />
        </div>

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border bg-background/70 shadow-lg backdrop-blur">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/70 px-4 py-2 text-sm shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4 text-primary" />
              Nalitabari Education Directory
            </div>

            <h1 className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-600 bg-clip-text p-3 text-4xl font-extrabold tracking-tight text-transparent md:text-6xl dark:from-green-400 dark:via-emerald-400 dark:to-teal-400">
              নালিতাবাড়ী উপজেলার কলেজসমূহ
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              নালিতাবাড়ী উপজেলার কলেজ, ডিগ্রি কলেজ ও কারিগরি শিক্ষা
              প্রতিষ্ঠান সম্পর্কে তথ্য এক জায়গায় খুঁজে দেখুন।
            </p>

            {/* Search */}
            <div className="mx-auto mt-9 max-w-2xl">
              <div className="group relative flex items-center rounded-2xl border bg-background/80 p-2 shadow-xl shadow-primary/5 backdrop-blur-xl transition-all duration-300 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary/10">
                <Search className="ml-3 h-5 w-5 shrink-0 text-muted-foreground transition-colors group-focus-within:text-primary" />

                <Input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="কলেজের নাম, EIIN, ধরন বা এলাকা দিয়ে খুঁজুন..."
                  className="h-12 border-0 bg-transparent px-3 shadow-none focus-visible:ring-0"
                />

                {searchTerm && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    onClick={clearSearch}
                    className="mr-1 h-9 w-9 rounded-xl"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}

                <Button className="hidden h-11 rounded-xl px-6 sm:flex">
                  Search
                </Button>
              </div>

              {/* Search result */}
              {searchTerm && (
                <div className="mt-3 text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {filteredColleges.length}
                  </span>{" "}
                  টি প্রতিষ্ঠান পাওয়া গেছে
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="container relative mx-auto px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-primary/10 bg-background/70 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="rounded-2xl bg-primary/10 p-3.5">
                <School className="h-6 w-6 text-primary" />
              </div>

              <div>
                <p className="text-2xl font-bold">{colleges.length}+</p>
                <p className="text-sm text-muted-foreground">
                  Listed Institutions
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-500/10 bg-background/70 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="rounded-2xl bg-blue-500/10 p-3.5">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>

              <div>
                <p className="text-2xl font-bold">3+</p>
                <p className="text-sm text-muted-foreground">
                  General Colleges
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-500/10 bg-background/70 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="rounded-2xl bg-purple-500/10 p-3.5">
                <BookOpen className="h-6 w-6 text-purple-600" />
              </div>

              <div>
                <p className="text-2xl font-bold">2+</p>
                <p className="text-sm text-muted-foreground">
                  Technical Colleges
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-500/10 bg-background/70 shadow-sm backdrop-blur transition-all hover:-translate-y-1 hover:shadow-lg">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="rounded-2xl bg-green-500/10 p-3.5">
                <GraduationCap className="h-6 w-6 text-green-600" />
              </div>

              <div>
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm text-muted-foreground">
                  Nalitabari Focused
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ================= COLLEGE LIST ================= */}
      <section className="container mx-auto px-4 pb-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 text-sm font-medium text-primary">
              <School className="h-4 w-4" />
              Education Directory
            </div>

            <h2 className="text-2xl font-bold md:text-3xl">
              কলেজের তালিকা
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              নালিতাবাড়ী উপজেলার বিভিন্ন কলেজ ও শিক্ষা প্রতিষ্ঠানের তথ্য
            </p>
          </div>

          <span className="hidden rounded-full border bg-background px-4 py-2 text-sm shadow-sm md:block">
            {filteredColleges.length}টি প্রতিষ্ঠান
          </span>
        </div>

        {/* No result */}
        {filteredColleges.length === 0 ? (
          <div className="rounded-3xl border border-dashed bg-background/60 px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
              <Search className="h-7 w-7 text-muted-foreground" />
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              কোনো প্রতিষ্ঠান পাওয়া যায়নি
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              অন্য কোনো নাম, EIIN নম্বর অথবা এলাকার নাম দিয়ে চেষ্টা করুন।
            </p>

            <Button
              variant="outline"
              onClick={clearSearch}
              className="mt-5"
            >
              Search Clear করুন
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredColleges.map((college) => (
              <Card
                key={college.id}
                className="group overflow-hidden border-border/60 bg-background/80 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <Image
                    src={college.image}
                    alt={college.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

                  {/* Type */}
                  <div className="absolute left-3 top-3">
                    <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                      {college.type}
                    </span>
                  </div>

                  {/* EIIN */}
                  {college.eiin && (
                    <div className="absolute bottom-3 right-3">
                      <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-900 shadow backdrop-blur">
                        EIIN {college.eiin}
                      </span>
                    </div>
                  )}
                </div>

                <CardHeader className="pb-3">
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-md bg-primary/10 px-2 py-1 font-medium text-primary">
                      {college.level}
                    </span>
                  </div>

                  <CardTitle className="line-clamp-2 text-xl leading-7 transition-colors group-hover:text-primary">
                    {college.name}
                  </CardTitle>

                  <p className="text-sm text-muted-foreground">
                    {college.englishName}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 text-sm">
                    <div className="rounded-lg bg-primary/10 p-1.5">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>

                    <span className="pt-1 text-muted-foreground">
                      {college.location}
                    </span>
                  </div>

                  {college.phone && (
                    <div className="flex items-center gap-3 text-sm">
                      <div className="rounded-lg bg-green-500/10 p-1.5">
                        <Phone className="h-4 w-4 text-green-600" />
                      </div>

                      <a
                        href={`tel:${college.phone}`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {college.phone}
                      </a>
                    </div>
                  )}

                  {college.established && (
                    <div className="flex items-center gap-3 text-sm">
                      <div className="rounded-lg bg-purple-500/10 p-1.5">
                        <GraduationCap className="h-4 w-4 text-purple-600" />
                      </div>

                      <span className="text-muted-foreground">
                        প্রতিষ্ঠিত: {college.established}
                      </span>
                    </div>
                  )}

                  <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
                    {college.description}
                  </p>

                  <div className="flex gap-2 pt-2">
                    <Button
                      asChild
                      className="flex-1 rounded-xl shadow-sm transition-all hover:shadow-md"
                    >
                      <Link href={`/colleges/${college.id}`}>
                        বিস্তারিত
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      className="rounded-xl"
                    >
                      <a
                        href={college.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${college.name} Google Maps`}
                      >
                        <MapPin className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* ================= FOOTER INFO ================= */}
      <section className="relative overflow-hidden border-t bg-muted/30">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.04] via-transparent to-blue-500/[0.04]" />

        <div className="container relative mx-auto px-4 py-10">
          <div className="mx-auto max-w-3xl rounded-2xl border bg-background/60 p-6 text-center shadow-sm backdrop-blur">
            <p className="text-sm leading-7 text-muted-foreground">
              তথ্য বিভিন্ন সরকারি শিক্ষা বোর্ড, শিক্ষা প্রতিষ্ঠানের ওয়েবসাইট
              এবং অনলাইন শিক্ষা-তথ্য উৎস থেকে সংগৃহীত। 
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
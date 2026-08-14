"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Camera,
  MapPin,
  Mountain,
  Search,
  Trees,
  Waves,
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

const places = [
  {
    id: "madhutila-eco-park",
    name: "মধুটিলা ইকোপার্ক",
    englishName: "Madhutila Eco Park",
    location: "পোড়াগাঁও ইউনিয়ন, নালিতাবাড়ী",
    category: "প্রকৃতি",
    icon: Trees,
    image:
      "/places/Modhutila.png",
    description:
      "গারো পাহাড়ের পাদদেশে অবস্থিত মধুটিলা ইকোপার্ক নালিতাবাড়ীর অন্যতম জনপ্রিয় প্রাকৃতিক পর্যটন কেন্দ্র। পাহাড়, বন, সবুজ পরিবেশ ও বিভিন্ন বিনোদন সুবিধার জন্য এটি ভ্রমণপ্রেমীদের কাছে আকর্ষণীয়।",
    highlights: [
      "পাহাড় ও বনাঞ্চলের প্রাকৃতিক সৌন্দর্য",
      "পিকনিক স্পট",
      "শিশুদের বিনোদন ব্যবস্থা",
      "পাহাড়ের চূড়ায় মহুয়া রেস্টহাউস",
      "মিনি চিড়িয়াখানা ও বিভিন্ন উদ্ভিদ",
    ],
  },
  {
    id: "panihata",
    name: "পানিহাতা",
    englishName: "Panihata",
    location: "পানিহাতা, নালিতাবাড়ী",
    category: "পাহাড় ও সীমান্ত",
    icon: Mountain,
    image:
      "/places/Panihata.png",
    description:
      "পানিহাতা নালিতাবাড়ীর উত্তরাঞ্চলের একটি প্রাকৃতিক সৌন্দর্যময় এলাকা। সীমান্তবর্তী পাহাড়, সবুজ প্রকৃতি এবং স্থানীয় পরিবেশের কারণে জায়গাটি প্রকৃতিপ্রেমীদের জন্য আকর্ষণীয়।",
    highlights: [
      "সীমান্তবর্তী প্রাকৃতিক দৃশ্য",
      "পাহাড় ও সবুজ প্রকৃতি",
      "ফটোগ্রাফির জন্য উপযোগী",
      "প্রকৃতি উপভোগের সুযোগ",
    ],
  },
  {
    id: "nalitabari-rubber-dam",
    name: "নালিতাবাড়ী রাবার ড্যাম",
    englishName: "Nalitabari Rubber Dam",
    location: "সন্যাসীভিটা, বাঘবেড় ইউনিয়ন",
    category: "নদী ও জলপ্রকৃতি",
    icon: Waves,
    image:
      "/places/RDN.png",
    description:
      "চেল্লাখালী নদীর ওপর নির্মিত নালিতাবাড়ী রাবার ড্যাম স্থানীয়ভাবে পরিচিত একটি দর্শনীয় স্থান। নদী, পানি ও আশপাশের সবুজ পরিবেশ একসঙ্গে উপভোগ করা যায়।",
    highlights: [
      "চেল্লাখালী নদীর দৃশ্য",
      "রাবার ড্যাম",
      "গ্রামীণ প্রাকৃতিক পরিবেশ",
      "ফটোগ্রাফি",
    ],
  },
  {
    id: "baruamari-mission",
    name: "বারোমারী মিশন",
    englishName: "Baruamari Mission",
    location: "বারোমারী, নালিতাবাড়ী",
    category: "ঐতিহ্য ও সংস্কৃতি",
    icon: Camera,
    image:
      "/places/BM.png",
    description:
      "বারোমারী মিশন নালিতাবাড়ীর উল্লেখযোগ্য ঐতিহাসিক ও সাংস্কৃতিক স্থানগুলোর একটি। স্থানীয় ইতিহাস ও ঐতিহ্যের সঙ্গে জায়গাটির সম্পর্ক রয়েছে।",
    highlights: [
      "ঐতিহাসিক পরিবেশ",
      "স্থানীয় সংস্কৃতি",
      "ঐতিহ্যবাহী স্থাপনা",
      "ফটোগ্রাফির সুযোগ",
    ],
  },
];

const categories = ["সব", ...new Set(places.map((place) => place.category))];

export default function PlacesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("সব");

  const filteredPlaces = useMemo(() => {
    const query = search.toLowerCase().trim();

    return places.filter((place) => {
      const matchesCategory =
        category === "সব" || place.category === category;

      const matchesSearch =
        !query ||
        place.name.toLowerCase().includes(query) ||
        place.englishName.toLowerCase().includes(query) ||
        place.location.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-emerald-500/10" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-medium backdrop-blur">
              <MapPin className="h-4 w-4 text-primary" />
              নালিতাবাড়ী, শেরপুর
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              নালিতাবাড়ীর
              <span className="text-primary"> দর্শনীয় স্থান</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              পাহাড়, বন, নদী, সীমান্ত ও ঐতিহ্যের সৌন্দর্যে সমৃদ্ধ
              নালিতাবাড়ী। ঘুরে দেখুন উপজেলার উল্লেখযোগ্য পর্যটন ও
              দর্শনীয় স্থানগুলো।
            </p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="স্থান, এলাকা বা বিবরণ দিয়ে খুঁজুন..."
                className="h-11 pl-10 pr-10"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => (
                <Button
                  key={item}
                  variant={category === item ? "default" : "outline"}
                  onClick={() => setCategory(item)}
                  className="shrink-0"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Places */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">
              Tourist Guide
            </p>
            <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
              ঘুরে দেখুন
            </h2>
          </div>

          <p className="text-sm text-muted-foreground">
            {filteredPlaces.length} টি স্থান
          </p>
        </div>

        {filteredPlaces.length === 0 ? (
          <Card className="py-16 text-center">
            <CardContent>
              <MapPin className="mx-auto h-10 w-10 text-muted-foreground" />
              <h3 className="mt-4 text-lg font-semibold">
                কোনো স্থান পাওয়া যায়নি
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                অন্য কোনো নাম বা ক্যাটাগরি দিয়ে চেষ্টা করুন।
              </p>

              <Button
                className="mt-5"
                onClick={() => {
                  setSearch("");
                  setCategory("সব");
                }}
              >
                ফিল্টার রিসেট করুন
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPlaces.map((place) => {
              const Icon = place.icon;

              return (
                <Card
                  key={place.id}
                  className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={place.image}
                      alt={place.name}
                      fill
                      unoptimized
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium backdrop-blur">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                        {place.category}
                      </span>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl">
                      {place.name}
                    </CardTitle>

                    <p className="text-sm text-muted-foreground">
                      {place.englishName}
                    </p>

                    <div className="flex items-start gap-2 pt-2 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{place.location}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">
                      {place.description}
                    </p>

                    <Button asChild className="mt-5 w-full">
                      <Link href={`/places/${place.id}`}>
                        বিস্তারিত দেখুন
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
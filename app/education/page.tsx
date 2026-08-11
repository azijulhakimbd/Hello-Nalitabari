import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  GraduationCap,
  MapPin,
  School,
  Search,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const categories = [
  {
    title: "প্রাথমিক বিদ্যালয়",
    description: "নালিতাবাড়ীর প্রাথমিক শিক্ষা প্রতিষ্ঠান।",
    icon: School,
  },
  {
    title: "মাধ্যমিক বিদ্যালয়",
    description: "মাধ্যমিক ও উচ্চ মাধ্যমিক বিদ্যালয়ের তথ্য।",
    icon: Building2,
  },
  {
    title: "কলেজ",
    description: "কলেজ ও উচ্চশিক্ষা প্রতিষ্ঠানের তথ্য।",
    icon: GraduationCap,
  },
  {
    title: "মাদ্রাসা",
    description: "স্থানীয় মাদ্রাসা শিক্ষা প্রতিষ্ঠানের তথ্য।",
    icon: BookOpen,
  },
];

const institutions = [
  {
    name: "নালিতাবাড়ী সরকারি কলেজ",
    type: "কলেজ",
    location: "নালিতাবাড়ী, শেরপুর",
  },
  {
    name: "স্থানীয় মাধ্যমিক বিদ্যালয়সমূহ",
    type: "মাধ্যমিক",
    location: "নালিতাবাড়ী উপজেলা",
  },
  {
    name: "স্থানীয় প্রাথমিক বিদ্যালয়সমূহ",
    type: "প্রাথমিক",
    location: "নালিতাবাড়ী উপজেলা",
  },
];

export default function EducationPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:via-background dark:to-indigo-950/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 rounded-full bg-blue-100 px-4 py-2 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400">
              <GraduationCap className="mr-2 h-4 w-4" />
              শিক্ষা
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              নালিতাবাড়ীর
              <span className="mt-2 block text-blue-600">
                শিক্ষা প্রতিষ্ঠান
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              স্কুল, কলেজ, মাদ্রাসা ও অন্যান্য শিক্ষা প্রতিষ্ঠানের
              তথ্য সহজে খুঁজে নিন।
            </p>

            {/* Search */}
            <div className="mx-auto mt-8 flex max-w-xl gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  placeholder="প্রতিষ্ঠানের নাম খুঁজুন..."
                  className="h-12 pl-10"
                />
              </div>

              <Button size="lg" className="h-12">
                খুঁজুন
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            শিক্ষা প্রতিষ্ঠানের ধরন
          </h2>

          <p className="mt-2 text-muted-foreground">
            আপনার প্রয়োজনীয় প্রতিষ্ঠানের ধরন নির্বাচন করুন।
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Card
                key={category.title}
                className="transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-semibold">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {category.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="mt-3 px-0 text-blue-600 hover:bg-transparent"
                  >
                    প্রতিষ্ঠান দেখুন
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Institution List */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-blue-600">
                শিক্ষা ডিরেক্টরি
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                জনপ্রিয় প্রতিষ্ঠান
              </h2>
            </div>

            <Button asChild variant="outline">
              <Link href="/directory?category=education">
                সব প্রতিষ্ঠান
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {institutions.map((institution) => (
              <Card key={institution.name}>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50">
                    <GraduationCap className="h-6 w-6" />
                  </div>

                  <Badge className="mt-5" variant="secondary">
                    {institution.type}
                  </Badge>

                  <h3 className="mt-3 text-lg font-semibold">
                    {institution.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {institution.location}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-5 w-full"
                  >
                    <Link href="/contact">
                      বিস্তারিত
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
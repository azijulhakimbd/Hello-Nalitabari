import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileText,
  Landmark,
  MapPin,
  Scale,
  Search,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const services = [
  {
    title: "উপজেলা প্রশাসন",
    description:
      "উপজেলা প্রশাসনের বিভিন্ন কার্যক্রম ও যোগাযোগ তথ্য।",
    icon: Landmark,
  },
  {
    title: "ইউনিয়ন পরিষদ",
    description:
      "নালিতাবাড়ীর বিভিন্ন ইউনিয়ন পরিষদের তথ্য।",
    icon: Building2,
  },
  {
    title: "ভূমি সেবা",
    description:
      "ভূমি সংক্রান্ত সরকারি সেবা ও তথ্য।",
    icon: FileText,
  },
  {
    title: "আইন ও বিচার",
    description:
      "আইন, বিচার ও সংশ্লিষ্ট সরকারি প্রতিষ্ঠানের তথ্য।",
    icon: Scale,
  },
];

const offices = [
  {
    name: "উপজেলা নির্বাহী অফিসারের কার্যালয়",
    type: "উপজেলা প্রশাসন",
    location: "নালিতাবাড়ী, শেরপুর",
  },
  {
    name: "উপজেলা ভূমি অফিস",
    type: "ভূমি সেবা",
    location: "নালিতাবাড়ী, শেরপুর",
  },
  {
    name: "নালিতাবাড়ী পৌরসভা",
    type: "স্থানীয় সরকার",
    location: "নালিতাবাড়ী, শেরপুর",
  },
];

export default function GovernmentPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-violet-50 via-background to-purple-50 dark:from-violet-950/20 dark:via-background dark:to-purple-950/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 rounded-full bg-violet-100 px-4 py-2 text-violet-700 hover:bg-violet-100 dark:bg-violet-950 dark:text-violet-400">
              <Landmark className="mr-2 h-4 w-4" />
              সরকারি সেবা
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              সরকারি তথ্য ও
              <span className="mt-2 block text-violet-600">
                সেবা
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              উপজেলা প্রশাসন, ভূমি অফিস, ইউনিয়ন পরিষদ এবং
              অন্যান্য সরকারি প্রতিষ্ঠানের তথ্য এক জায়গায়।
            </p>

            <div className="mx-auto mt-8 flex max-w-xl gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  placeholder="সরকারি সেবা খুঁজুন..."
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

      {/* Services */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <p className="text-sm font-semibold text-violet-600">
            সরকারি সেবা
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            সেবা ও প্রতিষ্ঠানের ধরন
          </h2>

          <p className="mt-2 text-muted-foreground">
            প্রয়োজনীয় সরকারি সেবা দ্রুত খুঁজে নিন।
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950/50">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="mt-3 px-0 text-violet-600 hover:bg-transparent"
                  >
                    বিস্তারিত
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Offices */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-violet-600">
                সরকারি প্রতিষ্ঠান
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                গুরুত্বপূর্ণ সরকারি অফিস
              </h2>
            </div>

            <Button asChild variant="outline">
              <Link href="/directory?category=government">
                সকল অফিস
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {offices.map((office) => (
              <Card key={office.name}>
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-violet-600 dark:bg-violet-950/50">
                    <Building2 className="h-6 w-6" />
                  </div>

                  <Badge className="mt-5" variant="secondary">
                    {office.type}
                  </Badge>

                  <h3 className="mt-3 text-lg font-semibold">
                    {office.name}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {office.location}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-5 w-full"
                  >
                    <Link href="/contact">
                      যোগাযোগ তথ্য
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Citizen Services */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl border bg-background p-8 shadow-sm md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-5">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-950/50">
                <Users className="h-7 w-7" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  নাগরিক সেবা খুঁজছেন?
                </h2>

                <p className="mt-2 max-w-xl leading-7 text-muted-foreground">
                  বিভিন্ন সরকারি ও স্থানীয় সেবা সম্পর্কে
                  বিস্তারিত তথ্য পেতে আমাদের সম্পূর্ণ ডিরেক্টরি
                  ব্যবহার করুন।
                </p>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="rounded-xl bg-violet-600 hover:bg-violet-700"
            >
              <Link href="/directory">
                সম্পূর্ণ ডিরেক্টরি
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
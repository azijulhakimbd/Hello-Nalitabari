import Link from "next/link";
import {
  Ambulance,
  ArrowRight,
  Building2,
  Clock,
  HeartPulse,
  MapPin,
  Pill,
  Stethoscope,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const healthCategories = [
  {
    title: "হাসপাতাল",
    description: "সরকারি ও বেসরকারি হাসপাতালের তথ্য খুঁজুন।",
    icon: Building2,
  },
  {
    title: "ডাক্তার",
    description: "বিভিন্ন বিশেষজ্ঞ চিকিৎসকের তথ্য দেখুন।",
    icon: Stethoscope,
  },
  {
    title: "ফার্মেসি",
    description: "স্থানীয় ফার্মেসি ও ওষুধের দোকান খুঁজুন।",
    icon: Pill,
  },
  {
    title: "অ্যাম্বুলেন্স",
    description: "জরুরি রোগী পরিবহনের তথ্য খুঁজুন।",
    icon: Ambulance,
  },
];

const healthFacilities = [
  {
    name: "নালিতাবাড়ী উপজেলা স্বাস্থ্য কমপ্লেক্স",
    type: "সরকারি স্বাস্থ্যসেবা",
    location: "নালিতাবাড়ী, শেরপুর",
    status: "তথ্য শীঘ্রই যুক্ত হবে",
  },
  {
    name: "স্থানীয় ক্লিনিক ও ডায়াগনস্টিক সেন্টার",
    type: "ক্লিনিক / ডায়াগনস্টিক",
    location: "নালিতাবাড়ী",
    status: "তথ্য শীঘ্রই যুক্ত হবে",
  },
];

export default function HealthPage() {
  return (
    <main>
      {/* Hero */}
      <section className="border-b bg-gradient-to-br from-emerald-50 via-background to-cyan-50 dark:from-emerald-950/20 dark:via-background dark:to-cyan-950/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400">
              <HeartPulse className="mr-2 h-4 w-4" />
              স্বাস্থ্যসেবা
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              নালিতাবাড়ীর
              <span className="mt-2 block text-emerald-600">
                স্বাস্থ্য তথ্য
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              হাসপাতাল, ডাক্তার, ক্লিনিক, ফার্মেসি ও অন্যান্য
              স্বাস্থ্যসেবার তথ্য এক জায়গায় খুঁজে নিন।
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {healthCategories.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="group transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>

                  <Button
                    variant="ghost"
                    className="mt-4 px-0 text-emerald-600 hover:bg-transparent hover:text-emerald-700"
                  >
                    দেখুন
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Facilities */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold text-emerald-600">
              স্বাস্থ্য প্রতিষ্ঠান
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              স্বাস্থ্যসেবা প্রতিষ্ঠান
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {healthFacilities.map((facility) => (
              <Card key={facility.name}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50">
                      <Building2 className="h-6 w-6" />
                    </div>

                    <Badge variant="secondary">
                      {facility.type}
                    </Badge>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {facility.name}
                  </h3>

                  <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                      {facility.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-emerald-600" />
                      {facility.status}
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 rounded-xl"
                  >
                    <Link href="/contact">
                      যোগাযোগ তথ্য
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="rounded-3xl bg-emerald-600 p-8 text-white md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">
                জরুরি চিকিৎসা প্রয়োজন?
              </h2>

              <p className="mt-2 max-w-xl text-emerald-100">
                জরুরি সেবা ও গুরুত্বপূর্ণ যোগাযোগ নম্বর
                দ্রুত খুঁজে পেতে আমাদের Emergency পেজ দেখুন।
              </p>
            </div>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="rounded-xl"
            >
              <Link href="/emergency">
                জরুরি সেবা
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
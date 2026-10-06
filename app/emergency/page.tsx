import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Flame,
  HeartPulse,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Siren,
} from "lucide-react";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RouteIcon } from "@/components/data/route-icon";
import { getRouteData } from "@/lib/route-data";

/* =========================================================
   Official Bangladesh National Portal Emergency Hotlines
   Source:
   https://bangladesh.gov.bd/pages/static-pages/69a55ba386514399668e4e89

   Last updated on official portal:
   28 July 2026
========================================================= */



/* =========================================================
   Quick Emergency Numbers
========================================================= */



type EmergencyServiceRecord = {
  title: string;
  description: string;
  number: string;
  icon: string;
  href?: string;
  website?: string;
  image?: string;
  category?: string;
};
type QuickEmergencyNumber = {
  title: string;
  number: string;
  icon: string;
  href: string;
};

export default async function EmergencyPage() {
  const [emergencyServices, quickEmergencyNumbers] = await Promise.all([
    getRouteData<EmergencyServiceRecord>("emergency-services"),
    getRouteData<QuickEmergencyNumber>("emergency-quick-numbers"),
  ]);
  return (
    <main className="min-h-screen">
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-red-50 via-background to-orange-50 dark:from-red-950/20 dark:via-background dark:to-orange-950/20">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-red-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="destructive"
              className="mb-5 rounded-full px-4 py-2"
            >
              <Siren className="mr-2 h-4 w-4" />
              জরুরি সহায়তা
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              জরুরি সেবা
              <span className="mt-2 block text-red-600 dark:text-red-500">
                এক ক্লিকেই গুরুত্বপূর্ণ সহায়তা
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              নালিতাবাড়ী উপজেলার নাগরিকদের জন্য জাতীয় পর্যায়ের
              গুরুত্বপূর্ণ সরকারি জরুরি হটলাইন, যোগাযোগ নম্বর এবং
              প্রয়োজনীয় সেবার তথ্য এক জায়গায়।
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="destructive"
                className="rounded-xl"
              >
                <a href="tel:999">
                  <Phone className="mr-2 h-5 w-5" />
                  ৯৯৯ কল করুন
                </a>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl"
              >
                <Link href="/health">
                  স্বাস্থ্যসেবা দেখুন
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              তথ্যসূত্র: বাংলাদেশ জাতীয় তথ্য বাতায়ন 
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK NUMBERS
      ===================================================== */}
      <section className="border-b bg-background">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {quickEmergencyNumbers.map((item) => {
              return (
                <a
                  key={item.number}
                  href={item.href}
                  className="group rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:border-red-300 hover:shadow-lg dark:hover:border-red-900"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950/50">
                      <RouteIcon name={item.icon} className="h-6 w-6" />
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground">
                        {item.title}
                      </p>

                      <p className="mt-1 text-2xl font-bold text-red-600">
                        {item.number}
                      </p>
                    </div>

                    <ArrowRight className="ml-auto h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          ALL SERVICES
      ===================================================== */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold text-red-600">
            সরকারি জরুরি হটলাইন
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            গুরুত্বপূর্ণ যোগাযোগ নম্বর
          </h2>

          <p className="mt-3 max-w-2xl text-muted-foreground">
            বাংলাদেশ জাতীয় তথ্য বাতায়নে প্রকাশিত বিভিন্ন সরকারি
            হটলাইন ও সেবা নম্বর থেকে প্রয়োজনীয় সেবাটি নির্বাচন করুন।
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {emergencyServices.map((service) => {
            return (
              <Card
                key={`${service.title}-${service.number}`}
                className="group overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Official Image */}
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-muted/40 p-6">
                  <Image
                    src={service.image ?? "/logo.png"}
                    alt={`${service.title} - ${service.number}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950/50">
                      <RouteIcon name={service.icon} className="h-5 w-5" />
                    </div>

                    <Badge variant="secondary" className="rounded-full">
                      {service.category}
                    </Badge>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-2 min-h-[72px] text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Call Button */}
                  <a
                    href={service.href}
                    className="mt-5 flex items-center justify-between rounded-xl bg-red-50 px-4 py-3 font-bold text-red-600 transition-colors hover:bg-red-100 dark:bg-red-950/30 dark:hover:bg-red-950/50"
                  >
                    <span className="text-lg">{service.number}</span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white">
                      <Phone className="h-4 w-4" />
                    </span>
                  </a>

                  {/* Official Website */}
                  {service.website && (
                    <a
                      href={service.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-red-600"
                    >
                      সরকারি ওয়েবসাইট
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* =====================================================
          LOCAL SECTION
      ===================================================== */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <Badge variant="outline" className="rounded-full">
              নালিতাবাড়ী
            </Badge>

            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              স্থানীয় জরুরি সহায়তা
            </h2>

            <p className="mt-2 max-w-2xl text-muted-foreground">
              স্থানীয় উপজেলা পর্যায়ের নির্দিষ্ট যোগাযোগ নম্বর যোগ করার
              জন্য এই অংশটি ব্যবহার করা যাবে। অফিসিয়ালভাবে যাচাই করা
              নম্বর ছাড়া কোনো নম্বর প্রকাশ না করাই নিরাপদ।
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-950/50">
                  <HeartPulse className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-medium">
                    উপজেলা স্বাস্থ্য কমপ্লেক্স
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    অফিসিয়াল নম্বর যাচাইাধীন
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-950/50">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-medium">নালিতাবাড়ী থানা</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    জরুরি প্রয়োজনে ৯৯৯
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-950/50">
                  <Flame className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-medium">ফায়ার সার্ভিস</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    জরুরি প্রয়োজনে ১০২
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-950/50">
                  <Building2 className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="font-medium">উপজেলা প্রশাসন</h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    সরকারি তথ্যের জন্য ৩৩৩
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =====================================================
          IMPORTANT WARNING
      ===================================================== */}
      <section className="container mx-auto px-4 py-12">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/50 dark:bg-red-950/20">
          <div className="flex gap-4">
            <ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-red-600" />

            <div>
              <h3 className="font-semibold text-red-700 dark:text-red-400">
                গুরুত্বপূর্ণ সতর্কতা
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                জরুরি পরিস্থিতিতে প্রয়োজন অনুযায়ী সংশ্লিষ্ট সরকারি
                হটলাইনে যোগাযোগ করুন। কোনো নম্বর বা সেবা পরিবর্তিত
                হতে পারে। সর্বশেষ তথ্যের জন্য সংশ্লিষ্ট সরকারি
                ওয়েবসাইট এবং বাংলাদেশ জাতীয় তথ্য বাতায়ন যাচাই করুন।
              </p>

              <a
                href="https://bangladesh.gov.bd/pages/static-pages/69a55ba386514399668e4e89"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:underline"
              >
                বাংলাদেশ জাতীয় তথ্য বাতায়ন দেখুন
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
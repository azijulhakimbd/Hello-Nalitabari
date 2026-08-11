"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  GraduationCap,
  HeartPulse,
  MapPin,
  Search,
  Siren,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";

const content = {
  bn: {
    title: "নালিতাবাড়ী উপজেলার",
    highlight: "সকল তথ্য এক ঠিকানায়",
    description:
      "সরকারি সেবা, শিক্ষা, চিকিৎসা, জরুরি সেবা এবং স্থানীয় সকল তথ্য সহজেই খুঁজে নিন।",
    search: "তথ্য খুঁজুন...",
    emergency: "জরুরি সেবা",
    explore: "সকল তথ্য দেখুন",
    location: "নালিতাবাড়ী, শেরপুর",
    categories: {
      health: "চিকিৎসা",
      education: "শিক্ষা",
      government: "সরকারি সেবা",
      emergency: "জরুরি সেবা",
    },
  },

  en: {
    title: "Nalitabari Upazila",
    highlight: "All Information in One Place",
    description:
      "Find government services, education, healthcare, emergency services and local information easily.",
    search: "Search information...",
    emergency: "Emergency Services",
    explore: "Explore All Information",
    location: "Nalitabari, Sherpur",
    categories: {
      health: "Healthcare",
      education: "Education",
      government: "Government",
      emergency: "Emergency",
    },
  },
};

export function Hero() {
  const [language, setLanguage] = useState<"bn" | "en">("bn");

  const t = content[language];

  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-background to-green-100 dark:from-emerald-950/40 dark:via-background dark:to-green-950/30" />

        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
      </div>

      {/* Top Controls */}
      <div className="absolute right-4 top-4 z-20 flex items-center gap-2">
        <LanguageToggle
          language={language}
          onLanguageChange={setLanguage}
        />

        <ThemeToggle />
      </div>

      <div className="container mx-auto flex min-h-[calc(100vh-64px)] items-center px-4 py-20">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="max-w-3xl">
            <Badge
              variant="secondary"
              className="mb-6 gap-2 rounded-full px-4 py-2"
            >
              <MapPin className="h-4 w-4 text-emerald-600" />
              {t.location}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              {t.title}
              <span className="mt-2 block bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                {t.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              {t.description}
            </p>

            {/* Search */}
            <div className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                <Input
                  placeholder={t.search}
                  className="h-14 rounded-xl border-border/60 bg-background/80 pl-12 text-base shadow-sm backdrop-blur"
                />
              </div>

              <Button
                size="lg"
                className="h-14 rounded-xl bg-emerald-600 px-7 hover:bg-emerald-700"
              >
                <Search className="mr-2 h-5 w-5" />
                {language === "bn" ? "খুঁজুন" : "Search"}
              </Button>
            </div>

            {/* CTA */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="destructive"
                className="rounded-xl"
              >
                <Link href="/emergency">
                  <Siren className="mr-2 h-5 w-5" />
                  {t.emergency}
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-xl"
              >
                <Link href="/directory">
                  {t.explore}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Categories */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Category
                icon={HeartPulse}
                label={t.categories.health}
                href="/health"
              />

              <Category
                icon={GraduationCap}
                label={t.categories.education}
                href="/education"
              />

              <Category
                icon={Building2}
                label={t.categories.government}
                href="/government"
              />

              <Category
                icon={Siren}
                label={t.categories.emergency}
                href="/emergency"
              />
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-[520px]">
              {/* Main card */}
              <div className="absolute inset-8 rounded-[2rem] border bg-background/70 p-6 shadow-2xl backdrop-blur-xl">
                <div className="flex h-full flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-emerald-600 to-green-700 p-8 text-white">
                  <div>
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                      <MapPin className="h-7 w-7" />
                    </div>

                    <p className="text-sm font-medium text-white/70">
                      {language === "bn"
                        ? "উপজেলা তথ্য পোর্টাল"
                        : "Upazila Information Portal"}
                    </p>

                    <h2 className="mt-3 text-4xl font-bold">
                      {language === "bn"
                        ? "নালিতাবাড়ী"
                        : "Nalitabari"}
                    </h2>

                    <p className="mt-2 text-white/70">
                      {language === "bn"
                        ? "শেরপুর, বাংলাদেশ"
                        : "Sherpur, Bangladesh"}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <InfoBox
                      icon={HeartPulse}
                      value="24/7"
                      label={
                        language === "bn"
                          ? "জরুরি সেবা"
                          : "Emergency"
                      }
                    />

                    <InfoBox
                      icon={Building2}
                      value="100+"
                      label={
                        language === "bn"
                          ? "সেবা"
                          : "Services"
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <div className="absolute -right-2 top-20 rounded-2xl border bg-background p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950">
                    <Siren className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      {language === "bn"
                        ? "দ্রুত সহায়তা"
                        : "Quick Help"}
                    </p>

                    <p className="font-semibold">
                      {language === "bn"
                        ? "জরুরি সেবা"
                        : "Emergency"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom card */}
              <div className="absolute -bottom-2 -left-6 rounded-2xl border bg-background p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950">
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs text-muted-foreground">
                      {language === "bn"
                        ? "শিক্ষা"
                        : "Education"}
                    </p>

                    <p className="font-semibold">
                      {language === "bn"
                        ? "প্রতিষ্ঠান খুঁজুন"
                        : "Find Institutions"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Category({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-xl border bg-background/60 p-3 transition-all hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-950">
        <Icon className="h-4 w-4" />
      </div>

      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}

function InfoBox({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
      <Icon className="mb-3 h-5 w-5 text-white/70" />

      <p className="text-xl font-bold">{value}</p>

      <p className="text-xs text-white/60">{label}</p>
    </div>
  );
}
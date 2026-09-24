"use client";

import * as React from "react";
import Image from "next/image";
import {
  Search,
  MapPin,
  Phone,
  GraduationCap,
  School as SchoolIcon,
  Users,
  ArrowUpRight,
  Filter,
  CalendarDays,
} from "lucide-react";

import { schools, type SchoolType } from "../../public/data/schools";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/* -------------------------------------------------------------------------- */
/*                                TYPE LABELS                                 */
/* -------------------------------------------------------------------------- */

const typeLabels: Record<SchoolType, string> = {
  "Secondary School": "মাধ্যমিক বিদ্যালয়",
  "Primary School": "প্রাথমিক বিদ্যালয়",
  Madrasa: "মাদ্রাসা",
  Academy: "একাডেমি",
};

const typeColors: Record<SchoolType, string> = {
  "Secondary School": "bg-blue-500/90 hover:bg-blue-500",
  "Primary School": "bg-green-500/90 hover:bg-green-500",
  Madrasa: "bg-purple-500/90 hover:bg-purple-500",
  Academy: "bg-green-500/90 hover:bg-green-500",
};

/* -------------------------------------------------------------------------- */
/*                              SCHOOL CARD                                   */
/* -------------------------------------------------------------------------- */

function SchoolCard({
  school,
}: {
  school: (typeof schools)[number];
}) {
  return (
    <Card className="group h-full overflow-hidden rounded-2xl border bg-background/70 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        <Image
          src={school.image}
          alt={school.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Type */}
        <Badge
          className={`absolute left-4 top-4 border-0 text-white shadow-lg ${typeColors[school.type]}`}
        >
          {typeLabels[school.type]}
        </Badge>

        {/* Established */}
        {school.established && (
          <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-medium text-white">
            <CalendarDays className="h-3.5 w-3.5" />
            প্রতিষ্ঠিত {school.established}
          </div>
        )}

        {/* Open map */}
        <a
          href={school.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${school.name} Google Maps`}
          className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur transition hover:bg-white"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>

      {/* Content */}
      <CardContent className="flex h-[calc(100%-56.25%)] flex-col p-5">
        <div className="flex-1">
          <h2 className="line-clamp-2 text-lg font-bold leading-snug tracking-tight">
            {school.name}
          </h2>

          <div className="mt-3 space-y-2.5 text-sm text-muted-foreground">
            {/* Address */}
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
              <span>{school.address}</span>
            </div>

            {/* Phone */}
            {school.phone && school.phone !== "N/A" && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-emerald-600" />
                <a
                  href={`tel:${school.phone}`}
                  className="transition-colors hover:text-emerald-600"
                >
                  {school.phone}
                </a>
              </div>
            )}

            {/* Students */}
            {school.students && school.students !== "N/A" && (
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>{school.students} শিক্ষার্থী</span>
              </div>
            )}

            {/* EIIN */}
            {school.eiin && (
              <div className="flex items-center gap-2">
                <SchoolIcon className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>
                  EIIN:{" "}
                  <span className="font-medium text-foreground">
                    {school.eiin}
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t pt-4">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <GraduationCap className="h-4 w-4" />
            <span>নালিতাবাড়ী, শেরপুর</span>
          </div>

          <a
            href={school.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
          >
            ম্যাপ
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

/* -------------------------------------------------------------------------- */
/*                              PAGE COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function SchoolsPage() {
  const [search, setSearch] = React.useState("");
  const [selectedType, setSelectedType] = React.useState<
    SchoolType | "All"
  >("All");

  /* ------------------------------------------------------------------------ */
  /*                                STATISTICS                                */
  /* ------------------------------------------------------------------------ */

  const stats = React.useMemo(() => {
    const total = schools.length;

    const secondary = schools.filter(
      (school) => school.type === "Secondary School"
    ).length;

    const primary = schools.filter(
      (school) => school.type === "Primary School"
    ).length;

    const madrasa = schools.filter(
      (school) => school.type === "Madrasa"
    ).length;

    const academy = schools.filter(
      (school) => school.type === "Academy"
    ).length;

    return {
      total,
      secondary,
      primary,
      madrasa,
      academy,
    };
  }, []);

  /* ------------------------------------------------------------------------ */
  /*                                FILTERING                                 */
  /* ------------------------------------------------------------------------ */

  const filteredSchools = React.useMemo(() => {
    const query = search.trim().toLowerCase();

    return schools.filter((school) => {
      const matchesType =
        selectedType === "All" || school.type === selectedType;

      const matchesSearch =
        !query ||
        school.name.toLowerCase().includes(query) ||
        school.address.toLowerCase().includes(query) ||
        school.type.toLowerCase().includes(query) ||
        school.eiin?.toLowerCase().includes(query);

      return matchesType && matchesSearch;
    });
  }, [search, selectedType]);

  /* ------------------------------------------------------------------------ */
  /*                                  RESET                                   */
  /* ------------------------------------------------------------------------ */

  const resetFilters = () => {
    setSearch("");
    setSelectedType("All");
  };

  /* ------------------------------------------------------------------------ */
  /*                                   UI                                     */
  /* ------------------------------------------------------------------------ */

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                               */}
      {/* ------------------------------------------------------------------ */}

      <section className="relative overflow-hidden border-b">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            {/* Icon */}
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20">
              <GraduationCap className="h-8 w-8" />
            </div>

            {/* Badge */}
            <Badge
              variant="outline"
              className="mb-4 rounded-full border-emerald-500/30 bg-emerald-500/5 px-4 py-1.5 text-emerald-600"
            >
              শিক্ষা প্রতিষ্ঠান
            </Badge>

            {/* Title */}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              নালিতাবাড়ীর{" "}
              <span className="text-emerald-600">শিক্ষা প্রতিষ্ঠান</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              নালিতাবাড়ী উপজেলার বিভিন্ন শিক্ষা প্রতিষ্ঠানের তথ্য এক জায়গায়
              খুঁজে দেখুন। বিদ্যালয়ের ঠিকানা, EIIN, প্রতিষ্ঠার সাল এবং অন্যান্য
              তথ্য সহজেই পাওয়া যাবে।
            </p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {/* Total */}
            <div className="rounded-2xl border bg-background/70 p-4 text-center shadow-sm backdrop-blur">
              <div className="text-2xl font-bold text-emerald-600">
                {stats.total}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                মোট প্রতিষ্ঠান
              </div>
            </div>

            {/* Secondary */}
            <div className="rounded-2xl border bg-background/70 p-4 text-center shadow-sm backdrop-blur">
              <div className="text-2xl font-bold text-blue-600">
                {stats.secondary}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                মাধ্যমিক
              </div>
            </div>

            {/* Primary */}
            <div className="rounded-2xl border bg-background/70 p-4 text-center shadow-sm backdrop-blur">
              <div className="text-2xl font-bold text-green-600">
                {stats.primary}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                প্রাথমিক
              </div>
            </div>

            {/* Madrasa + Academy */}
            <div className="rounded-2xl border bg-background/70 p-4 text-center shadow-sm backdrop-blur">
              <div className="text-2xl font-bold text-purple-600">
                {stats.madrasa + stats.academy}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                মাদ্রাসা / একাডেমি
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CONTENT                                                            */}
      {/* ------------------------------------------------------------------ */}

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Search & Filter */}
        <div className="mb-8 rounded-2xl border bg-background/70 p-4 shadow-sm backdrop-blur sm:p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="প্রতিষ্ঠানের নাম, ঠিকানা বা EIIN দিয়ে খুঁজুন..."
                className="h-11 rounded-xl pl-10"
              />
            </div>

            {/* Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 shrink-0 text-muted-foreground" />

              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant={selectedType === "All" ? "default" : "outline"}
                  onClick={() => setSelectedType("All")}
                  className="rounded-full"
                >
                  সব
                </Button>

                {(Object.keys(typeLabels) as SchoolType[]).map((type) => (
                  <Button
                    key={type}
                    type="button"
                    size="sm"
                    variant={selectedType === type ? "default" : "outline"}
                    onClick={() => setSelectedType(type)}
                    className="rounded-full"
                  >
                    {typeLabels[type]}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Result count */}
          <div className="mt-4 flex flex-col gap-2 border-t pt-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              <span className="font-semibold text-foreground">
                {filteredSchools.length}
              </span>{" "}
              টি প্রতিষ্ঠান পাওয়া গেছে
            </p>

            {(search || selectedType !== "All") && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={resetFilters}
                className="w-fit px-0 text-emerald-600 hover:bg-transparent hover:text-emerald-700"
              >
                ফিল্টার রিসেট করুন
              </Button>
            )}
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* SCHOOL GRID                                                      */}
        {/* ---------------------------------------------------------------- */}

        {filteredSchools.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSchools.map((school) => (
              <SchoolCard key={school.id} school={school} />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="rounded-3xl border border-dashed bg-muted/20 px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <SchoolIcon className="h-7 w-7 text-muted-foreground" />
            </div>

            <h2 className="mt-5 text-xl font-semibold">
              কোনো প্রতিষ্ঠান পাওয়া যায়নি
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
              আপনার অনুসন্ধান বা নির্বাচিত ফিল্টারের সাথে মিলে এমন কোনো শিক্ষা
              প্রতিষ্ঠান পাওয়া যায়নি।
            </p>

            <Button
              type="button"
              variant="outline"
              onClick={resetFilters}
              className="mt-6 rounded-xl"
            >
              সব প্রতিষ্ঠান দেখুন
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}
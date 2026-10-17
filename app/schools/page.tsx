"use client";

import * as React from "react";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import type { SchoolData, SchoolType } from "@/types/school";
import { useRouteData } from "@/components/data/use-route-data";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

/* -------------------------------------------------------------------------- */
/*                                TYPE LABELS                                 */
/* -------------------------------------------------------------------------- */

const typeLabels: Record<SchoolType, string> = {
  "Primary School": "প্রাথমিক বিদ্যালয়",
  "Secondary School": "মাধ্যমিক বিদ্যালয়",
  Madrasa: "মাদ্রাসা",
  Academy: "একাডেমি",
  "Private School": "প্রাইভেট স্কুল",
};

const typeColors: Record<SchoolType, string> = {
  "Secondary School": "bg-blue-500/90 hover:bg-blue-600",
  "Primary School": "bg-green-500/90 hover:bg-green-600",
  Madrasa: "bg-purple-500/90 hover:bg-purple-600",
  Academy: "bg-emerald-500/90 hover:bg-emerald-600",
  "Private School": "bg-yellow-500/90 hover:bg-yellow-600",
};

const schoolTypes = Object.keys(typeLabels) as SchoolType[];

function isSchoolType(value: string | null): value is SchoolType {
  return value !== null && schoolTypes.includes(value as SchoolType);
}

/* -------------------------------------------------------------------------- */
/*                               MOTION VARIANTS                             */
/* -------------------------------------------------------------------------- */

const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeOut,
    },
  },
};

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const statsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const statItem = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
};

const gridContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const cardItem = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: {
      duration: 0.2,
    },
  },
};

/* -------------------------------------------------------------------------- */
/*                                SCHOOL CARD                                 */
/* -------------------------------------------------------------------------- */

function SchoolCard({ school }: { school: SchoolData }) {
  const shouldReduceMotion = useReducedMotion();

  const typeLabel = typeLabels[school.type] ?? school.type;
  const typeColor =
    typeColors[school.type] ??
    "bg-emerald-500/90 hover:bg-emerald-600";

  return (
    <motion.div
      variants={cardItem}
      layout={!shouldReduceMotion}
      whileHover={
        shouldReduceMotion
          ? undefined
          : {
              y: -6,
              transition: { duration: 0.25 },
            }
      }
      className="h-full"
    >
      <Card className="group h-full overflow-hidden rounded-2xl border bg-background/70 shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-xl">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={school.image || "https://i.postimg.cc/tCysdkb7/images.jpg"}
            alt={school.name ?? "শিক্ষা প্রতিষ্ঠান"}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover ${
              shouldReduceMotion
                ? ""
                : "transition-transform duration-700 group-hover:scale-110"
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          {/* Type */}
          <Badge
            className={`absolute left-4 top-4 border-0 text-white shadow-lg ${typeColor}`}
          >
            {typeLabel}
          </Badge>

          {/* Established */}
          {school.established && (
            <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs font-medium text-white">
              <CalendarDays className="h-3.5 w-3.5" />
              প্রতিষ্ঠিত {school.established}
            </div>
          )}

          {/* Google Maps */}
          {school.mapUrl && (
            <a
              href={school.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${school.name} Google Maps`}
              className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg backdrop-blur transition hover:bg-white"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>

        {/* Content */}
        <CardContent className="flex flex-col p-5">
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

            {school.mapUrl && (
              <a
                href={school.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-emerald-600 transition-colors hover:text-emerald-700"
              >
                ম্যাপ
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              PAGE COMPONENT                                */
/* -------------------------------------------------------------------------- */

export default function SchoolsPage() {
  const { data: schools } = useRouteData<SchoolData>("schools");

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const shouldReduceMotion = useReducedMotion();

  /*
   * URL is the source of truth.
   * Search and type filters survive refresh and can be shared.
   */

  const search = searchParams.get("search") ?? "";
  const typeParam = searchParams.get("type");

  const selectedType: SchoolType | "All" = isSchoolType(typeParam)
    ? typeParam
    : "All";

  /* ------------------------------------------------------------------------ */
  /*                              UPDATE URL                                  */
  /* ------------------------------------------------------------------------ */

  const updateUrl = React.useCallback(
    (nextSearch: string, nextType: SchoolType | "All") => {
      const params = new URLSearchParams(searchParams.toString());
      const trimmedSearch = nextSearch.trim();

      if (trimmedSearch) {
        params.set("search", trimmedSearch);
      } else {
        params.delete("search");
      }

      if (nextType !== "All") {
        params.set("type", nextType);
      } else {
        params.delete("type");
      }

      const queryString = params.toString();
      const nextUrl = queryString
        ? `${pathname}?${queryString}`
        : pathname;

      router.replace(nextUrl, { scroll: false });
    },
    [pathname, router, searchParams]
  );

  const handleSearchChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    const queryString = params.toString();

    router.replace(
      queryString ? `${pathname}?${queryString}` : pathname,
      { scroll: false }
    );
  };

  const handleTypeChange = (type: SchoolType | "All") => {
    updateUrl(search, type);
  };

  const resetFilters = () => {
    // Preserve unrelated query parameters.
    const params = new URLSearchParams(searchParams.toString());

    params.delete("search");
    params.delete("type");

    const queryString = params.toString();

    router.replace(
      queryString ? `${pathname}?${queryString}` : pathname,
      { scroll: false }
    );
  };

  /* ------------------------------------------------------------------------ */
  /*                                STATISTICS                                */
  /* ------------------------------------------------------------------------ */

  const stats = React.useMemo(
    () => ({
      total: schools.length,
      secondary: schools.filter(
        (school) => school.type === "Secondary School"
      ).length,
      primary: schools.filter(
        (school) => school.type === "Primary School"
      ).length,
      madrasa: schools.filter(
        (school) => school.type === "Madrasa"
      ).length,
      academy: schools.filter(
        (school) => school.type === "Academy"
      ).length,
      privateSchool: schools.filter(
        (school) => school.type === "Private School"
      ).length,
    }),
    [schools]
  );

  /* ------------------------------------------------------------------------ */
  /*                                FILTERING                                 */
  /* ------------------------------------------------------------------------ */

  const filteredSchools = React.useMemo(() => {
    const query = search.trim().toLocaleLowerCase();

    return schools.filter((school) => {
      const matchesType =
        selectedType === "All" || school.type === selectedType;

      const searchableValues = [
        school.name,
        school.address,
        school.type,
        school.eiin,
        school.phone,
      ];

      const matchesSearch =
        !query ||
        searchableValues.some((value) =>
          String(value ?? "").toLocaleLowerCase().includes(query)
        );

      return matchesType && matchesSearch;
    });
  }, [schools, search, selectedType]);

  /* ------------------------------------------------------------------------ */
  /*                              MOTION SETTINGS                            */
  /* ------------------------------------------------------------------------ */

  const pageTransition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.55, ease: easeOut };

  const revealVariants = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : fadeUp;

  /* ------------------------------------------------------------------------ */
  /*                                   UI                                     */
  /* ------------------------------------------------------------------------ */

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-b from-background via-background to-muted/30">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            aria-hidden="true"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
          />

          <div className="absolute -left-32 top-32 h-72 w-72 rounded-full bg-green-500/10 blur-3xl" />

          <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              variants={revealVariants}
              transition={pageTransition}
              className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/20"
            >
              <GraduationCap className="h-8 w-8" />
            </motion.div>

            <motion.div
              variants={revealVariants}
              transition={pageTransition}
            >
              <Badge
                variant="outline"
                className="mb-4 rounded-full border-emerald-500/30 bg-emerald-500/5 px-4 py-1.5 text-emerald-600"
              >
                শিক্ষা প্রতিষ্ঠান
              </Badge>
            </motion.div>

            <motion.h1
              variants={revealVariants}
              transition={pageTransition}
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              নালিতাবাড়ীর{" "}
              <span className="text-emerald-600">
                শিক্ষা প্রতিষ্ঠান
              </span>
            </motion.h1>

            <motion.p
              variants={revealVariants}
              transition={pageTransition}
              className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base"
            >
              নালিতাবাড়ী উপজেলার বিভিন্ন শিক্ষা প্রতিষ্ঠানের তথ্য এক
              জায়গায় খুঁজে দেখুন। বিদ্যালয়ের ঠিকানা, EIIN, প্রতিষ্ঠার
              সাল এবং অন্যান্য তথ্য সহজেই পাওয়া যাবে।
            </motion.p>
          </motion.div>

          {/* Statistics */}
          <motion.div
            variants={statsContainer}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4"
          >
            <motion.div
              variants={statItem}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="rounded-2xl border bg-background/70 p-4 text-center shadow-sm backdrop-blur"
            >
              <div className="text-2xl font-bold text-emerald-600">
                {stats.total}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                মোট প্রতিষ্ঠান
              </div>
            </motion.div>

            <motion.div
              variants={statItem}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="rounded-2xl border bg-background/70 p-4 text-center shadow-sm backdrop-blur"
            >
              <div className="text-2xl font-bold text-blue-600">
                {stats.secondary}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                মাধ্যমিক
              </div>
            </motion.div>

            <motion.div
              variants={statItem}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="rounded-2xl border bg-background/70 p-4 text-center shadow-sm backdrop-blur"
            >
              <div className="text-2xl font-bold text-green-600">
                {stats.primary}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                প্রাথমিক
              </div>
            </motion.div>

            <motion.div
              variants={statItem}
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              className="rounded-2xl border bg-background/70 p-4 text-center shadow-sm backdrop-blur"
            >
              <div className="text-2xl font-bold text-purple-600">
                {stats.madrasa + stats.academy + stats.privateSchool}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                মাদ্রাসা / একাডেমি / প্রাইভেট স্কুল
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Search and filters */}
        <motion.div
          variants={revealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={pageTransition}
          className="mb-8 rounded-2xl border bg-background/70 p-4 shadow-sm backdrop-blur sm:p-5"
        >
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) =>
                  handleSearchChange(event.target.value)
                }
                placeholder="প্রতিষ্ঠানের নাম, ঠিকানা বা EIIN দিয়ে খুঁজুন..."
                aria-label="প্রতিষ্ঠান খুঁজুন"
                className="h-11 rounded-xl pl-10"
              />
            </div>

            {/* Type filters */}
            <div className="flex items-start gap-2">
              <Filter className="mt-2 h-4 w-4 shrink-0 text-muted-foreground" />

              <div className="flex flex-wrap gap-2">
                <Button
                  type="button"
                  size="sm"
                  variant={selectedType === "All" ? "default" : "outline"}
                  onClick={() => handleTypeChange("All")}
                  className="rounded-full"
                >
                  সব
                </Button>

                {schoolTypes.map((type) => (
                  <Button
                    key={type}
                    type="button"
                    size="sm"
                    variant={
                      selectedType === type ? "default" : "outline"
                    }
                    onClick={() => handleTypeChange(type)}
                    className="rounded-full"
                  >
                    {typeLabels[type]}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mt-4 flex flex-col gap-2 border-t pt-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p aria-live="polite">
              <span className="font-semibold text-foreground">
                {filteredSchools.length}
              </span>{" "}
              টি প্রতিষ্ঠান পাওয়া গেছে
              {selectedType !== "All" && (
                <span> — {typeLabels[selectedType]}</span>
              )}
              {search.trim() && <span> — “{search.trim()}”</span>}
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
        </motion.div>

        {/* School grid and empty state */}
        <AnimatePresence mode="wait" initial={false}>
          {filteredSchools.length > 0 ? (
            <motion.div
              key={`schools-${selectedType}-${search.trim()}`}
              variants={gridContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredSchools.map((school) => (
                <SchoolCard
                  key={school.id}
                  school={school}
                />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty-state"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 12, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={pageTransition}
              className="rounded-3xl border border-dashed bg-muted/20 px-6 py-16 text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                <SchoolIcon className="h-7 w-7 text-muted-foreground" />
              </div>

              <h2 className="mt-5 text-xl font-semibold">
                কোনো প্রতিষ্ঠান পাওয়া যায়নি
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                আপনার অনুসন্ধান বা নির্বাচিত ফিল্টারের সাথে মিলে এমন
                কোনো শিক্ষা প্রতিষ্ঠান পাওয়া যায়নি। অন্য নাম দিয়ে
                খুঁজুন অথবা ফিল্টার পরিবর্তন করুন।
              </p>

              <Button
                type="button"
                variant="outline"
                onClick={resetFilters}
                className="mt-6 rounded-xl"
              >
                সব প্রতিষ্ঠান দেখুন
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}

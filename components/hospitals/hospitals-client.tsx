
"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowRight,
  Building2,
  Clock,
  Hospital,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
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

export type HospitalRecord = {
  id: string;
  name: string;
  type: string;
  address: string;
  phone: string;
  image: string;
  mapsLink: string;
  emergency: boolean;
  open: string;
  description: string;
};

type HospitalsClientProps = {
  hospitals: HospitalRecord[];
};

const filters = [
  { label: "সব", value: "all" },
  { label: "সরকারি", value: "government" },
  { label: "বেসরকারি", value: "private" },
  { label: "ক্লিনিক", value: "clinic" },
  { label: "ডায়াগনস্টিক", value: "diagnostic" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

function matchesType(type: string, filter: FilterValue) {
  const normalized = type.toLowerCase();

  switch (filter) {
    case "government":
      return /সরকারি|government|public/.test(normalized);
    case "private":
      return /বেসরকারি|private/.test(normalized);
    case "clinic":
      return /ক্লিনিক|clinic/.test(normalized);
    case "diagnostic":
      return /ডায়াগনস্টিক|diagnostic/.test(normalized);
    default:
      return true;
  }
}

export default function HospitalsClient({
  hospitals,
}: HospitalsClientProps) {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] =
    useState<FilterValue>("all");
  const shouldReduceMotion = useReducedMotion();

  const filteredHospitals = useMemo(() => {
    const query = search.trim().toLocaleLowerCase();

    return hospitals.filter((hospital) => {
      const matchesSearch =
        !query ||
        [
          hospital.name,
          hospital.type,
          hospital.address,
          hospital.description,
        ].some((value) =>
          value?.toLocaleLowerCase().includes(query),
        );

      return (
        matchesSearch &&
        matchesType(hospital.type, activeFilter)
      );
    });
  }, [hospitals, search, activeFilter]);

  const revealTransition = {
    duration: shouldReduceMotion ? 0 : 0.55,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_10%_5%,rgba(34,197,94,0.13),transparent_30%),radial-gradient(circle_at_90%_15%,rgba(16,185,129,0.10),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.07),transparent_35%)]"
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(34 197 94) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(34 197 94) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.08] via-background/60 to-background" />

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <motion.div
            className="mx-auto max-w-3xl text-center"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 24 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={revealTransition}
          >
            <motion.div
              className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg shadow-emerald-500/20"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, scale: 0.75, rotate: -8 }
              }
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{
                ...revealTransition,
                delay: shouldReduceMotion ? 0 : 0.1,
              }}
            >
              <Hospital className="size-7" />
            </motion.div>

            <motion.p
              className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400"
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.4,
                delay: shouldReduceMotion ? 0 : 0.15,
              }}
            >
              স্বাস্থ্যসেবা
            </motion.p>

            <motion.h1
              className="text-4xl font-bold tracking-tight md:text-5xl"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 18 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...revealTransition,
                delay: shouldReduceMotion ? 0 : 0.2,
              }}
            >
              নালিতাবাড়ীর{" "}
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                হাসপাতাল ও ক্লিনিক
              </span>
            </motion.h1>

            <motion.p
              className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, y: 15 }
              }
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...revealTransition,
                delay: shouldReduceMotion ? 0 : 0.3,
              }}
            >
              নালিতাবাড়ী উপজেলার সরকারি ও বেসরকারি হাসপাতাল,
              ক্লিনিক এবং ডায়াগনস্টিক সেন্টারের তথ্য সহজেই
              খুঁজে নিন।
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        {/* Search + Stats */}
        <motion.div
          className="mb-10 grid gap-5 md:grid-cols-[1fr_auto]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={revealTransition}
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="হাসপাতাল, ক্লিনিক বা এলাকার নাম লিখুন..."
              aria-label="হাসপাতাল খুঁজুন"
              className="h-12 border-emerald-500/10 bg-background/70 pl-12 pr-12 backdrop-blur-xl"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="সার্চ মুছে ফেলুন"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-center gap-3 rounded-xl border border-emerald-500/10 bg-background/70 px-5 py-3 backdrop-blur-xl">
            <Hospital className="size-5 text-emerald-600" />

            <div>
              <p className="text-xs text-muted-foreground">
                মোট প্রতিষ্ঠান
              </p>
              <p className="font-bold tabular-nums">
                {filteredHospitals.length}
                <span className="ml-1 text-xs font-normal text-muted-foreground">
                  / {hospitals.length}
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mb-8 flex flex-wrap gap-2"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            ...revealTransition,
            delay: shouldReduceMotion ? 0 : 0.05,
          }}
          role="group"
          aria-label="প্রতিষ্ঠানের ধরন অনুযায়ী ফিল্টার"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <Button
                key={filter.value}
                type="button"
                variant={isActive ? "default" : "outline"}
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter.value)}
                className={
                  isActive
                    ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md shadow-emerald-500/15 hover:opacity-90"
                    : "border-emerald-500/15 transition-colors hover:border-emerald-500/40 hover:bg-emerald-500/5"
                }
              >
                {filter.label}
              </Button>
            );
          })}
        </motion.div>

        {/* Results count */}
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-sm text-muted-foreground" aria-live="polite">
            {filteredHospitals.length > 0
              ? `${filteredHospitals.length}টি প্রতিষ্ঠানের তথ্য দেখানো হচ্ছে`
              : "কোনো প্রতিষ্ঠান পাওয়া যায়নি"}
          </p>

          {(search || activeFilter !== "all") && (
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => {
                setSearch("");
                setActiveFilter("all");
              }}
              className="text-emerald-600 hover:text-emerald-700"
            >
              ফিল্টার মুছুন
              <X className="ml-1 size-4" />
            </Button>
          )}
        </div>

        {/* Hospital Cards */}
        <motion.div
          layout
          className="grid items-stretch gap-6 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredHospitals.map((hospital, index) => (
              <motion.div
                key={hospital.id}
                layout
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 24, scale: 0.98 }
                }
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={
                  shouldReduceMotion
                    ? { opacity: 0 }
                    : { opacity: 0, scale: 0.96, y: -8 }
                }
                transition={{
                  layout: { duration: shouldReduceMotion ? 0 : 0.3 },
                  duration: shouldReduceMotion ? 0 : 0.4,
                  delay: shouldReduceMotion ? 0 : Math.min(index % 4, 3) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -5 }
                }
                className="h-full"
              >
                <Card
                  className="
                    group relative h-full overflow-hidden
                    border-emerald-500/10
                    bg-background/70
                    shadow-sm
                    backdrop-blur-xl
                    transition-[border-color,box-shadow] duration-300
                    hover:border-emerald-500/30
                    hover:shadow-xl
                    hover:shadow-emerald-500/10
                  "
                >
                  {/* Hospital Image */}
                  <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-emerald-500/10 via-green-500/5 to-teal-500/10">
                    {hospital.image ? (
                      <Image
                        src={hospital.image}
                        alt={hospital.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(34,197,94,0.12),transparent_40%)]" />

                        <div className="relative flex h-full items-center justify-center">
                          <motion.div
                            className="flex size-20 items-center justify-center rounded-2xl bg-background/80 text-emerald-600 shadow-lg ring-1 ring-emerald-500/10 backdrop-blur"
                            whileHover={
                              shouldReduceMotion
                                ? undefined
                                : { scale: 1.06, rotate: 3 }
                            }
                          >
                            <Hospital className="size-10" />
                          </motion.div>
                        </div>
                      </>
                    )}

                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

                    {hospital.emergency && (
                      <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                        <ShieldCheck className="size-3.5" />
                        জরুরি সেবা
                      </div>
                    )}
                  </div>

                  {/* Glow */}
                  <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-emerald-500/10 blur-3xl transition-colors group-hover:bg-emerald-500/20" />

                  <CardHeader className="relative">
                    <div className="flex items-start gap-4">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/15 to-emerald-500/10 text-emerald-600 ring-1 ring-emerald-500/10">
                        <Building2 className="size-6" />
                      </div>

                      <div className="min-w-0">
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                            {hospital.type}
                          </span>
                        </div>

                        <CardTitle className="text-lg leading-7">
                          {hospital.name}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative flex flex-col space-y-5">
                    <p className="text-sm leading-6 text-muted-foreground">
                      {hospital.description}
                    </p>

                    {/* Address + Phone */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="flex items-start gap-3 rounded-xl bg-muted/40 p-3">
                        <MapPin className="mt-0.5 size-4 shrink-0 text-emerald-600" />

                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">
                            ঠিকানা
                          </p>
                          <p className="mt-1 text-sm font-medium">
                            {hospital.address}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 rounded-xl bg-muted/40 p-3">
                        <Phone className="mt-0.5 size-4 shrink-0 text-emerald-600" />

                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground">
                            ফোন
                          </p>

                          {hospital.phone ? (
                            <a
                              href={`tel:${hospital.phone}`}
                              className="mt-1 block truncate text-sm font-medium hover:text-emerald-600"
                            >
                              {hospital.phone}
                            </a>
                          ) : (
                            <p className="mt-1 text-sm text-muted-foreground">
                              তথ্য পাওয়া যায়নি
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="size-4 shrink-0 text-emerald-600" />
                      <span>{hospital.open}</span>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex flex-col gap-2 border-t border-emerald-500/10 pt-4 sm:flex-row">
                      <Button
                        asChild
                        className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90"
                      >
                        <Link href={`/hospitals/${hospital.id}`}>
                          বিস্তারিত দেখুন
                          <ArrowRight className="ml-2 size-4" />
                        </Link>
                      </Button>

                      {hospital.phone ? (
                        <Button
                          asChild
                          variant="outline"
                          className="border-emerald-500/15 hover:bg-emerald-500/5"
                        >
                          <a
                            href={`tel:${hospital.phone}`}
                            aria-label={`${hospital.name}-এ ফোন করুন`}
                          >
                            <Phone className="mr-2 size-4" />
                            ফোন
                          </a>
                        </Button>
                      ) : (
                        <Button
                          disabled
                          variant="outline"
                          className="border-emerald-500/15"
                        >
                          <Phone className="mr-2 size-4" />
                          ফোন নেই
                        </Button>
                      )}

                      <Button
                        asChild
                        variant="outline"
                        disabled={!hospital.mapsLink}
                        className="border-emerald-500/15 hover:bg-emerald-500/5"
                      >
                        <a
                          href={hospital.mapsLink || undefined}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${hospital.name}-এর লোকেশন দেখুন`}
                        >
                          <MapPin className="mr-2 size-4" />
                          ম্যাপ
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredHospitals.length === 0 && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-dashed border-emerald-500/20 px-5 py-16 text-center"
          >
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600">
              <Search className="size-6" />
            </div>

            <h2 className="mt-4 text-lg font-semibold">
              কোনো প্রতিষ্ঠান পাওয়া যায়নি
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              অন্য নাম দিয়ে সার্চ করুন অথবা ফিল্টার পরিবর্তন করুন।
            </p>

            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setSearch("");
                setActiveFilter("all");
              }}
              className="mt-5 border-emerald-500/20"
            >
              সব প্রতিষ্ঠান দেখুন
            </Button>
          </motion.div>
        )}

        {/* Add Information CTA */}
        <motion.div
          className="mt-12 rounded-3xl border border-dashed border-emerald-500/20 bg-emerald-500/[0.03] p-8 text-center md:p-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={revealTransition}
        >
          <motion.div
            className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600"
            whileHover={
              shouldReduceMotion
                ? undefined
                : { scale: 1.08, rotate: 5 }
            }
          >
            <Hospital className="size-6" />
          </motion.div>

          <h2 className="mt-5 text-xl font-bold">
            কোনো হাসপাতালের তথ্য পাওয়া যাচ্ছে না?
          </h2>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted-foreground">
            আপনার পরিচিত কোনো হাসপাতাল, ক্লিনিক বা ডায়াগনস্টিক
            সেন্টারের তথ্য আমাদের সাথে শেয়ার করুন।
          </p>

          <Button
            asChild
            className="mt-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white"
          >
            <Link href="/submit">
              তথ্য যোগ করুন
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </main>
  );
}

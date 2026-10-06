"use client";

import * as React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  ExternalLink,
  MapPin,
  MapPinned,
  Phone,
  Pill,
  Search,
  Star,
  X,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRouteData } from "@/components/data/use-route-data";

/* 
   TYPES
 */

type Pharmacy = {
  id: string;
  name: string;
  address: string;
  phone?: string;
  rating?: number;
  reviewCount?: number;
  hours?: string;
  openNow?: boolean;
  category: string;
  mapUrl: string;
};

/* 
   PHARMACY DATA
   
*/



type PharmacyRecord = Pharmacy;

/*
   HELPERS
 */

function formatPhoneForTel(phone: string) {
  return phone.replace(/[\s-]/g, "");
}

/* 
   PAGE
 */

export default function PharmaciesPage() {
  const { data: pharmacies } = useRouteData<PharmacyRecord>("pharmacies");
  const [search, setSearch] = React.useState("");
  const [openOnly, setOpenOnly] = React.useState(false);

  const filteredPharmacies = React.useMemo(() => {
    const query = search.trim().toLowerCase();

    return pharmacies.filter((pharmacy) => {
      const matchesSearch =
        !query ||
        [
          pharmacy.name,
          pharmacy.address,
          pharmacy.category,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query);

      const matchesOpen =
        !openOnly || pharmacy.openNow === true;

      return matchesSearch && matchesOpen;
    });
  }, [pharmacies, search, openOnly]);

  return (
    <main className="min-h-screen bg-background">
      {/* 
          HERO
       */}

      <section className="relative overflow-hidden border-b bg-gradient-to-br from-emerald-50 via-background to-green-50 dark:from-emerald-950/20 dark:via-background dark:to-green-950/20">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl dark:bg-emerald-900/20" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-green-200/30 blur-3xl dark:bg-green-900/20" />

        <div className="container relative mx-auto px-4 py-14 md:py-20">
          {/* Back */}
          <Link
            href="/directory/health"
            className="mb-8 inline-flex items-center text-sm font-medium text-muted-foreground transition hover:text-emerald-600"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            স্বাস্থ্যসেবায় ফিরে যান
          </Link>

          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-5 rounded-full bg-emerald-100 px-4 py-2 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-400">
              <Pill className="mr-2 h-4 w-4" />
              ফার্মেসি ডিরেক্টরি
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              নালিতাবাড়ীর
              <span className="mt-2 block text-emerald-600">
                ফার্মেসি
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              নালিতাবাড়ী উপজেলার বিভিন্ন ফার্মেসি ও মেডিসিন
              কর্নারের নাম, ঠিকানা, ফোন নম্বর ও অন্যান্য তথ্য
              খুঁজে নিন।
            </p>
          </div>
        </div>
      </section>

      {/* 
          SEARCH
       */}

      <section className="border-b bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="mx-auto max-w-4xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

              <Input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="ফার্মেসি বা এলাকার নাম দিয়ে খুঁজুন..."
                aria-label="ফার্মেসি অনুসন্ধান"
                className="h-14 rounded-2xl pl-12 pr-12 text-base"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="অনুসন্ধান মুছে ফেলুন"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                মোট{" "}
                <span className="font-semibold text-foreground">
                  {filteredPharmacies.length}
                </span>{" "}
                টি ফার্মেসি পাওয়া গেছে
              </p>

              <Button
                type="button"
                variant={openOnly ? "default" : "outline"}
                onClick={() => setOpenOnly((value) => !value)}
                className={
                  openOnly
                    ? "bg-emerald-600 hover:bg-emerald-700"
                    : ""
                }
              >
                <Clock className="mr-2 h-4 w-4" />
                {openOnly
                  ? "শুধু খোলা ফার্মেসি"
                  : "খোলা ফার্মেসি দেখুন"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 
          PHARMACY LIST
       */}

      <section className="container mx-auto px-4 py-12 md:py-16">
        {filteredPharmacies.length === 0 ? (
          <Card className="mx-auto max-w-xl">
            <CardContent className="p-10 text-center">
              <Pill className="mx-auto h-12 w-12 text-muted-foreground" />

              <h2 className="mt-5 text-xl font-semibold">
                কোনো ফার্মেসি পাওয়া যায়নি
              </h2>

              <p className="mt-2 text-muted-foreground">
                অন্য কোনো নাম বা এলাকার নাম দিয়ে আবার চেষ্টা করুন।
              </p>

              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setSearch("");
                  setOpenOnly(false);
                }}
                className="mt-5"
              >
                সব ফার্মেসি দেখুন
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredPharmacies.map((pharmacy) => (
              <Card
                key={pharmacy.id}
                className="group h-full overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"
              >
                <CardContent className="flex h-full flex-col p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white dark:bg-emerald-950/50 dark:text-emerald-400">
                      <Pill className="h-6 w-6" />
                    </div>

                    <Badge
                      variant="secondary"
                      className="bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400"
                    >
                      {pharmacy.category}
                    </Badge>
                  </div>

                  {/* Name */}
                  <h2 className="mt-5 text-xl font-semibold leading-7">
                    {pharmacy.name}
                  </h2>

                  {/* Address */}
                  <div className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

                    <span>{pharmacy.address}</span>
                  </div>

                  {/* Rating */}
                  {pharmacy.rating !== undefined && (
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

                        <span className="font-semibold">
                          {pharmacy.rating.toFixed(1)}
                        </span>
                      </div>

                      {pharmacy.reviewCount !== undefined && (
                        <span className="text-sm text-muted-foreground">
                          ({pharmacy.reviewCount} রিভিউ)
                        </span>
                      )}
                    </div>
                  )}

                  {/* Hours */}
                  {pharmacy.hours && (
                    <div className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

                      <span>{pharmacy.hours}</span>
                    </div>
                  )}

                  {/* Open status */}
                  {pharmacy.openNow !== undefined && (
                    <div className="mt-3">
                      <Badge
                        variant="outline"
                        className={
                          pharmacy.openNow
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-400"
                            : "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950/40 dark:text-red-400"
                        }
                      >
                        {pharmacy.openNow
                          ? "এখন খোলা"
                          : "এখন বন্ধ"}
                      </Badge>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-auto flex flex-col gap-2 pt-6 sm:flex-row">
                    {pharmacy.phone && (
                      <Button
                        asChild
                        className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                      >
                        <a
                          href={`tel:${formatPhoneForTel(
                            pharmacy.phone,
                          )}`}
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          কল করুন
                        </a>
                      </Button>
                    )}

                    <Button
                      asChild
                      variant="outline"
                      className="flex-1"
                    >
                      <a
                        href={pharmacy.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPinned className="mr-2 h-4 w-4" />
                        ম্যাপ
                        <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* 
          INFORMATION NOTICE
       */}

      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-10">
          <Card className="border-emerald-100 bg-emerald-50/50 dark:border-emerald-900 dark:bg-emerald-950/20">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400">
                  <Pill className="h-6 w-6" />
                </div>

                <div className="flex-1">
                  <h2 className="font-semibold">
                    কোনো তথ্য ভুল বা পুরোনো?
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    কোনো ফার্মেসির নাম, ঠিকানা, ফোন নম্বর বা
                    সময়সূচি পরিবর্তন হয়ে থাকলে আমাদের জানাতে
                    পারেন।
                  </p>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="shrink-0 border-emerald-200 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:text-emerald-400"
                >
                  <Link href="/submit">
                    তথ্য সংশোধন করুন
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* =====================================================
          EMERGENCY CTA
      ====================================================== */}

      <section className="container mx-auto px-4 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-600 to-green-600 p-8 text-white shadow-xl md:p-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold">
                জরুরি ওষুধ প্রয়োজন?
              </h2>

              <p className="mt-2 text-emerald-100">
                জরুরি চিকিৎসা ও যোগাযোগের তথ্য পেতে
                Emergency পেজ দেখুন।
              </p>
            </div>

            <Button
              asChild
              size="lg"
              variant="secondary"
              className="shrink-0 rounded-xl"
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
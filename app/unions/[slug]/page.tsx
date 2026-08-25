import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { ReactNode } from "react"

import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe,
  Landmark,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react"

import {
  unions,
  getUnionBySlug,
} from "@/public/data/unions"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

type PageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return unions.map((union) => ({
    slug: union.slug,
  }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params

  const union = getUnionBySlug(slug)

  if (!union) {
    return {
      title: "ইউনিয়ন পাওয়া যায়নি | নালিতাবাড়ী",
      description: "অনুরোধ করা ইউনিয়নের তথ্য পাওয়া যায়নি।",
    }
  }

  return {
    title: `${union.nameBn} | নালিতাবাড়ী`,
    description: `${union.nameBn} (${union.nameEn}) সম্পর্কিত তথ্য, সেবা, যোগাযোগ ও গুরুত্বপূর্ণ তথ্য।`,
  }
}

export default async function UnionDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params

  const union = getUnionBySlug(slug)

  if (!union) {
    notFound()
  }

  const mapsUrl =
    union.latitude != null && union.longitude != null
      ? `https://www.google.com/maps?q=${union.latitude},${union.longitude}`
      : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          `${union.nameBn}, নালিতাবাড়ী, শেরপুর, বাংলাদেশ`,
        )}`

  const services = union.services ?? []
  const institutions = union.institutions ?? []
  const importantPlaces = union.importantPlaces ?? []
  const governmentLinks = union.governmentLinks ?? []
  const emergencyContacts = union.emergencyContacts ?? []

  return (
    <main className="min-h-screen bg-muted/20">
      {/*  ==
          HERO
       === */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_35%)]" />

        <div className="container relative mx-auto px-4 py-10 sm:py-14">
          {/* Back */}
          <Link
            href="/unions"
            className="mb-8 inline-flex items-center gap-2 text-sm text-emerald-100 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            সকল ইউনিয়ন
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            {/* Hero Content */}
            <div>
              <Badge className="mb-4 border-white/20 bg-white/10 text-white hover:bg-white/10">
                {toBengaliNumber(
                  String(union.id).padStart(2, "0"),
                )}{" "}
                নং ইউনিয়ন
              </Badge>

              <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
                {union.nameBn}
              </h1>

              <p className="mt-2 text-lg text-emerald-100">
                {union.nameEn}
              </p>

              <div className="mt-5 flex items-start gap-2 text-sm text-emerald-100">
                <MapPin className="mt-0.5 size-4 shrink-0" />

                <span>
                  {union.upazila}, {union.district}, {union.division}
                </span>
              </div>

              {union.description && (
                <p className="mt-6 max-w-3xl leading-8 text-emerald-50">
                  {union.description}
                </p>
              )}
            </div>

            {/* Hero Image */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-2xl backdrop-blur">
              <div className="relative aspect-[16/10] bg-emerald-900">
                {union.image ? (
                  <Image
                    src={union.image}
                    alt={`${union.nameBn} - ${union.nameEn}`}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <Building2 className="size-16 text-white/30" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  ==
          MAIN CONTENT
       === */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
          {/* =================================================
              MAIN COLUMN
          ================================================== */}
          <div className="space-y-8">
            {/* Overview */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-emerald-100 p-2.5 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                    <Landmark className="size-5" />
                  </div>

                  <div>
                    <CardTitle>
                      ইউনিয়ন পরিচিতি
                    </CardTitle>

                    <CardDescription>
                      প্রশাসনিক ও মৌলিক তথ্য
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  <InfoItem
                    icon={<MapPin className="size-4" />}
                    label="জেলা"
                    value={union.district}
                  />

                  <InfoItem
                    icon={<Building2 className="size-4" />}
                    label="উপজেলা"
                    value={union.upazila}
                  />

                  <InfoItem
                    icon={<MapPin className="size-4" />}
                    label="বিভাগ"
                    value={union.division}
                  />

                  <InfoItem
                    icon={<Building2 className="size-4" />}
                    label="ইউনিয়ন"
                    value={union.nameBn}
                  />

                  {union.established && (
                    <InfoItem
                      icon={<Landmark className="size-4" />}
                      label="প্রতিষ্ঠা"
                      value={union.established}
                    />
                  )}

                  {union.area && (
                    <InfoItem
                      icon={<MapPin className="size-4" />}
                      label="আয়তন"
                      value={union.area}
                    />
                  )}

                  {union.population && (
                    <InfoItem
                      icon={<Users className="size-4" />}
                      label="জনসংখ্যা"
                      value={union.population}
                    />
                  )}

                  {union.malePopulation && (
                    <InfoItem
                      icon={<Users className="size-4" />}
                      label="পুরুষ জনসংখ্যা"
                      value={union.malePopulation}
                    />
                  )}

                  {union.femalePopulation && (
                    <InfoItem
                      icon={<Users className="size-4" />}
                      label="নারী জনসংখ্যা"
                      value={union.femalePopulation}
                    />
                  )}

                  {union.wards != null && (
                    <InfoItem
                      icon={<Building2 className="size-4" />}
                      label="ওয়ার্ড"
                      value={`${toBengaliNumber(union.wards)} টি`}
                    />
                  )}

                  {union.villages != null && (
                    <InfoItem
                      icon={<MapPin className="size-4" />}
                      label="গ্রাম"
                      value={`${toBengaliNumber(union.villages)} টি`}
                    />
                  )}

                  {union.mouzas != null && (
                    <InfoItem
                      icon={<FileText className="size-4" />}
                      label="মৌজা"
                      value={`${toBengaliNumber(union.mouzas)} টি`}
                    />
                  )}

                  {union.officeLand && (
                    <InfoItem
                      icon={<Landmark className="size-4" />}
                      label="অফিসের জমি"
                      value={union.officeLand}
                    />
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            {services.length > 0 && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-blue-100 p-2.5 text-blue-700 dark:bg-blue-950 dark:text-blue-400">
                      <ShieldCheck className="size-5" />
                    </div>

                    <div>
                      <CardTitle>
                        ইউনিয়ন পরিষদের সেবা
                      </CardTitle>

                      <CardDescription>
                        নাগরিকদের জন্য গুরুত্বপূর্ণ সেবা ও তথ্য
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {services.map((service) => (
                      <div
                        key={`${service.title}-${service.category}`}
                        className="rounded-xl border bg-background p-4 transition-all hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-sm"
                      >
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" />

                          <div className="min-w-0">
                            <h3 className="font-semibold">
                              {service.title}
                            </h3>

                            {service.description && (
                              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                {service.description}
                              </p>
                            )}

                            <Badge
                              variant="secondary"
                              className="mt-3"
                            >
                              {service.category}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Institutions */}
            {institutions.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    গুরুত্বপূর্ণ প্রতিষ্ঠান
                  </CardTitle>

                  <CardDescription>
                    ইউনিয়নের গুরুত্বপূর্ণ প্রতিষ্ঠানসমূহ
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {institutions.map((institution) => (
                      <div
                        key={`${institution.name}-${institution.type}`}
                        className="rounded-xl border bg-background p-4 transition-colors hover:border-emerald-300"
                      >
                        <div className="flex items-start gap-3">
                          <Building2 className="mt-1 size-5 shrink-0 text-emerald-600" />

                          <div className="min-w-0">
                            <h3 className="font-semibold">
                              {institution.name}
                            </h3>

                            <p className="text-sm text-muted-foreground">
                              {institution.type}
                            </p>

                            {institution.description && (
                              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                                {institution.description}
                              </p>
                            )}

                            {institution.phone && (
                              <a
                                href={`tel:${institution.phone}`}
                                className="mt-2 inline-flex items-center gap-2 text-sm text-emerald-600 hover:underline"
                              >
                                <Phone className="size-4" />
                                {institution.phone}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Health Facilities */}
            {union.healthFacilities.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    স্বাস্থ্য সেবা কেন্দ্র
                  </CardTitle>

                  <CardDescription>
                    ইউনিয়নের স্বাস্থ্যসেবা প্রতিষ্ঠান
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {union.healthFacilities.map((facility) => (
                      <div
                        key={`${facility.name}-${facility.code ?? ""}`}
                        className="rounded-xl border bg-background p-4"
                      >
                        <div className="flex items-start gap-3">
                          <Building2 className="mt-1 size-5 shrink-0 text-emerald-600" />

                          <div className="min-w-0">
                            <h3 className="font-semibold">
                              {facility.name}
                            </h3>

                            <p className="mt-1 text-sm text-muted-foreground">
                              {facility.type}
                            </p>

                            {facility.code && (
                              <p className="mt-2 text-sm">
                                <span className="text-muted-foreground">
                                  প্রতিষ্ঠান কোড:
                                </span>{" "}
                                <span className="font-medium">
                                  {facility.code}
                                </span>
                              </p>
                            )}

                            {facility.email && (
                              <a
                                href={`mailto:${facility.email}`}
                                className="mt-2 inline-flex items-center gap-2 text-sm text-emerald-600 hover:underline"
                              >
                                <Mail className="size-4" />
                                {facility.email}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Important Places */}
            {importantPlaces.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    গুরুত্বপূর্ণ স্থান
                  </CardTitle>

                  <CardDescription>
                    ইউনিয়নের উল্লেখযোগ্য স্থানসমূহ
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {importantPlaces.map((place) => (
                      <div
                        key={place}
                        className="flex items-center gap-3 rounded-xl border bg-background p-4 transition-colors hover:border-emerald-300"
                      >
                        <MapPin className="size-5 shrink-0 text-emerald-600" />

                        <span className="text-sm">
                          {place}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Markets */}
            {union.markets.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>হাট-বাজার</CardTitle>

                  <CardDescription>
                    ইউনিয়নের হাট ও বাজারসমূহ
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {union.markets.map((market) => (
                      <div
                        key={market}
                        className="flex items-center gap-3 rounded-xl border bg-background p-4"
                      >
                        <Landmark className="size-5 shrink-0 text-emerald-600" />

                        <span className="text-sm">
                          {market}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Rivers */}
            {union.rivers.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>নদ-নদী</CardTitle>

                  <CardDescription>
                    ইউনিয়নের নদী ও জলাশয় সম্পর্কিত তথ্য
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {union.rivers.map((river) => (
                      <div
                        key={river}
                        className="flex items-center gap-3 rounded-xl border bg-background p-4"
                      >
                        <MapPin className="size-5 shrink-0 text-emerald-600" />

                        <span className="text-sm">
                          {river}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Government Links */}
            {governmentLinks.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    সরকারি গুরুত্বপূর্ণ লিংক
                  </CardTitle>

                  <CardDescription>
                    সংশ্লিষ্ট সরকারি পোর্টাল ও তথ্যসূত্র
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {governmentLinks.map((link) => (
                      <a
                        key={`${link.title}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border bg-background p-4 transition-colors hover:border-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-950/30"
                      >
                        <div className="flex min-w-0 items-center gap-3">
                          <Globe className="size-5 shrink-0 text-emerald-600" />

                          <span className="truncate text-sm font-medium">
                            {link.title}
                          </span>
                        </div>

                        <ExternalLink className="ml-3 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Sources */}
            {union.sources.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>তথ্যসূত্র</CardTitle>

                  <CardDescription>
                    এই পৃষ্ঠায় ব্যবহৃত সরকারি ও নির্ভরযোগ্য তথ্যসূত্র
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {union.sources.map((source, index) => (
                      <a
                        key={`${source.url}-${index}`}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-start gap-3 rounded-xl border p-4 transition-colors hover:border-emerald-300 hover:bg-muted"
                      >
                        <Globe className="mt-0.5 size-5 shrink-0 text-emerald-600" />

                        <div className="min-w-0 flex-1">
                          <p className="font-medium">
                            {source.title}
                          </p>

                          {source.note && (
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                              {source.note}
                            </p>
                          )}
                        </div>

                        <ExternalLink className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* =================================================
              SIDEBAR
          ================================================== */}
          <aside className="space-y-6 lg:sticky lg:top-6 lg:self-start">
            {/* Contact */}
            <Card className="overflow-hidden">
              <div className="bg-emerald-700 px-5 py-4 text-white">
                <h2 className="font-semibold">
                  ইউনিয়ন পরিষদ যোগাযোগ
                </h2>
              </div>

              <CardContent className="space-y-4 p-5">
                {union.address && (
                  <ContactItem
                    icon={<MapPin className="size-4" />}
                    label="ঠিকানা"
                    value={union.address}
                  />
                )}

                {union.officePhone && (
                  <a
                    href={`tel:${union.officePhone}`}
                    className="block rounded-lg transition-colors hover:bg-muted"
                  >
                    <ContactItem
                      icon={<Phone className="size-4" />}
                      label="অফিস"
                      value={union.officePhone}
                    />
                  </a>
                )}

                {union.mobile && (
                  <a
                    href={`tel:${union.mobile}`}
                    className="block rounded-lg transition-colors hover:bg-muted"
                  >
                    <ContactItem
                      icon={<Phone className="size-4" />}
                      label="মোবাইল"
                      value={union.mobile}
                    />
                  </a>
                )}

                {union.email && (
                  <a
                    href={`mailto:${union.email}`}
                    className="block rounded-lg transition-colors hover:bg-muted"
                  >
                    <ContactItem
                      icon={<Mail className="size-4" />}
                      label="ই-মেইল"
                      value={union.email}
                    />
                  </a>
                )}

                {/* Official Website */}
                {union.officialPortal && (
                  <a
                    href={union.officialPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border p-3 text-sm transition-colors hover:bg-muted"
                  >
                    <Globe className="size-4 shrink-0 text-emerald-600" />

                    <span className="min-w-0 flex-1 truncate">
                      সরকারি ওয়েবসাইট
                    </span>

                    <ArrowUpRight className="size-4 shrink-0" />
                  </a>
                )}

                {/* Google Maps */}
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-emerald-600 px-4 text-sm font-medium text-white shadow-xs transition-colors hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
                >
                  <MapPin className="mr-2 size-4" />
                  লোকেশন দেখুন
                  <ArrowUpRight className="ml-2 size-4" />
                </a>
              </CardContent>
            </Card>

            {/* Leadership */}
            {(union.chairman ||
              union.secretary ||
              union.administrator) && (
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-purple-100 p-2.5 text-purple-700 dark:bg-purple-950 dark:text-purple-400">
                      <Users className="size-5" />
                    </div>

                    <div>
                      <CardTitle>
                        ইউনিয়ন পরিষদ
                      </CardTitle>

                      <CardDescription>
                        দায়িত্বপ্রাপ্ত কর্মকর্তাবৃন্দ
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {union.chairman && (
                    <ContactItem
                      icon={<Users className="size-4" />}
                      label="চেয়ারম্যান"
                      value={union.chairman}
                    />
                  )}

                  {union.chairmanPhone && (
                    <a
                      href={`tel:${union.chairmanPhone}`}
                      className="block rounded-lg transition-colors hover:bg-muted"
                    >
                      <ContactItem
                        icon={<Phone className="size-4" />}
                        label="চেয়ারম্যানের মোবাইল"
                        value={union.chairmanPhone}
                      />
                    </a>
                  )}

                  {union.secretary && (
                    <ContactItem
                      icon={<Users className="size-4" />}
                      label="সচিব"
                      value={union.secretary}
                    />
                  )}

                  {union.secretaryPhone && (
                    <a
                      href={`tel:${union.secretaryPhone}`}
                      className="block rounded-lg transition-colors hover:bg-muted"
                    >
                      <ContactItem
                        icon={<Phone className="size-4" />}
                        label="সচিবের মোবাইল"
                        value={union.secretaryPhone}
                      />
                    </a>
                  )}

                  {union.administrator && (
                    <ContactItem
                      icon={<ShieldCheck className="size-4" />}
                      label="প্রশাসক"
                      value={union.administrator}
                    />
                  )}

                  {union.administratorPhone && (
                    <a
                      href={`tel:${union.administratorPhone}`}
                      className="block rounded-lg transition-colors hover:bg-muted"
                    >
                      <ContactItem
                        icon={<Phone className="size-4" />}
                        label="প্রশাসকের মোবাইল"
                        value={union.administratorPhone}
                      />
                    </a>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Emergency */}
            {emergencyContacts.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>
                    জরুরি যোগাযোগ
                  </CardTitle>

                  <CardDescription>
                    জাতীয় জরুরি ও সরকারি হেল্পলাইন
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  {emergencyContacts.map((contact) => (
                    <a
                      key={`${contact.name}-${contact.number}`}
                      href={`tel:${contact.number}`}
                      className="flex items-center justify-between gap-3 rounded-lg border p-3 transition-colors hover:border-emerald-300 hover:bg-muted"
                    >
                      <span className="text-sm">
                        {contact.name}
                      </span>

                      <span className="shrink-0 font-bold text-emerald-600">
                        {contact.number}
                      </span>
                    </a>
                  ))}
                </CardContent>
              </Card>
            )}

            {/* Back */}
            <Link
              href="/unions"
              className="inline-flex h-10 w-full items-center justify-center rounded-md border bg-background px-4 text-sm font-medium shadow-xs transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
            >
              <ArrowLeft className="mr-2 size-4" />
              সকল ইউনিয়নে ফিরে যান
            </Link>
          </aside>
        </div>
      </div>
    </main>
  )
}

/* 
   INFO ITEM
  */

function InfoItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string | number
}) {
  return (
    <div className="rounded-xl border bg-background p-4">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        {icon}
        <span>{label}</span>
      </div>

      <p className="mt-2 font-semibold">
        {typeof value === "number"
          ? toBengaliNumber(value)
          : value}
      </p>
    </div>
  )
}

/* 
   CONTACT ITEM
  */

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 rounded-lg bg-emerald-100 p-2 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted-foreground">
          {label}
        </p>

        <p className="mt-1 break-words text-sm font-medium">
          {value}
        </p>
      </div>
    </div>
  )
}

/* 
   BANGLA NUMBER
  */

function toBengaliNumber(value: string | number) {
  const bengaliDigits = "০১২৩৪৫৬৭৮৯"

  return String(value).replace(
    /\d/g,
    (digit) => bengaliDigits[Number(digit)],
  )
}
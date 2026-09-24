import Link from "next/link";
import {
  Ambulance,
  ArrowRight,
  Baby,
  BadgeAlert,
  Building2,
  Flame,
  Gavel,
  HeartPulse,
  Landmark,
  LandPlot,
  LifeBuoy,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Siren,
  TrainFront,
  Waves,
} from "lucide-react";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/* =========================================================
   Official Bangladesh National Portal Emergency Hotlines
   Source:
   https://bangladesh.gov.bd/pages/static-pages/69a55ba386514399668e4e89

   Last updated on official portal:
   28 July 2026
========================================================= */

const emergencyServices = [
  {
    title: "সরকারি তথ্য ও সেবা",
    description:
      "সরকারি সেবা, জনপ্রতিনিধি ও সরকারি কর্মকর্তাদের যোগাযোগ তথ্য, পর্যটন এবং বিভিন্ন সরকারি তথ্য জানতে।",
    number: "333",
    icon: Phone,
    href: "tel:333",
    website: "https://333.gov.bd/",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2024/12/aa16a0efc4514300a4b0169f5a60e385.png",
    category: "সরকারি সেবা",
  },

  {
    title: "জাতীয় জরুরি সেবা",
    description:
      "পুলিশ, ফায়ার সার্ভিস ও অ্যাম্বুলেন্সসহ জাতীয় জরুরি সহায়তার জন্য।",
    number: "999",
    icon: Siren,
    href: "tel:999",
    website: "https://www.999.gov.bd/",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2024/12/cdf265e667e54f089292fcc54a5b4b2e.png",
    category: "জাতীয় জরুরি সেবা",
  },

  {
    title: "ফায়ার সার্ভিস",
    description:
      "আগুন, দুর্ঘটনা, উদ্ধার কার্যক্রম ও অন্যান্য জরুরি ফায়ার সার্ভিস সহায়তার জন্য।",
    number: "102",
    icon: Flame,
    href: "tel:102",
    website: "https://fireservice.gov.bd/",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2024/12/02d990a5e606481e93e560b0c1276473.jpeg",
    category: "অগ্নি ও উদ্ধার",
  },

  {
    title: "সুপ্রিম কোর্ট হেল্পলাইন",
    description:
      "আইনি সেবা, পরামর্শ এবং আদালত সংক্রান্ত তথ্যের জন্য সুপ্রিম কোর্ট হেল্পলাইন।",
    number: "103",
    icon: Gavel,
    href: "tel:103",
    website: "https://www.supremecourt.gov.bd/web/",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/d929275a-1d14-4bbd-813b-79bd6034cde8.jpeg",
    category: "আইনি সহায়তা",
  },

  {
    title: "নারী ও শিশু নির্যাতন প্রতিরোধ",
    description:
      "নারী ও শিশুর প্রয়োজনীয় সহায়তা, আইনি দিকনির্দেশনা এবং অন্যান্য সেবা পাওয়ার জন্য।",
    number: "109",
    icon: ShieldAlert,
    href: "tel:109",
    website: "https://mowca.gov.bd/",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/23aef587-b1b7-4821-b630-adf68d15c44f.png",
    category: "নারী ও শিশু",
  },

  {
    title: "দুদক হটলাইন",
    description:
      "দুর্নীতি ও অনিয়মের তথ্য বা অভিযোগ দুর্নীতি দমন কমিশনে জানাতে।",
    number: "106",
    icon: BadgeAlert,
    href: "tel:106",
    website: "https://acc.org.bd/",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/629d5db4-3ab7-4507-8995-13406eb80a07.png",
    category: "দুর্নীতি প্রতিরোধ",
  },

  {
    title: "দুর্যোগের আগাম বার্তা",
    description:
      "আবহাওয়া, নদীবন্দর, ঘূর্ণিঝড় এবং বন্যা সংক্রান্ত আগাম তথ্য ও সতর্কবার্তা জানতে।",
    number: "1090",
    icon: Waves,
    href: "tel:1090",
    website:
      "https://ddm.gov.bd/pages/static-pages/6922dc30933eb65569e0edd0",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/a1a15041-f479-4054-96e7-ecd1fa0b2e18.png",
    category: "দুর্যোগ ও আবহাওয়া",
  },

  {
    title: "ভূমি সেবা",
    description:
      "ই-নামজারি, ভূমি উন্নয়ন কর, খতিয়ান ও অন্যান্য ভূমিসেবা সংক্রান্ত তথ্য ও সহায়তার জন্য।",
    number: "16122",
    icon: LandPlot,
    href: "tel:16122",
    website: "https://land.gov.bd/",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/3ff67b0c-ca0e-488f-aee6-e6ebffbc9e35.png",
    category: "ভূমি সেবা",
  },

  {
    title: "শিশু সহায়তা",
    description:
      "শিশু সহিংসতা, নির্যাতন ও শোষণের শিকার হলে বিনামূল্যে সহায়তা পাওয়ার জন্য।",
    number: "1098",
    icon: Baby,
    href: "tel:1098",
    website:
      "https://msw.gov.bd/pages/static-pages/694032e235ce18e1c0563e15",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/94c90450-afd8-4903-a478-66ac2762ed77.png",
    category: "শিশু সুরক্ষা",
  },

  {
    title: "বাংলাদেশ কর্মচারী কল্যাণ বোর্ড",
    description:
      "বাংলাদেশ কর্মচারী কল্যাণ বোর্ডের বিভিন্ন সেবা ও তথ্যের জন্য হেল্পলাইন।",
    number: "16109",
    icon: Building2,
    href: "tel:16109",
    website: "https://bkkb.gov.bd/",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/f128dd27-3628-442b-9c38-df89007803f3.png",
    category: "কল্যাণ সেবা",
  },

  {
    title: "মাদকদ্রব্য নিয়ন্ত্রণ",
    description:
      "মাদক সংক্রান্ত তথ্য প্রদান, অভিযোগ এবং মাদকদ্রব্য নিয়ন্ত্রণ অধিদপ্তরের সেবা সম্পর্কে জানতে।",
    number: "01908888888",
    icon: ShieldCheck,
    href: "tel:+8801908888888",
    website: "https://dnc.gov.bd/",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/2ff63988-7f68-4eba-8399-64ba0a5e8b32.png",
    category: "মাদক নিয়ন্ত্রণ",
  },

  {
    title: "নৌ পরিবহন হটলাইন",
    description:
      "নৌযাত্রীদের সেবা সংক্রান্ত প্রশ্ন এবং অন্যান্য জরুরি তথ্যের জন্য।",
    number: "16113",
    icon: Waves,
    href: "tel:16113",
    website: "https://biwta.gov.bd/",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/e417ffa6-4b0a-4140-96a2-e0653fb172b4.png",
    category: "নৌ পরিবহন",
  },

  {
    title: "পাসপোর্ট বাতায়ন",
    description:
      "পাসপোর্ট সংক্রান্ত তথ্য ও সেবা পেতে সরকারি হেল্পলাইন নম্বরে যোগাযোগ করুন।",
    number: "16445",
    icon: Landmark,
    href: "tel:16445",
    category: "পাসপোর্ট ও ইমিগ্রেশন",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/f323da2c-c766-45d4-9360-45ccd157603c.png",
  },

  {
    title: "বাংলাদেশ রেলওয়ে",
    description:
      "রেলওয়ে সংক্রান্ত তথ্য ও সেবা জানতে সরকারি হটলাইনে যোগাযোগ করুন।",
    number: "131",
    icon: TrainFront,
    href: "tel:131",
    category: "রেলওয়ে",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/5cfdc4e5-93da-4f39-a9a8-5c047bb06160.png",
  },

  {
    title: "প্রবাসী কল্যাণ সেবা",
    description:
      "প্রবাসী কর্মী ও বাংলাদেশি প্রবাসীদের প্রয়োজনীয় তথ্য ও সহায়তার জন্য।",
    number: "16135",
    icon: LifeBuoy,
    href: "tel:16135",
    category: "প্রবাসী সেবা",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/0985de05-801c-4672-a047-821ece9361ad.jpeg",
  },

  {
    title: "বিদ্যুৎ সেবা",
    description:
      "বিদ্যুৎ সংক্রান্ত অভিযোগ ও সেবা সম্পর্কিত তথ্যের জন্য সরকারি হটলাইন।",
    number: "16999",
    icon: Building2,
    href: "tel:16999",
    website: "https://powerdivision.gov.bd/",
    category: "বিদ্যুৎ সেবা",
    image:
      "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-bangladesh/2026/2/698d4db5-0025-48ef-ae0a-a5f9205a4e6a.png",
  },
];

/* =========================================================
   Quick Emergency Numbers
========================================================= */

const quickEmergencyNumbers = [
  {
    title: "জাতীয় জরুরি সেবা",
    number: "999",
    icon: Siren,
    href: "tel:999",
  },
  {
    title: "ফায়ার সার্ভিস",
    number: "102",
    icon: Flame,
    href: "tel:102",
  },
  {
    title: "সরকারি তথ্য ও সেবা",
    number: "333",
    icon: Phone,
    href: "tel:333",
  },
  {
    title: "শিশু সহায়তা",
    number: "1098",
    icon: Baby,
    href: "tel:1098",
  },
];

export default function EmergencyPage() {
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
              তথ্যসূত্র: বাংলাদেশ জাতীয় তথ্য বাতায়ন • সর্বশেষ
              হালনাগাদ: ২৮ জুলাই ২০২৬
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
              const Icon = item.icon;

              return (
                <a
                  key={item.number}
                  href={item.href}
                  className="group rounded-2xl border bg-card p-5 transition-all hover:-translate-y-1 hover:border-red-300 hover:shadow-lg dark:hover:border-red-900"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950/50">
                      <Icon className="h-6 w-6" />
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
            const Icon = service.icon;

            return (
              <Card
                key={`${service.title}-${service.number}`}
                className="group overflow-hidden border-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Official Image */}
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-muted/40 p-6">
                  <Image
                    src={service.image}
                    alt={`${service.title} - ${service.number}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain p-5 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950/50">
                      <Icon className="h-5 w-5" />
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
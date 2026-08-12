import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  HeartPulse,
  Lightbulb,
  MapPin,
  Rocket,
  School,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const missionPoints = [
  "সরকারি ও প্রশাসনিক তথ্য সহজ ও সুন্দরভাবে উপস্থাপন করা",
  "স্বাস্থ্যসেবা ও চিকিৎসা সংক্রান্ত তথ্য এক জায়গায় পৌঁছে দেওয়া",
  "শিক্ষা প্রতিষ্ঠান ও শিক্ষাসেবা সম্পর্কে তথ্য সহজে খুঁজে পাওয়ার সুযোগ তৈরি করা",
  "জরুরি সেবার গুরুত্বপূর্ণ যোগাযোগের তথ্য নাগরিকদের কাছে পৌঁছে দেওয়া",
  "নালিতাবাড়ীর গুরুত্বপূর্ণ স্থান ও স্থানীয় তথ্য ডিজিটালভাবে সংরক্ষণ করা",
  "বাংলা ও ইংরেজি ভাষায় একটি সহজ ও ব্যবহারবান্ধব অভিজ্ঞতা তৈরি করা",
];

const futurePlans = [
  {
    icon: MapPin,
    title: "স্থানীয় তথ্য",
    description:
      "নালিতাবাড়ীর গুরুত্বপূর্ণ স্থান, প্রতিষ্ঠান ও নাগরিক সুবিধা সম্পর্কে তথ্য।",
  },
  {
    icon: HeartPulse,
    title: "স্বাস্থ্যসেবা",
    description:
      "হাসপাতাল, চিকিৎসক, স্বাস্থ্যকেন্দ্র ও স্বাস্থ্যসেবা সম্পর্কিত তথ্য।",
  },
  {
    icon: School,
    title: "শিক্ষা",
    description:
      "স্কুল, কলেজ, মাদ্রাসা ও অন্যান্য শিক্ষা প্রতিষ্ঠান সম্পর্কে তথ্য।",
  },
  {
    icon: ShieldCheck,
    title: "জরুরি সেবা",
    description:
      "জরুরি প্রয়োজনে পুলিশ, ফায়ার সার্ভিস, হাসপাতালসহ গুরুত্বপূর্ণ যোগাযোগ।",
  },
  {
    icon: Rocket,
    title: "ডিজিটাল উন্নয়ন",
    description:
      "স্থানীয় তথ্য ও নাগরিক সেবাকে আরও আধুনিক ও প্রযুক্তিনির্ভর করা।",
  },
  {
    icon: Code2,
    title: "স্মার্ট তথ্যসেবা",
    description:
      "ভবিষ্যতে আধুনিক অনুসন্ধান ও AI-ভিত্তিক তথ্য সহায়তা যুক্ত করা।",
  },
];

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative isolate overflow-hidden border-b">
        {/* Green gradient background */}
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(34,197,94,0.18),transparent_32%),radial-gradient(circle_at_85%_10%,rgba(16,185,129,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(5,150,105,0.12),transparent_40%)]" />

        {/* Decorative blobs */}
        <div className="absolute -left-32 top-20 -z-10 size-80 rounded-full bg-green-500/10 blur-3xl" />

        <div className="absolute -right-32 top-10 -z-10 size-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/2 -z-10 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-500/5 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-size-[40px_40px]" />

        <div className="container mx-auto px-4 py-24 sm:py-32 lg:py-36">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="outline"
              className="rounded-full border-green-500/20 bg-background/70 px-4 py-2 text-sm shadow-sm backdrop-blur-xl"
            >
              <Sparkles className="mr-2 size-4 text-green-600 dark:text-green-400" />
              নালিতাবাড়ীর জন্য একটি ডিজিটাল উদ্যোগ
            </Badge>

            <h1 className="mt-7 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              আমাদের{" "}
              <span className="bg-linear-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                সম্পর্কে
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              নালিতাবাড়ীর মানুষের কাছে প্রয়োজনীয় তথ্যকে সহজ, দ্রুত,
              নির্ভরযোগ্য ও আধুনিকভাবে পৌঁছে দেওয়ার একটি নাগরিকবান্ধব
              ডিজিটাল উদ্যোগ।
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Badge
                variant="secondary"
                className="rounded-full border border-green-500/10 px-4 py-2"
              >
                <MapPin className="mr-2 size-4 text-green-600 dark:text-green-400" />
                নালিতাবাড়ী, শেরপুর
              </Badge>

              <Badge
                variant="secondary"
                className="rounded-full border border-emerald-500/10 px-4 py-2"
              >
                <Code2 className="mr-2 size-4 text-emerald-600 dark:text-emerald-400" />
                ডিজিটাল তথ্য প্ল্যাটফর্ম
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================== */}
      <section className="relative py-20 sm:py-24">
        <div className="absolute left-0 top-20 -z-10 size-72 rounded-full bg-green-500/5 blur-3xl" />

        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Badge
                variant="outline"
                className="rounded-full border-green-500/20"
              >
                নালিতাবাড়ী উপজেলা তথ্য পোর্টাল
              </Badge>

              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-5xl">
                তথ্যকে মানুষের{" "}
                <span className="bg-linear-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                  আরও কাছে
                </span>{" "}
                নিয়ে আসা
              </h2>

              <p className="mt-6 text-base leading-8 text-muted-foreground">
                নালিতাবাড়ী উপজেলা তথ্য পোর্টাল একটি আধুনিক ডিজিটাল
                তথ্যভিত্তিক প্ল্যাটফর্ম। এর মূল লক্ষ্য হলো নালিতাবাড়ী
                উপজেলার নাগরিকদের জন্য প্রয়োজনীয় সরকারি, স্বাস্থ্য,
                শিক্ষা, জরুরি সেবা এবং স্থানীয় তথ্য সহজে খুঁজে পাওয়ার
                সুযোগ তৈরি করা।
              </p>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                বিভিন্ন সরকারি ওয়েবসাইট, প্রতিষ্ঠান এবং অন্যান্য উৎসে
                ছড়িয়ে থাকা গুরুত্বপূর্ণ তথ্যকে একটি সহজ, সুন্দর ও
                ব্যবহারবান্ধব প্ল্যাটফর্মে একত্রিত করার চেষ্টা করা হচ্ছে।
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-green-500/10">
                  <CheckCircle2 className="size-5 text-green-600 dark:text-green-400" />
                </div>

                <p className="text-sm font-medium">
                  তথ্য সহজ করা, সেবা সহজ করা
                </p>
              </div>
            </div>

            {/* Information Cards */}
            <div className="grid grid-cols-2 gap-4">
              <InfoCard
                icon={Users}
                title="নাগরিককেন্দ্রিক"
                description="নাগরিকদের প্রয়োজনকে সামনে রেখে তথ্য সাজানো।"
              />

              <InfoCard
                icon={Target}
                title="সহজ তথ্য"
                description="প্রয়োজনীয় তথ্য দ্রুত খুঁজে পাওয়ার সুবিধা।"
              />

              <InfoCard
                icon={ShieldCheck}
                title="নির্ভরযোগ্য"
                description="সম্ভব হলে অফিসিয়াল উৎসকে অগ্রাধিকার দেওয়া।"
              />

              <InfoCard
                icon={Rocket}
                title="ভবিষ্যতমুখী"
                description="প্রযুক্তির মাধ্যমে আরও উন্নত তথ্যসেবা।"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          MISSION & VISION
      ========================================================== */}
      <section className="relative overflow-hidden border-y bg-linear-to-br from-green-50 via-background to-emerald-50/50 py-20 dark:from-green-950/20 dark:via-background dark:to-emerald-950/20 sm:py-24">
        <div className="absolute -left-32 top-20 size-80 rounded-full bg-green-500/10 blur-3xl" />

        <div className="absolute -right-32 bottom-10 size-96 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge
              variant="outline"
              className="rounded-full border-green-500/20 bg-background/60"
            >
              আমাদের লক্ষ্য
            </Badge>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              মিশন ও ভিশন
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              একটি তথ্যসমৃদ্ধ, প্রযুক্তিনির্ভর ও ডিজিটাল নালিতাবাড়ী গড়ে
              তোলার লক্ষ্যে আমাদের যাত্রা।
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission */}
            <Card className="group border-green-500/10 bg-background/80 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-green-500/20 hover:shadow-xl hover:shadow-green-500/5">
              <CardHeader>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-600 transition-transform group-hover:scale-110 dark:text-green-400">
                  <Target className="size-7" />
                </div>

                <CardTitle className="mt-4 text-2xl">
                  আমাদের মিশন
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="leading-8 text-muted-foreground">
                  নালিতাবাড়ীর মানুষের কাছে প্রয়োজনীয় তথ্যকে আরও সহজ,
                  দ্রুত এবং নাগরিকবান্ধব করে পৌঁছে দেওয়াই আমাদের প্রধান
                  লক্ষ্য।
                </p>

                <div className="mt-7 space-y-3">
                  {missionPoints.slice(0, 4).map((point) => (
                    <div
                      key={point}
                      className="flex gap-3 rounded-xl border border-green-500/10 bg-green-500/5 p-3"
                    >
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-green-400" />

                      <span className="text-sm leading-6">{point}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="group border-emerald-500/10 bg-background/80 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/5">
              <CardHeader>
                <div className="flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition-transform group-hover:scale-110 dark:text-emerald-400">
                  <Lightbulb className="size-7" />
                </div>

                <CardTitle className="mt-4 text-2xl">
                  আমাদের ভিশন
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="leading-8 text-muted-foreground">
                  নালিতাবাড়ীকে একটি তথ্যসমৃদ্ধ, প্রযুক্তিনির্ভর এবং
                  ডিজিটালভাবে সংযুক্ত উপজেলা হিসেবে এগিয়ে নিতে সহায়তা
                  করাই আমাদের দীর্ঘমেয়াদি লক্ষ্য।
                </p>

                <p className="mt-5 leading-8 text-muted-foreground">
                  ভবিষ্যতে এই প্ল্যাটফর্মকে এমন একটি নির্ভরযোগ্য তথ্যকেন্দ্রে
                  পরিণত করতে চাই, যেখানে একজন নাগরিক খুব অল্প সময়ের মধ্যে
                  তার প্রয়োজনীয় স্থানীয় তথ্য খুঁজে পাবেন।
                </p>

                <div className="mt-7 rounded-xl border border-emerald-500/10 bg-emerald-500/5 p-4">
                  <p className="text-sm leading-7 text-muted-foreground">
                    আমাদের লক্ষ্য শুধু তথ্য প্রকাশ করা নয়; বরং তথ্যকে
                    মানুষের দৈনন্দিন জীবনের জন্য কার্যকর করে তোলা।
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOUNDER
      ========================================================== */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute left-1/2 top-1/2 -z-10 size-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-[120px]" />

        <div className="absolute right-0 top-20 -z-10 size-72 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <Badge
              variant="outline"
              className="rounded-full border-green-500/20"
            >
              <Code2 className="mr-2 size-4 text-green-600 dark:text-green-400" />
              প্রতিষ্ঠাতা ও ডেভেলপার
            </Badge>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              এই উদ্যোগের পেছনের মানুষ
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              প্রযুক্তিকে মানুষের জন্য আরও কার্যকর করার একটি ছোট্ট প্রচেষ্টা।
            </p>
          </div>

          <Card className="mx-auto max-w-5xl overflow-hidden border-green-500/10 bg-background/80 shadow-2xl shadow-green-500/10 backdrop-blur-xl">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* Developer Image */}
              <div className="relative min-h-105 overflow-hidden bg-muted lg:min-h-125">
                <Image
                  src="/developer.jpg"
                  alt="মোঃ আজিজুল হাকিম"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

                <div className="absolute inset-0 bg-linear-to-t from-green-950/80 via-black/10 to-transparent" />

                <div className="absolute bottom-6 left-6">
                  <Badge className="border border-green-400/20 bg-green-950/50 text-white backdrop-blur-md hover:bg-green-950/60">
                    প্রতিষ্ঠাতা • ডেভেলপার
                  </Badge>
                </div>
              </div>

              {/* Developer Information */}
              <CardContent className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                  প্রতিষ্ঠাতা ও ডেভেলপার
                </span>

                <h3 className="mt-2 text-3xl font-bold sm:text-4xl">
                  মোঃ আজিজুল হাকিম
                </h3>

                <p className="mt-2 text-muted-foreground">
                  ফ্রন্ট-এন্ড ডেভেলপার ও প্রযুক্তিপ্রেমী
                </p>

                <p className="mt-6 leading-8 text-muted-foreground">
                  নালিতাবাড়ী উপজেলা তথ্য পোর্টালের ধারণা, ডিজাইন এবং
                  প্রযুক্তিগত উন্নয়নের সঙ্গে যুক্ত রয়েছেন{" "}
                  <strong className="text-foreground">
                    মোঃ আজিজুল হাকিম
                  </strong>
                  , একজন ফ্রন্ট-এন্ড ডেভেলপার ও প্রযুক্তিপ্রেমী।
                </p>

                <p className="mt-4 leading-8 text-muted-foreground">
                  ওয়েব প্রযুক্তি ব্যবহার করে মানুষের দৈনন্দিন জীবনের
                  বাস্তব সমস্যার সহজ সমাধান তৈরি করার আগ্রহ থেকেই এই
                  প্ল্যাটফর্মের যাত্রা শুরু হয়েছে।
                </p>

                {/* Technology */}
                <div className="mt-7">
                  <p className="mb-3 text-sm font-semibold">
                    ব্যবহৃত প্রযুক্তি
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="secondary"
                        className="rounded-full border border-green-500/10"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    asChild
                    className="bg-linear-to-r from-green-600 to-emerald-600 shadow-lg shadow-green-500/20 hover:from-green-700 hover:to-emerald-700"
                  >
                    <Link
                      href="https://azijul.pro.bd"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ডেভেলপারের পোর্টফোলিও
                      <ArrowUpRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Quote */}
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <div className="mx-auto flex size-11 items-center justify-center rounded-full bg-green-500/10 text-green-600 dark:text-green-400">
              <Sparkles className="size-5" />
            </div>

            <blockquote className="mt-4 text-xl font-medium leading-9 text-muted-foreground sm:text-2xl">
              “প্রযুক্তি তখনই অর্থবহ, যখন তা মানুষের জীবনকে সহজ করে।”
            </blockquote>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY THIS PLATFORM
      ========================================================== */}
      <section className="relative overflow-hidden border-y bg-linear-to-br from-green-50 via-background to-teal-50/50 py-20 dark:from-green-950/20 dark:via-background dark:to-teal-950/20 sm:py-24">
        <div className="absolute left-0 top-0 size-96 rounded-full bg-green-500/5 blur-3xl" />

        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="rounded-full border-green-500/20 bg-background/60"
            >
              আমাদের উদ্দেশ্য
            </Badge>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              কেন এই প্ল্যাটফর্ম?
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              বর্তমানে বিভিন্ন ধরনের স্থানীয় তথ্য বিভিন্ন সরকারি ওয়েবসাইট,
              প্রতিষ্ঠান এবং অন্যান্য উৎসে ছড়িয়ে রয়েছে। ফলে সাধারণ
              মানুষের জন্য প্রয়োজনীয় তথ্য খুঁজে পেতে অনেক সময় ব্যয় হয়।
            </p>

            <p className="mt-4 leading-8 text-muted-foreground">
              এই সমস্যাটি কমিয়ে স্থানীয় গুরুত্বপূর্ণ তথ্যকে একটি সহজ
              ডিজিটাল প্ল্যাটফর্মে তুলে ধরাই আমাদের অন্যতম উদ্দেশ্য।
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <Card className="border-green-500/10 bg-background/80 shadow-sm backdrop-blur-xl">
              <CardContent className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8">
                {missionPoints.map((point) => (
                  <div
                    key={point}
                    className="flex gap-3 rounded-xl border border-green-500/10 bg-green-500/5 p-4 transition-colors hover:bg-green-500/10"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-green-600 dark:text-green-400" />

                    <span className="text-sm leading-6">{point}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* =========================================================
          FUTURE PLANS
      ========================================================== */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute right-0 top-20 -z-10 size-96 rounded-full bg-emerald-500/5 blur-3xl" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <Badge
              variant="outline"
              className="rounded-full border-emerald-500/20"
            >
              ভবিষ্যৎ পরিকল্পনা
            </Badge>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              আরও ভালো ডিজিটাল সেবার পথে
            </h2>

            <p className="mt-5 leading-8 text-muted-foreground">
              ব্যবহারকারীদের প্রয়োজন ও প্রযুক্তির পরিবর্তনের সঙ্গে তাল
              মিলিয়ে আমরা ধীরে ধীরে নতুন সুবিধা যুক্ত করার পরিকল্পনা করছি।
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {futurePlans.map((item) => {
              const Icon = item.icon;

              return (
                <Card
                  key={item.title}
                  className="group border-green-500/10 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/30 hover:shadow-xl hover:shadow-green-500/5"
                >
                  <CardContent className="p-6">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600 transition-transform duration-300 group-hover:scale-110 dark:text-green-400">
                      <Icon className="size-5" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================== */}
      <section className="container mx-auto px-4 pb-20 sm:pb-28">
        <Card className="relative overflow-hidden border-0 bg-linear-to-br from-green-600 via-emerald-600 to-teal-600 text-white shadow-2xl shadow-green-500/20">
          {/* Decorative gradients */}
          <div className="absolute -right-24 -top-24 size-80 rounded-full bg-lime-300/20 blur-3xl" />

          <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-emerald-950/30 blur-3xl" />

          <div className="absolute left-1/2 top-1/2 size-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

          <CardContent className="relative p-8 text-center sm:p-12 lg:p-16">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
              <HeartPulse className="size-7" />
            </div>

            <h2 className="mt-6 text-2xl font-bold sm:text-3xl lg:text-4xl">
              আমাদের উদ্দেশ্য একটাই
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-white/90">
              নালিতাবাড়ীর তথ্য নালিতাবাড়ীর মানুষের কাছে আরও সহজে পৌঁছে
              দেওয়া।
            </p>

            <p className="mt-8 text-xl font-bold sm:text-2xl">
              একটি তথ্যসমৃদ্ধ ও ডিজিটাল নালিতাবাড়ী গড়ে তোলাই আমাদের স্বপ্ন।
            </p>

            <p className="mt-3 text-sm text-white/75">
              প্রযুক্তির মাধ্যমে মানুষের জন্য, নালিতাবাড়ীর জন্য।
            </p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

function InfoCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="group border-green-500/10 bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/20 hover:shadow-lg hover:shadow-green-500/5">
      <CardContent className="p-5">
        <div className="flex size-11 items-center justify-center rounded-xl bg-green-500/10 text-green-600 transition-transform group-hover:scale-110 dark:text-green-400">
          <Icon className="size-5" />
        </div>

        <h3 className="mt-4 font-semibold">{title}</h3>

        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}
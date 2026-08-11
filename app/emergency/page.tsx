import Link from "next/link";
import {
  Ambulance,
  ArrowRight,
  Building2,
  Flame,
  HeartPulse,
  Phone,
  ShieldAlert,
  ShieldCheck,
  Siren,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";


const emergencyServices = [
 
   {
    title: "সরকারি তথ্য ও সেবা",
    description:
      "পুলিশ, ফায়ার সার্ভিস, অ্যাম্বুলেন্সসহ জরুরি সহায়তার জন্য।",
    number: "333",
    icon: Phone,
    href: "tel:333",
  },
  {
    title: "পুলিশ",
    description: "আইনশৃঙ্খলা ও নিরাপত্তাজনিত জরুরি সহায়তা।",
    number: "999",
    icon: ShieldAlert,
    href: "tel:999",
  },
  {
    title: "ফায়ার সার্ভিস হটলাইন",
    description: "আগুন, দুর্ঘটনা ও উদ্ধার কার্যক্রমের জন্য।",
    number: "102",
    icon: Flame,
    href: "tel:102",
  },
  {
    title: "অ্যাম্বুলেন্স",
    description: "জরুরি রোগী পরিবহন ও চিকিৎসা সহায়তার জন্য।",
    number: "999",
    icon: Ambulance,
    href: "tel:999",
  },
];

const importantNumbers = [
  {
    title: "উপজেলা স্বাস্থ্য কমপ্লেক্স",
    number: "Contact Required",
    icon: HeartPulse,
  },
  {
    title: "থানা",
    number: "Contact Required",
    icon: ShieldCheck,
  },
  {
    title: "ফায়ার সার্ভিস",
    number: "Contact Required",
    icon: Flame,
  },
  {
    title: "উপজেলা প্রশাসন",
    number: "Contact Required",
    icon: Building2,
  },
];

export default function EmergencyPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-br from-red-50 via-background to-orange-50 dark:from-red-950/20 dark:via-background dark:to-orange-950/20">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="destructive"
              className="mb-5 rounded-full px-4 py-2"
            >
              <Siren className="mr-2 h-4 w-4" />
              জরুরি সহায়তা
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              জরুরি সেবা
              <span className="mt-2 block text-red-600">
                এক ক্লিকেই দ্রুত সহায়তা
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              নালিতাবাড়ী উপজেলার গুরুত্বপূর্ণ জরুরি সেবা,
              যোগাযোগ নম্বর এবং দ্রুত সহায়তার তথ্য এখানে
              খুঁজে নিন।
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
          </div>
        </div>
      </section>

      {/* Emergency Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10">
          <p className="text-sm font-semibold text-red-600">
            জরুরি নম্বর
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            গুরুত্বপূর্ণ জরুরি সেবা
          </h2>

          <p className="mt-2 text-muted-foreground">
            প্রয়োজন অনুযায়ী দ্রুত সংশ্লিষ্ট সেবায় যোগাযোগ করুন।
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {emergencyServices.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950/50">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold">
                    {service.title}
                  </h3>

                  <p className="mt-2 min-h-14 text-sm leading-6 text-muted-foreground">
                    {service.description}
                  </p>

                  <a
                    href={service.href}
                    className="mt-5 flex items-center justify-between rounded-lg bg-red-50 px-4 py-3 font-bold text-red-600 transition-colors hover:bg-red-100 dark:bg-red-950/30 dark:hover:bg-red-950/50"
                  >
                    <span>{service.number}</span>
                    <Phone className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Local Contacts */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">
              নালিতাবাড়ীর গুরুত্বপূর্ণ যোগাযোগ
            </h2>

            <p className="mt-2 text-muted-foreground">
              স্থানীয় জরুরি সেবার যাচাইকৃত যোগাযোগ তথ্য।
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {importantNumbers.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title}>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 dark:bg-red-950/50">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.number}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="container mx-auto px-4 py-12">
        <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-900/50 dark:bg-red-950/20">
          <div className="flex gap-4">
            <ShieldAlert className="mt-1 h-6 w-6 shrink-0 text-red-600" />

            <div>
              <h3 className="font-semibold text-red-700 dark:text-red-400">
                গুরুত্বপূর্ণ সতর্কতা
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                শুধুমাত্র প্রকৃত জরুরি পরিস্থিতিতে জরুরি
                নম্বরে যোগাযোগ করুন। তথ্য পরিবর্তিত হতে পারে;
                প্রয়োজনের সময় সংশ্লিষ্ট কর্তৃপক্ষের নম্বর
                যাচাই করে নিন।
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock,
  Hospital,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const hospitals = [
  {
    id: "1",
    name: "নালিতাবাড়ী উপজেলা স্বাস্থ্য কমপ্লেক্স",
    type: "সরকারি হাসপাতাল",
    address: "গড়কান্দা, নালিতাবাড়ী, শেরপুর",
    phone: "01716426892",
    image: "/hospitals/NHC.png",
    mapsLink:
      "https://maps.google.com/?q=25.1413667,90.1869644",
    emergency: true,
    open: "২৪ ঘণ্টা",
    description:
      "নালিতাবাড়ী উপজেলার প্রধান সরকারি স্বাস্থ্যসেবা প্রতিষ্ঠান। উপজেলা পর্যায়ে বহির্বিভাগ, জরুরি স্বাস্থ্যসেবা ও বিভিন্ন চিকিৎসা সেবা প্রদান করা হয়।",
  },
  {
    id: "2",
    name: "আওয়ার লেডি অফ লুর্ডস ক্লিনিক",
    type: "বেসরকারি হাসপাতাল/ক্লিনিক",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    image: "https://i.postimg.cc/KYHmYcwD/a'oya-ra-la-da-apha-la-ra-dasa-ka-la-na-ka.png",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Our+Lady+of+Lords+Clinic+Nalitabari+Sherpur",
    emergency: false,
    open: "সময় যাচাই করুন",
    description:
      "DGHS Facility Registry-তে নালিতাবাড়ী উপজেলার একটি বেসরকারি হাসপাতাল/ক্লিনিক হিসেবে তালিকাভুক্ত স্বাস্থ্যসেবা প্রতিষ্ঠান।",
  },
  {
    id: "3",
    name: "ব্র্যাক (BHP) - নালিতাবাড়ী",
    type: "এনজিও হাসপাতাল/ক্লিনিক",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    image: "https://i.postimg.cc/wxWn8bKy/ba-ra-ya-ka-(BHP)-na-la-ta-ba-da.png",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=BRAC+BHP+Nalitabari+Sherpur",
    emergency: false,
    open: "সময় যাচাই করুন",
    description:
      "DGHS Facility Registry-তে নালিতাবাড়ী উপজেলার NGO Hospital/Clinic হিসেবে তালিকাভুক্ত স্বাস্থ্যসেবা প্রতিষ্ঠান।",
  },
  {
    id: "4",
    name: "নালিতাবাড়ী ডায়বেটিক হাসপাতাল",
    type: "হাসপাতাল",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    image: "https://i.postimg.cc/Hn7wNxD7/na-la-ta-ba-da-da-ya-ganasa-ta-ka-sa-na-ta-ra-(pa-ya-thalaja-).png",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Nalitabari+Diabetic+Hospital+Sherpur",
    emergency: false,
    open: "সময় যাচাই করুন",
    description:
      "নালিতাবাড়ী উপজেলার একটি ডায়াগনস্টিক ও প্যাথলজি সেবা প্রতিষ্ঠান। DGHS Facility Registry-তে তালিকাভুক্ত।",
  },
  {
    id: "5",
    name: "ডক্টরস চেম্বার এন্ড ডায়াগনস্টিক",
    type: "ডায়াগনস্টিক সেন্টার",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    image: "https://i.postimg.cc/ydMqHdxy/Doctors-Chamber-and-Diagnostic.png",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Doctors+Chamber+Diagnostic+Nalitabari+Sherpur",
    emergency: false,
    open: "সময় যাচাই করুন",
    description:
      "নালিতাবাড়ী উপজেলার একটি Consultancy & Diagnostic Center হিসেবে DGHS Facility Registry-তে তালিকাভুক্ত।",
  },
  {
    id: "6",
    name: "নালিতাবাড়ী ইউনিয়ন স্বাস্থ্য কেন্দ্র",
    type: "সরকারি স্বাস্থ্য কেন্দ্র",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "01759222059",
    image: "",
    mapsLink:
      "https://www.google.com/maps/search/?api=1&query=Nalitabari+Union+Health+Center+Sherpur",
    emergency: false,
    open: "সরকারি সেবা সময়",
    description:
      "নালিতাবাড়ী উপজেলার ইউনিয়ন পর্যায়ের সরকারি স্বাস্থ্যসেবা কেন্দ্র।",
  },
];

export default function HospitalsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_10%_5%,rgba(34,197,94,0.13),transparent_30%),radial-gradient(circle_at_90%_15%,rgba(16,185,129,0.10),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.07),transparent_35%)]
          "
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
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg shadow-emerald-500/20">
              <Hospital className="size-7" />
            </div>

            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              স্বাস্থ্যসেবা
            </p>

            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              নালিতাবাড়ীর{" "}
              <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                হাসপাতাল ও ক্লিনিক
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              নালিতাবাড়ী উপজেলার সরকারি ও বেসরকারি হাসপাতাল,
              ক্লিনিক এবং ডায়াগনস্টিক সেন্টারের তথ্য সহজেই খুঁজে নিন।
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        {/* Search + Stats */}
        <div className="mb-10 grid gap-5 md:grid-cols-[1fr_auto]">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="হাসপাতাল, ক্লিনিক বা এলাকার নাম লিখুন..."
              className="h-12 border-emerald-500/10 bg-background/70 pl-12 backdrop-blur-xl"
            />
          </div>

          <div className="flex items-center justify-center gap-3 rounded-xl border border-emerald-500/10 bg-background/70 px-5 py-3 backdrop-blur-xl">
            <Hospital className="size-5 text-emerald-600" />

            <div>
              <p className="text-xs text-muted-foreground">
                মোট প্রতিষ্ঠান
              </p>

              <p className="font-bold">{hospitals.length}</p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Button
            variant="default"
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white"
          >
            সব
          </Button>

          <Button variant="outline">সরকারি</Button>

          <Button variant="outline">বেসরকারি</Button>

          <Button variant="outline">ক্লিনিক</Button>

          <Button variant="outline">ডায়াগনস্টিক</Button>
        </div>

        {/* Hospital Cards */}
        <div className="grid gap-6 lg:grid-cols-2">
          {hospitals.map((hospital) => (
            <Card
              key={hospital.id}
              className="
                group relative overflow-hidden
                border-emerald-500/10
                bg-background/70
                shadow-sm
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-1
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
                      <div className="flex size-20 items-center justify-center rounded-2xl bg-background/80 text-emerald-600 shadow-lg ring-1 ring-emerald-500/10 backdrop-blur">
                        <Hospital className="size-10" />
                      </div>
                    </div>
                  </>
                )}

                {/* Image overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Emergency Badge */}
                {hospital.emergency && (
                  <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
                    <ShieldCheck className="size-3.5" />
                    জরুরি সেবা
                  </div>
                )}
              </div>

              {/* Glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-emerald-500/10 blur-3xl transition-all group-hover:bg-emerald-500/20" />

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

              <CardContent className="relative space-y-5">
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
                  <Clock className="size-4 text-emerald-600" />
                  <span>{hospital.open}</span>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 border-t border-emerald-500/10 pt-4 sm:flex-row">
                  {/* Details */}
                  <Button
                    asChild
                    className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:opacity-90"
                  >
                    <Link href={`/hospitals/${hospital.id}`}>
                      বিস্তারিত দেখুন
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>

                  {/* Phone */}
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

                  {/* Google Maps */}
                  <Button
                    asChild
                    variant="outline"
                    className="border-emerald-500/15 hover:bg-emerald-500/5"
                  >
                    <a
                      href={hospital.mapsLink}
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
          ))}
        </div>

        {/* Add Information CTA */}
        <div className="mt-12 rounded-3xl border border-dashed border-emerald-500/20 bg-emerald-500/[0.03] p-8 text-center md:p-12">
          <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
            <Hospital className="size-6" />
          </div>

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
        </div>
      </section>
    </main>
  );
}
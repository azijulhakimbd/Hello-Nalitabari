import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Car,
  Clock,
  MapPin,
  Mountain,
  Navigation,
  Trees,
  Waves,
  Landmark,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const places = [
  {
    id: "madhutila-eco-park",
    name: "মধুটিলা ইকোপার্ক",
    englishName: "Madhutila Eco Park",
    location: "পোড়াগাঁও ইউনিয়ন, নালিতাবাড়ী, শেরপুর",
    category: "প্রকৃতি",
    icon: Trees,
    image:
      "/places/Modhutila.png",
    description:
      "মধুটিলা ইকোপার্ক নালিতাবাড়ী উপজেলার পোড়াগাঁও ইউনিয়নে অবস্থিত একটি উল্লেখযোগ্য প্রাকৃতিক পর্যটন কেন্দ্র। পাহাড়ি ঢাল, বনভূমি ও সবুজ পরিবেশ এই স্থানটিকে নালিতাবাড়ীর অন্যতম আকর্ষণীয় ভ্রমণ গন্তব্যে পরিণত করেছে।",
    details:
      "পার্কে প্রবেশের পর উঁচু গাছের সারি, খোলা প্রান্তর এবং পাহাড়ি ঢালের আঁকাবাঁকা রাস্তা দেখা যায়। পর্যটকদের জন্য পিকনিক স্পট, শিশুদের বিনোদন ব্যবস্থা, তথ্যকেন্দ্র, পার্কিং, ক্যানটিন, মিনি চিড়িয়াখানা এবং বিভিন্ন প্রজাতির গাছপালার ব্যবস্থা রয়েছে। পাহাড়ের চূড়ায় মহুয়া রেস্টহাউসও রয়েছে।",
    highlights: [
      "পাহাড় ও বনাঞ্চল",
      "পিকনিক স্পট",
      "শিশুদের বিনোদন",
      "মহুয়া রেস্টহাউস",
      "মিনি চিড়িয়াখানা",
      "বিভিন্ন প্রজাতির বৃক্ষ ও ফুল",
    ],
    travel:
      "নালিতাবাড়ী সদর থেকে অটোরিকশা বা মোটরসাইকেলে মধুটিলা ইকোপার্কে যাওয়া যায়। শেরপুর জেলা প্রশাসনের তথ্য অনুযায়ী নালিতাবাড়ী থেকে প্রায় ২০–২৫ মিনিটে মধুটিলায় পৌঁছানো যায়।",
    mapQuery: "Madhutila Eco Park, Nalitabari, Sherpur, Bangladesh",
  },
  {
  id: "nalitabari-model-mosque",
  name: "নালিতাবাড়ী উপজেলা মডেল মসজিদ এবং ইসলামিক ঐতিহ্য কেন্দ্র",
  englishName:
    "Nalitabari Upazila Model Mosque and Islamic Cultural Centre (NMM-ICC)",
  location: "নালিতাবাড়ী, শেরপুর",
  category: "ধর্মীয় ও সাংস্কৃতিক",
  icon: Landmark,
  image:
    "/places/NMMF.png",
  description:
    "নালিতাবাড়ী উপজেলা মডেল মসজিদ এবং ইসলামিক ঐতিহ্য কেন্দ্র (NMM-ICC) নালিতাবাড়ী উপজেলার একটি গুরুত্বপূর্ণ ধর্মীয় ও সাংস্কৃতিক স্থাপনা। আধুনিক স্থাপত্যশৈলী, ইসলামিক ঐতিহ্য এবং ধর্মীয় পরিবেশের সমন্বয়ে গড়ে ওঠা এই মসজিদটি স্থানীয় মুসল্লি ও দর্শনার্থীদের কাছে একটি উল্লেখযোগ্য স্থান।",
  details:
    "মডেল মসজিদ ও ইসলামিক ঐতিহ্য কেন্দ্রটি আধুনিক ইসলামিক স্থাপত্যের বৈশিষ্ট্য ধারণ করে নির্মিত। এখানে মুসল্লিদের নামাজ আদায়ের পাশাপাশি ইসলামিক শিক্ষা, ধর্মীয় আলোচনা ও সাংস্কৃতিক কার্যক্রম পরিচালনার সুযোগ রয়েছে। মসজিদটির নান্দনিক স্থাপত্য, প্রশস্ত পরিবেশ এবং ধর্মীয় আবহ দর্শনার্থীদের আকর্ষণ করে। এটি নালিতাবাড়ীর ধর্মীয় ও সাংস্কৃতিক ঐতিহ্যের একটি গুরুত্বপূর্ণ অংশ হিসেবে বিবেচিত।",
  highlights: [
    "আধুনিক ইসলামিক স্থাপত্য",
    "নামাজ আদায়ের সুবিধা",
    "ইসলামিক শিক্ষা ও ধর্মীয় কার্যক্রম",
    "ইসলামিক ঐতিহ্য ও সংস্কৃতি চর্চা",
    "পরিচ্ছন্ন ও মনোরম পরিবেশ",
    "স্থানীয় মুসল্লি ও দর্শনার্থীদের জন্য গুরুত্বপূর্ণ স্থান",
  ],
  travel:
    "নালিতাবাড়ী উপজেলা সদর থেকে সহজেই অটোরিকশা, সিএনজি, মোটরসাইকেল বা ব্যক্তিগত যানবাহনে মডেল মসজিদ ও ইসলামিক ঐতিহ্য কেন্দ্রে যাওয়া যায়। গুগল ম্যাপ ব্যবহার করে সরাসরি লোকেশন অনুসরণ করা যাবে।",
  mapQuery:
    "Nalitabari Upazila Model Mosque and Islamic Cultural Centre, Nalitabari, Sherpur, Bangladesh",
  mapsUrl:
    "https://maps.app.goo.gl/YtUPCngBJeGNc5xf6",
},

  {
    id: "panihata",
    name: "পানিহাতা",
    englishName: "Panihata",
    location: "পানিহাতা, নালিতাবাড়ী, শেরপুর",
    category: "পাহাড় ও সীমান্ত",
    icon: Mountain,
    image:
      "/places/Panihata.png",
    description:
      "পানিহাতা নালিতাবাড়ী উপজেলার একটি সীমান্তবর্তী প্রাকৃতিক সৌন্দর্যের এলাকা। গারো পাহাড়ের পাদদেশ, সবুজ প্রকৃতি ও সীমান্তবর্তী পরিবেশ এখানকার প্রধান আকর্ষণ।",
    details:
      "পানিহাতা অঞ্চলে পাহাড়ি প্রকৃতি ও গ্রামীণ পরিবেশের একটি সুন্দর সমন্বয় দেখা যায়। প্রকৃতি দেখা, ছবি তোলা এবং শান্ত পরিবেশ উপভোগ করার জন্য জায়গাটি বিশেষভাবে উপযোগী।",
    highlights: [
      "গারো পাহাড়ের প্রাকৃতিক পরিবেশ",
      "সীমান্তবর্তী এলাকা",
      "সবুজ পাহাড় ও বন",
      "ফটোগ্রাফি",
      "প্রকৃতি ভ্রমণ",
    ],
    travel:
      "নালিতাবাড়ী সদর থেকে পানিহাতা এলাকার দিকে স্থানীয় যানবাহন বা মোটরসাইকেলে যাওয়া যায়। সীমান্তবর্তী এলাকায় যাওয়ার সময় স্থানীয় নির্দেশনা ও নিরাপত্তা বিধি মেনে চলুন।",
    mapQuery: "Panihata, Nalitabari, Sherpur, Bangladesh",
  },

  {
    id: "nalitabari-rubber-dam",
    name: "নালিতাবাড়ী রাবার ড্যাম",
    englishName: "Nalitabari Rubber Dam",
    location: "সন্যাসীভিটা, বাঘবেড় ইউনিয়ন, নালিতাবাড়ী",
    category: "নদী ও জলপ্রকৃতি",
    icon: Waves,
    image:
      "/places/RDN.png",
    description:
      "চেল্লাখালী নদীর ওপর নির্মিত নালিতাবাড়ী রাবার ড্যাম উপজেলার পরিচিত দর্শনীয় স্থানগুলোর একটি। নদীর পানি, ড্যাম ও আশপাশের সবুজ পরিবেশ এখানে সুন্দর একটি প্রাকৃতিক দৃশ্য তৈরি করে।",
    details:
      "সন্যাসীভিটা গ্রামের সন্যাসীভিটা বাজারের সংলগ্ন চেল্লাখালী নদীর ওপর এই রাবার ড্যাম অবস্থিত। বর্ষা ও বিভিন্ন মৌসুমে নদীর পানির দৃশ্য এবং আশপাশের পরিবেশ দর্শনার্থীদের আকর্ষণ করে।",
    highlights: [
      "চেল্লাখালী নদী",
      "রাবার ড্যাম",
      "গ্রামীণ পরিবেশ",
      "প্রাকৃতিক দৃশ্য",
      "ফটোগ্রাফি",
    ],
    travel:
      "নালিতাবাড়ী সদর থেকে স্থানীয় সড়কপথে সন্যাসীভিটা এলাকায় যাওয়া যায়। স্থানীয়দের কাছ থেকে ড্যামের সঠিক প্রবেশপথ জেনে নেওয়া সুবিধাজনক।",
    mapQuery:
      "Nalitabari Rubber Dam, Sannyasibhita, Sherpur, Bangladesh",
  },

  {
    id: "baruamari-mission",
    name: "বারুয়ামারী মিশন",
    englishName: "Baruamari Mission",
    location: "বারুয়ামারী, নালিতাবাড়ী, শেরপুর",
    category: "ঐতিহ্য ও সংস্কৃতি",
    icon: Camera,
    image:
      "/places/BM.png",
    description:
      "বারুয়ামারী মিশন নালিতাবাড়ী উপজেলার উল্লেখযোগ্য ঐতিহাসিক ও সাংস্কৃতিক স্থানগুলোর একটি। স্থানীয় ইতিহাস ও সংস্কৃতির সঙ্গে এই এলাকার সম্পর্ক রয়েছে।",
    details:
      "নালিতাবাড়ী উপজেলার সরকারি তথ্যসূত্রে বারুয়ামারী মিশনকে দর্শনীয় স্থান হিসেবে উল্লেখ করা হয়েছে। ঐতিহ্য ও স্থানীয় সংস্কৃতি সম্পর্কে জানতে আগ্রহী দর্শনার্থীদের জন্য এটি একটি গুরুত্বপূর্ণ স্থান।",
    highlights: [
      "ঐতিহাসিক পরিবেশ",
      "স্থানীয় সংস্কৃতি",
      "ঐতিহ্যবাহী এলাকা",
      "ফটোগ্রাফি",
    ],
    travel:
      "নালিতাবাড়ী সদর থেকে স্থানীয় যানবাহনের মাধ্যমে বারুয়ামারী এলাকায় যাওয়া যায়। যাওয়ার আগে স্থানীয়ভাবে বর্তমান যাতায়াত ও দর্শনার্থী সুবিধা সম্পর্কে জেনে নেওয়া ভালো।",
    mapQuery: "Baruamari Mission, Nalitabari, Sherpur, Bangladesh",
  },
];

export function generateStaticParams() {
  return places.map((place) => ({
    slug: place.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = places.find((item) => item.id === slug);

  if (!place) {
    return {
      title: "স্থান পাওয়া যায়নি | নালিতাবাড়ী",
    };
  }

  return {
    title: `${place.name} | নালিতাবাড়ী পর্যটন`,
    description: place.description,
  };
}

export default async function PlaceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const place = places.find((item) => item.id === slug);

  if (!place) {
    notFound();
  }

  const Icon = place.icon;

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    place.mapQuery
  )}`;

  const otherPlaces = places.filter((item) => item.id !== place.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] sm:h-[500px]">
          <Image
            src={place.image}
            alt={place.name}
            fill
            priority
            unoptimized
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-white">
              <Link
                href="/places"
                className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                সব দর্শনীয় স্থান
              </Link>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm backdrop-blur">
                  <Icon className="h-4 w-4" />
                  {place.category}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-sm backdrop-blur">
                  <MapPin className="h-4 w-4" />
                  নালিতাবাড়ী, শেরপুর
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {place.name}
              </h1>

              <p className="mt-3 text-lg text-white/80">
                {place.englishName}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          <div>
            <div className="mb-8">
              <p className="text-sm font-medium text-primary">
                পর্যটন গাইড
              </p>

              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                {place.name} সম্পর্কে
              </h2>

              <p className="mt-5 text-base leading-8 text-muted-foreground">
                {place.description}
              </p>

              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {place.details}
              </p>
            </div>

            {/* Highlights */}
            <Card>
              <CardHeader>
                <CardTitle>যা যা দেখতে ও করতে পারেন</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                  {place.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 rounded-lg border p-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>

                      <span className="text-sm font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Travel */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-primary" />
                  যাতায়াত
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="leading-8 text-muted-foreground">
                  {place.travel}
                </p>
              </CardContent>
            </Card>

            {/* Travel tips */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>ভ্রমণ টিপস</CardTitle>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>• পরিবেশ পরিষ্কার-পরিচ্ছন্ন রাখুন।</li>
                  <li>• স্থানীয় মানুষ ও সংস্কৃতির প্রতি সম্মান দেখান।</li>
                  <li>• সীমান্তবর্তী এলাকায় নিরাপত্তা নির্দেশনা মেনে চলুন।</li>
                  <li>• বর্ষাকালে নদী ও পাহাড়ি এলাকায় সতর্ক থাকুন।</li>
                  <li>• ভ্রমণের আগে স্থানীয় রাস্তা ও আবহাওয়ার অবস্থা জেনে নিন।</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <Card className="lg:sticky lg:top-24">
              <CardHeader>
                <CardTitle>স্থানটির তথ্য</CardTitle>
              </CardHeader>

              <CardContent className="space-y-5">
                <div className="flex gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      অবস্থান
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      {place.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Mountain className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      ধরন
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      {place.category}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      ভ্রমণের সময়
                    </p>
                    <p className="mt-1 text-sm font-medium">
                      দিনের আলোতে ভ্রমণ সুবিধাজনক
                    </p>
                  </div>
                </div>

                <Button asChild className="w-full">
                  <a
                    href={mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 h-4 w-4" />
                    Google Maps এ দেখুন
                  </a>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-7 flex items-end justify-between">
            <div>
              <p className="text-sm font-medium text-primary">
                আরও ঘুরুন
              </p>
              <h2 className="mt-1 text-2xl font-bold">
                কাছাকাছি আরও দর্শনীয় স্থান
              </h2>
            </div>

            <Button variant="ghost" asChild>
              <Link href="/places">
                সব দেখুন
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {otherPlaces.map((item) => (
              <Link
                key={item.id}
                href={`/places/${item.id}`}
                className="group"
              >
                <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      unoptimized
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <CardContent className="p-5">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.location}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
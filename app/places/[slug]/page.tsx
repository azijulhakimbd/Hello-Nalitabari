import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Car,
  Clock,
  MapPin,
  Mountain,
  Navigation,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RouteIcon } from "@/components/data/route-icon";
import { getRouteData } from "@/lib/route-data";



type PlaceDetailRecord = {
  id: string;
  name: string;
  englishName: string;
  location: string;
  category: string;
  icon: string;
  image: string;
  description: string;
  details: string;
  highlights: string[];
  travel: string;
  mapQuery: string;
  mapsUrl?: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const places = await getRouteData<PlaceDetailRecord>("place-details");
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

  const places = await getRouteData<PlaceDetailRecord>("place-details");
  const place = places.find((item) => item.id === slug);

  if (!place) {
    notFound();
  }

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
                  <RouteIcon name={place.icon} className="h-4 w-4" />
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
                        <RouteIcon name={place.icon} className="h-4 w-4 text-primary" />
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
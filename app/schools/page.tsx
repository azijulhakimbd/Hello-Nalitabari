"use client";

import * as React from "react";
import Image from "next/image";
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

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

type SchoolType =
  | "Secondary School"
  | "Primary School"
  | "Madrasa"
  | "College";

interface SchoolData {
  id: number;
  name: string;
  type: SchoolType;
  address: string;
  phone: string;
  students: string;
  established: string;
  image: string;
  eiin?: string;
  mapUrl: string;
}

const schools: SchoolData[] = [
  {
    id: 1,
    name: "তারাগঞ্জ সরকারি পাইলট উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "তারাগঞ্জ, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1941",
    eiin: "113773",
    image: "https://i.postimg.cc/J4KphBF6/তারাগঞ্জ_সরকারি_পাইলট_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Taragonj+Govt+Pilot+High+School+Nalitabari",
  },
  {
    id: 2,
    name: "তারাগঞ্জ পাইলট বালিকা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1959",
    eiin: "113772",
    image: "https://i.postimg.cc/m2VmrFnd/তারাগঞ্জ_পাইলট_বালিকা_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Taragonj+Pilot+Girls+High+School+Nalitabari",
  },
  {
    id: 3,
    name: "হিরণময়ী উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "1919",
    eiin: "113774",
    image: "https://i.postimg.cc/yYnLNSGt/হিরণময়ী_উচ্চ_বিদ্যালয়.png",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Hiranmoyee+High+School+Nalitabari",
  },
  {
    id: 4,
    name: "বারুয়াজানি হাসান উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "বারুয়াজানি, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113776",
    image: "/images/schools/baruajani-hassan.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Baruajani+Hassan+High+School+Nalitabari",
  },
  {
    id: 5,
    name: "আন্ধারুপাড়া উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "আন্ধারুপাড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113777",
    image: "/images/schools/andharupara.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Andharupara+High+School+Nalitabari",
  },
  {
    id: 6,
    name: "ঘাইলারা শামসুল হক স্মৃতি উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "ঘাইলারা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113778",
    image: "/images/schools/ghailara.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ghailara+Shamsul+Haq+Smrity+High+School",
  },
  {
    id: 7,
    name: "মধ্য নালিতাবাড়ী বালিকা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "মধ্য নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113779",
    image: "/images/schools/madhya-nalitabari-girls.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Madhya+Nalitabari+Girls+High+School",
  },
  {
    id: 8,
    name: "সানাসিভিটা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "সানাসিভিটা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113780",
    image: "/images/schools/sanasivita.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Sanasivita+High+School+Nalitabari",
  },
  {
    id: 9,
    name: "নয়াবিল উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নয়াবিল, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113781",
    image: "/images/schools/nayabil.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nayabil+High+School+Nalitabari",
  },
  {
    id: 10,
    name: "নালজুরা ইনতাজ আলী উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালজুরা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113782",
    image: "/images/schools/naljura.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Najura+Intaz+Ali+High+School+Nalitabari",
  },
  {
    id: 11,
    name: "শহীদ সামাদ বালিকা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113783",
    image: "/images/schools/shaheed-samad-girls.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Shaheed+Samad+Girls+High+School+Nalitabari",
  },
  {
    id: 12,
    name: "পলাশীকুড়া জনতা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "পলাশীকুড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113784",
    image: "/images/schools/palashikura-janata.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Palashikura+Janata+High+School+Nalitabari",
  },
  {
    id: 13,
    name: "আদর্শ উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113785",
    image: "/images/schools/adarsha.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Adarsha+High+School+Nalitabari",
  },
  {
    id: 14,
    name: "রামচন্দ্রকুড়া উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "রামচন্দ্রকুড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113786",
    image: "/images/schools/ramchandra-kura.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Ramchandra+Kura+High+School+Nalitabari",
  },
  {
    id: 15,
    name: "বনকুড়া উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "বনকুড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113788",
    image: "/images/schools/bonkura.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bonkura+High+School+Nalitabari",
  },
  {
    id: 16,
    name: "আবদুল হাকিম স্মৃতি মডেল উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113789",
    image: "/images/schools/abdul-hakim-smriti.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Abdul+Hakim+Smriti+Model+High+School+Nalitabari",
  },
  {
    id: 17,
    name: "ফকিরপাড়া উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "ফকিরপাড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113790",
    image: "/images/schools/fakir-para.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Fakir+Para+High+School+Nalitabari",
  },
  {
    id: 18,
    name: "পরাগাঁও আদর্শ উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "পরাগাঁও, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113791",
    image: "/images/schools/poragaon-adarsha.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Poragaon+Adarsha+High+School+Nalitabari",
  },
  {
    id: 19,
    name: "হোসাইন আলী বালিকা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113792",
    image: "/images/schools/hossain-ali-girls.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Hossain+Ali+Girls+High+School+Nalitabari",
  },
  {
    id: 20,
    name: "বাগবেড় উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "বাগবেড়, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113793",
    image: "/images/schools/bagber.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bagber+High+School+Nalitabari",
  },
  {
    id: 21,
    name: "মুক্তিযোদ্ধা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113794",
    image: "/images/schools/muktijuddha.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Muktijuddha+High+School+Nalitabari",
  },
  {
    id: 22,
    name: "নয়াবিল বালিকা উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নয়াবিল, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113795",
    image: "/images/schools/nayabil-girls.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nayabil+Girls+High+School+Nalitabari",
  },
  {
    id: 23,
    name: "খালাভাঙ্গা মকবুল হোসেন উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "খালাভাঙ্গা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113796",
    image: "/images/schools/khalabanga.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Khalabanga+Makbul+Hossain+High+School",
  },
  {
    id: 24,
    name: "উত্তর নাকশী উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "উত্তর নাকশী, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113797",
    image: "/images/schools/uttar-nakshi.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Uttar+Nakshi+High+School+Nalitabari",
  },
  {
    id: 25,
    name: "নিজপাড়া SESDP মডেল উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নিজপাড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "134795",
    image: "/images/schools/nizpara-sesdp.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Nizpara+SESDP+Model+High+School+Nalitabari",
  },
  {
    id: 26,
    name: "নালিতাবাড়ী পৌরসভা মডেল জুনিয়র উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "নালিতাবাড়ী পৌরসভা, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113802",
    image: "/images/schools/poura-sava-model.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Poura+Sava+Model+Junior+High+School+Nalitabari",
  },
  {
    id: 27,
    name: "ভাদিকুড়া জুনিয়র উচ্চ বিদ্যালয়",
    type: "Secondary School",
    address: "ভাদিকুড়া, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113803",
    image: "/images/schools/bhadikura.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bhadikura+Junior+High+School+Nalitabari",
  },
  {
    id: 28,
    name: "বাথুয়ারকান্দা আদর্শ জুনিয়র মাধ্যমিক বিদ্যালয়",
    type: "Secondary School",
    address: "বাথুয়ারকান্দা, নালিতাবাড়ী, শেরপুর",
    phone: "",
    students: "",
    established: "",
    eiin: "113804",
    image: "/images/schools/bathuar-kanda.jpg",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bathuar+Kanda+Adarsha+Junior+Secondary+School",
  },
];

const typeLabels: Record<SchoolType, string> = {
  "Secondary School": "মাধ্যমিক বিদ্যালয়",
  "Primary School": "প্রাথমিক বিদ্যালয়",
  Madrasa: "মাদ্রাসা",
  College: "কলেজ",
};

const typeColors: Record<SchoolType, string> = {
  "Secondary School": "bg-blue-500/90 hover:bg-blue-500",
  "Primary School": "bg-green-500/90 hover:bg-green-500",
  Madrasa: "bg-purple-500/90 hover:bg-purple-500",
  College: "bg-orange-500/90 hover:bg-orange-500",
};

export default function SchoolsPage() {
  const [search, setSearch] = React.useState("");
  const [type, setType] = React.useState<string>("all");

  const filteredSchools = React.useMemo(() => {
    const searchTerm = search.toLowerCase().trim();

    return schools.filter((school) => {
      const matchesSearch =
        !searchTerm ||
        school.name.toLowerCase().includes(searchTerm) ||
        school.address.toLowerCase().includes(searchTerm) ||
        typeLabels[school.type].toLowerCase().includes(searchTerm) ||
        school.eiin?.includes(searchTerm);

      const matchesType = type === "all" || school.type === type;

      return matchesSearch && matchesType;
    });
  }, [search, type]);

  const handleReset = () => {
    setSearch("");
    setType("all");
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-muted/30">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_35%)]" />

        <div className="container mx-auto px-4 py-14 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary" className="mb-5 gap-2 px-4 py-1.5">
              <GraduationCap className="h-4 w-4" />
              শিক্ষা প্রতিষ্ঠান
            </Badge>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              নালিতাবাড়ীর শিক্ষা প্রতিষ্ঠান
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg">
              নালিতাবাড়ী উপজেলার স্কুল, কলেজ ও মাদ্রাসার তথ্য সহজেই খুঁজে
              দেখুন। প্রতিষ্ঠান সম্পর্কে গুরুত্বপূর্ণ তথ্য, যোগাযোগ ও লোকেশন
              একসাথে পান।
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="container mx-auto -mt-8 px-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border bg-background/95 shadow-sm backdrop-blur">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <SchoolIcon className="h-6 w-6 text-primary" />
              </div>

              <div>
                <p className="text-2xl font-bold">{schools.length}</p>
                <p className="text-sm text-muted-foreground">
                  শিক্ষা প্রতিষ্ঠান
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border bg-background/95 shadow-sm backdrop-blur">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>

              <div>
                <p className="text-2xl font-bold">
                  {new Set(schools.map((school) => school.type)).size}
                </p>
                <p className="text-sm text-muted-foreground">
                  প্রতিষ্ঠানের ধরন
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border bg-background/95 shadow-sm backdrop-blur sm:col-span-2 lg:col-span-1">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>

              <div>
                <p className="text-2xl font-bold">৩,০০০+</p>
                <p className="text-sm text-muted-foreground">
                  শিক্ষার্থী
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="container mx-auto px-4 pt-10">
        <Card>
          <CardContent className="p-4 md:p-5">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="প্রতিষ্ঠানের নাম, ঠিকানা, EIIN বা ধরন খুঁজুন..."
                  className="h-11 pl-10"
                />
              </div>

              <div className="flex items-center gap-2">
                <Filter className="hidden h-4 w-4 text-muted-foreground sm:block" />

               <Select
  value={type}
  onValueChange={(value) => setType(value ?? "all")}
>
                  <SelectTrigger className="h-11 w-full sm:w-[220px]">
                    <SelectValue placeholder="প্রতিষ্ঠানের ধরন" />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="all">সব প্রতিষ্ঠান</SelectItem>

                    <SelectItem value="Secondary School">
                      মাধ্যমিক বিদ্যালয়
                    </SelectItem>

                    <SelectItem value="Primary School">
                      প্রাথমিক বিদ্যালয়
                    </SelectItem>

                    <SelectItem value="Madrasa">
                      মাদ্রাসা
                    </SelectItem>

                    <SelectItem value="College">
                      কলেজ
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Results Header */}
      <section className="container mx-auto px-4 pt-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold md:text-2xl">
              শিক্ষা প্রতিষ্ঠান
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              {filteredSchools.length} টি প্রতিষ্ঠান পাওয়া গেছে
            </p>
          </div>

          {(search || type !== "all") && (
            <Button variant="outline" size="sm" onClick={handleReset}>
              ফিল্টার রিসেট
            </Button>
          )}
        </div>
      </section>

      {/* School Cards */}
      <section className="container mx-auto px-4 py-6 pb-16">
        {filteredSchools.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSchools.map((school) => (
              <Card
                key={school.id}
                className="group overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={school.image}
                    alt={school.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  <Badge
                    className={`absolute left-3 top-3 border-0 text-white ${typeColors[school.type]}`}
                  >
                    {typeLabels[school.type]}
                  </Badge>

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="line-clamp-2 text-base font-semibold leading-6 text-white">
                      {school.name}
                    </p>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="line-clamp-2 text-lg">
                    {school.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Address */}
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">
                        ঠিকানা
                      </p>

                      <p className="mt-0.5 text-sm">
                        {school.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                    </div>

                    <div>
                      <p className="text-xs text-muted-foreground">
                        যোগাযোগ
                      </p>

                      {school.phone ? (
                        <a
                          href={`tel:${school.phone}`}
                          className="mt-0.5 block text-sm transition-colors hover:text-primary"
                        >
                          {school.phone}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          তথ্য পাওয়া যায়নি
                        </p>
                      )}
                    </div>
                  </div>

                  {/* School Information */}
                  <div className="grid grid-cols-2 gap-3 border-y py-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 shrink-0 text-muted-foreground" />

                      <div>
                        <p className="text-xs text-muted-foreground">
                          শিক্ষার্থী
                        </p>

                        <p className="text-sm font-medium">
                          {school.students || "তথ্য নেই"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 shrink-0 text-muted-foreground" />

                      <div>
                        <p className="text-xs text-muted-foreground">
                          প্রতিষ্ঠিত
                        </p>

                        <p className="text-sm font-medium">
                          {school.established || "তথ্য নেই"}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* EIIN */}
                  {school.eiin && (
                    <div className="rounded-lg bg-muted/60 px-3 py-2">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-xs text-muted-foreground">
                          EIIN
                        </span>

                        <span className="text-sm font-semibold">
                          {school.eiin}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="grid grid-cols-[1fr_auto_auto] gap-2">
                    <Button asChild>
                      <a
                        href={school.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="mr-2 h-4 w-4" />
                        ম্যাপে দেখুন
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      disabled={!school.phone}
                      title="ফোন করুন"
                    >
                      <a
                        href={school.phone ? `tel:${school.phone}` : undefined}
                        aria-label="ফোন করুন"
                      >
                        <Phone className="h-4 w-4" />
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      title="বিস্তারিত"
                    >
                      <a href={`/schools/${school.id}`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-2xl border border-dashed p-10 text-center md:p-16">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <SchoolIcon className="h-7 w-7 text-muted-foreground" />
            </div>

            <h3 className="mt-5 text-lg font-semibold">
              কোনো প্রতিষ্ঠান পাওয়া যায়নি
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              আপনার সার্চ অথবা ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।
            </p>

            <Button
              variant="outline"
              className="mt-5"
              onClick={handleReset}
            >
              সব প্রতিষ্ঠান দেখুন
            </Button>
          </div>
        )}
      </section>
    </main>
  );
}
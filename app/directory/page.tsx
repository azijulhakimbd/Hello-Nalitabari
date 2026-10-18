
"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  BriefcaseBusiness,
  ChevronRight,
  Clock3,
  ExternalLink,
  Globe,
  GraduationCap,
  HeartPulse,
  Info,
  Landmark,
  MapPin,
  Phone,
  PhoneCall,
  Search,
  SearchX,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RouteIcon } from "@/components/data/route-icon";
import { useRouteData } from "@/components/data/use-route-data";

/* =========================================================
   TYPES
========================================================= */

type DirectoryCategory = {
  title: string;
  description: string;
  icon: string;
  count: string;
  color: string;
  href: string;
  items: string[];
};

type EmergencyService = {
  title: string;
  number: string;
  icon: string;
  href?: string;
};

type PopularDirectory = {
  title: string;
  category: string;
  location: string;
  icon: string;
  href: string;
};

/* =========================================================
   ANIMATIONS
========================================================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

/* =========================================================
   QUICK LINKS
========================================================= */

const quickLinks = [
  {
    title: "সরকারি অফিস",
    description: "উপজেলা প্রশাসন ও সরকারি দপ্তর",
    icon: Landmark,
    href: "/directory?search=সরকারি অফিস",
  },
  {
    title: "শিক্ষাপ্রতিষ্ঠান",
    description: "স্কুল, কলেজ ও মাদ্রাসা",
    icon: GraduationCap,
    href: "/schools",
  },
  {
    title: "স্বাস্থ্যসেবা",
    description: "হাসপাতাল ও চিকিৎসাসেবা",
    icon: HeartPulse,
    href: "/doctors",
  },
  {
    title: "ব্যবসা ও প্রতিষ্ঠান",
    description: "স্থানীয় ব্যবসা ও সেবাদাতা",
    icon: BriefcaseBusiness,
    href: "/directory?search=ব্যবসা",
  },
];

/* =========================================================
   FALLBACK DATA
========================================================= */

const emergencyFallback: EmergencyService[] = [
  {
    title: "জাতীয় জরুরি সেবা",
    number: "999",
    icon: "shield-check",
  },
  {
    title: "ফায়ার সার্ভিস",
    number: "102",
    icon: "flame",
  },
  {
    title: "নারী ও শিশু সহায়তা",
    number: "109",
    icon: "heart-handshake",
  },
  {
    title: "শিশু সহায়তা",
    number: "1098",
    icon: "baby",
  },
];

const popularFallback: PopularDirectory[] = [
  {
    title: "নালিতাবাড়ী উপজেলা পরিষদ",
    category: "সরকারি অফিস",
    location: "নালিতাবাড়ী, শেরপুর",
    icon: "landmark",
    href: "/directory?search=উপজেলা পরিষদ",
  },
  {
    title: "নালিতাবাড়ী উপজেলা স্বাস্থ্য কমপ্লেক্স",
    category: "স্বাস্থ্যসেবা",
    location: "নালিতাবাড়ী, শেরপুর",
    icon: "hospital",
    href: "/directory?search=স্বাস্থ্য কমপ্লেক্স",
  },
];

/* =========================================================
   ADDITIONAL DIRECTORY CATEGORIES
========================================================= */

const additionalDirectoryCategories: DirectoryCategory[] = [
  {
    title: "ডাক্তার খুঁজুন",
    description:
      "নালিতাবাড়ী উপজেলার বিভিন্ন এলাকার ডাক্তারদের নাম, বিশেষত্ব, চেম্বার ও যোগাযোগের তথ্য খুঁজে নিন।",
    icon: "heart-pulse",
    count: "ডাক্তার",
    color: "bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400",
    href: "/doctors",
    items: ["ডাক্তারের তালিকা", "চিকিৎসকের বিশেষত্ব", "চেম্বার ও যোগাযোগ"],
  },
  {
    title: "হাসপাতাল ও ক্লিনিক",
    description:
      "হাসপাতাল, ক্লিনিক, ডায়াগনস্টিক সেন্টার এবং অন্যান্য স্বাস্থ্যসেবা প্রতিষ্ঠানের তথ্য দেখুন।",
    icon: "hospital",
    count: "প্রতিষ্ঠান",
    color: "bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400",
    href: "/hospitals",
    items: ["হাসপাতাল", "ক্লিনিক", "ডায়াগনস্টিক সেন্টার"],
  },
  {
    title: "জরুরি সেবা",
    description:
      "পুলিশ, ফায়ার সার্ভিস, অ্যাম্বুলেন্সসহ গুরুত্বপূর্ণ জরুরি নম্বরগুলো দ্রুত খুঁজে নিন।",
    icon: "shield-alert",
    count: "জরুরি",
    color: "bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-400",
    href: "/emergency",
    items: ["পুলিশ", "ফায়ার সার্ভিস", "অ্যাম্বুলেন্স ও জরুরি নম্বর"],
  },
  {
    title: "স্কুল ও শিক্ষা প্রতিষ্ঠান",
    description:
      "নালিতাবাড়ীর স্কুল, মাদ্রাসা ও অন্যান্য শিক্ষা প্রতিষ্ঠানের বিস্তারিত তথ্য খুঁজুন।",
    icon: "school",
    count: "শিক্ষা",
    color: "bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400",
    href: "/schools",
    items: ["প্রাথমিক বিদ্যালয়", "মাধ্যমিক বিদ্যালয়", "মাদ্রাসা"],
  },
  {
    title: "কলেজ",
    description:
      "উপজেলার বিভিন্ন কলেজের ঠিকানা, যোগাযোগ এবং অন্যান্য প্রয়োজনীয় তথ্য দেখুন।",
    icon: "graduation-cap",
    count: "শিক্ষা",
    color: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-400",
    href: "/colleges",
    items: ["কলেজের তালিকা", "ঠিকানা", "যোগাযোগের তথ্য"],
  },
  {
    title: "সরকারি সেবা",
    description:
      "সরকারি অফিস, কর্মকর্তাদের তথ্য, নাগরিক সেবা এবং গুরুত্বপূর্ণ সরকারি তথ্য এক জায়গায়।",
    icon: "landmark",
    count: "সরকারি",
    color: "bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-400",
    href: "/government",
    items: ["সরকারি অফিস", "কর্মকর্তাদের তথ্য", "নাগরিক সেবা"],
  },
  {
    title: "স্থানীয় ব্যবসা",
    description:
      "দোকান, রেস্টুরেন্ট, ফার্মেসি, সার্ভিস সেন্টারসহ স্থানীয় ব্যবসা খুঁজে নিন।",
    icon: "store",
    count: "ব্যবসা",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400",
    href: "/businesses",
    items: ["দোকান ও মার্কেট", "রেস্টুরেন্ট", "ফার্মেসি ও সার্ভিস সেন্টার"],
  },
  {
    title: "দর্শনীয় স্থান",
    description:
      "নালিতাবাড়ী উপজেলার দর্শনীয় স্থান, ঐতিহাসিক স্থান এবং ভ্রমণযোগ্য জায়গাগুলো আবিষ্কার করুন।",
    icon: "map-pin",
    count: "ভ্রমণ",
    color: "bg-teal-100 text-teal-700 dark:bg-teal-950/40 dark:text-teal-400",
    href: "/places",
    items: ["দর্শনীয় স্থান", "ঐতিহাসিক স্থান", "ভ্রমণ নির্দেশনা"],
  },
  {
    title: "স্থানীয় খবর",
    description:
      "নালিতাবাড়ী ও আশেপাশের এলাকার সর্বশেষ খবর এবং গুরুত্বপূর্ণ আপডেট দেখুন।",
    icon: "newspaper",
    count: "সংবাদ",
    color: "bg-sky-100 text-sky-700 dark:bg-sky-950/40 dark:text-sky-400",
    href: "/news",
    items: ["সর্বশেষ খবর", "স্থানীয় সংবাদ", "গুরুত্বপূর্ণ আপডেট"],
  },
  {
    title: "নোটিশ ও ঘোষণা",
    description:
      "সরকারি নোটিশ, স্থানীয় ঘোষণা, বিজ্ঞপ্তি এবং গুরুত্বপূর্ণ আপডেট এক জায়গায় পান।",
    icon: "megaphone",
    count: "নোটিশ",
    color: "bg-purple-100 text-purple-700 dark:bg-purple-950/40 dark:text-purple-400",
    href: "/notices",
    items: ["সরকারি নোটিশ", "স্থানীয় ঘোষণা", "গুরুত্বপূর্ণ বিজ্ঞপ্তি"],
  },
  {
    title: "যোগাযোগ তথ্য",
    description:
      "প্রয়োজনীয় ব্যক্তি, প্রতিষ্ঠান ও সেবার যোগাযোগের তথ্য সহজেই খুঁজে নিন।",
    icon: "phone-call",
    count: "যোগাযোগ",
    color: "bg-cyan-100 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-400",
    href: "/contact",
    items: ["প্রয়োজনীয় ফোন নম্বর", "প্রতিষ্ঠানের যোগাযোগ", "সহায়তা"],
  },
  {
    title: "স্থানীয় ইভেন্ট",
    description:
      "নালিতাবাড়ীতে অনুষ্ঠিতব্য অনুষ্ঠান, মেলা, সভা ও অন্যান্য গুরুত্বপূর্ণ ইভেন্ট সম্পর্কে জানুন।",
    icon: "calendar-days",
    count: "ইভেন্ট",
    color: "bg-pink-100 text-pink-700 dark:bg-pink-950/40 dark:text-pink-400",
    href: "/events",
    items: ["স্থানীয় অনুষ্ঠান", "মেলা ও সভা", "আসন্ন ইভেন্ট"],
  },
  {
    title: "পরিবহন তথ্য",
    description:
      "স্থানীয় পরিবহন, বাস, অটো, সিএনজি এবং গুরুত্বপূর্ণ যাতায়াতের তথ্য খুঁজে নিন।",
    icon: "bus",
    count: "পরিবহন",
    color: "bg-lime-100 text-lime-800 dark:bg-lime-950/40 dark:text-lime-400",
    href: "/transport",
    items: ["বাস ও রুট", "অটো ও সিএনজি", "যাতায়াতের তথ্য"],
  },
  {
    title: "ইউনিয়ন তথ্য",
    description:
      "নালিতাবাড়ী উপজেলার বিভিন্ন ইউনিয়ন, ওয়ার্ড এবং স্থানীয় প্রশাসনের তথ্য দেখুন।",
    icon: "building-2",
    count: "প্রশাসন",
    color: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400",
    href: "/unions",
    items: ["ইউনিয়ন পরিষদ", "ওয়ার্ডের তথ্য", "স্থানীয় প্রশাসন"],
  },
  {
    title: "কমিউনিটি তথ্য",
    description:
      "স্থানীয় মানুষদের সহযোগিতায় গুরুত্বপূর্ণ প্রতিষ্ঠান ও সেবার তথ্য যুক্ত ও আপডেট করুন।",
    icon: "users",
    count: "কমিউনিটি",
    color: "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950/40 dark:text-fuchsia-400",
    href: "/community",
    items: ["স্থানীয় উদ্যোগ", "কমিউনিটি তথ্য", "তথ্য হালনাগাদ"],
  },
  {
    title: "স্বাস্থ্য সচেতনতা",
    description:
      "স্বাস্থ্য, পরিচর্যা, রোগ প্রতিরোধ ও জরুরি স্বাস্থ্য বিষয়ক গুরুত্বপূর্ণ তথ্য পড়ুন।",
    icon: "activity",
    count: "স্বাস্থ্য",
    color: "bg-green-100 text-green-700 dark:bg-green-950/40 dark:text-green-400",
    href: "/health",
    items: ["স্বাস্থ্য পরামর্শ", "রোগ প্রতিরোধ", "স্বাস্থ্য সচেতনতা"],
  },
];

/* =========================================================
   HELPERS
========================================================= */

function mergeCategories(
  mongoCategories: DirectoryCategory[],
  fallbackCategories: DirectoryCategory[],
): DirectoryCategory[] {
  const merged = new Map<string, DirectoryCategory>();

  // MongoDB data takes priority.
  for (const category of mongoCategories) {
    if (category?.href) {
      merged.set(category.href, category);
    }
  }

  // Add only missing categories.
  for (const category of fallbackCategories) {
    if (category?.href && !merged.has(category.href)) {
      merged.set(category.href, category);
    }
  }

  return Array.from(merged.values());
}

/* =========================================================
   PAGE
========================================================= */

export default function DirectoryPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const shouldReduceMotion = useReducedMotion();

  const { data: directoryData = [] } =
    useRouteData<DirectoryCategory>("directory-categories");

  const { data: emergencyServices = [] } =
    useRouteData<EmergencyService>("directory-emergency-services");

  const { data: popularDirectory = [] } =
    useRouteData<PopularDirectory>("directory-popular");

  const urlSearch = searchParams.get("search") ?? "";
  const [search, setSearch] = React.useState(urlSearch);

  React.useEffect(() => {
    setSearch(urlSearch);
  }, [urlSearch]);

  // Keep the URL synchronized with the search input.
  React.useEffect(() => {
    const normalizedSearch = search.trim();

    if (normalizedSearch === urlSearch) return;

    const timeout = window.setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (normalizedSearch) {
        params.set("search", normalizedSearch);
      } else {
        params.delete("search");
      }

      const queryString = params.toString();
      const nextUrl = queryString ? `${pathname}?${queryString}` : pathname;

      router.replace(nextUrl, { scroll: false });
    }, 250);

    return () => window.clearTimeout(timeout);
  }, [search, urlSearch, pathname, router, searchParams]);

  const categories = React.useMemo(
    () =>
      mergeCategories(
        Array.isArray(directoryData) ? directoryData : [],
        additionalDirectoryCategories,
      ),
    [directoryData],
  );

  const emergencyList =
    Array.isArray(emergencyServices) && emergencyServices.length > 0
      ? emergencyServices
      : emergencyFallback;

  const popularList =
    Array.isArray(popularDirectory) && popularDirectory.length > 0
      ? popularDirectory
      : popularFallback;

  const filteredCategories = React.useMemo(() => {
    const query = search.trim().toLocaleLowerCase();

    if (!query) return categories;

    return categories.filter((item) =>
      [
        item.title,
        item.description,
        item.count,
        ...(Array.isArray(item.items) ? item.items : []),
      ]
        .join(" ")
        .toLocaleLowerCase()
        .includes(query),
    );
  }, [categories, search]);

  const filteredPopular = React.useMemo(() => {
    const query = search.trim().toLocaleLowerCase();

    if (!query) return popularList;

    return popularList.filter((item) =>
      [item.title, item.category, item.location]
        .join(" ")
        .toLocaleLowerCase()
        .includes(query),
    );
  }, [popularList, search]);

  const stats = [
    {
      label: "তথ্য বিভাগ",
      value: String(categories.length).padStart(2, "0"),
      icon: Building2,
    },
    {
      label: "জরুরি সেবা",
      value: String(emergencyList.length).padStart(2, "0"),
      icon: ShieldCheck,
    },
    {
      label: "গুরুত্বপূর্ণ প্রতিষ্ঠান",
      value: String(popularList.length).padStart(2, "0"),
      icon: Landmark,
    },
    {
      label: "তথ্য ও যোগাযোগ",
      value: String(
        categories.reduce(
          (total, item) => total + (item.items?.length ?? 0),
          0,
        ),
      ).padStart(2, "0"),
      icon: Users,
    },
  ];

  const fadeIn = shouldReduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.12 },
        variants: itemVariants,
      };

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* HERO + SEARCH */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 20%, #86efac 0, transparent 30%), radial-gradient(circle at 85% 80%, #34d399 0, transparent 28%)",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full border border-white/10"
        />

        <div
          aria-hidden="true"
          className="absolute -right-12 -top-12 -z-10 h-72 w-72 rounded-full border border-white/10"
        />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.65 }}
          className="container mx-auto px-4 pb-24 pt-16 md:pb-32 md:pt-24"
        >
          <div className="mx-auto max-w-4xl text-center">
            <Badge className="mb-6 border border-white/20 bg-white/10 px-4 py-2 text-white shadow-lg backdrop-blur hover:bg-white/10">
              <Sparkles className="mr-2 h-4 w-4" />
              নালিতাবাড়ী তথ্য বাতায়ন
            </Badge>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl">
              নালিতাবাড়ী{" "}
              <span className="bg-gradient-to-r from-lime-200 to-emerald-200 bg-clip-text text-transparent">
                ডিরেক্টরি
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-green-50/90 md:text-lg">
              সরকারি অফিস, শিক্ষাপ্রতিষ্ঠান, হাসপাতাল, ব্যাংক, জরুরি সেবা
              এবং এলাকার গুরুত্বপূর্ণ যোগাযোগের তথ্য খুঁজুন একটি নির্ভরযোগ্য
              ডিজিটাল প্ল্যাটফর্মে।
            </p>

            <div className="mx-auto mt-10 max-w-2xl">
              <div className="group relative rounded-2xl bg-white p-2 shadow-2xl shadow-green-950/20 transition-shadow focus-within:ring-4 focus-within:ring-white/20">
                <div className="flex items-center gap-2">
                  <Search className="ml-3 h-5 w-5 shrink-0 text-green-700" />

                  <Input
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="প্রতিষ্ঠান, সেবা বা বিভাগের নাম লিখুন..."
                    aria-label="ডিরেক্টরি অনুসন্ধান"
                    className="h-12 border-0 bg-transparent text-base text-gray-900 shadow-none placeholder:text-gray-400 focus-visible:ring-0"
                  />

                  <AnimatePresence initial={false}>
                    {search && (
                      <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.15 }}
                        type="button"
                        onClick={() => setSearch("")}
                        aria-label="অনুসন্ধান মুছে ফেলুন"
                        className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
                      >
                        <X className="h-4 w-4" />
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div
                aria-live="polite"
                className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-green-50/90"
              >
                {search ? (
                  <>
                    <Search className="h-4 w-4" />
                    <span>
                      “{search}” অনুসন্ধানে{" "}
                      <strong>
                        {filteredCategories.length + filteredPopular.length}
                      </strong>{" "}
                      টি বিভাগ ও প্রতিষ্ঠান পাওয়া গেছে
                    </span>
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    <span>দ্রুত খুঁজুন:</span>
                    {["শিক্ষা", "হাসপাতাল", "সরকারি অফিস"].map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setSearch(term)}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                      >
                        {term}
                      </button>
                    ))}
                  </>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-green-50/80">
              <span className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                তথ্যভিত্তিক ডিরেক্টরি
              </span>
              <span className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                সহজ অনলাইন অনুসন্ধান
              </span>
              <span className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                দ্রুত তথ্য খোঁজা
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* STATS */}
      <section className="relative z-10 -mt-12">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="container mx-auto px-4"
        >
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                  }}
                >
                  <Card className="h-full border-border/60 bg-card/95 shadow-lg shadow-green-950/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardContent className="flex items-center gap-3 p-4 sm:p-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-2xl font-bold tracking-tight text-green-700 dark:text-green-400 sm:text-3xl">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                          {stat.label}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* QUICK LINKS */}
      {!search && (
        <section className="container mx-auto px-4 pb-4 pt-16">
          <motion.div {...fadeIn} className="mb-7">
            <Badge
              variant="outline"
              className="mb-3 border-green-200 text-green-700 dark:border-green-900 dark:text-green-400"
            >
              <Sparkles className="mr-1.5 h-3.5 w-3.5" />
              দ্রুত প্রবেশ
            </Badge>

            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              আপনার প্রয়োজনীয় সেবা
            </h2>

            <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-base">
              জনপ্রিয় সেবাগুলোতে সরাসরি প্রবেশ করুন।
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {quickLinks.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                >
                  <Link href={item.href} className="group block h-full">
                    <Card className="h-full border-border/60 transition-all duration-300 hover:border-green-300 hover:shadow-lg">
                      <CardContent className="flex items-start gap-4 p-5">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 transition-colors group-hover:bg-green-100 dark:bg-green-950/50 dark:text-green-400">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold">{item.title}</h3>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">
                            {item.description}
                          </p>
                          <span className="mt-3 inline-flex items-center text-sm font-medium text-green-700 dark:text-green-400">
                            দেখুন
                            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      )}

      {/* DIRECTORY CATEGORIES */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          {...fadeIn}
          className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <Badge
              variant="outline"
              className="mb-3 border-green-200 text-green-700 dark:border-green-900 dark:text-green-400"
            >
              <Building2 className="mr-1.5 h-3.5 w-3.5" />
              সেবা ও তথ্য
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {search ? "অনুসন্ধানের ফলাফল" : "বিভাগ অনুযায়ী তথ্য"}
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
              {search
                ? `“${search}” সম্পর্কিত বিভাগ ও প্রতিষ্ঠানের তথ্য দেখুন।`
                : "সরকারি-বেসরকারি প্রতিষ্ঠান, শিক্ষা, স্বাস্থ্য, যোগাযোগ এবং অন্যান্য গুরুত্বপূর্ণ তথ্য এক জায়গায়।"}
            </p>
          </div>

          <Badge variant="secondary" className="w-fit px-3 py-1.5">
            {filteredCategories.length} টি বিভাগ
          </Badge>
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredCategories.length === 0 ? (
            <motion.div
              key="empty"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mx-auto max-w-xl"
            >
              <Card className="border-dashed">
                <CardContent className="px-6 py-14 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
                    <SearchX className="h-8 w-8 text-muted-foreground" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">
                    কোনো বিভাগ পাওয়া যায়নি
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    বানান পরীক্ষা করুন অথবা অন্য কোনো শব্দ দিয়ে অনুসন্ধান করুন।
                  </p>

                  <Button
                    type="button"
                    onClick={() => setSearch("")}
                    className="mt-6 bg-green-700 text-white hover:bg-green-800"
                  >
                    <X className="mr-2 h-4 w-4" />
                    অনুসন্ধান মুছুন
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key={search || "all-categories"}
              variants={containerVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredCategories.map((item) => (
                <motion.div
                  key={item.href}
                  variants={shouldReduceMotion ? undefined : itemVariants}
                  whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                  className="h-full"
                >
                  <Link
                    href={item.href}
                    className="group block h-full rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-4"
                  >
                    <Card className="h-full overflow-hidden border-border/60 transition-all duration-300 group-hover:border-green-300 group-hover:shadow-xl">
                      <CardContent className="flex h-full flex-col p-0">
                        <div className="flex-1 p-5 sm:p-6">
                          <div className="flex items-start justify-between gap-3">
                            <div
                              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                                item.color ||
                                "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400"
                              }`}
                            >
                              <RouteIcon name={item.icon} className="h-7 w-7" />
                            </div>

                            <Badge
                              variant="secondary"
                              className="bg-green-50 text-green-700 dark:bg-green-950/60 dark:text-green-400"
                            >
                              {item.count}
                            </Badge>
                          </div>

                          <h3 className="mt-5 text-xl font-bold tracking-tight transition-colors group-hover:text-green-700 dark:group-hover:text-green-400">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-7 text-muted-foreground">
                            {item.description}
                          </p>

                          {item.items?.length > 0 && (
                            <ul className="mt-5 space-y-2.5">
                              {item.items.slice(0, 4).map((subItem) => (
                                <li
                                  key={subItem}
                                  className="flex items-start gap-2.5 text-sm text-foreground/80"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-green-600" />
                                  <span className="leading-5">{subItem}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        <div className="border-t bg-muted/30 px-5 py-4 transition-colors group-hover:bg-green-50/70 dark:group-hover:bg-green-950/20 sm:px-6">
                          <div className="flex items-center justify-between text-sm font-semibold text-green-700 dark:text-green-400">
                            <span>বিস্তারিত দেখুন</span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* EMERGENCY SERVICES */}
      <section className="border-y border-red-100/70 bg-red-50/60 py-16 dark:border-red-950/60 dark:bg-red-950/10">
        <div className="container mx-auto px-4">
          <motion.div {...fadeIn} className="mb-10 text-center">
            <Badge className="mb-4 border border-red-200 bg-red-100 px-3 py-1.5 text-red-700 hover:bg-red-100 dark:border-red-900 dark:bg-red-950/60 dark:text-red-400">
              <PhoneCall className="mr-1.5 h-3.5 w-3.5" />
              জরুরি যোগাযোগ
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              জরুরি প্রয়োজনে যোগাযোগ
            </h2>

            <p className="mx-auto mt-3 max-w-2xl leading-7 text-muted-foreground">
              প্রয়োজনের সময়ে গুরুত্বপূর্ণ সহায়তা নম্বরগুলো দ্রুত খুঁজে নিন।
              নম্বরে কল করার আগে সেবাটির প্রযোজ্যতা যাচাই করুন।
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView={shouldReduceMotion ? undefined : "visible"}
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {emergencyList.map((service) => (
              <motion.div
                key={`${service.title}-${service.number}`}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              >
                <Card className="h-full border-red-100 bg-background transition-shadow hover:shadow-lg dark:border-red-950">
                  <CardContent className="p-5 text-center sm:p-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400">
                      <RouteIcon name={service.icon} className="h-7 w-7" />
                    </div>

                    <h3 className="mt-4 font-semibold">{service.title}</h3>

                    <p className="mt-3 text-3xl font-extrabold tracking-tight text-red-600 dark:text-red-400">
                      {service.number}
                    </p>

                    <a
                      href={`tel:${service.number.replace(/[^\d+]/g, "")}`}
                      className="mt-5 inline-flex h-10 w-full items-center justify-center rounded-lg border border-red-200 px-4 text-sm font-semibold text-red-700 transition-colors hover:bg-red-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:border-red-900 dark:text-red-400 dark:hover:bg-red-950/50"
                      aria-label={`${service.title} নম্বরে কল করুন`}
                    >
                      <Phone className="mr-2 h-4 w-4" />
                      কল করুন
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-5 flex items-start justify-center gap-2 text-center text-xs leading-5 text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            জরুরি নম্বরগুলোর প্রাপ্যতা ও সেবার পরিধি পরিবর্তিত হতে পারে।
            প্রকাশের আগে সংশ্লিষ্ট সরকারি উৎস থেকে যাচাই করুন।
          </p>
        </div>
      </section>

      {/* POPULAR DIRECTORY */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          {...fadeIn}
          className="flex flex-col justify-between gap-4 md:flex-row md:items-end"
        >
          <div>
            <Badge
              variant="outline"
              className="mb-3 border-green-200 text-green-700 dark:border-green-900 dark:text-green-400"
            >
              <Landmark className="mr-1.5 h-3.5 w-3.5" />
              গুরুত্বপূর্ণ তথ্য
            </Badge>

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              {search ? "মিল পাওয়া প্রতিষ্ঠান" : "জনপ্রিয় প্রতিষ্ঠান"}
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
              {search
                ? "আপনার অনুসন্ধানের সঙ্গে মিলে যাওয়া প্রতিষ্ঠানগুলো দেখুন।"
                : "নালিতাবাড়ী এলাকার গুরুত্বপূর্ণ প্রতিষ্ঠানের তথ্য দ্রুত খুঁজে নিন।"}
            </p>
          </div>

          <Button
            asChild
            variant="outline"
            className="w-fit border-green-200 text-green-700 hover:bg-green-50 dark:border-green-900 dark:text-green-400 dark:hover:bg-green-950/40"
          >
            <Link href="/directory">
              সব বিভাগ দেখুন
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        {filteredPopular.length === 0 ? (
          <Card className="mt-8 border-dashed">
            <CardContent className="flex flex-col items-center px-6 py-10 text-center">
              <SearchX className="h-8 w-8 text-muted-foreground" />
              <p className="mt-3 font-semibold">কোনো প্রতিষ্ঠান পাওয়া যায়নি</p>
              <p className="mt-1 text-sm text-muted-foreground">
                অন্য শব্দ দিয়ে অনুসন্ধান করুন অথবা সব তথ্য দেখুন।
              </p>
            </CardContent>
          </Card>
        ) : (
          <motion.div
            key={`popular-${search}`}
            variants={containerVariants}
            initial={shouldReduceMotion ? false : "hidden"}
            animate="visible"
            className="mt-8 grid gap-4 md:grid-cols-2"
          >
            {filteredPopular.map((item) => (
              <motion.div
                key={`${item.title}-${item.href}`}
                variants={shouldReduceMotion ? undefined : itemVariants}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
              >
                <Link
                  href={item.href}
                  className="group block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-4"
                >
                  <Card className="h-full border-border/60 transition-all duration-300 group-hover:border-green-300 group-hover:shadow-lg">
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-400">
                        <RouteIcon name={item.icon} className="h-6 w-6" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <Badge
                          variant="secondary"
                          className="mb-2 bg-green-50 text-green-700 dark:bg-green-950/60 dark:text-green-400"
                        >
                          {item.category}
                        </Badge>

                        <h3 className="font-semibold leading-6 transition-colors group-hover:text-green-700 dark:group-hover:text-green-400">
                          {item.title}
                        </h3>

                        <p className="mt-1.5 flex items-start gap-1.5 text-sm leading-5 text-muted-foreground">
                          <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                          <span>{item.location}</span>
                        </p>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-green-700 transition-colors group-hover:bg-green-50 dark:text-green-400 dark:group-hover:bg-green-950/50">
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* SUBMIT INFORMATION CTA */}
      <section className="container mx-auto px-4 pb-16">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
        >
          <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 text-white shadow-xl shadow-green-900/10">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-24 right-28 h-52 w-52 rounded-full bg-white/5 blur-2xl"
            />

            <CardContent className="relative flex flex-col justify-between gap-8 p-7 sm:p-10 md:flex-row md:items-center md:p-12">
              <div className="max-w-2xl">
                <Badge className="mb-4 border border-white/20 bg-white/10 text-white hover:bg-white/10">
                  <Users className="mr-1.5 h-3.5 w-3.5" />
                  স্থানীয় তথ্য, সবার জন্য
                </Badge>

                <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  আপনার এলাকার তথ্য যুক্ত করুন
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-green-50/90 sm:text-base">
                  কোনো প্রতিষ্ঠান, সেবাকেন্দ্র, যোগাযোগ নম্বর বা গুরুত্বপূর্ণ
                  তথ্য অনুপস্থিত থাকলে আমাদের জানান। যাচাইয়ের পর তথ্য
                  ডিরেক্টরিতে যুক্ত করা যেতে পারে।
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
                <Button
                  asChild
                  size="lg"
                  className="bg-white font-semibold text-green-800 shadow-lg hover:bg-green-50"
                >
                  <Link href="/submit">
                    <Send className="mr-2 h-4 w-4" />
                    তথ্য জমা দিন
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/15 hover:text-white"
                >
                  <Link href="/contact">যোগাযোগ করুন</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}

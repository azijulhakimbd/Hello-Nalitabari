
"use client";

import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Building2,
  Bus,
  CalendarDays,
  GraduationCap,
  HeartPulse,
  Hospital,
  Landmark,
  MapPin,
  Megaphone,
  Newspaper,
  PhoneCall,
  School,
  ShieldAlert,
  Store,
  Users,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const features = [
  {
    title: "ডাক্তার খুঁজুন",
    description:
      "নালিতাবাড়ী উপজেলার বিভিন্ন এলাকার ডাক্তারদের নাম, বিশেষত্ব, চেম্বার ও যোগাযোগের তথ্য খুঁজে নিন।",
    icon: HeartPulse,
    href: "/doctors",
    category: "স্বাস্থ্যসেবা",
  },
  {
    title: "হাসপাতাল ও ক্লিনিক",
    description:
      "হাসপাতাল, ক্লিনিক, ডায়াগনস্টিক সেন্টার এবং অন্যান্য স্বাস্থ্যসেবা প্রতিষ্ঠানের তথ্য দেখুন।",
    icon: Hospital,
    href: "/hospitals",
    category: "স্বাস্থ্যসেবা",
  },
  {
    title: "জরুরি সেবা",
    description:
      "পুলিশ, ফায়ার সার্ভিস, অ্যাম্বুলেন্সসহ গুরুত্বপূর্ণ জরুরি নম্বরগুলো দ্রুত খুঁজে নিন।",
    icon: ShieldAlert,
    href: "/emergency",
    category: "জরুরি সেবা",
  },
  {
    title: "স্কুল ও শিক্ষা প্রতিষ্ঠান",
    description:
      "নালিতাবাড়ীর স্কুল, মাদ্রাসা ও অন্যান্য শিক্ষা প্রতিষ্ঠানের বিস্তারিত তথ্য খুঁজুন।",
    icon: School,
    href: "/schools",
    category: "শিক্ষা",
  },
  {
    title: "কলেজ",
    description:
      "উপজেলার বিভিন্ন কলেজের ঠিকানা, যোগাযোগ এবং অন্যান্য প্রয়োজনীয় তথ্য দেখুন।",
    icon: GraduationCap,
    href: "/colleges",
    category: "শিক্ষা",
  },
  {
    title: "সরকারি সেবা",
    description:
      "সরকারি অফিস, কর্মকর্তাদের তথ্য, নাগরিক সেবা এবং গুরুত্বপূর্ণ সরকারি তথ্য এক জায়গায়।",
    icon: Landmark,
    href: "/government",
    category: "সরকারি সেবা",
  },
  {
    title: "স্থানীয় ব্যবসা",
    description:
      "দোকান, রেস্টুরেন্ট, ফার্মেসি, সার্ভিস সেন্টারসহ স্থানীয় ব্যবসা খুঁজে নিন।",
    icon: Store,
    href: "/businesses",
    category: "ব্যবসা",
  },
  {
    title: "দর্শনীয় স্থান",
    description:
      "নালিতাবাড়ী উপজেলার দর্শনীয় স্থান, ঐতিহাসিক স্থান এবং ভ্রমণযোগ্য জায়গাগুলো আবিষ্কার করুন।",
    icon: MapPin,
    href: "/places",
    category: "স্থান ও ভ্রমণ",
  },
  {
    title: "স্থানীয় খবর",
    description:
      "নালিতাবাড়ী ও আশেপাশের এলাকার সর্বশেষ খবর এবং গুরুত্বপূর্ণ আপডেট দেখুন।",
    icon: Newspaper,
    href: "/news",
    category: "সংবাদ",
  },
  {
    title: "নোটিশ ও ঘোষণা",
    description:
      "সরকারি নোটিশ, স্থানীয় ঘোষণা, বিজ্ঞপ্তি এবং গুরুত্বপূর্ণ আপডেট এক জায়গায় পান।",
    icon: Megaphone,
    href: "/notices",
    category: "তথ্য",
  },
  {
    title: "যোগাযোগ তথ্য",
    description:
      "প্রয়োজনীয় ব্যক্তি, প্রতিষ্ঠান ও সেবার যোগাযোগের তথ্য সহজেই খুঁজে নিন।",
    icon: PhoneCall,
    href: "/contact",
    category: "যোগাযোগ",
  },
  {
    title: "স্থানীয় ইভেন্ট",
    description:
      "নালিতাবাড়ীতে অনুষ্ঠিতব্য অনুষ্ঠান, মেলা, সভা ও অন্যান্য গুরুত্বপূর্ণ ইভেন্ট সম্পর্কে জানুন।",
    icon: CalendarDays,
    href: "/events",
    category: "ইভেন্ট",
  },
  {
    title: "পরিবহন তথ্য",
    description:
      "স্থানীয় পরিবহন, বাস, অটো, সিএনজি এবং গুরুত্বপূর্ণ যাতায়াতের তথ্য খুঁজে নিন।",
    icon: Bus,
    href: "/transport",
    category: "পরিবহন",
  },
  {
    title: "ইউনিয়ন তথ্য",
    description:
      "নালিতাবাড়ী উপজেলার বিভিন্ন ইউনিয়ন, ওয়ার্ড এবং স্থানীয় প্রশাসনের তথ্য দেখুন।",
    icon: Building2,
    href: "/unions",
    category: "প্রশাসন",
  },
  {
    title: "কমিউনিটি তথ্য",
    description:
      "স্থানীয় মানুষদের সহযোগিতায় গুরুত্বপূর্ণ প্রতিষ্ঠান ও সেবার তথ্য যুক্ত ও আপডেট করুন।",
    icon: Users,
    href: "/community",
    category: "কমিউনিটি",
  },
  {
    title: "স্বাস্থ্য সচেতনতা",
    description:
      "স্বাস্থ্য, পরিচর্যা, রোগ প্রতিরোধ ও জরুরি স্বাস্থ্য বিষয়ক গুরুত্বপূর্ণ তথ্য পড়ুন।",
    icon: Activity,
    href: "/health",
    category: "স্বাস্থ্য",
  },
];

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default function FeaturesPage() {
  const shouldReduceMotion = useReducedMotion();

  const revealProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: {
          once: true,
          amount: 0.15,
        },
      };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Modern green background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_15%_10%,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(16,185,129,0.13),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.08),transparent_35%)]
          "
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(34 197 94) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(34 197 94) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Green glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      {/* Features section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-16 md:py-24">
          {/* Section header */}
          <motion.div
            variants={sectionVariants}
            {...revealProps}
            className="mb-12 text-center"
          >
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400"
            >
              আমাদের সুবিধাসমূহ
            </motion.p>

            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              আপনার প্রয়োজনীয় সবকিছু
            </h1>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
              নালিতাবাড়ীর দৈনন্দিন জীবনকে আরও সহজ করতে বিভিন্ন গুরুত্বপূর্ণ
              তথ্য ও সেবা একটি প্ল্যাটফর্মে সাজানো হয়েছে।
            </p>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            variants={gridVariants}
            {...revealProps}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.href}
                  variants={cardVariants}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -6,
                          transition: { duration: 0.2 },
                        }
                  }
                  whileTap={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 0.985 }
                  }
                  className="h-full"
                >
                  <Link
                    href={feature.href}
                    aria-label={`${feature.title} — বিস্তারিত দেখুন`}
                    className="
                      group relative flex h-full min-h-[250px]
                      flex-col overflow-hidden rounded-2xl
                      border border-emerald-500/10
                      bg-background/60 p-6
                      shadow-sm backdrop-blur-xl
                      transition-colors duration-300
                      hover:border-emerald-500/30
                      hover:bg-emerald-500/[0.03]
                      hover:shadow-xl
                      hover:shadow-emerald-500/10
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-emerald-500
                      focus-visible:ring-offset-2
                    "
                  >
                    {/* Card glow */}
                    <div
                      className="
                        pointer-events-none absolute -right-10 -top-10
                        size-28 rounded-full bg-emerald-500/10
                        blur-2xl transition-colors duration-500
                        group-hover:bg-green-500/20
                      "
                    />

                    <div className="relative flex h-full flex-col">
                      {/* Icon and arrow */}
                      <div className="mb-5 flex items-start justify-between">
                        <motion.div
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : { rotate: -5, scale: 1.06 }
                          }
                          transition={{ duration: 0.2 }}
                          className="
                            flex size-12 items-center justify-center
                            rounded-xl bg-gradient-to-br
                            from-green-500/15 via-emerald-500/10
                            to-teal-500/10 text-emerald-600
                            ring-1 ring-emerald-500/10
                            transition-colors duration-300
                            group-hover:from-green-600
                            group-hover:via-emerald-500
                            group-hover:to-teal-500
                            group-hover:text-white
                            group-hover:shadow-lg
                            group-hover:shadow-emerald-500/20
                          "
                        >
                          <Icon className="size-6" aria-hidden="true" />
                        </motion.div>

                        <motion.span
                          animate={
                            shouldReduceMotion ? undefined : { x: [0, 3, 0] }
                          }
                          transition={{
                            duration: 1.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.05,
                          }}
                          className="text-muted-foreground transition-colors group-hover:text-emerald-600"
                        >
                          <ArrowRight className="size-5" aria-hidden="true" />
                        </motion.span>
                      </div>

                      {/* Category */}
                      <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        {feature.category}
                      </span>

                      {/* Title */}
                      <h2 className="mt-2 text-lg font-semibold">
                        {feature.title}
                      </h2>

                      {/* Description */}
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
                        {feature.description}
                      </p>

                      {/* Link label */}
                      <div className="mt-5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        বিস্তারিত দেখুন
                        <span aria-hidden="true"> →</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative overflow-hidden border-t border-emerald-500/10">
        <div
          className="
            pointer-events-none absolute inset-0
            bg-gradient-to-br from-green-500/[0.08]
            via-background to-emerald-500/[0.06]
          "
        />

        <div className="relative container mx-auto px-4 py-16 md:py-20">
          <motion.div
            variants={sectionVariants}
            {...revealProps}
            className="
              mx-auto max-w-4xl rounded-3xl
              border border-emerald-500/15
              bg-background/60 p-8 text-center
              shadow-xl shadow-emerald-500/5
              backdrop-blur-xl md:p-12
            "
          >
            {/* CTA icon */}
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { scale: 1.08, rotate: 5 }
              }
              className="
                mx-auto flex size-14 items-center justify-center
                rounded-full bg-gradient-to-br
                from-green-500/15 to-emerald-500/10
                text-emerald-600 ring-1 ring-emerald-500/10
              "
            >
              <Users className="size-7" aria-hidden="true" />
            </motion.div>

            <h2 className="mt-6 text-2xl font-bold md:text-3xl">
              আপনার এলাকার তথ্য যোগ করুন
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted-foreground">
              আপনার পরিচিত কোনো ডাক্তার, প্রতিষ্ঠান, ব্যবসা, শিক্ষা প্রতিষ্ঠান
              অথবা গুরুত্বপূর্ণ তথ্য আমাদের জানাতে পারেন।
            </p>

            {/* CTA buttons */}
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Link
                  href="/submit"
                  className="
                    inline-flex items-center justify-center gap-2
                    rounded-lg bg-gradient-to-r
                    from-green-600 via-emerald-600 to-teal-600
                    px-5 py-3 text-sm font-medium text-white
                    shadow-lg shadow-emerald-500/20
                    transition-shadow hover:shadow-xl
                    hover:shadow-emerald-500/30
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-emerald-500
                    focus-visible:ring-offset-2
                  "
                >
                  তথ্য যোগ করুন
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={shouldReduceMotion ? undefined : { y: -2 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-lg border border-emerald-500/15
                    bg-background/60 px-5 py-3
                    text-sm font-medium backdrop-blur
                    transition-colors hover:border-emerald-500/30
                    hover:bg-emerald-500/5
                    focus-visible:outline-none
                    focus-visible:ring-2 focus-visible:ring-emerald-500
                    focus-visible:ring-offset-2
                  "
                >
                  যোগাযোগ করুন
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

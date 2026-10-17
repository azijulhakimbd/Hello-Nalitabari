
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Building2,
  GraduationCap,
  School,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "প্রাথমিক বিদ্যালয়",
    description: "নালিতাবাড়ীর প্রাথমিক শিক্ষা প্রতিষ্ঠান।",
    icon: School,
    href: "/schools",
  },
  {
    title: "মাধ্যমিক বিদ্যালয়",
    description: "মাধ্যমিক ও উচ্চ মাধ্যমিক বিদ্যালয়ের তথ্য।",
    icon: Building2,
    href: "/schools",
  },
  {
    title: "কলেজ",
    description: "কলেজ ও উচ্চশিক্ষা প্রতিষ্ঠানের তথ্য।",
    icon: GraduationCap,
    href: "/colleges",
  },
  {
    title: "মাদ্রাসা",
    description: "স্থানীয় মাদ্রাসা শিক্ষা প্রতিষ্ঠানের তথ্য।",
    icon: BookOpen,
    href: "/schools",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function EducationPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden border-b bg-gradient-to-br from-blue-50 via-background to-indigo-50 dark:from-blue-950/20 dark:via-background dark:to-indigo-950/20">
        {!shouldReduceMotion && (
          <>
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </>
        )}

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUpVariants}>
              <Badge className="mb-5 rounded-full bg-blue-100 px-4 py-2 text-blue-700 hover:bg-blue-100 dark:bg-blue-950 dark:text-blue-400">
                <GraduationCap className="mr-2 h-4 w-4" />
                শিক্ষা
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              নালিতাবাড়ীর
              <span className="mt-2 block text-blue-600">
                শিক্ষা প্রতিষ্ঠান
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground"
            >
              স্কুল, কলেজ, মাদ্রাসা ও অন্যান্য শিক্ষা প্রতিষ্ঠানের
              তথ্য সহজে খুঁজে নিন।
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Education Categories */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold sm:text-3xl">
            শিক্ষা প্রতিষ্ঠানের ধরন
          </h2>

          <p className="mt-2 text-muted-foreground">
            আপনার প্রয়োজনীয় প্রতিষ্ঠানের ধরন নির্বাচন করুন।
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -6, scale: 1.015 }
                }
                className="h-full"
              >
                <Link
                  href={category.href}
                  aria-label={`${category.title} দেখুন`}
                  className="group block h-full rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  <Card className="h-full border-border/70 transition-colors duration-300 group-hover:border-blue-300 group-hover:shadow-lg dark:group-hover:border-blue-800">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : { rotate: -5, scale: 1.08 }
                        }
                        transition={{ duration: 0.2 }}
                        className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400"
                      >
                        <Icon className="h-6 w-6" />
                      </motion.div>

                      <h3 className="mt-5 font-semibold">
                        {category.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {category.description}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400">
                        প্রতিষ্ঠান দেখুন
                        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
    </main>
  );
}

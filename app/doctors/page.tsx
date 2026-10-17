"use client"

import { useState } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import {
  Activity,
  Hospital,
  SearchX,
  ShieldCheck,
  Users,
} from "lucide-react"

import type { Doctor } from "@/types/doctor"
import { useRouteData } from "@/components/data/use-route-data"
import DoctorFilters from "@/components/doctors/doctor-filters"
import DoctorCard from "@/components/doctors/doctor-card"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: { duration: 0.2 },
  },
}

export default function DoctorsPage() {
  const { data: doctors, loading } = useRouteData<Doctor>("doctors")
  const [search, setSearch] = useState("")
  const [specialization, setSpecialization] = useState("all")
  const shouldReduceMotion = useReducedMotion()

  const handleSpecializationChange = (value: string | null) => {
    setSpecialization(value ?? "all")
  }

  const filteredDoctors = doctors.filter((doctor) => {
    const searchText = search.trim().toLowerCase()

    const matchesSearch =
      doctor.name.toLowerCase().includes(searchText) ||
      doctor.designation.toLowerCase().includes(searchText) ||
      doctor.specialization.toLowerCase().includes(searchText)

    const matchesSpecialization =
      specialization === "all" ||
      doctor.specialization === specialization

    return matchesSearch && matchesSpecialization
  })

  const motionProps = shouldReduceMotion
    ? {}
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.12 },
      }

  return (
    <main className="min-h-screen overflow-hidden bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border/60 bg-background">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.15),transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),transparent_26%)]" />

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_80%)]" />

        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 18, 0], y: [0, -14, 0], scale: [1, 1.08, 1] }
          }
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-16 top-10 -z-10 size-72 rounded-full bg-sky-500/12 blur-3xl"
        />

        <motion.div
          aria-hidden="true"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, -16, 0], y: [0, 18, 0], scale: [1, 1.1, 1] }
          }
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-20 -z-10 size-80 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="container mx-auto px-4 py-16 md:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              variants={fadeUpVariants}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.06, rotate: 3 }}
              className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary"
            >
              <Hospital className="size-7" />
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-3xl font-bold tracking-tight md:text-5xl"
            >
              নালিতাবাড়ীর ডাক্তারদের তথ্য
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="mt-4 text-muted-foreground md:text-lg"
            >
              উপজেলা স্বাস্থ্য কমপ্লেক্স, নালিতাবাড়ী, শেরপুর-এর
              চিকিৎসক ও স্বাস্থ্যসেবা সংক্রান্ত তথ্য
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="mt-6 flex flex-wrap justify-center gap-2 text-sm"
            >
              <span className="rounded-full bg-primary/10 px-4 py-2 text-primary transition-colors hover:bg-primary/15">
                ৫০ শয্যা উপজেলা স্বাস্থ্য কমপ্লেক্স
              </span>

              <span className="rounded-full bg-muted px-4 py-2 transition-colors hover:bg-muted/80">
                সরকারি তথ্যসূত্র
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <motion.section
        {...motionProps}
        variants={containerVariants}
        className="container mx-auto px-4 py-8"
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <motion.div
            variants={fadeUpVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
            className="rounded-2xl border bg-card p-5 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Users className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">মোট ডাক্তার</p>
                <p className="text-2xl font-bold tabular-nums">
                  {doctors.length}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
            className="rounded-2xl border bg-card p-5 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Activity className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  বিভিন্ন বিশেষজ্ঞতা
                </p>
                <p className="text-2xl font-bold tabular-nums">
                  {new Set(
                    doctors.map((doctor) => doctor.specialization)
                  ).size}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            whileHover={shouldReduceMotion ? undefined : { y: -5 }}
            className="rounded-2xl border bg-card p-5 transition-shadow hover:shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <ShieldCheck className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">তথ্যের উৎস</p>
                <p className="text-lg font-bold">
                  সরকারি স্বাস্থ্য পোর্টাল
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Doctors Directory */}
      <section className="container mx-auto px-4 pb-16">
        <motion.div
          {...motionProps}
          variants={fadeUpVariants}
          className="mb-8"
        >
          <DoctorFilters
            search={search}
            setSearch={setSearch}
            specialization={specialization}
            setSpecialization={handleSpecializationChange}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.p
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mb-4 text-sm text-muted-foreground"
            >
              তথ্য লোড হচ্ছে...
            </motion.p>
          ) : null}
        </AnimatePresence>

        <motion.div
          {...motionProps}
          variants={fadeUpVariants}
          className="mb-5 flex items-center justify-between"
        >
          <div>
            <h2 className="text-xl font-bold">চিকিৎসক তালিকা</h2>
            <p className="text-sm text-muted-foreground" aria-live="polite">
              {filteredDoctors.length} জন চিকিৎসক পাওয়া গেছে
            </p>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {filteredDoctors.length > 0 ? (
            <motion.div
              key={`${specialization}-${search}`}
              variants={containerVariants}
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              exit={shouldReduceMotion ? undefined : "hidden"}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredDoctors.map((doctor) => (
                <motion.div
                  key={doctor.id}
                  variants={cardVariants}
                  layout={!shouldReduceMotion}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { y: -4, transition: { duration: 0.2 } }
                  }
                >
                  <DoctorCard doctor={doctor} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed px-4 text-center"
            >
              <motion.div
                animate={
                  shouldReduceMotion ? undefined : { y: [0, -5, 0] }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <SearchX className="mb-4 size-10 text-muted-foreground" />
              </motion.div>

              <h3 className="font-semibold">
                কোনো ডাক্তার পাওয়া যায়নি
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">
                অন্য নাম বা বিভাগ দিয়ে চেষ্টা করুন।
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Source */}
      <motion.section
        {...motionProps}
        variants={fadeUpVariants}
        className="border-t bg-muted/30"
      >
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-xs text-muted-foreground">
            তথ্যসূত্র: উপজেলা স্বাস্থ্য কমপ্লেক্স, নালিতাবাড়ী,
            শেরপুর-এর সরকারি ওয়েব পোর্টাল।
          </p>
        </div>
      </motion.section>
    </main>
  )
}
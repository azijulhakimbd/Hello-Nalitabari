"use client"

import { useMemo, useState } from "react"
import {
  Activity,
  Hospital,
  SearchX,
  ShieldCheck,
  Users,
} from "lucide-react"
import { doctors } from "@/components/doctors/doctor-data"
import DoctorFilters from "@/components/doctors/doctor-filters"
import DoctorCard from "@/components/doctors/doctor-card"




export default function DoctorsPage() {
  const [search, setSearch] = useState("")
  const [specialization, setSpecialization] = useState("all")

  const handleSpecializationChange = (value: string | null) => {
    setSpecialization(value ?? "all")
  }

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const searchText = search.toLowerCase()

      const matchesSearch =
        doctor.name.toLowerCase().includes(searchText) ||
        doctor.designation.toLowerCase().includes(searchText) ||
        doctor.specialization.toLowerCase().includes(searchText)

      const matchesSpecialization =
        specialization === "all" ||
        doctor.specialization === specialization

      return matchesSearch && matchesSpecialization
    })
  }, [search, specialization])

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-border/60 bg-background">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.15),transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.12),transparent_26%),linear-gradient(to_br,_background,_background)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:42px_42px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_80%)]" />
        <div className="absolute -left-16 top-10 -z-10 h-72 w-72 rounded-full bg-sky-500/12 blur-3xl" />
        <div className="absolute right-0 top-20 -z-10 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Hospital className="size-7" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              নালিতাবাড়ীর ডাক্তারদের তথ্য
            </h1>

            <p className="mt-4 text-muted-foreground md:text-lg">
              উপজেলা স্বাস্থ্য কমপ্লেক্স, নালিতাবাড়ী, শেরপুর-এর
              চিকিৎসক ও স্বাস্থ্যসেবা সংক্রান্ত তথ্য
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm">
              <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">
                ৫০ শয্যা উপজেলা স্বাস্থ্য কমপ্লেক্স
              </span>

              <span className="rounded-full bg-muted px-4 py-2">
                সরকারি তথ্যসূত্র
              </span>
            </div>
          </div>
        </div>
      

      {/* Stats */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Users className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  মোট ডাক্তার
                </p>
                <p className="text-2xl font-bold">
                  {doctors.length}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <Activity className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  বিভিন্ন বিশেষজ্ঞতা
                </p>

                <p className="text-2xl font-bold">
                  {new Set(
                    doctors.map((doctor) => doctor.specialization)
                  ).size}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <ShieldCheck className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  তথ্যের উৎস
                </p>

                <p className="text-lg font-bold">
                  সরকারি স্বাস্থ্য পোর্টাল
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="container mx-auto px-4 pb-16">
        <div className="mb-8">
          <DoctorFilters
            search={search}
            setSearch={setSearch}
            specialization={specialization}
            setSpecialization={handleSpecializationChange}
          />
        </div>

        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">
              চিকিৎসক তালিকা
            </h2>

            <p className="text-sm text-muted-foreground">
              {filteredDoctors.length} জন চিকিৎসক পাওয়া গেছে
            </p>
          </div>
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDoctors.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                doctor={doctor}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-2xl border border-dashed">
            <SearchX className="mb-4 size-10 text-muted-foreground" />

            <h3 className="font-semibold">
              কোনো ডাক্তার পাওয়া যায়নি
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              অন্য নাম বা বিভাগ দিয়ে চেষ্টা করুন।
            </p>
          </div>
        )}
      </section>

      {/* Source */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-xs text-muted-foreground">
            তথ্যসূত্র: উপজেলা স্বাস্থ্য কমপ্লেক্স, নালিতাবাড়ী,
            শেরপুর-এর সরকারি ওয়েব পোর্টাল।
          </p>
        </div>
      </section>
      </section>
    </main>
  )
}
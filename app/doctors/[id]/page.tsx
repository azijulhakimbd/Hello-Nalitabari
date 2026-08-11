
import Image from "next/image"
import { notFound } from "next/navigation"
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { doctors } from "@/components/doctors/doctor-data"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function DoctorDetailsPage({ params }: Props) {
  const { id } = await params

  const doctor = doctors.find(
    (item) => item.id === Number(id)
  )

  if (!doctor) {
    notFound()
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Smart Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="
            absolute -left-32 -top-32
            size-96 rounded-full
            bg-primary/10
            blur-3xl
          "
        />

        <div
          className="
            absolute -right-32 top-1/3
            size-96 rounded-full
            bg-blue-500/5
            blur-3xl
          "
        />

        <div
          className="
            absolute inset-0 opacity-[0.025]
            [background-image:linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)]
            [background-size:28px_28px]
          "
        />
      </div>

      <div className="relative container mx-auto max-w-5xl px-4 py-8 md:py-12">
        {/* Back */}
        <Button
          variant="ghost"
          asChild
          className="
            mb-6
            rounded-xl
            text-muted-foreground
            hover:bg-muted
            hover:text-foreground
          "
        >
          <Link href="/doctors">
            <ArrowLeft className="size-4" />
            ডাক্তার তালিকায় ফিরে যান
          </Link>
        </Button>

        {/* Main Profile Card */}
        <Card
          className="
            relative overflow-hidden
            border-border/60
            bg-card/80
            shadow-xl shadow-primary/5
            backdrop-blur-xl
          "
        >
          <CardContent className="p-0">
            {/* Profile Header */}
            <section
              className="
                relative overflow-hidden
                border-b border-border/50
                bg-gradient-to-br
                from-primary/15
                via-primary/5
                to-background
                px-6 py-8
                md:px-10 md:py-12
              "
            >
              {/* Header glow */}
              <div
                className="
                  pointer-events-none
                  absolute -right-20 -top-32
                  size-80 rounded-full
                  bg-primary/10
                  blur-3xl
                "
              />

              <div className="relative flex flex-col items-center gap-8 md:flex-row md:items-center">
                {/* Doctor Photo */}
                <div className="relative shrink-0">
                  {/* Glow */}
                  <div
                    className="
                      absolute -inset-3
                      rounded-[2rem]
                      bg-primary/20
                      blur-xl
                    "
                  />

                  <div
                    className="
                      relative
                      size-44
                      overflow-hidden
                      rounded-[2rem]
                      border-4
                      border-background
                      bg-muted
                      shadow-2xl
                      md:size-52
                    "
                  >
                    <Image
                      src={doctor.photo}
                      alt={`${doctor.name} - ${doctor.designation}`}
                      fill
                      priority
                      sizes="(max-width: 768px) 176px, 208px"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Floating icon */}
                  <div
                    className="
                      absolute -bottom-3 -right-3
                      flex size-12 items-center justify-center
                      rounded-2xl
                      border-4 border-background
                      bg-primary
                      text-primary-foreground
                      shadow-lg
                    "
                  >
                    <Stethoscope className="size-5" />
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="min-w-0 flex-1 text-center md:text-left">
                  <Badge
                    variant="secondary"
                    className="
                      mb-4
                      border border-primary/10
                      bg-primary/10
                      text-primary
                      hover:bg-primary/15
                    "
                  >
                    {doctor.specialization}
                  </Badge>

                  <h1
                    className="
                      text-3xl font-bold tracking-tight
                      text-foreground
                      md:text-4xl lg:text-5xl
                    "
                  >
                    {doctor.name}
                  </h1>

                  <p
                    className="
                      mx-auto mt-3 max-w-2xl
                      text-base leading-relaxed
                      text-muted-foreground
                      md:mx-0 md:text-lg
                    "
                  >
                    {doctor.designation}
                  </p>

                  {/* Quick status */}
                  <div
                    className="
                      mt-5 inline-flex
                      items-center gap-2
                      rounded-full
                      border border-border/60
                      bg-background/70
                      px-4 py-2
                      text-sm text-muted-foreground
                      shadow-sm
                      backdrop-blur-md
                    "
                  >
                    <span className="relative flex size-2.5">
                      <span
                        className="
                          absolute inline-flex size-full
                          animate-ping rounded-full
                          bg-emerald-500 opacity-75
                        "
                      />
                      <span
                        className="
                          relative inline-flex size-2.5
                          rounded-full bg-emerald-500
                        "
                      />
                    </span>

                    স্বাস্থ্যসেবা প্রদানকারী
                  </div>
                </div>
              </div>
            </section>

            {/* Information */}
            <section className="p-6 md:p-10">
              <div className="mb-6">
                <p className="text-sm font-medium text-primary">
                  যোগাযোগ ও তথ্য
                </p>

                <h2 className="mt-1 text-2xl font-bold tracking-tight">
                  ডাক্তার সম্পর্কে
                </h2>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Mobile */}
                <InfoCard
                  icon={<Phone className="size-5" />}
                  title="মোবাইল"
                  href={`tel:${doctor.mobile}`}
                  value={doctor.mobile}
                />

                {/* Email */}
                <InfoCard
                  icon={<Mail className="size-5" />}
                  title="ইমেইল"
                  href={`mailto:${doctor.email}`}
                  value={doctor.email}
                />

                {/* Room */}
                {doctor.room && (
                  <InfoCard
                    icon={<MapPin className="size-5" />}
                    title="কক্ষ নম্বর"
                    value={doctor.room}
                  />
                )}

                {/* Specialization */}
                <InfoCard
                  icon={<Stethoscope className="size-5" />}
                  title="বিশেষজ্ঞতা"
                  value={doctor.specialization}
                />
              </div>
            </section>

            {/* Actions */}
            <section
              className="
                border-t border-border/60
                bg-muted/20
                p-6
                md:px-10 md:py-7
              "
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="
                    flex-1 rounded-xl
                    shadow-lg shadow-primary/10
                    transition-all
                    hover:-translate-y-0.5
                    hover:shadow-xl hover:shadow-primary/20
                  "
                >
                  <a href={`tel:${doctor.mobile}`}>
                    <Phone className="size-5" />
                    এখনই কল করুন
                    <ArrowUpRight className="ml-auto size-4" />
                  </a>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="
                    flex-1 rounded-xl
                    bg-background
                    transition-all
                    hover:-translate-y-0.5
                    hover:border-primary/40
                    hover:bg-primary/5
                    hover:text-primary
                  "
                >
                  <a href={`mailto:${doctor.email}`}>
                    <Mail className="size-5" />
                    ইমেইল করুন
                    <ArrowUpRight className="ml-auto size-4" />
                  </a>
                </Button>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

/* --------------------------------
   Information Card
--------------------------------- */

function InfoCard({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode
  title: string
  value: string
  href?: string
}) {
  const content = (
    <div
      className="
        group/info
        flex items-center gap-4
        rounded-2xl
        border border-border/60
        bg-background/60
        p-4
        shadow-sm
        backdrop-blur-sm
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-primary/30
        hover:bg-primary/5
        hover:shadow-md
      "
    >
      <div
        className="
          flex size-11 shrink-0 items-center justify-center
          rounded-xl
          bg-primary/10
          text-primary
          transition-all duration-300
          group-hover/info:scale-105
          group-hover/info:bg-primary
          group-hover/info:text-primary-foreground
        "
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium text-muted-foreground">
          {title}
        </p>

        <p
          className="
            mt-1
            truncate
            text-sm font-semibold
            text-foreground
            md:text-base
          "
        >
          {value}
        </p>
      </div>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {content}
      </a>
    )
  }

  return content
}


"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
} from "lucide-react"

import { Doctor } from "./doctor-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type DoctorCardProps = {
  doctor: Doctor
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <Card
      className="
        group relative overflow-hidden
        border-border/60
        bg-card text-card-foreground
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:border-primary/30
        hover:shadow-xl hover:shadow-primary/5
      "
    >
      {/* Entire card clickable */}
      <Link
        href={`/doctors/${doctor.id}`}
        className="
          absolute inset-0 z-10
          rounded-[inherit]
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-primary
          focus-visible:ring-offset-2
        "
        aria-label={`${doctor.name} এর বিস্তারিত দেখুন`}
      />

      <CardContent className="relative p-0">
        {/* Doctor Photo */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
          <Image
            src={doctor.photo}
            alt={`${doctor.name} - ${doctor.designation}`}
            fill
            sizes="(max-width: 820px) 600vw, (max-width: 824px) 1220vw, 333vw"
            className="
              object-cover object-top
              transition-transform duration-500
              group-hover:scale-105
            "
          />

          {/* Gradient Overlay */}
          <div
            className="
              absolute inset-x-0 bottom-0
              bg-gradient-to-t
              from-black/85
              via-black/45
              to-transparent
              p-5 pt-20
            "
          >
            <Badge
              variant="secondary"
              className="
                mb-2
                border-border/30
                bg-background/90
                text-foreground
                shadow-sm
                backdrop-blur-md
              "
            >
              {doctor.specialization}
            </Badge>

            <h3 className="text-lg font-bold leading-tight text-white md:text-xl">
              {doctor.name}
            </h3>

            <p className="mt-1 line-clamp-2 text-sm text-white/80">
              {doctor.designation}
            </p>
          </div>

          {/* Doctor Icon */}
          <div
            className="
              absolute right-4 top-4 z-20
              flex size-10 items-center justify-center
              rounded-full
              border border-border/50
              bg-background/90
              text-primary
              shadow-md
              backdrop-blur-md
              transition-all duration-300
              group-hover:scale-110
            "
          >
            <Stethoscope className="size-5" />
          </div>
        </div>

        {/* Information */}
        <div className="relative space-y-3 bg-card p-5">
          {/* Mobile */}
          <div
            className="
              flex items-center gap-3
              rounded-lg
              p-1.5
              transition-colors
              hover:bg-muted/60
            "
          >
            <div
              className="
                flex size-9 shrink-0 items-center justify-center
                rounded-lg
                bg-primary/10
                text-primary
              "
            >
              <Phone className="size-4" />
            </div>

            <a
              href={`tel:${doctor.mobile}`}
              onClick={(event) => event.stopPropagation()}
              className="
                relative z-20
                truncate
                text-sm font-medium
                text-foreground
                transition-colors
                hover:text-primary
              "
            >
              {doctor.mobile}
            </a>
          </div>

          {/* Email */}
          <div
            className="
              flex min-w-0 items-center gap-3
              rounded-lg
              p-1.5
              transition-colors
              hover:bg-muted/60
            "
          >
            <div
              className="
                flex size-9 shrink-0 items-center justify-center
                rounded-lg
                bg-primary/10
                text-primary
              "
            >
              <Mail className="size-4" />
            </div>

            <a
              href={`mailto:${doctor.email}`}
              onClick={(event) => event.stopPropagation()}
              className="
                relative z-20
                min-w-0 truncate
                text-sm
                text-foreground
                transition-colors
                hover:text-primary
              "
              title={doctor.email}
            >
              {doctor.email}
            </a>
          </div>

          {/* Room */}
          {doctor.room && (
            <div
              className="
                flex items-center gap-3
                rounded-lg
                p-1.5
                text-sm
                text-muted-foreground
                transition-colors
                hover:bg-muted/60
              "
            >
              <div
                className="
                  flex size-9 shrink-0 items-center justify-center
                  rounded-lg
                  bg-muted
                  text-muted-foreground
                "
              >
                <MapPin className="size-4" />
              </div>

              <span>কক্ষ নম্বর: {doctor.room}</span>
            </div>
          )}

          {/* Actions */}
          <div className="relative z-20 grid grid-cols-2 gap-2 border-t border-border/60 pt-4">
            {/* Call */}
            <Button
              asChild
              variant="outline"
              className="
                w-full
                border-border
                bg-background
                text-foreground
                transition-all
                hover:border-primary/40
                hover:bg-primary/5
                hover:text-primary
              "
            >
              <a
                href={`tel:${doctor.mobile}`}
                onClick={(event) => event.stopPropagation()}
              >
                <Phone className="size-4" />
                কল করুন
              </a>
            </Button>

            {/* Details */}
            <Button
              asChild
              className="
                w-full
                bg-primary
                text-primary-foreground
                shadow-sm
                transition-all
                hover:bg-primary/90
                hover:shadow-md
              "
            >
              <Link
                href={`/doctors/${doctor.id}`}
                onClick={(event) => event.stopPropagation()}
              >
                বিস্তারিত
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

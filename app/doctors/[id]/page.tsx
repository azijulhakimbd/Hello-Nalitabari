
import { notFound } from "next/navigation"

import type { Doctor } from "@/types/doctor"
import { getRouteData } from "@/lib/route-data"
import DoctorDetailsMotion from "@/components/doctors/doctor-details-motion"

type Props = {
  params: Promise<{
    id: string
  }>
}

export default async function DoctorDetailsPage({ params }: Props) {
  const { id } = await params
  const doctors = await getRouteData<Doctor>("doctors")

  const doctor = doctors.find((item) => item.id === Number(id))

  if (!doctor) {
    notFound()
  }

  return <DoctorDetailsMotion doctor={doctor} />
}

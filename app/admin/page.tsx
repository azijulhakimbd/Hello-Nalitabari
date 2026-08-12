import {
  Users,
  FileCheck,
  Stethoscope,
  School,
  Hospital,
  Siren,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    title: "Total Users",
    value: "0",
    icon: Users,
  },
  {
    title: "Submissions",
    value: "0",
    icon: FileCheck,
  },
  {
    title: "Doctors",
    value: "0",
    icon: Stethoscope,
  },
  {
    title: "Schools",
    value: "0",
    icon: School,
  },
  {
    title: "Hospitals",
    value: "0",
    icon: Hospital,
  },
  {
    title: "Emergency Services",
    value: "0",
    icon: Siren,
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Dashboard
        </h1>

        <p className="text-muted-foreground">
          Overview of your Nalitabari information portal.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => {
          const Icon = stat.icon

          return (
            <Card key={stat.title}>
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {stat.title}
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    {stat.value}
                  </p>
                </div>

                <div className="rounded-lg bg-primary/10 p-3">
                  <Icon className="size-5 text-primary" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
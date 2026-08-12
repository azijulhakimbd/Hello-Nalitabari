import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  FileCheck,
  Stethoscope,
  School,
  Hospital,
  Siren,
  Settings,
} from "lucide-react"

const menuItems = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Submissions",
    href: "/admin/submissions",
    icon: FileCheck,
  },
  {
    title: "Doctors",
    href: "/admin/doctors",
    icon: Stethoscope,
  },
  {
    title: "Schools",
    href: "/admin/schools",
    icon: School,
  },
  {
    title: "Hospitals",
    href: "/admin/hospitals",
    icon: Hospital,
  },
  {
    title: "Emergency",
    href: "/admin/emergency",
    icon: Siren,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  return (
    <aside className="hidden w-64 border-r bg-background md:block">
      <div className="sticky top-0 h-screen p-4">
        <div className="mb-8 px-3">
          <h2 className="text-xl font-bold">
            Nalitabari Admin
          </h2>

          <p className="text-sm text-muted-foreground">
            Information Portal
          </p>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon

            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                <Icon className="size-4" />

                {item.title}
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
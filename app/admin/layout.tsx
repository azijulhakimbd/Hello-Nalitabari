import { auth } from "@/auth"
import { redirect } from "next/navigation"

import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/login")
  }

  if (session.user.role !== "admin") {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <AdminHeader />

        <main className="flex-1 p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
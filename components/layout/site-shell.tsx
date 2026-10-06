"use client"

import type { ComponentProps, ReactNode } from "react"
import { usePathname } from "next/navigation"

import { Footer } from "@/components/layout/footer"
import { Navbar } from "@/components/layout/navbar"

type SiteShellProps = {
  children: ReactNode
  session: ComponentProps<typeof Navbar>["session"]
}

export function SiteShell({ children, session }: SiteShellProps) {
  const pathname = usePathname()
  const isAdminRoute = pathname.startsWith("/admin")

  if (isAdminRoute) return children

  return (
    <>
      <Navbar session={session} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  )
}
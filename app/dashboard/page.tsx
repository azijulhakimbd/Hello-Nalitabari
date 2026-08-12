import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import {
  ShieldCheck,
  User,
  Mail,
  ArrowRight,
  FilePlus2,
  LayoutDashboard,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default async function DashboardPage() {
  const session = await auth()

  if (!session?.user) {
    redirect("/auth/login")
  }

  const user = session.user
  const role = user.role ?? "user"

  const isAdmin = role === "admin"
  const isEditor = role === "editor"

  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-primary">
          Nalitabari Information Portal
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          Welcome back, {user.name}
        </h1>

        <p className="mt-2 text-muted-foreground">
          Manage your account and contribute information to the portal.
        </p>
      </div>

      {/* Profile + Actions */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Card */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <User className="size-5" />
                Profile Information
              </CardTitle>

              <Badge
                variant={
                  isAdmin
                    ? "default"
                    : isEditor
                      ? "outline"
                      : "secondary"
                }
              >
                {role}
              </Badge>
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2">
              {/* Name */}
              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="size-4" />
                  Name
                </div>

                <p className="font-medium">
                  {user.name || "Not available"}
                </p>
              </div>

              {/* Email */}
              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="size-4" />
                  Email
                </div>

                <p className="break-all font-medium">
                  {user.email || "Not available"}
                </p>
              </div>

              {/* Role */}
              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="size-4" />
                  Account Role
                </div>

                <p className="font-medium capitalize">
                  {role}
                </p>
              </div>

              {/* User ID */}
              <div className="rounded-lg border bg-muted/30 p-4">
                <div className="mb-2 text-sm text-muted-foreground">
                  User ID
                </div>

                <p className="truncate font-mono text-xs">
                  {user.id}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            {/* Submit Information */}
            <Button
              asChild
              className="w-full justify-between"
            >
              <Link href="/submit">
                Submit Information
                <FilePlus2 className="size-4" />
              </Link>
            </Button>

            {/* Admin */}
            {isAdmin && (
              <Button
                asChild
                variant="outline"
                className="w-full justify-between"
              >
                <Link href="/admin">
                  Admin Dashboard
                  <LayoutDashboard className="size-4" />
                </Link>
              </Button>
            )}

            {/* Editor */}
            {isEditor && !isAdmin && (
              <Button
                asChild
                variant="outline"
                className="w-full justify-between"
              >
                <Link href="/editor">
                  Editor Dashboard
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Contribution Section */}
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Your Contributions</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border p-5">
              <p className="text-sm text-muted-foreground">
                Total Submissions
              </p>

              <p className="mt-2 text-3xl font-bold">
                0
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <p className="text-sm text-muted-foreground">
                Approved
              </p>

              <p className="mt-2 text-3xl font-bold">
                0
              </p>
            </div>

            <div className="rounded-lg border p-5">
              <p className="text-sm text-muted-foreground">
                Pending
              </p>

              <p className="mt-2 text-3xl font-bold">
                0
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}
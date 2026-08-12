"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function RegisterForm() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    setLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)

    const name = formData.get("name")
    const email = formData.get("email")
    const mobile = formData.get("mobile")
    const password = formData.get("password")

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          mobile,
          password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Unable to create account")
        return
      }

      router.push("/auth/login")
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative w-full max-w-md">
      {/* Decorative glow */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 via-blue-500/20 to-purple-500/30 blur-xl opacity-60" />

      <Card className="relative overflow-hidden rounded-3xl border-border/50 bg-background/90 shadow-2xl backdrop-blur-xl">
        {/* Gradient top border */}
        <div className="h-1 w-full bg-gradient-to-r from-primary via-blue-500 to-purple-500" />

        <CardHeader className="space-y-5 px-6 pb-4 pt-8 sm:px-8">
          {/* Icon */}
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-8 ring-primary/5">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
          </div>

          <div className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
              Create an account
            </CardTitle>

            <CardDescription className="text-sm leading-relaxed">
              Join the Nalitabari information portal
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="px-6 pb-8 sm:px-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium"
              >
                Full name
              </label>

              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  autoComplete="name"
                  required
                  className="h-11 rounded-xl pl-10 transition-all focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium"
              >
                Email address
              </label>

              <div className="relative">
                <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="h-11 rounded-xl pl-10 transition-all focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </div>
            </div>

            {/* Mobile Number */}
            <div className="space-y-2">
              <label
                htmlFor="mobile"
                className="text-sm font-medium"
              >
                Mobile number
              </label>

              <div className="relative">
                <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="01XXXXXXXXX"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="01[3-9][0-9]{8}"
                  maxLength={11}
                  required
                  className="h-11 rounded-xl pl-10 transition-all focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </div>

              <p className="text-xs text-muted-foreground">
                Enter a valid Bangladesh mobile number
              </p>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="text-sm font-medium"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  autoComplete="new-password"
                  minLength={6}
                  required
                  className="h-11 rounded-xl pl-10 pr-11 transition-all focus-visible:ring-2 focus-visible:ring-primary/30"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>

              <p className="text-xs text-muted-foreground">
                Password must be at least 6 characters.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3">
                <p className="text-sm font-medium text-destructive">
                  {error}
                </p>
              </div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              disabled={loading}
              className="mt-2 h-11 w-full rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Creating account...
                </span>
              ) : (
                "Create account"
              )}
            </Button>

            {/* Divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>

              <div className="relative flex justify-center">
                <span className="bg-background px-3 text-xs text-muted-foreground">
                  Already registered?
                </span>
              </div>
            </div>

            {/* Login */}
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-semibold text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </form>

          {/* Security */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <LockKeyhole className="h-3.5 w-3.5" />
            <span>Your information is securely protected</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
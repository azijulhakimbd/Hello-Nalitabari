"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
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

type LoginMethod = "email" | "mobile"

export function LoginForm() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loginMethod, setLoginMethod] =
    useState<LoginMethod>("email")

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    setLoading(true)
    setError("")

    const formData = new FormData(event.currentTarget)

    const identifier = formData.get("identifier") as string
    const password = formData.get("password") as string

    try {
      const result = await signIn("credentials", {
        identifier,
        password,
        loginMethod,
        redirect: false,
      })

      if (result?.error) {
        setError("Invalid email/mobile number or password")
        return
      }

      router.push("/dashboard")
      router.refresh()
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative w-full max-w-md">
      {/* Decorative background */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 via-blue-500/20 to-purple-500/30 blur-xl opacity-60" />

      <Card className="relative overflow-hidden rounded-3xl border-border/50 bg-background/90 shadow-2xl backdrop-blur-xl">
        {/* Top gradient */}
        <div className="h-1 w-full bg-gradient-to-r from-primary via-blue-500 to-purple-500" />

        <CardHeader className="space-y-5 px-6 pb-4 pt-8 sm:px-8">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 ring-8 ring-primary/5">
              <ShieldCheck className="h-7 w-7 text-primary" />
            </div>
          </div>

          <div className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold tracking-tight sm:text-3xl">
              Welcome back
            </CardTitle>

            <CardDescription className="text-sm leading-relaxed">
              Sign in to access your Nalitabari information portal
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="px-6 pb-8 sm:px-8">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Login Method */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Sign in with
              </label>

              <div className="grid grid-cols-2 gap-2 rounded-xl bg-muted p-1">
                <button
                  type="button"
                  onClick={() => {
                    setLoginMethod("email")
                    setError("")
                  }}
                  className={`flex h-10 items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all ${
                    loginMethod === "email"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Mail className="h-4 w-4" />
                  Email
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setLoginMethod("mobile")
                    setError("")
                  }}
                  className={`flex h-10 items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all ${
                    loginMethod === "mobile"
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  Mobile
                </button>
              </div>
            </div>

            {/* Email / Mobile */}
            <div className="space-y-2">
              <label
                htmlFor="identifier"
                className="text-sm font-medium"
              >
                {loginMethod === "email"
                  ? "Email address"
                  : "Mobile number"}
              </label>

              <div className="relative">
                {loginMethod === "email" ? (
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                ) : (
                  <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                )}

                <Input
                  key={loginMethod}
                  id="identifier"
                  name="identifier"
                  type={
                    loginMethod === "email"
                      ? "email"
                      : "tel"
                  }
                  placeholder={
                    loginMethod === "email"
                      ? "you@example.com"
                      : "01XXXXXXXXX"
                  }
                  autoComplete={
                    loginMethod === "email"
                      ? "email"
                      : "tel"
                  }
                  inputMode={
                    loginMethod === "email"
                      ? "email"
                      : "tel"
                  }
                  pattern={
                    loginMethod === "mobile"
                      ? "01[3-9][0-9]{8}"
                      : undefined
                  }
                  maxLength={
                    loginMethod === "mobile"
                      ? 11
                      : undefined
                  }
                  required
                  className="h-11 rounded-xl pl-10 transition-all focus-visible:ring-2 focus-visible:ring-primary/30"
                />
              </div>

              {loginMethod === "mobile" && (
                <p className="text-xs text-muted-foreground">
                  Enter your 11-digit Bangladesh mobile number
                </p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
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
              className="h-11 w-full rounded-xl font-semibold shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </Button>

            {/* Register divider */}
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>

              <div className="relative flex justify-center">
                <span className="bg-background px-3 text-xs text-muted-foreground">
                  New to Nalitabari?
                </span>
              </div>
            </div>

            {/* Register */}
            <p className="text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                href="/auth/register"
                className="font-semibold text-primary transition-colors hover:text-primary/80 hover:underline"
              >
                Create an account
              </Link>
            </p>
          </form>

          {/* Security */}
          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <LockKeyhole className="h-3.5 w-3.5" />
            <span>
              Your account information is securely protected
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
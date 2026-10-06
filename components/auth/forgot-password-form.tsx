"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ForgotPasswordForm() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setMessage("")
    setError("")

    const form = new FormData(event.currentTarget)

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.get("email") }),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Unable to send a reset link.")
      }

      setMessage("If an account exists for that email, a reset link will be sent shortly. Check your inbox and spam folder.")
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md border-border/70 shadow-lg">
      <CardHeader className="space-y-4 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-lg bg-emerald-700 text-white">
          <ShieldCheck className="size-6" />
        </div>
        <div className="space-y-1">
          <CardTitle className="text-2xl">Forgot your password?</CardTitle>
          <CardDescription>Enter your account email and we’ll send you a secure reset link.</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email address</label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required className="h-11 pl-10" />
            </div>
          </div>

          {message && <p role="status" className="rounded-md border border-emerald-700/20 bg-emerald-700/10 p-3 text-sm text-emerald-800 dark:text-emerald-300">{message}</p>}
          {error && <p role="alert" className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}

          <Button type="submit" disabled={loading} className="h-11 w-full">
            {loading ? "Sending..." : "Send reset link"}
          </Button>
          <Link href="/auth/login" className="flex items-center justify-center gap-2 py-1 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> Back to sign in
          </Link>
        </form>
      </CardContent>
    </Card>
  )
}
"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, KeyRound } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function ResetPasswordForm({ token }: { token: string | null }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [complete, setComplete] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setLoading(true)
    setError("")

    const form = new FormData(event.currentTarget)
    const password = String(form.get("password") ?? "")
    const confirmPassword = String(form.get("confirmPassword") ?? "")

    if (password !== confirmPassword) {
      setError("The passwords do not match.")
      setLoading(false)
      return
    }

    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || "Unable to reset your password.")
      }

      setComplete(true)
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Please request a new reset link.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md border-border/70 shadow-lg">
      <CardHeader className="space-y-4 text-center">
        <div className="mx-auto flex size-12 items-center justify-center rounded-lg bg-emerald-700 text-white">
          {complete ? <CheckCircle2 className="size-6" /> : <KeyRound className="size-6" />}
        </div>
        <div className="space-y-1">
          <CardTitle className="text-2xl">{complete ? "Password updated" : "Set a new password"}</CardTitle>
          <CardDescription>
            {complete ? "Your password has been changed. You can sign in now." : "Choose a new password with at least 6 characters."}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {complete ? (
          <Button asChild className="h-11 w-full"><Link href="/auth/login">Continue to sign in</Link></Button>
        ) : !token ? (
          <div className="space-y-4">
            <p role="alert" className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">This reset link is missing or invalid. Request a new link to continue.</p>
            <Button asChild className="h-11 w-full"><Link href="/auth/forgot-password">Request a new link</Link></Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">New password</label>
              <Input id="password" name="password" type="password" autoComplete="new-password" minLength={6} maxLength={72} required className="h-11" />
            </div>
            <div className="space-y-2">
              <label htmlFor="confirmPassword" className="text-sm font-medium">Confirm new password</label>
              <Input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" minLength={6} maxLength={72} required className="h-11" />
            </div>
            {error && <p role="alert" className="rounded-md border border-destructive/20 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}
            <Button type="submit" disabled={loading} className="h-11 w-full">{loading ? "Updating..." : "Reset password"}</Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
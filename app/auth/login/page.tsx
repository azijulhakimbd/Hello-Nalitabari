"use client"

import { LoginForm } from "@/components/auth/login-form";


export default function LoginPage() {
  return (
    <main className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-12">
      <LoginForm />
    </main>
  )
}
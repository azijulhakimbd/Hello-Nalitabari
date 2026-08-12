"use client"
import { RegisterForm } from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <main className="container mx-auto flex min-h-[70vh] items-center justify-center px-4 py-12">
      <RegisterForm />
    </main>
  )
}
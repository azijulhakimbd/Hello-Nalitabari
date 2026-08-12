import { auth } from "@/auth"

export async function requireUser() {
  const session = await auth()

  if (!session?.user) {
    return null
  }

  return session.user
}

export async function requireAdmin() {
  const session = await auth()

  if (!session?.user) {
    return null
  }

  if (session.user.role !== "admin") {
    return null
  }

  return session.user
}
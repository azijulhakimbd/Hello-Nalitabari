
"use client"

import { useEffect, useState } from "react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"

type User = {
  _id: string
  name: string
  email: string
  role: string
  createdAt: string
}

const roles = ["user", "editor", "admin"]

export function UsersTable() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [updatingId, setUpdatingId] = useState<string | null>(null)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchUsers() {
      try {
        setError("")

        const response = await fetch("/api/admin/users")

        if (!response.ok) {
          throw new Error("Failed to fetch users")
        }

        const data = await response.json()

        setUsers(data)
      } catch (error) {
        console.error(error)
        setError("Failed to load users")
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  async function updateRole(
    userId: string,
    role: string
  ) {
    try {
      setUpdatingId(userId)
      setError("")

      const response = await fetch(
        `/api/admin/users/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            role,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to update role"
        )
      }

      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user._id === userId
            ? {
                ...user,
                role,
              }
            : user
        )
      )
    } catch (error) {
      console.error(error)

      setError(
        error instanceof Error
          ? error.message
          : "Failed to update role"
      )
    } finally {
      setUpdatingId(null)
    }
  }

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          Loading users...
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardContent className="p-0">
        {error && (
          <div className="border-b bg-destructive/10 px-6 py-3 text-sm text-destructive">
            {error}
          </div>
        )}

        {users.length === 0 ? (
          <div className="p-6 text-center text-sm text-muted-foreground">
            No users found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b bg-muted/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Name
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Email
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Role
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-medium">
                    Joined
                  </th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user._id}
                    className="border-b last:border-0"
                  >
                    <td className="px-6 py-4 font-medium">
                      {user.name}
                    </td>

                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {user.email}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant={
                            user.role === "admin"
                              ? "default"
                              : user.role === "editor"
                                ? "outline"
                                : "secondary"
                          }
                        >
                          {user.role}
                        </Badge>

                        <select
                          value={user.role}
                          disabled={
                            updatingId === user._id
                          }
                          onChange={(event) =>
                            updateRole(
                              user._id,
                              event.target.value
                            )
                          }
                          className="rounded-md border bg-background px-3 py-1.5 text-sm outline-none transition-colors focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          {roles.map((role) => (
                            <option
                              key={role}
                              value={role}
                            >
                              {role.charAt(0).toUpperCase() +
                                role.slice(1)}
                            </option>
                          ))}
                        </select>

                        {updatingId ===
                          user._id && (
                          <span className="text-xs text-muted-foreground">
                            Updating...
                          </span>
                        )}
                      </div>
                    </td>

                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(
                        user.createdAt
                      ).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

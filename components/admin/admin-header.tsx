import { auth } from "@/auth"
import { LogoutButton } from "@/components/auth/logout-button"

export async function AdminHeader() {
  const session = await auth()

  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div>
        <h1 className="font-semibold">
          Admin Panel
        </h1>

        <p className="hidden text-xs text-muted-foreground sm:block">
          Manage Nalitabari information
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium">
            {session?.user?.name}
          </p>

          <p className="text-xs text-muted-foreground">
            {session?.user?.role}
          </p>
        </div>

        <LogoutButton />
      </div>
    </header>
  )
}
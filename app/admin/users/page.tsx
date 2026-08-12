import { UsersTable } from "@/components/admin/users-table";


export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">
          Users
        </h1>

        <p className="text-muted-foreground">
          Manage registered users and their roles.
        </p>
      </div>

      <UsersTable />
    </div>
  )
}
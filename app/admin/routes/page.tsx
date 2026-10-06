import { RouteDataManager } from "@/components/admin/route-data-manager"

export default function AdminRoutesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">পৃষ্ঠা ও তথ্য পরিচালনা</h1>
        <p className="mt-1 text-muted-foreground">ওয়েবসাইটের পৃষ্ঠা অনুযায়ী তথ্য যোগ, সম্পাদনা ও মুছুন।</p>
      </div>
      <RouteDataManager />
    </div>
  )
}
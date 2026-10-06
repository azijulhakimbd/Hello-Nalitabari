import { SubmissionsTable } from "@/components/admin/submissions-table";

export default function AdminSubmissionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">সাবমিশন পর্যালোচনা</h1>
        <p className="mt-1 text-muted-foreground">ব্যবহারকারীদের পাঠানো তথ্য যাচাই করে অনুমোদন বা প্রত্যাখ্যান করুন।</p>
      </div>
      <SubmissionsTable />
    </div>
  );
}
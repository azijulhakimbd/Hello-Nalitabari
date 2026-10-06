import Link from "next/link";
import { ClipboardList, FileText, FolderTree, MapPin, Users } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import clientPromise, { getMongoDatabase } from "@/lib/mongodb";
import { ROUTE_DATA_KEYS } from "@/lib/route-data-keys";

const categoryLabels: Record<string, string> = {
  doctor: "ডাক্তার",
  hospital: "হাসপাতাল / ক্লিনিক",
  school: "স্কুল",
  college: "কলেজ",
  business: "ব্যবসা প্রতিষ্ঠান",
  government: "সরকারি প্রতিষ্ঠান",
  emergency: "জরুরি সেবা",
  place: "দর্শনীয় স্থান",
  other: "অন্যান্য",
};

export default async function AdminDashboard() {
  const client = await clientPromise;
  const db = getMongoDatabase(client);
  const submissions = db.collection("submissions");
  const [userCount, informationCount, categories, pendingCount, recentSubmissions] = await Promise.all([
    db.collection("users").countDocuments({}),
    submissions.countDocuments({}),
    submissions.distinct("category"),
    submissions.countDocuments({ status: "pending" }),
    submissions.find({}, { projection: { imageData: 0 } }).sort({ createdAt: -1 }).limit(5).toArray(),
  ]);

  const stats = [
    { title: "মোট ব্যবহারকারী", value: userCount, icon: Users },
    { title: "মোট জমা তথ্য", value: informationCount, icon: FileText },
    { title: "ক্যাটাগরি", value: categories.length, icon: FolderTree },
    { title: "অপেক্ষমাণ সাবমিশন", value: pendingCount, icon: ClipboardList },
    { title: "পরিচালনাযোগ্য পৃষ্ঠা", value: ROUTE_DATA_KEYS.length, icon: MapPin },
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">নালিতাবাড়ী তথ্য পোর্টাল</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight">অ্যাডমিন ড্যাশবোর্ড</h1>
        <p className="mt-1 text-muted-foreground">ব্যবহারকারী এবং জমা দেওয়া তথ্য পরিচালনা করুন।</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {stats.map(({ title, value, icon: Icon }) => (
          <Card key={title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
              <Icon className="size-4 text-emerald-700 dark:text-emerald-400" />
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{value.toLocaleString("bn-BD")}</p>
              <p className="mt-1 text-xs text-muted-foreground">বর্তমান মোট</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-3">
            <CardTitle>সাম্প্রতিক সাবমিশন</CardTitle>
            <Link href="/admin/submissions" className="text-sm font-medium text-primary underline underline-offset-4">সব দেখুন</Link>
          </CardHeader>
          <CardContent>
            {recentSubmissions.length === 0 ? (
              <p className="py-5 text-sm text-muted-foreground">এখনো কোনো তথ্য জমা পড়েনি।</p>
            ) : (
              <div className="divide-y">
                {recentSubmissions.map((submission) => (
                  <div key={submission._id.toString()} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-medium">{submission.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {categoryLabels[submission.category] ?? submission.category} · {new Date(submission.createdAt).toLocaleDateString("bn-BD")}
                      </p>
                    </div>
                    <Badge variant={submission.status === "approved" ? "default" : submission.status === "rejected" ? "destructive" : "secondary"}>
                      {submission.status === "approved" ? "অনুমোদিত" : submission.status === "rejected" ? "প্রত্যাখ্যাত" : "পর্যালোচনাধীন"}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>দ্রুত কার্যক্রম</CardTitle></CardHeader>
          <CardContent className="space-y-2">
            <Link href="/admin/submissions" className="block rounded-md border p-3 transition-colors hover:bg-muted">
              <span className="font-medium">সাবমিশন পর্যালোচনা</span>
              <span className="mt-1 block text-xs text-muted-foreground">{pendingCount.toLocaleString("bn-BD")}টি অপেক্ষমাণ</span>
            </Link>
            <Link href="/admin/users" className="block rounded-md border p-3 transition-colors hover:bg-muted">
              <span className="font-medium">ব্যবহারকারী পরিচালনা</span>
              <span className="mt-1 block text-xs text-muted-foreground">অ্যাকাউন্ট ও ভূমিকা</span>
            </Link>
            <Link href="/admin/routes" className="block rounded-md border p-3 transition-colors hover:bg-muted">
              <span className="font-medium">পৃষ্ঠা ও তথ্য পরিচালনা</span>
              <span className="mt-1 block text-xs text-muted-foreground">সব রুটের তথ্য ও ছবি</span>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import {
  Users,
  FileText,
  FolderTree,
  ClipboardList,
  TrendingUp,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    title: "মোট ব্যবহারকারী",
    value: "১,২৪৮",
    change: "+১২.৫%",
    icon: Users,
  },
  {
    title: "মোট তথ্য",
    value: "৩৪২",
    change: "+৮.২%",
    icon: FileText,
  },
  {
    title: "ক্যাটাগরি",
    value: "১২",
    change: "+২",
    icon: FolderTree,
  },
  {
    title: "অপেক্ষমাণ সাবমিশন",
    value: "১৮",
    change: "পর্যালোচনা করুন",
    icon: ClipboardList,
  },
];

const submissions = [
  {
    title: "নতুন হাসপাতালের তথ্য",
    user: "Md. Rahim",
    category: "স্বাস্থ্য",
    status: "পর্যালোচনাধীন",
  },
  {
    title: "নতুন শিক্ষা প্রতিষ্ঠানের তথ্য",
    user: "Karim Ahmed",
    category: "শিক্ষা",
    status: "অনুমোদিত",
  },
  {
    title: "সরকারি অফিসের তথ্য আপডেট",
    user: "Abdul Hakim",
    category: "সরকারি সেবা",
    status: "পর্যালোচনাধীন",
  },
  {
    title: "জরুরি সেবার তথ্য",
    user: "Nusrat Jahan",
    category: "জরুরি",
    status: "অনুমোদিত",
  },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          স্বাগতম, অ্যাডমিন 👋
        </h1>

        <p className="mt-1 text-muted-foreground">
          নালিতাবাড়ী তথ্য পোর্টালের সার্বিক অবস্থা দেখুন।
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>

                <div className="rounded-lg bg-green-100 p-2 text-green-700 dark:bg-green-950 dark:text-green-400">
                  <Icon className="size-4" />
                </div>
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>

                <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <TrendingUp className="size-3 text-green-600" />
                  {stat.change}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Overview */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>সাম্প্রতিক সাবমিশন</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              {submissions.map((submission) => (
                <div
                  key={submission.title}
                  className="flex flex-col gap-3 rounded-lg border p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div>
                    <h3 className="font-medium">{submission.title}</h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      {submission.user} · {submission.category}
                    </p>
                  </div>

                  <Badge
                    variant={
                      submission.status === "অনুমোদিত"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {submission.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick actions */}
        <Card>
          <CardHeader>
            <CardTitle>দ্রুত কার্যক্রম</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <a
              href="/admin/content"
              className="block rounded-lg border p-4 transition hover:bg-muted"
            >
              <p className="font-medium">নতুন তথ্য যোগ করুন</p>
              <p className="mt-1 text-xs text-muted-foreground">
                পোর্টালে নতুন তথ্য প্রকাশ করুন
              </p>
            </a>

            <a
              href="/admin/submissions"
              className="block rounded-lg border p-4 transition hover:bg-muted"
            >
              <p className="font-medium">সাবমিশন পর্যালোচনা</p>
              <p className="mt-1 text-xs text-muted-foreground">
                ব্যবহারকারীদের পাঠানো তথ্য দেখুন
              </p>
            </a>

            <a
              href="/admin/users"
              className="block rounded-lg border p-4 transition hover:bg-muted"
            >
              <p className="font-medium">ব্যবহারকারী পরিচালনা</p>
              <p className="mt-1 text-xs text-muted-foreground">
                ব্যবহারকারীদের তথ্য পরিচালনা করুন
              </p>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
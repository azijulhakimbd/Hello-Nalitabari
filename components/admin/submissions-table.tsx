"use client";

import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type Submission = {
  _id: string;
  name: string;
  category: string;
  address: string;
  submitterName: string;
  submitterPhone: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
};

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

const statusLabels = {
  pending: "পর্যালোচনাধীন",
  approved: "অনুমোদিত",
  rejected: "প্রত্যাখ্যাত",
};

export function SubmissionsTable() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSubmissions() {
      try {
        const response = await fetch("/api/admin/submissions");
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "সাবমিশন লোড করা যায়নি।");
        setSubmissions(data);
      } catch (loadError) {
        setError(loadError instanceof Error ? loadError.message : "সাবমিশন লোড করা যায়নি।");
      } finally {
        setLoading(false);
      }
    }

    loadSubmissions();
  }, []);

  async function updateStatus(id: string, status: "approved" | "rejected") {
    setUpdatingId(id);
    setError("");

    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "অবস্থা হালনাগাদ করা যায়নি।");
      setSubmissions((current) => current.map((submission) => (
        submission._id === id ? { ...submission, status } : submission
      )));
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : "অবস্থা হালনাগাদ করা যায়নি।");
    } finally {
      setUpdatingId(null);
    }
  }

  if (loading) {
    return <Card><CardContent className="p-6 text-sm text-muted-foreground">সাবমিশন লোড হচ্ছে...</CardContent></Card>;
  }

  return (
    <Card>
      <CardContent className="p-0">
        {error && <p role="alert" className="border-b bg-destructive/10 px-5 py-3 text-sm text-destructive">{error}</p>}
        {submissions.length === 0 ? (
          <p className="p-8 text-center text-sm text-muted-foreground">এখনো কোনো তথ্য জমা পড়েনি।</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="border-b bg-muted/50 text-muted-foreground">
                <tr>
                  <th className="px-5 py-3 font-medium">তথ্য</th>
                  <th className="px-5 py-3 font-medium">প্রদানকারী</th>
                  <th className="px-5 py-3 font-medium">জমার তারিখ</th>
                  <th className="px-5 py-3 font-medium">অবস্থা</th>
                  <th className="px-5 py-3 text-right font-medium">পর্যালোচনা</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {submissions.map((submission) => (
                  <tr key={submission._id}>
                    <td className="max-w-xs px-5 py-4">
                      <p className="font-medium">{submission.name}</p>
                      <p className="mt-1 truncate text-xs text-muted-foreground">{categoryLabels[submission.category] ?? submission.category} · {submission.address}</p>
                    </td>
                    <td className="px-5 py-4">
                      <p>{submission.submitterName}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{submission.submitterPhone}</p>
                    </td>
                    <td className="whitespace-nowrap px-5 py-4 text-muted-foreground">{new Date(submission.createdAt).toLocaleDateString("bn-BD")}</td>
                    <td className="px-5 py-4">
                      <Badge variant={submission.status === "approved" ? "default" : submission.status === "rejected" ? "destructive" : "secondary"}>
                        {statusLabels[submission.status]}
                      </Badge>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="outline" disabled={updatingId === submission._id || submission.status === "approved"} onClick={() => updateStatus(submission._id, "approved")} aria-label="অনুমোদন করুন" title="অনুমোদন করুন">
                          <Check className="size-4" />
                        </Button>
                        <Button size="sm" variant="outline" disabled={updatingId === submission._id || submission.status === "rejected"} onClick={() => updateStatus(submission._id, "rejected")} aria-label="প্রত্যাখ্যান করুন" title="প্রত্যাখ্যান করুন">
                          <X className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
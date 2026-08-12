"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";

const contactInfo = [
  {
    label: "ইমেইল",
    value: "info@azijul.pro.bd",
    icon: Mail,
  },
  {
    label: "ফোন",
    value: "+৮৮ ০১৫১৬৫৫২৬৬৮",
    icon: Phone,
  },
  {
    label: "ঠিকানা",
    value: "কুতুবাকুড়া, নালিতাবাড়ী, শেরপুর",
    icon: MapPin,
  },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "বার্তা পাঠানো যায়নি।"
        );
      }

      setStatus({
        type: "success",
        message: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "বার্তা পাঠানো যায়নি। আবার চেষ্টা করুন।",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl" />

          <div className="absolute -left-40 top-40 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-3xl" />

          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-green-600/10 blur-3xl" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid w-full overflow-hidden rounded-3xl border border-border bg-card/80 shadow-2xl backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]">
            {/* LEFT */}
            <section className="relative overflow-hidden border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-green-600 dark:text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  যোগাযোগ
                </div>

                <h1 className="max-w-md text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  আমাদের সাথে{" "}
                  <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-500 bg-clip-text text-transparent">
                    কথা বলুন
                  </span>
                </h1>

                <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                  আপনার প্রশ্ন, সাজেশন বা সহযোগিতার প্রস্তাব আমাদের কাছে
                  পাঠান। নালিতাবাড়ী উপজেলা তথ্য পোর্টাল সম্পর্কে যেকোনো
                  বিষয়ে আমরা আপনার সঙ্গে যোগাযোগ করতে প্রস্তুত।
                </p>

                <div className="mt-8 space-y-4">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="group flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-500/40 hover:shadow-md"
                      >
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md shadow-green-500/20">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-medium text-muted-foreground">
                            {item.label}
                          </p>

                          <p className="mt-1 break-words font-medium text-foreground">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* RIGHT */}
            <section className="bg-muted/30 p-8 sm:p-10">
              <div className="mb-7">
                <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  মেসেজ পাঠান
                </div>

                <h2 className="text-2xl font-semibold text-foreground">
                  আপনার বার্তা লিখুন
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  নিচের ফর্মটি পূরণ করে আমাদের কাছে আপনার বার্তা পাঠাতে
                  পারেন।
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-foreground">
                      নাম
                    </span>

                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="আপনার নাম"
                      className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-foreground">
                      ইমেইল
                    </span>

                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                    />
                  </label>
                </div>

                {/* Subject */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-foreground">
                    বিষয়
                  </span>

                  <input
                    name="subject"
                    type="text"
                    required
                    placeholder="আপনার বিষয় লিখুন"
                    className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  />
                </label>

                {/* Message */}
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-foreground">
                    বার্তা
                  </span>

                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="আপনার বার্তা লিখুন..."
                    className="w-full resize-none rounded-xl border border-input bg-background px-3.5 py-3 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                  />
                </label>

                {/* Status */}
                {status && (
                  <div
                    className={`rounded-xl border px-4 py-3 text-sm ${
                      status.type === "success"
                        ? "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400"
                        : "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400"
                    }`}
                  >
                    {status.message}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-[length:200%_100%] px-4 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-all duration-500 hover:bg-[position:100%_0] hover:shadow-green-600/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      পাঠানো হচ্ছে...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      বার্তা পাঠান
                    </>
                  )}
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
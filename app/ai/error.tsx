"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("AI route error:", error);
  }, [error]);

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-br from-emerald-50 to-teal-100 px-4 dark:from-emerald-950 dark:to-teal-950">
      <div className="w-full max-w-md rounded-3xl border border-red-200 bg-white p-8 text-center shadow-xl dark:border-red-900/50 dark:bg-slate-900">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-950/50 dark:text-red-400">
          <AlertTriangle className="h-8 w-8" />
        </div>

        <h1 className="mt-5 text-xl font-bold text-slate-900 dark:text-white">
          কিছু একটা সমস্যা হয়েছে
        </h1>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          AI সহকারী লোড করতে সমস্যা হয়েছে। আবার চেষ্টা
          করলে সমস্যাটি সমাধান হতে পারে।
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          <RefreshCw className="h-4 w-4" />
          আবার চেষ্টা করুন
        </button>
      </div>
    </main>
  );
}
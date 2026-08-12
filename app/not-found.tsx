
import Link from "next/link"
import { ArrowLeft, Home, Search } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        {/* 404 */}
        <div className="mb-6">
          <span className="text-[7rem] font-extrabold leading-none tracking-tight text-primary/15 sm:text-[10rem]">
            404
          </span>
        </div>

        {/* Content */}
        <div className="-mt-8 sm:-mt-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            পেজটি খুঁজে পাওয়া যায়নি
          </h1>

          <p className="mt-3 text-lg font-medium text-muted-foreground">
            Page Not Found
          </p>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
            আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, মুছে ফেলা হয়েছে
            অথবা URL টি ভুল হতে পারে।
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                হোম পেজে ফিরে যান
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/search">
                <Search className="mr-2 h-4 w-4" />
                অনুসন্ধান করুন
              </Link>
            </Button>
          </div>

          {/* Back */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="mt-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            আগের পেজে ফিরে যান
          </button>
        </div>
      </div>
    </main>
  )
}

"use client";

import { ClipboardList, LayoutDashboard, Moon, Sun, Users } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function AdminHeader() {
  const { setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/95 px-4 backdrop-blur md:px-6 lg:px-8">
      <nav aria-label="অ্যাডমিন নেভিগেশন" className="flex items-center gap-1 lg:hidden">
        <Button asChild variant="ghost" size="icon" title="ড্যাশবোর্ড">
          <Link href="/admin"><LayoutDashboard className="size-4" /><span className="sr-only">ড্যাশবোর্ড</span></Link>
        </Button>
        <Button asChild variant="ghost" size="icon" title="ব্যবহারকারী">
          <Link href="/admin/users"><Users className="size-4" /><span className="sr-only">ব্যবহারকারী</span></Link>
        </Button>
        <Button asChild variant="ghost" size="icon" title="সাবমিশন">
          <Link href="/admin/submissions"><ClipboardList className="size-4" /><span className="sr-only">সাবমিশন</span></Link>
        </Button>
      </nav>

      <div className="ml-auto flex items-center gap-2">
        <DropdownMenu>
         <DropdownMenuTrigger
  className="inline-flex size-9 items-center justify-center rounded-md border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground"
>
  <Sun className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
  <Moon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
  <span className="sr-only">থিম পরিবর্তন</span>
</DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              লাইট
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setTheme("dark")}>
              ডার্ক
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() => setTheme("system")}>
              সিস্টেম
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
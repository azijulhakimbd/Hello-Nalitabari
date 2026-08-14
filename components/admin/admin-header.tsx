"use client";

import { Menu, Moon, Sun } from "lucide-react";
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
      <Button variant="ghost" size="icon" className="lg:hidden">
        <Menu className="size-5" />
      </Button>

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
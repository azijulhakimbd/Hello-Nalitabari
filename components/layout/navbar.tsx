"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  Moon,
  Search,
  ShieldAlert,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const navItems = [
  {
    bn: "হোম",
    en: "Home",
    href: "/",
  },
  {
    bn: "আমাদের সম্পর্কে",
    en: "About",
    href: "/about",
  },
  {
    bn: "তথ্যসমূহ",
    en: "Directory",
    href: "/directory",
  },
  {
    bn: "জরুরি সেবা",
    en: "Emergency",
    href: "/emergency",
  },
  {
    bn: "যোগাযোগ",
    en: "Contact",
    href: "/contact",
  },
];

export function Navbar() {
  const language: "bn" | "en" = "bn";
  const [mobileOpen, setMobileOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-sm">
            <span className="text-lg font-bold">ন</span>
          </div>

          <div className="hidden sm:block">
            <p className="text-base font-bold leading-tight">
              {language === "bn"
                ? "নালিতাবাড়ী উপজেলা"
                : "Nalitabari Upazila"}
            </p>

            <p className="text-xs text-muted-foreground">
              {language === "bn"
                ? "তথ্য পোর্টাল"
                : "Information Portal"}
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isEmergency = item.href === "/emergency";

            return (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isEmergency
                    ? "ml-2 inline-flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
                    : "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                }
              >
                {isEmergency && (
                  <ShieldAlert className="h-4 w-4" />
                )}

                {language === "bn" ? item.bn : item.en}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="ghost"
            size="icon"
            asChild
            aria-label={
              language === "bn"
                ? "তথ্য খুঁজুন"
                : "Search"
            }
          >
            <Link href="/search">
              <Search className="h-4 w-4" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setTheme(isDark ? "light" : "dark")
            }
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setTheme(isDark ? "light" : "dark")
            }
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t bg-background lg:hidden">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isEmergency = item.href === "/emergency";

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={
                      isEmergency
                        ? "flex items-center gap-2 rounded-lg bg-red-600 px-4 py-3 text-sm font-medium text-white"
                        : "rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                    }
                  >
                    {isEmergency && (
                      <ShieldAlert className="h-4 w-4" />
                    )}

                    {language === "bn"
                      ? item.bn
                      : item.en}
                  </Link>
                );
              })}
            </div>

            <div className="mt-4 flex items-center gap-2 border-t pt-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1"
              >
                <Link
                  href="/search"
                  onClick={() => setMobileOpen(false)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {language === "bn"
                    ? "তথ্য খুঁজুন"
                    : "Search"}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
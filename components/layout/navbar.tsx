"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  Moon,
  Search,
  ShieldAlert,
  Sun,
  X,
  LogIn,
  UserPlus,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import { useTheme } from "next-themes";
import { signOut } from "next-auth/react";

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

type NavbarProps = {
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  } | null;
};

export function Navbar({ session }: NavbarProps) {
  const language: "bn" | "en" = "bn";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const isLoggedIn = !!session?.user;

  // Detect scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/",
    });
  };

  return (
    <header
      className={`
        sticky top-0 z-50 w-full
        border-b
        transition-all duration-300 ease-in-out
        ${
          isScrolled
            ? "border-white/20 bg-green-700/60 shadow-lg backdrop-blur-xl"
            : "border-green-500/20 bg-gradient-to-r from-green-700 via-green-600 to-emerald-600"
        }
      `}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMobileOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="নালিতাবাড়ী উপজেলা তথ্য পোর্টাল"
            width={180}
            height={70}
            priority
            className="h-12 w-auto object-contain"
          />
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
                    ? `
                      ml-2 inline-flex items-center gap-2
                      rounded-lg
                      bg-red-600
                      px-4 py-2
                      text-sm font-medium text-white
                      shadow-sm
                      transition-all
                      hover:bg-red-700
                      hover:shadow-md
                    `
                    : `
                      rounded-lg
                      px-3 py-2
                      text-sm font-medium
                      text-white/90
                      transition-all
                      hover:bg-white/15
                      hover:text-white
                    `
                }
              >
                {isEmergency && <ShieldAlert className="h-4 w-4" />}

                {language === "bn" ? item.bn : item.en}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Search */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className="text-white hover:bg-white/15 hover:text-white"
            aria-label={language === "bn" ? "তথ্য খুঁজুন" : "Search"}
          >
            <Link href="/search">
              <Search className="h-4 w-4" />
            </Link>
          </Button>

          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Authentication */}
          {isLoggedIn ? (
            <>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-white hover:bg-white/15 hover:text-white"
              >
                <Link href="/dashboard">
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  {language === "bn" ? "ড্যাশবোর্ড" : "Dashboard"}
                </Link>
              </Button>

              <Button
                variant="destructive"
                size="sm"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                {language === "bn" ? "লগআউট" : "Logout"}
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-white hover:bg-white/15 hover:text-white"
              >
                <Link href="/auth/login">
                  <LogIn className="mr-2 h-4 w-4" />
                  {language === "bn" ? "লগইন" : "Login"}
                </Link>
              </Button>

              <Button
                size="sm"
                asChild
                className="bg-white text-green-700 hover:bg-white/90"
              >
                <Link href="/auth/register">
                  <UserPlus className="mr-2 h-4 w-4" />
                  {language === "bn" ? "রেজিস্টার" : "Register"}
                </Link>
              </Button>
            </>
          )}
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Theme Toggle */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            aria-label="Toggle theme"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          {/* Mobile Menu */}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
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
        <div className="border-t border-white/20 bg-green-800/90 backdrop-blur-xl lg:hidden">
          <div className="container mx-auto px-4 py-4">
            {/* Navigation Links */}
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
                        : "rounded-lg px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                    }
                  >
                    {isEmergency && (
                      <ShieldAlert className="h-4 w-4" />
                    )}

                    {language === "bn" ? item.bn : item.en}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Search */}
            <div className="mt-4 flex items-center gap-2 border-t border-white/20 pt-4">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="flex-1 border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                <Link
                  href="/search"
                  onClick={() => setMobileOpen(false)}
                >
                  <Search className="mr-2 h-4 w-4" />
                  {language === "bn" ? "তথ্য খুঁজুন" : "Search"}
                </Link>
              </Button>
            </div>

            {/* Mobile Authentication */}
            <div className="mt-2 grid grid-cols-2 gap-2">
              {isLoggedIn ? (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                  >
                    <Link
                      href="/dashboard"
                      onClick={() => setMobileOpen(false)}
                    >
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      {language === "bn"
                        ? "ড্যাশবোর্ড"
                        : "Dashboard"}
                    </Link>
                  </Button>

                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => {
                      setMobileOpen(false);
                      handleLogout();
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {language === "bn" ? "লগআউট" : "Logout"}
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                  >
                    <Link
                      href="/auth/login"
                      onClick={() => setMobileOpen(false)}
                    >
                      <LogIn className="mr-2 h-4 w-4" />
                      {language === "bn" ? "লগইন" : "Login"}
                    </Link>
                  </Button>

                  <Button
                    size="sm"
                    asChild
                    className="bg-white text-green-700 hover:bg-white/90"
                  >
                    <Link
                      href="/auth/register"
                      onClick={() => setMobileOpen(false)}
                    >
                      <UserPlus className="mr-2 h-4 w-4" />
                      {language === "bn"
                        ? "রেজিস্টার"
                        : "Register"}
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  FolderTree,
  ClipboardList,
  Settings,
  Home,
  LogOut,
  MapPin,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  {
    title: "ড্যাশবোর্ড",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "ব্যবহারকারী",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "তথ্য ব্যবস্থাপনা",
    href: "/admin/content",
    icon: FileText,
  },
  {
    title: "ক্যাটাগরি",
    href: "/admin/categories",
    icon: FolderTree,
  },
  {
    title: "সাবমিশন",
    href: "/admin/submissions",
    icon: ClipboardList,
  },
  {
    title: "সেটিংস",
    href: "/admin/settings",
    icon: Settings,
  },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-64 border-r bg-background lg:flex lg:flex-col">
      <div className="flex h-16 items-center gap-3 border-b px-6">
        <div className="flex size-9 items-center justify-center rounded-xl bg-green-600 text-white">
          <MapPin className="size-5" />
        </div>

        <div>
          <h1 className="font-bold">নালিতাবাড়ী</h1>
          <p className="text-xs text-muted-foreground">অ্যাডমিন প্যানেল</p>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active =
            pathname === item.href ||
            (item.href !== "/admin" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <Icon className="size-4" />
              {item.title}
            </Link>
          );
        })}
      </nav>

      <Separator />

      <div className="space-y-2 p-4">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/">
            <Home className="mr-2 size-4" />
            ওয়েবসাইট দেখুন
          </Link>
        </Button>

        <Button
          variant="ghost"
          className="w-full justify-start text-destructive"
        >
          <LogOut className="mr-2 size-4" />
          লগআউট
        </Button>
      </div>
    </aside>
  );
}
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export const metadata: Metadata = {
  title: "Nalitabari Upazila Information Portal",
  description: "Developed by Md Azijul Hakim",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
         <ThemeProvider>
          <Navbar/>
          {children}
         </ThemeProvider>
        
        </body>
    </html>
  );
}

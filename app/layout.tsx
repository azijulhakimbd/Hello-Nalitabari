import type { Metadata } from "next";
import Script from "next/script";
import { Hind_Siliguri, Geist_Mono } from "next/font/google";
import "./globals.css";

import { auth } from "@/auth";
import { ThemeProvider } from "@/providers/theme-provider";
import { Footer } from "@/components/layout/footer";
import { AuthSessionProvider } from "@/providers/session-provider";
import { Navbar } from "@/components/layout/navbar";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nalitabari.sherpur.gov.bd"),

  title: {
    default: "নালিতাবাড়ী উপজেলা তথ্য পোর্টাল",
    template: "%s | নালিতাবাড়ী উপজেলা তথ্য পোর্টাল",
  },

  description:
    "নালিতাবাড়ী উপজেলা, শেরপুরের তথ্য, জরুরি সেবা, স্বাস্থ্য, শিক্ষা, সরকারি সেবা ও গুরুত্বপূর্ণ যোগাযোগের তথ্যের অনলাইন পোর্টাল।",

  keywords: [
    "নালিতাবাড়ী",
    "নালিতাবাড়ী উপজেলা",
    "Nalitabari",
    "Nalitabari Upazila",
    "শেরপুর",
    "Sherpur",
    "নালিতাবাড়ী তথ্য",
    "নালিতাবাড়ী সরকারি তথ্য",
    "জরুরি সেবা",
    "স্বাস্থ্য সেবা",
    "শিক্ষা",
    "সরকারি সেবা",
  ],

  authors: [
    {
      name: "Md Azijul Hakim",
      url: "https://azijul.pro.bd",
    },
  ],

  creator: "Md Azijul Hakim",
  publisher: "Nalitabari Upazila Information Portal",

  applicationName: "Nalitabari Upazila Information Portal",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "/",
    siteName: "Nalitabari Upazila Information Portal",
    title: "নালিতাবাড়ী উপজেলা তথ্য পোর্টাল",
    description:
      "নালিতাবাড়ী উপজেলা, শেরপুরের স্বাস্থ্য, শিক্ষা, জরুরি সেবা, সরকারি সেবা ও গুরুত্বপূর্ণ তথ্যের অনলাইন পোর্টাল।",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "government",
};

export default async function RootLayout({
  children,
}: LayoutProps<"/">) {
  const session = await auth();

  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={`${hindSiliguri.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XTJHCF0JX3"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XTJHCF0JX3');
          `}
        </Script>

        <AuthSessionProvider>
          <ThemeProvider>
            <Navbar session={session} />

            <main className="flex-1">
              {children}
            </main>

            <Footer />
          </ThemeProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
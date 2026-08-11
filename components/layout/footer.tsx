
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center"
            >
              <Image
                src="/logo.png"
                alt="নালিতাবাড়ী উপজেলা তথ্য পোর্টাল"
                width={220}
                height={135}
                className="h-24 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">
              নালিতাবাড়ী উপজেলার সরকারি সেবা, শিক্ষা,
              চিকিৎসা, জরুরি সেবা এবং স্থানীয় সকল তথ্য
              সহজে খুঁজে পাওয়ার জন্য একটি তথ্যভিত্তিক
              ডিজিটাল প্ল্যাটফর্ম।
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-emerald-600" />
              নালিতাবাড়ী, শেরপুর, বাংলাদেশ
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">
              দ্রুত লিংক
            </h3>

            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-emerald-600"
                >
                  হোম
                </Link>
              </li>

              <li>
                <Link
                  href="/directory"
                  className="transition-colors hover:text-emerald-600"
                >
                  সকল তথ্য
                </Link>
              </li>

              <li>
                <Link
                  href="/health"
                  className="transition-colors hover:text-emerald-600"
                >
                  চিকিৎসা
                </Link>
              </li>

              <li>
                <Link
                  href="/education"
                  className="transition-colors hover:text-emerald-600"
                >
                  শিক্ষা
                </Link>
              </li>

              <li>
                <Link
                  href="/emergency"
                  className="font-medium text-red-600 transition-colors hover:text-red-700"
                >
                  জরুরি সেবা
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold">
              যোগাযোগ
            </h3>

            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />

                <span>
                  নালিতাবাড়ী উপজেলা,
                  <br />
                  শেরপুর, বাংলাদেশ
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-emerald-600" />

                <Link
                  href="tel:999"
                  className="hover:text-emerald-600"
                >
                  জরুরি: ৯৯৯
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-emerald-600" />

                <Link
                  href="/contact"
                  className="hover:text-emerald-600"
                >
                  যোগাযোগ করুন
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-center text-muted-foreground md:text-left">
            © {currentYear} নালিতাবাড়ী উপজেলা তথ্য পোর্টাল।
            সর্বস্বত্ব সংরক্ষিত।
          </p>

          <p className="flex items-center justify-center gap-1 text-muted-foreground">
            Developed with{" "}
            <Heart className="h-4 w-4 fill-current text-red-500" />
            {" "}by{" "}
            <a
              href="https://azijul.pro.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground underline-offset-4 hover:text-emerald-600 hover:underline"
            >
              Md. Azijul Hakim
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}


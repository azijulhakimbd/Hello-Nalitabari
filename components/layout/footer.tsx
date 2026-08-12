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
    <footer className="border-t border-green-500/20 bg-gradient-to-r from-green-700 via-green-600 to-emerald-600 text-white">
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

            <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
              নালিতাবাড়ী উপজেলার সরকারি সেবা, শিক্ষা,
              চিকিৎসা, জরুরি সেবা এবং স্থানীয় সকল তথ্য
              সহজে খুঁজে পাওয়ার জন্য একটি তথ্যভিত্তিক
              ডিজিটাল প্ল্যাটফর্ম।
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-white/80">
              <MapPin className="h-4 w-4 shrink-0 text-white" />
              নালিতাবাড়ী, শেরপুর, বাংলাদেশ
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              দ্রুত লিংক
            </h3>

            <ul className="space-y-3 text-sm text-white/75">
              <li>
                <Link
                  href="/"
                  className="transition-colors hover:text-white"
                >
                  হোম
                </Link>
              </li>

              <li>
                <Link
                  href="/directory"
                  className="transition-colors hover:text-white"
                >
                  সকল তথ্য
                </Link>
              </li>

              <li>
                <Link
                  href="/health"
                  className="transition-colors hover:text-white"
                >
                  চিকিৎসা
                </Link>
              </li>

              <li>
                <Link
                  href="/education"
                  className="transition-colors hover:text-white"
                >
                  শিক্ষা
                </Link>
              </li>

              <li>
                <Link
                  href="/emergency"
                  className="font-medium text-red-200 transition-colors hover:text-red-100"
                >
                  জরুরি সেবা
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              যোগাযোগ
            </h3>

            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white" />

                <span>
                  নালিতাবাড়ী উপজেলা,
                  <br />
                  শেরপুর, বাংলাদেশ
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-white" />

                <Link
                  href="tel:999"
                  className="transition-colors hover:text-white"
                >
                  জরুরি: ৯৯৯
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-white" />

                <Link
                  href="/contact"
                  className="transition-colors hover:text-white"
                >
                  যোগাযোগ করুন
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-white/20 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p className="text-center text-white/70 md:text-left">
            © {currentYear} নালিতাবাড়ী উপজেলা তথ্য পোর্টাল।
            সর্বস্বত্ব সংরক্ষিত।
          </p>

          <p className="flex items-center justify-center gap-1 text-white/70">
            Developed with{" "}
            <Heart className="h-4 w-4 fill-current text-red-300" />
            {" "}by{" "}
            <a
              href="https://azijul.pro.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white underline-offset-4 transition-colors hover:text-green-100 hover:underline"
            >
              Md. Azijul Hakim
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
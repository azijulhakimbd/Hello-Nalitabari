"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NotFoundAnimation() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center overflow-hidden px-4 py-16">
      <div className="mx-auto w-full max-w-2xl text-center">

        {/* Animated 404 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="mb-6"
        >
          <motion.span
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block text-[7rem] font-extrabold leading-none tracking-tight text-primary/15 sm:text-[10rem]"
          >
            404
          </motion.span>
        </motion.div>

        {/* Animated Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="-mt-8 sm:-mt-12"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            পেজটি খুঁজে পাওয়া যায়নি
          </motion.h1>

          <p className="mt-3 text-lg font-medium text-muted-foreground">
            Page Not Found
          </p>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-muted-foreground sm:text-base">
            আপনি যে পেজটি খুঁজছেন সেটি হয়তো সরানো হয়েছে, মুছে ফেলা হয়েছে
            অথবা URL টি ভুল হতে পারে।
          </p>

          {/* Animated Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Button asChild>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  হোম পেজে ফিরে যান
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <Button asChild variant="outline">
                <Link href="/search">
                  <Search className="mr-2 h-4 w-4" />
                  অনুসন্ধান করুন
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Animated Back Button */}
          <motion.button
            type="button"
            onClick={() => window.history.back()}
            whileHover={{ x: -4 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="mt-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            আগের পেজে ফিরে যান
          </motion.button>
        </motion.div>
      </div>
    </main>
  );
}

"use client";

import { type FormEvent, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Loader2,
} from "lucide-react";

const contactInfo = [
  {
    label: "ইমেইল",
    value: "info@azijul.pro.bd",
    icon: Mail,
  },
  {
    label: "ফোন",
    value: "+৮৮ ০১৫১৬৫৫২৬৬৮",
    icon: Phone,
  },
  {
    label: "ঠিকানা",
    value: "কুতুবাকুড়া, নালিতাবাড়ী, শেরপুর",
    icon: MapPin,
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || "বার্তা পাঠানো যায়নি।"
        );
      }

      setStatus({
        type: "success",
        message: "আপনার বার্তা সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!",
      });

      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "বার্তা পাঠানো যায়নি। আবার চেষ্টা করুন।",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="relative overflow-hidden">
        {/* Animated background glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-green-500/10 blur-3xl"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    scale: [1, 1.08, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute -left-40 top-40 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-3xl"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, 25, 0],
                    y: [0, -20, 0],
                  }
            }
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            aria-hidden="true"
            className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-green-600/10 blur-3xl"
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, -20, 0],
                    y: [0, 20, 0],
                  }
            }
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
          {/* Main contact card */}
          <motion.div
            className="grid w-full overflow-hidden rounded-3xl border border-border bg-card/80 shadow-2xl backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]"
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 30,
                    scale: 0.985,
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease,
            }}
          >
            {/* LEFT: Contact information */}
            <section className="relative overflow-hidden border-b border-border p-8 sm:p-10 lg:border-b-0 lg:border-r">
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />

              <motion.div
                className="relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Badge */}
                <motion.div
                  variants={fadeUp}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 text-xs font-medium tracking-wide text-green-600 dark:text-green-400"
                >
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-green-500"
                    animate={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: [1, 0.4, 1] }
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  যোগাযোগ
                </motion.div>

                {/* Heading */}
                <motion.h1
                  variants={fadeUp}
                  className="max-w-md text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
                >
                  আমাদের সাথে{" "}
                  <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-500 bg-clip-text text-transparent">
                    কথা বলুন
                  </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                  variants={fadeUp}
                  className="mt-5 max-w-lg text-base leading-7 text-muted-foreground"
                >
                  আপনার প্রশ্ন, সাজেশন বা সহযোগিতার প্রস্তাব আমাদের
                  কাছে পাঠান। নালিতাবাড়ী উপজেলা তথ্য পোর্টাল সম্পর্কে
                  যেকোনো বিষয়ে আমরা আপনার সঙ্গে যোগাযোগ করতে প্রস্তুত।
                </motion.p>

                {/* Contact details */}
                <motion.div
                  variants={containerVariants}
                  className="mt-8 space-y-4"
                >
                  {contactInfo.map((item) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.label}
                        variants={fadeUp}
                        whileHover={
                          shouldReduceMotion
                            ? undefined
                            : {
                                x: 5,
                                transition: { duration: 0.2 },
                              }
                        }
                        className="group flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-4 shadow-sm backdrop-blur-sm transition-colors duration-300 hover:border-green-500/40 hover:shadow-md"
                      >
                        <motion.div
                          whileHover={
                            shouldReduceMotion
                              ? undefined
                              : { rotate: -5, scale: 1.06 }
                          }
                          transition={{ duration: 0.2 }}
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-md shadow-green-500/20"
                        >
                          <Icon className="h-5 w-5" />
                        </motion.div>

                        <div className="min-w-0">
                          <p className="text-xs font-medium text-muted-foreground">
                            {item.label}
                          </p>

                          <p className="mt-1 break-words font-medium text-foreground">
                            {item.value}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </section>

            {/* RIGHT: Contact form */}
            <motion.section
              className="bg-muted/30 p-8 sm:p-10"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, x: 20 }
              }
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : 0.15,
                ease,
              }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeUp} className="mb-7">
                  <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    মেসেজ পাঠান
                  </div>

                  <h2 className="text-2xl font-semibold text-foreground">
                    আপনার বার্তা লিখুন
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    নিচের ফর্মটি পূরণ করে আমাদের কাছে আপনার বার্তা
                    পাঠাতে পারেন।
                  </p>
                </motion.div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <motion.label
                      variants={fadeUp}
                      className="block"
                    >
                      <span className="mb-2 block text-sm font-medium text-foreground">
                        নাম
                      </span>

                      <input
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="আপনার নাম"
                        className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                      />
                    </motion.label>

                    <motion.label
                      variants={fadeUp}
                      className="block"
                    >
                      <span className="mb-2 block text-sm font-medium text-foreground">
                        ইমেইল
                      </span>

                      <input
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                      />
                    </motion.label>
                  </div>

                  {/* Subject */}
                  <motion.label
                    variants={fadeUp}
                    className="block"
                  >
                    <span className="mb-2 block text-sm font-medium text-foreground">
                      বিষয়
                    </span>

                    <input
                      name="subject"
                      type="text"
                      required
                      placeholder="আপনার বিষয় লিখুন"
                      className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                    />
                  </motion.label>

                  {/* Message */}
                  <motion.label
                    variants={fadeUp}
                    className="block"
                  >
                    <span className="mb-2 block text-sm font-medium text-foreground">
                      বার্তা
                    </span>

                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="আপনার বার্তা লিখুন..."
                      className="w-full resize-none rounded-xl border border-input bg-background px-3.5 py-3 text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
                    />
                  </motion.label>

                  {/* Animated success/error message */}
                  <AnimatePresence mode="wait">
                    {status && (
                      <motion.div
                        key={`${status.type}-${status.message}`}
                        role="status"
                        aria-live="polite"
                        initial={
                          shouldReduceMotion
                            ? false
                            : { opacity: 0, y: 8, height: 0 }
                        }
                        animate={{
                          opacity: 1,
                          y: 0,
                          height: "auto",
                        }}
                        exit={{
                          opacity: 0,
                          y: shouldReduceMotion ? 0 : -6,
                          height: 0,
                        }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.25,
                          ease,
                        }}
                        className={`overflow-hidden rounded-xl border px-4 py-3 text-sm ${
                          status.type === "success"
                            ? "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-400"
                            : "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-400"
                        }`}
                      >
                        {status.message}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Submit button */}
                  <motion.button
                    variants={fadeUp}
                    type="submit"
                    disabled={loading}
                    whileHover={
                      shouldReduceMotion || loading
                        ? undefined
                        : { scale: 1.015, y: -1 }
                    }
                    whileTap={
                      shouldReduceMotion || loading
                        ? undefined
                        : { scale: 0.985 }
                    }
                    className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-600 via-emerald-500 to-green-600 bg-[length:200%_100%] px-4 text-sm font-semibold text-white shadow-lg shadow-green-600/20 transition-[background-position,box-shadow] duration-500 hover:bg-[position:100%_0] hover:shadow-green-600/30 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        পাঠানো হচ্ছে...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        বার্তা পাঠান
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

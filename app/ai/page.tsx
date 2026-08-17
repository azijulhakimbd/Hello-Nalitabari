"use client";

import { MessagePart } from "@/components/ai/message-part";
import { useChat } from "@ai-sdk/react";
import { AlertTriangle, RefreshCw, Send } from "lucide-react";
import { useState } from "react";

export default function AIPage() {
  const [input, setInput] = useState("");

  const {
    messages,
    sendMessage,
    status,
    error,
    regenerate,
  } = useChat();

  const isBusy =
    status === "submitted" || status === "streaming";

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const value = input.trim();

    if (!value || isBusy) return;

    setInput("");

    try {
      await sendMessage({
        text: value,
      });
    } catch (error) {
      console.error("Chat submission failed:", error);
    }
  }

  function handleSuggestion(question: string) {
    if (isBusy) return;

    setInput(question);
  }

  return (
    <main className="min-h-[100dvh] bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 px-3 py-6 sm:px-4 sm:py-10 dark:from-emerald-950 dark:via-green-950 dark:to-teal-950">
      <div className="mx-auto flex w-full max-w-4xl flex-col">
        {/* Header */}
        <div className="mb-6 text-center sm:mb-8">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 text-2xl shadow-lg shadow-emerald-500/20 sm:h-16 sm:w-16 sm:text-3xl">
            🤖
          </div>

          <h1 className="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 bg-clip-text text-2xl font-bold text-transparent sm:text-4xl dark:from-emerald-400 dark:via-green-400 dark:to-teal-400">
            নালিতাবাড়ী এআই সহকারী
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
            নালিতাবাড়ীর হাসপাতাল, শিক্ষা প্রতিষ্ঠান, দর্শনীয় স্থান,
            ব্যবসা প্রতিষ্ঠান, সরকারি সেবা ও নোটিশ সম্পর্কে জানতে
            আপনার প্রশ্ন করুন।
          </p>
        </div>

        {/* Chat Card */}
        <div className="rounded-3xl border border-emerald-200/70 bg-white/70 p-3 shadow-xl shadow-emerald-900/5 backdrop-blur-xl sm:p-6 dark:border-emerald-800/50 dark:bg-slate-900/60">
          {/* Messages */}
          <div className="min-h-[400px] space-y-5 sm:min-h-[450px]">
            {/* Empty State */}
            {messages.length === 0 && !error && !isBusy && (
              <div className="flex min-h-[400px] flex-col items-center justify-center px-3 text-center">
                <div className="mb-4 rounded-full bg-emerald-100 p-5 text-4xl dark:bg-emerald-900/50">
                  💬
                </div>

                <h2 className="text-xl font-semibold text-slate-800 sm:text-2xl dark:text-white">
                  কী জানতে চান?
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                  নিচের একটি প্রশ্ন বেছে নিন অথবা নিজের প্রশ্ন
                  লিখে পাঠান।
                </p>

                {/* Suggested Questions */}
                <div className="mt-6 flex w-full max-w-2xl flex-wrap justify-center gap-2">
                  {[
                    "নালিতাবাড়ীতে কয়টি হাসপাতাল আছে?",
                    "নালিতাবাড়ীর দর্শনীয় স্থানগুলো কী কী?",
                    "নালিতাবাড়ীর শিক্ষা প্রতিষ্ঠান সম্পর্কে বলুন",
                    "নালিতাবাড়ীর সরকারি সেবা কী কী?",
                  ].map((question) => (
                    <button
                      key={question}
                      type="button"
                      onClick={() =>
                        handleSuggestion(question)
                      }
                      className="rounded-full border border-emerald-200 bg-white px-4 py-2.5 text-xs font-medium text-emerald-700 transition hover:border-emerald-500 hover:bg-emerald-50 active:scale-[0.98] sm:text-sm dark:border-emerald-800 dark:bg-slate-900 dark:text-emerald-300 dark:hover:bg-emerald-950"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`w-full max-w-[95%] sm:max-w-[80%] ${
                    message.role === "user"
                      ? "items-end"
                      : "items-start"
                  }`}
                >
                  {/* Sender */}
                  <div
                    className={`mb-1.5 px-1 text-xs font-semibold ${
                      message.role === "user"
                        ? "text-right text-emerald-700 dark:text-emerald-400"
                        : "text-left text-emerald-700 dark:text-emerald-400"
                    }`}
                  >
                    {message.role === "user"
                      ? "আপনি"
                      : "নালিতাবাড়ী এআই"}
                  </div>

                  {/* Message */}
                  <div
                    className={`rounded-2xl border p-3.5 leading-7 shadow-sm sm:p-4 ${
                      message.role === "user"
                        ? "rounded-tr-sm border-emerald-600 bg-gradient-to-r from-emerald-600 to-green-600 text-white"
                        : "rounded-tl-sm border-emerald-100 bg-emerald-50/80 text-slate-800 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-slate-100"
                    }`}
                  >
                    {message.parts.map((part, index) => (
                      <MessagePart
                        key={`${message.id}-${index}`}
                        part={part}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Initial Loading Skeleton */}
            {status === "submitted" && (
              <div className="flex justify-start">
                <div className="w-full max-w-[90%] rounded-2xl rounded-tl-sm border border-emerald-100 bg-emerald-50 px-4 py-4 dark:border-emerald-800 dark:bg-emerald-950/50 sm:max-w-[80%]">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 shrink-0 animate-pulse rounded-full bg-emerald-200 dark:bg-emerald-800" />

                    <div className="flex-1 space-y-2">
                      <div className="h-3 w-24 animate-pulse rounded-full bg-emerald-200 dark:bg-emerald-800" />
                      <div className="h-3 w-[85%] animate-pulse rounded-full bg-emerald-200 dark:bg-emerald-800" />
                      <div className="h-3 w-[60%] animate-pulse rounded-full bg-emerald-200 dark:bg-emerald-800" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Streaming Indicator */}
            {status === "streaming" && (
              <div className="flex justify-start">
                <div className="max-w-[90%] rounded-2xl rounded-tl-sm border border-emerald-100 bg-emerald-50 px-4 py-3 dark:border-emerald-800 dark:bg-emerald-950/50">
                  <div className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400">
                    <span className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500" />

                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-emerald-500"
                        style={{
                          animationDelay: "150ms",
                        }}
                      />

                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-emerald-500"
                        style={{
                          animationDelay: "300ms",
                        }}
                      />
                    </span>

                    <span>উত্তর প্রস্তুত করা হচ্ছে...</span>
                  </div>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <div className="flex justify-start">
                <div className="w-full max-w-2xl rounded-2xl border border-red-200 bg-red-50 p-4 dark:border-red-900/60 dark:bg-red-950/30">
                  <div className="flex items-start gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400">
                      <AlertTriangle className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-red-700 dark:text-red-400">
                        উত্তর দিতে সমস্যা হয়েছে
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-red-600/80 dark:text-red-400/80">
                        আপনার সর্বশেষ প্রশ্নটির উত্তর সম্পূর্ণ
                        করা যায়নি। আবার চেষ্টা করুন।
                      </p>

                      <button
                        type="button"
                        onClick={() => regenerate()}
                        disabled={isBusy}
                        className="mt-3 inline-flex min-h-10 items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <RefreshCw className="h-4 w-4" />
                        আবার চেষ্টা করুন
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="mt-6 rounded-2xl border border-emerald-200 bg-white p-2 shadow-sm dark:border-emerald-800 dark:bg-slate-950"
          >
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                value={input}
                onChange={(event) =>
                  setInput(event.target.value)
                }
                placeholder="নালিতাবাড়ী সম্পর্কে কিছু জানতে লিখুন..."
                className="min-h-12 min-w-0 flex-1 rounded-xl border-0 bg-emerald-50 px-4 py-3 text-base text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
                disabled={isBusy}
                autoComplete="off"
                enterKeyHint="send"
              />

              <button
                type="submit"
                disabled={isBusy || !input.trim()}
                className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white shadow-md shadow-emerald-500/20 transition-all hover:from-emerald-700 hover:to-green-700 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isBusy ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    <span>অপেক্ষা করুন...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    <span>প্রশ্ন করুন</span>
                  </>
                )}
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-xs text-slate-400 dark:text-slate-500">
            নালিতাবাড়ী তথ্য পোর্টালের এআই সহকারী
          </p>
        </div>
      </div>
    </main>
  );
}
"use client";

import { MessagePart } from "@/components/ai/message-part";
import { useChat } from "@ai-sdk/react";
import { useState } from "react";

export default function AIPage() {
  const [input, setInput] = useState("");

  const { messages, sendMessage, status } = useChat();

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const value = input.trim();

    if (!value) return;

    setInput("");

    await sendMessage({
      text: value,
    });
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 px-4 py-10 dark:from-emerald-950 dark:via-green-950 dark:to-teal-950">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-700 text-3xl shadow-lg shadow-emerald-500/20">
            🤖
          </div>

          <h1 className="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl dark:from-emerald-400 dark:via-green-400 dark:to-teal-400">
            নালিতাবাড়ী এআই সহকারী
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300">
            নালিতাবাড়ীর হাসপাতাল, শিক্ষা প্রতিষ্ঠান, দর্শনীয় স্থান,
            ব্যবসা প্রতিষ্ঠান, সরকারি সেবা ও নোটিশ সম্পর্কে জানতে
            আপনার প্রশ্ন করুন।
          </p>
        </div>

        {/* Chat Area */}
        <div className="rounded-3xl border border-emerald-200/70 bg-white/70 p-4 shadow-xl shadow-emerald-900/5 backdrop-blur-xl sm:p-6 dark:border-emerald-800/50 dark:bg-slate-900/60">
          <div className="min-h-[400px] space-y-5">
            {messages.length === 0 ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <div className="mb-4 rounded-full bg-emerald-100 p-5 text-4xl dark:bg-emerald-900/50">
                  💬
                </div>

                <h2 className="text-xl font-semibold text-slate-800 dark:text-white">
                  কী জানতে চান?
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                  যেমন: নালিতাবাড়ীতে কয়টি হাসপাতাল আছে?
                  অথবা নালিতাবাড়ীর দর্শনীয় স্থানগুলো কী কী?
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[90%] sm:max-w-[80%] ${
                      message.role === "user"
                        ? "items-end"
                        : "items-start"
                    }`}
                  >
                    <div className="mb-1.5 px-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                      {message.role === "user"
                        ? "আপনি"
                        : "নালিতাবাড়ী এআই"}
                    </div>

                    <div
                      className={`rounded-2xl border p-4 leading-7 shadow-sm ${
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
              ))
            )}

            {status === "streaming" && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm border border-emerald-100 bg-emerald-50 px-4 py-3 dark:border-emerald-800 dark:bg-emerald-950/50">
                  <div className="flex items-center gap-2 text-sm text-emerald-700 dark:text-emerald-400">
                    <span className="flex gap-1">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500" />
                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-emerald-500"
                        style={{ animationDelay: "150ms" }}
                      />
                      <span
                        className="h-2 w-2 animate-bounce rounded-full bg-emerald-500"
                        style={{ animationDelay: "300ms" }}
                      />
                    </span>

                    <span>উত্তর প্রস্তুত করা হচ্ছে...</span>
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
                onChange={(event) => setInput(event.target.value)}
                placeholder="নালিতাবাড়ী সম্পর্কে কিছু জানতে লিখুন..."
                className="min-h-12 flex-1 rounded-xl border-0 bg-emerald-50 px-4 py-3 text-sm text-slate-800 outline-none ring-0 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500"
                disabled={status === "streaming"}
              />

              <button
                type="submit"
                disabled={
                  status === "streaming" || !input.trim()
                }
                className="min-h-12 rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-6 py-3 font-semibold text-white shadow-md shadow-emerald-500/20 transition-all hover:from-emerald-700 hover:to-green-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "streaming"
                  ? "অপেক্ষা করুন..."
                  : "প্রশ্ন করুন"}
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
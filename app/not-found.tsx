import type { Metadata } from "next";
import { NotFoundAnimation } from "@/components/not-found-animation";

export const metadata: Metadata = {
  title: "404 — পেজটি খুঁজে পাওয়া যায়নি",
  description:
    "দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি খুঁজে পাওয়া যায়নি।",
};

export default function NotFound() {
  return <NotFoundAnimation />;
}
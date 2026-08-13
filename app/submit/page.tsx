"use client";

import * as React from "react";
import {
  ArrowLeft,
  Facebook,
  Globe,
  ImagePlus,
  Instagram,
  Link2,
  Mail,
  MapPin,
  Phone,
  Plus,
  Send,
  Trash2,
  Upload,
  User,
  Youtube,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type SocialLink = {
  platform: string;
  url: string;
};

export default function SubmitPage() {
  const [socialLinks, setSocialLinks] = React.useState<SocialLink[]>([
    { platform: "Facebook", url: "" },
  ]);

  const [phones, setPhones] = React.useState<string[]>([""]);

  const addPhone = () => {
    setPhones((prev) => [...prev, ""]);
  };

  const removePhone = (index: number) => {
    setPhones((prev) => prev.filter((_, i) => i !== index));
  };

  const updatePhone = (index: number, value: string) => {
    setPhones((prev) =>
      prev.map((phone, i) => (i === index ? value : phone))
    );
  };

  const addSocialLink = () => {
    setSocialLinks((prev) => [
      ...prev,
      { platform: "Website", url: "" },
    ]);
  };

  const removeSocialLink = (index: number) => {
    setSocialLinks((prev) => prev.filter((_, i) => i !== index));
  };

  const updateSocialPlatform = (index: number, platform: string) => {
    setSocialLinks((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, platform } : item
      )
    );
  };

  const updateSocialUrl = (index: number, url: string) => {
    setSocialLinks((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, url } : item
      )
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_10%_5%,rgba(34,197,94,0.14),transparent_30%),radial-gradient(circle_at_90%_15%,rgba(16,185,129,0.12),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(20,184,166,0.08),transparent_35%)]
          "
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(34 197 94) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(34 197 94) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute left-1/2 top-0 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      {/* Header */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="mx-auto max-w-4xl">
            <Link
              href="/features"
              className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-emerald-600"
            >
              <ArrowLeft className="size-4" />
              ফিরে যান
            </Link>

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <Plus className="size-3.5" />
                  নতুন তথ্য যোগ করুন
                </div>

                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
                  আপনার এলাকার তথ্য{" "}
                  <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                    আমাদের জানান
                  </span>
                </h1>

                <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
                  আপনার এলাকার ডাক্তার, হাসপাতাল, স্কুল, ব্যবসা,
                  প্রতিষ্ঠান বা অন্য কোনো গুরুত্বপূর্ণ তথ্য আমাদের
                  জানাতে পারেন।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="container mx-auto px-4 py-10 md:py-16">
        <form className="mx-auto max-w-4xl space-y-6">

          {/* Basic Information */}
          <Card className="border-emerald-500/10 bg-background/70 shadow-sm backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Globe className="size-5" />
                </div>

                মৌলিক তথ্য
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">

              <div className="grid gap-5 md:grid-cols-2">
                {/* Name */}
                <div className="space-y-2">
                  <Label>
                    প্রতিষ্ঠানের / স্থানের নাম{" "}
                    <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    placeholder="যেমন: নালিতাবাড়ী উপজেলা স্বাস্থ্য কমপ্লেক্স"
                    className="h-11"
                    required
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label>
                    ক্যাটাগরি <span className="text-red-500">*</span>
                  </Label>

                  <Select required>
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="ক্যাটাগরি নির্বাচন করুন" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="doctor">ডাক্তার</SelectItem>
                      <SelectItem value="hospital">
                        হাসপাতাল / ক্লিনিক
                      </SelectItem>
                      <SelectItem value="school">স্কুল</SelectItem>
                      <SelectItem value="college">কলেজ</SelectItem>
                      <SelectItem value="business">ব্যবসা প্রতিষ্ঠান</SelectItem>
                      <SelectItem value="government">সরকারি প্রতিষ্ঠান</SelectItem>
                      <SelectItem value="emergency">জরুরি সেবা</SelectItem>
                      <SelectItem value="place">দর্শনীয় স্থান</SelectItem>
                      <SelectItem value="other">অন্যান্য</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label>সংক্ষিপ্ত বিবরণ</Label>

                <Textarea
                  placeholder="প্রতিষ্ঠান বা তথ্য সম্পর্কে সংক্ষিপ্ত বিবরণ লিখুন..."
                  className="min-h-32 resize-none"
                />

                <p className="text-xs text-muted-foreground">
                  সর্বোচ্চ ৫০০ অক্ষর
                </p>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <Label>
                  ঠিকানা <span className="text-red-500">*</span>
                </Label>

                <Textarea
                  placeholder="বাড়ি/রোড, বাজার, ইউনিয়ন, উপজেলা, জেলা..."
                  className="min-h-24 resize-none"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="border-emerald-500/10 bg-background/70 shadow-sm backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <MapPin className="size-5" />
                </div>

                অবস্থান ও ম্যাপ
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">

              <div className="space-y-2">
                <Label>Google Maps লিংক</Label>

                <div className="relative">
                  <MapPin className="absolute left-3 top-3 size-4 text-muted-foreground" />

                  <Input
                    placeholder="https://maps.google.com/..."
                    className="h-11 pl-10"
                    type="url"
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  Google Maps থেকে Share → Copy link করে এখানে দিন।
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>অক্ষাংশ (Latitude)</Label>
                  <Input placeholder="যেমন: 25.0886" />
                </div>

                <div className="space-y-2">
                  <Label>দ্রাঘিমাংশ (Longitude)</Label>
                  <Input placeholder="যেমন: 90.1687" />
                </div>
              </div>

              <div className="rounded-xl border border-dashed border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-muted-foreground">
                💡 সঠিক লোকেশন দিলে ব্যবহারকারীরা Google Maps ব্যবহার করে
                সহজেই প্রতিষ্ঠানটি খুঁজে পাবেন।
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-emerald-500/10 bg-background/70 shadow-sm backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Phone className="size-5" />
                </div>

                যোগাযোগের তথ্য
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">

              {/* Phones */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label>
                    ফোন নম্বর <span className="text-red-500">*</span>
                  </Label>

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={addPhone}
                    className="gap-1.5"
                  >
                    <Plus className="size-4" />
                    নম্বর যোগ করুন
                  </Button>
                </div>

                {phones.map((phone, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="relative flex-1">
                      <Phone className="absolute left-3 top-3 size-4 text-muted-foreground" />

                      <Input
                        value={phone}
                        onChange={(e) =>
                          updatePhone(index, e.target.value)
                        }
                        placeholder="০১XXXXXXXXX"
                        className="h-11 pl-10"
                        type="tel"
                        required={index === 0}
                      />
                    </div>

                    {phones.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removePhone(index)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    )}
                  </div>
                ))}
              </div>

              <Separator />

              {/* Email */}
              <div className="space-y-2">
                <Label>ইমেইল</Label>

                <div className="relative">
                  <Mail className="absolute left-3 top-3 size-4 text-muted-foreground" />

                  <Input
                    type="email"
                    placeholder="example@email.com"
                    className="h-11 pl-10"
                  />
                </div>
              </div>

              {/* Website */}
              <div className="space-y-2">
                <Label>ওয়েবসাইট</Label>

                <div className="relative">
                  <Globe className="absolute left-3 top-3 size-4 text-muted-foreground" />

                  <Input
                    type="url"
                    placeholder="https://example.com"
                    className="h-11 pl-10"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="border-emerald-500/10 bg-background/70 shadow-sm backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Link2 className="size-5" />
                </div>

                সামাজিক যোগাযোগ মাধ্যম
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">

              {socialLinks.map((social, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-2 md:flex-row"
                >
                  <Select
                    value={social.platform}
                    onValueChange={(value) =>
                      updateSocialPlatform(index, value)
                    }
                  >
                    <SelectTrigger className="h-11 md:w-48">
                      <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="Facebook">
                        Facebook
                      </SelectItem>
                      <SelectItem value="Instagram">
                        Instagram
                      </SelectItem>
                      <SelectItem value="YouTube">
                        YouTube
                      </SelectItem>
                      <SelectItem value="LinkedIn">
                        LinkedIn
                      </SelectItem>
                      <SelectItem value="TikTok">
                        TikTok
                      </SelectItem>
                      <SelectItem value="Website">
                        Website
                      </SelectItem>
                      <SelectItem value="Other">
                        অন্যান্য
                      </SelectItem>
                    </SelectContent>
                  </Select>

                  <Input
                    value={social.url}
                    onChange={(e) =>
                      updateSocialUrl(index, e.target.value)
                    }
                    placeholder="https://facebook.com/..."
                    className="h-11 flex-1"
                    type="url"
                  />

                  {socialLinks.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeSocialLink(index)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  )}
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                onClick={addSocialLink}
                className="gap-2"
              >
                <Plus className="size-4" />
                আরও লিংক যোগ করুন
              </Button>
            </CardContent>
          </Card>

          {/* Image */}
          <Card className="border-emerald-500/10 bg-background/70 shadow-sm backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <ImagePlus className="size-5" />
                </div>

                ছবি ও মিডিয়া
              </CardTitle>
            </CardHeader>

            <CardContent>
              <label
                htmlFor="image"
                className="
                  flex cursor-pointer flex-col items-center
                  justify-center rounded-2xl
                  border-2 border-dashed
                  border-emerald-500/20
                  bg-emerald-500/[0.03]
                  px-6 py-12
                  text-center
                  transition-colors
                  hover:border-emerald-500/40
                  hover:bg-emerald-500/[0.06]
                "
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <Upload className="size-6" />
                </div>

                <h3 className="mt-4 font-semibold">
                  ছবি আপলোড করুন
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  ছবি এখানে Drag & Drop করুন অথবা ক্লিক করে নির্বাচন করুন
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  JPG, PNG বা WEBP · সর্বোচ্চ ৫MB
                </p>

                <input
                  id="image"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  className="hidden"
                />
              </label>
            </CardContent>
          </Card>

          {/* Additional Info */}
          <Card className="border-emerald-500/10 bg-background/70 shadow-sm backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <Link2 className="size-5" />
                </div>

                অতিরিক্ত তথ্য
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>খোলার সময়</Label>
                  <Input
                    placeholder="সকাল ৯টা - রাত ৮টা"
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label>সাপ্তাহিক বন্ধ</Label>
                  <Input
                    placeholder="শুক্রবার"
                    className="h-11"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>অতিরিক্ত তথ্য</Label>

                <Textarea
                  placeholder="প্রয়োজনীয় অন্য কোনো তথ্য এখানে লিখুন..."
                  className="min-h-28 resize-none"
                />
              </div>
            </CardContent>
          </Card>

          {/* Submitter */}
          <Card className="border-emerald-500/10 bg-background/70 shadow-sm backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <User className="size-5" />
                </div>

                তথ্য প্রদানকারীর তথ্য
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">

              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>
                    আপনার নাম <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    placeholder="আপনার পূর্ণ নাম"
                    className="h-11"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>
                    আপনার ফোন নম্বর <span className="text-red-500">*</span>
                  </Label>

                  <Input
                    placeholder="০১XXXXXXXXX"
                    className="h-11"
                    type="tel"
                    required
                  />
                </div>
              </div>

              <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/5 p-4 text-sm leading-6 text-muted-foreground">
                🔒 আপনার ব্যক্তিগত তথ্য প্রকাশ্যে দেখানো হবে না।
                তথ্য যাচাইয়ের প্রয়োজনে শুধুমাত্র প্রশাসন আপনার সাথে
                যোগাযোগ করতে পারে।
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="rounded-2xl border border-emerald-500/15 bg-background/70 p-5 shadow-sm backdrop-blur-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div className="text-sm text-muted-foreground">
                <p>
                  <span className="text-red-500">*</span>{" "}
                  চিহ্নিত তথ্যগুলো অবশ্যই পূরণ করতে হবে।
                </p>

                <p className="mt-1">
                  জমা দেওয়ার পর তথ্য যাচাই করে প্রকাশ করা হবে।
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                className="
                  gap-2
                  bg-gradient-to-r
                  from-green-600
                  via-emerald-600
                  to-teal-600
                  text-white
                  shadow-lg
                  shadow-emerald-500/20
                  hover:opacity-95
                "
              >
                <Send className="size-4" />
                তথ্য জমা দিন
              </Button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
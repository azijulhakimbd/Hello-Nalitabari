
import { NextResponse } from "next/server"
import { getGoogleNews } from "@/lib/google-news"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"



export async function GET() {
  try {
    const items = await getGoogleNews({
      limit: 30,
      fallbackImage: "/images/news-placeholder.jpg",
    })

    const news = items.map((item, index) => ({
      id: item.id,

      title: item.title,

      excerpt: "",

     
      date: item.publishedAt,

      publishedAt: item.publishedAt,

      category: detectCategory(
        item.title,
        "",
      ),

      source: item.source || "Google News",

      
      sourceUrl: "",

      location: detectLocation(
        item.title,
        "",
      ),

      image:
        item.image ||
        "/images/news-placeholder.jpg",

    
      featured: index === 0,

     
      link: item.link,

     
      originalLink: item.link,

      
      guid: item.id,
    }))

    return NextResponse.json(
      {
        success: true,
        news,
        count: news.length,
        updatedAt: new Date().toISOString(),
      },
      {
        status: 200,

        headers: {
          "Cache-Control":
            "public, s-maxage=900, stale-while-revalidate=1800",
        },
      },
    )
  } catch (error) {
    console.error(
      "Google News API error:",
      error,
    )

    return NextResponse.json(
      {
        success: false,
        news: [],
        count: 0,
        message:
          "সর্বশেষ সংবাদ সংগ্রহ করা সম্ভব হয়নি।",
      },
      {
        status: 500,

        headers: {
          "Cache-Control":
            "public, s-maxage=300, stale-while-revalidate=600",
        },
      },
    )
  }
}

/*
 * CATEGORY DETECTION
 */

function detectCategory(
  title: string,
  description: string,
):
  | "স্থানীয় খবর"
  | "দুর্যোগ"
  | "বন্যা"
  | "যোগাযোগ"
  | "সড়ক দুর্ঘটনা"
  | "অন্যান্য" {
  const text = normalizeText(
    `${title} ${description}`,
  )

  /*
   * FLOOD
   */

  if (
    containsAny(text, [
      "বন্যা",
      "বন্যায়",
      "বন্যার",
      "পানিবন্দি",
      "পানিতে",
      "পাহাড়ি ঢল",
      "পাহাড়ি ঢলে",
      "ঢল",
      "জলাবদ্ধতা",
      "জলোচ্ছ্বাস",
      "পানি বৃদ্ধি",
      "নদীর পানি",
      "নদীর পানি বৃদ্ধি",
    ])
  ) {
    return "বন্যা"
  }

  /*
   * DISASTER / WEATHER
   */

  if (
    containsAny(text, [
      "দুর্যোগ",
      "ঘূর্ণিঝড়",
      "ঘূর্ণিঝড়",
      "ঝড়",
      "ঝড়",
      "কালবৈশাখী",
      "ভূমিধস",
      "ভারি বৃষ্টি",
      "ভারী বৃষ্টি",
      "বজ্রপাত",
      "বজ্রপাতে",
      "শিলাবৃষ্টি",
    ])
  ) {
    return "দুর্যোগ"
  }

  /*
   * ROAD ACCIDENT
   */

  if (
    containsAny(text, [
      "সড়ক দুর্ঘটনা",
      "সড়ক দুর্ঘটনা",
      "সড়ক দুর্ঘটনায়",
      "সড়ক দুর্ঘটনায়",
      "দুর্ঘটনা",
      "দুর্ঘটনায়",
      "বাস দুর্ঘটনা",
      "ট্রাক দুর্ঘটনা",
      "মোটরসাইকেল দুর্ঘটনা",
      "মাইক্রোবাস দুর্ঘটনা",
      "নিহত",
      "নিহতের",
      "আহত",
    ])
  ) {
    return "সড়ক দুর্ঘটনা"
  }

  /*
   * TRANSPORT / ROAD
   */

  if (
    containsAny(text, [
      "সড়ক",
      "সড়ক",
      "রাস্তা",
      "মহাসড়ক",
      "মহাসড়ক",
      "ব্রিজ",
      "ব্রিজের",
      "সেতু",
      "সেতুর",
      "যোগাযোগ",
      "যাতায়াত",
      "যাতায়াত",
      "ভেঙে গেছে",
      "ভেঙে পড়েছে",
      "ভেঙে পড়েছে",
      "সংস্কার",
      "নির্মাণ",
    ])
  ) {
    return "যোগাযোগ"
  }

  /*
   * LOCAL
   */

  if (
    containsAny(text, [
      "নালিতাবাড়ী",
      "নালিতাবাড়ির",
      "নালিতাবাড়ীতে",
      "নালিতাবাড়ী উপজেলা",
      "নালিতাবাড়ী",
      "নালিতাবাড়ির",
      "নালিতাবাড়ীতে",
      "নালিতাবাড়ী উপজেলা",
      "নালিতাবাড়ি",
      "শেরপুর",
      "শেরপুরের",
      "শেরপুরে",
    ])
  ) {
    return "স্থানীয় খবর"
  }

  return "অন্যান্য"
}

/*
 * LOCATION DETECTION
 */

function detectLocation(
  title: string,
  description: string,
): string {
  const text = normalizeText(
    `${title} ${description}`,
  )

  if (
    containsAny(text, [
      "নালিতাবাড়ী",
      "নালিতাবাড়ির",
      "নালিতাবাড়ীতে",
      "নালিতাবাড়ী উপজেলা",
      "নালিতাবাড়ী",
      "নালিতাবাড়ির",
      "নালিতাবাড়ীতে",
      "নালিতাবাড়ী উপজেলা",
      "নালিতাবাড়ি",
    ])
  ) {
    return "নালিতাবাড়ী"
  }

  if (
    containsAny(text, [
      "শেরপুর",
      "শেরপুরের",
      "শেরপুরে",
      "শেরপুর জেলা",
    ])
  ) {
    return "শেরপুর"
  }

  return "নালিতাবাড়ী"
}

/*
 * TEXT NORMALIZATION
 */

function normalizeText(
  text: string,
): string {
  return text
    .trim()
    .toLocaleLowerCase("bn-BD")
    .replace(/\s+/g, " ")
}

/*
 * STRING HELPER
 */

function containsAny(
  text: string,
  keywords: string[],
): boolean {
  return keywords.some((keyword) =>
    text.includes(
      keyword.toLocaleLowerCase("bn-BD"),
    ),
  )
}

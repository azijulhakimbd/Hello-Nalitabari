import { XMLParser } from "fast-xml-parser";

export type NewsItem = {
  id: string;
  title: string;
  link: string;
  publishedAt: string;
  source: string;
  image: string;
};

type GetNewsOptions = {
  limit?: number;
  fallbackImage?: string;
};

const GOOGLE_NEWS_QUERY =
  "Nalitabari OR নালিতাবাড়ী OR নালিতাবাড়ি";

const GOOGLE_NEWS_FEED =
  `https://news.google.com/rss/search?q=${encodeURIComponent(
    GOOGLE_NEWS_QUERY,
  )}&hl=bn&gl=BD&ceid=BD:bn`;

const DEFAULT_FALLBACK_IMAGE =
  "/images/news-placeholder.jpg";

/**
 * Extract an image from a Google News RSS item.
 */
function extractImage(item: any): string | null {
  /*
   * media:content
   */
  const mediaContent = item?.["media:content"];

  if (mediaContent) {
    if (typeof mediaContent === "string") {
      return mediaContent;
    }

    if (mediaContent?.["@_url"]) {
      return mediaContent["@_url"];
    }
  }

  /*
   * media:thumbnail
   */
  const mediaThumbnail = item?.["media:thumbnail"];

  if (mediaThumbnail) {
    if (typeof mediaThumbnail === "string") {
      return mediaThumbnail;
    }

    if (mediaThumbnail?.["@_url"]) {
      return mediaThumbnail["@_url"];
    }
  }

  /*
   * enclosure
   */
  const enclosure = item?.enclosure;

  if (enclosure?.["@_url"]) {
    return enclosure["@_url"];
  }

  /*
   * Try image from description HTML.
   */
  const description =
    typeof item?.description === "string"
      ? item.description
      : "";

  if (description) {
    const imageMatch = description.match(
      /<img[^>]+src=["']([^"']+)["']/i,
    );

    if (imageMatch?.[1]) {
      return imageMatch[1];
    }
  }

  return null;
}

/**
 * Convert RSS source value into a string.
 */
function extractSource(item: any): string {
  const source = item?.source;

  if (!source) {
    return "Google News";
  }

  if (typeof source === "string") {
    return source;
  }

  if (typeof source?.["#text"] === "string") {
    return source["#text"];
  }

  return "Google News";
}

/**
 * Convert RSS link into a string.
 */
function extractLink(item: any): string {
  if (typeof item?.link === "string") {
    return item.link;
  }

  if (typeof item?.link?.["#text"] === "string") {
    return item.link["#text"];
  }

  return "#";
}

/**
 * Convert RSS GUID into a stable ID.
 */
function extractId(item: any, index: number): string {
  const guid = item?.guid;

  if (typeof guid === "string") {
    return guid;
  }

  if (typeof guid?.["#text"] === "string") {
    return guid["#text"];
  }

  const link = extractLink(item);

  return `${link}-${index}`;
}

/**
 * Fetch Google News RSS.
 *
 * This is the main function used by /api/news.
 */
export async function getGoogleNews(
  options: GetNewsOptions = {},
): Promise<NewsItem[]> {
  const {
    limit = 20,
    fallbackImage = DEFAULT_FALLBACK_IMAGE,
  } = options;

  try {
    const response = await fetch(GOOGLE_NEWS_FEED, {
      headers: {
        Accept:
          "application/rss+xml, application/xml, text/xml",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/131 Safari/537.36",
      },

      /*
       * Keep the news fresh.
       */
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Google News request failed: ${response.status}`,
      );
    }

    const xml = await response.text();

    if (!xml) {
      throw new Error("Google News returned an empty response");
    }

    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
      trimValues: true,
    });

    const parsed = parser.parse(xml);

    const rawItems = parsed?.rss?.channel?.item;

    if (!rawItems) {
      return [];
    }

    const items = Array.isArray(rawItems)
      ? rawItems
      : [rawItems];

    return items
      .slice(0, limit)
      .map((item: any, index: number): NewsItem => {
        const image =
          extractImage(item) || fallbackImage;

        return {
          id: extractId(item, index),

          title:
            typeof item?.title === "string"
              ? item.title
              : "সংবাদ",

          link: extractLink(item),

          publishedAt:
            typeof item?.pubDate === "string"
              ? item.pubDate
              : new Date().toISOString(),

          source: extractSource(item),

          image,
        };
      });
  } catch (error) {
    console.error(
      "Google News error:",
      error,
    );

    return [];
  }
}

/**
 * Convenience function for the Nalitabari homepage.
 */
export async function getNalitabariNews(
  options: GetNewsOptions = {},
): Promise<NewsItem[]> {
  return getGoogleNews({
    limit: 6,
    ...options,
  });
}
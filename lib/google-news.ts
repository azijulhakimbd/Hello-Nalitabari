

import {
  XMLParser,
} from "fast-xml-parser"

/* 
   TYPES
 */

export type GoogleNewsItem = {
  id: string
  title: string
  description: string
  link: string
  originalLink: string
  source: string
  sourceUrl: string
  publishedAt: string
  image: string
  guid: string
  category?: string
}

export type GoogleNewsFeedOptions = {
  limit?: number
  fallbackImage?: string
}

/* 
   CONSTANTS
  */

const DEFAULT_IMAGE =
  "/images/news-placeholder.jpg"

const GOOGLE_NEWS_HOSTS = new Set([
  "news.google.com",
  "www.news.google.com",
])

const TRACKING_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "oc",
  "ved",
  "ei",
]

/* 
   XML PARSER
  */

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  textNodeName: "#text",
  trimValues: true,
  parseTagValue: false,
  parseAttributeValue: false,
  isArray: (
    name,
  ) =>
    name === "item" ||
    name === "media:content" ||
    name === "media:thumbnail",
})

/* 
   URL HELPERS
  */

function isValidHttpUrl(
  value: string,
): boolean {
  try {
    const url = new URL(value)

    return (
      url.protocol === "http:" ||
      url.protocol === "https:"
    )
  } catch {
    return false
  }
}

function normalizeUrl(
  value: string,
): string {
  if (!value) return ""

  try {
    const url = new URL(value.trim())

    for (const param of TRACKING_PARAMS) {
      url.searchParams.delete(param)
    }

    return url.toString()
  } catch {
    return value.trim()
  }
}

function isGoogleNewsUrl(
  value: string,
): boolean {
  try {
    const url = new URL(value)

    return GOOGLE_NEWS_HOSTS.has(
      url.hostname.toLowerCase(),
    )
  } catch {
    return false
  }
}

/* 
   GOOGLE NEWS REDIRECT
  */

function extractUrlFromGoogleNewsUrl(
  value: string,
): string | null {
  if (
    !value ||
    !isGoogleNewsUrl(value)
  ) {
    return null
  }

  try {
    const url = new URL(value)

    const candidates = [
      url.searchParams.get("url"),
      url.searchParams.get("u"),
      url.searchParams.get("q"),
      url.searchParams.get("redirect"),
      url.searchParams.get("target"),
    ]

    for (const candidate of candidates) {
      if (!candidate) continue

      try {
        const decoded =
          decodeURIComponent(candidate)

        if (
          isValidHttpUrl(decoded) &&
          !isGoogleNewsUrl(decoded)
        ) {
          return normalizeUrl(decoded)
        }
      } catch {
        // Ignore malformed URL.
      }

      if (
        isValidHttpUrl(candidate) &&
        !isGoogleNewsUrl(candidate)
      ) {
        return normalizeUrl(candidate)
      }
    }

    return null
  } catch {
    return null
  }
}

async function resolveGoogleNewsRedirect(
  value: string,
): Promise<string> {
  if (!value) return ""

  if (!isGoogleNewsUrl(value)) {
    return normalizeUrl(value)
  }

  const extracted =
    extractUrlFromGoogleNewsUrl(value)

  if (extracted) {
    return extracted
  }

  try {
    const response = await fetch(value, {
      method: "HEAD",
      redirect: "follow",
      cache: "no-store",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (compatible; NalitabariNewsBot/1.0)",
      },
    })

    const finalUrl = response.url

    if (
      finalUrl &&
      isValidHttpUrl(finalUrl) &&
      !isGoogleNewsUrl(finalUrl)
    ) {
      return normalizeUrl(finalUrl)
    }
  } catch {
    // Best effort only.
  }

  return normalizeUrl(value)
}

/* 
   HTML HELPERS
  */

function decodeHtml(
  value: string,
): string {
  if (!value) return ""

  return value
    .replace(
      /&amp;/gi,
      "&",
    )
    .replace(
      /&quot;/gi,
      '"',
    )
    .replace(
      /&#39;/gi,
      "'",
    )
    .replace(
      /&apos;/gi,
      "'",
    )
    .replace(
      /&lt;/gi,
      "<",
    )
    .replace(
      /&gt;/gi,
      ">",
    )
    .replace(
      /&#x27;/gi,
      "'",
    )
}

function stripHtml(
  value: string,
): string {
  if (!value) return ""

  return decodeHtml(value)
    .replace(
      /<script[\s\S]*?<\/script>/gi,
      "",
    )
    .replace(
      /<style[\s\S]*?<\/style>/gi,
      "",
    )
    .replace(
      /<[^>]*>/g,
      " ",
    )
    .replace(
      /\s+/g,
      " ",
    )
    .trim()
}

/* 
   IMAGE HELPERS
  */

function normalizeImageUrl(
  value: string,
): string | null {
  if (!value) return null

  let image =
    decodeHtml(value.trim())

  image = image.replace(
    /^['"]|['"]$/g,
    "",
  )

  if (!image) return null

  if (image.startsWith("//")) {
    image = `https:${image}`
  }

  if (!isValidHttpUrl(image)) {
    return null
  }

  try {
    const url = new URL(image)

    const pathname =
      url.pathname.toLowerCase()

    if (
      pathname.endsWith(".svg") ||
      pathname.endsWith(".ico") ||
      pathname.endsWith(".html")
    ) {
      return null
    }

    return normalizeUrl(
      url.toString(),
    )
  } catch {
    return null
  }
}

function extractNestedImageUrl(
  value: string,
): string | null {
  if (!value) return null

  const direct =
    normalizeImageUrl(value)

  if (direct) {
    return direct
  }

  try {
    const url = new URL(value)

    const candidates = [
      url.searchParams.get("url"),
      url.searchParams.get("image"),
      url.searchParams.get("img"),
      url.searchParams.get("src"),
    ]

    for (const candidate of candidates) {
      if (!candidate) continue

      try {
        const decoded =
          decodeURIComponent(
            candidate,
          )

        const image =
          normalizeImageUrl(decoded)

        if (image) {
          return image
        }
      } catch {
        // Continue.
      }
    }
  } catch {
    // Not a URL.
  }

  return null
}

function extractImageFromHtml(
  html: string,
): string | null {
  if (!html) return null

  const imageTags =
    html.match(
      /<img\b[^>]*>/gi,
    )

  if (!imageTags) {
    return null
  }

  for (const tag of imageTags) {
    const attributes: Record<
      string,
      string
    > = {}

    const attributeRegex =
      /([a-zA-Z_:][-a-zA-Z0-9_:.]*)\s*=\s*(?:"([^"]*)"|'([^']*)')/g

    let match: RegExpExecArray | null

    while (
      (match =
        attributeRegex.exec(
          tag,
        )) !== null
    ) {
      attributes[
        match[1].toLowerCase()
      ] =
        match[2] ??
        match[3] ??
        ""
    }

    const candidates = [
      attributes.src,
      attributes["data-src"],
      attributes["data-lazy-src"],
      attributes["data-original"],
    ]

    for (const candidate of candidates) {
      if (!candidate) continue

      const image =
        normalizeImageUrl(
          candidate,
        )

      if (image) {
        return image
      }
    }

    if (attributes.srcset) {
      const srcset =
        attributes.srcset
          .split(",")
          .map(
            (item) =>
              item
                .trim()
                .split(/\s+/)[0],
          )
          .filter(Boolean)

      for (const candidate of srcset) {
        const image =
          normalizeImageUrl(
            candidate,
          )

        if (image) {
          return image
        }
      }
    }
  }

  return null
}

/* 
   SOURCE HELPERS
  */

function cleanSourceName(
  value: string,
): string {
  if (!value) return ""

  return stripHtml(value)
    .replace(
      /\s*-\s*Google News.*$/i,
      "",
    )
    .replace(
      /\s*\|\s*Google News.*$/i,
      "",
    )
    .replace(
      /\s+Google News$/i,
      "",
    )
    .trim()
}

function getHostname(
  value: string,
): string {
  if (!value) return ""

  try {
    return new URL(
      value,
    ).hostname.replace(
      /^www\./,
      "",
    )
  } catch {
    return ""
  }
}

function sourceNameFromUrl(
  value: string,
): string {
  const hostname =
    getHostname(value)

  if (!hostname) return ""

  const parts =
    hostname.split(".")

  if (parts.length < 2) {
    return hostname
  }

  const name =
    parts[parts.length - 2]

  return name
    .replace(
      /[-_]+/g,
      " ",
    )
    .replace(
      /\b\w/g,
      (char) =>
        char.toUpperCase(),
    )
}

/* 
   RSS VALUE HELPERS
  */

function asString(
  value: unknown,
): string {
  if (value === null || value === undefined) {
    return ""
  }

  if (typeof value === "string") {
    return value.trim()
  }

  if (
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return String(value)
  }

  if (
    typeof value === "object"
  ) {
    const object =
      value as Record<
        string,
        unknown
      >

    if (
      typeof object[
        "#text"
      ] === "string"
    ) {
      return object[
        "#text"
      ].trim()
    }
  }

  return ""
}

function asArray<T>(
  value: T | T[] | undefined,
): T[] {
  if (value === undefined) {
    return []
  }

  return Array.isArray(value)
    ? value
    : [value]
}

/* 
   RSS IMAGE EXTRACTION
  */

function extractRSSImage(
  item: Record<
    string,
    unknown
  >,
  fallbackImage: string,
): string {
  /*
   * Priority:
   *
   * 1. media:content
   * 2. media:thumbnail
   * 3. enclosure
   * 4. content:encoded
   * 5. description
   */

  const mediaContent =
    asArray(
      item[
        "media:content"
      ] as
        | Record<
            string,
            unknown
          >
        | Record<
            string,
            unknown
          >[]
        | undefined,
    )

  for (const media of mediaContent) {
    const url =
      asString(
        media?.[
          "@_url"
        ],
      )

    const image =
      extractNestedImageUrl(
        url,
      )

    if (image) {
      return image
    }
  }

  const thumbnails =
    asArray(
      item[
        "media:thumbnail"
      ] as
        | Record<
            string,
            unknown
          >
        | Record<
            string,
            unknown
          >[]
        | undefined,
    )

  for (const thumbnail of thumbnails) {
    const url =
      asString(
        thumbnail?.[
          "@_url"
        ],
      )

    const image =
      extractNestedImageUrl(
        url,
      )

    if (image) {
      return image
    }
  }

  const enclosure =
    item.enclosure as
      | Record<
          string,
          unknown
        >
      | undefined

  if (enclosure) {
    const url =
      asString(
        enclosure[
          "@_url"
        ],
      )

    const type =
      asString(
        enclosure[
          "@_type"
        ],
      ).toLowerCase()

    if (
      url &&
      (!type ||
        type.startsWith(
          "image/",
        ))
    ) {
      const image =
        extractNestedImageUrl(
          url,
        )

      if (image) {
        return image
      }
    }
  }

  const encoded =
    asString(
      item[
        "content:encoded"
      ],
    )

  const encodedImage =
    extractImageFromHtml(
      encoded,
    )

  if (encodedImage) {
    return encodedImage
  }

  const description =
    asString(
      item.description,
    )

  const descriptionImage =
    extractImageFromHtml(
      description,
    )

  if (descriptionImage) {
    return descriptionImage
  }

  return fallbackImage
}

/* 
   RSS FETCH + PARSE
  */

export async function getGoogleNews(
  feedUrl: string,
  options: GoogleNewsFeedOptions = {},
): Promise<GoogleNewsItem[]> {
  const {
    limit = 30,
    fallbackImage =
      DEFAULT_IMAGE,
  } = options

  if (!feedUrl) {
    throw new Error(
      "Google News RSS feed URL is required.",
    )
  }

  const response =
    await fetch(
      feedUrl,
      {
        headers: {
          Accept:
            "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
          "User-Agent":
            "Mozilla/5.0 (compatible; NalitabariNewsBot/1.0)",
        },

        next: {
          revalidate: 900,
        },
      },
    )

  if (!response.ok) {
    throw new Error(
      `Google News RSS request failed: ${response.status} ${response.statusText}`,
    )
  }

  const xml =
    await response.text()

  if (!xml.trim()) {
    throw new Error(
      "Google News returned an empty RSS response.",
    )
  }

  let parsed: any

  try {
    parsed = parser.parse(xml)
  } catch (error) {
    console.error(
      "RSS XML parse error:",
      error,
    )

    throw new Error(
      "Google News RSS XML could not be parsed.",
    )
  }

  const rawItems =
    asArray(
      parsed?.rss?.channel?.item,
    ) as Record<
      string,
      unknown
    >[]

  if (!rawItems.length) {
    return []
  }

  const results: GoogleNewsItem[] =
    []

  for (
    const item of rawItems.slice(
      0,
      limit,
    )
  ) {
    const title =
      stripHtml(
        asString(
          item.title,
        ),
      )

    if (!title) {
      continue
    }

    const googleLink =
      asString(
        item.link,
      )

    const originalLink =
      await resolveGoogleNewsRedirect(
        googleLink,
      )

    const description =
      stripHtml(
        asString(
          item.description,
        ),
      )

    const guid =
      asString(
        item.guid,
      ) ||
      googleLink ||
      title

    /* -------------------------------------------------------
       SOURCE
    ------------------------------------------------------- */

    const sourceValue =
      item.source

    let source = ""

    let sourceUrl = ""

    if (
      sourceValue &&
      typeof sourceValue ===
        "object"
    ) {
      const sourceObject =
        sourceValue as Record<
          string,
          unknown
        >

      source =
        cleanSourceName(
          asString(
            sourceObject[
              "#text"
            ],
          ),
        )

      sourceUrl =
        asString(
          sourceObject[
            "@_url"
          ],
        )
    } else {
      source =
        cleanSourceName(
          asString(
            sourceValue,
          ),
        )
    }

    if (
      !source &&
      sourceUrl
    ) {
      source =
        sourceNameFromUrl(
          sourceUrl,
        )
    }

    if (
      !source &&
      originalLink
    ) {
      source =
        sourceNameFromUrl(
          originalLink,
        )
    }

    if (!source) {
      source = "Google News"
    }

    const hostname =
      getHostname(
        originalLink,
      )

    if (!sourceUrl && hostname) {
      sourceUrl =
        `https://${hostname}`
    }

    /* -------------------------------------------------------
       IMAGE
    ------------------------------------------------------- */

    const image =
      extractRSSImage(
        item,
        fallbackImage,
      )

    /* -------------------------------------------------------
       DATE
    ------------------------------------------------------- */

    const publishedAt =
      asString(
        item.pubDate,
      )

    /* -------------------------------------------------------
       RESULT
    ------------------------------------------------------- */

    results.push({
      id: createNewsId(
        guid,
      ),

      title,

      description,

      link:
        originalLink ||
        googleLink,

      originalLink:
        googleLink,

      source,

      sourceUrl,

      publishedAt,

      image,

      guid,
    })
  }

  return results
}

/* 
   NALITABARI NEWS
  */

export async function getNalitabariNews(
  options: GoogleNewsFeedOptions = {},
): Promise<GoogleNewsItem[]> {
  const query = encodeURIComponent(
    "Nalitabari OR নালিতাবাড়ী OR নালিতাবাড়ী OR Sherpur",
  )

  const feedUrl =
    `https://news.google.com/rss/search?q=${query}&hl=bn&gl=BD&ceid=BD:bn`

  return getGoogleNews(
    feedUrl,
    options,
  )
}

/* 
   ID
  */

function createNewsId(
  value: string,
): string {
  let hash = 0

  for (
    let i = 0;
    i < value.length;
    i++
  ) {
    hash =
      (hash << 5) -
      hash +
      value.charCodeAt(i)

    hash |= 0
  }

  return `google-news-${Math.abs(
    hash,
  )}`
}
export type UnionServiceCategory =
  | "নাগরিক সেবা"
  | "নিবন্ধন"
  | "সনদ"
  | "কর ও লাইসেন্স"
  | "সামাজিক সেবা"
  | "ভূমি সেবা"
  | "ডিজিটাল সেবা"
  | "গ্রাম আদালত"
  | "কৃষি"
  | "স্বাস্থ্য"
  | "শিক্ষা"
  | "অন্যান্য"

export type UnionService = {
  title: string
  description: string
  category: UnionServiceCategory
}

export type UnionInstitution = {
  name: string
  type: string
  description?: string
  phone?: string
}

export type UnionContact = {
  chairman?: string
  chairmanPhone?: string
  chairmanEmail?: string

  secretary?: string
  secretaryPhone?: string
  secretaryEmail?: string

  officePhone?: string
  mobile?: string
  email?: string
  address?: string
}

export type UnionHealthFacility = {
  name: string
  type: "ইউনিয়ন স্বাস্থ্য কেন্দ্র" | "ইউনিয়ন উপ-স্বাস্থ্য কেন্দ্র"
  code?: string
  email?: string
}

export type UnionSource = {
  title: string
  url: string
  type: "official-union" | "government" | "health"
  note?: string
}

export type UnionData = {
  id: number
  slug: string

  nameBn: string
  nameEn: string

  district: string
  upazila: string
  division: string

  description: string

  officialPortal: string

  established?: string
  area?: string
  population?: string
  malePopulation?: string
  femalePopulation?: string

  wards?: number
  villages?: number
  mouzas?: number

  officeLand?: string

  address?: string
  officePhone?: string
  mobile?: string
  email?: string

  chairman?: string
  chairmanPhone?: string
  chairmanEmail?: string

  secretary?: string
  secretaryPhone?: string
  secretaryEmail?: string

  administrator?: string
  administratorPhone?: string

  image: string

  latitude?: number
  longitude?: number

  healthFacilities: UnionHealthFacility[]

  services: UnionService[]

  institutions: UnionInstitution[]

  importantPlaces: string[]

  markets: string[]

  rivers: string[]

  portalSections: string[]

  emergencyContacts: {
    name: string
    number: string
  }[]

  governmentLinks: {
    title: string
    url: string
  }[]

  sources: UnionSource[]
}



const commonServices: UnionService[] = [
  {
    title: "জন্ম নিবন্ধন",
    description:
      "জন্ম নিবন্ধন সংক্রান্ত আবেদন, রেজিস্টার ও তথ্য সহায়তা।",
    category: "নিবন্ধন",
  },
  {
    title: "মৃত্যু নিবন্ধন",
    description:
      "মৃত্যু নিবন্ধন সংক্রান্ত আবেদন, রেজিস্টার ও তথ্য সহায়তা।",
    category: "নিবন্ধন",
  },
  {
    title: "বিবাহ নিবন্ধন সংক্রান্ত তথ্য",
    description:
      "বিবাহ নিবন্ধন ও সংশ্লিষ্ট রেজিস্টার/ফরম সম্পর্কে তথ্য।",
    category: "নিবন্ধন",
  },
  {
    title: "নাগরিক সনদ",
    description:
      "নাগরিকত্ব ও স্থানীয় পরিচয় সংক্রান্ত সনদ সম্পর্কে তথ্য।",
    category: "সনদ",
  },
  {
    title: "জাতীয়তা সনদ",
    description:
      "জাতীয়তা/নাগরিকত্ব প্রত্যয়ন সংক্রান্ত তথ্য।",
    category: "সনদ",
  },
  {
    title: "ওয়ারিশ সনদ",
    description:
      "ওয়ারিশ সনদ সংক্রান্ত আবেদন ও তথ্য।",
    category: "সনদ",
  },
  {
    title: "চারিত্রিক সনদ",
    description:
      "চারিত্রিক সনদ সংক্রান্ত তথ্য ও আবেদন সহায়তা।",
    category: "সনদ",
  },
  {
    title: "পারিবারিক সনদ",
    description:
      "পারিবারিক পরিচয় ও সনদ সংক্রান্ত তথ্য।",
    category: "সনদ",
  },
  {
    title: "ট্রেড লাইসেন্স",
    description:
      "ব্যবসা ও স্থানীয় লাইসেন্স সংক্রান্ত তথ্য।",
    category: "কর ও লাইসেন্স",
  },
  {
    title: "স্থানীয় কর ও হোল্ডিং",
    description:
      "হোল্ডিং, স্থানীয় কর ও সংশ্লিষ্ট ফি সম্পর্কে তথ্য।",
    category: "কর ও লাইসেন্স",
  },
  {
    title: "গ্রাম আদালত",
    description:
      "গ্রাম আদালত, মামলা আবেদন ও বিধিমালা সংক্রান্ত তথ্য।",
    category: "গ্রাম আদালত",
  },
  {
    title: "ভূমি উন্নয়ন কর",
    description:
      "ভূমি উন্নয়ন কর ও ভূমি সংক্রান্ত সরকারি তথ্যের জন্য নির্দেশনা।",
    category: "ভূমি সেবা",
  },
  {
    title: "খাস জমি সংক্রান্ত তথ্য",
    description:
      "খাস জমি ও ভূমি প্রশাসন সংক্রান্ত সরকারি তথ্য।",
    category: "ভূমি সেবা",
  },
  {
    title: "হাট-বাজার সংক্রান্ত তথ্য",
    description:
      "স্থানীয় হাট-বাজার ও ইজারা সংক্রান্ত তথ্য।",
    category: "ভূমি সেবা",
  },
  {
    title: "ভিজিএফ",
    description:
      "ভিজিএফ কর্মসূচি ও সুবিধাভোগী সংক্রান্ত তথ্য।",
    category: "সামাজিক সেবা",
  },
  {
    title: "ভিজিডি",
    description:
      "ভিজিডি কর্মসূচি ও সুবিধাভোগী সংক্রান্ত তথ্য।",
    category: "সামাজিক সেবা",
  },
  {
    title: "বয়স্ক ভাতা",
    description:
      "বয়স্ক ভাতা সংক্রান্ত সরকারি কর্মসূচির তথ্য।",
    category: "সামাজিক সেবা",
  },
  {
    title: "বিধবা ভাতা",
    description:
      "বিধবা ও স্বামী নিগৃহীতা ভাতা সংক্রান্ত তথ্য।",
    category: "সামাজিক সেবা",
  },
  {
    title: "প্রতিবন্ধী ভাতা",
    description:
      "প্রতিবন্ধী ভাতা ও সংশ্লিষ্ট সামাজিক নিরাপত্তা কর্মসূচির তথ্য।",
    category: "সামাজিক সেবা",
  },
  {
    title: "মাতৃত্বকালীন ভাতা",
    description:
      "মাতৃত্বকালীন ভাতা কর্মসূচি সংক্রান্ত তথ্য।",
    category: "সামাজিক সেবা",
  },
  {
    title: "ত্রাণ ও পুনর্বাসন",
    description:
      "ত্রাণ, পুনর্বাসন ও দুর্যোগ সহায়তা সংক্রান্ত তথ্য।",
    category: "সামাজিক সেবা",
  },
  {
    title: "ডিজিটাল সেন্টার",
    description:
      "ইউনিয়ন ডিজিটাল সেন্টারের বিভিন্ন ই-সেবা সম্পর্কে তথ্য।",
    category: "ডিজিটাল সেবা",
  },
  {
    title: "সরকারি ফরম",
    description:
      "বিভিন্ন সরকারি ফরম ও আবেদনপত্রের তথ্য/ডাউনলোড সুবিধা।",
    category: "ডিজিটাল সেবা",
  },
  {
    title: "কৃষি তথ্য",
    description:
      "কৃষি তথ্য, সার ডিলার ও কৃষি উৎপাদন সংক্রান্ত সরকারি তথ্য।",
    category: "কৃষি",
  },
  {
    title: "স্বাস্থ্য সেবা",
    description:
      "ইউনিয়ন পর্যায়ের স্বাস্থ্যকেন্দ্র, স্বাস্থ্যকর্মী ও স্বাস্থ্য কর্মসূচির তথ্য।",
    category: "স্বাস্থ্য",
  },
]

const emergencyContacts = [
  {
    name: "সরকারি তথ্য ও সেবা",
    number: "333",
  },
  {
    name: "জাতীয় জরুরি সেবা",
    number: "999",
  },
  {
    name: "ফায়ার সার্ভিস",
    number: "102",
  },
  {
    name: "নারী ও শিশু নির্যাতন প্রতিরোধ",
    number: "109",
  },
  {
    name: "দুদক",
    number: "106",
  },
  {
    name: "স্মার্ট ভূমি সেবা",
    number: "16122",
  },
  {
    name: "শিশু সহায়তা লাইন",
    number: "1098",
  },
  {
    name: "লিগ্যাল এইড",
    number: "16699",
  },
]

const governmentLinks = [
  {
    title: "বাংলাদেশ জাতীয় তথ্য বাতায়ন",
    url: "https://bangladesh.gov.bd/",
  },
  {
    title: "নালিতাবাড়ী উপজেলা সরকারি পোর্টাল",
    url: "https://nalitabari.sherpur.gov.bd/",
  },
  {
    title: "শেরপুর জেলা সরকারি পোর্টাল",
    url: "https://sherpur.gov.bd/",
  },
  {
    title: "বাংলাদেশ নির্বাচন কমিশন",
    url: "https://www.ecs.gov.bd/",
  },
  {
    title: "ডিজিটাল বাংলাদেশ / সরকারি সেবা",
    url: "https://services.portal.gov.bd/",
  },
]

const defaultPortalSections = [
  "ইউনিয়ন পরিচিতি",
  "গ্রাম ভিত্তিক লোকসংখ্যা",
  "যোগাযোগ ব্যবস্থা",
  "ইউনিয়ন পরিষদ",
  "চেয়ারম্যান",
  "বর্তমান পরিষদ",
  "সচিব",
  "গ্রাম পুলিশ",
  "ইউনিয়ন পরিষদের কার্যাবলী",
  "গ্রাম আদালত",
  "কৃষি",
  "স্বাস্থ্য",
  "সমাজসেবা",
  "ভূমি বিষয়ক তথ্য",
  "শিক্ষা প্রতিষ্ঠান",
  "ধর্মীয় প্রতিষ্ঠান",
  "হাট-বাজার",
  "প্রকল্প",
  "সুবিধাভোগীদের তালিকা",
  "ইউনিয়ন ডিজিটাল সেন্টার",
]

function source(
  title: string,
  url: string,
  type: UnionSource["type"],
  note?: string,
): UnionSource {
  return {
    title,
    url,
    type,
    note,
  }
}

function healthCenter(
  name: string,
  code: string,
  email: string,
): UnionHealthFacility {
  return {
    name,
    type: "ইউনিয়ন স্বাস্থ্য কেন্দ্র",
    code,
    email,
  }
}

function subHealthCenter(
  name: string,
  code: string,
  email: string,
): UnionHealthFacility {
  return {
    name,
    type: "ইউনিয়ন উপ-স্বাস্থ্য কেন্দ্র",
    code,
    email,
  }
}

function createUnion(
  data: Omit<
    UnionData,
    | "district"
    | "upazila"
    | "division"
    | "services"
    | "emergencyContacts"
    | "governmentLinks"
  >,
): UnionData {
  return {
    ...data,

    district: "শেরপুর",
    upazila: "নালিতাবাড়ী",
    division: "ময়মনসিংহ",

    services: commonServices.map((service) => ({
      ...service,
    })),

    emergencyContacts: emergencyContacts.map((contact) => ({
      ...contact,
    })),

    governmentLinks: governmentLinks.map((link) => ({
      ...link,
    })),
  }
}

/**
 * 
 * 12 UNION DATA
 * 
 */

export const unions: UnionData[] = [
  /*
   * 01 — PURAGAON
   */
  createUnion({
    id: 1,
    slug: "puragaon",

    nameBn: "পোড়াগাঁও ইউনিয়ন",
    nameEn: "Puragaon Union",

    description:
      "পোড়াগাঁও ইউনিয়ন নালিতাবাড়ী উপজেলার ১ নং ইউনিয়ন এবং উপজেলার উত্তরাঞ্চলের একটি সীমান্তবর্তী ইউনিয়ন। নালিতাবাড়ী উপজেলা গারো পাহাড়ের পাদদেশে অবস্থিত হওয়ায় এ অঞ্চলের ভূপ্রকৃতি, কৃষি ও স্থানীয় সংস্কৃতিতে পাহাড়ি পরিবেশের প্রভাব রয়েছে। পোড়াগাঁও ইউনিয়নের সরকারি পোর্টালে ইউনিয়ন পরিচিতি, গ্রামভিত্তিক জনসংখ্যা, যোগাযোগ ব্যবস্থা, দর্শনীয় স্থান, হাট-বাজার, ইউনিয়ন পরিষদ ও বিভিন্ন সরকারি সেবার তথ্য রয়েছে। ইউনিয়নের উল্লেখযোগ্য দর্শনীয় স্থানের মধ্যে মধুটিলা ইকোপার্ক রয়েছে।",

    officialPortal:
      "https://puragauup.sherpur.gov.bd/",

    area: "২৮.৫৬ বর্গ কিলোমিটার",
    population: "১৬,৯৪০ জন",
    villages: 13,

    image: "https://i.postimg.cc/nrF8fFBb/puragaon.png",

    healthFacilities: [
      healthCenter(
        "Puragaon Union Health Center",
        "10015704",
        "u10015704@union.dghs.gov.bd",
      ),
    ],

    institutions: [],

    importantPlaces: [
      "মধুটিলা ইকোপার্ক",
    ],

    markets: [
      "আমবাগান বাজার",
    ],

    rivers: [],

    portalSections: [
      ...defaultPortalSections,
      "দর্শনীয় স্থান",
      "প্রখ্যাত ব্যক্তি",
      "ভাষা ও সংস্কৃতি",
    ],

    sources: [
      source(
        "পোড়াগাঁও ইউনিয়ন — সরকারি পোর্টাল",
        "https://puragauup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "এক নজরে পোড়াগাঁও",
        "https://puragauup.sherpur.gov.bd/pages/static-pages/6970a1dca31054345f1621f0",
        "official-union",
        "আয়তন, জনসংখ্যা ও গ্রামের সংখ্যা।",
      ),
      source(
        "DGHS Facility Registry — Puragaon",
        "https://facilityregistry.dghs.gov.bd/",
        "health",
        "Puragaon Union Health Center — facility code 10015704.",
      ),
    ],
  }),

  /*
   * 02 — NONNI
   */
  createUnion({
    id: 2,
    slug: "nonni",

    nameBn: "নন্নী ইউনিয়ন",
    nameEn: "Nonni Union",

    description:
      "নন্নী ইউনিয়ন নালিতাবাড়ী উপজেলার ২ নং ইউনিয়ন। সরকারি ইতিহাস অনুযায়ী ১৯১৯ সালের আইনে নন্নী ইউনিয়ন বোর্ড গঠিত হয়। ১৯৫৯ সালে নন্নী ও পোড়াগাঁও একত্রিত হয়ে নন্নী-পোড়াগাঁও ইউনিয়ন নামে পরিচালিত হয় এবং ১৯৯২ সালে সরকারি প্রজ্ঞাপনের মাধ্যমে নন্নী ও পোড়াগাঁও পৃথক ইউনিয়নে পরিণত হয়। বর্তমানে নন্নী একটি স্বতন্ত্র ইউনিয়ন এবং এর সরকারি পোর্টালে ইউনিয়ন পরিচিতি, কৃষি ও প্রাণিসম্পদ, শিক্ষা, স্বাস্থ্য, ভূমি, সমাজসেবা ও বিভিন্ন সরকারি সেবার তথ্য প্রকাশিত রয়েছে।",

    officialPortal:
      "https://nonniup.sherpur.gov.bd/",

    area: "২৩.৮৮ বর্গ কিলোমিটার",
    population: "২৬,২৩৪ জন",
    mouzas: 14,
    villages: 20,

    administrator: "ডা. সাকিব হোসেন সাগর",
    administratorPhone: undefined,

    image: "https://i.postimg.cc/qvMq7HfP/nonni.png",

    healthFacilities: [
      subHealthCenter(
        "নন্নী ইউনিয়ন উপ-স্বাস্থ্য কেন্দ্র",
        "10000569",
        "nuni@usc.dghs.gov.bd",
      ),
    ],

    institutions: [],

    importantPlaces: [],

    markets: [],

    rivers: [],

    portalSections: [
      ...defaultPortalSections,
      "কৃষি ও প্রাণিসম্পদ",
      "সার ডিলার",
      "খাদ্য উৎপাদন",
      "ইউএএমএম",
    ],

    sources: [
      source(
        "নন্নী ইউনিয়ন — সরকারি পোর্টাল",
        "https://nonniup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "এক নজরে নন্নী ইউনিয়ন",
        "https://nonniup.sherpur.gov.bd/pages/static-pages/69707660a31054345f1520bd",
        "official-union",
        "আয়তন, জনসংখ্যা, মৌজা ও গ্রামের সংখ্যা।",
      ),
      source(
        "নন্নী ইউনিয়ন প্রশাসক নিয়োগ — সরকারি নোটিশ",
        "https://nonniup.sherpur.gov.bd/",
        "official-union",
        "১৩ আগস্ট ২০২৫-এর সরকারি নোটিশ।",
      ),
      source(
        "DGHS Facility Registry — Nanni",
        "https://hris.mohfw.gov.bd/",
        "health",
        "Nunni Union Health Sub Center — facility code 10000569.",
      ),
    ],
  }),

  /*
   * 03 — RAJNOGOR
   */
  createUnion({
    id: 3,
    slug: "rajnogor",

    nameBn: "রাজনগর ইউনিয়ন",
    nameEn: "Rajnagar Union",

    description:
      "রাজনগর ইউনিয়ন নালিতাবাড়ী উপজেলার ৩ নং ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে রাজনগরের ইউনিয়ন পরিচিতি, গ্রামভিত্তিক জনসংখ্যা, যোগাযোগ ব্যবস্থা, ইতিহাস ও ঐতিহ্য, ভাষা ও সংস্কৃতি, খাল ও নদী, হাট-বাজার, কৃষি, শিক্ষা, ধর্মীয় প্রতিষ্ঠান এবং ইউনিয়ন পরিষদ সম্পর্কিত তথ্য রয়েছে। সরকারি ইতিহাস অনুযায়ী ১৯৩৯ সালে ৩ নং রাজনগর ইউনিয়ন পরিষদ প্রতিষ্ঠিত হয়। নালিতাবাড়ী উপজেলার সামগ্রিক ভূপ্রকৃতিতে গারো পাহাড়ের পাদদেশ ও নদ-নদীর প্রভাব রয়েছে।",

    officialPortal:
      "https://rajnogorup.sherpur.gov.bd/",

    established: "১৯৩৯ ইং",

    address:
      "রাজনগর ইউনিয়ন পরিষদ, নালিতাবাড়ী, শেরপুর",

    image: "https://i.postimg.cc/3Jj9Tm7s/Rajnagar.png",

    healthFacilities: [
      healthCenter(
        "Rajnagar Union Health Center",
        "10015705",
        "u10015705@union.dghs.gov.bd",
      ),
    ],

    institutions: [],

    importantPlaces: [],

    markets: [],

    rivers: [],

    portalSections: [
      ...defaultPortalSections,
      "ইউনিয়নের ইতিহাস",
      "ভোটার তালিকা",
      "পঞ্চবার্ষিকী পরিকল্পনা",
      "প্রকল্প",
    ],

    sources: [
      source(
        "রাজনগর ইউনিয়ন — সরকারি পোর্টাল",
        "https://rajnogorup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "রাজনগর ইউনিয়নের ইতিহাস",
        "https://rajnogorup.sherpur.gov.bd/pages/static-pages/69707662a31054345f1521a3",
        "official-union",
        "১৯৩৯ সালে ইউনিয়ন পরিষদ প্রতিষ্ঠার তথ্য।",
      ),
      source(
        "এক নজরে রাজনগর",
        "https://rajnogorup.sherpur.gov.bd/pages/static-pages/6973bc90c4774958d7bbf9ff",
        "official-union",
      ),
      source(
        "DGHS Facility Registry — Rajnagar",
        "https://facilityregistry.dghs.gov.bd/",
        "health",
        "Rajnagar Union Health Center — facility code 10015705.",
      ),
    ],
  }),

  /*
   * 04 — NAYABIL
   */
  createUnion({
    id: 4,
    slug: "nayabil",

    nameBn: "নয়াবিল ইউনিয়ন",
    nameEn: "Nayabil Union",

    description:
      "নয়াবিল ইউনিয়ন নালিতাবাড়ী উপজেলার ৪ নং ইউনিয়ন। সরকারি পোর্টালে নয়াবিলের ইউনিয়ন পরিচিতি, যোগাযোগ ব্যবস্থা, ভাষা ও সংস্কৃতি, দর্শনীয় স্থান, হাট-বাজার, কৃষি, স্বাস্থ্য, ভূমি, সমাজসেবা এবং শিক্ষা প্রতিষ্ঠানের তথ্য রয়েছে। এখানে উচ্চ মাধ্যমিক, নিম্ন মাধ্যমিক ও সরকারি প্রাথমিক বিদ্যালয়ের পাশাপাশি মাদ্রাসা, ব্যাংক, এনজিও ও ধর্মীয় প্রতিষ্ঠানের তথ্যও সরকারি পোর্টালে প্রকাশিত হয়েছে। নালিতাবাড়ী উপজেলার পাহাড়সংলগ্ন ভৌগোলিক পরিবেশ এই ইউনিয়নের জীবনযাত্রা ও সংস্কৃতির একটি গুরুত্বপূর্ণ বৈশিষ্ট্য।",

    officialPortal:
      "https://nayabilup.sherpur.gov.bd/",

    address:
      "নয়াবিল ইউনিয়ন পরিষদ, নালিতাবাড়ী, শেরপুর",

    image: "https://i.postimg.cc/90b4xm5n/Noyabil.png",

    healthFacilities: [
      healthCenter(
        "Noyabil Union Health Center",
        "10015703",
        "u10015703@union.dghs.gov.bd",
      ),
    ],

    institutions: [],

    importantPlaces: [],

    markets: [],

    rivers: [],

    portalSections: [
      ...defaultPortalSections,
      "ভাষা ও সংস্কৃতি",
      "দর্শনীয় স্থান",
      "খেলাধুলা ও বিনোদন",
      "হাট-বাজার",
      "উচ্চ মাধ্যমিক বিদ্যালয়",
      "নিম্ন মাধ্যমিক বিদ্যালয়",
      "সরকারি প্রাথমিক বিদ্যালয়",
      "এনজিও",
      "ব্যাংক",
      "বীমা",
      "ঈদগাহ",
      "মন্দির",
    ],

    sources: [
      source(
        "নয়াবিল ইউনিয়ন — সরকারি পোর্টাল",
        "https://nayabilup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "DGHS Facility Registry — Nayabil",
        "https://facilityregistry.dghs.gov.bd/",
        "health",
        "Noyabil Union Health Center — facility code 10015703.",
      ),
    ],
  }),

  /*
   * 05 — RAMCHANDRAKURA MANDALIA
   */
  createUnion({
    id: 5,
    slug: "ramchandrakura-mandalia",

    nameBn: "রামচন্দ্রকুড়া মন্ডলিয়াপাড়া ইউনিয়ন",
    nameEn: "Ramchandrakura Mondaliapara Union",

    description:
       "রামচন্দ্রকুড়া মন্ডলিয়াপাড়া ইউনিয়ন নালিতাবাড়ী উপজেলার ৫ নং ইউনিয়ন এবং উপজেলার সীমান্তবর্তী পাহাড়ি অঞ্চলের একটি গুরুত্বপূর্ণ ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে ইউনিয়ন পরিচিতি, গ্রামভিত্তিক জনসংখ্যা, যোগাযোগ ব্যবস্থা, দর্শনীয় স্থান, ভাষা ও সংস্কৃতি, খাল-নদী, হাট-বাজার, ইউনিয়ন পরিষদ, গ্রাম আদালত ও সামাজিক নিরাপত্তা কর্মসূচির তথ্য রয়েছে। সাম্প্রতিক স্থানীয় সংবাদে রামচন্দ্রকুড়া ইউনিয়নের ১৪টি গ্রামের উল্লেখ পাওয়া যায় এবং সীমান্তবর্তী পাহাড়ি পরিবেশ এ এলাকার একটি উল্লেখযোগ্য বৈশিষ্ট্য।",

    officialPortal:
      "https://ramchondrokuraup.sherpur.gov.bd/",

    address:
      "৫ নং রামচন্দ্রকুড়া মন্ডলিয়াপাড়া ইউনিয়ন পরিষদ কমপ্লেক্স ভবন, নালিতাবাড়ী, শেরপুর",

    chairman: "মোঃ আমান উল্লাহ বাদশা",
    chairmanPhone: "০১৭১৫১৬৫৮৭১",
    chairmanEmail: "sukanta_shimul@yahoo.com",

    secretary: "মোঃ আক্কাছ আলী",
    secretaryPhone: "০১৭২৫৩৭২৭১১",
    secretaryEmail: "sukanta_shimul@yahoo.com",

    mobile: "০১৭২১৩৫৯৭০৩",
    email: "sukanta_shimul@yahoo.com",

    image: "https://i.postimg.cc/kXfVdg6D/Ramchandrakura-Mondaliapara-Union.png",

    healthFacilities: [
      healthCenter(
        "Ramchandrakura Mandalia Union Health Center",
        "10015706",
        "u10015706@union.dghs.gov.bd",
      ),
    ],

    institutions: [],

    importantPlaces: [
      "পানিহাতা",
    ],

    markets: [],

    rivers: [],

    portalSections: [
      ...defaultPortalSections,
      "জরুরী যোগাযোগ",
      "বয়স্ক ভাতা",
      "বিধবা ভাতা",
      "প্রতিবন্ধী ভাতা",
      "ইউনিয়ন তথ্য ও সেবা কেন্দ্র",
    ],

    sources: [
      source(
        "রামচন্দ্রকুড়া ইউনিয়ন — সরকারি পোর্টাল",
        "https://ramchondrokuraup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "জরুরি যোগাযোগ — রামচন্দ্রকুড়া ইউনিয়ন",
        "https://ramchondrokuraup.sherpur.gov.bd/pages/static-pages/6973bc9ec4774958d7bc00b4",
        "official-union",
        "চেয়ারম্যান, সচিব, UISC এবং যোগাযোগের তথ্য।",
      ),
      source(
        "DGHS Facility Registry — Ramchandrakura Mandalia",
        "https://facilityregistry.dghs.gov.bd/",
        "health",
        "Ramchandrakura Mandalia Union Health Center — facility code 10015706.",
      ),
    ],
  }),

  /*
   * 06 — KAKORKANDHI
   */
  createUnion({
    id: 6,
    slug: "kakorkandhi",

    nameBn: "কাকরকান্দি ইউনিয়ন",
    nameEn: "Kakorkandi Union",

    description:
      "কাকরকান্দি ইউনিয়ন নালিতাবাড়ী উপজেলার ৬ নং ইউনিয়ন। ২০১১ সালের স্থানীয় নির্বাচনী তথ্যভিত্তিক প্রতিবেদনে কাকরকান্দি ইউনিয়নের আয়তন প্রায় ২৬ বর্গকিলোমিটার এবং ১৫টি গ্রামের কথা উল্লেখ করা হয়েছে। সরকারি ইউনিয়ন পোর্টালে ইউনিয়ন পরিচিতি, কৃষি, স্বাস্থ্য, ভূমি, সমাজসেবা, গ্রাম পুলিশ, ইউনিয়ন তথ্য ও সেবা কেন্দ্র এবং স্থানীয় প্রশাসন সম্পর্কিত তথ্য রয়েছে। নালিতাবাড়ী উপজেলার সামগ্রিক কৃষিনির্ভর অর্থনীতি ও পাহাড়-সমতল ভূপ্রকৃতির প্রভাব এই ইউনিয়নের জীবনযাত্রার সঙ্গেও যুক্ত।",

    officialPortal:
      "https://kakorkandhiup.sherpur.gov.bd/",

    address:
      "কাকরকান্দি ইউনিয়ন পরিষদ, নালিতাবাড়ী, শেরপুর",

    image: "https://i.postimg.cc/Cx2VjWt6/Kakorkandi-Union.png",

    healthFacilities: [
      healthCenter(
        "Kakorkandi Union Health Center",
        "10015699",
        "u10015699@union.dghs.gov.bd",
      ),
    ],

    institutions: [],

    importantPlaces: [],

    markets: [],

    rivers: [],

    portalSections: [
      ...defaultPortalSections,
      "ইউনিয়ন ভূমি অফিস",
      "কৃষি",
      "স্বাস্থ্য",
      "সমাজসেবা",
      "গ্রাম পুলিশ",
      "ইউআইএসসি",
    ],

    sources: [
      source(
        "কাকরকান্দি ইউনিয়ন — সরকারি পোর্টাল",
        "https://kakorkandhiup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "উপজেলা ভূমি অফিস — কাকরকান্দি ইউনিয়ন ভূমি অফিস",
        "https://acl.nalitabari.sherpur.gov.bd/pages/static-pages/6973c0ebc4774958d7bc1da2",
        "government",
        "কাকরকান্দি ইউনিয়ন ভূমি অফিস ও সংশ্লিষ্ট মৌজার তথ্য।",
      ),
      source(
        "DGHS Facility Registry — Kakorkandi",
        "https://facilityregistry.dghs.gov.bd/",
        "health",
        "Kakorkandi Union Health Center — facility code 10015699.",
      ),
    ],
  }),

  /*
   * 07 — NALITABARI
   */
  createUnion({
    id: 7,
    slug: "nalitabari",

    nameBn: "নালিতাবাড়ী ইউনিয়ন",
    nameEn: "Nalitabari Union",

    description:
        "নালিতাবাড়ী ইউনিয়ন নালিতাবাড়ী উপজেলার ৭ নং ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে এই ইউনিয়নের ইতিহাস ও ঐতিহ্য, ভাষা ও সংস্কৃতি, দর্শনীয় স্থান, খাল ও নদী, হাট-বাজার, খেলাধুলা, কৃষি, স্বাস্থ্য, ভূমি, শিক্ষা, ধর্মীয় প্রতিষ্ঠান এবং সামাজিক নিরাপত্তা সংক্রান্ত বিস্তৃত তথ্য রয়েছে। সরকারি পোর্টালের তথ্য অনুযায়ী ইউনিয়নের সাংস্কৃতিক জীবন নালিতাবাড়ীর আঞ্চলিক ভাষা ও গারো পাহাড়ের পাদদেশের ভূপ্রকৃতির সঙ্গে সম্পর্কিত। নালিতাবাড়ী উপজেলার প্রধান নদীগুলোর মধ্যে ভোগাই, কংস ও চেল্লাখালী উল্লেখযোগ্য।",

    officialPortal:
      "https://nalitabariup.sherpur.gov.bd/",

    area: "২৮.৫৬ বর্গ কিলোমিটার",
    population: "প্রকাশিত সরকারি পুরনো তথ্য অনুযায়ী ৫,২৫০ জন",

    address:
      "৭ নং নালিতাবাড়ী ইউনিয়ন পরিষদ, নালিতাবাড়ী, শেরপুর",

    image: "https://i.postimg.cc/bNF5M1Tp/Nalitabari-Union.png",

    healthFacilities: [
      healthCenter(
        "Nalitabari Union Health Center",
        "10015702",
        "u10015702@union.dghs.gov.bd",
      ),
    ],

    institutions: [
      {
        name: "প্রাথমিক বিদ্যালয়",
        type: "শিক্ষা",
        description:
          "সরকারি ইউনিয়ন পোর্টালে ৬টি প্রাথমিক বিদ্যালয়ের তথ্য প্রকাশিত।",
      },
      {
        name: "মাধ্যমিক বিদ্যালয়",
        type: "শিক্ষা",
        description:
          "সরকারি ইউনিয়ন পোর্টালে ২টি মাধ্যমিক বিদ্যালয়ের তথ্য প্রকাশিত।",
      },
      {
        name: "মাদ্রাসা",
        type: "শিক্ষা",
        description:
          "সরকারি ইউনিয়ন পোর্টালে ১টি মাদ্রাসার তথ্য প্রকাশিত।",
      },
    ],

    importantPlaces: [],

    markets: [
      "৪টি হাট-বাজার — পুরনো সরকারি তথ্য অনুযায়ী",
    ],

    rivers: [],

    portalSections: [
      ...defaultPortalSections,
      "প্রাথমিক বিদ্যালয়",
      "মাধ্যমিক বিদ্যালয়",
      "মাদ্রাসা",
      "মসজিদ",
      "মন্দির",
      "ঈদগাহ",
      "কবরস্থান",
      "খেলাধুলা ও বিনোদন",
      "এনজিও",
      "গ্রাম আদালত",
    ],

    sources: [
      source(
        "নালিতাবাড়ী ইউনিয়ন — সরকারি পোর্টাল",
        "https://nalitabariup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "এক নজরে নালিতাবাড়ী ইউনিয়ন",
        "https://nalitabariup.sherpur.gov.bd/pages/static-pages/6973bc90c4774958d7bbfa07",
        "official-union",
        "আয়তন, পুরনো জনসংখ্যা, শিক্ষা প্রতিষ্ঠান, হাট-বাজার ও সেবা সংক্রান্ত তথ্য।",
      ),
      source(
        "গ্রাম ভিত্তিক লোকসংখ্যা",
        "https://nalitabariup.sherpur.gov.bd/pages/static-pages/69707661a31054345f152122",
        "official-union",
        "পুরনো সরকারি গ্রামভিত্তিক জনসংখ্যার তথ্য।",
      ),
      source(
        "DGHS Facility Registry — Nalitabari",
        "https://facilityregistry.dghs.gov.bd/",
        "health",
        "Nalitabari Union Health Center — facility code 10015702.",
      ),
    ],
  }),

  /*
   * 08 — RUPNARAYANKURA
   */
  createUnion({
    id: 8,
    slug: "rupnarayankura",

    nameBn: "রূপনারায়ণকুড়া ইউনিয়ন",
    nameEn: "Rupnarayankura Union",

    description:
       "রূপনারায়ণকুড়া ইউনিয়ন নালিতাবাড়ী উপজেলার ৮ নং ইউনিয়ন। সরকারি ইউনিয়ন পোর্টাল অনুযায়ী রূপনারায়ণকুড়া ইউনিয়ন ১৯৯২ সালে প্রতিষ্ঠিত এবং এর আয়তন ২৬.৫০ বর্গকিলোমিটার। ইউনিয়ন পরিষদের জমির পরিমাণ ২৫ শতাংশ বলেও সরকারি তথ্যে উল্লেখ রয়েছে। সরকারি পোর্টালে ওয়ার্ডভিত্তিক জনসংখ্যা, গ্রামসমূহ, যোগাযোগ ব্যবস্থা, ভৌগলিক অবস্থান, খাল ও নদী, হাট-বাজার, দর্শনীয় স্থান এবং প্রখ্যাত ব্যক্তিত্ব সম্পর্কিত তথ্য রয়েছে।",

    officialPortal:
      "https://rupnarayankuraup.sherpur.gov.bd/",

    established: "১৯৯২ ইং",
    area: "২৬.৫০ বর্গ কিলোমিটার",
    officeLand: "২৫ শতাংশ",

    address:
      "০৮ নং রূপনারায়ণকুড়া ইউনিয়ন পরিষদ কার্যালয়, নালিতাবাড়ী, শেরপুর",

    image: "https://i.postimg.cc/7Y1JTHQm/rupnarayankura.jpg",

    healthFacilities: [],

    institutions: [],

    importantPlaces: [],

    markets: [],

    rivers: [],

    portalSections: [
      "ইউনিয়ন পরিচিতি",
      "ওয়ার্ড ভিত্তিক লোকসংখ্যা",
      "গ্রামসমূহের তালিকা",
      "যোগাযোগ ব্যবস্থা",
      "মানচিত্রে ইউনিয়ন",
      "ভৌগলিক অবস্থান",
      "খাল ও নদী",
      "হাট বাজার",
      "দর্শনীয় স্থান",
      "ইউনিয়ন পরিষদ",
      "প্রখ্যাত ব্যক্তিত্ব",
    ],

    sources: [
      source(
        "রূপনারায়ণকুড়া ইউনিয়ন — সরকারি পোর্টাল",
        "https://rupnarayankuraup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "এক নজরে রূপনারায়ণকুড়া",
        "https://rupnarayankuraup.sherpur.gov.bd/pages/static-pages/6970765da31054345f151eef",
        "official-union",
        "প্রতিষ্ঠা, অফিসের জমি ও আয়তনের তথ্য।",
      ),
      source(
        "উপজেলা ভূমি অফিস — রূপনারায়ণকুড়া/মরিচপুরান",
        "https://acl.nalitabari.sherpur.gov.bd/pages/static-pages/6973c0ebc4774958d7bc1da2",
        "government",
        "গোজাকুড়া ইউনিয়ন ভূমি অফিসের অধীনে রূপনারায়ণকুড়া/মরিচপুরান সম্পর্কিত তথ্য।",
      ),
    ],
  }),

  /*
   * 09 — MORICHPURAN
   */
  createUnion({
    id: 9,
    slug: "morichpuran",

    nameBn: "মরিচপুরান ইউনিয়ন",
    nameEn: "Morichpuran Union",

    description:
      "মরিচপুরান ইউনিয়ন নালিতাবাড়ী উপজেলার ৯ নং ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালের তথ্য অনুযায়ী ইউনিয়নটি ১৯৬০ সালে প্রতিষ্ঠিত এবং এর আয়তন ২৬.৫০ বর্গকিলোমিটার। সরকারি তথ্যভান্ডারে জনসংখ্যা, গ্রামভিত্তিক তথ্য, ইউনিয়নের ইতিহাস, দর্শনীয় স্থান ও হাট-বাজার সম্পর্কিত তথ্য রয়েছে। সরকারি পোর্টালের ভাষা ও সংস্কৃতি বিষয়ক তথ্য অনুযায়ী নালিতাবাড়ীর আঞ্চলিক ভাষা, গারো পাহাড়ের পাদদেশ এবং ভোগাই ও চেল্লাখালী নদীর ভূপ্রকৃতি স্থানীয় মানুষের জীবনযাপন ও সংস্কৃতিতে প্রভাব ফেলেছে।",

    officialPortal:
      "https://morichpuranup.sherpur.gov.bd/",

    established: "১৯৬০ ইং",
    area: "২৬.৫০ বর্গ কিলোমিটার",
    population: "২১,৮৫৫ জন",
    femalePopulation: "১০,৮৩০ জন",

    address:
      "৯ নং মরিচপুরান ইউনিয়ন পরিষদ কার্যালয়, নালিতাবাড়ী, শেরপুর",

    image: "https://i.postimg.cc/tTfRJKzD/morichpuran.png",

    healthFacilities: [
      healthCenter(
        "Morichpuran Union Health Center",
        "10015701",
        "u10015701@union.dghs.gov.bd",
      ),
      subHealthCenter(
        "রূপনারায়ণকুড়া(মরিচপুরান) ইউনিয়ন উপ-স্বাস্থ্য কেন্দ্র",
        "10000570",
        "rupnarayankura_marichpuran@usc.dghs.gov.bd",
      ),
    ],

    institutions: [],

    importantPlaces: [],

    markets: [],

    rivers: [],

    portalSections: [
      ...defaultPortalSections,
      "ইউনিয়নের ইতিহাস",
      "গ্রাম ভিত্তিক লোকসংখ্যা",
      "দর্শনীয় স্থান",
      "হাট-বাজার",
    ],

    sources: [
      source(
        "মরিচপুরান ইউনিয়ন — সরকারি পোর্টাল",
        "https://morichpuranup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "এক নজরে মরিচপুরান",
        "https://morichpuranup.sherpur.gov.bd/pages/static-pages/69707662a31054345f15218e",
        "official-union",
        "প্রতিষ্ঠা, আয়তন ও জনসংখ্যার তথ্য।",
      ),
      source(
        "DGHS Facility Registry — Morichpuran",
        "https://facilityregistry.dghs.gov.bd/",
        "health",
        "Morichpuran Union Health Center — facility code 10015701.",
      ),
      source(
        "DGHS Facility Registry — Rupnarayankura/Marichpuran",
        "https://hris.mohfw.gov.bd/",
        "health",
        "Union Health Sub Center — facility code 10000570.",
      ),
    ],
  }),

  /*
   * 10 — JUGANIA
   */
  createUnion({
    id: 10,
    slug: "jugania",

    nameBn: "যোগানিয়া ইউনিয়ন",
    nameEn: "Jugania Union",

    description:
       "যোগানিয়া ইউনিয়ন নালিতাবাড়ী উপজেলার ১০ নং ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে যোগানিয়া ইউনিয়ন পরিষদ, ভূমি অফিস, কৃষি, সামাজিক নিরাপত্তা, ধর্মীয় প্রতিষ্ঠান, বাজেট ও স্থানীয় উন্নয়ন প্রকল্পের তথ্য প্রকাশিত হয়েছে। কাবিখা, কাবিটা, টিআর, জিআর ও এলজিএসপি-সহ বিভিন্ন স্থানীয় উন্নয়ন কার্যক্রমের তথ্যও সরকারি পোর্টালে রয়েছে। নালিতাবাড়ী উপজেলার ১২টি ইউনিয়নের একটি হিসেবে যোগানিয়া উপজেলা পর্যায়ের প্রশাসনিক ও নাগরিক সেবা কাঠামোর অংশ।",

    officialPortal:
      "https://juganiyaup.sherpur.gov.bd/",

    address:
      "১০ নং যোগানিয়া ইউনিয়ন পরিষদ, নালিতাবাড়ী, শেরপুর",

    image: "https://i.postimg.cc/KvcxJm8k/Zogania-union-parishad.jpg",

    healthFacilities: [
      healthCenter(
        "Jogania Union Health Center",
        "10015698",
        "u10015698@union.dghs.gov.bd",
      ),
    ],

    institutions: [],

    importantPlaces: [],

    markets: [],

    rivers: [],

    portalSections: [
      ...defaultPortalSections,
      "ইউনিয়ন ভূমি অফিস",
      "বাজেট",
      "প্রতিবন্ধী ভাতা",
      "মসজিদ",
      "প্রকল্প",
      "কাবিখা",
      "কাবিটা",
      "টিআর",
      "জিআর",
      "এলজিএসপি",
    ],

    sources: [
      source(
        "যোগানিয়া ইউনিয়ন — সরকারি পোর্টাল",
        "https://juganiyaup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "যোগানিয়া ইউনিয়ন ভূমি অফিস",
        "https://juganiyaup.sherpur.gov.bd/pages/static-pages/6973c0e6c4774958d7bc1aad",
        "official-union",
      ),
      source(
        "যোগানিয়া ইউনিয়নের বাজেট",
        "https://juganiyaup.sherpur.gov.bd/pages/static-pages/6973c0e4c4774958d7bc19cc",
        "official-union",
      ),
      source(
        "DGHS Facility Registry — Jogania",
        "https://facilityregistry.dghs.gov.bd/",
        "health",
        "Jogania Union Health Center — facility code 10015698.",
      ),
    ],
  }),

  /*
   * 11 — BAGHBER
   */
  createUnion({
    id: 11,
    slug: "baghber",

    nameBn: "বাঘবেড় ইউনিয়ন",
    nameEn: "Baghber Union",

    description:
       "বাঘবেড় ইউনিয়ন নালিতাবাড়ী উপজেলার ১১ নং ইউনিয়ন এবং গারো পাহাড়ের পাদদেশের প্রাকৃতিক পরিবেশের সঙ্গে ঘনিষ্ঠভাবে যুক্ত একটি এলাকা। সরকারি ইউনিয়ন পোর্টালে বাঘবেড়ের ইতিহাস, ভাষা ও সংস্কৃতি, দর্শনীয় স্থান, খালী নদী, কৃষি, ভূমি, সমাজসেবা, শিক্ষা ও ধর্মীয় প্রতিষ্ঠানের তথ্য রয়েছে। সরকারি পোর্টালে সন্যাসীভিটা গ্রামের চেল্লাখালী নদীর ওপর নির্মিত রাবার ড্যামের উল্লেখ ও ছবি রয়েছে। বাঘবেড়ের ভাষা ও সংস্কৃতিতে ভোগাই ও চেল্লাখালী নদী এবং গারো পাহাড়ের পাদদেশের ভূপ্রকৃতির প্রভাবের কথাও সরকারি তথ্যে উল্লেখ করা হয়েছে।",

    officialPortal:
      "https://bagberup.sherpur.gov.bd/",

    administrator: "মোঃ আনোয়ারুল কবীর",

    address:
      "১১ নং বাঘবেড় ইউনিয়ন পরিষদ, নালিতাবাড়ী, শেরপুর",

    image: "https://i.postimg.cc/W3fzrFsM/Bagber.jpg",

    healthFacilities: [
      healthCenter(
        "Baghber Union Health Center",
        "10015697",
        "u10015697@union.dghs.gov.bd",
      ),
    ],

    institutions: [],

    importantPlaces: [
      "সন্যাসীভিটা রাবার ড্যাম",
    ],

    markets: [],

    rivers: [
      "চেল্লাখালী নদী",
      "খালী নদী",
    ],

    portalSections: [
      ...defaultPortalSections,
      "বাঘবেড় ইউনিয়নের ইতিহাস",
      "দর্শনীয় স্থান",
      "প্রখ্যাত ব্যক্তি",
      "খালী নদী",
      "ইউনিয়ন কৃষি অফিস",
      "সার ডিলার",
      "ইউনিয়ন ভূমি অফিস",
      "ইউনিয়ন সমাজ সেবা অফিস",
      "এনজিও",
      "গ্রাম পুলিশের নামের তালিকা",
      "মসজিদ",
      "ঈদগাহ",
      "কবরস্থান",
    ],

    sources: [
      source(
        "বাঘবেড় ইউনিয়ন — সরকারি পোর্টাল",
        "https://bagberup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "বাঘবেড় ইউনিয়নের মানচিত্র",
        "https://bagberup.sherpur.gov.bd/pages/static-pages/6970860ca31054345f157478",
        "official-union",
      ),
      source(
        "বাঘবেড় ইউনিয়নের সরকারি নোটিশ",
        "https://bagberup.sherpur.gov.bd/",
        "official-union",
        "১৩ আগস্ট ২০২৫-এ প্রশাসক নিয়োগ সংক্রান্ত নোটিশ।",
      ),
      source(
        "DGHS Facility Registry — Baghber",
        "https://facilityregistry.dghs.gov.bd/",
        "health",
        "Baghber Union Health Center — facility code 10015697.",
      ),
    ],
  }),

  /*
   * 12 — KALOSHPAR
   */
  createUnion({
    id: 12,
    slug: "kaloshpar",

    nameBn: "কলসপাড় ইউনিয়ন",
    nameEn: "Kalashpar Union",

    description:
      "কলসপাড় ইউনিয়ন নালিতাবাড়ী উপজেলার ১২ নং ইউনিয়ন এবং উপজেলার অন্যতম বৃহৎ ইউনিয়ন। সরকারি তথ্য অনুযায়ী এর আয়তন ৩৯.৪০ বর্গকিলোমিটার। সরকারি ইউনিয়ন পোর্টালে কলসপাড়ের ইউনিয়ন পরিচিতি, যোগাযোগ ব্যবস্থা, দর্শনীয় স্থান, খেলাধুলা, হাট-বাজার, শিক্ষা প্রতিষ্ঠান, মাদ্রাসা, এনজিও, ব্যাংক, বীমা, ধর্মীয় প্রতিষ্ঠান, সামাজিক নিরাপত্তা এবং ইউনিয়ন ডিজিটাল সেন্টার সম্পর্কিত তথ্য রয়েছে। নালিতাবাড়ী উপজেলার কৃষিনির্ভর অর্থনীতি, পাহাড়-সমতল ভূপ্রকৃতি ও স্থানীয় সংস্কৃতির বৃহত্তর প্রেক্ষাপট কলসপাড়ের সামাজিক ও অর্থনৈতিক জীবনেও প্রতিফলিত হয়।",

    officialPortal:
      "https://koloshparup.sherpur.gov.bd/",

    area: "৩৯.৪০ বর্গ কিলোমিটার",

    address:
      "১২ নং কলসপাড় ইউনিয়ন পরিষদ কমপ্লেক্স ভবন, নাকশী, নালিতাবাড়ী, শেরপুর",

    chairman: "মোঃ আবুল কাশেম",
    chairmanPhone: "০১৭১৮-২৬২৮৯০",
    chairmanEmail: "uisc.kalaspar.halim@gmail.com",

    secretary: "মোঃ এমারুল জাহিদ",
    secretaryPhone: "০১৮৩১-৯০৭৮২৮",
    secretaryEmail: "uisc.kalaspar.halim@gmail.com",

    mobile: "০১৭২৯-৮৮৪২৭৮",
    email: "uisc.kalapar.halim@gmail.com",

    image: "https://i.postimg.cc/WbmqJNfw/kaloshpar.jpg",

    healthFacilities: [
      healthCenter(
        "Kalashpar Union Health Center",
        "10015700",
        "u10015700@union.dghs.gov.bd",
      ),
    ],

    institutions: [],

    importantPlaces: [],

    markets: [],

    rivers: [],

    portalSections: [
      ...defaultPortalSections,
      "দর্শনীয় স্থান",
      "খেলাধুলা ও বিনোদন",
      "হাট বাজার",
      "প্রাথমিক বিদ্যালয়",
      "মাধ্যমিক বিদ্যালয়",
      "মাদ্রাসা",
      "এনজিও",
      "ব্যাংক",
      "বীমা",
      "মসজিদ",
      "মন্দির",
      "ঈদগাহ",
      "কবরস্থান",
      "শীতবস্ত্র বিতরণ",
      "বিআরডিবি",
    ],

    sources: [
      source(
        "কলসপাড় ইউনিয়ন — সরকারি পোর্টাল",
        "https://koloshparup.sherpur.gov.bd/",
        "official-union",
      ),
      source(
        "এক নজরে কলসপাড়",
        "https://koloshparup.sherpur.gov.bd/pages/static-pages/69707b1ba31054345f1531ab",
        "official-union",
        "আয়তনের সরকারি তথ্য।",
      ),
      source(
        "কলসপাড় ইউনিয়ন — জরুরি যোগাযোগ",
        "https://koloshparup.sherpur.gov.bd/pages/static-pages/6973bc9dc4774958d7bc0096",
        "official-union",
        "চেয়ারম্যান, সচিব, UDC এবং যোগাযোগের তথ্য।",
      ),
      source(
        "DGHS Facility Registry — Kalashpar",
        "https://facilityregistry.dghs.gov.bd/",
        "health",
        "Kalashpar Union Health Center — facility code 10015700.",
      ),
    ],
  }),
]

/**
 * ---------------------------------------------------------
 * HELPERS
 * ---------------------------------------------------------
 */

export function getUnionBySlug(slug: string) {
  return unions.find((union) => union.slug === slug)
}

export function getUnionById(id: number) {
  return unions.find((union) => union.id === id)
}

export function searchUnions(query: string) {
  const normalizedQuery = query.toLowerCase().trim()

  if (!normalizedQuery) {
    return unions
  }

  return unions.filter((union) => {
    return (
      union.nameBn.toLowerCase().includes(normalizedQuery) ||
      union.nameEn.toLowerCase().includes(normalizedQuery) ||
      union.slug.toLowerCase().includes(normalizedQuery)
    )
  })
}

export const unionCount = unions.length

export const totalVillages = 205

export const totalMouzas = 108

export const totalPaurashava = 1
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
      "নালিতাবাড়ী উপজেলার ১ নং পোড়াগাঁও ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে ইউনিয়ন পরিচিতি, গ্রামভিত্তিক লোকসংখ্যা, যোগাযোগ, দর্শনীয় স্থান, হাট-বাজার, ইউনিয়ন পরিষদ এবং বিভিন্ন সরকারি সেবা সংক্রান্ত তথ্য প্রকাশ করা হয়েছে।",

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
      "নালিতাবাড়ী উপজেলার ২ নং নন্নী ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে ইউনিয়ন পরিষদ, ইউআইএসসি, কৃষি ও প্রাণিসম্পদ, সামাজিক সেবা এবং অন্যান্য সরকারি তথ্যের বিভাগ রয়েছে। ২০২৫ সালের সরকারি নোটিশে নন্নী ইউনিয়ন পরিষদে প্রশাসক নিয়োগের তথ্য প্রকাশিত হয়েছে।",

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
      "নালিতাবাড়ী উপজেলার ৩ নং রাজনগর ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে রাজনগর ইউনিয়নের ইতিহাস, যোগাযোগ ব্যবস্থা, ভোটার তালিকা, পঞ্চবার্ষিকী পরিকল্পনা, প্রকল্প এবং ইউনিয়ন পরিষদ সংক্রান্ত তথ্য প্রকাশিত রয়েছে। সরকারি ইতিহাস অনুযায়ী ১৯৩৯ সালে ৩ নং রাজনগর ইউনিয়ন পরিষদ প্রতিষ্ঠিত হয়।",

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
      "নালিতাবাড়ী উপজেলার ৪ নং নয়াবিল ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে ইউনিয়ন পরিচিতি, যোগাযোগ ব্যবস্থা, চেয়ারম্যান ও পরিষদ, গ্রাম আদালত, কৃষি, স্বাস্থ্য, সমাজসেবা, ভূমি, শিক্ষা প্রতিষ্ঠান এবং বিভিন্ন সুবিধাভোগী তালিকার তথ্য বিভাগ রয়েছে।",

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
      "নালিতাবাড়ী উপজেলার ৫ নং রামচন্দ্রকুড়া মন্ডলিয়াপাড়া ইউনিয়ন। সরকারি পোর্টালে ইউনিয়ন পরিষদ, গ্রামভিত্তিক তথ্য, সামাজিক নিরাপত্তা, জরুরি যোগাযোগ এবং ইউনিয়ন তথ্য ও সেবা কেন্দ্র সম্পর্কিত তথ্য প্রকাশিত হয়েছে।",

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
      "নালিতাবাড়ী উপজেলার ৬ নং কাকরকান্দি ইউনিয়ন। সরকারি পোর্টালে ইউনিয়ন পরিষদ, কৃষি, স্বাস্থ্য, ভূমি, সামাজিক সেবা, ডিজিটাল সেন্টার এবং অন্যান্য স্থানীয় সরকারি তথ্যের বিভাগ রয়েছে।",

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
      "নালিতাবাড়ী উপজেলার ৭ নং নালিতাবাড়ী ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে ইউনিয়ন পরিচিতি, গ্রামভিত্তিক লোকসংখ্যা, যোগাযোগ, ইউনিয়ন পরিষদ, গ্রাম আদালত, স্বাস্থ্য, কৃষি, সমাজসেবা, ধর্মীয় প্রতিষ্ঠান ও বিভিন্ন সরকারি সেবা সম্পর্কে তথ্য প্রকাশিত হয়েছে।",

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
      "নালিতাবাড়ী উপজেলার ৮ নং রূপনারায়ণকুড়া ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে ইউনিয়ন পরিচিতি, ওয়ার্ডভিত্তিক লোকসংখ্যা, গ্রামসমূহ, যোগাযোগ ব্যবস্থা, ভৌগলিক অবস্থান, হাট-বাজার ও দর্শনীয় স্থানসহ ইউনিয়ন পরিষদের তথ্য রয়েছে।",

    officialPortal:
      "https://rupnarayankuraup.sherpur.gov.bd/",

    established: "১৯৯২ ইং",
    area: "২৬.৫০ বর্গ কিলোমিটার",
    officeLand: "২৫ শতাংশ",

    address:
      "০৮ নং রূপনারায়ণকুড়া ইউনিয়ন পরিষদ কার্যালয়, নালিতাবাড়ী, শেরপুর",

    image: "/unions/",

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
      "নালিতাবাড়ী উপজেলার ৯ নং মরিচপুরান ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে ইউনিয়ন পরিষদ, ইউনিয়ন পরিচিতি এবং বিভিন্ন স্থানীয় সরকারি তথ্য প্রকাশিত হয়েছে।",

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
      "নালিতাবাড়ী উপজেলার ১০ নং যোগানিয়া ইউনিয়ন। সরকারি ইউনিয়ন পোর্টালে ইউনিয়ন পরিষদ, প্রকল্প, সামাজিক সেবা, ধর্মীয় প্রতিষ্ঠান, ভূমি ও কৃষি সংক্রান্ত তথ্য প্রকাশিত হয়েছে।",

    officialPortal:
      "https://juganiyaup.sherpur.gov.bd/",

    address:
      "১০ নং যোগানিয়া ইউনিয়ন পরিষদ, নালিতাবাড়ী, শেরপুর",

    image: "/unions/",

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
      "নালিতাবাড়ী উপজেলার ১১ নং বাঘবেড় ইউনিয়ন। সরকারি পোর্টালে ইউনিয়ন পরিচিতি, গ্রামভিত্তিক লোকসংখ্যা, দর্শনীয় স্থান, হাট-বাজার, কৃষি, ভূমি, সমাজসেবা, স্বাস্থ্য এবং ইউনিয়ন পরিষদ সংক্রান্ত তথ্য রয়েছে। ২০২৫ সালের সরকারি নোটিশে উপজেলা যুব উন্নয়ন অফিসার মোঃ আনোয়ারুল কবীরকে প্রশাসক হিসেবে নিয়োগের তথ্য প্রকাশিত হয়েছে।",

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
      "নালিতাবাড়ী উপজেলার ১২ নং কলসপাড় ইউনিয়ন। সরকারি পোর্টালে ইউনিয়ন পরিচিতি, যোগাযোগ ব্যবস্থা, ইউনিয়ন পরিষদ, গ্রাম আদালত, কৃষি, শিক্ষা, ধর্মীয় প্রতিষ্ঠান, হাট-বাজার, সামাজিক নিরাপত্তা ও ইউনিয়ন ডিজিটাল সেন্টার সম্পর্কিত তথ্য প্রকাশিত হয়েছে।",

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

    image: "/unions/",

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
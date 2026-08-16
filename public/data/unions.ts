export type UnionService = {
  title: string
  description: string
  category:
    | "নাগরিক সেবা"
    | "নিবন্ধন"
    | "সনদ"
    | "কর ও লাইসেন্স"
    | "সামাজিক সেবা"
    | "ভূমি সেবা"
    | "ডিজিটাল সেবা"
}

export type UnionInstitution = {
  name: string
  type: string
  description?: string
}

export type UnionData = {
  id: number
  slug: string

  nameBn: string
  nameEn: string

  shortName?: string

  district: string
  upazila: string
  division: string

  description: string

  address?: string
  officePhone?: string
  mobile?: string
  email?: string
  website?: string

  chairman?: string
  secretary?: string

  area?: string
  population?: string
  wards?: number
  villages?: number
  mouzas?: number

  image: string

  latitude?: number
  longitude?: number

  services: UnionService[]
  institutions: UnionInstitution[]

  importantPlaces: string[]

  emergencyContacts: {
    name: string
    number: string
  }[]

  governmentLinks: {
    title: string
    url: string
  }[]
}

const commonServices: UnionService[] = [
  {
    title: "জন্ম নিবন্ধন",
    description: "জন্ম নিবন্ধন সংক্রান্ত আবেদন ও তথ্য সহায়তা।",
    category: "নিবন্ধন",
  },
  {
    title: "মৃত্যু নিবন্ধন",
    description: "মৃত্যু নিবন্ধন সংক্রান্ত আবেদন ও তথ্য সহায়তা।",
    category: "নিবন্ধন",
  },
  {
    title: "নাগরিক সনদ",
    description: "ইউনিয়ন পরিষদ থেকে নাগরিকত্ব সংক্রান্ত সনদ পাওয়ার তথ্য।",
    category: "সনদ",
  },
  {
    title: "জাতীয়তা সনদ",
    description: "জাতীয়তা/নাগরিকত্ব সংক্রান্ত প্রত্যয়নের তথ্য।",
    category: "সনদ",
  },
  {
    title: "ওয়ারিশ সনদ",
    description: "ওয়ারিশ সনদ সংক্রান্ত আবেদন ও প্রয়োজনীয় তথ্য।",
    category: "সনদ",
  },
  {
    title: "চারিত্রিক সনদ",
    description: "চারিত্রিক সনদ সংক্রান্ত আবেদন ও তথ্য।",
    category: "সনদ",
  },
  {
    title: "পারিবারিক সনদ",
    description: "পারিবারিক তথ্য ও সনদ সংক্রান্ত সহায়তা।",
    category: "সনদ",
  },
  {
    title: "ট্রেড লাইসেন্স",
    description: "ব্যবসা পরিচালনার জন্য ট্রেড লাইসেন্স সংক্রান্ত তথ্য।",
    category: "কর ও লাইসেন্স",
  },
  {
    title: "হোল্ডিং/কর সংক্রান্ত তথ্য",
    description: "স্থানীয় কর ও হোল্ডিং সংক্রান্ত তথ্য।",
    category: "কর ও লাইসেন্স",
  },
  {
    title: "সামাজিক নিরাপত্তা কর্মসূচি",
    description: "বিভিন্ন সামাজিক নিরাপত্তা কর্মসূচি সম্পর্কে তথ্য ও সহায়তা।",
    category: "সামাজিক সেবা",
  },
  {
    title: "ভিজিডি/ভিজিএফ তথ্য",
    description: "ভিজিডি ও ভিজিএফ কর্মসূচি সংক্রান্ত তথ্য।",
    category: "সামাজিক সেবা",
  },
  {
    title: "বয়স্ক ভাতা",
    description: "বয়স্ক ভাতা সংক্রান্ত আবেদন ও তথ্য সহায়তা।",
    category: "সামাজিক সেবা",
  },
  {
    title: "বিধবা ও স্বামী নিগৃহীতা ভাতা",
    description: "ভাতা কর্মসূচি সংক্রান্ত তথ্য ও আবেদন সহায়তা।",
    category: "সামাজিক সেবা",
  },
  {
    title: "প্রতিবন্ধী ভাতা",
    description: "প্রতিবন্ধী ব্যক্তিদের জন্য সামাজিক নিরাপত্তা সংক্রান্ত তথ্য।",
    category: "সামাজিক সেবা",
  },
  {
    title: "ডিজিটাল সেন্টার সেবা",
    description: "অনলাইন সরকারি সেবা ও ডিজিটাল সেবা গ্রহণে সহায়তা।",
    category: "ডিজিটাল সেবা",
  },
]

const emergencyContacts = [
  {
    name: "জাতীয় জরুরি সেবা",
    number: "999",
  },
  {
    name: "সরকারি তথ্য ও সেবা",
    number: "333",
  },
  {
    name: "ফায়ার সার্ভিস",
    number: "102",
  },
  {
    name: "নারী ও শিশু নির্যাতন প্রতিরোধ",
    number: "109",
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
    title: "বাংলাদেশ নির্বাচন কমিশন",
    url: "https://www.ecs.gov.bd/",
  },
]

function createUnion(
  data: Omit<
    UnionData,
    | "district"
    | "upazila"
    | "division"
    | "services"
    | "institutions"
    | "importantPlaces"
    | "emergencyContacts"
    | "governmentLinks"
  >,
): UnionData {
  return {
    ...data,

    district: "শেরপুর",
    upazila: "নালিতাবাড়ী",
    division: "ময়মনসিংহ",

    services: [...commonServices],

    institutions: [],

    importantPlaces: [],

    emergencyContacts,

    governmentLinks,
  }
}

export const unions: UnionData[] = [
  createUnion({
    id: 1,
    slug: "poragaon",

    nameBn: "পোড়াগাঁও ইউনিয়ন",
    nameEn: "Poragaon Union",

    description:
      "নালিতাবাড়ী উপজেলার একটি ইউনিয়ন। সরকারি নির্বাচন ও ভূমি প্রশাসনের তথ্যভান্ডারে পোড়াগাঁও ইউনিয়নের নাম অন্তর্ভুক্ত রয়েছে।",

    image: "/unions/poragaon.jpg",
  }),

  createUnion({
    id: 2,
    slug: "nanni",

    nameBn: "নন্নী ইউনিয়ন",
    nameEn: "Nanni Union",

    description:
      "নালিতাবাড়ী উপজেলার একটি গুরুত্বপূর্ণ ইউনিয়ন। সরকারি ভূমি অফিসের তথ্য অনুযায়ী নন্নী ইউনিয়ন ভূমি অফিসের আওতায় একাধিক মৌজা রয়েছে।",

    image: "/unions/nanni.jpg",
  }),

  createUnion({
    id: 3,
    slug: "rajnagar",

    nameBn: "রাজনগর ইউনিয়ন",
    nameEn: "Rajnagar Union",

    description:
      "নালিতাবাড়ী উপজেলার রাজনগর ইউনিয়ন। সরকারি ভূমি প্রশাসনের তথ্যভান্ডারে রাজনগর ইউনিয়ন ভূমি অফিস ও সংশ্লিষ্ট মৌজার তথ্য রয়েছে।",

    image: "/unions/rajnagar.jpg",
  }),

  createUnion({
    id: 4,
    slug: "noyabil",

    nameBn: "নয়াবিল ইউনিয়ন",
    nameEn: "Nayabil Union",

    description:
      "নালিতাবাড়ী উপজেলার সীমান্তবর্তী ও প্রাকৃতিক বৈচিত্র্যময় এলাকার একটি ইউনিয়ন। নির্বাচন কমিশনের সরকারি নথিতে নয়াবিল ইউনিয়নের নাম রয়েছে।",

    image: "/unions/noyabil.jpg",
  }),

  createUnion({
    id: 5,
    slug: "ramchandrakura",

    nameBn: "রামচন্দ্রকুড়া ইউনিয়ন",
    nameEn: "Ramchandrakura Union",

    description:
      "নালিতাবাড়ী উপজেলার একটি ইউনিয়ন। নির্বাচন কমিশনের নথিতে রামচন্দ্রকুড়া ও মল্লিয়া পাড়া ইউনিয়নের নাম পাওয়া যায়।",

    image: "/unions/ramchandrakura.jpg",
  }),

  createUnion({
    id: 6,
    slug: "kakarkandi",

    nameBn: "কাকরকান্দি ইউনিয়ন",
    nameEn: "Kakarkandi Union",

    description:
      "নালিতাবাড়ী উপজেলার কাকরকান্দি ইউনিয়ন। সরকারি ভূমি অফিসের তথ্য অনুযায়ী এখানে কাকরকান্দি ইউনিয়ন ভূমি অফিস রয়েছে।",

    image: "/unions/kakarkandi.jpg",
  }),

  createUnion({
    id: 7,
    slug: "nalitabari",

    nameBn: "নালিতাবাড়ী ইউনিয়ন",
    nameEn: "Nalitabari Union",

    description:
      "নালিতাবাড়ী উপজেলার অন্যতম ইউনিয়ন। উপজেলা প্রশাসনের তথ্য অনুযায়ী উপজেলার একটি পৃথক পৌরসভাও রয়েছে।",

    image: "/unions/nalitabari.jpg",
  }),

  createUnion({
    id: 8,
    slug: "rupnarayankura",

    nameBn: "রূপনারায়ণকুড়া ইউনিয়ন",
    nameEn: "Rupnarayankura Union",

    description:
      "নালিতাবাড়ী উপজেলার একটি ইউনিয়ন। সরকারি প্রশাসনিক ও ভূমি সংক্রান্ত তথ্যভান্ডারে রূপনারায়ণকুড়া এলাকার তথ্য রয়েছে।",

    image: "/unions/rupnarayankura.jpg",
  }),

  createUnion({
    id: 9,
    slug: "morichpuran",

    nameBn: "মরিচপুরান ইউনিয়ন",
    nameEn: "Morichpuran Union",

    description:
      "নালিতাবাড়ী উপজেলার মরিচপুরান ইউনিয়ন। সরকারি ভূমি অফিসের তথ্যভান্ডারে মরিচপুরান এলাকার মৌজা ও ভূমি প্রশাসনের তথ্য রয়েছে।",

    image: "/unions/morichpuran.jpg",
  }),

  createUnion({
    id: 10,
    slug: "joganija",

    nameBn: "যোগানিয়া ইউনিয়ন",
    nameEn: "Joganija Union",

    description:
      "নালিতাবাড়ী উপজেলার একটি ইউনিয়ন। সরকারি ভূমি অফিসের তথ্য অনুযায়ী যোগানিয়া ইউনিয়ন ভূমি অফিসের আওতায় একাধিক মৌজা রয়েছে।",

    image: "/unions/joganija.jpg",
  }),

  createUnion({
    id: 11,
    slug: "baghber",

    nameBn: "বাঘবেড় ইউনিয়ন",
    nameEn: "Baghber Union",

    description:
      "নালিতাবাড়ী উপজেলার বাঘবেড় ইউনিয়ন। সরকারি ভূমি প্রশাসনের তথ্য অনুযায়ী বাঘবেড় ও কলসপাড় এলাকার জন্য ইউনিয়ন ভূমি অফিসের তথ্য রয়েছে।",

    image: "/unions/baghber.jpg",
  }),

  createUnion({
    id: 12,
    slug: "koloshpar",

    nameBn: "কলসপাড় ইউনিয়ন",
    nameEn: "Koloshpar Union",

    description:
      "নালিতাবাড়ী উপজেলার কলসপাড় ইউনিয়ন। সরকারি ভূমি অফিসের তথ্যভান্ডারে কলসপাড়সহ সংশ্লিষ্ট মৌজার তথ্য রয়েছে।",

    image: "/unions/koloshpar.jpg",
  }),
]

export function getUnionBySlug(slug: string) {
  return unions.find((union) => union.slug === slug)
}
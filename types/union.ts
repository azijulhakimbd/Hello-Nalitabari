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
  emergencyContacts: { name: string; number: string }[]
  governmentLinks: { title: string; url: string }[]
  sources: UnionSource[]
}
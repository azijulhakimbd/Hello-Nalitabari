"use client"

import { Search, SlidersHorizontal } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type DoctorFiltersProps = {
  search: string
  setSearch: (value: string) => void
  specialization: string
  setSpecialization: (value: string | null) => void
}

export default function DoctorFilters({
  search,
  setSearch,
  specialization,
  setSpecialization,
}: DoctorFiltersProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ডাক্তারের নাম বা পদবি খুঁজুন..."
          className="h-11 pl-10"
        />
      </div>

      <Select
        value={specialization}
        onValueChange={setSpecialization}
      >
        <SelectTrigger className="h-11 w-full md:w-[240px]">
          <SlidersHorizontal className="mr-2 size-4" />
          <SelectValue placeholder="বিশেষজ্ঞতা নির্বাচন করুন" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">সকল বিভাগ</SelectItem>
          <SelectItem value="Medicine">মেডিসিন</SelectItem>
          <SelectItem value="Gynecology & Obstetrics">
            গাইনি ও প্রসূতি
          </SelectItem>
          <SelectItem value="Pediatrics">শিশু বিভাগ</SelectItem>
          <SelectItem value="Dental">ডেন্টাল</SelectItem>
          <SelectItem value="Orthopedics & Traumatology">
            অর্থোপেডিক
          </SelectItem>
          <SelectItem value="Ophthalmology">
            চক্ষু
          </SelectItem>
          <SelectItem value="Surgery">
            সার্জারি
          </SelectItem>
          <SelectItem value="Emergency Medicine">
            জরুরি চিকিৎসা
          </SelectItem>
          <SelectItem value="Homeopathic">
            হোমিওপ্যাথিক
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
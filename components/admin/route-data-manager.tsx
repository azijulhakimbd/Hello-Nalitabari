"use client"

import { useEffect, useRef, useState } from "react"
import { ImagePlus, LoaderCircle, Pencil, Plus, Save, Search, Trash2, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ROUTE_DATA_KEYS, type RouteDataKey } from "@/lib/route-data-keys"

type RouteRecord = {
  id: string
  recordKey: string
  position: number
  data: Record<string, unknown>
}

const routeLabels: Record<RouteDataKey, string> = {
  businesses: "ব্যবসা প্রতিষ্ঠান",
  colleges: "কলেজ",
  communities: "কমিউনিটি",
  "directory-categories": "ডিরেক্টরি ক্যাটাগরি",
  "directory-emergency-services": "ডিরেক্টরি জরুরি সেবা",
  "directory-popular": "জনপ্রিয় ডিরেক্টরি",
  "education-institutions": "শিক্ষা প্রতিষ্ঠান",
  "emergency-services": "জরুরি সেবা",
  "emergency-quick-numbers": "জরুরি নম্বর",
  events: "ইভেন্ট",
  "government-services": "সরকারি সেবা",
  "government-offices": "সরকারি অফিস",
  "health-categories": "স্বাস্থ্য ক্যাটাগরি",
  "health-facilities": "স্বাস্থ্যসেবা প্রতিষ্ঠান",
  hospitals: "হাসপাতাল",
  notices: "নোটিশ",
  pharmacies: "ফার্মেসি",
  places: "দর্শনীয় স্থান",
  "place-details": "স্থান পরিচিতি",
  schools: "স্কুল",
  transports: "পরিবহন",
  unions: "ইউনিয়ন",
  doctors: "ডাক্তার",
}

function recordTitle(data: RouteRecord["data"], fallback: string) {
  const title = data.name ?? data.title ?? data.englishName ?? data.id
  return typeof title === "string" || typeof title === "number" ? String(title) : fallback
}

function existingImageField(data: RouteRecord["data"]) {
  return ["image", "imageUrl", "photo", "thumbnail", "coverImage"].find((field) => typeof data[field] === "string") ?? "image"
}

const fieldLabels: Record<string, string> = {
  address: "ঠিকানা",
  category: "ক্যাটাগরি",
  date: "তারিখ",
  description: "বিবরণ",
  details: "বিস্তারিত",
  email: "ইমেইল",
  englishName: "ইংরেজি নাম",
  established: "প্রতিষ্ঠাকাল",
  featured: "বিশেষ তালিকায় দেখান",
  highlights: "বিশেষ দিক",
  icon: "আইকন",
  id: "আইডি",
  image: "ছবি",
  imageUrl: "ছবির URL",
  location: "অবস্থান",
  mapUrl: "মানচিত্রের URL",
  mobile: "মোবাইল",
  name: "নাম",
  nameBn: "বাংলা নাম",
  nameEn: "ইংরেজি নাম",
  phone: "ফোন",
  photo: "ছবি",
  slug: "স্লাগ",
  title: "শিরোনাম",
  type: "ধরন",
  website: "ওয়েবসাইট",
}

function fieldLabel(name: string) {
  return fieldLabels[name] ?? name.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/[_-]/g, " ").replace(/^./, (letter) => letter.toUpperCase())
}

function emptyValue(type: string): unknown {
  if (type === "number") return 0
  if (type === "boolean") return false
  if (type === "object") return {}
  if (type === "array") return []
  return ""
}

function blankFromTemplate(value: unknown): unknown {
  if (Array.isArray(value)) return value.length ? [blankFromTemplate(value[0])] : []
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, blankFromTemplate(child)]))
  }
  return emptyValue(typeof value)
}

function valueType(value: unknown) {
  if (Array.isArray(value)) return "array"
  if (value !== null && typeof value === "object") return "object"
  return typeof value
}

function RecordFields({ value, onChange, depth = 0 }: {
  value: Record<string, unknown>
  onChange: (value: Record<string, unknown>) => void
  depth?: number
}) {
  const [newField, setNewField] = useState("")

  function addField() {
    const name = newField.trim()
    if (!name || Object.hasOwn(value, name)) return
    onChange({ ...value, [name]: "" })
    setNewField("")
  }

  return (
    <div className={depth ? "space-y-3 border-l-2 border-border pl-3" : "space-y-3"}>
      {Object.entries(value).map(([name, child]) => (
        <RecordField
          key={name}
          name={name}
          value={child}
          onChange={(nextValue) => onChange({ ...value, [name]: nextValue })}
          onRemove={() => {
            const next = { ...value }
            delete next[name]
            onChange(next)
          }}
          depth={depth}
        />
      ))}
      <div className="flex gap-2">
        <Input
          value={newField}
          onChange={(event) => setNewField(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault()
              addField()
            }
          }}
          placeholder="নতুন তথ্যের নাম"
          aria-label="নতুন তথ্যের নাম"
          className="min-w-0"
        />
        <Button type="button" variant="outline" size="icon" onClick={addField} title="তথ্য যোগ করুন" aria-label="তথ্য যোগ করুন">
          <Plus className="size-4" />
        </Button>
      </div>
    </div>
  )
}

function RecordField({ name, value, onChange, onRemove, depth }: {
  name: string
  value: unknown
  onChange: (value: unknown) => void
  onRemove: () => void
  depth: number
}) {
  const [itemType, setItemType] = useState(() => {
    const firstItem = Array.isArray(value) ? value[0] : undefined
    const type = valueType(firstItem)
    return ["number", "boolean", "object", "array"].includes(type) ? type : "string"
  })

  if (Array.isArray(value)) {
    return (
      <fieldset className="min-w-0 space-y-3 rounded-md border p-3">
        <legend className="px-1 text-sm font-medium">{fieldLabel(name)} <span className="text-xs font-normal text-muted-foreground">({value.length})</span></legend>
        <div className="flex justify-end">
          <Button type="button" variant="ghost" size="icon" title="তালিকা মুছুন" aria-label={`${fieldLabel(name)} তালিকা মুছুন`} onClick={onRemove}>
            <X className="size-4" />
          </Button>
        </div>
        {value.map((item, index) => (
          <RecordField
            key={`${name}-${index}`}
            name={`আইটেম ${index + 1}`}
            value={item}
            onChange={(nextItem) => onChange(value.map((current, itemIndex) => itemIndex === index ? nextItem : current))}
            onRemove={() => onChange(value.filter((_, itemIndex) => itemIndex !== index))}
            depth={depth + 1}
          />
        ))}
        <div className="flex flex-wrap items-center gap-2">
          <select
            value={itemType}
            onChange={(event) => setItemType(event.target.value)}
            aria-label={`${fieldLabel(name)} তালিকায় কী যোগ করবেন`}
            className="h-9 min-w-28 rounded-md border border-input bg-background px-2 text-sm"
          >
            <option value="string">লেখা</option>
            <option value="number">সংখ্যা</option>
            <option value="boolean">হ্যাঁ/না</option>
            <option value="object">অবজেক্ট</option>
            <option value="array">আরেকটি তালিকা</option>
          </select>
          <Button type="button" variant="outline" size="sm" onClick={() => onChange([...value, emptyValue(itemType)])}>
            <Plus className="size-4" />আইটেম যোগ করুন
          </Button>
        </div>
      </fieldset>
    )
  }

  if (value !== null && typeof value === "object") {
    return (
      <fieldset className="min-w-0 space-y-3 rounded-md border p-3">
        <legend className="px-1 text-sm font-medium">{fieldLabel(name)}</legend>
        <div className="flex justify-end">
          <Button type="button" variant="ghost" size="icon" title="অবজেক্ট মুছুন" aria-label={`${fieldLabel(name)} মুছুন`} onClick={onRemove}>
            <X className="size-4" />
          </Button>
        </div>
        <RecordFields value={value as Record<string, unknown>} onChange={onChange} depth={depth + 1} />
      </fieldset>
    )
  }

  return (
    <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-end gap-2">
      <label className="grid min-w-0 gap-1.5 text-sm font-medium">
        {fieldLabel(name)}
        {typeof value === "boolean" ? (
          <span className="flex h-10 items-center gap-2 rounded-md border border-input px-3 font-normal">
            <input type="checkbox" checked={value} onChange={(event) => onChange(event.target.checked)} className="size-4 accent-primary" />
            {value ? "হ্যাঁ" : "না"}
          </span>
        ) : typeof value === "number" ? (
          <Input type="number" value={value} onChange={(event) => onChange(event.target.value === "" ? 0 : Number(event.target.value))} />
        ) : name.toLowerCase().match(/description|details|summary|content|address/) || (typeof value === "string" && value.length > 100) ? (
          <Textarea value={typeof value === "string" ? value : ""} onChange={(event) => onChange(event.target.value)} className="min-h-20 resize-y" />
        ) : (
          <Input value={typeof value === "string" ? value : ""} onChange={(event) => onChange(event.target.value)} />
        )}
      </label>
      <Button type="button" variant="ghost" size="icon" title={`${fieldLabel(name)} মুছুন`} aria-label={`${fieldLabel(name)} মুছুন`} onClick={onRemove}>
        <X className="size-4 text-muted-foreground" />
      </Button>
    </div>
  )
}

export function RouteDataManager() {
  const [routeKey, setRouteKey] = useState<RouteDataKey>(ROUTE_DATA_KEYS[0])
  const [records, setRecords] = useState<RouteRecord[]>([])
  const [selected, setSelected] = useState<RouteRecord | null>(null)
  const [formData, setFormData] = useState<Record<string, unknown>>({})
  const [imageField, setImageField] = useState("image")
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [deleting, setDeleting] = useState("")
  const [error, setError] = useState("")
  const [notice, setNotice] = useState("")
  const fileInput = useRef<HTMLInputElement>(null)
  const imageUrl = typeof formData[imageField] === "string" ? formData[imageField] as string : ""

  useEffect(() => {
    let active = true

    async function loadRecords() {
      try {
        const response = await fetch(`/api/admin/route-data?routeKey=${routeKey}`)
        const result = await response.json()
        if (!response.ok) throw new Error(result.message || "রেকর্ড লোড করা যায়নি।")
        if (active) setRecords(result.records)
      } catch (loadError) {
        if (active) setError(loadError instanceof Error ? loadError.message : "রেকর্ড লোড করা যায়নি।")
      } finally {
        if (active) setLoading(false)
      }
    }

    loadRecords()

    return () => {
      active = false
    }
  }, [routeKey])

  function startNewRecord(template?: RouteRecord["data"]) {
    setSelected(null)
    const nextData = template ? blankFromTemplate(template) as RouteRecord["data"] : {}
    if (typeof nextData.id === "number") {
      nextData.id = Math.max(0, ...records.map((record) => typeof record.data.id === "number" ? record.data.id : 0)) + 1
    }
    setFormData(nextData)
    setImageField("image")
    setError("")
    setNotice("")
  }

  function editRecord(record: RouteRecord) {
    setSelected(record)
    setFormData(structuredClone(record.data))
    const field = existingImageField(record.data)
    setImageField(field)
    setError("")
    setNotice("")
  }

  async function saveRecord(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaving(true)
    setError("")
    setNotice("")

    try {
      const response = await fetch(selected ? `/api/admin/route-data/${selected.id}` : "/api/admin/route-data", {
        method: selected ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(selected ? { data: formData } : { routeKey, data: formData }),
      })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || "রেকর্ড সংরক্ষণ করা যায়নি।")

      setNotice(selected ? "রেকর্ড হালনাগাদ হয়েছে।" : "নতুন রেকর্ড যোগ হয়েছে।")
      setSelected(null)
      setFormData({})
      const recordsResponse = await fetch(`/api/admin/route-data?routeKey=${routeKey}`)
      const recordsResult = await recordsResponse.json()
      if (recordsResponse.ok) setRecords(recordsResult.records)
    } catch (saveError) {
      setError(saveError instanceof Error ? saveError.message : "রেকর্ড সংরক্ষণ করা যায়নি।")
    } finally {
      setSaving(false)
    }
  }

  async function deleteRecord(record: RouteRecord) {
    if (!window.confirm(`“${recordTitle(record.data, record.recordKey)}” রেকর্ডটি মুছে ফেলবেন?`)) return
    setDeleting(record.id)
    setError("")
    setNotice("")

    try {
      const response = await fetch(`/api/admin/route-data/${record.id}`, { method: "DELETE" })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || "রেকর্ড মুছে ফেলা যায়নি।")
      setRecords((current) => current.filter((item) => item.id !== record.id))
      if (selected?.id === record.id) startNewRecord()
      setNotice("রেকর্ড মুছে ফেলা হয়েছে।")
    } catch (deleteError) {
      setError(deleteError instanceof Error ? deleteError.message : "রেকর্ড মুছে ফেলা যায়নি।")
    } finally {
      setDeleting("")
    }
  }

  async function uploadImage(file: File | undefined) {
    if (!file) return
    setUploading(true)
    setError("")
    setNotice("")
    try {
      const formData = new FormData()
      formData.set("image", file)
      const response = await fetch("/api/admin/route-data/upload", { method: "POST", body: formData })
      const result = await response.json()
      if (!response.ok) throw new Error(result.message || "ছবি আপলোড করা যায়নি।")
      setFormData((current) => ({ ...current, [imageField]: result.imageUrl }))
      setNotice("ছবি Cloudinary-তে আপলোড হয়েছে। রেকর্ড সংরক্ষণ করলে URL যুক্ত হবে।")
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "ছবি আপলোড করা যায়নি।")
    } finally {
      setUploading(false)
      if (fileInput.current) fileInput.current.value = ""
    }
  }

  const visibleRecords = records.filter((record) => {
    const text = `${recordTitle(record.data, record.recordKey)} ${JSON.stringify(record.data)}`.toLowerCase()
    return text.includes(search.toLowerCase())
  })

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <label className="grid gap-1.5 text-sm font-medium sm:min-w-72">
          পরিচালনার পৃষ্ঠা
          <select
            value={routeKey}
            onChange={(event) => {
              startNewRecord()
              setSearch("")
              setLoading(true)
              setRouteKey(event.target.value as RouteDataKey)
            }}
            className="h-10 rounded-md border border-input bg-background px-3 font-normal outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {ROUTE_DATA_KEYS.map((key) => <option key={key} value={key}>{routeLabels[key]}</option>)}
          </select>
        </label>
        <Button onClick={() => startNewRecord(records[0]?.data)}><Plus className="size-4" />নতুন রেকর্ড</Button>
      </div>

      {(error || notice) && (
        <p role={error ? "alert" : "status"} className={`rounded-md border px-4 py-3 text-sm ${error ? "border-destructive/30 bg-destructive/10 text-destructive" : "border-emerald-700/20 bg-emerald-700/5 text-emerald-800 dark:text-emerald-300"}`}>
          {error || notice}
        </p>
      )}

      <div className="grid items-start gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)]">
        <Card>
          <CardHeader className="gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <CardTitle>{routeLabels[routeKey]}</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">{records.length.toLocaleString("bn-BD")}টি রেকর্ড</p>
            </div>
            <div className="relative sm:w-56">
              <Search className="absolute top-2.5 left-3 size-4 text-muted-foreground" />
              <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="রেকর্ড খুঁজুন" className="pl-9" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            {loading ? (
              <div className="flex items-center gap-2 p-6 text-sm text-muted-foreground"><LoaderCircle className="size-4 animate-spin" />তথ্য লোড হচ্ছে...</div>
            ) : visibleRecords.length === 0 ? (
              <p className="p-6 text-sm text-muted-foreground">কোনো রেকর্ড পাওয়া যায়নি।</p>
            ) : (
              <div className="max-h-[68vh] overflow-auto">
                <table className="w-full min-w-105 text-left text-sm">
                  <thead className="sticky top-0 border-y bg-muted/70 text-muted-foreground">
                    <tr><th className="px-4 py-3 font-medium">রেকর্ড</th><th className="px-4 py-3 text-right font-medium">কার্যক্রম</th></tr>
                  </thead>
                  <tbody className="divide-y">
                    {visibleRecords.map((record) => (
                      <tr key={record.id} className={selected?.id === record.id ? "bg-muted/60" : ""}>
                        <td className="max-w-0 px-4 py-3">
                          <p className="truncate font-medium">{recordTitle(record.data, record.recordKey)}</p>
                          <p className="mt-1 truncate text-xs text-muted-foreground">{Object.keys(record.data).slice(0, 5).join(" · ")}</p>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex justify-end gap-1">
                            <Button size="icon" variant="ghost" title="সম্পাদনা" aria-label="সম্পাদনা" onClick={() => editRecord(record)}><Pencil className="size-4" /></Button>
                            <Button size="icon" variant="ghost" title="মুছুন" aria-label="মুছুন" disabled={deleting === record.id} onClick={() => deleteRecord(record)}><Trash2 className="size-4 text-destructive" /></Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between gap-3">
            <div>
              <CardTitle>{selected ? "রেকর্ড সম্পাদনা" : "নতুন রেকর্ড"}</CardTitle>
              <p className="mt-1 text-sm text-muted-foreground">{routeLabels[routeKey]}</p>
            </div>
            {selected && <Button size="icon" variant="ghost" title="সম্পাদনা বন্ধ" aria-label="সম্পাদনা বন্ধ" onClick={() => startNewRecord()}><X className="size-4" /></Button>}
          </CardHeader>
          <CardContent>
            <form onSubmit={saveRecord} className="space-y-4">
              <div className="max-h-[58vh] space-y-4 overflow-y-auto pr-1">
                <RecordFields value={formData} onChange={setFormData} />
              </div>
              <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(120px,0.55fr)]">
                <label className="grid gap-1.5 text-sm font-medium">
                  ছবির URL
                  <Input value={imageUrl} onChange={(event) => setFormData((current) => ({ ...current, [imageField]: event.target.value }))} placeholder="Cloudinary image URL" />
                </label>
                <label className="grid gap-1.5 text-sm font-medium">
                  ছবির তথ্যের নাম
                  <select
                    value={imageField}
                    onChange={(event) => setImageField(event.target.value)}
                    className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {[...new Set(["image", "imageUrl", "photo", ...Object.entries(formData).filter(([, value]) => typeof value === "string").map(([key]) => key)])].map((field) => (
                      <option key={field} value={field}>{fieldLabel(field)}</option>
                    ))}
                  </select>
                </label>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <input ref={fileInput} type="file" accept="image/png,image/jpeg,image/webp" className="sr-only" onChange={(event) => uploadImage(event.target.files?.[0])} />
                <Button type="button" variant="outline" disabled={uploading} onClick={() => fileInput.current?.click()}>
                  {uploading ? <LoaderCircle className="size-4 animate-spin" /> : <ImagePlus className="size-4" />}
                  {uploading ? "আপলোড হচ্ছে..." : "ছবি আপলোড"}
                </Button>
                {imageUrl && <span className="max-w-full truncate text-xs text-muted-foreground">ছবির URL প্রস্তুত</span>}
                <Button type="submit" disabled={saving} className="ml-auto">
                  {saving ? <LoaderCircle className="size-4 animate-spin" /> : <Save className="size-4" />}
                  {saving ? "সংরক্ষণ হচ্ছে..." : "সংরক্ষণ"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export type Doctor = {
  id: number
  name: string
  designation: string
  specialization: string
  email: string
  mobile: string
  officePhone?: string
  room?: string
  photo: string
  category: "doctor" | "nurse"
}
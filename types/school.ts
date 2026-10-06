export type SchoolType =
  | "Primary School"
  | "Secondary School"
  | "Madrasa"
  | "Academy"
  | "Private School"

export interface SchoolData {
  id: number
  name: string
  type: SchoolType
  address: string
  phone: string
  students: string
  established: string
  image: string
  eiin?: string
  mapUrl: string
}
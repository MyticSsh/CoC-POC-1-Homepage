export interface TeamMember {
  name: string
  position: string
  bio: string
  image?: string
}

export interface Service {
  title: string
  description: string
  icon: string
}

export interface ContactInfo {
  email: string
  phone: string
  address: string
}

export interface CompanyInfo {
  name: string
  description: string
  mission: string
  vision: string
  values: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
}

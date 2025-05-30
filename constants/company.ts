import type { TeamMember, Service, ContactInfo, CompanyInfo, SocialLink } from "@/types"

export const COMPANY_INFO: CompanyInfo = {
  name: "Code Of Creation",
  description: "We create innovative software solutions that drive business growth and digital transformation.",
  mission: "To empower businesses through innovative software solutions that drive growth and efficiency.",
  vision: "To become a global leader in software innovation, setting new standards in the industry.",
  values: "Innovation, quality, collaboration, and customer-centricity guide everything we do.",
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Suhong Seong",
    position: "CEO & Lead Developer",
    bio: "Full-stack developer with 10+ years of experience in building scalable software solutions.",
  },
  {
    name: "Jingon Song",
    position: "CTO & Software Architect",
    bio: "Expert in system architecture and emerging technologies, passionate about innovation.",
  },
]

export const SERVICES: Service[] = [
  {
    title: "Software Development",
    description: "Custom software solutions built with modern technologies to solve complex business challenges.",
    icon: "Code",
  },
  {
    title: "Web Solutions",
    description:
      "Responsive web applications and websites that deliver exceptional user experiences across all devices.",
    icon: "Monitor",
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that engage users and drive business growth.",
    icon: "Smartphone",
  },
]

export const CONTACT_INFO: ContactInfo = {
  email: "hello@codeofcreation.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech Valley, CA 94000",
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    href: "#",
    icon: "facebook",
  },
  {
    name: "Instagram",
    href: "#",
    icon: "instagram",
  },
  {
    name: "Twitter",
    href: "#",
    icon: "twitter",
  },
]

export const NAVIGATION_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
]

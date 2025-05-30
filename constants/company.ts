/**
 * 회사 관련 상수 데이터 파일
 * 회사 정보, 팀 멤버, 서비스, 연락처 등의 정적 데이터를 관리합니다.
 */

import type { TeamMember, Service, ContactInfo, CompanyInfo, SocialLink } from "@/types"

/**
 * 회사 기본 정보
 * 회사명, 설명, 미션, 비전, 핵심 가치를 포함합니다.
 */
export const COMPANY_INFO: CompanyInfo = {
  name: "Code Of Creation",
  description: "We create innovative software solutions that drive business growth and digital transformation.",
  mission: "To empower businesses through innovative software solutions that drive growth and efficiency.",
  vision: "To become a global leader in software innovation, setting new standards in the industry.",
  values: "Innovation, quality, collaboration, and customer-centricity guide everything we do.",
}

/**
 * 팀 멤버 정보 배열
 * 회사의 주요 팀 멤버들의 정보를 포함합니다.
 */
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

/**
 * 제공 서비스 정보 배열
 * 회사에서 제공하는 주요 서비스들의 정보를 포함합니다.
 */
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

/**
 * 연락처 정보
 * 회사의 이메일, 전화번호, 주소 정보를 포함합니다.
 */
export const CONTACT_INFO: ContactInfo = {
  email: "hello@codeofcreation.com",
  phone: "+1 (555) 123-4567",
  address: "123 Innovation Drive, Tech Valley, CA 94000",
}

/**
 * 소셜 미디어 링크 배열
 * 회사의 소셜 미디어 계정 링크들을 포함합니다.
 */
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

/**
 * 네비게이션 메뉴 아이템 배열
 * 헤더에서 사용되는 네비게이션 메뉴 항목들을 정의합니다.
 */
export const NAVIGATION_ITEMS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
]

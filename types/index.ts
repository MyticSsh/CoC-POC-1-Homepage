/**
 * 타입 정의 파일
 * 애플리케이션 전체에서 사용되는 TypeScript 인터페이스들을 정의합니다.
 */

/**
 * 팀 멤버 정보를 나타내는 인터페이스
 * @interface TeamMember
 */
export interface TeamMember {
  /** 팀 멤버의 이름 */
  name: string
  /** 팀 멤버의 직책 */
  position: string
  /** 팀 멤버에 대한 간단한 소개 */
  bio: string
  /** 팀 멤버의 프로필 이미지 URL (선택사항) */
  image?: string
}

/**
 * 서비스 정보를 나타내는 인터페이스
 * @interface Service
 */
export interface Service {
  /** 서비스 제목 */
  title: string
  /** 서비스에 대한 상세 설명 */
  description: string
  /** 서비스를 나타내는 아이콘 이름 */
  icon: string
}

/**
 * 연락처 정보를 나타내는 인터페이스
 * @interface ContactInfo
 */
export interface ContactInfo {
  /** 이메일 주소 */
  email: string
  /** 전화번호 */
  phone: string
  /** 회사 주소 */
  address: string
}

/**
 * 회사 정보를 나타내는 인터페이스
 * @interface CompanyInfo
 */
export interface CompanyInfo {
  /** 회사명 */
  name: string
  /** 회사에 대한 간단한 설명 */
  description: string
  /** 회사의 미션 */
  mission: string
  /** 회사의 비전 */
  vision: string
  /** 회사의 핵심 가치 */
  values: string
}

/**
 * 소셜 미디어 링크 정보를 나타내는 인터페이스
 * @interface SocialLink
 */
export interface SocialLink {
  /** 소셜 미디어 플랫폼 이름 */
  name: string
  /** 소셜 미디어 링크 URL */
  href: string
  /** 소셜 미디어 아이콘 이름 */
  icon: string
}

// 파일 설명 주석 추가

/**
 * 사이트 설정 파일
 * SEO, 메타데이터, 소셜 미디어 링크 등 사이트 전반의 설정을 관리합니다.
 */

/**
 * 사이트 기본 설정 객체
 * 사이트명, 설명, URL, OG 이미지, 소셜 링크 등을 포함합니다.
 */
export const siteConfig = {
  /** 사이트 이름 */
  name: "Code Of Creation",
  /** 사이트 설명 (SEO용) */
  description: "We create innovative software solutions that drive business growth and digital transformation.",
  /** 사이트 기본 URL */
  url: "https://codeofcreation.com",
  /** Open Graph 이미지 URL */
  ogImage: "https://codeofcreation.com/og.jpg",
  /** 소셜 미디어 링크들 */
  links: {
    twitter: "https://twitter.com/codeofcreation",
    github: "https://github.com/codeofcreation",
    linkedin: "https://linkedin.com/company/codeofcreation",
  },
}

/** 사이트 설정 타입 정의 */
export type SiteConfig = typeof siteConfig

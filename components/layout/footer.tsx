// 파일 설명 주석 추가

/**
 * 푸터 컴포넌트
 * 사이트 하단에 위치하는 푸터를 렌더링합니다.
 * 로고, 저작권 정보, 소셜 미디어 링크를 포함합니다.
 */

import Link from "next/link"
import { Code } from "lucide-react"
import { COMPANY_INFO, SOCIAL_LINKS } from "@/constants/company"

/**
 * 푸터 컴포넌트
 * @returns {JSX.Element} 푸터 JSX 엘리먼트
 */
export function Footer() {
  /**
   * 소셜 미디어 아이콘을 반환하는 함수
   * @param {string} iconName - 아이콘 이름
   * @returns {JSX.Element | null} 해당하는 SVG 아이콘 또는 null
   */
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "facebook":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        )
      case "instagram":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        )
      case "twitter":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
          >
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        {/* 로고 섹션 */}
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6" />
          <span className="text-lg font-bold">{COMPANY_INFO.name}</span>
        </div>

        {/* 저작권 정보 */}
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
        </p>

        {/* 소셜 미디어 링크들 */}
        <div className="flex gap-4">
          {SOCIAL_LINKS.map((link) => (
            <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground">
              {getSocialIcon(link.icon)}
              <span className="sr-only">{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

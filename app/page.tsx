// 파일 설명 주석 추가

/**
 * 메인 페이지 컴포넌트
 * 홈페이지의 모든 섹션들을 조합하여 완전한 페이지를 구성합니다.
 */

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { TeamSection } from "@/components/sections/team-section"
import { ContactSection } from "@/components/sections/contact-section"

/**
 * 홈페이지 메인 컴포넌트
 * @returns {JSX.Element} 완전한 홈페이지 JSX 엘리먼트
 */
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 헤더 */}
      <Header />

      {/* 메인 콘텐츠 */}
      <main className="flex-1">
        <HeroSection /> {/* 히어로 섹션 */}
        <AboutSection /> {/* 회사 소개 섹션 */}
        <ServicesSection /> {/* 서비스 섹션 */}
        <TeamSection /> {/* 팀 소개 섹션 */}
        <ContactSection /> {/* 연락처 섹션 */}
      </main>

      {/* 푸터 */}
      <Footer />
    </div>
  )
}

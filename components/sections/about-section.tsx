// 파일 설명 주석 추가

/**
 * 회사 소개 섹션 컴포넌트
 * 회사에 대한 정보, 미션, 비전, 핵심 가치를 표시합니다.
 */

import Image from "next/image"
import { CheckCircle } from "lucide-react"
import { COMPANY_INFO } from "@/constants/company"

/**
 * 회사 소개 섹션 컴포넌트
 * @returns {JSX.Element} 회사 소개 섹션 JSX 엘리먼트
 */
export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* 섹션 헤더 */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Who We Are</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Founded in 2020, Code Of Creation is a cutting-edge software development company dedicated to creating
              innovative digital solutions. We believe in the power of code to transform ideas into reality.
            </p>
          </div>
        </div>

        {/* 메인 콘텐츠 영역 */}
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {/* 회사 이미지 */}
          <Image
            src="/placeholder.svg?height=400&width=600"
            width={600}
            height={400}
            alt="Our Team"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />

          {/* 미션, 비전, 가치 리스트 */}
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              {/* 미션 */}
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Mission</h3>
                  <p className="text-muted-foreground">{COMPANY_INFO.mission}</p>
                </div>
              </li>
              {/* 비전 */}
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Vision</h3>
                  <p className="text-muted-foreground">{COMPANY_INFO.vision}</p>
                </div>
              </li>
              {/* 핵심 가치 */}
              <li className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Values</h3>
                  <p className="text-muted-foreground">{COMPANY_INFO.values}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

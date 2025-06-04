/**
 * 히어로 섹션 컴포넌트
 * 메인 페이지 상단의 히어로 섹션을 렌더링합니다.
 * 메인 헤드라인, 설명, CTA 버튼, 히어로 이미지를 포함합니다.
 */

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

/**
 * 히어로 섹션 컴포넌트
 * @returns {JSX.Element} 히어로 섹션 JSX 엘리먼트
 */
export function HeroSection() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          {/* 텍스트 콘텐츠 영역 */}
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              {/* 메인 헤드라인 */}
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Creating the Future Through Code
              </h1>
              {/* 서브 헤드라인 */}
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                We build innovative software solutions that transform businesses and drive digital growth. Let's create
                something amazing together.
              </p>
            </div>
            {/* CTA 버튼들 */}
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="gap-1">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Contact Us
              </Button>
            </div>
          </div>
          {/* 히어로 이미지 */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/hero.png"
              width={550}
              height={550}
              alt="Software Development"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
            />
          </div>
        </div>
      </div>
    </section>
  )
}

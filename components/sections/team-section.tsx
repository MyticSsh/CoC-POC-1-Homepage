/**
 * 팀 소개 섹션 컴포넌트
 * 회사의 주요 팀 멤버들을 카드 형태로 표시합니다.
 */

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { TEAM_MEMBERS } from "@/constants/company"

/**
 * 팀 소개 섹션 컴포넌트
 * @returns {JSX.Element} 팀 소개 섹션 JSX 엘리먼트
 */
export function TeamSection() {
  return (
    <section id="team" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* 섹션 헤더 */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Experts</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our talented team of developers and designers work together to deliver exceptional results.
            </p>
          </div>
        </div>

        {/* 팀 멤버 카드 그리드 */}
        <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-2">
          {TEAM_MEMBERS.map((member, index) => (
            <Card key={index} className="overflow-hidden">
              {/* 팀 멤버 프로필 이미지 */}
              <div className="aspect-square relative">
                <Image
                  src={`/images/team-member-${index + 1}.png`}
                  alt={member.name}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
              {/* 팀 멤버 정보 */}
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-primary">{member.position}</p>
                <p className="mt-2 text-muted-foreground">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// 파일 설명 주석 추가

/**
 * 연락처 섹션 컴포넌트
 * 연락처 정보와 문의 양식을 표시합니다.
 */

"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import { CONTACT_INFO } from "@/constants/company"
import { useState } from "react"

/**
 * 연락처 섹션 컴포넌트
 * @returns {JSX.Element} 연락처 섹션 JSX 엘리먼트
 */
export function ContactSection() {
  /** 문의 양식 데이터 상태 관리 */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  /**
   * 양식 제출 핸들러
   * @param {React.FormEvent} e - 폼 이벤트
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 실제 양식 제출 로직 구현
    console.log("Form submitted:", formData)
  }

  /**
   * 입력 필드 변경 핸들러
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - 입력 이벤트
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        {/* 섹션 헤더 */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get In Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to start your next project? Contact us today and let's discuss how we can help bring your ideas to
              life.
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {/* 연락처 정보 */}
          <div className="flex flex-col gap-4">
            {/* 이메일 */}
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <p className="text-muted-foreground">{CONTACT_INFO.email}</p>
              </div>
            </div>
            {/* 전화번호 */}
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-bold">Phone</h3>
                <p className="text-muted-foreground">{CONTACT_INFO.phone}</p>
              </div>
            </div>
            {/* 주소 */}
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="text-lg font-bold">Address</h3>
                <p className="text-muted-foreground">{CONTACT_INFO.address}</p>
              </div>
            </div>
          </div>

          {/* 문의 양식 */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 이름과 이메일 입력 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Name
                </label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            {/* 제목 입력 */}
            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Subject
              </label>
              <input
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Project Inquiry"
                required
              />
            </div>

            {/* 메시지 입력 */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us about your project..."
                required
              />
            </div>

            {/* 제출 버튼 */}
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

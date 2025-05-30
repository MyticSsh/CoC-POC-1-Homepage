// 파일 설명 주석 추가

/**
 * 연락처 폼 검증 스키마 파일
 * Zod를 사용하여 연락처 폼의 입력값 검증 규칙을 정의합니다.
 */

import { z } from "zod"

/**
 * 연락처 폼 검증 스키마
 * 이름, 이메일, 제목, 메시지 필드의 검증 규칙을 정의합니다.
 */
export const contactFormSchema = z.object({
  /** 이름 필드 - 2자 이상 50자 이하 */
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  /** 이메일 필드 - 유효한 이메일 형식 */
  email: z.string().email("Please enter a valid email address"),
  /** 제목 필드 - 5자 이상 100자 이하 */
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  /** 메시지 필드 - 10자 이상 1000자 이하 */
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
})

/** 연락처 폼 데이터 타입 정의 */
export type ContactFormData = z.infer<typeof contactFormSchema>

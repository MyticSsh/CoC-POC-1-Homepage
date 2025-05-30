// 파일 설명 주석 추가

/**
 * 환경 변수 검증 및 타입 정의 파일
 * Zod를 사용하여 환경 변수의 유효성을 검사하고 타입을 정의합니다.
 */

import { z } from "zod"

/**
 * 환경 변수 스키마 정의
 * 애플리케이션에서 사용하는 모든 환경 변수의 타입과 기본값을 정의합니다.
 */
const envSchema = z.object({
  /** 현재 실행 환경 (개발/스테이징/프로덕션) */
  NODE_ENV: z.enum(["development", "staging", "production"]).default("development"),
  /** 애플리케이션 공개 URL */
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),
  /** 데이터베이스 연결 URL */
  DATABASE_URL: z.string().optional(),
  /** NextAuth 시크릿 키 */
  NEXTAUTH_SECRET: z.string().optional(),
  /** NextAuth 기본 URL */
  NEXTAUTH_URL: z.string().url().optional(),
  /** 이메일 서버 호스트 */
  EMAIL_SERVER_HOST: z.string().optional(),
  /** 이메일 서버 포트 */
  EMAIL_SERVER_PORT: z.string().optional(),
  /** 이메일 서버 사용자명 */
  EMAIL_SERVER_USER: z.string().optional(),
  /** 이메일 서버 비밀번호 */
  EMAIL_SERVER_PASSWORD: z.string().optional(),
  /** 발신자 이메일 주소 */
  EMAIL_FROM: z.string().email().optional(),
})

/**
 * 검증된 환경 변수 객체
 * 스키마를 통해 검증된 환경 변수들을 내보냅니다.
 */
export const env = envSchema.parse(process.env)

/** 환경 변수 타입 정의 */
export type Env = z.infer<typeof envSchema>

// 파일 설명 주석 추가

/**
 * Next.js 미들웨어 파일
 * 요청 처리 전에 실행되는 미들웨어 로직을 정의합니다.
 * 보안 헤더 설정, CORS 처리 등을 담당합니다.
 */

import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * 미들웨어 함수
 * 모든 요청에 대해 보안 헤더를 설정하고 CORS를 처리합니다.
 * @param {NextRequest} request - Next.js 요청 객체
 * @returns {NextResponse} 수정된 응답 객체
 */
export function middleware(request: NextRequest) {
  // 요청 경로 추출 (예: /, /about, /blog/first-post)
  const path = request.nextUrl.pathname

  // 공개적으로 접근 가능한 경로 정의
  const isPublicPath =
    path === "/" || path === "/about" || path === "/services" || path === "/contact" || path.startsWith("/api/public")

  // 응답 객체 생성
  const response = NextResponse.next()

  // 보안 헤더 설정
  response.headers.set("X-DNS-Prefetch-Control", "on") // DNS 프리페치 활성화
  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload") // HTTPS 강제
  response.headers.set("X-XSS-Protection", "1; mode=block") // XSS 공격 방지
  response.headers.set("X-Frame-Options", "SAMEORIGIN") // 클릭재킹 방지
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()") // 권한 정책
  response.headers.set("X-Content-Type-Options", "nosniff") // MIME 타입 스니핑 방지
  response.headers.set("Referrer-Policy", "origin-when-cross-origin") // 리퍼러 정책

  // API 라우트에 대한 CORS 헤더 설정
  if (path.startsWith("/api/")) {
    response.headers.set("Access-Control-Allow-Origin", "*")
    response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization")
  }

  return response
}

/**
 * 미들웨어가 실행될 경로 설정
 * 정적 파일과 Next.js 내부 파일들은 제외합니다.
 */
export const config = {
  matcher: [
    /*
     * 다음으로 시작하는 경로를 제외한 모든 요청 경로에 매치:
     * - _next/static (정적 파일)
     * - _next/image (이미지 최적화 파일)
     * - favicon.ico (파비콘 파일)
     * - public 폴더
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
}

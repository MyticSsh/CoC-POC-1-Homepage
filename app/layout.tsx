import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { siteConfig } from "@/config/site"

/**
 * 페이지 메타데이터 설정
 * SEO, Open Graph, Twitter Card 등의 메타데이터를 포함합니다.
 */
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["software development", "web development", "mobile apps", "custom software", "digital solutions"],
  authors: [
    {
      name: "Code Of Creation",
      url: siteConfig.url,
    },
  ],
  creator: "Code Of Creation",
  /** Open Graph 메타데이터 */
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  /** Twitter Card 메타데이터 */
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@codeofcreation",
  },
  /** 파비콘 및 아이콘 설정 */
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
  generator: "v0.dev",
}

/**
 * 루트 레이아웃 컴포넌트
 * @param {Object} props - 컴포넌트 props
 * @param {React.ReactNode} props.children - 자식 컴포넌트들
 * @returns {JSX.Element} HTML 문서 구조
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* 테마 프로바이더로 다크/라이트 모드 지원 */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

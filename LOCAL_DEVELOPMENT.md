# 로컬 개발 가이드 (Local Development Guide)

이 문서는 Code Of Creation 웹사이트를 로컬 환경에서 개발하는 방법을 상세히 설명합니다.

## 📋 목차

- [개발 환경 설정](#-개발-환경-설정)
- [프로젝트 구조 이해](#-프로젝트-구조-이해)
- [개발 워크플로우](#-개발-워크플로우)
- [디버깅 및 테스트](#-디버깅-및-테스트)
- [코드 스타일 가이드](#-코드-스타일-가이드)
- [성능 최적화](#-성능-최적화)
- [문제 해결](#-문제-해결)

## 🛠 개발 환경 설정

### 1. 시스템 요구사항

#### 필수 요구사항
- **Node.js**: 18.0.0 이상
- **npm**: 8.0.0 이상 (또는 yarn 1.22.0 이상)
- **Git**: 2.30.0 이상
- **VS Code**: 최신 버전 권장

#### 권장 사양
- **RAM**: 8GB 이상
- **저장공간**: 5GB 이상 여유공간
- **OS**: macOS, Windows 10/11, Ubuntu 20.04 이상

### 2. 개발 도구 설치

#### Node.js 설치
\`\`\`bash
# nvm을 사용한 Node.js 설치 (권장)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc

# Node.js 18 설치
nvm install 18
nvm use 18
nvm alias default 18

# 버전 확인
node --version
npm --version
\`\`\`

#### VS Code 확장 프로그램
\`\`\`json
// .vscode/extensions.json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
\`\`\`

### 3. 프로젝트 초기 설정

#### 저장소 클론 및 설정
\`\`\`bash
# 1. 저장소 클론
git clone https://github.com/your-username/coc-website.git
cd coc-website

# 2. 브랜치 확인
git branch -a

# 3. 개발 브랜치 생성 (선택사항)
git checkout -b develop
\`\`\`

#### 의존성 설치
\`\`\`bash
# npm 사용시
npm install

# yarn 사용시 (선택사항)
yarn install

# 설치 확인
npm list --depth=0
\`\`\`

#### 환경 변수 설정
\`\`\`bash
# 환경 변수 파일 생성
cp .env.example .env.local

# 환경 변수 편집
code .env.local  # VS Code로 열기
# 또는
nano .env.local  # 터미널 에디터 사용
\`\`\`

#### 개발용 환경 변수 예시
\`\`\`bash
# .env.local 파일 내용
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
CUSTOM_KEY=dev_key_12345

# 개발용 데이터베이스 (선택사항)
DATABASE_URL=postgresql://postgres:password@localhost:5432/coc_dev
DB_USER=postgres
DB_PASSWORD=password

# 개발용 Redis (선택사항)
REDIS_URL=redis://localhost:6379

# 개발용 이메일 설정 (선택사항)
EMAIL_SERVER_HOST=smtp.mailtrap.io
EMAIL_SERVER_PORT=2525
EMAIL_SERVER_USER=your_mailtrap_user
EMAIL_SERVER_PASSWORD=your_mailtrap_password
EMAIL_FROM=dev@codeofcreation.com

# 디버깅 설정
DEBUG=true
NEXT_TELEMETRY_DISABLED=1
\`\`\`

### 4. 개발 서버 실행

#### 기본 실행
\`\`\`bash
# 개발 서버 시작
npm run dev

# 특정 포트로 실행
npm run dev -- -p 3001

# 호스트 지정 (외부 접속 허용)
npm run dev -- -H 0.0.0.0

# 브라우저 자동 열기 비활성화
npm run dev -- --no-open
\`\`\`

#### 터보 모드 실행 (더 빠른 빌드)
\`\`\`bash
# Turbopack 사용 (실험적 기능)
npm run dev -- --turbo
\`\`\`

#### 개발 서버 접속
\`\`\`bash
# 로컬 접속
http://localhost:3000

# 네트워크 접속 (모바일 테스트용)
http://your-local-ip:3000
\`\`\`

## 📁 프로젝트 구조 이해

### 디렉토리 구조 상세 설명

\`\`\`
coc-website/
├── app/                    # Next.js 13+ App Router
│   ├── layout.tsx         # 루트 레이아웃 (전역 설정)
│   ├── page.tsx           # 홈페이지 (/)
│   ├── globals.css        # 전역 CSS 스타일
│   ├── loading.tsx        # 로딩 UI (선택사항)
│   ├── error.tsx          # 에러 UI (선택사항)
│   └── not-found.tsx      # 404 페이지 (선택사항)
├── components/            # 재사용 가능한 React 컴포넌트
│   ├── layout/           # 레이아웃 관련 컴포넌트
│   │   ├── header.tsx    # 사이트 헤더
│   │   └── footer.tsx    # 사이트 푸터
│   ├── sections/         # 페이지 섹션 컴포넌트
│   │   ├── hero-section.tsx      # 히어로 섹션
│   │   ├── about-section.tsx     # 회사 소개
│   │   ├── services-section.tsx  # 서비스 소개
│   │   ├── team-section.tsx      # 팀 소개
│   │   └── contact-section.tsx   # 연락처
│   ├── ui/               # shadcn/ui 기본 컴포넌트
│   │   ├── button.tsx    # 버튼 컴포넌트
│   │   ├── card.tsx      # 카드 컴포넌트
│   │   └── ...           # 기타 UI 컴포넌트
│   └── theme-provider.tsx # 테마 프로바이더
├── config/               # 설정 파일들
│   ├── site.ts          # 사이트 메타데이터 설정
│   └── domain.ts        # 도메인별 설정
├── constants/            # 상수 데이터
│   └── company.ts       # 회사 정보, 팀원, 서비스 데이터
├── lib/                 # 유틸리티 함수 및 라이브러리
│   ├── utils.ts         # 공통 유틸리티 함수
│   ├── env.ts           # 환경 변수 검증
│   └── validations/     # 폼 검증 스키마
│       └── contact.ts   # 연락처 폼 검증
├── types/               # TypeScript 타입 정의
│   └── index.ts         # 전역 타입 정의
├── public/              # 정적 파일
│   ├── images/          # 이미지 파일
│   ├── icons/           # 아이콘 파일
│   └── favicon.ico      # 파비콘
├── styles/              # 추가 스타일 파일 (선택사항)
└── hooks/               # 커스텀 React 훅 (선택사항)
\`\`\`

### 주요 파일 설명

#### `app/layout.tsx` - 루트 레이아웃
\`\`\`typescript
// 전체 애플리케이션의 레이아웃과 메타데이터 설정
// HTML 구조, 폰트, 테마 프로바이더 등을 포함
\`\`\`

#### `app/page.tsx` - 메인 페이지
\`\`\`typescript
// 홈페이지의 모든 섹션을 조합
// 각 섹션 컴포넌트를 import하여 구성
\`\`\`

#### `constants/company.ts` - 회사 데이터
\`\`\`typescript
// 회사 정보, 팀원, 서비스 등의 정적 데이터
// 데이터 변경 시 이 파일만 수정하면 됨
\`\`\`

#### `components/sections/` - 섹션 컴포넌트
\`\`\`typescript
// 각 페이지 섹션별로 분리된 컴포넌트
// 재사용 가능하고 독립적으로 개발 가능
\`\`\`

## 🔄 개발 워크플로우

### 1. 기능 개발 프로세스

#### 새로운 기능 개발
\`\`\`bash
# 1. 새로운 브랜치 생성
git checkout -b feature/새로운-기능

# 2. 개발 진행
# 코드 작성...

# 3. 변경사항 확인
npm run dev

# 4. 타입 체크
npm run type-check

# 5. 린트 검사
npm run lint

# 6. 빌드 테스트
npm run build

# 7. 커밋
git add .
git commit -m "feat: 새로운 기능 추가"

# 8. 푸시
git push origin feature/새로운-기능
\`\`\`

#### 버그 수정 프로세스
\`\`\`bash
# 1. 버그 수정 브랜치 생성
git checkout -b fix/버그-설명

# 2. 버그 재현 및 수정
# 코드 수정...

# 3. 테스트
npm run dev

# 4. 커밋
git commit -m "fix: 버그 수정 설명"

# 5. 푸시
git push origin fix/버그-설명
\`\`\`

### 2. 컴포넌트 개발 가이드

#### 새로운 컴포넌트 생성
\`\`\`typescript
// components/sections/new-section.tsx
/**
 * 새로운 섹션 컴포넌트
 * 섹션의 목적과 기능을 설명하는 주석
 */

import { Button } from "@/components/ui/button"
import { COMPANY_INFO } from "@/constants/company"

/**
 * 새로운 섹션 컴포넌트
 * @returns {JSX.Element} 섹션 JSX 엘리먼트
 */
export function NewSection() {
  return (
    <section id="new-section" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        {/* 섹션 내용 */}
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          새로운 섹션
        </h2>
        <p className="text-muted-foreground">
          섹션 설명
        </p>
      </div>
    </section>
  )
}
\`\`\`

#### 컴포넌트 사용법
\`\`\`typescript
// app/page.tsx에서 사용
import { NewSection } from "@/components/sections/new-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 기존 섹션들 */}
      <NewSection />
      {/* 다른 섹션들 */}
    </div>
  )
}
\`\`\`

### 3. 스타일링 가이드

#### Tailwind CSS 사용법
\`\`\`typescript
// 반응형 디자인
<div className="w-full md:w-1/2 lg:w-1/3">

// 다크 모드 지원
<div className="bg-white dark:bg-gray-900">

// 호버 효과
<button className="hover:bg-blue-600 transition-colors">

// 그리드 레이아웃
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
\`\`\`

#### 커스텀 스타일 추가
\`\`\`css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* 커스텀 컴포넌트 스타일 */
@layer components {
  .btn-primary {
    @apply bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors;
  }
}

/* 커스텀 유틸리티 */
@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent;
  }
}
\`\`\`

### 4. 데이터 관리

#### 상수 데이터 수정
\`\`\`typescript
// constants/company.ts
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "새로운 팀원",
    position: "새로운 직책",
    bio: "팀원 소개",
  },
  // 기존 팀원들...
]
\`\`\`

#### 타입 정의 추가
\`\`\`typescript
// types/index.ts
export interface NewDataType {
  id: string
  title: string
  description: string
  createdAt: Date
}
\`\`\`

## 🐛 디버깅 및 테스트

### 1. 개발 도구 활용

#### React Developer Tools
\`\`\`bash
# Chrome 확장 프로그램 설치
# React Developer Tools
# 컴포넌트 트리 및 props 확인 가능
\`\`\`

#### Next.js 디버깅
\`\`\`typescript
// 디버그 정보 출력
console.log('Debug info:', { data, props })

// 조건부 렌더링 디버깅
{process.env.NODE_ENV === 'development' && (
  <div className="fixed bottom-4 right-4 bg-red-500 text-white p-2">
    Debug: {JSON.stringify(debugData)}
  </div>
)}
\`\`\`

#### 네트워크 요청 디버깅
\`\`\`typescript
// API 요청 로깅
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})

console.log('API Response:', response.status, await response.json())
\`\`\`

### 2. 에러 처리

#### 에러 바운더리 (향후 확장용)
\`\`\`typescript
// components/error-boundary.tsx
'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">문제가 발생했습니다</h2>
            <button 
              onClick={() => this.setState({ hasError: false })}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              다시 시도
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
\`\`\`

### 3. 성능 모니터링

#### 성능 측정
\`\`\`typescript
// 컴포넌트 렌더링 시간 측정
import { useEffect } from 'react'

export function PerformanceMonitor({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const start = performance.now()
    
    return () => {
      const end = performance.now()
      console.log(`Component render time: ${end - start}ms`)
    }
  }, [])

  return <>{children}</>
}
\`\`\`

#### 번들 크기 분석
\`\`\`bash
# 번들 분석기 설치
npm install --save-dev @next/bundle-analyzer

# 번들 분석 실행
npm run analyze
\`\`\`

## 📝 코드 스타일 가이드

### 1. TypeScript 스타일

#### 타입 정의
\`\`\`typescript
// 인터페이스 사용 (객체 타입)
interface User {
  id: string
  name: string
  email: string
}

// 타입 별칭 사용 (유니온 타입)
type Status = 'loading' | 'success' | 'error'

// 제네릭 사용
interface ApiResponse<T> {
  data: T
  status: number
  message: string
}
\`\`\`

#### 함수 정의
\`\`\`typescript
// 화살표 함수 (컴포넌트)
const MyComponent = ({ title, description }: Props) => {
  return <div>{title}</div>
}

// 일반 함수 (유틸리티)
function formatDate(date: Date): string {
  return date.toLocaleDateString()
}

// 비동기 함수
async function fetchData(id: string): Promise<User> {
  const response = await fetch(`/api/users/${id}`)
  return response.json()
}
\`\`\`

### 2. React 컴포넌트 스타일

#### 컴포넌트 구조
\`\`\`typescript
// 1. Import 문
import React from 'react'
import { Button } from '@/components/ui/button'

// 2. 타입 정의
interface Props {
  title: string
  onSubmit: () => void
}

// 3. 컴포넌트 정의
export function MyComponent({ title, onSubmit }: Props) {
  // 4. 상태 및 훅
  const [isLoading, setIsLoading] = useState(false)
  
  // 5. 이벤트 핸들러
  const handleSubmit = () => {
    setIsLoading(true)
    onSubmit()
  }
  
  // 6. 렌더링
  return (
    <div className="p-4">
      <h2>{title}</h2>
      <Button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Submit'}
      </Button>
    </div>
  )
}
\`\`\`

#### 조건부 렌더링
\`\`\`typescript
// 삼항 연산자 (간단한 조건)
{isLoading ? <Spinner /> : <Content />}

// 논리 AND 연산자 (조건부 표시)
{error && <ErrorMessage error={error} />}

// 복잡한 조건 (별도 함수)
const renderContent = () => {
  if (isLoading) return <Spinner />
  if (error) return <ErrorMessage error={error} />
  return <Content data={data} />
}

return <div>{renderContent()}</div>
\`\`\`

### 3. CSS 및 스타일링

#### Tailwind CSS 클래스 순서
\`\`\`typescript
// 1. 레이아웃 (display, position, etc.)
// 2. 박스 모델 (width, height, margin, padding)
// 3. 타이포그래피 (font, text)
// 4. 시각적 (background, border, shadow)
// 5. 기타 (transform, transition)

<div className="flex items-center justify-center w-full h-64 p-4 text-lg font-bold bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors">
\`\`\`

#### 반응형 디자인
\`\`\`typescript
// 모바일 우선 접근법
<div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">

// 그리드 시스템
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

// 텍스트 크기
<h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
\`\`\`

## ⚡ 성능 최적화

### 1. 이미지 최적화

#### Next.js Image 컴포넌트 사용
\`\`\`typescript
import Image from 'next/image'

// 최적화된 이미지 사용
<Image
  src="/images/hero.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority // LCP 이미지인 경우
  placeholder="blur" // 블러 효과
  blurDataURL="data:image/jpeg;base64,..." // 블러 데이터
/>
\`\`\`

#### 이미지 포맷 최적화
\`\`\`javascript
// next.config.mjs
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
}
\`\`\`

### 2. 코드 분할

#### 동적 임포트
\`\`\`typescript
import dynamic from 'next/dynamic'

// 컴포넌트 지연 로딩
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>,
  ssr: false // 클라이언트에서만 렌더링
})

// 조건부 로딩
const AdminPanel = dynamic(() => import('./AdminPanel'), {
  ssr: false
})

function App() {
  const [showAdmin, setShowAdmin] = useState(false)
  
  return (
    <div>
      {showAdmin && <AdminPanel />}
    </div>
  )
}
\`\`\`

### 3. 메모이제이션

#### React.memo 사용
\`\`\`typescript
import { memo } from 'react'

interface Props {
  title: string
  count: number
}

// 컴포넌트 메모이제이션
export const ExpensiveComponent = memo(({ title, count }: Props) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
    </div>
  )
})
\`\`\`

#### useMemo와 useCallback
\`\`\`typescript
import { useMemo, useCallback } from 'react'

function OptimizedComponent({ items, onItemClick }: Props) {
  // 계산 비용이 높은 값 메모이제이션
  const expensiveValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0)
  }, [items])
  
  // 함수 메모이제이션
  const handleClick = useCallback((id: string) => {
    onItemClick(id)
  }, [onItemClick])
  
  return (
    <div>
      <p>Total: {expensiveValue}</p>
      {items.map(item => (
        <button key={item.id} onClick={() => handleClick(item.id)}>
          {item.name}
        </button>
      ))}
    </div>
  )
}
\`\`\`

## 🔧 문제 해결

### 1. 일반적인 개발 문제

#### 포트 충돌 해결
\`\`\`bash
# 포트 사용 중인 프로세스 확인
lsof -i :3000

# 프로세스 종료
kill -9 <PID>

# 다른 포트로 실행
npm run dev -- -p 3001
\`\`\`

#### 의존성 문제 해결
\`\`\`bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install

# 캐시 정리
npm cache clean --force

# 특정 패키지 재설치
npm uninstall package-name
npm install package-name
\`\`\`

#### TypeScript 오류 해결
\`\`\`bash
# 타입 체크
npm run type-check

# TypeScript 캐시 삭제
rm -rf .next
npm run build

# 타입 정의 파일 재설치
npm install --save-dev @types/node @types/react @types/react-dom
\`\`\`

### 2. Next.js 관련 문제

#### 빌드 오류 해결
\`\`\`bash
# Next.js 캐시 삭제
rm -rf .next

# 빌드 재시도
npm run build

# 상세 로그 확인
npm run build -- --debug
\`\`\`

#### 환경 변수 문제
\`\`\`bash
# 환경 변수 파일 확인
cat .env.local

# 환경 변수 로드 확인
console.log('Environment:', process.env.NODE_ENV)
console.log('Custom Key:', process.env.CUSTOM_KEY)
\`\`\`

#### 라우팅 문제
\`\`\`typescript
// app/not-found.tsx 생성
export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">페이지를 찾을 수 없습니다</h2>
        <p className="text-muted-foreground mb-4">
          요청하신 페이지가 존재하지 않습니다.
        </p>
        <a href="/" className="text-blue-600 hover:underline">
          홈으로 돌아가기
        </a>
      </div>
    </div>
  )
}
\`\`\`

### 3. 스타일링 문제

#### Tailwind CSS 클래스 적용 안됨
\`\`\`bash
# Tailwind 설정 확인
cat tailwind.config.ts

# CSS 파일 확인
cat app/globals.css

# 개발 서버 재시작
npm run dev
\`\`\`

#### 다크 모드 문제
\`\`\`typescript
// 테마 프로바이더 확인
import { ThemeProvider } from '@/components/theme-provider'

// 다크 모드 토글 테스트
const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
}
\`\`\`

### 4. 성능 문제

#### 느린 개발 서버
\`\`\`bash
# 터보팩 사용 (실험적)
npm run dev -- --turbo

# 메모리 증가
export NODE_OPTIONS="--max-old-space-size=4096"
npm run dev
\`\`\`

#### 빌드 시간 최적화
\`\`\`javascript
// next.config.mjs
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }
    return config
  },
}
\`\`\`

### 5. 디버깅 팁

#### 컴포넌트 디버깅
\`\`\`typescript
// 개발 모드에서만 디버그 정보 표시
{process.env.NODE_ENV === 'development' && (
  <div className="fixed top-0 left-0 bg-black text-white p-2 text-xs z-50">
    <pre>{JSON.stringify({ props, state }, null, 2)}</pre>
  </div>
)}

// 조건부 로깅
const debugLog = (message: string, data?: any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[DEBUG] ${message}`, data)
  }
}
\`\`\`

#### 네트워크 요청 디버깅
\`\`\`typescript
// API 요청 래퍼
const apiRequest = async (url: string, options?: RequestInit) => {
  console.log(`[API] ${options?.method || 'GET'} ${url}`)
  
  const response = await fetch(url, options)
  
  console.log(`[API] Response: ${response.status}`)
  
  if (!response.ok) {
    console.error(`[API] Error: ${response.statusText}`)
  }
  
  return response
}
\`\`\`

### 6. 유용한 개발 도구

#### VS Code 설정
\`\`\`json
// .vscode/settings.json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
\`\`\`

#### 개발용 스크립트
\`\`\`json
// package.json scripts 추가
{
  "scripts": {
    "dev:debug": "NODE_OPTIONS='--inspect' npm run dev",
    "dev:turbo": "npm run dev -- --turbo",
    "clean": "rm -rf .next node_modules package-lock.json",
    "reset": "npm run clean && npm install",
    "type-check": "tsc --noEmit",
    "lint:fix": "eslint . --fix",
    "analyze": "ANALYZE=true npm run build"
  }
}
\`\`\`

## 📚 추가 학습 자료

### 공식 문서
- [Next.js 공식 문서](https://nextjs.org/docs)
- [React 공식 문서](https://react.dev/)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [TypeScript 문서](https://www.typescriptlang.org/docs/)

### 유용한 도구
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/)
- [Next.js DevTools](https://nextjs.org/docs/advanced-features/debugging)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### 커뮤니티
- [Next.js GitHub](https://github.com/vercel/next.js)
- [React 커뮤니티](https://react.dev/community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

이 가이드를 통해 Code Of Creation 웹사이트를 효율적으로 개발할 수 있습니다. 
추가 질문이나 문제가 있으면 언제든지 문의해 주세요! 🚀

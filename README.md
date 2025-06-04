# Code Of Creation - Company Website

> 혁신적인 소프트웨어 솔루션을 제공하는 Code Of Creation의 공식 웹사이트

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker)](https://docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 🚀 빠른 시작

### 로컬 개발 환경

\`\`\`bash
# 의존성 설치
npm install

# 개발 서버 시작
npm run dev

# 브라우저에서 확인
open http://localhost:3000
\`\`\`

### Docker로 실행

\`\`\`bash
# 개발 환경
docker-compose -f docker-compose.dev.yml up --build

# 프로덕션 환경
docker-compose up --build -d
\`\`\`

## 📁 프로젝트 구조

\`\`\`
coc-website/
├── app/                    # Next.js App Router
├── components/            # React 컴포넌트
├── public/               # 정적 파일 (이미지 등)
├── config/               # 설정 파일
├── constants/            # 상수 데이터
├── lib/                 # 유틸리티 함수
├── types/               # TypeScript 타입
└── docker-compose.yml   # Docker 설정
\`\`\`

## 🛠 기술 스택

- **Next.js 14** - React 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 스타일링
- **Docker** - 컨테이너화
- **shadcn/ui** - UI 컴포넌트

## 📞 문의

- **이메일**: hello@codeofcreation.com
- **전화**: +1 (555) 123-4567

---

**Code Of Creation** - Creating the Future Through Code 🚀

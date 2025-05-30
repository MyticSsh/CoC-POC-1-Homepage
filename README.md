# Code Of Creation - Company Website

> 혁신적인 소프트웨어 솔루션을 제공하는 Code Of Creation의 공식 웹사이트

[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=for-the-badge&logo=docker)](https://docker.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

## 📋 목차

- [프로젝트 소개](#-프로젝트-소개)
- [기술 스택](#-기술-스택)
- [시작하기](#-시작하기)
  - [사전 요구사항](#사전-요구사항)
  - [로컬 개발 환경](#-로컬-개발-환경)
  - [Docker로 실행](#-docker로-실행)
- [배포하기](#-배포하기)
  - [우분투 서버 배포](#-우분투-서버-배포)
  - [Vercel 배포](#-vercel-배포)
- [프로젝트 구조](#-프로젝트-구조)
- [환경 변수](#-환경-변수)
- [스크립트](#-스크립트)
- [문제 해결](#-문제-해결)
- [기여하기](#-기여하기)

## 🚀 프로젝트 소개

Code Of Creation은 혁신적인 소프트웨어 솔루션을 제공하는 회사의 공식 웹사이트입니다. 
현대적인 디자인과 반응형 레이아웃으로 회사의 서비스, 팀, 연락처 정보를 제공합니다.

### 주요 기능
- 🎨 모던하고 반응형 디자인
- ⚡ Next.js 13+ App Router 사용
- 🔒 보안 헤더 및 미들웨어 적용
- 🐳 Docker 컨테이너화 지원
- 📱 모바일 최적화
- 🌙 다크/라이트 모드 지원
- 📧 연락처 폼 기능

## 🛠 기술 스택

### Frontend
- **Next.js 13+** - React 프레임워크
- **TypeScript** - 타입 안전성
- **Tailwind CSS** - 유틸리티 CSS 프레임워크
- **shadcn/ui** - UI 컴포넌트 라이브러리
- **Lucide React** - 아이콘 라이브러리

### Backend & Database
- **PostgreSQL** - 관계형 데이터베이스
- **Redis** - 캐싱 및 세션 관리
- **Prisma** - ORM (향후 확장용)

### DevOps & Deployment
- **Docker** - 컨테이너화
- **Docker Compose** - 멀티 컨테이너 관리
- **Nginx** - 리버스 프록시
- **GitHub Actions** - CI/CD (향후 확장용)

## 🏁 시작하기

### 사전 요구사항

#### 로컬 개발용
- **Node.js** 18.0.0 이상
- **npm** 또는 **yarn**
- **Git**

#### Docker 사용시
- **Docker** 20.0.0 이상
- **Docker Compose** 2.0.0 이상

### 💻 로컬 개발 환경

#### 1. 저장소 클론
\`\`\`bash
git clone https://github.com/your-username/coc-website.git
cd coc-website
\`\`\`

#### 2. 의존성 설치
\`\`\`bash
# npm 사용시
npm install

# yarn 사용시
yarn install
\`\`\`

#### 3. 환경 변수 설정
\`\`\`bash
# 환경 변수 파일 생성
cp .env.example .env.local

# .env.local 파일을 열어서 실제 값으로 수정
nano .env.local
\`\`\`

#### 4. 개발 서버 실행
\`\`\`bash
# npm 사용시
npm run dev

# yarn 사용시
yarn dev
\`\`\`

#### 5. 브라우저에서 확인
\`\`\`
http://localhost:3000
\`\`\`

### 🐳 Docker로 실행

#### 개발 환경 (핫 리로드 지원)
\`\`\`bash
# 개발 환경 시작
chmod +x scripts/dev.sh
./scripts/dev.sh

# 또는 직접 실행
docker-compose -f docker-compose.dev.yml up --build
\`\`\`

#### 프로덕션 환경
\`\`\`bash
# 프로덕션 환경 시작
chmod +x scripts/deploy.sh
./scripts/deploy.sh

# 또는 직접 실행
docker-compose up --build -d
\`\`\`

#### 서비스 접속 정보
- **웹사이트**: http://localhost:3000
- **pgAdmin**: http://localhost:5050 (개발환경만)
  - 이메일: admin@codeofcreation.com
  - 비밀번호: admin

## 🚀 배포하기

### 🖥 우분투 서버 배포

#### 1. 서버 준비
\`\`\`bash
# 우분투 서버 업데이트
sudo apt update && sudo apt upgrade -y

# Docker 설치
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Docker Compose 설치
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 사용자를 docker 그룹에 추가
sudo usermod -aG docker $USER
newgrp docker
\`\`\`

#### 2. 프로젝트 배포
\`\`\`bash
# 프로젝트 클론
git clone https://github.com/your-username/coc-website.git
cd coc-website

# 환경 변수 설정
cp .env.example .env.local
nano .env.local  # 실제 값으로 수정

# SSL 인증서 준비 (선택사항)
mkdir ssl
# SSL 인증서 파일을 ssl/ 디렉토리에 복사
# - cert.pem
# - key.pem

# 배포 실행
chmod +x scripts/deploy.sh
./scripts/deploy.sh
\`\`\`

#### 3. 방화벽 설정
\`\`\`bash
# UFW 방화벽 설정
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
\`\`\`

#### 4. 도메인 연결
\`\`\`bash
# DNS 설정에서 A 레코드 추가
# codeofcreation.com -> 서버 IP
# www.codeofcreation.com -> 서버 IP
\`\`\`

### ☁️ Vercel 배포

#### 1. Vercel CLI 설치
\`\`\`bash
npm install -g vercel
\`\`\`

#### 2. 배포 실행
\`\`\`bash
# Vercel 로그인
vercel login

# 프로젝트 배포
vercel

# 프로덕션 배포
vercel --prod
\`\`\`

#### 3. 환경 변수 설정
\`\`\`bash
# Vercel 대시보드에서 환경 변수 추가
# 또는 CLI로 추가
vercel env add CUSTOM_KEY
\`\`\`

## 📁 프로젝트 구조

\`\`\`
coc-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 메인 페이지
│   └── globals.css        # 전역 스타일
├── components/            # React 컴포넌트
│   ├── layout/           # 레이아웃 컴포넌트
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── sections/         # 페이지 섹션
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── services-section.tsx
│   │   ├── team-section.tsx
│   │   └── contact-section.tsx
│   └── ui/               # shadcn/ui 컴포넌트
├── config/               # 설정 파일
│   ├── site.ts          # 사이트 설정
│   └── domain.ts        # 도메인 설정
├── constants/            # 상수 데이터
│   └── company.ts       # 회사 정보
├── lib/                 # 유틸리티 함수
│   ├── env.ts          # 환경 변수 검증
│   └── validations/    # 폼 검증 스키마
├── types/               # TypeScript 타입 정의
│   └── index.ts
├── scripts/             # 배포 스크립트
│   ├── deploy.sh       # 프로덕션 배포
│   └── dev.sh          # 개발 환경 실행
├── docker-compose.yml   # Docker Compose 설정
├── docker-compose.dev.yml # 개발용 Docker Compose
├── Dockerfile          # 프로덕션 Dockerfile
├── Dockerfile.dev      # 개발용 Dockerfile
├── nginx.conf          # Nginx 설정
├── init.sql           # 데이터베이스 초기화
└── README.md          # 프로젝트 문서
\`\`\`

## 🔧 환경 변수

### 필수 환경 변수
\`\`\`bash
# 애플리케이션 기본 설정
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://codeofcreation.com
CUSTOM_KEY=your_custom_key_here
\`\`\`

### 선택적 환경 변수
\`\`\`bash
# 데이터베이스 (향후 확장용)
DATABASE_URL=postgresql://user:password@localhost:5432/database
DB_USER=postgres
DB_PASSWORD=your_password

# Redis (캐싱용)
REDIS_URL=redis://localhost:6379

# 이메일 설정 (문의 폼용)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your_email@gmail.com
EMAIL_SERVER_PASSWORD=your_app_password
EMAIL_FROM=noreply@codeofcreation.com

# 인증 (향후 확장용)
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=https://codeofcreation.com
\`\`\`

## 📜 스크립트

### 개발용 스크립트
\`\`\`bash
npm run dev          # 개발 서버 시작
npm run build        # 프로덕션 빌드
npm run start        # 프로덕션 서버 시작
npm run lint         # ESLint 실행
npm run type-check   # TypeScript 타입 체크
\`\`\`

### Docker 스크립트
\`\`\`bash
./scripts/dev.sh     # 개발 환경 Docker 실행
./scripts/deploy.sh  # 프로덕션 배포
\`\`\`

### Docker Compose 명령어
\`\`\`bash
# 서비스 시작
docker-compose up -d

# 서비스 중지
docker-compose down

# 로그 확인
docker-compose logs -f

# 서비스 상태 확인
docker-compose ps

# 특정 서비스 재시작
docker-compose restart web

# 이미지 재빌드
docker-compose build --no-cache
\`\`\`

## 🔍 문제 해결

### 일반적인 문제들

#### 1. 포트 충돌 오류
\`\`\`bash
# 포트 사용 중인 프로세스 확인
sudo lsof -i :3000

# 프로세스 종료
sudo kill -9 <PID>
\`\`\`

#### 2. Docker 권한 오류
\`\`\`bash
# 사용자를 docker 그룹에 추가
sudo usermod -aG docker $USER
newgrp docker
\`\`\`

#### 3. 환경 변수 로드 안됨
\`\`\`bash
# .env.local 파일 존재 확인
ls -la .env.local

# 파일 권한 확인
chmod 600 .env.local
\`\`\`

#### 4. 빌드 오류
\`\`\`bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install

# Next.js 캐시 삭제
rm -rf .next
npm run build
\`\`\`

### Docker 관련 문제

#### 1. 컨테이너 시작 실패
\`\`\`bash
# 로그 확인
docker-compose logs web

# 컨테이너 상태 확인
docker-compose ps
\`\`\`

#### 2. 데이터베이스 연결 실패
\`\`\`bash
# PostgreSQL 컨테이너 상태 확인
docker-compose logs db

# 데이터베이스 연결 테스트
docker-compose exec db psql -U postgres -d coc_website
\`\`\`

#### 3. 이미지 빌드 실패
\`\`\`bash
# 캐시 없이 재빌드
docker-compose build --no-cache

# 사용하지 않는 이미지 정리
docker system prune -a
\`\`\`

## 🤝 기여하기

### 개발 워크플로우

1. **Fork** 저장소를 포크합니다
2. **Branch** 새로운 기능 브랜치를 생성합니다
   \`\`\`bash
   git checkout -b feature/새로운-기능
   \`\`\`
3. **Commit** 변경사항을 커밋합니다
   \`\`\`bash
   git commit -m "feat: 새로운 기능 추가"
   \`\`\`
4. **Push** 브랜치에 푸시합니다
   \`\`\`bash
   git push origin feature/새로운-기능
   \`\`\`
5. **Pull Request** 를 생성합니다

### 커밋 메시지 규칙
\`\`\`
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 스타일 변경
refactor: 코드 리팩토링
test: 테스트 추가
chore: 빌드 설정 변경
\`\`\`

### 코드 스타일
- **ESLint** 규칙을 따릅니다
- **Prettier** 로 코드 포맷팅을 합니다
- **TypeScript** 타입을 명시합니다
- **JSDoc** 주석을 작성합니다

## 📞 지원 및 문의

- **이메일**: hello@codeofcreation.com
- **전화**: +1 (555) 123-4567
- **주소**: 123 Innovation Drive, Tech Valley, CA 94000

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 🙏 감사의 말

- [Next.js](https://nextjs.org/) - React 프레임워크
- [Tailwind CSS](https://tailwindcss.com/) - CSS 프레임워크
- [shadcn/ui](https://ui.shadcn.com/) - UI 컴포넌트
- [Lucide](https://lucide.dev/) - 아이콘 라이브러리
- [Vercel](https://vercel.com/) - 배포 플랫폼

---

**Code Of Creation** - Creating the Future Through Code 🚀

# Dockerfile
# Next.js 애플리케이션을 위한 멀티 스테이지 Docker 이미지

# 1. 의존성 설치 스테이지
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# package.json과 package-lock.json 복사
COPY package*.json ./
# 의존성 설치 (프로덕션 의존성만)
RUN npm ci --only=production

# 2. 빌드 스테이지
FROM node:18-alpine AS builder
WORKDIR /app

# 의존성 복사
COPY --from=deps /app/node_modules ./node_modules
# 소스 코드 복사
COPY . .

# 환경 변수 설정 (빌드 시 필요한 경우)
ENV NEXT_TELEMETRY_DISABLED 1

# Next.js 애플리케이션 빌드
RUN npm run build

# 3. 실행 스테이지
FROM node:18-alpine AS runner
WORKDIR /app

# 보안을 위한 non-root 사용자 생성
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 필요한 파일들만 복사
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# 빌드된 애플리케이션 복사 (소유권을 nextjs 사용자로 설정)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# nextjs 사용자로 전환
USER nextjs

# 포트 노출
EXPOSE 3000

# 환경 변수 설정
ENV PORT 3000
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# 애플리케이션 실행
CMD ["node", "server.js"]

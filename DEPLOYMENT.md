# 배포 가이드 (Deployment Guide)

이 문서는 Code Of Creation 웹사이트를 다양한 환경에 배포하는 방법을 상세히 설명합니다.

## 📋 목차

- [배포 환경 개요](#-배포-환경-개요)
- [로컬 개발 환경](#-로컬-개발-환경)
- [Docker 로컬 배포](#-docker-로컬-배포)
- [우분투 서버 배포](#-우분투-서버-배포)
- [클라우드 배포](#-클라우드-배포)
- [CI/CD 설정](#-cicd-설정)
- [모니터링 및 로그](#-모니터링-및-로그)
- [백업 및 복구](#-백업-및-복구)

## 🌍 배포 환경 개요

### 지원하는 배포 환경
- **로컬 개발**: Node.js + npm/yarn
- **Docker 로컬**: Docker + Docker Compose
- **우분투 서버**: Docker + Nginx + SSL
- **Vercel**: 서버리스 배포
- **AWS/GCP/Azure**: 클라우드 배포

### 환경별 특징
| 환경 | 용도 | 장점 | 단점 |
|------|------|------|------|
| 로컬 개발 | 개발/테스트 | 빠른 개발, 핫 리로드 | 프로덕션과 차이 |
| Docker 로컬 | 로컬 프로덕션 테스트 | 프로덕션 환경과 동일 | 리소스 사용량 높음 |
| 우분투 서버 | 프로덕션 | 완전한 제어, 비용 효율 | 관리 복잡성 |
| Vercel | 프로덕션 | 간편한 배포, CDN | 제한된 커스터마이징 |

## 💻 로컬 개발 환경

### 1. 시스템 요구사항
\`\`\`bash
# Node.js 버전 확인
node --version  # v18.0.0 이상 필요

# npm 버전 확인
npm --version   # v8.0.0 이상 권장

# Git 설치 확인
git --version
\`\`\`

### 2. 프로젝트 설정
\`\`\`bash
# 1. 저장소 클론
git clone https://github.com/your-username/coc-website.git
cd coc-website

# 2. 의존성 설치
npm install

# 3. 환경 변수 설정
cp .env.example .env.local

# 4. 환경 변수 편집
nano .env.local
\`\`\`

### 3. 환경 변수 설정 (.env.local)
\`\`\`bash
# 기본 설정
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
CUSTOM_KEY=dev_custom_key_123

# 개발용 데이터베이스 (선택사항)
DATABASE_URL=postgresql://postgres:password@localhost:5432/coc_dev
\`\`\`

### 4. 개발 서버 실행
\`\`\`bash
# 개발 서버 시작
npm run dev

# 또는 특정 포트로 실행
npm run dev -- -p 3001

# 브라우저에서 확인
open http://localhost:3000
\`\`\`

### 5. 개발 도구
\`\`\`bash
# 타입 체크
npm run type-check

# 린트 검사
npm run lint

# 린트 자동 수정
npm run lint:fix

# 프로덕션 빌드 테스트
npm run build
npm run start
\`\`\`

## 🐳 Docker 로컬 배포

### 1. Docker 설치 확인
\`\`\`bash
# Docker 버전 확인
docker --version

# Docker Compose 버전 확인
docker-compose --version

# Docker 서비스 상태 확인
sudo systemctl status docker
\`\`\`

### 2. 개발 환경 Docker 실행
\`\`\`bash
# 개발 환경 시작 (핫 리로드 지원)
chmod +x scripts/dev.sh
./scripts/dev.sh

# 또는 직접 실행
docker-compose -f docker-compose.dev.yml up --build

# 백그라운드 실행
docker-compose -f docker-compose.dev.yml up -d --build
\`\`\`

### 3. 프로덕션 환경 Docker 실행
\`\`\`bash
# 프로덕션 환경 시작
chmod +x scripts/deploy.sh
./scripts/deploy.sh

# 또는 직접 실행
docker-compose up --build -d
\`\`\`

### 4. Docker 서비스 관리
\`\`\`bash
# 서비스 상태 확인
docker-compose ps

# 로그 확인
docker-compose logs -f web

# 특정 서비스 재시작
docker-compose restart web

# 서비스 중지
docker-compose down

# 볼륨까지 삭제
docker-compose down -v
\`\`\`

### 5. 서비스 접속 정보
\`\`\`bash
# 웹사이트
http://localhost:3000

# pgAdmin (개발환경만)
http://localhost:5050
# 이메일: admin@codeofcreation.com
# 비밀번호: admin

# PostgreSQL 직접 접속
docker-compose exec db psql -U postgres -d coc_website
\`\`\`

## 🖥 우분투 서버 배포

### 1. 서버 초기 설정
\`\`\`bash
# 시스템 업데이트
sudo apt update && sudo apt upgrade -y

# 필수 패키지 설치
sudo apt install -y curl wget git ufw

# 방화벽 설정
sudo ufw allow 22    # SSH
sudo ufw allow 80    # HTTP
sudo ufw allow 443   # HTTPS
sudo ufw enable
\`\`\`

### 2. Docker 설치
\`\`\`bash
# Docker 공식 설치 스크립트
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# 사용자를 docker 그룹에 추가
sudo usermod -aG docker $USER

# Docker Compose 설치
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# 재로그인 또는 그룹 적용
newgrp docker
\`\`\`

### 3. 프로젝트 배포
\`\`\`bash
# 프로젝트 클론
git clone https://github.com/your-username/coc-website.git
cd coc-website

# 환경 변수 설정
cp .env.example .env.local
nano .env.local
\`\`\`

### 4. 프로덕션 환경 변수 설정
\`\`\`bash
# .env.local 파일 내용
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://codeofcreation.com
CUSTOM_KEY=prod_secure_key_here

# 데이터베이스 설정
DATABASE_URL=postgresql://postgres:secure_password@db:5432/coc_website
DB_USER=postgres
DB_PASSWORD=very_secure_password_123

# Redis 설정
REDIS_URL=redis://redis:6379

# 이메일 설정
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your_email@gmail.com
EMAIL_SERVER_PASSWORD=your_app_password
EMAIL_FROM=noreply@codeofcreation.com
\`\`\`

### 5. SSL 인증서 설정 (Let's Encrypt)
\`\`\`bash
# Certbot 설치
sudo apt install -y certbot

# SSL 인증서 발급
sudo certbot certonly --standalone -d codeofcreation.com -d www.codeofcreation.com

# 인증서 파일 복사
sudo mkdir -p ssl
sudo cp /etc/letsencrypt/live/codeofcreation.com/fullchain.pem ssl/cert.pem
sudo cp /etc/letsencrypt/live/codeofcreation.com/privkey.pem ssl/key.pem
sudo chown $USER:$USER ssl/*
\`\`\`

### 6. 배포 실행
\`\`\`bash
# 배포 스크립트 실행
chmod +x scripts/deploy.sh
./scripts/deploy.sh

# 서비스 상태 확인
docker-compose ps

# 로그 확인
docker-compose logs -f
\`\`\`

### 7. 도메인 설정
\`\`\`bash
# DNS 설정 (도메인 제공업체에서 설정)
# A 레코드 추가:
# codeofcreation.com -> 서버 IP 주소
# www.codeofcreation.com -> 서버 IP 주소

# DNS 전파 확인
nslookup codeofcreation.com
\`\`\`

### 8. 자동 시작 설정
\`\`\`bash
# Docker 서비스 자동 시작 설정
sudo systemctl enable docker

# 부팅 시 컨테이너 자동 시작을 위한 스크립트 생성
sudo nano /etc/systemd/system/coc-website.service
\`\`\`

\`\`\`ini
[Unit]
Description=Code Of Creation Website
Requires=docker.service
After=docker.service

[Service]
Type=oneshot
RemainAfterExit=yes
WorkingDirectory=/home/ubuntu/coc-website
ExecStart=/usr/local/bin/docker-compose up -d
ExecStop=/usr/local/bin/docker-compose down
TimeoutStartSec=0

[Install]
WantedBy=multi-user.target
\`\`\`

\`\`\`bash
# 서비스 활성화
sudo systemctl enable coc-website.service
sudo systemctl start coc-website.service
\`\`\`

## ☁️ 클라우드 배포

### Vercel 배포

#### 1. Vercel CLI 설치 및 로그인
\`\`\`bash
# Vercel CLI 설치
npm install -g vercel

# Vercel 로그인
vercel login
\`\`\`

#### 2. 프로젝트 배포
\`\`\`bash
# 첫 배포 (설정 진행)
vercel

# 프로덕션 배포
vercel --prod

# 환경 변수 추가
vercel env add CUSTOM_KEY production
\`\`\`

#### 3. 도메인 설정
\`\`\`bash
# 커스텀 도메인 추가
vercel domains add codeofcreation.com

# 도메인 연결
vercel alias set your-project-url.vercel.app codeofcreation.com
\`\`\`

### AWS EC2 배포

#### 1. EC2 인스턴스 생성
\`\`\`bash
# Ubuntu 22.04 LTS 선택
# t3.medium 이상 권장
# 보안 그룹: HTTP(80), HTTPS(443), SSH(22) 허용
\`\`\`

#### 2. 인스턴스 접속 및 설정
\`\`\`bash
# SSH 접속
ssh -i your-key.pem ubuntu@your-ec2-ip

# 위의 우분투 서버 배포 과정과 동일하게 진행
\`\`\`

#### 3. 로드 밸런서 설정 (선택사항)
\`\`\`bash
# Application Load Balancer 생성
# Target Group에 EC2 인스턴스 등록
# SSL 인증서 연결
\`\`\`

## 🔄 CI/CD 설정

### GitHub Actions 워크플로우

#### 1. 워크플로우 파일 생성
\`\`\`yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm run test
    
    - name: Build application
      run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to server
      uses: appleboy/ssh-action@v0.1.5
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.PRIVATE_KEY }}
        script: |
          cd /home/ubuntu/coc-website
          git pull origin main
          docker-compose down
          docker-compose up --build -d
\`\`\`

#### 2. GitHub Secrets 설정
\`\`\`bash
# GitHub 저장소 Settings > Secrets에 추가
HOST=your-server-ip
USERNAME=ubuntu
PRIVATE_KEY=your-ssh-private-key
\`\`\`

## 📊 모니터링 및 로그

### 1. 로그 확인
\`\`\`bash
# 모든 서비스 로그
docker-compose logs -f

# 특정 서비스 로그
docker-compose logs -f web

# 최근 100줄만 확인
docker-compose logs --tail=100 web

# 실시간 로그 스트림
docker-compose logs -f --tail=0 web
\`\`\`

### 2. 시스템 모니터링
\`\`\`bash
# 컨테이너 리소스 사용량
docker stats

# 디스크 사용량
df -h

# 메모리 사용량
free -h

# CPU 사용량
top
\`\`\`

### 3. 헬스 체크
\`\`\`bash
# 웹사이트 응답 확인
curl -I http://localhost:3000

# 데이터베이스 연결 확인
docker-compose exec db pg_isready -U postgres

# Redis 연결 확인
docker-compose exec redis redis-cli ping
\`\`\`

### 4. 로그 로테이션 설정
\`\`\`bash
# Docker 로그 로테이션 설정
sudo nano /etc/docker/daemon.json
\`\`\`

\`\`\`json
{
  "log-driver": "json-file",
  "log-opts": {
    "max-size": "10m",
    "max-file": "3"
  }
}
\`\`\`

## 💾 백업 및 복구

### 1. 데이터베이스 백업
\`\`\`bash
# 백업 스크립트 생성
nano backup.sh
\`\`\`

\`\`\`bash
#!/bin/bash
# 백업 스크립트

BACKUP_DIR="/home/ubuntu/backups"
DATE=$(date +%Y%m%d_%H%M%S)

# 백업 디렉토리 생성
mkdir -p $BACKUP_DIR

# PostgreSQL 백업
docker-compose exec -T db pg_dump -U postgres coc_website > $BACKUP_DIR/db_backup_$DATE.sql

# 파일 백업 (업로드된 파일 등)
tar -czf $BACKUP_DIR/files_backup_$DATE.tar.gz public/uploads/

# 오래된 백업 파일 삭제 (7일 이상)
find $BACKUP_DIR -name "*.sql" -mtime +7 -delete
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "Backup completed: $DATE"
\`\`\`

\`\`\`bash
# 실행 권한 부여
chmod +x backup.sh

# 크론탭에 등록 (매일 새벽 2시)
crontab -e
# 0 2 * * * /home/ubuntu/coc-website/backup.sh
\`\`\`

### 2. 데이터베이스 복구
\`\`\`bash
# 백업 파일로부터 복구
docker-compose exec -T db psql -U postgres -d coc_website < /path/to/backup.sql
\`\`\`

### 3. 전체 시스템 백업
\`\`\`bash
# 프로젝트 전체 백업
tar -czf coc_website_backup_$(date +%Y%m%d).tar.gz \
  --exclude=node_modules \
  --exclude=.next \
  --exclude=.git \
  /home/ubuntu/coc-website/
\`\`\`

## 🚨 문제 해결

### 일반적인 배포 문제

#### 1. 포트 충돌
\`\`\`bash
# 포트 사용 중인 프로세스 확인
sudo netstat -tulpn | grep :3000
sudo lsof -i :3000

# 프로세스 종료
sudo kill -9 <PID>
\`\`\`

#### 2. 메모리 부족
\`\`\`bash
# 메모리 사용량 확인
free -h

# 스왑 파일 생성
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile
\`\`\`

#### 3. 디스크 공간 부족
\`\`\`bash
# 디스크 사용량 확인
df -h

# Docker 정리
docker system prune -a

# 로그 파일 정리
sudo journalctl --vacuum-time=7d
\`\`\`

#### 4. SSL 인증서 갱신
\`\`\`bash
# Let's Encrypt 인증서 갱신
sudo certbot renew

# 갱신 후 Nginx 재시작
docker-compose restart nginx
\`\`\`

### 성능 최적화

#### 1. 이미지 최적화
\`\`\`bash
# Next.js 이미지 최적화 설정 확인
# next.config.mjs에서 images 설정 확인
\`\`\`

#### 2. 캐싱 설정
\`\`\`bash
# Redis 캐시 상태 확인
docker-compose exec redis redis-cli info memory

# Nginx 캐시 설정 확인
# nginx.conf에서 캐시 헤더 확인
\`\`\`

#### 3. 데이터베이스 최적화
\`\`\`bash
# PostgreSQL 성능 확인
docker-compose exec db psql -U postgres -c "SELECT * FROM pg_stat_activity;"

# 인덱스 확인
docker-compose exec db psql -U postgres -d coc_website -c "\di"
\`\`\`

---

이 가이드를 따라하면 Code Of Creation 웹사이트를 성공적으로 배포할 수 있습니다. 
추가 질문이나 문제가 있으면 언제든지 문의해 주세요! 🚀

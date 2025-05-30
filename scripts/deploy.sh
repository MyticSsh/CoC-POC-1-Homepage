#!/bin/bash
# 배포 스크립트
# 우분투 서버에서 Docker Compose를 사용한 배포 자동화

set -e

echo "🚀 Code Of Creation 웹사이트 배포 시작..."

# 환경 변수 확인
if [ ! -f .env.local ]; then
    echo "❌ .env.local 파일이 없습니다. .env.example을 참고하여 생성해주세요."
    exit 1
fi

# Docker와 Docker Compose 설치 확인
if ! command -v docker &> /dev/null; then
    echo "❌ Docker가 설치되지 않았습니다."
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose가 설치되지 않았습니다."
    exit 1
fi

# 기존 컨테이너 중지 및 제거
echo "🛑 기존 컨테이너 중지 중..."
docker-compose down

# 이미지 빌드
echo "🔨 Docker 이미지 빌드 중..."
docker-compose build --no-cache

# 컨테이너 시작
echo "▶️ 컨테이너 시작 중..."
docker-compose up -d

# 헬스 체크
echo "🏥 서비스 상태 확인 중..."
sleep 10

if curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "✅ 배포 완료! 웹사이트가 http://localhost:3000 에서 실행 중입니다."
else
    echo "❌ 배포 실패. 로그를 확인해주세요:"
    docker-compose logs web
    exit 1
fi

# 로그 출력
echo "📋 실시간 로그 보기: docker-compose logs -f"
echo "🔍 컨테이너 상태 확인: docker-compose ps"

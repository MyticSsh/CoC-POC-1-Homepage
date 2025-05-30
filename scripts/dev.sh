#!/bin/bash
# 개발 환경 실행 스크립트

set -e

echo "🛠️ 개발 환경 시작..."

# 개발용 Docker Compose 실행
docker-compose -f docker-compose.dev.yml up --build

echo "✅ 개발 서버가 http://localhost:3000 에서 실행 중입니다."
echo "📊 pgAdmin: http://localhost:5050 (admin@codeofcreation.com / admin)"

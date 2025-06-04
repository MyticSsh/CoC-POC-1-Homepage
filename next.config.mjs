/** @type {import('next').NextConfig} */
const nextConfig = {
  // Docker 환경을 위한 설정
  output: 'standalone',
  
  // 실험적 기능
  experimental: {
    appDir: true,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // 이미지 최적화 설정
  images: {
    // 외부 도메인 허용 (필요시)
    domains: ['blob.v0.dev'],
    // 이미지 포맷 설정
    formats: ['image/webp', 'image/avif'],
    // 로컬 이미지 최적화 활성화
    unoptimized: false,
    // 디바이스 크기 설정
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // 이미지 크기 설정
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // 이미지 로더 설정
    loader: 'default',
    // 이미지 품질 설정
    quality: 75,
  },
  
  // 압축
  compress: true,
  
  // 환경 변수
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // 보안 헤더
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // 리다이렉트
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig

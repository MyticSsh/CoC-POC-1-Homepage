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
  
  // 이미지 최적화
  images: {
    domains: ['placeholder.svg'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: false,
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
  
  // API 라우트 재작성
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ]
  },
}

export default nextConfig

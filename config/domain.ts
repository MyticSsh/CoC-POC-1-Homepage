// 파일 설명 주석 추가

/**
 * 도메인 설정 파일
 * 개발, 스테이징, 프로덕션 환경별 도메인 및 API 엔드포인트를 관리합니다.
 */

/**
 * 환경별 도메인 설정 객체
 * 각 환경(개발/스테이징/프로덕션)에 따른 도메인, 프로토콜, API URL을 정의합니다.
 */
export const domainConfig = {
  /** 프로덕션 환경 설정 */
  production: {
    domain: "codeofcreation.com",
    protocol: "https",
    api: "https://api.codeofcreation.com",
  },

  /** 스테이징 환경 설정 */
  staging: {
    domain: "staging.codeofcreation.com",
    protocol: "https",
    api: "https://api-staging.codeofcreation.com",
  },

  /** 개발 환경 설정 */
  development: {
    domain: "localhost:3000",
    protocol: "http",
    api: "http://localhost:3001",
  },
}

/**
 * 현재 환경에 맞는 도메인 설정을 반환하는 함수
 * NODE_ENV 환경 변수를 기반으로 적절한 도메인 설정을 선택합니다.
 * @returns {object} 현재 환경에 맞는 도메인 설정 객체
 */
export const getCurrentDomain = () => {
  const env = process.env.NODE_ENV

  if (env === "production") {
    return domainConfig.production
  } else if (env === "staging") {
    return domainConfig.staging
  } else {
    return domainConfig.development
  }
}

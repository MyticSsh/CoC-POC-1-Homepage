export const domainConfig = {
  // Production domain
  production: {
    domain: "codeofcreation.com",
    protocol: "https",
    api: "https://api.codeofcreation.com",
  },

  // Staging domain
  staging: {
    domain: "staging.codeofcreation.com",
    protocol: "https",
    api: "https://api-staging.codeofcreation.com",
  },

  // Development domain
  development: {
    domain: "localhost:3000",
    protocol: "http",
    api: "http://localhost:3001",
  },
}

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

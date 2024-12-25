/** @type {import('next').NextConfig} */
const requiredEnv = ['NEXT_PUBLIC_BASE_URL'];  // Add all required env variables here

// Validate Environment Variables at Build Time
requiredEnv.forEach((env) => {
  if (!process.env[env]) {
    throw new Error(`Missing required environment variable: ${env}`);
  }
});

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['54jxuniwcclyqh85.public.blob.vercel-storage.com'],
  },
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "Sec-WebSocket-Accept, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || 'https://fallback-url.com',
  },
  webpack: (config) => {
    config.devtool = 'hidden-source-map';
    return config;
  },
};

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  nextConfig,
  {
    org: "workwhales",
    project: "open-gptbuilder",
    silent: !process.env.CI,
    widenClientFileUpload: false,
    reactComponentAnnotation: { enabled: true },
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    deleteSourceMapsAfterUpload: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
/** @type {import('next').NextConfig} */
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
    widenClientFileUpload: false, // Reduced memory usage
    reactComponentAnnotation: { enabled: true },
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    deleteSourceMapsAfterUpload: true, // Prevents memory issues
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ["resend.com"],
    },
  },
};

module.exports = nextConfig;

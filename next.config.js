/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: {
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
  },
};

const withNextIntl = require('next-intl/plugin')(
    './i18n.ts'
  );

  module.exports = withNextIntl(nextConfig)
  
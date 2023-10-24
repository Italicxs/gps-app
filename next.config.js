/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: {
    "X-Frame-Options": "SAMEORIGIN",
    "X-Content-Type-Options": "nosniff",
    "Content-Security-Policy": `
      default-src 'self';
      img-src 'self' data:;
      script-src 'self' 'unsafe-inline' nonce-{{nonce}};
      style-src 'self' 'unsafe-inline';
    `,
  },
};

const withNextIntl = require('next-intl/plugin')(
    './i18n.ts'
  );

  module.exports = withNextIntl(nextConfig)
  
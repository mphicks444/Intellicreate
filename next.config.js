/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
  },
  // Disable static generation of the not-found page
  experimental: {
    missingSuspenseWithCSRError: false,
  },
}

module.exports = nextConfig 
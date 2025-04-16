/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
  },
  // Disable static generation completely
  experimental: {
    appDir: true,
  },
  // Force dynamic rendering
  staticPageGenerationTimeout: 0,
}

module.exports = nextConfig 
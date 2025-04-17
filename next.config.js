/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    serverActions: true,
  },
  // Force dynamic rendering
  staticPageGenerationTimeout: 0,
}

module.exports = nextConfig 
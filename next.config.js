/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'intellicreate.vercel.app'],
    },
  },
  // Disable static page generation
  staticPageGenerationTimeout: 0,
}

module.exports = nextConfig 
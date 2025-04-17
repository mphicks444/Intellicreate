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
  // Force dynamic rendering
  runtime: 'edge',
  // Disable static optimization
  reactStrictMode: true,
  swcMinify: true,
  // Disable static page generation
  generateStaticParams: false,
}

module.exports = nextConfig 
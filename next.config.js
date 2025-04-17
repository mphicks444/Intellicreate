/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['localhost'],
  },
  // Force dynamic rendering
  staticPageGenerationTimeout: 0,
}

module.exports = nextConfig 
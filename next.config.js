/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000', 'intellicreate.vercel.app'],
    },
  },
  // Disable static page generation
  staticPageGenerationTimeout: 0,
  // Disable static optimization for specific paths
  unstable_runtimeJS: true,
  // Disable static generation for authenticated pages
  unstable_excludeFiles: [
    'src/app/dashboard/**/*',
    'src/app/login/**/*',
    'src/app/forgot-password/**/*',
    'src/app/_not-found/**/*',
  ],
}

module.exports = nextConfig 
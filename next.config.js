/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Security headers should be configured at the reverse proxy for self-hosted runtime.
  // Compress output
  compress: true,
  
  // Remove powered by header
  poweredByHeader: false,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  
  // Security headers handled by _headers file for Cloudflare Pages
  // Compress output
  compress: true,
  
  // Remove powered by header
  poweredByHeader: false,
}

module.exports = nextConfig

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Allow Next.js Image optimisation on Vercel
    remotePatterns: [],
  },
}

export default nextConfig

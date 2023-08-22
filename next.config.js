/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '/app/out',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "**",
    //   },
    // ],
    domains: [
      'localhost', 'images.unsplash.com', 'openweathermap.org', 'www.instagram.com', 'scontent.cdninstagram.com'
    ],
  }
}

module.exports = nextConfig

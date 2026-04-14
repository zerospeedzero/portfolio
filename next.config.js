/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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

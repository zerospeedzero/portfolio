/** @type {import('next').NextConfig} */
const nextConfig = {
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

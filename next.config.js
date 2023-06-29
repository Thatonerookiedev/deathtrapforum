/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        MONGODB_URI:'mongodb+srv://dbuser:TORi5576@cluster0.jztbcw9.mongodb.net/'
    },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
      async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: '/',
          },
        ]
      },
}

module.exports = nextConfig

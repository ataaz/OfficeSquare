// if (!process.env.WORDPRESS_API_URL) {
//   throw new Error(`
//     Please provide a valid WordPress instance URL.
//     Add to your environment variables WORDPRESS_API_URL.
//   `)
// }

// /** @type {import('next').NextConfig} */
// module.exports = {
//   // output: 'export',
//   images: {
//     unoptimized:true,
//     domains: [
//       process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
//       '0.gravatar.com',
//       '1.gravatar.com',
//       '2.gravatar.com',
//       'secure.gravatar.com',
//       'kitchendesign.ae',
//     ],
//     // Optional: Add a trailing slash to all paths `/about` -> `/about/`
//     // trailingSlash: true,
//     // Optional: Change the output directory `out` -> `dist`
//     // distDir: 'dist',
//   },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:'export',
  images: {
    unoptimized: false,
    domains: ['officesquare.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.officesquare.com',
      },
    ],
  },
}
 
module.exports = nextConfig
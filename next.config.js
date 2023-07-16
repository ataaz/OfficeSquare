if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.officesquare.com',
      },
    ],
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      'api.officesquare.com',
    ],
    // Optional: Add a trailing slash to all paths `/about` -> `/about/`
    // trailingSlash: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  },
}

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // output:'export',
//   unoptimized: false,
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: '**.officesquare.com',
//       },
//     ],
//     domains: [
//       process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
//       'api.officesquare.com',
//     ],
// }
 
module.exports = nextConfig
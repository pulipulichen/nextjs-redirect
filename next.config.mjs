/** @type {import('next').NextConfig} */
const nextConfig = {
  // Uncomment the following line to build a static site.
  // output: "export",

  reactStrictMode: true,

  redirects: async () => [
    {
      source: '/blog',
      destination: 'https://blog.pulipuli.info/',
      permanent: true, // Set to true for permanent redirect (optional)
    },
  ],
};

export default nextConfig;

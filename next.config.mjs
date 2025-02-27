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
    {
      source: '/jkos/qrcode',
      destination: 'jkos://showQRCode',
      permanent: true, // Set to true for permanent redirect (optional)
    },
    {
      source: '/jkos/scan',
      destination: 'jkos://scanQRCode',
      permanent: true, // Set to true for permanent redirect (optional)
    },
    {
      source: '/linepay/qrcode',
      destination: 'line://pay/generateQR',
      permanent: true, // Set to true for permanent redirect (optional)
    },
    {
      source: '/linepay/scan',
      destination: 'line://pay/scanQR',
      permanent: true, // Set to true for permanent redirect (optional)
    },
    {
      source: '/pxpay',
      destination: 'com.pxpay.plus://zjdja',
      permanent: true, // Set to true for permanent redirect (optional)
    },
  ],
};

export default nextConfig;

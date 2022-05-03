/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    PUBLIC_URL: "/public/assets/img",
  },
  async redirects() {
    return [
      {
        source: "/bride",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

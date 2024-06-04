// next.config.js
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'example.com',
        },
        {
          protocol: 'https',
          hostname: 'another-domain.com',
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  
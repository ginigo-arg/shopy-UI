/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "3001",
      },
      {
        hostname: "elasticbeanstalk",
        protocol: "http",
      },
    ],
  },
};

export default nextConfig;

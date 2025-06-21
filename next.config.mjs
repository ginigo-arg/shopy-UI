/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "localhost",
        port: "3001",
      },
      {
        hostname: "localhost",
        port: "shoppy-backend-2-env.eba-fy2hxpmp.us-east-1.elasticbeanstalk.com",
      },
    ],
  },
};

export default nextConfig;

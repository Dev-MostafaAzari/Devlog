/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images:{
    dangerouslyAllowLocalIP: true,
    remotePatterns : [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "*/**",
      }
    ]
  }
};

export default nextConfig;

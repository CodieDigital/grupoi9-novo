import("next").NextConfig;

const nextConfig = {
  env: {
    apiURL: process.env.apiURL,
    painelURL: process.env.painelURL,
  },
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;

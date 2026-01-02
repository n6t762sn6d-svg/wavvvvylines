/** @type {import('next').NextConfig} */
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH || "";
const normalizedBasePath = basePathEnv
  ? `/${basePathEnv.replace(/^\/|\/$/g, "")}`
  : "";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath: normalizedBasePath || undefined,
  assetPrefix: normalizedBasePath || undefined,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;


const webpack = require("webpack");
/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    return config;
  },
  experimental: {
    esmExternals: "loose", // <-- add this
    serverComponentsExternalPackages: ["mongoose"],
  },
  transpilePackages: ["@repo/ui"],
};

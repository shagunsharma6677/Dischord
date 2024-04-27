/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  reactStrictMode: false,

  images: {
    domains: ["uploadthing.com","utfs.io"],
  },
};

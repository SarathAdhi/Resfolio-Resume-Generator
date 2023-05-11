/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  env: {
    GOOGLE_MEASUREMENT_ID: process.env.GOOGLE_MEASUREMENT_ID,
    NEXT_FIREBASE_API_KEY: process.env.NEXT_FIREBASE_API_KEY,
    NEXT_FIREBASE_APP_ID: process.env.NEXT_FIREBASE_APP_ID,
  },
};

module.exports = nextConfig;

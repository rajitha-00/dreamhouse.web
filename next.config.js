// next.config.js
const { withNextVideo } = require('next-video/process');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['tailwindui.com'],
    },
};

module.exports = withNextVideo(nextConfig);

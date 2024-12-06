/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com', // Existing domain
      'img.wongnai.com',           // Add this domain
    ],
  },
};

module.exports = nextConfig;

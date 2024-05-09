/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "evipqhfqaehlw7vv.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;

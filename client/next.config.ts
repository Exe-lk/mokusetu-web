/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  turbopack: {},
  webpack: (config: any, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      // Ensure client-side modules are handled properly
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'landingfoliocom.imgix.net',
      },
      {
        protocol: 'https',
        hostname: 'loading.io',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'nhfjkdcjfoptfbcwauxz.supabase.co',
      },
    ],
  },
};

export default nextConfig;

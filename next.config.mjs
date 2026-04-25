/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Next.js 16 uses Turbopack by default. If a `webpack` config is present,
  // Next expects an explicit `turbopack` config too.
  turbopack: {},
  webpack: (config, { dev }) => {
    // On some Windows setups (especially synced folders like OneDrive),
    // filesystem events can be unreliable and HMR won't pick up changes.
    // Enabling polling makes hot reload / refresh reflect changes consistently.
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        poll: 800,
        aggregateTimeout: 200,
        ignored: /node_modules/,
      };
    }

    return config;
  },
};

export default nextConfig;

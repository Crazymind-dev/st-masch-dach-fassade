import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // Notdienst wird nicht mehr angeboten — alte Links/Indexeinträge auf Kontakt umleiten.
      {
        source: "/notdienst",
        destination: "/kontakt",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

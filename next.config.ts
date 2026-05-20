import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Wajib untuk menghasilkan file HTML statis
  images: {
    unoptimized: true, // Wajib jika memakai komponen <Image /> bawaan
  },
  
  basePath: '/Portfolio-Nirmala', 
};

export default nextConfig;

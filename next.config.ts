import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Wajib untuk menghasilkan file HTML statis
  images: {
    unoptimized: true, // Wajib jika memakai komponen <Image /> bawaan
  },
  // Hapus tanda komentar di bawah jika nama repositori Anda BUKAN "username.github.io"
  // basePath: '/nama-repositori-anda',
};

export default nextConfig;

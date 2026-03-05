/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",     // static HTML export for GitHub Pages
  trailingSlash: true,  // ensures paths resolve correctly on Pages
  images: {
    unoptimized: true,  // next/image optimisation not available in static export
  },
};

export default nextConfig;

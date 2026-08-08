import type { NextConfig } from "next";

// Set by the GitHub Actions workflow when deploying to a project page
// (https://<owner>.github.io/<repo>). Left empty for a user/org page
// (https://<owner>.github.io) or local development.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // GitHub Pages has no image optimization server; serve images as-is.
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;

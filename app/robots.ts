import { siteConfig } from "@/data";
import type { MetadataRoute } from "next";

// Required for static export (`output: "export"`) - this route has no dynamic data.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}

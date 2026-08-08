import { siteConfig } from "@/data";
import type { MetadataRoute } from "next";

// Required for static export (`output: "export"`) - this route has no dynamic data.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

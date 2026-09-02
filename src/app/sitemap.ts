import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * Real publication dates, not build time. A build-time stamp tells crawlers
 * every page changed on every deploy, which teaches them to ignore the signal.
 * Update a page's date here when its content actually changes.
 */
const ROUTES = [
  { path: "", lastModified: "2026-09-02", priority: 1 },
  { path: "/About", lastModified: "2026-09-02", priority: 0.9 },
  { path: "/services", lastModified: "2026-09-02", priority: 0.9 },
  { path: "/consult-booking", lastModified: "2026-09-02", priority: 0.9 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map(({ path, lastModified, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(lastModified),
    changeFrequency: "monthly" as const,
    priority,
  }));
}

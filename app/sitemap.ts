import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://siganext.com";
  const routes = [
    "",
    "/services/internet-networking",
    "/services/solar-green-energy",
    "/services/it-software-security",
    "/services/data-center-hosting",
    "/government-enterprise",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}

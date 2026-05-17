import type { MetadataRoute } from "next";

const baseUrl = "https://ultimaterivals.org";

const routes = [
  "",
  "/cadastro",
  "/atletas",
  "/ur-play",
  "/ranking",
  "/equipes",
  "/temporada",
  "/ur-market",
  "/patrocinadores",
  "/eventos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}

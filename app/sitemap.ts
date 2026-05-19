import type { MetadataRoute } from "next";

const baseUrl = "https://ultimaterivals.org";

const routes = [
  "",
  "/cadastro",
  "/ecossistema",
  "/atletas",
  "/ur-play",
  "/ranking",
  "/equipes",
  "/temporada",
  "/ct-ur",
  "/midia",
  "/quadras-parceiras",
  "/ur-market",
  "/patrocinadores",
  "/eventos",
  "/privacidade",
  "/termos",
  "/regulamento",
  "/contato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}

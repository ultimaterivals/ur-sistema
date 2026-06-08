import type { MetadataRoute } from "next";

const baseUrl = "https://ultimaterivals.org";

const routes = [
  "",
  "/temporada",
  "/ranking",
  "/premiacoes",
  "/ur-market",
  "/polos",
  "/midia",
  "/hunter",
  "/blog",
  "/legends",
  "/equipes",
  "/ur-play",
  "/quem-somos",
  "/quadras-parceiras",
  "/patrocinadores",
  "/cadastro",
  "/contato",
  "/regulamento",
  "/privacidade",
  "/termos",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}

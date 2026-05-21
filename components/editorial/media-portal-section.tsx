import { ArrowRight, BookOpen, Camera, Radio, Trophy, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { SiteImage } from "@/lib/content/site-images";
import { homeImageRoles, siteImages } from "@/lib/content/site-images";
import { EditorialImage } from "./editorial-image";

type Story = {
  category: string;
  title: string;
  description: string;
  href: string;
  image: SiteImage;
  meta: string;
};

const stories: Story[] = [
  {
    category: "Bastidores",
    title: "O que acontece antes do jogo virar história",
    description: "Preparação, pausa, conversa e presença de quadra como parte da história UR.",
    href: "/midia",
    image: siteImages.timeoutTalk,
    meta: "conteúdo oficial com calendário confirmado",
  },
  {
    category: "Ranking",
    title: "A classificação como memória da temporada",
    description: "O ranking será aberto depois das primeiras participações confirmadas.",
    href: "/ranking",
    image: homeImageRoles.atletas,
    meta: "ranking em formação",
  },
  {
    category: "Atletas",
    title: "Do UR Play ao palco público",
    description: "O atleta entra, é observado, evolui e constrói reputação dentro do ecossistema.",
    href: "/atletas",
    image: siteImages.defenseDive,
    meta: "histórico após participação oficial",
  },
  {
    category: "Comunidade",
    title: "A arquibancada também faz parte do ecossistema",
    description: "Comunidade, mídia e recorrência ajudam o esporte amador a ganhar ambiente e continuidade.",
    href: "/cadastro#comunidade",
    image: homeImageRoles.comunidade,
    meta: "comunidade em expansão",
  },
];

const categoryIcons = [Camera, Trophy, Users, Radio] as const;

export function MediaPortalSection() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1.14fr)_minmax(360px,0.86fr)]">
      <article className="relative min-h-[520px] overflow-hidden rounded-lg border border-white/10 bg-[#111218] shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
        <EditorialImage
          className="absolute inset-0 rounded-none border-0"
          image={homeImageRoles.midia}
          label="capa editorial"
          objectPosition="center 44%"
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.78)_72%,rgba(0,0,0,0.92))]" />
        <div className="relative flex min-h-[520px] flex-col justify-end p-5 md:p-8">
          <Badge>Últimas histórias</Badge>
          <h2 className="mt-4 max-w-3xl text-balance text-[clamp(2.7rem,10vw,5.2rem)] font-black uppercase leading-[0.85] text-white">
            A mídia UR vira memória da temporada.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/76 md:text-lg">
            Guias do ecossistema, bastidores, atletas, ranking e comunidade em uma base preparada para conteúdo recorrente.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/midia">
              Ver mídia UR
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
            <Button href="/ecossistema" variant="secondary">
              Guia do ecossistema
            </Button>
          </div>
        </div>
      </article>

      <div className="grid gap-3">
        {stories.map((story, index) => {
          const Icon = categoryIcons[index] ?? BookOpen;

          return (
            <a
              className="group grid min-h-[126px] grid-cols-[116px_1fr] overflow-hidden rounded-lg border border-white/10 bg-white/[0.045] transition hover:border-[#ffd84d]/35 hover:bg-[#ffd84d]/10 sm:grid-cols-[150px_1fr]"
              href={story.href}
              key={story.title}
            >
              <EditorialImage className="min-h-full rounded-none border-0" image={story.image} label={story.category} />
              <div className="flex min-w-0 flex-col justify-between p-4">
                <div>
                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#ffe98b]">
                    <Icon aria-hidden className="h-3.5 w-3.5" />
                    {story.category}
                  </div>
                  <h3 className="mt-2 text-balance text-lg font-black uppercase leading-[0.95] text-white md:text-xl">
                    {story.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/64 md:text-sm">{story.description}</p>
                </div>
                <div className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-white/42">{story.meta}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

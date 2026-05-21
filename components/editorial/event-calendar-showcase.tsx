import { ArrowRight, CalendarDays, Flag, Swords, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { SiteImage } from "@/lib/content/site-images";
import { homeImageRoles } from "@/lib/content/site-images";
import { EditorialImage } from "./editorial-image";

type EventCard = {
  title: string;
  eyebrow: string;
  description: string;
  status: string;
  image: SiteImage;
  icon: typeof Zap;
};

const events: EventCard[] = [
  {
    title: "UR Play",
    eyebrow: "Entrada oficial",
    description: "Jogo, observação, nivelamento e início de histórico dentro do ecossistema.",
    status: "agenda em validação",
    image: homeImageRoles.eventos[0],
    icon: Zap,
  },
  {
    title: "Mini Torneio",
    eyebrow: "Competição recorrente",
    description: "Formato preparado para alimentar narrativa, ranking e mídia da temporada.",
    status: "eventos após confirmação",
    image: homeImageRoles.eventos[1],
    icon: Swords,
  },
  {
    title: "Virada de Ranking",
    eyebrow: "Fechamento de ciclo",
    description: "Momento de reconhecer evolução, presença e próximos passos do trimestre.",
    status: "temporada em formação",
    image: homeImageRoles.eventos[2],
    icon: Flag,
  },
];

export function EventCalendarShowcase() {
  return (
    <div className="grid gap-5">
      <div className="flex flex-col gap-5 rounded-lg border border-[#ffd84d]/20 bg-[linear-gradient(135deg,rgba(255,216,77,0.12),rgba(255,255,255,0.035))] p-5 md:flex-row md:items-center md:justify-between md:p-6">
        <div>
          <Badge>Calendário esportivo</Badge>
          <h2 className="mt-4 text-balance text-[clamp(2.4rem,8vw,4.4rem)] font-black uppercase leading-[0.88] text-white">
            A temporada precisa ter ritmo.
          </h2>
        </div>
        <div className="max-w-md">
          <p className="text-base leading-7 text-white/72">
            Cada evento tem função: entrada, competição, ranking, mídia, comunidade e oportunidade. Datas reais entram apenas após confirmação oficial.
          </p>
          <Button className="mt-5" href="/cadastro#atleta" variant="secondary">
            Demonstrar interesse
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {events.map((event) => {
          const Icon = event.icon;

          return (
            <article className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] shadow-[0_22px_64px_rgba(0,0,0,0.26)]" key={event.title}>
              <EditorialImage className="h-[230px] rounded-none border-0" image={event.image} label={event.eyebrow} />
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ffe98b]">{event.eyebrow}</div>
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#ffd84d]/20 bg-[#ffd84d]/10 text-[#ffd84d]">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-4 text-3xl font-black uppercase leading-[0.9] text-white">{event.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">{event.description}</p>
                <div className="mt-5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.14em] text-white/48">
                  <CalendarDays aria-hidden className="h-4 w-4 text-[#ffd84d]" />
                  {event.status}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

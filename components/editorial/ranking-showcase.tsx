import { ArrowRight, BarChart3, Crown, Shield, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { homeImageRoles } from "@/lib/content/site-images";
import { EditorialImage } from "./editorial-image";

const rankingRows = [
  { label: "Top 1", title: "top 1 a caminho", description: "seu nome aparece após presença e desempenho confirmados", icon: Crown },
  { label: "Top 2", title: "top 2 a caminho", description: "ranking abre com participação oficial", icon: Trophy },
  { label: "Top 3", title: "top 3 a caminho", description: "registro público entra com critério", icon: Shield },
] as const;

const rankingTypes = ["Individual", "Equipes", "Engajamento", "Polos"] as const;

export function RankingShowcase() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch">
      <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-[#ffd84d]/22 bg-black">
        <EditorialImage
          className="absolute inset-0 rounded-none border-0"
          image={homeImageRoles.ranking}
          label="ranking UR"
          objectPosition="center 28%"
          sizes="(min-width: 1024px) 45vw, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.78)_72%,rgba(0,0,0,0.94))]" />
        <div className="relative flex min-h-[520px] flex-col justify-end p-5 md:p-7">
          <Badge>Produto central do ecossistema</Badge>
          <h2 className="mt-4 max-w-2xl text-balance text-[clamp(2.6rem,10vw,4.6rem)] font-black uppercase leading-[0.86] text-white">
            Ranking com palco, não só tabela.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/72">
            A classificação pública nasce de presença, evolução, nível e participação confirmada.
          </p>
          <div className="mt-6">
            <Button href="/ranking" variant="secondary">
              Entender ranking
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Card premium className="p-4 md:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">ranking em formação</div>
            <h3 className="mt-3 text-3xl font-black uppercase leading-[0.9] text-white md:text-4xl">Top 3 preview</h3>
          </div>
          <span className="grid h-12 w-12 place-items-center rounded-lg bg-[#ffd84d] text-black">
            <BarChart3 aria-hidden className="h-6 w-6" />
          </span>
        </div>

        <div className="mt-6 grid gap-3">
          {rankingRows.map((row) => {
            const Icon = row.icon;

            return (
              <div
                className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-lg border border-white/10 bg-black/28 p-4"
                key={row.label}
              >
                <div className="grid h-14 w-14 place-items-center rounded-lg border border-[#ffd84d]/28 bg-[#ffd84d]/12 text-[#ffd84d]">
                  <Icon aria-hidden className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ffe98b]">{row.label}</div>
                  <h4 className="mt-1 text-xl font-black uppercase leading-none text-white">{row.title}</h4>
                  <p className="mt-2 text-sm leading-5 text-white/62">{row.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {rankingTypes.map((type) => (
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-3" key={type}>
              <div className="text-xs font-black uppercase tracking-[0.12em] text-white">{type}</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/42">após confirmação</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

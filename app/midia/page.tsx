import type { Metadata } from "next";
import { PageSection } from "@/components/site/page-section";
import { PremiumEmptyState } from "@/components/site/premium-empty-state";
import {
  ArrowRight,
  BarChart3,
  Camera,
  Clapperboard,
  Handshake,
  Megaphone,
  Mic2,
  Radio,
  Sparkles,
  Trophy,
  Users,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

export const metadata: Metadata = {
  title: "Mídia UR | Palco, Conteúdo e Narrativa Ultimate Rivals",
  description:
    "Conheça a mídia oficial do Ultimate Rivals como ativo estratégico para atletas, ranking, patrocinadores, eventos e comunidade.",
};

type MediaCard = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const mediaFormats: MediaCard[] = [
  {
    icon: Video,
    title: "Transmissões",
    description: "Coberturas futuras de jogos e eventos quando houver operação, agenda e estrutura validadas.",
  },
  {
    icon: Clapperboard,
    title: "Cortes",
    description: "Lances, reações, momentos de ranking e histórias curtas para ampliar alcance da comunidade.",
  },
  {
    icon: Camera,
    title: "Bastidores",
    description: "Rotina, preparação, rivalidade, torcida, quadras e construção da temporada.",
  },
  {
    icon: Mic2,
    title: "Histórias de atletas",
    description: "Atletas amadores tratados como personagens reais de uma jornada esportiva acompanhável.",
  },
  {
    icon: BarChart3,
    title: "Rankings narrativos",
    description: "Ranking como assunto, evolução, disputa, nível, equipe, virada e contexto da temporada.",
  },
  {
    icon: Radio,
    title: "Programas futuros",
    description: "Quadros, resenhas e formatos editoriais entram após validação de grade e operação.",
  },
  {
    icon: Handshake,
    title: "Conteúdo para patrocinadores",
    description: "Marcas podem participar de narrativas, benefícios, ativações e presença recorrente aprovada.",
  },
] as const;

const ecosystemLinks = [
  {
    title: "Ranking",
    description: "Transforma desempenho validado em narrativa pública.",
    icon: Trophy,
  },
  {
    title: "Patrocinadores",
    description: "Dão sustentação comercial para mídia, eventos e comunidade.",
    icon: Handshake,
  },
  {
    title: "Comunidade",
    description: "Acompanha, compartilha e dá vida às histórias do ecossistema.",
    icon: Users,
  },
] as const;


export default function MidiaPage() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,#090a0f_0%,#030405_100%)] px-5 py-12 md:py-16 lg:px-8 lg:py-20">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.72fr)] lg:items-center">
          <div className="min-w-0 text-center lg:text-left">
            <Badge>Mídia UR • palco • ranking • comunidade</Badge>
            <h1 className="mx-auto mt-5 max-w-5xl text-balance text-[clamp(2.8rem,10vw,4.65rem)] font-black uppercase leading-[0.94] tracking-normal text-white lg:mx-0">
              O atleta amador também merece palco.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 md:text-lg md:leading-8 lg:mx-0">
              A mídia oficial UR transforma jogos, evolução, ranking, bastidores e histórias em conteúdo para atletas,
              patrocinadores e comunidade.
            </p>
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:justify-center lg:justify-start">
              <Button href="/cadastro#comunidade">
                Acompanhar comunidade
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/cadastro#patrocinador" variant="secondary">
                Ativar marca na mídia
              </Button>
            </div>
          </div>

          <PremiumEmptyState
            ctaLabel="Acompanhar comunidade"
            description="Conteúdos oficiais entram após operação validada. Nenhum canal, métrica, vídeo, audiência ou entrega real foi inventado nesta página."
            footer="conteúdos oficiais entram após operação validada"
            href="/cadastro#comunidade"
            icon={Megaphone}
            statusLabel="grade de mídia em validação"
            title="Palco em preparação."
          />
        </div>
      </section>

      <PageSection>
        <SectionHeader
          description="Mídia UR é estrutura de narrativa: dá contexto ao ranking, valor ao patrocinador e pertencimento à comunidade."
          eyebrow="Mídia oficial"
          title="Conteúdo como ativo estratégico do ecossistema."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {mediaFormats.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card className="min-h-[230px]" key={item.title} premium={index === 1}>
                <Icon aria-hidden className="h-7 w-7 text-[#ffd84d]" />
                <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <SectionHeader
          description="O conteúdo precisa nascer da operação real. Sem ranking validado, agenda confirmada e histórias reais, a mídia permanece em preparação."
          eyebrow="Pré-lançamento operacional"
          title="Conteúdos oficiais entram após operação validada."
        />
        <Card className="grid gap-5 p-5 md:p-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]" premium>
          <div>
            <Sparkles aria-hidden className="h-8 w-8 text-[#ffd84d]" />
            <h2 className="mt-5 text-[clamp(2rem,8vw,2.85rem)] font-black uppercase leading-[0.98] text-white">
              Palco com responsabilidade.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Sem inventar vídeos, canais ou audiência.",
              "Sem prometer transmissões antes da operação.",
              "Sem destacar atletas sem validação oficial.",
              "Sem vender métricas comerciais não existentes.",
            ].map((item) => (
              <p className="rounded-lg border border-white/10 bg-black/25 p-4 text-sm font-bold leading-6 text-white/70" key={item}>
                {item}
              </p>
            ))}
          </div>
        </Card>
      </PageSection>

      <PageSection>
        <SectionHeader
          description="Mídia, ranking e patrocinadores se reforçam: a temporada cria assunto, a mídia amplifica e a marca participa com contexto."
          eyebrow="Relação com o ecossistema"
          title="Ranking vira narrativa. Comunidade vira audiência."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {ecosystemLinks.map((item, index) => {
            const Icon = item.icon;

            return (
              <Card className="min-h-[220px]" key={item.title} premium={index === 0}>
                <Icon aria-hidden className="h-7 w-7 text-[#ffd84d]" />
                <h2 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-white/68">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </PageSection>

      <PageSection className="bg-[#07080c]">
        <Card className="grid gap-6 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.45fr)] lg:items-center" premium>
          <div>
            <Badge>CTA Mídia UR</Badge>
            <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,8vw,3.4rem)] font-black uppercase leading-[0.98] text-white">
              Acompanhe a comunidade ou conecte sua marca ao palco.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/74">
              Comunidade e patrocinadores entram pela central de cadastro. Conteúdos, ativações e entregas dependem de
              operação validada.
            </p>
          </div>
          <div className="grid gap-3">
            <Button href="/cadastro#comunidade">Acompanhar comunidade</Button>
            <Button href="/cadastro#patrocinador" variant="secondary">
              Quero patrocinar
            </Button>
          </div>
        </Card>
      </PageSection>
    </main>
  );
}

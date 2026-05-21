import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  MapPin,
  Radio,
  Shield,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { CommercialShowcase } from "@/components/editorial/commercial-showcase";
import { CTASectionPremium } from "@/components/editorial/cta-section-premium";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { EventCalendarShowcase } from "@/components/editorial/event-calendar-showcase";
import { FeatureCard } from "@/components/editorial/feature-card";
import { GalleryStrip } from "@/components/editorial/gallery-strip";
import { ImageFeatureCard } from "@/components/editorial/image-feature-card";
import { MediaPortalSection } from "@/components/editorial/media-portal-section";
import { RankingShowcase } from "@/components/editorial/ranking-showcase";
import { SectionHeadingPremium } from "@/components/editorial/section-heading-premium";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { entryPaths, journeyEditorial, recognitionCards } from "@/lib/content/home-editorial";
import { homeImageRoles } from "@/lib/content/site-images";

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`scroll-mt-24 overflow-hidden border-t border-white/10 px-5 py-12 md:scroll-mt-28 md:py-16 lg:px-8 lg:py-20 ${className}`}
      id={id}
    >
      <div className="mx-auto max-w-7xl min-w-0">{children}</div>
    </section>
  );
}

const ecosystemCards = [
  {
    eyebrow: "Entrada oficial",
    title: "UR Play",
    description: "Jogo real, observação, nivelamento e início de histórico dentro da plataforma.",
    href: "/ur-play",
    cta: "Começar",
    icon: Zap,
  },
  {
    eyebrow: "Produto central",
    title: "Ranking",
    description: "A temporada ganha memória pública com classificação individual, coletiva e por engajamento.",
    href: "/ranking",
    cta: "Ver ranking",
    icon: BarChart3,
  },
  {
    eyebrow: "Identidade competitiva",
    title: "Equipes",
    description: "Times deixam de ser apenas grupos e passam a ter elenco, história, mídia e ranking coletivo.",
    href: "/equipes",
    cta: "Cadastrar",
    icon: Shield,
  },
] as const;

const leagueSignals = [
  "UR Play",
  "ranking",
  "equipes",
  "temporada",
  "mídia",
  "UR Coins",
  "UR Market",
  "CT UR",
  "patrocinadores",
] as const;

const quickProof = [
  { label: "Esporte real", value: "quadra, areia, atletas e comunidade" },
  { label: "Temporada", value: "próximo ciclo em organização" },
  { label: "Entrada", value: "cadastro de interesse aberto" },
] as const;

const galleryImages = homeImageRoles.galeria;

export default function Home() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative isolate overflow-hidden bg-black">
        <div className="relative min-h-[calc(100svh-68px)] pt-24 md:min-h-[760px] md:pt-28">
          <EditorialImage
            className="absolute inset-0 -z-20 rounded-none border-0"
            image={homeImageRoles.hero}
            label="Ultimate Rivals"
            objectPosition="center 46%"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.92),rgba(0,0,0,0.72)_38%,rgba(0,0,0,0.26)_72%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.28)_48%,#030405_100%)]" />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-[linear-gradient(180deg,transparent,#030405)]" />

          <div className="mx-auto flex min-h-[calc(100svh-68px)] max-w-7xl flex-col justify-end px-5 pb-7 md:min-h-[760px] md:pb-9 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.48fr)] lg:items-end">
              <div className="min-w-0">
                <Badge>Ultimate Rivals • ecossistema esportivo</Badge>
                <h1 className="mt-4 max-w-5xl text-balance text-[clamp(2.85rem,11.5vw,5.8rem)] font-black uppercase leading-[0.86] text-white md:text-[clamp(3.6rem,6.3vw,6.4rem)]">
                  O jogo virou ecossistema.
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-xl md:leading-8">
                  O esporte amador ganhou estrutura: competição, ranking, equipes, mídia, temporada e oportunidades no mesmo sistema.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/cadastro#atleta">
                    Entrar no UR
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </Button>
                  <Button className="min-h-10 px-3 py-2 text-xs shadow-none sm:w-auto" href="/ecossistema" variant="secondary">
                    Ver ecossistema
                  </Button>
                </div>
              </div>

              <aside className="rounded-lg border border-[#ffd84d]/24 bg-black/62 p-4 shadow-[0_26px_80px_rgba(0,0,0,0.42)] backdrop-blur md:p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">status da temporada</div>
                    <h2 className="mt-2 text-2xl font-black uppercase leading-none text-white">Próximo ciclo em organização</h2>
                  </div>
                  <Trophy aria-hidden className="h-8 w-8 text-[#ffd84d]" />
                </div>
                <div className="mt-5 grid gap-3">
                  {quickProof.map((item) => (
                    <div className="border-t border-white/10 pt-3" key={item.label}>
                      <div className="text-[10px] font-black uppercase tracking-[0.16em] text-[#ffe98b]">{item.label}</div>
                      <div className="mt-1 text-sm font-extrabold uppercase leading-5 text-white/76">{item.value}</div>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-[#ffd84d]/14 bg-black px-5 py-3 lg:px-8">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-hidden">
          <div className="flex min-w-max items-center gap-3">
            {leagueSignals.map((signal) => (
              <span
                className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-white/70"
                key={signal}
              >
                {signal}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Section id="ecossistema">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)]">
          <ImageFeatureCard
            cta="Entrar pelo UR Play"
            description="A porta de entrada para jogar, ser observado, iniciar histórico e entrar no radar do ranking."
            eyebrow="Esporte real + sistema"
            href="/ur-play"
            image={homeImageRoles.urPlay}
            title="A jornada começa jogando, mas não termina no jogo."
          />
          <div className="grid gap-4">
            {ecosystemCards.map((card, index) => (
              <FeatureCard
                cta={card.cta}
                description={card.description}
                eyebrow={card.eyebrow}
                featured={index === 1}
                href={card.href}
                icon={card.icon}
                key={card.title}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="caminhos">
        <SectionHeadingPremium
          description="O visitante escolhe rapidamente seu papel dentro do ecossistema: atleta, equipe, patrocinador, quadra ou comunidade."
          eyebrow="Como entrar"
          title="Um ecossistema cresce quando cada público tem uma porta clara."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {entryPaths.map((path) => {
            const Icon = path.icon;

            return (
              <Link
                className="group relative min-h-[210px] overflow-hidden rounded-lg border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-5 transition hover:-translate-y-0.5 hover:border-[#ffd84d]/35"
                href={path.href}
                key={path.label}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#ffd84d] opacity-0 transition group-hover:opacity-100" />
                <Icon aria-hidden className="h-7 w-7 text-[#ffd84d]" />
                <h3 className="mt-6 text-2xl font-black uppercase leading-[0.92] text-white">{path.label}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{path.description}</p>
                <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                  Iniciar
                  <ArrowRight aria-hidden className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section id="midia">
        <MediaPortalSection />
      </Section>

      <Section className="bg-[#07080b]" id="ranking">
        <RankingShowcase />
      </Section>

      <Section id="temporada">
        <EventCalendarShowcase />
      </Section>

      <Section className="bg-black" id="acervo">
        <GalleryStrip
          description="Comemoração, ataque, defesa, premiação, público e bastidores começam a dar textura real para a memória esportiva."
          images={galleryImages}
          title="A Home agora respira quadra, areia e gente."
        />
      </Section>

      <Section className="bg-[linear-gradient(180deg,#030405,#090a0e)]" id="jornada">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-center">
          <div>
            <Badge>Jornada UR</Badge>
            <h2 className="mt-4 text-balance text-[clamp(2.55rem,8vw,4.4rem)] font-black uppercase leading-[0.88] text-white">
              Do primeiro jogo à reputação pública.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/72 md:text-lg">
              O ecossistema transforma participação em histórico, histórico em evolução e evolução em oportunidade.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/atletas" variant="secondary">
                Jornada do atleta
              </Button>
              <Button href="/equipes" variant="ghost">
                Equipes oficiais
              </Button>
            </div>
          </div>

          <div className="grid gap-3">
            {journeyEditorial.map((step) => (
              <article
                className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4 md:grid-cols-[auto_1fr] md:p-5"
                key={step.step}
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-[#ffd84d] text-xs font-black text-black">
                  {step.step}
                </span>
                <div>
                  <h3 className="text-xl font-black uppercase leading-none text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/68">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section id="reconhecimento">
        <SectionHeadingPremium
          description="O reconhecimento no UR nasce de presença, evolução, ranking, participação confirmada, mídia e benefícios com critério."
          eyebrow="Reconhecimento"
          title="Evoluir precisa gerar memória, palco e recompensa."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {recognitionCards.map((card) => {
            const Icon = card.icon;

            return (
              <Card className="p-5" key={card.title}>
                <span className="grid h-12 w-12 place-items-center rounded-lg border border-[#ffd84d]/20 bg-[#ffd84d]/10 text-[#ffd84d]">
                  <Icon aria-hidden className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-black uppercase leading-tight text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">{card.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section className="bg-[#07080b]" id="patrocinadores">
        <CommercialShowcase />
      </Section>

      <Section id="comunidade">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <ImageFeatureCard
            cta="Acompanhar comunidade"
            description="A comunidade acompanha agenda, mídia, bastidores, próximos passos e oportunidades conforme o calendário avança."
            eyebrow="Comunidade"
            href="/cadastro#comunidade"
            image={homeImageRoles.comunidade}
            title="A comunidade cresce com quem vive o jogo."
          />
          <Card premium className="p-5 md:p-7">
            <Radio aria-hidden className="h-7 w-7 text-[#ffd84d]" />
            <h2 className="mt-5 text-3xl font-black uppercase leading-[0.9] text-white">FAQ rápido</h2>
            <div className="mt-6 grid gap-4">
              {[
                ["É torneio?", "Não. É ecossistema contínuo com UR Play, ranking, equipes, mídia, eventos e recompensas."],
                ["Já tem ranking real?", "Ainda não. Seu nome começa a aparecer conforme presença, desempenho e participação confirmada."],
                ["Cadastro garante vaga?", "Não. Seu cadastro coloca você no radar do UR; a entrada passa por validação para manter equilíbrio, respeito e organização."],
              ].map(([question, answer]) => (
                <div className="border-t border-white/10 pt-4" key={question}>
                  <h3 className="text-sm font-black uppercase leading-5 text-white">{question}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/66">{answer}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <section className="border-t border-white/10 bg-black px-5 py-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {[
            { icon: Users, label: "Sou atleta", href: "/cadastro#atleta" },
            { icon: Shield, label: "Tenho equipe", href: "/cadastro#equipe" },
            { icon: MapPin, label: "Tenho quadra", href: "/cadastro#quadra" },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <Link
                className="group flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-4 transition hover:border-[#ffd84d]/35 hover:bg-[#ffd84d]/10"
                href={item.href}
                key={item.label}
              >
                <span className="flex items-center gap-3">
                  <Icon aria-hidden className="h-5 w-5 text-[#ffd84d]" />
                  <span className="text-sm font-black uppercase tracking-[0.1em] text-white">{item.label}</span>
                </span>
                <ArrowRight aria-hidden className="h-4 w-4 text-white/50 transition group-hover:translate-x-1 group-hover:text-[#ffd84d]" />
              </Link>
            );
          })}
        </div>
      </section>

      <CTASectionPremium />
    </main>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  CircleDot,
  MapPin,
  Radio,
  Shield,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { AdSlotHorizontal } from "@/components/editorial/ad-slot-horizontal";
import { CTASectionPremium } from "@/components/editorial/cta-section-premium";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { FeatureCard } from "@/components/editorial/feature-card";
import { GalleryStrip } from "@/components/editorial/gallery-strip";
import { ImageFeatureCard } from "@/components/editorial/image-feature-card";
import { MediaStoryCard } from "@/components/editorial/media-story-card";
import { SectionHeadingPremium } from "@/components/editorial/section-heading-premium";
import { SponsoredBlock } from "@/components/editorial/sponsored-block";
import { StatRibbon } from "@/components/editorial/stat-ribbon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ecosystemHighlights,
  editorialStories,
  entryPaths,
  journeyEditorial,
  recognitionCards,
  seasonSignals,
} from "@/lib/content/home-editorial";
import { siteImages } from "@/lib/content/site-images";

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

const eventCards = [
  {
    icon: Zap,
    title: "UR Play",
    description: "Entrada oficial para observar nível, presença, postura e potencial competitivo.",
  },
  {
    icon: CalendarDays,
    title: "Temporada",
    description: "Ciclo recorrente com agenda oficial publicada após confirmação operacional.",
  },
  {
    icon: Trophy,
    title: "Virada de Ranking",
    description: "Fechamento de ciclo preparado para reconhecer evolução sem inventar dados reais.",
  },
];

const sponsorSlots = [
  "mídia oficial",
  "eventos e ativações",
  "UR Market",
  "ranking e temporada",
  "CT UR",
  "quadras parceiras",
];

const faqItems = [
  {
    question: "O Ultimate Rivals é um torneio?",
    answer:
      "Não. O UR é um ecossistema contínuo: entrada pelo UR Play, nivelamento, ranking, equipes, eventos, mídia, recompensas e oportunidades.",
  },
  {
    question: "Já existem rankings públicos com atletas reais?",
    answer:
      "Ainda não. Dados públicos entram após validação oficial, participação confirmada e operação registrada pela equipe UR.",
  },
  {
    question: "O cadastro garante vaga?",
    answer:
      "Não. O cadastro registra interesse e abre a triagem operacional. Participação, parceria ou patrocínio dependem de validação da equipe UR.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#030405] text-[#f5efdd]">
      <section className="relative isolate overflow-hidden bg-black px-5 py-8 pt-24 md:py-10 md:pt-28 lg:min-h-[calc(100vh-72px)] lg:px-8 lg:py-12 lg:pt-28">
        <EditorialImage
          className="absolute inset-0 -z-20 rounded-none border-0"
          image={siteImages.heroArena}
          label="arena UR"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.68)_46%,rgba(0,0,0,0.38)),linear-gradient(180deg,rgba(0,0,0,0.2),#030405_98%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-[linear-gradient(180deg,transparent,#030405)]" />

        <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.76fr)] lg:items-end">
          <div className="min-w-0">
            <Badge>Temporada em validação operacional</Badge>
            <h1 className="mt-4 max-w-5xl text-balance text-[clamp(3rem,12vw,5.4rem)] font-black uppercase leading-[0.86] text-white md:text-[clamp(3.45rem,5.2vw,5.4rem)]">
              O esporte amador com cara de liga.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 md:text-lg md:leading-8">
              O Ultimate Rivals organiza atletas, equipes, ranking, mídia, temporada, recompensas e oportunidades em um ecossistema esportivo premium.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/cadastro#atleta">
                Entrar no UR
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
              <Button href="/ecossistema" variant="secondary">
                Ver ecossistema
              </Button>
            </div>

            <StatRibbon className="mt-7 max-w-4xl" items={seasonSignals} />
          </div>

          <aside className="rounded-lg border border-[#ffd84d]/24 bg-black/58 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur md:p-5">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <div className="text-[11px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">painel da liga</div>
                <h2 className="mt-2 text-2xl font-black uppercase leading-none text-white">Próximos passos</h2>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#ffd84d] text-black">
                <Trophy aria-hidden className="h-5 w-5" />
              </span>
            </div>
            <div className="mt-4 grid gap-3">
              {[
                ["01", "Cadastro de interesse aberto", "Atletas, equipes, quadras, marcas e comunidade."],
                ["02", "UR Play como entrada", "Participação sujeita à validação da equipe UR."],
                ["03", "Ranking público futuro", "Dados reais entram após participações validadas."],
              ].map(([number, title, description]) => (
                <div className="grid grid-cols-[auto_1fr] gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-3" key={title}>
                  <span className="grid h-9 w-9 place-items-center rounded-md border border-[#ffd84d]/24 bg-[#ffd84d]/10 text-xs font-black text-[#ffe98b]">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-sm font-black uppercase leading-5 text-white">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/62">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <Section className="border-t-0 pt-6 md:pt-8">
        <AdSlotHorizontal label="Área preparada para marca parceira do ciclo UR" />
      </Section>

      <Section id="ecossistema">
        <SectionHeadingPremium
          action={
            <Button href="/ecossistema" variant="secondary">
              Explorar arquitetura
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
          }
          description="A Home passa a funcionar como portal: o visitante entende a liga, escolhe seu caminho, acompanha a temporada e encontra pontos de entrada claros."
          eyebrow="Ecossistema"
          title="Não é evento isolado. É jornada esportiva."
        />
        <div className="grid gap-5 lg:grid-cols-4">
          <ImageFeatureCard
            className="lg:col-span-2"
            cta="Começar no UR Play"
            description="O ponto de entrada para jogar, ser observado e iniciar histórico dentro do ecossistema."
            eyebrow="Entrada oficial"
            href="/ur-play"
            image={siteImages.urPlayAction}
            title="UR Play"
          />
          {ecosystemHighlights.slice(1).map((item, index) => (
            <FeatureCard
              cta={item.cta}
              description={item.description}
              eyebrow={item.eyebrow}
              featured={index === 1}
              href={item.href}
              icon={item.icon}
              key={item.title}
              title={item.title}
            />
          ))}
        </div>
      </Section>

      <Section className="bg-[linear-gradient(180deg,#030405,#08090d)]" id="caminhos">
        <SectionHeadingPremium
          align="center"
          description="Cada público entra pelo mesmo ecossistema, mas com uma jornada própria, CTA direto e validação operacional antes dos próximos passos."
          eyebrow="Escolha seu caminho"
          title="Uma porta de entrada para cada perfil."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {entryPaths.map((path) => {
            const Icon = path.icon;

            return (
              <Card className="group flex flex-col p-4 md:p-5" key={path.label}>
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-[#ffd84d]/20 bg-[#ffd84d]/10 text-[#ffd84d]">
                  <Icon aria-hidden className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-black uppercase leading-none text-white">{path.label}</h3>
                <p className="mt-3 min-h-[72px] text-sm leading-6 text-white/68">{path.description}</p>
                <Button className="mt-auto min-h-10 px-4 py-2 text-xs" href={path.href} variant="secondary">
                  Iniciar
                  <ArrowRight aria-hidden className="h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section id="jornada">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <Badge>Jornada UR</Badge>
            <h2 className="mt-4 text-balance text-[clamp(2.55rem,8vw,4.1rem)] font-black uppercase leading-[0.9] text-white">
              Do primeiro jogo à reputação pública.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/72 md:text-lg">
              A experiência foi pensada para transformar participação em histórico, histórico em evolução e evolução em oportunidade.
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
          <div className="relative">
            <div className="absolute left-5 top-4 hidden h-[calc(100%-2rem)] w-px bg-[#ffd84d]/24 md:block" />
            <div className="grid gap-3">
              {journeyEditorial.map((step) => (
                <article className="relative grid gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-4 md:grid-cols-[auto_1fr] md:p-5" key={step.step}>
                  <span className="z-10 grid h-10 w-10 place-items-center rounded-lg bg-[#ffd84d] text-xs font-black text-black">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="text-lg font-black uppercase leading-tight text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#07080b]" id="temporada">
        <SectionHeadingPremium
          description="Ranking, eventos e reconhecimento aparecem como narrativa de temporada, não como tabela solta. A operação pública abre depois das primeiras validações oficiais."
          eyebrow="Temporada e ranking"
          title="Competição com contexto, ciclo e memória."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <Card premium className="p-5 md:p-7">
            <div className="flex items-center justify-between gap-4">
              <Badge>Ranking preview</Badge>
              <span className="text-xs font-black uppercase tracking-[0.14em] text-white/54">dados públicos após validação</span>
            </div>
            <div className="mt-6 grid gap-3">
              {["Ranking individual", "Ranking coletivo", "Ranking de engajamento"].map((item, index) => (
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-black/28 p-4" key={item}>
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-[#ffd84d] text-sm font-black text-black">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-black uppercase text-white">{item}</h3>
                    <p className="mt-1 text-sm text-white/62">ranking será aberto após participações validadas</p>
                  </div>
                  <CircleDot aria-hidden className="hidden h-5 w-5 text-[#ffd84d] sm:block" />
                </div>
              ))}
            </div>
          </Card>
          <div className="grid gap-4 md:grid-cols-3">
            {eventCards.map((event) => {
              const Icon = event.icon;

              return (
                <Card className="p-5" key={event.title}>
                  <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
                  <h3 className="mt-5 text-xl font-black uppercase leading-none text-white">{event.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">{event.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      <Section id="midia">
        <SectionHeadingPremium
          action={
            <Button href="/midia" variant="secondary">
              Ver mídia UR
            </Button>
          }
          description="A base editorial fica pronta para notícias, guias, bastidores, cobertura e mídia patrocinada sem inventar números, datas ou resultados."
          eyebrow="Mídia e editorial"
          title="O atleta amador também merece palco."
        />
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <MediaStoryCard
            story={{
              cta: "Conhecer proposta",
              description:
                "A cobertura oficial UR prepara histórias, bastidores, ranking narrativo e conteúdo de comunidade para acompanhar a evolução do ecossistema.",
              eyebrow: "cobertura em preparação",
              href: "/midia",
              imageKey: "mediaCoverage",
              meta: "grade de mídia em validação",
              title: "Narrativa de liga, não só resultado.",
            }}
          />
          <div className="grid gap-4">
            {editorialStories.map((story) => (
              <MediaStoryCard key={story.title} story={story} />
            ))}
          </div>
        </div>
        <AdSlotHorizontal className="mt-6" label="Slot editorial para conteúdo de marca" />
      </Section>

      <Section className="bg-black" id="acervo">
        <GalleryStrip
          images={[
            siteImages.urPlayAction,
            siteImages.mediaCoverage,
            siteImages.fairPlayLine,
            siteImages.attackBlock,
            siteImages.communityMoment,
          ]}
        />
      </Section>

      <Section className="bg-[linear-gradient(180deg,#030405,#090a0e)]" id="reconhecimento">
        <SectionHeadingPremium
          description="A recompensa no UR nasce da jornada: presença, evolução, ranking, engajamento e participação validada."
          eyebrow="Reconhecimento"
          title="Ranking, UR Coins, CT UR e recompensas com critério."
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

      <Section id="patrocinadores">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.05fr)] lg:items-stretch">
          <SponsoredBlock items={sponsorSlots} />
          <Card className="p-5 md:p-7">
            <Badge>Ativação comercial</Badge>
            <h2 className="mt-4 text-balance text-[clamp(2.2rem,7vw,3.4rem)] font-black uppercase leading-[0.9] text-white">
              Marcas entram na jornada, não só no banner.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/72">
              O patrocinador certo aparece em eventos, mídia, ranking, UR Market, CT UR e comunidade, com entregas reais definidas após proposta e validação.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {sponsorSlots.map((slot) => (
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] p-3" key={slot}>
                  <CheckCircle2 aria-hidden className="h-5 w-5 shrink-0 text-[#ffd84d]" />
                  <span className="text-sm font-extrabold uppercase leading-5 text-white/76">{slot}</span>
                </div>
              ))}
            </div>
            <Button className="mt-6" href="/cadastro#patrocinador" variant="secondary">
              Quero patrocinar
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
          </Card>
        </div>
      </Section>

      <Section className="bg-[#07080b]" id="comunidade">
        <div className="grid gap-5 lg:grid-cols-3">
          <ImageFeatureCard
            className="lg:col-span-2"
            cta="Acompanhar comunidade"
            description="A comunidade acompanha agenda, mídia, bastidores, próximos passos e oportunidades à medida que a operação é validada."
            eyebrow="Comunidade"
            href="/cadastro#comunidade"
            image={siteImages.communityMoment}
            title="A liga cresce com quem vive o jogo."
          />
          <Card premium className="p-5 md:p-7">
            <Radio aria-hidden className="h-7 w-7 text-[#ffd84d]" />
            <h2 className="mt-5 text-3xl font-black uppercase leading-[0.9] text-white">FAQ rápido</h2>
            <div className="mt-6 grid gap-4">
              {faqItems.map((item) => (
                <div className="border-t border-white/10 pt-4" key={item.question}>
                  <h3 className="text-sm font-black uppercase leading-5 text-white">{item.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/66">{item.answer}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      <Section className="py-8 md:py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Users, label: "Atletas", href: "/cadastro#atleta" },
            { icon: Shield, label: "Equipes", href: "/cadastro#equipe" },
            { icon: MapPin, label: "Quadras parceiras", href: "/cadastro#quadra" },
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
      </Section>

      <CTASectionPremium />
    </main>
  );
}

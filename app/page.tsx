import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { CTASectionPremium } from "@/components/editorial/cta-section-premium";
import { Button } from "@/components/ui/button";
import { homeImageRoles } from "@/lib/content/site-images";
import { EditorialImage } from "@/components/editorial/editorial-image";
import {
  TerritoryArtCard,
} from "@/components/season";
import { season1 } from "@/lib/content/season1";

function S({
  id,
  children,
  className = "",
  style,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <section
      className={`scroll-mt-0 overflow-hidden border-t border-white/10 px-5 py-7 md:py-12 lg:px-8 lg:py-14 ${className}`}
      id={id}
      style={style}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

const heroStats = [
  { label: "Polos", value: season1.poles.length },
  { label: "Eventos", value: "4" },
  { label: "Modalidades", value: season1.modalities.length },
] as const;

const howItWorksSteps = [
  {
    title: "Entenda a jornada",
    description: "UR Play, modalidade, polo, ranking e eventos fazem parte de uma temporada contínua.",
  },
  {
    title: "Escolha onde começar",
    description: "Comece por Dupla ou Quarteto, respeitando seu momento e seu nível.",
  },
  {
    title: "Evolua com histórico",
    description: "Sua presença, desempenho e evolução ajudam a formar sua trajetória no UR.",
  },
] as const;

const urPlayCards = [
  {
    title: "Jogar",
    description: "Você entra em atividade real, no seu momento e com caminho claro.",
  },
  {
    title: "Ser observado",
    description: "Presença, postura e evolução começam a ganhar leitura.",
  },
  {
    title: "Começar histórico",
    description: "Cada participação ajuda a formar sua trajetória no UR.",
  },
] as const;

const ecosystemCards = [
  {
    title: "Caminho claro",
    description: "Você entende por onde começar e como evoluir dentro da temporada.",
  },
  {
    title: "Nível mais justo",
    description: "O sistema ajuda a organizar atletas por momento, presença e evolução.",
  },
  {
    title: "Histórico do atleta",
    description: "Cada participação ajuda a formar trajetória, dados e reputação.",
  },
  {
    title: "Visibilidade",
    description: "A mídia registra jogos, histórias, rankings e destaques.",
  },
  {
    title: "Comunidade",
    description: "Polos, equipes e eventos aproximam atletas da região.",
  },
  {
    title: "Oportunidades",
    description: "Benefícios e parceiros aparecem como consequência da participação.",
  },
] as const;

const modalityDetails = {
  dupla: {
    meta: "ideal para começar",
    description: "Entrada simples, dinâmica e ideal para começar a construir ritmo.",
  },
  quarteto: {
    meta: "jogo coletivo",
    description: "Formato coletivo para quem quer jogar em grupo e representar uma formação.",
  },
} as const;

const poleDetails = {
  bh: {
    subtitle: "Polo central para entrada, jogos e evolução da comunidade UR.",
    href: "/quadras-parceiras#polos",
  },
  betim: {
    subtitle: "Polo em expansão para atletas que querem começar e ganhar ritmo.",
    href: "/quadras-parceiras#polos",
  },
  contagem: {
    subtitle: "Polo estratégico para fortalecer equipes, eventos e presença regional.",
    href: "/quadras-parceiras#polos",
  },
} as const;

const nextStepCards = [
  {
    title: "Cadastro",
    description: "Registre seu perfil e entre no radar certo.",
    href: "/cadastro",
    cta: "Fazer cadastro",
  },
  {
    title: "UR Play",
    description: "Comece jogando e formando histórico.",
    href: "/ur-play",
    cta: "Conhecer UR Play",
  },
  {
    title: "Equipes",
    description: "Organize escudo, Dupla ou Quarteto.",
    href: "/equipes",
    cta: "Ver equipes",
  },
  {
    title: "Temporada",
    description: "Veja como a jornada evolui por etapas.",
    href: "/temporada",
    cta: "Ver temporada",
  },
] as const;

const evolutionCards = [
  {
    title: "Ranking",
    description: "Acompanha nível, presença e evolução.",
    href: "/ranking",
    cta: "Entender ranking",
  },
  {
    title: "Eventos",
    description: "Cria ritmo competitivo por etapa.",
    href: "/eventos",
    cta: "Ver eventos",
  },
  {
    title: "Mídia",
    description: "Registra histórias, jogos e destaques.",
    href: "/midia",
    cta: "Conhecer mídia",
  },
] as const;

const benefitCards = [
  {
    title: "UR Coins",
    description: "Camada de engajamento conforme critérios oficiais.",
    icon: "/season-1/symbols/ur-coins-line.svg",
  },
  {
    title: "Recompensas",
    description: "Reconhecimento sujeito a regras e disponibilidade.",
    icon: "/season-1/symbols/ur-legends-line.svg",
  },
  {
    title: "Parceiros",
    description: "Produtos, serviços e ativações com validação.",
    icon: "/season-1/symbols/ur-series-line.svg",
  },
] as const;

const regulationCards = [
  {
    title: "Regulamento",
    description: "Entenda regras, critérios e funcionamento oficial.",
  },
  {
    title: "Fair Play",
    description: "Postura, respeito e conduta fazem parte da evolução.",
  },
  {
    title: "Critérios",
    description: "Pontuação, presença e participação seguem regras claras.",
  },
] as const;

export default function Home() {
  return (
    <main style={{ background: "#0A0A0B", color: "#F4F0E6" }}>

      {/* ── 1. HERO TEMPORADA 1 ── */}
      <section className="relative isolate overflow-hidden" style={{ background: "#0A0A0B" }}>
        <div className="relative min-h-[480px] py-12 md:min-h-[640px] md:py-20">
          <EditorialImage
            className="absolute inset-0 -z-20 rounded-none border-0 opacity-30"
            image={homeImageRoles.hero}
            label="Temporada 1 — Territórios em Disputa"
            objectPosition="center 40%"
            priority
            sizes="100vw"
          />
          {/* Sand texture */}
          <div
            className="absolute inset-0 -z-10 opacity-[0.12] pointer-events-none"
            style={{ backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)", backgroundSize: "cover" }}
          />
          <div className="absolute inset-0 -z-10" style={{ background: "linear-gradient(90deg, rgba(10,10,11,0.96) 0%, rgba(10,10,11,0.80) 50%, rgba(10,10,11,0.50) 100%)" }} />
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 pointer-events-none" style={{ background: "linear-gradient(180deg, transparent, #0A0A0B)" }} />

          <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">

              {/* Left: headline */}
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-sm border border-[rgba(212,164,55,0.35)] bg-[rgba(212,164,55,0.1)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#D4A437] animate-pulse" />
                    UR Temporada 1 · Territórios em Disputa
                  </span>
                </div>
                <h1
                  className="text-[clamp(2.5rem,10vw,6rem)] font-bold uppercase leading-[0.9] tracking-[0.01em]"
                  style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6" }}
                >
                  Escolha seu{" "}<br />
                  <span style={{ color: "#D4A437" }}>primeiro passo no UR.</span>
                </h1>
                <p
                  className="mt-5 max-w-lg text-base md:text-lg leading-7"
                  style={{ color: "rgba(244,240,230,0.75)", fontFamily: "'Manrope', system-ui, sans-serif" }}
                >
                  Entenda como funciona a jornada, escolha sua modalidade, conheça os polos e comece no seu ritmo.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="#como-funciona">
                    Como funciona
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </Button>
                  <Button href="/cadastro" variant="secondary">
                    Fazer cadastro
                  </Button>
                </div>
                <div
                  className="mt-6 grid grid-cols-3 gap-2 rounded-lg border border-[rgba(212,164,55,0.18)] bg-[#14141A]/82 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.42)] backdrop-blur lg:hidden"
                >
                  {heroStats.map((s) => (
                    <div
                      className="rounded border border-white/10 bg-white/[0.035] px-2 py-3 text-center"
                      key={s.label}
                    >
                      <span
                        className="block text-lg font-bold text-[#D4A437]"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {s.value}
                      </span>
                      <span
                        className="mt-1 block text-[9px] font-bold uppercase tracking-[0.14em] text-[#8A8A93]"
                        style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
                      >
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: scoreboard panel */}
              <div
                className="hidden lg:block w-[280px] rounded-lg overflow-hidden"
                style={{
                  border: "1px solid rgba(212,164,55,0.20)",
                  background: "#14141A",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.5)",
                }}
              >
                {/* Panel header */}
                <div
                  className="px-4 py-3 border-b border-[rgba(255,255,255,0.06)] flex items-center gap-2"
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest text-[#D4A437]"
                    style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
                  >
                    A ESCALADA
                  </span>
                </div>

                {/* Ladder items */}
                <div className="divide-y divide-[rgba(255,255,255,0.04)]">
                  {season1.ladder.map((product, idx) => (
                    <div key={product.id} className="flex items-center gap-3 px-4 py-3">
                      <img
                        alt={product.name}
                        src={product.symbolSolid}
                        loading="lazy"
                        style={{ width: 28, height: 28, opacity: 0.85 }}
                      />
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-bold uppercase text-[#F4F0E6] truncate"
                          style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
                        >
                          {product.name}
                        </p>
                      </div>
                      {idx < season1.ladder.length - 1 && (
                        <ArrowRight className="h-3.5 w-3.5 shrink-0" style={{ color: "rgba(212,164,55,0.45)" }} />
                      )}
                      {idx === season1.ladder.length - 1 && (
                        <span
                          className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded"
                          style={{ background: "rgba(212,164,55,0.15)", color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}
                        >
                          Apex
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Divider + stats */}
                <div className="px-4 py-2 border-t border-[rgba(255,255,255,0.06)]">
                  <p
                    className="text-[9px] text-center font-bold uppercase tracking-widest text-[#8A8A93] mb-2"
                    style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
                  >
                    Temporada 1
                  </p>
                  <div className="grid grid-cols-3 gap-1">
                    {heroStats.map((s) => (
                      <div key={s.label} className="flex flex-col items-center">
                        <span
                          className="text-base font-bold text-[#D4A437]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >
                          {s.value}
                        </span>
                        <span
                          className="text-[9px] text-[#8A8A93]"
                          style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
                        >
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── 2. COMO FUNCIONA ── */}
      <S id="como-funciona" className="border-t border-[rgba(212,164,55,0.12)]" style={{ background: "#0A0A0B" }}>
        <div className="mb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Como funciona</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Primeiro entenda.<br />Depois escolha.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Primeiro entenda o caminho. Depois escolha como entrar.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {howItWorksSteps.map((step, index) => (
            <div
              className="relative overflow-hidden rounded-lg border border-[rgba(212,164,55,0.14)] bg-[#14141A] p-4 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
              key={step.title}
            >
              <span
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: "#D4A437", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className="mt-4 text-xl font-bold uppercase leading-[0.95]"
                style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
              >
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </S>

      {/* ── 3. UR PLAY ── */}
      <S id="ur-play" style={{ background: "#0D0D12" }}>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Porta de entrada</p>
            <h2
              className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
            >
              UR Play é<br />a porta de entrada.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
              É onde você começa a participar, ser observado, entender seu nível e construir histórico antes de avançar para etapas maiores.
            </p>
            <div className="mt-5">
              <Button href="/ur-play" variant="secondary">Conhecer UR Play</Button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {urPlayCards.map((card, index) => (
              <div
                className="rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-4"
                key={card.title}
              >
                <span
                  className="text-xs font-bold uppercase tracking-[0.18em]"
                  style={{ color: "#D4A437", fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3
                  className="mt-3 text-xl font-bold uppercase leading-[0.95]"
                  style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
                >
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </S>

      {/* ── 4. ECOSSISTEMA ── */}
      <S id="ecossistema" style={{ background: "#0A0A0B" }}>
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Ecossistema UR</p>
            <h2
              className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
            >
              O ecossistema UR<br />organiza sua jornada.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
              O Ultimate Rivals conecta jogos, ranking, níveis, equipes, mídia, polos, benefícios e desenvolvimento para que o atleta tenha caminho, histórico e clareza.
            </p>
          </div>
          <Button className="w-full sm:w-auto" href="/ecossistema" variant="secondary">
            Entender o ecossistema
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystemCards.map((card) => (
            <div
              className="rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-4"
              key={card.title}
            >
              <h3
                className="text-lg font-bold uppercase leading-[0.95]"
                style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
              >
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </S>

      {/* ── 5. MODALIDADES ── */}
      <S id="modalidades" style={{ background: "#0D0D12" }}>
        <div className="mb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Modalidades</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Escolha entre<br />Dupla e Quarteto.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Escolha um formato simples para começar a jogar.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {season1.modalities.map((m) => {
            const detail = modalityDetails[m.id];

            return (
              <Link
                className="group relative min-h-[188px] overflow-hidden rounded-lg border border-[rgba(212,164,55,0.16)] bg-[#14141A] p-4 transition-all hover:border-[#D4A437] hover:bg-[rgba(212,164,55,0.04)] sm:min-h-[170px]"
                href="/cadastro#atleta"
                key={m.id}
              >
                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)", backgroundSize: "cover" }} />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-[rgba(212,164,55,0.18)] bg-black/25">
                    <img alt={m.name} className="h-8 w-8 opacity-90" loading="lazy" src={m.symbolSolid} />
                  </div>
                  <p className="mt-4 text-[10px] font-bold uppercase leading-4 tracking-[0.14em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                    {detail.meta}
                  </p>
                  <h3
                    className="mt-1 text-2xl font-bold uppercase leading-[0.92]"
                    style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
                  >
                    {m.name}
                  </h3>
                  <p className="mt-2 text-xs leading-5 sm:text-sm" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                    {detail.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </S>

      {/* ── 6. POLOS ── */}
      <S id="polos" style={{ background: "#0A0A0B" }}>
        <span aria-hidden className="block scroll-mt-0" id="territorios" />
        <div className="mb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Polos iniciais</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Conheça onde<br />a temporada ganha chão.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Três territórios iniciais para jogar, criar presença e fortalecer comunidade.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-5 px-5 sm:mx-0 sm:px-0 md:overflow-visible md:grid md:grid-cols-3">
          {season1.poles.map((p, i) => {
            const details = poleDetails[p.id];

            return (
              <div className="snap-start shrink-0 w-[84vw] max-w-[360px] md:w-auto md:max-w-none" key={p.id}>
                <TerritoryArtCard
                  ctaHref={details.href}
                  ctaLabel="Ver polo"
                  featured
                  pole={p}
                  rank={i + 1}
                  subtitle={details.subtitle}
                />
              </div>
            );
          })}
        </div>
      </S>

      {/* ── 7. PRIMEIRO PASSO ── */}
      <S id="primeiro-passo" style={{ background: "#0D0D12" }}>
        <div className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Próximos passos</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Agora dê<br />o primeiro passo.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Depois de entender a jornada, o caminho mais simples é se cadastrar e começar pelo UR Play.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {nextStepCards.map((card) => (
            <Link
              className="group rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-4 transition-all hover:border-[#D4A437] hover:bg-[rgba(212,164,55,0.04)]"
              href={card.href}
              key={card.title}
            >
              <h3
                className="text-xl font-bold uppercase leading-[0.95]"
                style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
              >
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                {card.description}
              </p>
              <span
                className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}
              >
                {card.cta}
                <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </S>

      {/* ── 8. EVOLUÇÃO ── */}
      <S id="evolucao" style={{ background: "#0A0A0B" }}>
        <div className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Evolução</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            A evolução<br />fica visível.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Com o tempo, sua participação gera histórico, presença e oportunidades dentro da temporada.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {evolutionCards.map((card) => (
            <Link
              className="group rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-4 transition-all hover:border-[#D4A437] hover:bg-[rgba(212,164,55,0.04)]"
              href={card.href}
              key={card.title}
            >
              <h3
                className="text-xl font-bold uppercase leading-[0.95]"
                style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
              >
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                {card.description}
              </p>
              <span
                className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}
              >
                {card.cta}
                <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </S>

      {/* ── 9. BENEFÍCIOS ── */}
      <S id="recompensas" style={{ background: "#0D0D12" }}>
        <span aria-hidden className="block scroll-mt-0" id="premiacoes" />
        <div className="mb-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>UR Coins · UR Market</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Benefícios são consequência<br />da jornada.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            UR Coins, recompensas e parceiros entram como camada de valorização, sempre sujeitos a regras, disponibilidade e validação.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {benefitCards.map((card) => (
            <div
              className="rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-4"
              key={card.title}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[rgba(212,164,55,0.18)] bg-[rgba(212,164,55,0.08)]">
                <img alt="" aria-hidden className="h-5 w-5" loading="lazy" src={card.icon} />
              </div>
              <h3
                className="mt-4 text-xl font-bold uppercase leading-[0.95]"
                style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
              >
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button href="/ur-market" variant="secondary">Ver UR Market</Button>
        </div>
      </S>

      {/* ── 10. REGULAMENTO E APOIO ── */}
      <S id="regulamento" style={{ background: "#0A0A0B" }}>
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Regra e confiança</p>
            <h2
              className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
            >
              Regras claras para<br />jogar com segurança.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
              O regulamento orienta conduta, critérios, pontuação, participação e Fair Play. Isso protege atletas, equipes e a experiência da temporada.
            </p>
            <div className="mt-5">
              <Button href="/regulamento" variant="secondary">Ver regulamento</Button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {regulationCards.map((card) => (
              <div
                className="rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-4"
                key={card.title}
              >
                <h3
                  className="text-xl font-bold uppercase leading-[0.95]"
                  style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
                >
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </S>

      {/* ── 11. CTA FINAL ── */}
      <CTASectionPremium />
    </main>
  );
}

import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { CTASectionPremium } from "@/components/editorial/cta-section-premium";
import { Button } from "@/components/ui/button";
import { homeImageRoles } from "@/lib/content/site-images";
import { EditorialImage } from "@/components/editorial/editorial-image";
import {
  ProductArtCard,
  TerritoryArtCard,
  RankingBroadcastPanel,
  RewardArtCard,
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
      className={`scroll-mt-24 overflow-hidden border-t border-white/10 px-5 py-10 md:py-16 lg:px-8 lg:py-20 ${className}`}
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
    description: "Veja como UR Play, modalidade, polo, ranking e eventos se conectam antes de escolher seu caminho.",
  },
  {
    title: "Escolha onde começar",
    description: "Você pode iniciar por cadastro, UR Play, Dupla ou Quarteto, sempre respeitando seu momento.",
  },
  {
    title: "Jogue e acompanhe",
    description: "Cada presença ajuda a formar histórico, entender nível e abrir próximos passos dentro da temporada.",
  },
] as const;

const modalityDetails = {
  dupla: {
    meta: "2 atletas",
    description: "Formato mais direto para começar, jogar com parceria fixa e entrar no radar do UR.",
  },
  quarteto: {
    meta: "4 atletas",
    description: "Formato coletivo para criar identidade, representar escudo e evoluir como formação.",
  },
} as const;

const poleDetails = {
  bh: {
    subtitle: "Capital como ponto de entrada para atletas, equipes e primeiras ativações.",
    href: "/quadras-parceiras#polos",
  },
  betim: {
    subtitle: "Território em formação para jogos, comunidade local e evolução por presença.",
    href: "/quadras-parceiras#polos",
  },
  contagem: {
    subtitle: "Polo inicial para fortalecer calendário, quadras parceiras e novas formações.",
    href: "/quadras-parceiras#polos",
  },
} as const;

const nextStepCards = [
  {
    title: "Primeiro passo",
    description: "Conheça o UR Play e entenda como entrar sem precisar chegar pronto.",
    href: "/ur-play",
    cta: "Conhecer UR Play",
  },
  {
    title: "Cadastro",
    description: "Registre seu perfil para entrar no radar certo: atleta, equipe, quadra ou parceiro.",
    href: "/cadastro",
    cta: "Fazer cadastro",
  },
  {
    title: "Equipes",
    description: "Veja como escudos, duplas e quartetos criam identidade dentro da temporada.",
    href: "/equipes",
    cta: "Ver equipes",
  },
  {
    title: "Temporada",
    description: "Entenda as etapas maiores depois do primeiro contato com o ecossistema.",
    href: "/temporada",
    cta: "Ver temporada",
  },
] as const;

const evolutionCards = [
  {
    title: "Ranking",
    description: "Organiza níveis, presença e evolução para criar disputas mais justas.",
    href: "/ranking",
    cta: "Entender ranking",
  },
  {
    title: "Eventos",
    description: "Transformam presença em calendário: Play, Sprint, Series e Legends.",
    href: "/eventos",
    cta: "Ver eventos",
  },
  {
    title: "Mídia",
    description: "Conta histórias de atletas, equipes, bastidores e evolução ao longo do ciclo.",
    href: "/midia",
    cta: "Conhecer mídia",
  },
] as const;

const supportCards = [
  {
    title: "Regulamento",
    description: "Regras, critérios e limites para participar com clareza.",
    href: "/regulamento",
    cta: "Ler regras",
  },
  {
    title: "Quadras parceiras",
    description: "Entenda como uma quadra pode se tornar polo ativo do UR.",
    href: "/quadras-parceiras",
    cta: "Ver quadras",
  },
  {
    title: "CT UR",
    description: "Apoio de desenvolvimento para evoluir técnica, postura e mentalidade.",
    href: "/ct-ur",
    cta: "Conhecer CT",
  },
] as const;

export default function Home() {
  return (
    <main style={{ background: "#0A0A0B", color: "#F4F0E6" }}>

      {/* ── 1. HERO TEMPORADA 1 ── */}
      <section className="relative isolate overflow-hidden" style={{ background: "#0A0A0B" }}>
        <div className="relative min-h-[520px] py-14 md:min-h-[640px] md:py-20">
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
                <p
                  className="mt-4 max-w-xl text-sm leading-6"
                  style={{ color: "rgba(244,240,230,0.62)", fontFamily: "'Manrope', system-ui, sans-serif" }}
                >
                  Primeiro entenda o caminho. Depois escolha se o seu ponto de partida é UR Play, cadastro, Dupla, Quarteto ou um polo perto de você.
                </p>
                {/* Pole shields */}
                <div className="mt-7 flex items-center gap-4 sm:gap-5">
                  {season1.poles.map((p) => (
                    <div key={p.id} className="flex flex-col items-center gap-1.5">
                      <img alt={p.name} className="h-10 w-auto opacity-80" loading="lazy" src={p.shieldPath} />
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>{p.short}</span>
                    </div>
                  ))}
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
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Como funciona</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Primeiro entenda.<br />Depois escolha.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            O UR não começa cobrando performance. Ele organiza o caminho para você saber onde entrar, como jogar e como acompanhar sua evolução.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {howItWorksSteps.map((step, index) => (
            <div
              className="relative overflow-hidden rounded-lg border border-[rgba(212,164,55,0.14)] bg-[#14141A] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
              key={step.title}
            >
              <span
                className="text-xs font-bold uppercase tracking-[0.18em]"
                style={{ color: "#D4A437", fontFamily: "'JetBrains Mono', monospace" }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className="mt-5 text-2xl font-bold uppercase leading-[0.9]"
                style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
              >
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </S>

      {/* ── 3. MODALIDADES ── */}
      <S id="modalidades" style={{ background: "#0D0D12" }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Modalidades</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Escolha entre<br />Dupla e Quarteto.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            A primeira decisão é simples: jogar com uma parceria ou construir uma formação maior. O restante da jornada vem depois.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {season1.modalities.map((m) => {
            const detail = modalityDetails[m.id];

            return (
              <Link
                className="group relative overflow-hidden rounded-lg border border-[rgba(212,164,55,0.16)] bg-[#14141A] p-6 transition-all hover:border-[#D4A437] hover:bg-[rgba(212,164,55,0.04)]"
                href="/cadastro#atleta"
                key={m.id}
              >
                <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)", backgroundSize: "cover" }} />
                <div className="relative z-10 flex items-start gap-5">
                  <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg border border-[rgba(212,164,55,0.18)] bg-black/25">
                    <img alt={m.name} className="h-10 w-10 opacity-90" loading="lazy" src={m.symbolSolid} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                      {detail.meta}
                    </p>
                    <h3
                      className="mt-2 text-3xl font-bold uppercase leading-[0.88]"
                      style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
                    >
                      {m.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                      {detail.description}
                    </p>
                    <span
                      className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}
                    >
                      Ver caminho
                      <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </S>

      {/* ── 4. POLOS ── */}
      <S id="polos" style={{ background: "#0A0A0B" }}>
        <span aria-hidden className="block scroll-mt-24" id="territorios" />
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Polos iniciais</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Conheça onde<br />a temporada ganha chão.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            BH, Betim e Contagem são os polos iniciais. Cada território ajuda a organizar presença, quadras, equipes e comunidade local.
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

      {/* ── 5. PRIMEIRO PASSO ── */}
      <S id="primeiro-passo" style={{ background: "#0D0D12" }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Próximos passos</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Agora escolha<br />por onde entrar.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Depois de entender o caminho, o cadastro e o UR Play viram portas de entrada claras para começar no seu ritmo.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nextStepCards.map((card) => (
            <Link
              className="group rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-5 transition-all hover:border-[#D4A437] hover:bg-[rgba(212,164,55,0.04)]"
              href={card.href}
              key={card.title}
            >
              <h3
                className="text-2xl font-bold uppercase leading-[0.9]"
                style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
              >
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                {card.description}
              </p>
              <span
                className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}
              >
                {card.cta}
                <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </S>

      {/* ── 6. EVOLUÇÃO ── */}
      <S id="evolucao" style={{ background: "#0A0A0B" }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Evolução</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Do primeiro jogo<br />ao histórico.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            A evolução aparece em etapas: jogar, ser observado, entrar no ranking, disputar eventos e ganhar narrativa na mídia.
          </p>
        </div>
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-5 px-5 sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {season1.ladder.map((product) => (
            <div className="snap-start shrink-0 w-[72vw] sm:w-auto" key={product.id}>
              <ProductArtCard product={product} />
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <div className="grid gap-4">
            {evolutionCards.map((card) => (
              <Link
                className="group rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-5 transition-all hover:border-[#D4A437] hover:bg-[rgba(212,164,55,0.04)]"
                href={card.href}
                key={card.title}
              >
                <h3
                  className="text-2xl font-bold uppercase leading-[0.9]"
                  style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
                >
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                  {card.description}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}
                >
                  {card.cta}
                  <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
          <RankingBroadcastPanel rows={season1.mockRankings} />
        </div>
      </S>

      {/* ── 7. BENEFÍCIOS ── */}
      <S id="recompensas" style={{ background: "#0D0D12" }}>
        <span aria-hidden className="block scroll-mt-24" id="premiacoes" />
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>UR Coins · UR Market</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Benefícios são consequência<br />da jornada.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            UR Coins, recompensas e benefícios fazem parte do sistema de engajamento, mas sempre conectados à presença, mérito, evolução e regras oficiais.
          </p>
          <p className="mt-3 max-w-3xl text-xs font-bold uppercase leading-5 tracking-[0.12em]" style={{ color: "rgba(212,164,55,0.72)", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Benefícios, produtos e recompensas dependem de validação, disponibilidade, regras oficiais e parceiros ativos.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <RewardArtCard
            icon="/season-1/symbols/ur-coins-line.svg"
            title="UR Coins"
            description="Moedas que conectam presença e desempenho a benefícios aprovados."
          />
          <RewardArtCard
            icon="/season-1/symbols/ur-play-line.svg"
            title="Produtos e serviços"
            description="Itens aprovados por parceiros confirmados dentro da temporada."
          />
          <RewardArtCard
            icon="/season-1/symbols/ur-series-line.svg"
            title="Patrocinadores"
            description="Parceiros podem conectar produtos, serviços e ativações à jornada esportiva aprovada."
          />
        </div>
        <div className="mt-6 text-center">
          <Button href="/ur-market" variant="secondary">Ver UR Market</Button>
        </div>
      </S>

      {/* ── 8. APOIO ── */}
      <S id="apoio" style={{ background: "#0A0A0B" }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Apoio</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            O que ajuda<br />a jogar com clareza.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Regras, quadras e desenvolvimento completam a experiência para quem está começando ou quer evoluir com direção.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {supportCards.map((card) => (
            <Link
              className="group rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-5 transition-all hover:border-[#D4A437] hover:bg-[rgba(212,164,55,0.04)]"
              href={card.href}
              key={card.title}
            >
              <h3
                className="text-2xl font-bold uppercase leading-[0.9]"
                style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
              >
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                {card.description}
              </p>
              <span
                className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
                style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}
              >
                {card.cta}
                <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </S>

      {/* ── 11. CTA FINAL ── */}
      <CTASectionPremium />
    </main>
  );
}

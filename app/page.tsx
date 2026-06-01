import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { homeImageRoles } from "@/lib/content/site-images";
import { season1 } from "@/lib/content/season1";

const displayFont = "'Oswald', sans-serif";
const bodyFont = "'Manrope', system-ui, sans-serif";
const monoFont = "'JetBrains Mono', monospace";

// ─── Micro-layout helpers ─────────────────────────────────────────────────────

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
      className={`scroll-mt-0 overflow-hidden border-t border-white/10 px-5 py-10 md:py-14 lg:px-8 lg:py-16 ${className}`}
      id={id}
      style={style}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <p
        className="text-[11px] font-bold uppercase tracking-[0.2em]"
        style={{ color: "#D4A437", fontFamily: bodyFont }}
      >
        {eyebrow}
      </p>
      <h2
        className="mt-2 text-3xl font-bold uppercase leading-[0.88] md:text-4xl lg:text-5xl"
        style={{ color: "#F4F0E6", fontFamily: displayFont, letterSpacing: "0.02em" }}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className="mt-4 max-w-2xl text-sm leading-6 md:text-base"
          style={{ color: "#8A8A93", fontFamily: bodyFont }}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function InfoCard({
  title,
  description,
  meta,
  href,
  cta,
  id,
}: {
  title: string;
  description: string;
  meta?: string;
  href?: string;
  cta?: string;
  id?: string;
}) {
  const cardClass =
    "group rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-5 transition-all duration-200 hover:border-[rgba(212,164,55,0.4)] hover:bg-[rgba(212,164,55,0.04)]";

  const inner = (
    <>
      {meta ? (
        <p
          className="text-[10px] font-bold uppercase leading-4 tracking-[0.16em]"
          style={{ color: "#D4A437", fontFamily: bodyFont }}
        >
          {meta}
        </p>
      ) : null}
      <h3
        className={`${meta ? "mt-2" : ""} text-xl font-bold uppercase leading-[0.95]`}
        style={{ color: "#F4F0E6", fontFamily: displayFont, letterSpacing: "0.04em" }}
      >
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6" style={{ color: "#8A8A93", fontFamily: bodyFont }}>
        {description}
      </p>
      {cta ? (
        <span
          className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "#D4A437", fontFamily: bodyFont }}
        >
          {cta}
          <ArrowRight
            aria-hidden
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link className={`${cardClass} cursor-pointer block`} href={href} id={id}>
        {inner}
      </Link>
    );
  }
  return (
    <div className={cardClass} id={id}>
      {inner}
    </div>
  );
}

function ImpactLine({ children }: { children: ReactNode }) {
  return (
    <div
      className="mt-6 rounded-lg border border-[rgba(212,164,55,0.22)] bg-[rgba(212,164,55,0.07)] px-5 py-4 text-sm font-bold leading-6 tracking-[0.04em]"
      style={{ color: "#D4A437", fontFamily: bodyFont }}
    >
      {children}
    </div>
  );
}

function BridgeLine({ children }: { children: ReactNode }) {
  return (
    <div
      className="mt-8 border-l-[3px] border-[#D4A437] pl-5 text-xl font-bold uppercase leading-[1.1]"
      style={{ color: "#F4F0E6", fontFamily: displayFont, letterSpacing: "0.03em" }}
    >
      {children}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const heroStats = [
  { label: "3 Polos", value: "BH · Betim · Contagem" },
  { label: "2 Modalidades", value: "Dupla · Quarteto" },
  { label: "Caminho único", value: "UR Play" },
] as const;

const problemCards = [
  {
    title: "Sem ranking público",
    description: "Atletas competem sem nenhum histórico visível para a comunidade.",
  },
  {
    title: "Sem histórico",
    description: "Cada torneio começa do zero — como se os anteriores não tivessem acontecido.",
  },
  {
    title: "Sem calendário contínuo",
    description: "Jogos avulsos sem conexão, sem progressão, sem temporada.",
  },
  {
    title: "Sem visibilidade",
    description: "Boas atuações acontecem na areia e desaparecem sem registro.",
  },
  {
    title: "Sem critério por nível",
    description: "Iniciantes e atletas experientes no mesmo formato, sem separação.",
  },
  {
    title: "Sem métricas para parceiros",
    description: "Marcas e patrocinadores não veem dados reais nem comunidade estruturada.",
  },
] as const;

const journeyDescriptions: Record<string, string> = {
  "ur-play":
    "Entrada oficial. Cadastro, jogos semanais, observação, nivelamento e primeiro histórico.",
  "ur-sprint":
    "Primeira disputa oficial dos polos. Pontos no ranking, visibilidade e construção de trajetória.",
  "ur-series":
    "Classificados dos polos se encontram em uma disputa entre comunidades, com equipes e duplas disputando por nível.",
  "ur-legends":
    "Evento principal da temporada. Atletas de destaque representam seus polos no maior espetáculo da jornada.",
};

const segmentCards = [
  {
    meta: "Atleta individual",
    title: "Entre pelo UR Play",
    description:
      "Comece sozinho, jogue no seu nível, seja observado e encontre seu caminho na temporada.",
    href: "/ur-play",
    cta: "Começar",
  },
  {
    meta: "Dupla",
    title: "Dois atletas. Um caminho.",
    description:
      "Crie química, ritmo, ranking de formação e rivalidade saudável com seu parceiro.",
    href: "/cadastro#atleta",
    cta: "Entrar com dupla",
  },
  {
    meta: "Quarteto / Equipe",
    title: "Identidade. Rivalidade.",
    description:
      "Construa campanha, identidade, comunicação e trajetória competitiva para sua equipe.",
    href: "/cadastro#equipe",
    cta: "Montar equipe",
  },
] as const;

const poleSubtitles: Record<string, string> = {
  bh: "Polo central para entrada, jogos e evolução da comunidade Ultimate Rivals.",
  betim: "Polo em expansão para começar, ganhar ritmo e representar a região.",
  contagem: "Polo estratégico para equipes, eventos e presença competitiva.",
};

const rankingCategories = [
  {
    id: "ranking-atletas",
    title: "Atletas",
    description: "Trajetória individual: presença, evolução e pontuação por evento.",
  },
  {
    id: "ranking-equipes",
    title: "Equipes",
    description: "Campanha do escudo: consistência, resultados e história do time.",
  },
  {
    id: "ranking-duplas",
    title: "Duplas",
    description: "Formação, ritmo e resultado em dupla ao longo da temporada.",
  },
  {
    id: "ranking-polos",
    title: "Polos",
    description:
      "Força coletiva da região. Único ranking que recebe o multiplicador especial do UR Legends.",
  },
  {
    id: "ranking-funcao",
    title: "Por Função",
    description: "Destaque por papel: levantador, atacante, bloqueador, libero.",
  },
  {
    id: "ranking-evolucao",
    title: "Evolução",
    description: "Progresso do atleta comparado ao início da temporada.",
  },
  {
    id: "ranking-fairplay",
    title: "Fair Play",
    description: "Conduta, respeito e espírito esportivo dentro do Ultimate Rivals.",
  },
] as const;

const marketCards = [
  {
    meta: "Produtos oficiais",
    title: "Loja UR",
    description: "Produtos da marca Ultimate Rivals para atletas, duplas e equipes.",
  },
  {
    meta: "Serviços esportivos",
    title: "Para atletas",
    description: "Serviços de parceiros integrados ao ecossistema da temporada.",
  },
  {
    meta: "Parceiros",
    title: "Marcas parceiras",
    description: "Empresas e marcas que apoiam e fazem parte da temporada.",
  },
  {
    meta: "Experiências",
    title: "Vivências UR",
    description: "Experiências exclusivas dentro do ecossistema Ultimate Rivals.",
  },
  {
    meta: "Para equipes",
    title: "Benefícios de equipe",
    description: "Acesso especial para equipes ativas e classificadas na temporada.",
  },
  {
    meta: "Em breve",
    title: "Para polos",
    description:
      "Benefícios conectados à participação e ao desempenho do polo na temporada.",
  },
] as const;

const midiaCards = [
  {
    meta: "Ao vivo",
    title: "Transmissões",
    description: "Cobertura ao vivo dos eventos da temporada com narração e análise.",
  },
  {
    meta: "Highlights",
    title: "Melhores jogadas",
    description: "Os pontos mais importantes e decisivos de cada evento.",
  },
  {
    meta: "Conteúdo",
    title: "Documentários",
    description: "Histórias, bastidores e trajetórias de atletas e equipes.",
  },
  {
    meta: "Quadros",
    title: "Quadros esportivos",
    description: "Séries fixas da temporada com identidade editorial própria.",
  },
  {
    meta: "Bastidores",
    title: "Bastidores",
    description: "O que acontece fora da quadra durante a temporada.",
  },
  {
    meta: "Registro",
    title: "Partidas registradas",
    description: "Arquivo de jogos, scores e momentos da temporada para consulta.",
  },
] as const;

const hunterCards = [
  {
    title: "Mentalidade",
    description: "Disciplina, constância e fome de evolução contínua dentro e fora da quadra.",
  },
  {
    title: "Desenvolvimento",
    description: "Treino, feedback e progressão técnica com critério e direção.",
  },
  {
    title: "Leitura de jogo",
    description: "Análise tática, visão de quadra e consciência esportiva em tempo real.",
  },
  {
    title: "Evolução contínua",
    description: "Cada ciclo da temporada como oportunidade de subir de nível.",
  },
  {
    title: "Equipes Hunters",
    description:
      "Equipes que adotam a metodologia constroem trajetórias mais sólidas na temporada — na quadra e no ranking.",
  },
  {
    title: "Aplicação na temporada",
    description:
      "A metodologia guia as avaliações no UR Play, os feedbacks do CT UR e o comportamento esperado em todas as etapas da jornada.",
  },
] as const;

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <main style={{ background: "#0A0A0B", color: "#F4F0E6" }}>

      {/* ── Seção 1 — Hero ─────────────────────────────────────────────────── */}
      <section
        className="relative isolate overflow-hidden"
        id="hero"
        style={{ background: "#0A0A0B" }}
      >
        <div className="relative min-h-[540px] py-12 md:min-h-[660px] md:py-16">
          <EditorialImage
            className="absolute inset-0 -z-20 rounded-none border-0 opacity-30"
            image={homeImageRoles.hero}
            label="UR Temporada 1 — Polos em Disputa"
            objectPosition="center 40%"
            priority
            sizes="100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]"
            style={{
              backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)",
              backgroundSize: "cover",
            }}
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(100deg, rgba(10,10,11,0.97) 0%, rgba(10,10,11,0.88) 48%, rgba(10,10,11,0.52) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40"
            style={{ background: "linear-gradient(180deg, transparent, #0A0A0B)" }}
          />

          <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">

              {/* Left — main copy */}
              <div className="max-w-3xl">
                <span
                  className="inline-flex items-center gap-2 rounded-sm border border-[rgba(212,164,55,0.35)] bg-[rgba(212,164,55,0.08)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: "#D4A437", fontFamily: bodyFont }}
                >
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-[#D4A437]"
                  />
                  Temporada 1 Ultimate Rivals
                </span>

                <h1
                  className="mt-5 text-[clamp(3.4rem,14vw,7.8rem)] font-black uppercase leading-[0.80] tracking-[0.01em]"
                  style={{ color: "#F4F0E6", fontFamily: displayFont }}
                >
                  Polos em
                  <br />
                  <span style={{ color: "#D4A437" }}>disputa.</span>
                </h1>

                <p
                  className="mt-6 max-w-2xl text-base leading-7 md:text-lg"
                  style={{ color: "rgba(244,240,230,0.85)", fontFamily: bodyFont }}
                >
                  Entre pelo UR Play, jogue no seu nível, construa ranking, represente seu polo
                  e viva uma temporada feita para evoluir atletas, equipes e comunidades.
                </p>
                <p
                  className="mt-3 max-w-xl text-sm leading-6"
                  style={{ color: "rgba(244,240,230,0.55)", fontFamily: bodyFont }}
                >
                  Você não precisa ter equipe para começar. No Ultimate Rivals, atletas
                  individuais, duplas e equipes entram pela mesma porta: o UR Play.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button href="/ur-play">
                    Começar pelo UR Play
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </Button>
                  <Button href="#jornada" variant="secondary">
                    Ver como funciona
                  </Button>
                </div>

                <div className="mt-7 grid gap-2 rounded-lg border border-[rgba(212,164,55,0.18)] bg-[#14141A]/80 p-2 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div
                      className="rounded border border-white/10 bg-white/[0.03] px-3 py-3"
                      key={stat.label}
                    >
                      <span
                        className="block text-xs font-bold uppercase tracking-[0.14em]"
                        style={{ color: "#D4A437", fontFamily: bodyFont }}
                      >
                        {stat.label}
                      </span>
                      <span
                        className="mt-1 block text-xs leading-5"
                        style={{ color: "#8A8A93", fontFamily: bodyFont }}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — journey panel (desktop only) */}
              <div
                className="hidden overflow-hidden rounded-lg lg:block"
                style={{
                  background: "#14141A",
                  border: "1px solid rgba(212,164,55,0.20)",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.55)",
                }}
              >
                <div className="border-b border-white/10 px-4 py-3">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.2em]"
                    style={{ color: "#D4A437", fontFamily: bodyFont }}
                  >
                    Jornada oficial
                  </p>
                </div>
                <div className="divide-y divide-white/[0.06]">
                  {season1.ladder.map((step, index) => (
                    <div
                      className="flex items-center gap-3 px-4 py-3"
                      key={step.id}
                    >
                      <span
                        className="grid h-8 w-8 shrink-0 place-items-center rounded border border-[rgba(212,164,55,0.18)] bg-[rgba(212,164,55,0.07)] text-xs font-bold"
                        style={{ color: "#D4A437", fontFamily: monoFont }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <span
                          className="block font-bold uppercase tracking-[0.08em] text-sm"
                          style={{ color: "#F4F0E6", fontFamily: displayFont }}
                        >
                          {step.name}
                        </span>
                        {step.id === "ur-legends" && (
                          <span
                            className="mt-0.5 block text-[9px] font-bold uppercase tracking-[0.12em]"
                            style={{ color: "#D4A437", fontFamily: bodyFont }}
                          >
                            Evento principal
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 px-4 py-3">
                  <p
                    className="text-[9px] leading-4 text-white/35"
                    style={{ fontFamily: bodyFont }}
                  >
                    Dados ilustrativos · Modelo visual
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Seção 2 — O Problema ────────────────────────────────────────────── */}
      <S id="problema" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Por que o Ultimate Rivals existe"
          title={
            <>
              O esporte amador
              <br />
              merece mais.
            </>
          }
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((card) => (
            <InfoCard
              description={card.description}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
        <BridgeLine>
          O Ultimate Rivals transforma jogos soltos em uma jornada contínua.
        </BridgeLine>
      </S>

      {/* ── Seção 3 — A Jornada ─────────────────────────────────────────────── */}
      <S id="jornada" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="Como funciona"
          title={
            <>
              Do primeiro jogo
              <br />
              ao espetáculo.
            </>
          }
          subtitle="Você começa jogando. A temporada transforma sua participação em trajetória."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {season1.ladder.map((step, index) => {
            const isLegends = step.id === "ur-legends";
            return (
              <div
                className={`rounded-lg border p-5 transition-colors ${
                  isLegends
                    ? "border-[rgba(212,164,55,0.35)] bg-[rgba(212,164,55,0.06)]"
                    : "border-[rgba(212,164,55,0.12)] bg-[#14141A]"
                }`}
                key={step.id}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded border border-[rgba(212,164,55,0.18)] bg-[rgba(212,164,55,0.08)] text-xs font-bold"
                    style={{ color: "#D4A437", fontFamily: monoFont }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {isLegends && (
                    <span
                      className="shrink-0 rounded-sm border border-[rgba(212,164,55,0.4)] bg-[rgba(212,164,55,0.10)] px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.14em]"
                      style={{ color: "#D4A437", fontFamily: bodyFont }}
                    >
                      Principal
                    </span>
                  )}
                </div>
                <h3
                  className="mt-4 text-2xl font-bold uppercase leading-[0.92]"
                  style={{ color: "#F4F0E6", fontFamily: displayFont }}
                >
                  {step.name}
                </h3>
                <p
                  className="mt-2 text-sm leading-6"
                  style={{ color: "#8A8A93", fontFamily: bodyFont }}
                >
                  {journeyDescriptions[step.id] ?? step.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-6">
          <Button href="/temporada" variant="secondary">
            Ver a Temporada
          </Button>
        </div>
      </S>

      {/* ── Seção 4 — Atleta, Dupla ou Equipe ──────────────────────────────── */}
      <S id="como-entrar" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Formas de participar"
          title={
            <>
              Você não precisa ter
              <br />
              equipe para começar.
            </>
          }
          subtitle="O Ultimate Rivals abre caminho para atletas individuais, duplas e equipes em diferentes momentos de evolução."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {segmentCards.map((card) => (
            <InfoCard
              cta={card.cta}
              description={card.description}
              href={card.href}
              key={card.title}
              meta={card.meta}
              title={card.title}
            />
          ))}
        </div>
        <div className="mt-6">
          <Button href="/ur-play">
            Começar pelo UR Play
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
        </div>
      </S>

      {/* ── Seção 5 — Os Polos ──────────────────────────────────────────────── */}
      <S id="polos" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="Onde acontece"
          title={
            <>
              Defenda seu polo.
              <br />
              Construa sua história.
            </>
          }
          subtitle="Belo Horizonte, Betim e Contagem têm o mesmo peso. O que muda é a força que cada comunidade constrói dentro da quadra."
        />
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 -mx-5 px-5 sm:mx-0 sm:px-0 md:grid md:grid-cols-3 md:overflow-visible">
          {season1.poles.map((pole) => (
            <Link
              className="group w-[82vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-lg border border-[rgba(212,164,55,0.16)] bg-[#14141A] transition-all duration-200 hover:border-[rgba(212,164,55,0.5)] md:w-auto md:max-w-none"
              href="/quadras-parceiras#polos"
              key={pole.id}
            >
              <div className="relative min-h-[140px] border-b border-white/10 bg-[linear-gradient(135deg,rgba(212,164,55,0.14),rgba(255,255,255,0.03))]">
                <div
                  className="absolute inset-0 opacity-[0.14]"
                  style={{
                    backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)",
                    backgroundSize: "cover",
                  }}
                />
                <div className="relative z-10 flex min-h-[140px] items-center justify-center">
                  <div
                    className="grid h-20 w-20 place-items-center rounded-full border border-[rgba(212,164,55,0.32)] bg-black/35 text-2xl font-bold text-[#D4A437] shadow-[0_0_32px_rgba(212,164,55,0.14)]"
                    style={{ fontFamily: displayFont }}
                  >
                    {pole.short}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.16em]"
                  style={{ color: "#D4A437", fontFamily: bodyFont }}
                >
                  {pole.status}
                </p>
                <h3
                  className="mt-2 text-2xl font-bold uppercase leading-[0.90]"
                  style={{ color: "#F4F0E6", fontFamily: displayFont }}
                >
                  {pole.name}
                </h3>
                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: "#8A8A93", fontFamily: bodyFont }}
                >
                  {poleSubtitles[pole.id]}
                </p>
                <span
                  className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em]"
                  style={{ color: "#D4A437", fontFamily: bodyFont }}
                >
                  Ver polo
                  <ArrowRight
                    aria-hidden
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
        <BridgeLine>
          O polo não é só onde você joga. É a comunidade que você ajuda a construir.
        </BridgeLine>
      </S>

      {/* ── Seção 6 — Ranking ───────────────────────────────────────────────── */}
      <S id="ranking" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Sistema de mérito"
          title={
            <>
              Ranking que gera
              <br />
              histórico e visibilidade.
            </>
          }
          subtitle="No Ultimate Rivals, ranking não é só tabela. É critério, narrativa, evolução e reconhecimento."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rankingCategories.map((cat) => (
            <InfoCard
              description={cat.description}
              id={cat.id}
              key={cat.id}
              title={cat.title}
            />
          ))}
        </div>
        <ImpactLine>
          A pontuação especial do UR Legends vale apenas para o Ranking dos Polos.
          Ranking dos Atletas, Equipes e Duplas seguem regras próprias, sem multiplicador.
        </ImpactLine>
        <p
          className="mt-3 text-[11px] text-white/35"
          style={{ fontFamily: bodyFont }}
        >
          Dados ilustrativos · Modelo visual · Ranking real disponível após a primeira temporada validada.
        </p>
        <div className="mt-5">
          <Button href="/ranking" variant="secondary">
            Ver ranking
          </Button>
        </div>
      </S>

      {/* ── Seção 7 — UR Market Preview ─────────────────────────────────────── */}
      <S id="ur-market" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="UR Market"
          title={
            <>
              A vitrine
              <br />
              da temporada.
            </>
          }
          subtitle="Produtos, serviços, experiências e benefícios possíveis para atletas, equipes e polos."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {marketCards.map((card) => (
            <InfoCard
              description={card.description}
              key={card.title}
              meta={card.meta}
              title={card.title}
            />
          ))}
        </div>
        <ImpactLine>
          Benefícios dependem de regras oficiais, parceiros ativos e disponibilidade.
          O UR Market é uma vitrine de possibilidades, não uma promessa automática.
        </ImpactLine>
        <div className="mt-5">
          <Button href="/ur-market" variant="secondary">
            Conhecer UR Market
          </Button>
        </div>
      </S>

      {/* ── Seção 8 — Mídia Preview ──────────────────────────────────────────── */}
      <S id="midia" style={{ background: "#0D0D12" }}>
        <SectionHeading
          eyebrow="Ultimate Rivals Mídia"
          title={
            <>
              A temporada também
              <br />
              precisa ser assistida.
            </>
          }
          subtitle="A mídia oficial transforma jogos, rankings, bastidores, histórias e rivalidades em conteúdo."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {midiaCards.map((card) => (
            <InfoCard
              description={card.description}
              key={card.title}
              meta={card.meta}
              title={card.title}
            />
          ))}
        </div>
        <BridgeLine>
          O atleta não quer apenas jogar. Ele quer viver, aparecer, evoluir e ser lembrado.
        </BridgeLine>
        <div className="mt-6">
          <Button href="/midia" variant="secondary">
            Ver mídia
          </Button>
        </div>
      </S>

      {/* ── Seção 9 — Metodologia Hunter ────────────────────────────────────── */}
      <S id="hunter" style={{ background: "#0A0A0B" }}>
        <SectionHeading
          eyebrow="Metodologia"
          title={
            <>
              Hunter não é olheiro.
              <br />
              É mentalidade.
            </>
          }
          subtitle="Mentalidade, desenvolvimento e evolução para atletas que querem competir melhor."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {hunterCards.map((card) => (
            <InfoCard
              description={card.description}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
        <ImpactLine>
          A Metodologia Hunter não promete carreira profissional. Ela cria base para atletas
          evoluírem com direção, critério e mentalidade.
        </ImpactLine>
        <div className="mt-5">
          <Button href="/ur-play" variant="secondary">
            Conhecer metodologia
          </Button>
        </div>
      </S>

      {/* ── Seção 10 — CTA Final ─────────────────────────────────────────────── */}
      <section
        className="overflow-hidden border-t border-[rgba(212,164,55,0.18)] px-5 py-16 md:py-24 lg:px-8"
        id="comecar"
        style={{
          background:
            "linear-gradient(135deg, #0A0A0B 0%, #150E00 40%, #1A1200 60%, #0A0A0B 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p
            className="text-[10px] font-bold uppercase tracking-[0.24em]"
            style={{ color: "#D4A437", fontFamily: bodyFont }}
          >
            Temporada 1 · Ultimate Rivals
          </p>
          <h2
            className="mt-4 text-4xl font-black uppercase leading-[0.86] md:text-5xl lg:text-6xl"
            style={{ color: "#F4F0E6", fontFamily: displayFont, letterSpacing: "0.01em" }}
          >
            Sua temporada começa
            <br />
            no primeiro jogo.
          </h2>
          <p
            className="mt-5 text-base leading-7"
            style={{ color: "rgba(244,240,230,0.68)", fontFamily: bodyFont }}
          >
            Entre pelo UR Play, jogue no seu nível, construa ranking, represente seu polo
            e faça parte da Temporada 1.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/ur-play">
              Começar pelo UR Play
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Button>
            <Button href="/cadastro" variant="secondary">
              Fazer cadastro
            </Button>
          </div>
          <p
            className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em]"
            style={{ color: "#8A8A93", fontFamily: bodyFont }}
          >
            Belo Horizonte · Betim · Contagem
          </p>
        </div>
      </section>

    </main>
  );
}

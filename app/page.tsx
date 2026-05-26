import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { CTASectionPremium } from "@/components/editorial/cta-section-premium";
import { Button } from "@/components/ui/button";
import { entryPaths } from "@/lib/content/home-editorial";
import { homeImageRoles } from "@/lib/content/site-images";
import { EditorialImage } from "@/components/editorial/editorial-image";
import {
  ProductArtCard,
  TerritoryArtCard,
  RankingBroadcastPanel,
  URBracketPreview,
  LegendsArtPanel,
  AthleteArtCard,
  TeamFormationArtCard,
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
      className={`scroll-mt-24 overflow-hidden border-t border-white/10 px-5 py-12 md:py-16 lg:px-8 lg:py-20 ${className}`}
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

export default function Home() {
  return (
    <main style={{ background: "#0A0A0B", color: "#F4F0E6" }}>

      {/* ── 1. HERO TEMPORADA 1 ── */}
      <section className="relative isolate overflow-hidden" style={{ background: "#0A0A0B" }}>
        <div className="relative min-h-[520px] md:min-h-[640px] py-16 md:py-20">
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
                  className="text-[clamp(3rem,12vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[0.01em]"
                  style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6" }}
                >
                  QUEM MANDA<br />
                  <span style={{ color: "#D4A437" }}>NA REGIÃO?</span>
                </h1>
                <p
                  className="mt-5 max-w-lg text-base md:text-lg leading-7"
                  style={{ color: "rgba(244,240,230,0.75)", fontFamily: "'Manrope', system-ui, sans-serif" }}
                >
                  BH, Betim e Contagem entram na primeira temporada do Ultimate Rivals. Atletas começam no UR Play e os melhores chegam ao UR Legends.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/cadastro#atleta">
                    Entrar na Temporada
                    <ArrowRight aria-hidden className="h-4 w-4" />
                  </Button>
                  <Button href="/temporada" variant="secondary">
                    Ver como funciona
                  </Button>
                </div>
                {/* Pole shields */}
                <div className="mt-8 flex items-center gap-5">
                  {season1.poles.map((p) => (
                    <div key={p.id} className="flex flex-col items-center gap-1.5">
                      <img alt={p.name} className="h-10 w-auto opacity-80" loading="lazy" src={p.shieldPath} />
                      <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>{p.short}</span>
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

      {/* ── 2. ESCADA OFICIAL — 4 PRODUTOS ── */}
      <S id="ladder" className="border-t border-[rgba(212,164,55,0.12)]" style={{ background: "#0A0A0B" }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Escada oficial</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            UR Play → Sprint → Series → Legends
          </h2>
          <p className="mt-3 text-sm" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Cada etapa tem critério. Cada atleta evolui no seu ritmo.
          </p>
        </div>
        {/* Mobile: horizontal scroll snap; Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-5 px-5 sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {season1.ladder.map((product) => (
            <div className="snap-start shrink-0 w-[72vw] sm:w-auto" key={product.id}>
              <ProductArtCard product={product} />
            </div>
          ))}
        </div>
      </S>

      {/* ── 3. RANKING BROADCAST ── */}
      <S id="ranking" style={{ background: "#0D0D12" }}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)]">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Ranking em formação</p>
            <h2
              className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
              style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
            >
              Quem está<br />
              na disputa?
            </h2>
            <p className="mt-4 text-sm leading-6" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
              O ranking começa a ser alimentado pelo UR Play. Presença, postura e desempenho constroem histórico dentro do ciclo.
            </p>
            <div className="mt-5">
              <Button href="/ranking" variant="secondary">Ver estrutura do ranking</Button>
            </div>
          </div>
          <RankingBroadcastPanel rows={season1.mockRankings} />
        </div>
      </S>

      {/* ── 4. TERRITÓRIOS ── */}
      <S id="territorios" style={{ background: "#0A0A0B" }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Polos da Temporada 1</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Três territórios.<br />Uma disputa.
          </h2>
        </div>
        {/* Mobile: horizontal scroll snap; Desktop: grid */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-5 px-5 sm:mx-0 sm:px-0 sm:overflow-visible sm:grid sm:grid-cols-3">
          {season1.poles.map((p, i) => (
            <div className="snap-start shrink-0 w-[80vw] sm:w-auto" key={p.id}>
              <TerritoryArtCard pole={p} rank={i + 1} />
            </div>
          ))}
        </div>
      </S>

      {/* ── 5. MODALIDADES ── */}
      <S id="modalidades" style={{ background: "#0D0D12" }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Modalidades</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Cada formato.<br />Cada ponto conta.
          </h2>
        </div>
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
          {season1.modalities.map((m) => (
            <div
              key={m.id}
              className="flex flex-col items-center gap-3 rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-5 hover:border-[rgba(212,164,55,0.4)] transition-colors"
            >
              <img alt={m.name} className="h-12 w-12 opacity-80" loading="lazy" src={m.symbolSolid} />
              <span
                className="text-center text-sm font-bold uppercase leading-tight"
                style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
              >
                {m.name}
              </span>
            </div>
          ))}
        </div>
      </S>

      {/* ── 6. ATLETA EDITORIAL + FORMAÇÃO ── */}
      <S id="atletas-formacoes" style={{ background: "#0A0A0B" }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Atletas e formações</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Quem entra<br />representa.
          </h2>
          <p className="mt-3 text-sm" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Dados editoriais — exemplos visuais. Ranking real abre conforme participação confirmada.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AthleteArtCard name="Atleta Destaque" pole="BH" level="N1" points={0} rank={1} />
          <AthleteArtCard name="Atleta Destaque" pole="Betim" level="N2" points={0} />
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <TeamFormationArtCard teamName="Formação BH Elite" pole="BH" modality="Quartetos" isOfficial={false} />
            <TeamFormationArtCard teamName="Dupla Betim" pole="Betim" modality="Duplas Mistas" isOfficial={false} />
          </div>
        </div>
      </S>

      {/* ── 7. BRACKET PREVIEW ── */}
      <S id="bracket" style={{ background: "#0D0D12" }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Chaveamento</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            O bracket<br />define o nome.
          </h2>
        </div>
        <URBracketPreview
          stage={season1.mockBracket.stage}
          quarterfinals={[...season1.mockBracket.quarterfinals]}
          semifinals={[...season1.mockBracket.semifinals]}
          final={season1.mockBracket.final}
        />
      </S>

      {/* ── 8. LEGENDS PANEL ── */}
      <S id="legends" style={{ background: "#0A0A0B" }}>
        <LegendsArtPanel />
      </S>

      {/* ── 9. RECOMPENSAS ── */}
      <S id="recompensas" style={{ background: "#0D0D12" }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>UR Coins · UR Market</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Participação<br />gera valor.
          </h2>
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
            icon="/season-1/symbols/ur-legends-line.svg"
            title="Premiações e repasses"
            description="Reconhecimento por resultado, evolução, constância e participação."
            note="Repasses dependem de caixa, margem, confirmação e regra oficial."
          />
          <RewardArtCard
            icon="/season-1/symbols/ur-sprint-line.svg"
            title="Serviços de performance"
            description="Fisio, nutrição, avaliação e treino especializado com parceiros."
          />
          <RewardArtCard
            icon="/season-1/symbols/ur-series-line.svg"
            title="Mídia oficial"
            description="Cobertura, bastidores e destaques que transformam o ciclo em história."
          />
          <RewardArtCard
            icon="/season-1/symbols/forca-dos-polos-line.svg"
            title="Força dos Polos"
            description="O polo com mais pontos leva reconhecimento e benefícios de território."
          />
        </div>
        <div className="mt-6 text-center">
          <Button href="/ur-market" variant="secondary">Ver UR Market</Button>
        </div>
      </S>

      {/* ── 10. CAMINHOS ── */}
      <S id="caminhos" style={{ background: "#0A0A0B" }}>
        <div className="mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}>Caminhos de entrada</p>
          <h2
            className="mt-2 text-3xl md:text-4xl font-bold uppercase leading-[0.9]"
            style={{ fontFamily: "'Oswald', sans-serif", color: "#F4F0E6", letterSpacing: "0.03em" }}
          >
            Escolha seu caminho<br />na temporada.
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {entryPaths.map((path) => {
            const Icon = path.icon;
            return (
              <Link
                className="group relative overflow-hidden rounded-lg border border-[rgba(212,164,55,0.12)] bg-[#14141A] p-5 transition-all hover:border-[#D4A437] hover:bg-[rgba(212,164,55,0.04)]"
                href={path.href}
                key={path.label}
                style={{ transition: "all 250ms cubic-bezier(0.4,0,0.2,1)" }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-[#D4A437] opacity-0 transition-opacity group-hover:opacity-100" />
                <Icon aria-hidden className="h-6 w-6" style={{ color: "#D4A437" }} />
                <h3
                  className="mt-5 text-xl font-bold uppercase leading-[0.92]"
                  style={{ color: "#F4F0E6", fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
                >
                  {path.label}
                </h3>
                <p className="mt-2 text-sm leading-5" style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}>
                  {path.description}
                </p>
                <div
                  className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
                  style={{ color: "#D4A437", fontFamily: "'Manrope', system-ui, sans-serif" }}
                >
                  Entrar
                  <ArrowRight aria-hidden className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </S>

      {/* ── 11. CTA FINAL ── */}
      <CTASectionPremium />
    </main>
  );
}

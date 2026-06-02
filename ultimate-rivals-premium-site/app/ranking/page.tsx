"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, TrendingUp, Award, Star, Zap, Heart } from "lucide-react";
import RankingTabs from "@/components/ranking/RankingTabs";
import Podium from "@/components/ranking/Podium";
import Leaderboard from "@/components/ranking/Leaderboard";
import EvolutionChart from "@/components/ranking/EvolutionChart";
import AchievementBadges from "@/components/ranking/AchievementBadges";

const criteria = [
  {
    icon: Award,
    label: "Vitórias",
    desc: "Vitórias no UR Play, Sprint e Series somam pontos de acordo com o nível e fase da competição.",
  },
  {
    icon: TrendingUp,
    label: "Evolução",
    desc: "Melhoria de desempenho ao longo da temporada é recompensada, não apenas resultados absolutos.",
  },
  {
    icon: Heart,
    label: "Fair Play",
    desc: "Conduta, pontualidade e respeito contribuem para uma pontuação especial de Fair Play.",
  },
  {
    icon: Zap,
    label: "Consistência",
    desc: "Frequência de participação e regularidade nos jogos impactam o ranking de longo prazo.",
  },
];

function EmBreve({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 sm:py-24 text-center">
      <div className="w-14 h-14 bg-ur-gold/10 rounded-sm flex items-center justify-center mb-5 border border-ur-gold/20">
        <Star size={22} className="text-ur-gold/60" />
      </div>
      <p className="font-display font-bold text-lg uppercase text-ur-white mb-2">
        Ranking de {label}
      </p>
      <p className="text-ur-muted text-sm font-body max-w-xs leading-relaxed">
        Este ranking estará disponível ao longo da Temporada 1. Acompanhe o calendário de competições para mais informações.
      </p>
    </div>
  );
}

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState("atletas");

  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">

      {/* HERO */}
      <section className="relative min-h-[45vh] sm:min-h-[55vh] sm:min-h-[45vh] sm:min-h-[55vh] sm:min-h-[68vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 court-lines opacity-25" />
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] glow-orb pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Temporada 1 · Sistema de Ranking</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(2rem,7vw,6rem)] text-ur-white">VISIBILIDADE,</span>
              <span className="block text-[clamp(1.6rem,5vw,4rem)] text-ur-sand">HISTÓRICO E</span>
              <span className="block text-[clamp(1.8rem,6vw,5rem)] text-gold-gradient">STATUS COMPETITIVO.</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-2xl font-body">
              Ranking que gera histórico e visibilidade. Cada ponto registra trajetória.
            </p>
            <p className="text-ur-muted text-sm leading-relaxed mb-10 max-w-2xl font-body">
              O atleta precisa jogar, aparecer, evoluir e ser lembrado. A visibilidade é parte da entrega.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/cadastro" className="btn-primary">
                Começar a acumular pontos
                <ArrowRight size={16} />
              </Link>
              <Link href="/temporada" className="btn-secondary">
                Como funciona a temporada
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <div className="sticky top-16 z-30 bg-ur-graphite border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <RankingTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>

      {/* TAB CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Atletas */}
          {activeTab === "atletas" && (
            <div className="space-y-10">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <span className="section-label block mb-2">Líderes da Temporada</span>
                    <h2 className="font-display font-black uppercase text-[clamp(1.8rem,4vw,2.8rem)] text-ur-white leading-none">
                      PÓDIO ATUAL
                    </h2>
                    <div className="divider-gold mt-3" />
                  </div>
                  <span className="text-ur-muted text-xs font-body italic hidden sm:block">dados de referência</span>
                </div>
                <Podium />
              </div>

              <Leaderboard />
            </div>
          )}

          {/* Evolução */}
          {activeTab === "evolucao" && (
            <div className="space-y-8">
              <div>
                <span className="section-label block mb-2">Progressão Acumulada</span>
                <h2 className="font-display font-black uppercase text-[clamp(1.8rem,4vw,2.8rem)] text-ur-white leading-none mb-1">
                  EVOLUÇÃO POR RODADA
                </h2>
                <div className="divider-gold mt-3 mb-8" />
              </div>
              <EvolutionChart />
              <div className="bg-card rounded-sm p-6 border border-white/5">
                <h3 className="font-display font-bold text-base uppercase text-ur-white mb-3">
                  Como a evolução é calculada
                </h3>
                <p className="text-ur-sand text-sm leading-relaxed font-body mb-3">
                  A curva de evolução registra o acúmulo de pontos ao longo das rodadas de cada atleta.
                  Atletas com sequência ativa e bom desempenho consistente constroem curvas mais sólidas.
                </p>
                <p className="text-ur-muted text-xs font-body leading-relaxed italic">
                  Os dados acima são de referência para ilustrar o funcionamento do sistema. Os dados reais serão atualizados ao longo da Temporada 1.
                </p>
              </div>
            </div>
          )}

          {/* Fair Play */}
          {activeTab === "fairplay" && (
            <div className="space-y-8">
              <div>
                <span className="section-label block mb-2">Conduta e Respeito</span>
                <h2 className="font-display font-black uppercase text-[clamp(1.8rem,4vw,2.8rem)] text-ur-white leading-none">
                  RANKING FAIR PLAY
                </h2>
                <div className="divider-gold mt-3 mb-8" />
              </div>
              <div className="bg-card rounded-sm p-6 sm:p-8 border border-white/5">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500/10 rounded-sm flex items-center justify-center border border-green-500/20 shrink-0">
                    <Heart size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg uppercase text-ur-white mb-2">
                      O que é pontuado no Fair Play
                    </h3>
                    <p className="text-ur-sand text-sm leading-relaxed font-body">
                      Conduta dentro da quadra, pontualidade nas partidas, respeito com adversários e organização contribuem
                      para uma pontuação especial de Fair Play, separada do ranking competitivo.
                    </p>
                  </div>
                </div>
                <EmBreve label="Fair Play" />
              </div>
            </div>
          )}

          {/* Equipes */}
          {activeTab === "equipes" && <EmBreve label="Equipes" />}

          {/* Duplas */}
          {activeTab === "duplas" && <EmBreve label="Duplas" />}

          {/* Polos */}
          {activeTab === "polos" && (
            <div className="space-y-8">
              <div>
                <span className="section-label block mb-2">Disputa Entre Comunidades</span>
                <h2 className="font-display font-black uppercase text-[clamp(1.8rem,4vw,2.8rem)] text-ur-white leading-none">
                  RANKING DOS POLOS
                </h2>
                <div className="divider-gold mt-3 mb-8" />
              </div>
              <div className="bg-card-gold rounded-sm p-6 border border-ur-gold/20">
                <div className="flex items-start gap-3">
                  <Star size={18} className="text-ur-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-bold text-sm uppercase text-ur-gold mb-2 tracking-wide">
                      Regra UR Legends
                    </p>
                    <p className="text-ur-sand text-sm font-body leading-relaxed">
                      Os pontos acumulados no UR Legends são computados exclusivamente no ranking de Polos — não afetam o ranking individual de atletas.
                      Esta regra garante que a representação do polo seja o foco do evento final.
                    </p>
                  </div>
                </div>
              </div>
              <EmBreve label="Polos" />
            </div>
          )}

          {/* Funções */}
          {activeTab === "funcoes" && <EmBreve label="Funções" />}

        </div>
      </section>

      {/* BADGES */}
      <section className="py-10 sm:py-20 bg-ur-graphite/40 relative">
        <div className="absolute inset-0 court-lines opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="section-label block mb-3">Reconhecimento</span>
            <h2 className="section-heading text-[clamp(2rem,4vw,3rem)] mb-2">BADGES DA TEMPORADA</h2>
            <p className="text-ur-sand text-sm font-body max-w-xl mb-4">
              Cada badge representa uma conquista ou posição no ecossistema UR. Eles aparecem no perfil do atleta e constroem visibilidade ao longo da temporada.
            </p>
            <div className="divider-gold" />
          </div>
          <AchievementBadges />
        </div>
      </section>

      {/* CRITÉRIOS */}
      <section className="py-12 sm:py-24 relative">
        <div className="absolute inset-0 court-lines opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Como os Pontos São Calculados</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">CRITÉRIOS DE PONTUAÇÃO</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {criteria.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.label}
                  className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all group border border-white/5"
                >
                  <div className="w-10 h-10 bg-ur-gold/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-ur-gold/20 transition-all border border-ur-gold/10">
                    <Icon size={19} className="text-ur-gold" />
                  </div>
                  <h3 className="font-display font-bold text-base uppercase text-ur-white mb-2">
                    {c.label}
                  </h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body">{c.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Legends rule callout */}
          <div className="bg-card-gold rounded-sm p-6 sm:p-8 border-l-4 border-l-ur-gold">
            <div className="flex items-start gap-4">
              <Star size={22} className="text-ur-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold text-xl uppercase text-ur-gold mb-2">
                  Pontos Especiais do UR Legends
                </h3>
                <p className="text-ur-sand text-sm leading-relaxed font-body">
                  Os pontos acumulados no UR Legends são computados exclusivamente no{" "}
                  <span className="text-ur-white font-semibold">ranking de Polos</span> — não afetam o ranking
                  individual de atletas. Esta regra garante que a representação do polo seja o foco do evento
                  final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — CORRIDA PARA O LEGENDS */}
      <section className="py-12 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] glow-orb pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 bg-ur-gold/10 border border-ur-gold/30 rounded-sm px-4 py-2">
            <Star size={14} className="text-ur-gold" />
            <span className="font-display font-bold text-sm uppercase tracking-wider text-ur-gold">
              Destino Final
            </span>
          </div>

          <h2 className="section-heading text-[clamp(2rem,5vw,4rem)] mb-6">
            A CORRIDA PARA<br />
            <span className="text-gold-gradient">O UR LEGENDS</span>
          </h2>

          <p className="text-ur-sand text-base leading-relaxed mb-10 max-w-xl mx-auto font-body">
            O ranking determina quem avança para cada fase da temporada. Os melhores do UR Series garantem
            presença no UR Legends — o evento que encerra e celebra toda a jornada.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cadastro" className="btn-primary">
              Entrar na temporada
              <ArrowRight size={16} />
            </Link>
            <Link href="/regulamento" className="btn-secondary">
              Critérios de classificação
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

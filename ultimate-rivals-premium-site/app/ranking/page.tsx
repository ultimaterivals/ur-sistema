"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Award, Star, Users, User, Zap, Heart, ChevronUp, ChevronDown, Minus } from "lucide-react";
import { useState } from "react";

const tabs = [
  { id: "atletas", label: "Atletas" },
  { id: "equipes", label: "Equipes" },
  { id: "duplas", label: "Duplas" },
  { id: "polos", label: "Polos" },
  { id: "funcao", label: "Por Função" },
  { id: "evolucao", label: "Evolução" },
  { id: "fairplay", label: "Fair Play" },
];

const podium = [
  { pos: 2, name: "André Lemos", polo: "Betim", pts: 1840, level: "N1", trend: "up" },
  { pos: 1, name: "Carlos Vieira", polo: "BH", pts: 2150, level: "N1", trend: "up" },
  { pos: 3, name: "Diego Faria", polo: "Contagem", pts: 1720, level: "N1", trend: "stable" },
];

const tableRows = [
  { pos: 1, name: "Carlos Vieira", polo: "BH", pts: 2150, level: "N1", change: "up", jogos: 24 },
  { pos: 2, name: "André Lemos", polo: "Betim", pts: 1840, level: "N1", change: "up", jogos: 21 },
  { pos: 3, name: "Diego Faria", polo: "Contagem", pts: 1720, level: "N1", change: "stable", jogos: 19 },
  { pos: 4, name: "Marcos Lima", polo: "BH", pts: 1580, level: "N1", change: "up", jogos: 18 },
  { pos: 5, name: "Rafael Cunha", polo: "Betim", pts: 1430, level: "N2", change: "down", jogos: 22 },
  { pos: 6, name: "Bruno Salles", polo: "Contagem", pts: 1390, level: "N2", change: "up", jogos: 17 },
];

const criteria = [
  { icon: Award, label: "Vitórias", desc: "Vitórias no UR Play, Sprint e Series somam pontos de acordo com o nível e fase da competição." },
  { icon: TrendingUp, label: "Evolução", desc: "Melhoria de desempenho ao longo da temporada é recompensada, não apenas resultados absolutos." },
  { icon: Heart, label: "Fair Play", desc: "Conduta, pontualidade e respeito contribuem para uma pontuação especial de Fair Play." },
  { icon: Zap, label: "Consistência", desc: "Frequência de participação e regularidade nos jogos impactam o ranking de longo prazo." },
];

function TrendIcon({ trend }: { trend: string }) {
  if (trend === "up") return <ChevronUp size={14} className="text-green-400" />;
  if (trend === "down") return <ChevronDown size={14} className="text-red-400" />;
  return <Minus size={14} className="text-ur-muted" />;
}

export default function RankingPage() {
  const [activeTab, setActiveTab] = useState("atletas");

  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 court-lines opacity-25" />
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-ur-gold/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Temporada 1 · Sistema de Ranking</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(3rem,7vw,6rem)] text-ur-white">VISIBILIDADE,</span>
              <span className="block text-[clamp(2rem,5vw,4rem)] text-ur-sand">HISTÓRICO E</span>
              <span className="block text-[clamp(2.5rem,6vw,5rem)] text-gold-gradient">STATUS COMPETITIVO.</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-10 max-w-2xl font-body">
              O ranking do Ultimate Rivals não é só uma tabela — é o espelho da sua temporada. Cada ponto, cada partida, cada evolução fica registrada e visível para toda a comunidade.
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
      <section className="py-12 bg-ur-graphite sticky top-16 z-30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex gap-1 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-display font-bold text-sm uppercase tracking-wider rounded-sm whitespace-nowrap transition-all duration-200 shrink-0 ${
                  activeTab === tab.id
                    ? "bg-ur-gold text-ur-black"
                    : "text-ur-muted hover:text-ur-sand hover:bg-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PODIUM */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-10">
            <span className="section-label block mb-3">Líderes da Temporada</span>
            <div className="flex items-center justify-between">
              <h2 className="section-heading text-[clamp(1.8rem,4vw,3rem)]">PÓDIO ATUAL</h2>
              <span className="text-ur-muted text-xs font-body italic">Dados ilustrativos</span>
            </div>
            <div className="divider-gold mt-3" />
          </div>

          <div className="flex flex-col sm:flex-row items-end justify-center gap-4 sm:gap-0 max-w-2xl mx-auto">
            {podium.map((athlete) => (
              <div
                key={athlete.name}
                className={`relative group ${
                  athlete.pos === 1
                    ? "sm:order-2 w-full sm:w-48 sm:mx-4"
                    : athlete.pos === 2
                    ? "sm:order-1 w-full sm:w-40"
                    : "sm:order-3 w-full sm:w-40"
                }`}
              >
                <div
                  className={`${
                    athlete.pos === 1
                      ? "bg-card-gold border-ur-gold/40 shadow-gold-glow-sm pt-8 pb-6"
                      : "bg-card pt-6 pb-5"
                  } rounded-sm border text-center px-4 hover:shadow-card-hover transition-all`}
                >
                  {athlete.pos === 1 && (
                    <Star size={20} className="text-ur-gold mx-auto mb-3" />
                  )}
                  <div
                    className={`font-display font-black text-5xl sm:text-6xl leading-none mb-2 ${
                      athlete.pos === 1 ? "text-ur-gold" : "text-ur-muted"
                    }`}
                  >
                    #{athlete.pos}
                  </div>
                  <h3 className="font-display font-bold text-base uppercase text-ur-white mb-1">{athlete.name}</h3>
                  <p className="text-ur-muted text-xs mb-3">{athlete.polo}</p>
                  <div className="flex items-center justify-center gap-2">
                    <span className="font-display font-black text-xl text-ur-gold">{athlete.pts.toLocaleString("pt-BR")}</span>
                    <span className="text-ur-muted text-xs">pts</span>
                  </div>
                  <span className="chip-sand text-xs mt-2 inline-flex">{athlete.level}</span>
                </div>
                <div
                  className={`h-2 sm:h-3 rounded-b-sm ${
                    athlete.pos === 1 ? "bg-ur-gold" : athlete.pos === 2 ? "bg-ur-sand/40" : "bg-white/10"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TABELA */}
      <section className="py-8 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-card rounded-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
              <h3 className="font-display font-bold text-lg uppercase text-ur-white">Classificação Geral</h3>
              <span className="text-ur-muted text-xs font-body italic">Dados ilustrativos</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left px-6 py-3 text-ur-muted text-xs font-display uppercase tracking-wider">Pos</th>
                    <th className="text-left px-6 py-3 text-ur-muted text-xs font-display uppercase tracking-wider">Atleta</th>
                    <th className="text-left px-4 py-3 text-ur-muted text-xs font-display uppercase tracking-wider hidden sm:table-cell">Polo</th>
                    <th className="text-left px-4 py-3 text-ur-muted text-xs font-display uppercase tracking-wider hidden md:table-cell">Nível</th>
                    <th className="text-left px-4 py-3 text-ur-muted text-xs font-display uppercase tracking-wider hidden md:table-cell">Jogos</th>
                    <th className="text-right px-6 py-3 text-ur-muted text-xs font-display uppercase tracking-wider">Pontos</th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row) => (
                    <tr
                      key={row.pos}
                      className="border-b border-white/3 hover:bg-white/2 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <TrendIcon trend={row.change} />
                          <span className={`font-display font-bold text-base ${row.pos <= 3 ? "text-ur-gold" : "text-ur-muted"}`}>
                            {row.pos}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-ur-graphite-2 rounded-full flex items-center justify-center shrink-0">
                            <User size={14} className="text-ur-muted" />
                          </div>
                          <span className="font-body font-semibold text-ur-white text-sm group-hover:text-ur-gold transition-colors">{row.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-4 hidden sm:table-cell">
                        <span className="text-ur-sand text-sm font-body">{row.polo}</span>
                      </td>
                      <td className="px-4 py-4 hidden md:table-cell">
                        <span className={`chip text-xs ${row.level === "N1" ? "chip-gold" : "chip-sand"}`}>{row.level}</span>
                      </td>
                      <td className="px-4 py-4 hidden md:table-cell">
                        <span className="text-ur-muted text-sm font-body">{row.jogos}</span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="font-display font-bold text-ur-gold">{row.pts.toLocaleString("pt-BR")}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CRITÉRIOS */}
      <section className="py-24 bg-ur-graphite/30 relative">
        <div className="absolute inset-0 court-lines opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Como os Pontos São Calculados</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">CRITÉRIOS DE PONTUAÇÃO</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {criteria.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.label} className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all group">
                  <div className="w-10 h-10 bg-ur-gold/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-ur-gold/20 transition-all">
                    <Icon size={20} className="text-ur-gold" />
                  </div>
                  <h3 className="font-display font-bold text-lg uppercase text-ur-white mb-2">{c.label}</h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body">{c.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Legends rule */}
          <div className="bg-card-gold rounded-sm p-6 sm:p-8 border-l-4 border-l-ur-gold">
            <div className="flex items-start gap-4">
              <Star size={22} className="text-ur-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-display font-bold text-xl uppercase text-ur-gold mb-2">Pontos Especiais do UR Legends</h3>
                <p className="text-ur-sand text-sm leading-relaxed font-body">
                  Os pontos acumulados no UR Legends são computados exclusivamente no{" "}
                  <span className="text-ur-white font-semibold">ranking de Polos</span> — não afetam o ranking individual de atletas.
                  Esta regra garante que a representação do polo seja o foco do evento final.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORRIDA PARA O LEGENDS */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-ur-gold/4 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6 bg-ur-gold/10 border border-ur-gold/30 rounded-sm px-4 py-2">
            <Star size={14} className="text-ur-gold" />
            <span className="font-display font-bold text-sm uppercase tracking-wider text-ur-gold">Destino Final</span>
          </div>
          <h2 className="section-heading text-[clamp(2rem,5vw,4rem)] mb-6">
            A CORRIDA PARA<br />
            <span className="text-gold-gradient">O UR LEGENDS</span>
          </h2>
          <p className="text-ur-sand text-base leading-relaxed mb-10 max-w-xl mx-auto font-body">
            O ranking determina quem avança para cada fase da temporada. Os melhores do UR Series garantem presença no UR Legends — o evento que encerra e celebra toda a jornada.
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

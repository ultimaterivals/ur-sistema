"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, FileText, Download, Shield, Trophy, Users, MapPin, Star, Award } from "lucide-react";

const chapters = [
  {
    num: "01",
    icon: Users,
    title: "Inscrições e Elegibilidade",
    rules: [
      "Podem se inscrever atletas amadores com idade mínima de 16 anos, residentes ou atuantes na região de cada polo.",
      "O cadastro é pessoal e intransferível. Cada atleta pode estar vinculado a apenas um polo por temporada.",
      "A inscrição em modalidade Dupla ou Quarteto exige que todos os membros estejam devidamente cadastrados individualmente.",
      "O nivelamento inicial (N1, N2 ou N3) é determinado por avaliação técnica presencial realizada antes dos primeiros jogos oficiais.",
    ],
  },
  {
    num: "02",
    icon: Trophy,
    title: "Formato das Competições",
    rules: [
      "UR Play é a fase de entrada: jogos regulares dentro de cada polo, abertos a todos os níveis (N1, N2, N3) nas modalidades Individual, Dupla e Quarteto.",
      "UR Sprint é a fase eliminatória regional: classificação por desempenho acumulado no UR Play. Fase de grupos seguida de eliminação direta.",
      "UR Series é a fase de alto desempenho: os melhores atletas e equipes do Sprint disputam o campeonato principal da temporada nos três polos.",
      "UR Legends é o evento de encerramento da temporada: confronto entre os destaques de cada polo. Convocação por ranking e indicação técnica.",
    ],
  },
  {
    num: "03",
    icon: Star,
    title: "Sistema de Ranking e Pontuação",
    rules: [
      "Os pontos são acumulados a cada rodada disputada, com peso diferente por fase: UR Play (base), Sprint (2x), Series (3x) e Legends (4x).",
      "Critérios de pontuação incluem: vitórias, aproveitamento por set, presença e regularidade ao longo da temporada.",
      "O ranking de Fair Play é calculado separadamente e considera pontualidade, conduta em quadra e relações com adversários e árbitros.",
      "Atletas e equipes com ausências injustificadas podem ter pontuação reduzida conforme critérios definidos pela organização de cada polo.",
    ],
  },
  {
    num: "04",
    icon: Shield,
    title: "Conduta e Fair Play",
    rules: [
      "O Ultimate Rivals é uma competição de esporte amador. Atitudes de desrespeito, agressividade ou desonestidade em quadra são passíveis de advertência ou desclassificação.",
      "Protestos devem ser encaminhados formalmente ao coordenador do polo dentro de 30 minutos após o encerramento do jogo.",
      "A Metodologia Hunter implica responsabilidade do atleta com sua própria evolução: presença, pontualidade e postura competitiva são valorizadas.",
      "Casos de conduta antidesportiva grave são analisados pelo comitê de cada polo, com direito de defesa garantido ao atleta ou equipe envolvida.",
    ],
  },
  {
    num: "05",
    icon: MapPin,
    title: "Polos e Quadras",
    rules: [
      "Os três polos oficiais da Temporada 1 são: Belo Horizonte, Betim e Contagem. Cada polo opera com calendário e coordenação próprios.",
      "As quadras utilizadas seguem padrões definidos pelo UR para areia e equipamentos. Informações sobre cada espaço estão disponíveis na página de Polos.",
      "Jogos podem ser remarcados por condições climáticas adversas a critério do coordenador do polo, com aviso prévio mínimo de 4 horas.*",
      "Atletas são responsáveis por conhecer as regras de acesso e conduta nos espaços físicos de cada polo.",
    ],
  },
  {
    num: "06",
    icon: Award,
    title: "Premiações e Reconhecimento",
    rules: [
      "O UR não oferece premiação financeira. O reconhecimento é simbólico e histórico: troféus, menções, destaque no ranking oficial e registro permanente na temporada.",
      "Destaques de cada fase (Jogador da Rodada, MVP da Dupla, etc.) são reconhecidos publicamente nos canais oficiais do UR.",
      "O UR Legends funciona como o maior símbolo de reconhecimento da temporada — ser convocado já representa um marco no histórico do atleta.",
      "Atletas com desempenho excepcional ao longo da temporada constroem um currículo esportivo documentado dentro do ecossistema UR.",
    ],
  },
];

export default function RegulamentoPage() {
  const [openChapter, setOpenChapter] = useState<number | null>(0);

  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute top-0 right-0 w-[500px] h-[400px] glow-orb pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Temporada 1 · Documento Oficial</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(1.6rem,4vw,3.5rem)] text-ur-sand">REGULAMENTO OFICIAL</span>
              <span className="block text-[clamp(2.5rem,6vw,5rem)] text-gold-gradient">DA TEMPORADA</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-xl font-body">
              As regras que regem a competição, a conduta, o ranking e o reconhecimento no ecossistema Ultimate Rivals.
            </p>

            <div className="flex items-center gap-2 mt-4">
              <div className="w-2 h-2 bg-ur-gold/60 rounded-full" />
              <p className="text-ur-muted text-sm font-body italic">
                Regulamento em vigor para a Temporada 1. Sujeito a atualizações.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOAD + META */}
      <section className="py-8 bg-ur-graphite/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-ur-sand text-sm font-body">
                <FileText size={14} className="text-ur-gold" />
                Versão 1.0 — Temporada 1
              </div>
              <div className="w-px h-4 bg-white/10" />
              <div className="flex items-center gap-2 text-ur-sand text-sm font-body">
                <Shield size={14} className="text-ur-gold" />
                6 capítulos
              </div>
            </div>
            <button className="btn-secondary text-xs py-2 px-4 flex items-center gap-2 opacity-60 cursor-not-allowed" disabled>
              <Download size={13} />
              Baixar PDF (em breve)
            </button>
          </div>
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-12">
            <span className="section-label block mb-3">Estrutura do Regulamento</span>
            <h2 className="section-heading text-[clamp(1.75rem,4vw,2.5rem)] mb-3">CAPÍTULOS</h2>
            <div className="divider-gold" />
          </div>

          <div className="space-y-3">
            {chapters.map((chapter, index) => {
              const Icon = chapter.icon;
              const isOpen = openChapter === index;

              return (
                <div
                  key={chapter.num}
                  className={`rounded-sm border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-card-gold border-ur-gold/30"
                      : "bg-card border-white/7 hover:border-white/15"
                  }`}
                >
                  <button
                    onClick={() => setOpenChapter(isOpen ? null : index)}
                    className="w-full flex items-center gap-4 p-6 text-left group"
                  >
                    <div
                      className={`w-10 h-10 rounded-sm flex items-center justify-center shrink-0 transition-all ${
                        isOpen ? "bg-ur-gold text-ur-black" : "bg-white/5 text-ur-muted group-hover:bg-ur-gold/10 group-hover:text-ur-gold"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-display font-black text-xs uppercase tracking-widest ${
                            isOpen ? "text-ur-gold" : "text-ur-muted"
                          }`}
                        >
                          Cap. {chapter.num}
                        </span>
                      </div>
                      <h3
                        className={`font-display font-bold text-lg uppercase transition-colors ${
                          isOpen ? "text-ur-white" : "text-ur-sand group-hover:text-ur-white"
                        }`}
                      >
                        {chapter.title}
                      </h3>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-ur-gold shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-8">
                      <div className="w-full h-px bg-ur-gold/15 mb-6" />
                      <ol className="space-y-4">
                        {chapter.rules.map((rule, ruleIndex) => (
                          <li key={ruleIndex} className="flex items-start gap-4">
                            <span className="font-display font-black text-xs text-ur-gold/50 mt-0.5 shrink-0 w-5 text-right">
                              {String(ruleIndex + 1).padStart(2, "0")}
                            </span>
                            <p className="text-ur-sand text-sm leading-relaxed font-body">{rule}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <p className="text-ur-muted text-xs font-body italic text-center mt-8">
            *Dados ilustrativos. Regulamento sujeito a atualizações ao longo da Temporada 1.
          </p>
        </div>
      </section>

      {/* DISCLAIMER + CTA */}
      <section className="py-20 bg-ur-graphite/30 relative">
        <div className="absolute inset-0 court-lines opacity-10" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-card rounded-sm p-8 mb-10 relative overflow-hidden border border-white/7">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/20 to-transparent" />
            <div className="flex items-start gap-4">
              <Shield size={20} className="text-ur-gold mt-0.5 shrink-0" />
              <div>
                <h3 className="font-display font-bold text-base uppercase text-ur-white mb-2">Nota Oficial</h3>
                <p className="text-ur-muted text-sm font-body leading-relaxed">
                  Este regulamento é o documento de referência para a Temporada 1 do Ultimate Rivals. Em caso de dúvidas ou interpretações, prevalece a decisão da coordenação do polo correspondente. Para questões formais, entre em contato com a organização pelo canal oficial.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="section-heading text-[clamp(1.75rem,4vw,2.5rem)] mb-4">
              DÚVIDAS? FALE COM A GENTE
            </h2>
            <p className="text-ur-sand text-sm font-body mb-8 max-w-md mx-auto leading-relaxed">
              Nossa equipe nos polos está disponível para esclarecer qualquer ponto do regulamento antes da sua inscrição.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/cadastro" className="btn-primary">
                Fazer minha inscrição
                <ArrowRight size={16} />
              </Link>
              <Link href="/polos-quadras" className="btn-secondary">
                <MapPin size={14} />
                Ver os polos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

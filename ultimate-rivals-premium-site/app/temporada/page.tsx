import Link from "next/link";
import { ArrowRight, MapPin, Trophy, Layers, Zap, Star, Shield, Users, ChevronRight } from "lucide-react";

const stages = [
  {
    number: "01",
    label: "UR Play",
    color: "text-ur-gold",
    border: "border-ur-gold/40",
    bg: "from-ur-gold/10 to-transparent",
    icon: Layers,
    description:
      "A entrada. Jogos semanais nos polos, nivelamento por desempenho, construção do histórico individual e de equipe. Aberto para todos os atletas.",
    detail: "Cadastro → Jogos Semanais → Observação → Ranking",
  },
  {
    number: "02",
    label: "UR Sprint",
    color: "text-ur-sand",
    border: "border-ur-sand/30",
    bg: "from-ur-sand/8 to-transparent",
    icon: Zap,
    description:
      "Jogos estruturados com maior frequência, visibilidade ampliada e critérios de avaliação mais precisos. A ponte entre a base e o campeonato.",
    detail: "Critérios mais rígidos → Mais visibilidade → Seleção para Series",
  },
  {
    number: "03",
    label: "UR Series",
    color: "text-ur-white",
    border: "border-white/20",
    bg: "from-white/5 to-transparent",
    icon: Trophy,
    description:
      "O campeonato oficial da temporada. Equipes e atletas classificados disputam entre polos, com transmissão, mídia e acompanhamento completo.",
    detail: "Campeonato Inter-Polos → Transmissão → Pontos para Legends",
  },
  {
    number: "04",
    label: "UR Legends",
    color: "text-ur-gold-light",
    border: "border-ur-gold/60",
    bg: "from-ur-gold/15 to-transparent",
    icon: Star,
    description:
      "O ápice. Apenas os melhores da temporada chegam aqui. O evento que encerra, celebra e consagra toda a jornada da Temporada 1.",
    detail: "Classificados do Series → Evento Final → Reconhecimento",
  },
];

const levels = [
  {
    label: "N1",
    name: "Elite",
    desc: "Alto desempenho competitivo. Atletas e equipes com histórico sólido e consistência comprovada na temporada.",
    tag: "Nível máximo",
    color: "border-ur-gold",
    textColor: "text-ur-gold",
    bg: "bg-ur-gold/5",
  },
  {
    label: "N2",
    name: "Avançado",
    desc: "Experiência sólida e bom nível técnico. Prontos para intensificar e evoluir dentro da temporada.",
    tag: "Nível intermediário",
    color: "border-ur-sand/40",
    textColor: "text-ur-sand",
    bg: "bg-ur-sand/5",
  },
  {
    label: "N3",
    name: "Desenvolvimento",
    desc: "O nível de chegada, preparação e evolução. Tão legítimo quanto qualquer outro — é onde muitas histórias começam.",
    tag: "Entrada e evolução",
    color: "border-white/20",
    textColor: "text-ur-white",
    bg: "bg-white/3",
  },
];

const modalities = [
  {
    icon: Users,
    label: "Dupla",
    desc: "Dois atletas. Uma identidade. Ranking compartilhado e trajetória construída juntos.",
  },
  {
    icon: Shield,
    label: "Quarteto",
    desc: "Equipes de quatro ou mais atletas com capitão, identidade visual e caminho competitivo completo.",
  },
];

const polos = [
  {
    name: "Belo Horizonte",
    abbr: "BH",
    desc: "O polo central. Maior concentração de atletas e quadras parceiras da temporada.",
    tag: "Polo Fundador",
  },
  {
    name: "Betim",
    abbr: "BE",
    desc: "Comunidade ativa e crescimento constante. Polo com identidade própria e forte engajamento local.",
    tag: "Polo Ativo",
  },
  {
    name: "Contagem",
    abbr: "CT",
    desc: "Tradição esportiva e base sólida de atletas. Um dos pilares da Temporada 1 no ecossistema UR.",
    tag: "Polo Ativo",
  },
];

export default function TemporadaPage() {
  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 court-lines opacity-25" />
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ur-gold/4 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ur-gold/3 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="section-label tracking-[0.3em]">Temporada 1 · Ultimate Rivals</span>
              <span className="chip-gold">Em andamento</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-8">
              <span className="block text-[clamp(2.5rem,7vw,6rem)] text-ur-white">TEMPORADA 1</span>
              <span className="block text-[clamp(1.5rem,4vw,3rem)] text-ur-sand mt-2">POLOS EM DISPUTA.</span>
            </h1>

            <div className="flex items-stretch gap-px mb-10 max-w-2xl">
              {["UR Play", "UR Sprint", "UR Series", "UR Legends"].map((s, i) => (
                <div
                  key={s}
                  className={`flex-1 py-2 px-3 text-center font-display font-bold text-xs sm:text-sm uppercase tracking-wide ${
                    i === 0
                      ? "bg-ur-gold text-ur-black"
                      : "bg-white/5 text-ur-muted border border-white/5"
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-2xl font-body">
              Uma temporada inteira. Três polos. Quatro etapas. Do primeiro jogo do UR Play ao evento final do UR Legends — cada ponto, cada partida e cada atleta contam.
            </p>
            <p className="text-ur-muted text-sm leading-relaxed mb-10 max-w-xl font-body">
              Você começa no UR Play, evolui pelo Sprint e Series, e os melhores chegam ao Legends. Esta é a jornada.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/ur-play" className="btn-primary">
                Entrar pelo UR Play
                <ArrowRight size={16} />
              </Link>
              <Link href="/ranking" className="btn-secondary">
                Ver o ranking
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JORNADA DA TEMPORADA */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Estrutura da Competição</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">A JORNADA DA TEMPORADA</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand mt-4 max-w-xl font-body text-sm leading-relaxed">
              Quatro etapas com critérios próprios de progressão. Cada fase seleciona os melhores para a seguinte.
            </p>
          </div>

          <div className="space-y-4">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.label}
                  className={`rounded-sm p-6 sm:p-8 bg-gradient-to-r ${stage.bg} border ${stage.border} hover:shadow-card-hover transition-all duration-300 group`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                    <div className="flex items-center gap-4 sm:gap-6 shrink-0">
                      <span className="font-display font-black text-5xl sm:text-6xl text-white/8 leading-none select-none">
                        {stage.number}
                      </span>
                      <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center group-hover:bg-white/10 transition-all shrink-0">
                        <Icon size={22} className={stage.color} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline gap-3 mb-3">
                        <span className={`font-display font-black text-2xl sm:text-3xl uppercase ${stage.color}`}>{stage.label}</span>
                      </div>
                      <p className="text-ur-sand text-sm sm:text-base leading-relaxed font-body mb-3">{stage.description}</p>
                      <div className="flex items-center gap-2 text-ur-muted text-xs font-display tracking-wide">
                        <ChevronRight size={12} className="text-ur-gold/50" />
                        {stage.detail}
                      </div>
                    </div>
                    {index < stages.length - 1 && (
                      <div className="hidden sm:flex items-center self-center ml-4">
                        <ArrowRight size={18} className="text-ur-gold/30" />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODALIDADES E NÍVEIS */}
      <section className="py-24 bg-ur-graphite/30 relative">
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Como Competir</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">MODALIDADES E NÍVEIS</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Modalidades */}
            <div>
              <h3 className="font-display font-bold text-xl uppercase text-ur-sand mb-6 tracking-wider">Modalidades</h3>
              <div className="space-y-4">
                {modalities.map((mod) => {
                  const Icon = mod.icon;
                  return (
                    <div key={mod.label} className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-ur-gold/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-ur-gold/20 transition-all">
                          <Icon size={20} className="text-ur-gold" />
                        </div>
                        <div>
                          <h4 className="font-display font-black text-xl uppercase text-ur-white mb-1">{mod.label}</h4>
                          <p className="text-ur-sand text-sm leading-relaxed font-body">{mod.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Níveis */}
            <div>
              <h3 className="font-display font-bold text-xl uppercase text-ur-sand mb-6 tracking-wider">Níveis Competitivos</h3>
              <div className="space-y-4">
                {levels.map((level) => (
                  <div key={level.label} className={`${level.bg} rounded-sm p-6 border ${level.color} hover:shadow-card-hover transition-all group`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-baseline gap-3">
                        <span className={`font-display font-black text-3xl leading-none ${level.textColor}`}>{level.label}</span>
                        <span className="font-display font-bold text-lg uppercase text-ur-white">{level.name}</span>
                      </div>
                      <span className="chip-sand text-xs">{level.tag}</span>
                    </div>
                    <p className="text-ur-sand text-sm leading-relaxed font-body">{level.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-ur-muted text-xs mt-4 font-body">
                O nivelamento ocorre por observação de desempenho nas primeiras partidas do UR Play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POLOS */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Onde Acontece</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">OS POLOS NA TEMPORADA</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand mt-4 max-w-xl font-body text-sm leading-relaxed">
              Três polos com igual peso, estrutura e presença na Temporada 1. Cada polo tem sua identidade e sua comunidade.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {polos.map((polo) => (
              <div key={polo.name} className="bg-card-gold rounded-sm p-8 hover:shadow-card-hover transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/40 to-transparent group-hover:via-ur-gold/70 transition-all" />
                <div className="absolute top-4 right-4">
                  <MapPin size={16} className="text-ur-gold/40" />
                </div>
                <div className="mb-6">
                  <span className="font-display font-black text-5xl text-ur-gold/20 leading-none select-none">{polo.abbr}</span>
                </div>
                <div className="mb-2">
                  <span className="chip-gold text-xs mb-3 inline-flex">{polo.tag}</span>
                </div>
                <h3 className="font-display font-black text-2xl uppercase text-ur-white mb-3">{polo.name}</h3>
                <p className="text-ur-sand text-sm leading-relaxed font-body">{polo.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-card rounded-sm p-6 border-l-2 border-l-ur-gold/30">
            <p className="text-ur-muted text-sm font-body">
              <span className="text-ur-gold font-semibold">Polo de referência:</span> Cada atleta se cadastra em um polo. Seu polo representa você no ranking coletivo e no caminho para o UR Series.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label block mb-4">Temporada 1</span>
          <h2 className="section-heading text-[clamp(2.5rem,6vw,4.5rem)] mb-6">
            SUA HISTÓRIA<br />
            <span className="text-gold-gradient">COMEÇA AGORA.</span>
          </h2>
          <p className="text-ur-sand text-base leading-relaxed mb-10 max-w-xl mx-auto font-body">
            Entre no UR Play, escolha seu polo e comece a construir o caminho que pode te levar ao Legends.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cadastro" className="btn-primary">
              Começar agora
              <ArrowRight size={16} />
            </Link>
            <Link href="/regulamento" className="btn-secondary">
              Ler o regulamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

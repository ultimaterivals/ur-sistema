import Link from "next/link";
import { ArrowRight, Play, Users, User, Shield, CheckCircle, Calendar, BarChart2, Star, Layers } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: User,
    title: "Cadastro",
    description:
      "Crie seu perfil no UR Play como atleta individual, dupla ou equipe. Informe seu polo de referência (BH, Betim ou Contagem) e escolha suas modalidades.",
  },
  {
    number: "02",
    icon: Calendar,
    title: "Jogos Semanais",
    description:
      "Participe de jogos regulares no seu polo. Cada partida é registrada, pontuada e integrada ao seu histórico permanente na plataforma.",
  },
  {
    number: "03",
    icon: BarChart2,
    title: "Observação e Nivelamento",
    description:
      "Seu desempenho nas primeiras partidas determina seu nível de entrada: N1 Elite, N2 Avançado ou N3 — o nível de chegada, preparação e evolução.",
  },
  {
    number: "04",
    icon: Star,
    title: "Histórico e Ranking",
    description:
      "Cada ponto conta. Cada partida fica registrada. Você constrói um histórico competitivo real que acompanha sua jornada por toda a temporada.",
  },
];

const entryTypes = [
  {
    icon: User,
    title: "Individual",
    tag: "Atleta Solo",
    description:
      "Entre sem dupla ou equipe. Você participa dos jogos semanais, acumula ranking individual e pode ser encontrado por outros atletas e equipes.",
    highlight: "Ranking individual + visibilidade",
  },
  {
    icon: Users,
    title: "Dupla",
    tag: "Modalidade Dupla",
    description:
      "Você e um parceiro formam uma dupla com identidade própria — nome, histórico e ranking compartilhado. A dupla evolui junto ao longo da temporada.",
    highlight: "Identidade e ranking de dupla",
  },
  {
    icon: Shield,
    title: "Quarteto / Equipe",
    tag: "Modalidade Quarteto",
    description:
      "Equipes com quatro atletas ou mais competem como unidade. Tenha capitão, identidade visual, mídia e um caminho competitivo completo na temporada.",
    highlight: "Capitão + identidade + caminho completo",
  },
];

const connections = [
  {
    label: "UR Sprint",
    color: "from-ur-gold/20 to-transparent",
    border: "border-ur-gold/30",
    text: "text-ur-gold",
    description:
      "Os melhores atletas e equipes do UR Play sobem para o UR Sprint — jogos estruturados, maior frequência e visibilidade ampliada dentro do polo.",
  },
  {
    label: "UR Series",
    color: "from-ur-sand/10 to-transparent",
    border: "border-ur-sand/20",
    text: "text-ur-sand",
    description:
      "Do Sprint, as equipes mais qualificadas avançam para o UR Series — o campeonato oficial da temporada entre os polos.",
  },
  {
    label: "UR Legends",
    color: "from-white/5 to-transparent",
    border: "border-white/10",
    text: "text-ur-white",
    description:
      "O ápice da temporada. Apenas os melhores do Series chegam ao UR Legends — o evento que encerra e celebra toda a jornada.",
  },
];

export default function URPlayPage() {
  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 court-lines opacity-30" />
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-ur-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-ur-gold/15 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Ultimate Rivals · Porta de Entrada</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(1.5rem,3vw,2rem)] text-ur-sand mb-2">UR Play:</span>
              <span className="block text-[clamp(3rem,8vw,7rem)] text-ur-white">SUA ENTRADA</span>
              <span className="block text-[clamp(3rem,8vw,7rem)] text-gold-gradient">NA TEMPORADA.</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-2xl font-body">
              O UR Play é a camada base do ecossistema Ultimate Rivals. Aqui, qualquer atleta — individual, em dupla ou equipe — registra sua presença, começa a jogar e constrói seu histórico competitivo.
            </p>
            <p className="text-ur-muted text-sm leading-relaxed mb-10 max-w-xl font-body">
              Você não precisa estar pronto. Precisa começar. O nível certo pra você existe aqui.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/cadastro" className="btn-primary">
                Entrar pelo UR Play
                <ArrowRight size={16} />
              </Link>
              <Link href="/temporada" className="btn-secondary">
                <Play size={14} />
                Ver a temporada
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Processo</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">COMO FUNCIONA</h2>
            <div className="divider-gold" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/30 to-transparent group-hover:via-ur-gold/60 transition-all" />
                  <span className="font-display font-black text-[3rem] leading-none text-ur-gold/15 group-hover:text-ur-gold/25 transition-all block mb-4">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 bg-ur-gold/10 rounded-sm flex items-center justify-center mb-4 group-hover:bg-ur-gold/20 transition-all">
                    <Icon size={20} className="text-ur-gold" />
                  </div>
                  <h3 className="font-display font-bold text-lg uppercase text-ur-white mb-2">{step.title}</h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QUEM PODE ENTRAR */}
      <section className="py-24 bg-ur-graphite/40 relative">
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Modalidades de Entrada</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">QUEM PODE ENTRAR</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand mt-4 max-w-xl font-body text-sm leading-relaxed">
              Não importa se você é um atleta solo, uma dupla ou uma equipe completa. A porta do UR Play está aberta para todos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {entryTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.title} className="bg-card-gold rounded-sm p-8 hover:shadow-card-hover transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-ur-gold/15 rounded-sm flex items-center justify-center group-hover:bg-ur-gold/25 transition-all">
                      <Icon size={24} className="text-ur-gold" />
                    </div>
                    <span className="chip-sand text-xs">{type.tag}</span>
                  </div>
                  <h3 className="font-display font-black text-2xl uppercase text-ur-white mb-3">{type.title}</h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body mb-6">{type.description}</p>
                  <div className="pt-4 border-t border-ur-gold/15">
                    <div className="flex items-center gap-2">
                      <CheckCircle size={14} className="text-ur-gold shrink-0" />
                      <span className="text-ur-gold text-xs font-display font-semibold uppercase tracking-wide">{type.highlight}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONEXÃO COM A TEMPORADA */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Jornada Completa</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">DO UR PLAY PARA A TEMPORADA</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand mt-4 max-w-xl font-body text-sm leading-relaxed">
              O UR Play não é um torneio isolado. É o primeiro degrau de uma jornada que pode levar você ao evento mais importante da temporada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {connections.map((c, i) => (
              <div key={c.label} className={`rounded-sm p-8 bg-gradient-to-br ${c.color} border ${c.border} hover:shadow-card-hover transition-all duration-300 group relative overflow-hidden`}>
                <div className="absolute top-0 right-0 font-display font-black text-[5rem] leading-none text-white/3 select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <span className={`font-display font-black text-2xl uppercase ${c.text} block mb-4`}>{c.label}</span>
                <p className="text-ur-sand text-sm leading-relaxed font-body">{c.description}</p>
              </div>
            ))}
          </div>

          {/* Visual journey line */}
          <div className="bg-card rounded-sm p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3 sm:gap-0">
              {["UR Play", "UR Sprint", "UR Series", "UR Legends"].map((stage, i, arr) => (
                <div key={stage} className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-sm font-display font-bold text-sm uppercase tracking-wider ${i === 0 ? "bg-ur-gold text-ur-black" : "bg-white/5 text-ur-sand border border-white/10"}`}>
                    {stage}
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight size={16} className="text-ur-gold/40 shrink-0 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
            <p className="text-ur-muted text-xs mt-4 font-body">
              A progressão ocorre por desempenho ao longo da temporada. Nem todo atleta chega ao Legends — e isso é parte do que torna o caminho significativo.
            </p>
          </div>
        </div>
      </section>

      {/* NÍVEIS */}
      <section className="py-16 bg-ur-graphite/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "N1", name: "Elite", desc: "Atletas e equipes de alto desempenho competitivo, com histórico e consistência.", color: "border-ur-gold text-ur-gold" },
              { label: "N2", name: "Avançado", desc: "Atletas com experiência sólida e bom nível técnico, prontos para intensificar.", color: "border-ur-sand/40 text-ur-sand" },
              { label: "N3", name: "Desenvolvimento", desc: "O nível de chegada. Entrada, preparação e evolução — tão legítimo quanto qualquer outro.", color: "border-white/20 text-ur-white" },
            ].map((level) => (
              <div key={level.label} className="bg-card rounded-sm p-6 border-l-2 border-l-ur-gold/20">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className={`font-display font-black text-3xl ${level.color.split(" ")[1]}`}>{level.label}</span>
                  <span className="font-display font-bold text-lg uppercase text-ur-white">{level.name}</span>
                </div>
                <p className="text-ur-sand text-sm leading-relaxed font-body">{level.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label block mb-4">Pronto para começar?</span>
          <h2 className="section-heading text-[clamp(2.5rem,6vw,4.5rem)] mb-6">
            SUA JORNADA<br />
            <span className="text-gold-gradient">COMEÇA AQUI.</span>
          </h2>
          <p className="text-ur-sand text-base leading-relaxed mb-10 max-w-xl mx-auto font-body">
            Faça seu cadastro no UR Play, escolha seu polo e comece a construir seu histórico na Temporada 1.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cadastro" className="btn-primary">
              Começar pelo UR Play
              <ArrowRight size={16} />
            </Link>
            <Link href="/regulamento" className="btn-secondary">
              Ver o regulamento
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

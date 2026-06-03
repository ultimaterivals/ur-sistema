import Link from "next/link";
import { ArrowRight, Globe, Users, Target, TrendingUp, Mail, Star, Shield, Zap } from "lucide-react";

const valueProps = [
  {
    icon: Users,
    label: "Alcance Comunitário",
    desc: "O UR reúne atletas amadores, familiares, amigos e espectadores em três polos de Minas Gerais ao longo de toda a temporada. Presença em eventos presenciais e conteúdo digital.",
  },
  {
    icon: Target,
    label: "Público Engajado",
    desc: "Atletas ativos, disciplinados e comprometidos. Um público que valoriza esforço, evolução e comunidade — e que associa as marcas presentes a esses mesmos valores.",
  },
  {
    icon: Globe,
    label: "Visibilidade Digital",
    desc: "Transmissões, redes sociais, blog e conteúdo editorial ao longo da temporada. Sua marca presente nos momentos que mais importam para a comunidade UR.",
  },
  {
    icon: TrendingUp,
    label: "Crescimento Consistente",
    desc: "O UR está construindo uma base sólida na Temporada 1. Entrar agora é fazer parte da fundação de algo que crescerá com credibilidade ao longo das próximas temporadas.",
  },
];

const tiers = [
  {
    label: "Apoiador",
    icon: Star,
    highlight: false,
    desc: "O nível de entrada para marcas que querem se conectar com a comunidade UR.",
    benefits: [
      "Menção nos canais digitais do UR",
      "Logo nos materiais de comunicação do polo escolhido",
      "Presença em 1 polo por temporada",
      "Reconhecimento como apoiador oficial",
    ],
  },
  {
    label: "Parceiro",
    icon: Shield,
    highlight: true,
    desc: "Para marcas que querem presença ativa em mais de um polo e nos principais eventos da temporada.",
    benefits: [
      "Presença em 2 polos + eventos principais",
      "Logo em transmissões e materiais audiovisuais",
      "Menções em editorial do Blog UR",
      "Espaço em ativações de polo (quadras e arenas)",
      "Relatório de presença ao final da temporada",
    ],
  },
  {
    label: "Master",
    icon: Zap,
    highlight: false,
    desc: "Parceria estratégica completa. Máxima visibilidade nos três polos e em todas as fases da cadeia competitiva.",
    benefits: [
      "Presença nos três polos ao longo de toda a temporada",
      "Naming rights em eventos especiais (a combinar)",
      "Integração em transmissões ao vivo e conteúdo editorial",
      "Ativações exclusivas no UR Legends",
      "Cocriação de conteúdo com a equipe UR",
      "Relatório completo de desempenho e alcance",
    ],
  },
];

const audienceStats = [
  { value: "3", unit: "Polos", desc: "BH · Betim · Contagem" },
  { value: "100+", unit: "Atletas*", desc: "Cadastrados na Temporada 1" },
  { value: "4", unit: "Fases", desc: "Play → Sprint → Series → Legends" },
  { value: "12+", unit: "Rodadas*", desc: "Jogos ao longo da temporada" },
];

export default function PatrocinadoresPage() {
  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-ur-gold/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Ultimate Rivals · Parcerias</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(1.5rem,3.5vw,3rem)] text-ur-sand">CONSTRUINDO</span>
              <span className="block text-[clamp(1.5rem,3.5vw,3rem)] text-ur-white">O ESPORTE AMADOR</span>
              <span className="block text-[clamp(2.5rem,6vw,5rem)] text-gold-gradient">JUNTOS</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-10 max-w-2xl font-body">
              O Ultimate Rivals é mais do que uma competição. É uma plataforma de desenvolvimento esportivo com comunidade ativa, conteúdo editorial e presença em três cidades de Minas Gerais. Sua marca pode fazer parte disso.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="mailto:parcerias@ultimaterivals.com.br" className="btn-primary">
                Quero ser parceiro
                <ArrowRight size={16} />
              </a>
              <Link href="/sobre" className="btn-secondary">
                Conhecer o UR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE STATS */}
      <section className="py-16 bg-ur-graphite/60 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {audienceStats.map((stat) => (
              <div key={stat.unit} className="text-center">
                <div className="flex items-baseline justify-center gap-1 mb-1">
                  <span className="font-display font-black text-4xl text-gold-gradient">{stat.value}</span>
                  <span className="font-display font-bold text-xl text-ur-gold">{stat.unit}</span>
                </div>
                <p className="text-ur-muted text-xs font-body">{stat.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-ur-muted text-xs font-body italic text-center mt-6">*Dados ilustrativos</p>
        </div>
      </section>

      {/* VALUE PROPS */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Por Que o UR</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">
              O QUE SUA MARCA<br />GANHA COM O UR
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((vp) => {
              const Icon = vp.icon;
              return (
                <div key={vp.label} className="bg-card rounded-sm p-6 relative overflow-hidden hover:shadow-card-hover transition-all group">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/15 to-transparent group-hover:via-ur-gold/40 transition-all" />
                  <div className="w-10 h-10 bg-ur-gold/10 rounded-sm flex items-center justify-center mb-5 group-hover:bg-ur-gold/20 transition-all">
                    <Icon size={18} className="text-ur-gold" />
                  </div>
                  <h3 className="font-display font-bold text-lg uppercase text-ur-white mb-2">{vp.label}</h3>
                  <p className="text-ur-muted text-xs leading-relaxed font-body">{vp.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP TIERS */}
      <section className="py-24 bg-ur-graphite/30 relative">
        <div className="absolute inset-0 court-lines opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <span className="section-label block mb-3">Modelos de Parceria</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">
              NÍVEIS DE<br />
              <span className="text-gold-gradient">PATROCÍNIO</span>
            </h2>
            <div className="divider-gold mx-auto" />
            <p className="text-ur-sand text-sm font-body mt-6 max-w-md mx-auto leading-relaxed">
              Cada nível oferece uma forma diferente de presença no ecossistema UR. Todos os valores são discutidos diretamente com nossa equipe de parcerias.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => {
              const Icon = tier.icon;
              return (
                <div
                  key={tier.label}
                  className={`rounded-sm p-8 relative overflow-hidden hover:shadow-card-hover transition-all group ${
                    tier.highlight ? "bg-card-gold" : "bg-card"
                  }`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${tier.highlight ? "bg-ur-gold" : "bg-gradient-to-r from-transparent via-ur-gold/20 to-transparent"}`} />

                  {tier.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="chip-gold text-xs">Mais escolhido</span>
                    </div>
                  )}

                  <div className="w-12 h-12 bg-ur-gold/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-ur-gold/20 transition-all">
                    <Icon size={22} className="text-ur-gold" />
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase text-ur-white mb-2">{tier.label}</h3>
                  <p className="text-ur-sand text-xs font-body leading-relaxed mb-6">{tier.desc}</p>

                  <ul className="space-y-2.5 mb-8">
                    {tier.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-xs font-body text-ur-sand">
                        <div className="w-1 h-1 rounded-full bg-ur-gold mt-1.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <a href="mailto:parcerias@ultimaterivals.com.br" className={`${tier.highlight ? "btn-primary" : "btn-secondary"} w-full justify-center text-xs`}>
                    Quero saber mais
                    <ArrowRight size={13} />
                  </a>
                </div>
              );
            })}
          </div>

          <p className="text-ur-muted text-xs font-body italic text-center mt-8">
            Todos os formatos de parceria são personalizáveis. Entre em contato para discutir as condições específicas da sua marca.
          </p>
        </div>
      </section>

      {/* CURRENT PARTNERS PLACEHOLDER */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <span className="section-label block mb-3">Parceiros Oficiais</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3rem)] mb-4">
              QUEM ACREDITA NO UR
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card rounded-sm p-10 flex flex-col items-center justify-center gap-3 border border-dashed border-white/10 hover:border-ur-gold/20 transition-all"
              >
                <div className="w-16 h-16 bg-white/5 rounded-sm flex items-center justify-center">
                  <Globe size={24} className="text-ur-muted" />
                </div>
                <span className="text-ur-muted text-xs font-display uppercase tracking-wider">Parceiro UR</span>
                <span className="text-ur-muted/50 text-xs font-body italic">Em breve</span>
              </div>
            ))}
          </div>

          <p className="text-ur-muted text-xs font-body italic text-center">
            Seja um dos primeiros parceiros da Temporada 1. Espaços limitados.
          </p>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="py-24 bg-ur-graphite/30 relative overflow-hidden">
        <div className="absolute inset-0 court-lines opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-ur-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label block mb-4">Fale com a Gente</span>
          <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">
            QUERO SER<br />
            <span className="text-gold-gradient">PARCEIRO</span>
          </h2>
          <p className="text-ur-sand text-sm font-body mb-8 max-w-md mx-auto leading-relaxed">
            Conte para a nossa equipe sobre sua marca e como você imagina a parceria. Responderemos com uma proposta personalizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:parcerias@ultimaterivals.com.br" className="btn-primary">
              <Mail size={15} />
              parcerias@ultimaterivals.com.br
            </a>
          </div>

          <p className="text-ur-muted text-xs font-body mt-6">
            Resposta em até 2 dias úteis.
          </p>
        </div>
      </section>
    </div>
  );
}

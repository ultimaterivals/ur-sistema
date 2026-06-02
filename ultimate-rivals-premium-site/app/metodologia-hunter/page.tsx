import Link from "next/link";
import { ArrowRight, Target, Zap, TrendingUp, Users, Shield, Star, ChevronRight } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    label: "Disciplina",
    desc: "A base de tudo. O atleta Hunter entende que presença, comprometimento e respeito às regras não são exigências externas — são escolhas pessoais que definem a trajetória.",
  },
  {
    icon: Zap,
    label: "Consistência",
    desc: "Não é sobre o melhor dia. É sobre aparecer em todos os dias. A consistência no treinamento, nos jogos e na conduta é o que separa atletas que evoluem dos que estagnam.",
  },
  {
    icon: Target,
    label: "Competitividade",
    desc: "Competir bem vai além de ganhar. O atleta Hunter busca superar seus próprios limites, respeita o adversário e trata cada jogo como uma oportunidade de crescimento.",
  },
  {
    icon: TrendingUp,
    label: "Evolução",
    desc: "O sistema UR registra cada jogo, cada ponto, cada progresso. A evolução não é subjetiva — ela é documentada. O atleta vê sua própria curva crescendo ao longo da temporada.",
  },
  {
    icon: Users,
    label: "Comunidade",
    desc: "Ninguém evolui sozinho. A comunidade dos polos — adversários, parceiros, coordenadores — faz parte do desenvolvimento. O Hunter cuida do ambiente que o sustenta.",
  },
  {
    icon: Star,
    label: "Resiliência",
    desc: "Derrotas fazem parte. O atleta Hunter não abandona o método depois de um resultado ruim. Ele analisa, ajusta e volta — porque sabe que a evolução é não-linear.",
  },
];

const practiceSteps = [
  {
    label: "UR Play",
    title: "Onde começa a prática",
    desc: "No UR Play, o atleta experimenta os princípios Hunter pela primeira vez: jogos regulares, presença obrigatória, feedback técnico e construção do histórico inicial.",
  },
  {
    label: "UR Sprint",
    title: "Pressão como catalisador",
    desc: "As fases eliminatórias do Sprint testam a resiliência e a consistência. Quem chega aqui já demonstrou disciplina — agora enfrenta o primeiro grande desafio coletivo.",
  },
  {
    label: "UR Series",
    title: "Evolução visível no ranking",
    desc: "O Series é onde a evolução vira número. O ranking público reflete a jornada construída — e o atleta Hunter entende que sua posição é fruto do que escolheu fazer ao longo da temporada.",
  },
  {
    label: "UR Legends",
    title: "Reconhecimento sem promessas",
    desc: "Chegar ao Legends é o símbolo máximo da temporada. Não é uma garantia de nada além disso — é o reconhecimento de uma trajetória construída com método, presença e mentalidade.",
  },
];

export default function MetodologiaHunterPage() {
  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center pt-20 bg-ur-black overflow-hidden">




        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Ultimate Rivals · Filosofia</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(1.5rem,3.5vw,3rem)] text-ur-sand">METODOLOGIA HUNTER:</span>
              <span className="block text-[clamp(1.5rem,3.5vw,3rem)] text-ur-white">A MENTALIDADE QUE</span>
              <span className="block text-[clamp(2.5rem,6vw,5rem)] text-gold-gradient">TRANSFORMA</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-2xl font-body">
              Hunter não é uma promessa. É uma forma de encarar o desenvolvimento esportivo — um conjunto de princípios que orienta como o atleta UR pensa, treina e compete.
            </p>
            <p className="text-ur-muted text-sm leading-relaxed mb-10 max-w-xl font-body">
              Não se trata de revelar talentos para o mercado profissional. Trata-se de transformar atletas amadores em versões mais consistentes de si mesmos.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/cadastro" className="btn-primary">
                Faça parte do sistema
                <ArrowRight size={16} />
              </Link>
              <Link href="/temporada" className="btn-secondary">
                <Target size={14} />
                Ver a temporada
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT HUNTER IS */}
      <section className="py-24 relative bg-ur-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-label block mb-4">O Que É Hunter</span>
              <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-6 leading-tight">
                UM MÉTODO,<br />NÃO UM<br />
                <span className="text-gold-gradient">PROGRAMA</span>
              </h2>
              <div className="divider-gold mb-6" />
              <div className="space-y-4 text-ur-sand text-sm leading-relaxed font-body">
                <p>
                  A Metodologia Hunter nasceu da observação de que a maioria dos atletas amadores não falha por falta de talento — falha por falta de estrutura mental. Consistência, disciplina e resiliência não são qualidades inatas: são hábitos cultivados.
                </p>
                <p>
                  Hunter é o nome dado ao conjunto de princípios que o Ultimate Rivals incorpora em toda sua estrutura: desde o formato dos jogos até o sistema de ranking, desde o feedback técnico até a cultura dos polos.
                </p>
                <p>
                  Ser Hunter não é um título. É uma postura. O atleta Hunter é aquele que aparece, que compete com seriedade, que respeita o processo — e que entende que o esporte amador pode ser vivido com a mesma intensidade do profissional.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                { q: "Hunter = scouting?", a: "Não. A Metodologia Hunter não tem relação com identificação de talentos para o mercado profissional." },
                { q: "Hunter = garantia de progressão?", a: "Não. O método orienta a postura do atleta — não garante resultados específicos de carreira ou classificação." },
                { q: "Hunter = só para atletas avançados?", a: "Não. Os princípios se aplicam igualmente a atletas N3 (Desenvolvimento), N2 (Avançado) e N1 (Elite)." },
                { q: "Hunter = regras rígidas?", a: "Não. É uma filosofia de desenvolvimento. Cada atleta a incorpora no seu próprio ritmo e estilo de jogo." },
              ].map((item) => (
                <div key={item.q} className="bg-card rounded-sm p-5 relative hover:shadow-card-hover transition-all group">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/15 to-transparent group-hover:via-ur-gold/35 transition-all" />
                  <div className="flex items-start gap-3">
                    <ChevronRight size={14} className="text-ur-gold mt-0.5 shrink-0" />
                    <div>
                      <p className="font-display font-bold text-sm uppercase text-ur-white mb-1">{item.q}</p>
                      <p className="text-ur-muted text-xs font-body leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6 PILLARS */}
      <section className="py-24 bg-ur-graphite/30 relative overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14 text-center">
            <span className="section-label block mb-3">Os Fundamentos</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">
              6 PILARES DA<br />
              <span className="text-gold-gradient">METODOLOGIA HUNTER</span>
            </h2>
            <div className="divider-gold mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.label}
                  className="bg-card rounded-sm p-8 relative hover:shadow-card-hover transition-all group"
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/20 to-transparent group-hover:via-ur-gold/40 transition-all" />
                  <div className="absolute top-4 right-4 font-display font-black text-6xl text-white/3 leading-none select-none">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="w-12 h-12 bg-ur-gold/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-ur-gold/20 transition-all">
                    <Icon size={22} className="text-ur-gold" />
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase text-ur-white mb-3">{pillar.label}</h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS IN PRACTICE */}
      <section className="py-24 relative bg-ur-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Na Prática</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">
              HUNTER NO<br />ECOSSISTEMA UR
            </h2>
            <div className="divider-gold" />
            <p className="text-ur-sand text-sm font-body mt-4 max-w-xl leading-relaxed">
              Os princípios Hunter não são ensinados em sala de aula — eles são vividos dentro das quatro fases da cadeia competitiva do UR.
            </p>
          </div>

          <div className="space-y-4">
            {practiceSteps.map((step, index) => (
              <div
                key={step.label}
                className="bg-card-gold rounded-sm p-6 sm:p-8 relative hover:shadow-card-hover transition-all group"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/30 to-transparent" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-display font-black text-4xl text-ur-gold/30 leading-none w-12 text-right">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="chip-gold text-xs whitespace-nowrap">{step.label}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-xl uppercase text-ur-white mb-1">{step.title}</h3>
                    <p className="text-ur-sand text-sm leading-relaxed font-body">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER + CTA */}
      <section className="py-24 bg-ur-graphite/30 relative overflow-hidden">



        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          {/* Disclaimer */}
          <div className="bg-ur-graphite-2 rounded-sm p-6 mb-12 border border-white/8 relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-ur-gold/30" />
            <p className="text-ur-muted text-xs font-body leading-relaxed pl-4">
              <strong className="text-ur-sand">Nota:</strong> A Metodologia Hunter é uma filosofia de desenvolvimento esportivo aplicada ao contexto do Ultimate Rivals. Não representa garantias de progressão profissional, acesso a times, contratos ou qualquer forma de carreira esportiva. O UR é um ecossistema de esporte amador organizado.
            </p>
          </div>

          <div className="text-center">
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">
              FAÇA PARTE<br />
              <span className="text-gold-gradient">DO SISTEMA</span>
            </h2>
            <p className="text-ur-sand text-sm font-body mb-8 max-w-md mx-auto leading-relaxed">
              O método só funciona dentro da quadra. Escolha seu polo, sua modalidade e comece a construir sua trajetória na Temporada 1.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/cadastro" className="btn-primary text-base px-8 py-4">
                Iniciar cadastro
                <ArrowRight size={18} />
              </Link>
              <Link href="/temporada" className="btn-secondary">
                Ver a temporada
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

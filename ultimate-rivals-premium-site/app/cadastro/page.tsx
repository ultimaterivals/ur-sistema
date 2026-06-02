import Link from "next/link";
import { ArrowRight, User, Users, Shield, CheckCircle, MapPin, Calendar, ChevronRight } from "lucide-react";

const modalities = [
  {
    icon: User,
    label: "Individual",
    sublabel: "UR Play",
    desc: "Compete como atleta solo. Seu desempenho individual é avaliado em cada jogo e constrói seu histórico pessoal no ranking.",
    involves: [
      "Jogos em formato individual dentro do UR Play",
      "Nivelamento técnico antes dos jogos oficiais",
      "Pontuação pessoal acumulativa por temporada",
      "Progressão de nível: N3 → N2 → N1",
    ],
    highlight: false,
  },
  {
    icon: Users,
    label: "Dupla",
    sublabel: "UR Play",
    desc: "Compete com um parceiro fixo. A dupla é avaliada como unidade — comunicação, entrosamento e decisões conjuntas contam.",
    involves: [
      "Registro de dupla com parceiro cadastrado",
      "Jogos em pares dentro do UR Play",
      "Pontuação compartilhada e histórico da dupla",
      "Classificação por nível da equipe",
    ],
    highlight: true,
  },
  {
    icon: Shield,
    label: "Quarteto",
    sublabel: "UR Play → UR Sprint",
    desc: "Equipe de quatro atletas. Formato que abre a rota completa da cadeia UR, do Play até as fases eliminatórias do Sprint.",
    involves: [
      "Registro coletivo de até 4 atletas",
      "Jogos em time no UR Play e acesso ao UR Sprint",
      "Pontuação por equipe + contribuições individuais",
      "Trajetória coletiva documentada na temporada",
    ],
    highlight: false,
  },
];

const steps = [
  {
    num: "01",
    title: "Preencha o formulário",
    desc: "Informe seus dados básicos, modalidade de interesse e polo mais próximo. Leva menos de 5 minutos.",
  },
  {
    num: "02",
    title: "Escolha seu polo",
    desc: "Selecione entre os três polos disponíveis: Belo Horizonte, Betim ou Contagem. Cada polo tem sua própria grade de jogos.",
  },
  {
    num: "03",
    title: "Participe do primeiro jogo",
    desc: "Com o cadastro confirmado, você recebe acesso ao calendário e participa da sua primeira rodada do UR Play.",
  },
  {
    num: "04",
    title: "Inicie sua jornada",
    desc: "Seu histórico começa a ser construído. Cada jogo, cada ponto, cada evolução fica registrado na sua ficha de atleta.",
  },
];

const levels = [
  { code: "N3", label: "Desenvolvimento", desc: "Ponto de entrada. Ideal para quem está chegando ao esporte competitivo organizado pela primeira vez." },
  { code: "N2", label: "Avançado", desc: "Para atletas com experiência prévia em competições. O nivelamento define onde você começa." },
  { code: "N1", label: "Elite", desc: "Nível mais competitivo do ecossistema. Acesso via ranking ou histórico comprovado de desempenho." },
];

export default function CadastroPage() {
  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[50vh] sm:min-h-[65vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] glow-orb pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Temporada 1 · Inscrições Abertas</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(1.8rem,4vw,3.5rem)] text-ur-sand">SEU CAMINHO</span>
              <span className="block text-[clamp(2.5rem,6vw,5.5rem)] text-gold-gradient">COMEÇA AQUI</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-2xl font-body">
              O Ultimate Rivals é um ecossistema competitivo para atletas amadores de esportes de praia em Minas Gerais. Escolha sua modalidade, seu polo e comece a construir seu histórico.
            </p>
            <p className="text-ur-muted text-sm leading-relaxed mb-10 max-w-xl font-body">
              Inscrições para a Temporada 1 abertas nos três polos. Vagas limitadas por nível.*
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/entrar" className="btn-primary">
                Iniciar cadastro
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

      {/* MODALITIES */}
      <section className="py-12 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Modalidades Disponíveis</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">COMO VOCÊ QUER COMPETIR?</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand text-sm font-body mt-4 max-w-xl leading-relaxed">
              Todas as modalidades fazem parte do UR Play — porta de entrada do ecossistema Ultimate Rivals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {modalities.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.label}
                  className={`rounded-sm p-8 relative overflow-hidden transition-all group hover:shadow-card-hover ${
                    mod.highlight ? "bg-card-gold" : "bg-card"
                  }`}
                >
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/30 to-transparent" />

                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-ur-gold/10 rounded-sm flex items-center justify-center group-hover:bg-ur-gold/20 transition-all">
                      <Icon size={22} className="text-ur-gold" />
                    </div>
                    <span className="chip-sand text-xs">{mod.sublabel}</span>
                  </div>

                  <h3 className="font-display font-black text-2xl uppercase text-ur-white mb-1">{mod.label}</h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body mb-6">{mod.desc}</p>

                  <ul className="space-y-2">
                    {mod.involves.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs font-body text-ur-sand">
                        <CheckCircle size={12} className="text-ur-gold mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 sm:py-24 bg-ur-graphite/30 relative">
        <div className="absolute inset-0 court-lines opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Processo de Inscrição</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">
              COMO FUNCIONA<br />O CADASTRO
            </h2>
            <div className="divider-gold" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.num} className="relative group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gradient-to-r from-ur-gold/30 to-transparent z-10 -translate-x-4" />
                )}
                <div className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all h-full relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/20 to-transparent group-hover:via-ur-gold/40 transition-all" />
                  <span className="font-display font-black text-5xl text-ur-gold/20 leading-none block mb-4">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-lg uppercase text-ur-white mb-2">{step.title}</h3>
                  <p className="text-ur-sand text-sm leading-relaxed font-body">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEVELS */}
      <section className="py-12 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Nivelamento</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">NÍVEIS DE COMPETIÇÃO</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand text-sm font-body mt-4 max-w-xl leading-relaxed">
              O nível inicial é definido pelo nivelamento técnico. N3 é o ponto de entrada — não indica inferioridade, apenas o estágio atual do atleta.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {levels.map((level) => (
              <div key={level.code} className="bg-card-gold rounded-sm p-8 relative overflow-hidden hover:shadow-card-hover transition-all group">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/30 to-transparent" />
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-display font-black text-4xl text-gold-gradient">{level.code}</span>
                  <span className="font-display font-bold text-lg uppercase text-ur-white">{level.label}</span>
                </div>
                <p className="text-ur-sand text-sm leading-relaxed font-body">{level.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO BOX + CTA */}
      <section className="py-12 sm:py-24 bg-ur-graphite/30 relative overflow-hidden">
        <div className="absolute inset-0 court-lines opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] glow-orb pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-card-gold rounded-sm p-8 sm:p-12 mb-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/40 to-transparent" />
            <h3 className="font-display font-black text-2xl uppercase text-ur-white mb-6">Informações Importantes</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Calendar size={16} className="text-ur-gold" />
                  <span className="font-display font-bold text-sm uppercase text-ur-gold tracking-wider">Temporada 1</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Inscrições: abertas até preenchimento das vagas*",
                    "Início dos jogos: conforme calendário do polo*",
                    "Duração: ao longo de todo o ano*",
                    "Nivelamento: presencial, no polo escolhido*",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs font-body text-ur-sand">
                      <ChevronRight size={12} className="text-ur-gold mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={16} className="text-ur-gold" />
                  <span className="font-display font-bold text-sm uppercase text-ur-gold tracking-wider">Polos Disponíveis</span>
                </div>
                <ul className="space-y-2">
                  {[
                    "Belo Horizonte — Polo BH Central",
                    "Betim — Polo Betim Esportes",
                    "Contagem — Polo Contagem Arena",
                  ].map((polo) => (
                    <li key={polo} className="flex items-start gap-2 text-xs font-body text-ur-sand">
                      <ChevronRight size={12} className="text-ur-gold mt-0.5 shrink-0" />
                      {polo}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-ur-muted text-xs font-body italic mt-6">*Dados ilustrativos</p>
          </div>

          <div className="text-center">
            <h2 className="section-heading text-[clamp(2rem,5vw,3rem)] mb-4">
              PRONTO PARA<br />
              <span className="text-gold-gradient">COMEÇAR?</span>
            </h2>
            <p className="text-ur-sand text-sm font-body mb-8 max-w-md mx-auto leading-relaxed">
              O cadastro leva menos de 5 minutos. Escolha sua modalidade, seu polo e seu nível — e entre para o ecossistema UR.
            </p>
            <Link href="/entrar" className="btn-primary text-base px-8 py-4">
              Iniciar cadastro
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, MapPin, Users, Calendar, CheckCircle, Building2, Mail } from "lucide-react";

const polos = [
  {
    abbr: "BH",
    name: "Belo Horizonte",
    tag: "Polo Fundador",
    desc: "O polo central da Temporada 1. BH reúne a maior concentração de atletas e quadras parceiras, com jogos semanais ativos e comunidade consolidada.",
    highlights: [
      "Maior volume de partidas semanais",
      "Quadras distribuídas por diferentes regiões",
      "Comunidade ativa desde o início da temporada",
    ],
    courts: ["Arena BH Central", "Quadras Norte BH", "Complexo Esportivo Sul"],
    color: "border-ur-gold/40",
    bg: "from-ur-gold/8 to-transparent",
    textColor: "text-ur-gold",
  },
  {
    abbr: "BE",
    name: "Betim",
    tag: "Polo Ativo",
    desc: "Com identidade própria e crescimento constante, Betim é um dos pilares da Temporada 1. Engajamento forte e atletas comprometidos com a evolução do polo.",
    highlights: [
      "Crescimento consistente de novos atletas",
      "Forte identidade comunitária",
      "Jogos organizados com frequência semanal",
    ],
    courts: ["Arena Betim Sul", "Complexo Arena Betim", "Quadras Betim Norte"],
    color: "border-ur-sand/30",
    bg: "from-ur-sand/5 to-transparent",
    textColor: "text-ur-sand",
  },
  {
    abbr: "CT",
    name: "Contagem",
    tag: "Polo Ativo",
    desc: "Tradição esportiva e base sólida de atletas. Contagem representa um polo com histórico no esporte de praia e presença forte no ecossistema UR.",
    highlights: [
      "Tradição no esporte de praia da região",
      "Base sólida de atletas experientes",
      "Polo ativo com calendário próprio na temporada",
    ],
    courts: ["Arena Contagem Central", "Quadras Esportivas Contagem", "Complexo Oeste CT"],
    color: "border-white/15",
    bg: "from-white/4 to-transparent",
    textColor: "text-ur-white",
  },
];

const partnerCourts = [
  { name: "Arena Central BH", polo: "BH", type: "Vôlei de Praia · Futevôlei", address: "Endereço a confirmar" },
  { name: "Complexo Sul Betim", polo: "Betim", type: "Vôlei de Praia", address: "Endereço a confirmar" },
  { name: "Quadras Norte BH", polo: "BH", type: "Vôlei de Praia · Beach Tennis", address: "Endereço a confirmar" },
  { name: "Arena Contagem Central", polo: "Contagem", type: "Futevôlei · Vôlei de Praia", address: "Endereço a confirmar" },
  { name: "Complexo Betim Arena", polo: "Betim", type: "Vôlei de Praia · Futevôlei", address: "Endereço a confirmar" },
  { name: "Espaço Esportivo CT Oeste", polo: "Contagem", type: "Vôlei de Praia", address: "Endereço a confirmar" },
];

export default function PolosQuadrasPage() {
  return (
    <div className="bg-ur-black text-ur-white min-h-dvh">
      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center pt-20 overflow-hidden">



        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-ur-gold/10 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2 h-2 rounded-full bg-ur-gold animate-pulse" />
              <span className="section-label tracking-[0.3em]">Ultimate Rivals · Infraestrutura</span>
            </div>

            <h1 className="font-display font-black uppercase leading-none mb-6">
              <span className="block text-[clamp(2.5rem,6vw,5.5rem)] text-ur-white">A QUADRA É</span>
              <span className="block text-[clamp(2.5rem,6vw,5.5rem)] text-ur-sand">ONDE A COMUNIDADE</span>
              <span className="block text-[clamp(2.5rem,6vw,5.5rem)] text-gold-gradient">ACONTECE.</span>
            </h1>

            <p className="text-ur-sand text-base sm:text-lg leading-relaxed mb-4 max-w-2xl font-body">
              Três polos. Múltiplas quadras. Uma comunidade inteira que se encontra, joga e cresce junto. Os polos são a espinha dorsal do ecossistema Ultimate Rivals.
            </p>
            <p className="text-ur-muted text-sm leading-relaxed mb-10 max-w-xl font-body">
              BH, Betim e Contagem têm o mesmo peso, a mesma importância e o mesmo compromisso dentro da Temporada 1.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/cadastro" className="btn-primary">
                Escolher meu polo
                <ArrowRight size={16} />
              </Link>
              <Link href="/temporada" className="btn-secondary">
                <Calendar size={14} />
                Ver a temporada
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3 POLOS */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Onde Você Joga</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">OS TRÊS POLOS</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand mt-4 max-w-xl font-body text-sm leading-relaxed">
              Cada polo tem presença igualitária na Temporada 1. Ao se cadastrar, você escolhe seu polo de referência — e representa essa comunidade ao longo de toda a jornada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {polos.map((polo) => (
              <div
                key={polo.name}
                className={`rounded-sm p-8 bg-gradient-to-br ${polo.bg} border ${polo.color} hover:shadow-card-hover transition-all duration-300 group`}
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20 group-hover:opacity-50 transition-all" />
                <div className="absolute top-4 right-4">
                  <MapPin size={16} className="text-ur-gold/30" />
                </div>

                <div className="mb-6">
                  <span className={`font-display font-black text-6xl leading-none ${polo.textColor} opacity-20 select-none`}>
                    {polo.abbr}
                  </span>
                </div>

                <div className="mb-3">
                  <span className="chip-gold text-xs">{polo.tag}</span>
                </div>

                <h3 className="font-display font-black text-2xl uppercase text-ur-white mb-3">{polo.name}</h3>
                <p className="text-ur-sand text-sm leading-relaxed font-body mb-6">{polo.desc}</p>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {polo.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-2">
                      <CheckCircle size={12} className="text-ur-gold/60 shrink-0 mt-0.5" />
                      <span className="text-ur-muted text-xs font-body leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUADRAS PARCEIRAS */}
      <section className="py-24 bg-ur-graphite/30 relative overflow-hidden">

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-14">
            <span className="section-label block mb-3">Onde As Partidas Acontecem</span>
            <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">QUADRAS<br />PARCEIRAS</h2>
            <div className="divider-gold" />
            <p className="text-ur-sand mt-4 max-w-xl font-body text-sm leading-relaxed">
              As quadras parceiras são os espaços onde os jogos do UR Play acontecem. Endereços e disponibilidades são confirmados diretamente na plataforma.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {partnerCourts.map((court) => (
              <div key={court.name} className="bg-card rounded-sm p-6 hover:shadow-card-hover transition-all group">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-9 h-9 bg-ur-gold/10 rounded-sm flex items-center justify-center group-hover:bg-ur-gold/20 transition-all">
                    <Building2 size={16} className="text-ur-gold" />
                  </div>
                  <span className="chip-sand text-xs">{court.polo}</span>
                </div>
                <h3 className="font-display font-bold text-base uppercase text-ur-white mb-1">{court.name}</h3>
                <p className="text-ur-muted text-xs mb-3 font-body">{court.type}</p>
                <div className="flex items-center gap-2 text-ur-muted text-xs">
                  <MapPin size={11} />
                  <span className="font-body italic">{court.address}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-card rounded-sm p-5 border-l-2 border-l-ur-gold/20">
            <p className="text-ur-muted text-sm font-body">
              <span className="text-ur-sand font-semibold">Nota:</span> Os endereços das quadras parceiras serão confirmados na plataforma oficial. As informações acima são ilustrativas da estrutura prevista para a Temporada 1.
            </p>
          </div>
        </div>
      </section>

      {/* SEJA UM POLO PARCEIRO */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label block mb-3">Para Donos de Quadra</span>
              <h2 className="section-heading text-[clamp(2rem,5vw,3.5rem)] mb-4">SEJA UM<br />POLO PARCEIRO</h2>
              <div className="divider-gold mb-6" />
              <p className="text-ur-sand text-base leading-relaxed mb-6 font-body">
                Se você tem uma quadra de vôlei de praia, futevôlei ou beach tennis na Grande BH, pode se tornar um polo parceiro do Ultimate Rivals. Sua quadra passa a sediar jogos, receber atletas e fazer parte do ecossistema.
              </p>
              <p className="text-ur-sand text-base leading-relaxed mb-8 font-body">
                O programa de polo parceiro está em crescimento. Interessados podem entrar em contato para conhecer as condições de participação.
              </p>
              <div className="space-y-3">
                {[
                  "Sua quadra aparece no mapa de polos do UR",
                  "Atletas cadastrados jogam na sua estrutura",
                  "Visibilidade para a comunidade do ecossistema",
                  "Condições discutidas diretamente com a equipe UR",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-ur-gold shrink-0" />
                    <span className="text-ur-sand text-sm font-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card-gold rounded-sm p-8 relative">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ur-gold/50 to-transparent" />
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-ur-gold/15 border border-ur-gold/30 rounded-sm flex items-center justify-center">
                  <Building2 size={26} className="text-ur-gold" />
                </div>
                <div>
                  <span className="font-display font-black text-2xl uppercase text-ur-white">Polo Parceiro</span>
                  <p className="text-ur-muted text-xs mt-1">Programa UR · Temporada 1</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { icon: Users, label: "Acesso a atletas", desc: "Sua quadra conectada com atletas cadastrados no ecossistema." },
                  { icon: Calendar, label: "Calendário ativo", desc: "Jogos regulares organizados pela plataforma UR." },
                  { icon: MapPin, label: "Visibilidade no mapa", desc: "Sua quadra no mapa de polos visível para toda a comunidade." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-ur-gold/10 rounded-sm flex items-center justify-center shrink-0">
                        <Icon size={14} className="text-ur-gold" />
                      </div>
                      <div>
                        <span className="font-display font-semibold text-sm uppercase text-ur-white block">{item.label}</span>
                        <span className="text-ur-muted text-xs font-body">{item.desc}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href="/cadastro"
                className="btn-primary w-full justify-center"
              >
                <Mail size={14} />
                Quero ser polo parceiro
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">


        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label block mb-4">Escolha seu polo</span>
          <h2 className="section-heading text-[clamp(2.5rem,6vw,4.5rem)] mb-6">
            A QUADRA ESPERA.<br />
            <span className="text-gold-gradient">A TEMPORADA TAMBÉM.</span>
          </h2>
          <p className="text-ur-sand text-base leading-relaxed mb-10 max-w-xl mx-auto font-body">
            Cadastre-se, escolha seu polo — BH, Betim ou Contagem — e comece a representar sua comunidade na Temporada 1.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cadastro" className="btn-primary">
              Escolher meu polo
              <ArrowRight size={16} />
            </Link>
            <Link href="/temporada" className="btn-secondary">
              Ver a temporada
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

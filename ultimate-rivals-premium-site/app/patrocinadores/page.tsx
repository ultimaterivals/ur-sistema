import Link from "next/link";
import { ArrowRight, Globe, Users, Camera, TrendingUp, Mail } from "lucide-react";

const tiers = [
  {
    name: "Apoiador",
    desc: "Presença nas comunicações do ecossistema e nas redes sociais do UR.",
    features: [
      "Logo nas peças de comunicação digital",
      "Menção nas transmissões ao vivo",
      "Presença no site UR",
    ],
  },
  {
    name: "Parceiro",
    desc: "Integração mais profunda com o ecossistema, polos e evento de temporada.",
    features: [
      "Tudo do nível Apoiador",
      "Visibilidade nas quadras dos polos",
      "Participação nos eventos da temporada",
      "Conteúdo co-criado nas mídias do UR",
    ],
    featured: true,
  },
  {
    name: "Master",
    desc: "Parceria estratégica com presença em toda a cadeia — do UR Play ao UR Legends.",
    features: [
      "Tudo do nível Parceiro",
      "Naming rights em ação ou evento da temporada",
      "Destaque exclusivo no UR Legends",
      "Relacionamento direto com a comunidade",
    ],
  },
];

const reasons = [
  {
    icon: Users,
    title: "Comunidade engajada",
    desc: "Atletas, famílias e apoiadores que acompanham ativamente a temporada em seus polos.",
  },
  {
    icon: Camera,
    title: "Produção de conteúdo",
    desc: "Transmissões ao vivo, fotos e vídeos dos eventos geram visibilidade orgânica e consistente.",
  },
  {
    icon: Globe,
    title: "Expansão de polos",
    desc: "O UR está crescendo. Parceiros constroem presença desde o início da jornada.",
  },
  {
    icon: TrendingUp,
    title: "Missão alinhada",
    desc: "Apoiar o esporte amador é um posicionamento genuíno e de alto impacto junto ao público.",
  },
];

export default function PatrocinadoresPage() {
  return (
    <div className="bg-ur-black min-h-dvh">
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute inset-0 court-lines opacity-20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="section-label block mb-4">Parcerias</span>
          <h1 className="font-display font-black uppercase text-[clamp(2.5rem,7vw,5.5rem)] leading-none text-ur-white mb-6">
            CONSTRUINDO O ESPORTE<br />
            <span className="text-gold-gradient">AMADOR JUNTOS.</span>
          </h1>
          <p className="text-ur-sand text-lg leading-relaxed max-w-2xl mx-auto font-body">
            O Ultimate Rivals conecta marcas e empresas com uma comunidade apaixonada por esportes de praia em Minas Gerais. Parceiros do UR fazem parte da construção de algo maior.
          </p>
        </div>
      </section>

      {/* Why partner */}
      <section className="py-20 bg-ur-graphite">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Por que ser parceiro</p>
            <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.5rem)] text-ur-white">
              UMA COMUNIDADE <span className="text-gold-gradient">QUE CRESCE</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-card rounded-lg p-6 text-center">
                <div className="w-10 h-10 mx-auto mb-4 rounded-sm bg-ur-gold/10 border border-ur-gold/20 flex items-center justify-center">
                  <r.icon className="text-ur-gold" size={18} />
                </div>
                <h3 className="font-display font-bold uppercase text-ur-white mb-2">{r.title}</h3>
                <p className="text-ur-sand text-sm font-body leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-ur-muted text-xs mt-6 font-body">*Dados de alcance são ilustrativos e baseados em projeções de crescimento.</p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="section-label mb-3">Formatos de parceria</p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.5rem)] text-ur-white">
            ESCOLHA SEU <span className="text-gold-gradient">NÍVEL DE PRESENÇA</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-lg p-8 ${t.featured ? "bg-card-gold shadow-gold-glow-sm" : "bg-card"}`}
            >
              {t.featured && (
                <span className="chip-gold text-[10px] mb-4 inline-block">Mais escolhido</span>
              )}
              <h3 className="font-display font-black uppercase text-2xl text-ur-white mb-3">{t.name}</h3>
              <p className="text-ur-sand text-sm leading-relaxed font-body mb-6">{t.desc}</p>
              <ul className="space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ur-sand font-body">
                    <span className="text-ur-gold mt-1 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-ur-muted text-xs mt-4 font-body">Condições específicas de cada nível disponíveis no contato comercial.</p>
      </section>

      {/* Current partners placeholder */}
      <section className="py-20 bg-ur-graphite">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Parceiros da Temporada 1</p>
            <h2 className="font-display font-black uppercase text-2xl text-ur-white">
              QUEM FAZ PARTE DO MOVIMENTO
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-lg p-8 flex items-center justify-center aspect-video">
                <span className="text-ur-muted text-sm font-display uppercase tracking-wider">Parceiro UR</span>
              </div>
            ))}
          </div>
          <p className="text-center text-ur-muted text-sm font-body mt-6">
            Sua marca pode estar aqui. Entre em contato.
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-arena-gradient" />
        <div className="absolute inset-0 court-lines opacity-10" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.5rem)] text-ur-white mb-4">
            QUERO SER <span className="text-gold-gradient">PARCEIRO</span>
          </h2>
          <p className="text-ur-sand font-body leading-relaxed mb-8">
            Entre em contato e vamos conversar sobre como sua marca pode fazer parte da história do UR.
          </p>
          <a
            href="mailto:contato@ultimaterivals.com.br"
            className="btn-primary text-base px-8 py-4 inline-flex"
          >
            <Mail size={18} />
            Entrar em contato
          </a>
        </div>
      </section>
    </div>
  );
}

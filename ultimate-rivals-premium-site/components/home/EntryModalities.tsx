import Link from "next/link";
import { User, Users, Shield, ArrowRight } from "lucide-react";

const modalities = [
  {
    icon: User,
    title: "Atleta Individual",
    desc: "Entre pelo UR Play, jogue, seja observado e encontre seu caminho dentro da temporada.",
    tags: ["UR Play", "Ranking Individual", "Visibilidade"],
    href: "/atletas",
  },
  {
    icon: Users,
    title: "Dupla",
    desc: "Crie química, ritmo, ranking de formação e rivalidade saudável dentro dos polos.",
    tags: ["Ranking de Duplas", "UR Sprint", "Polo"],
    href: "/equipes-duplas",
    featured: true,
  },
  {
    icon: Shield,
    title: "Quarteto / Equipe",
    desc: "Construa campanha, identidade, comunicação e trajetória competitiva completa.",
    tags: ["Ranking de Equipes", "Identidade", "Trajetória"],
    href: "/equipes-duplas",
  },
];

export default function EntryModalities() {
  return (
    <section className="py-14 sm:py-24 bg-ur-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">Formas de Entrar</p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.5rem)] text-ur-white leading-none mb-4">
            VOCÊ NÃO PRECISA TER<br />
            <span className="text-gold-gradient">EQUIPE PARA COMEÇAR.</span>
          </h2>
          <p className="text-ur-sand text-base font-body max-w-xl mx-auto">
            O Ultimate Rivals abre caminho para atletas individuais, duplas e equipes em diferentes momentos de evolução.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {modalities.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.title}
                className={`rounded-sm p-7 sm:p-8 border transition-all duration-300 group ${
                  m.featured
                    ? "bg-card-gold border-ur-gold/30 shadow-gold-glow hover:shadow-card-hover"
                    : "bg-card border-white/5 hover:border-ur-gold/20 hover:shadow-card-hover"
                }`}
              >
                {m.featured && (
                  <div className="mb-4">
                    <span className="chip-gold text-[10px]">Mais popular</span>
                  </div>
                )}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-sm bg-ur-gold/10 border border-ur-gold/20 flex items-center justify-center mb-5 group-hover:bg-ur-gold/15 transition-colors duration-200">
                  <Icon size={22} className="text-ur-gold" />
                </div>
                <h3 className="font-display font-black uppercase text-xl sm:text-2xl text-ur-white mb-3">{m.title}</h3>
                <p className="text-ur-sand text-sm sm:text-base leading-relaxed font-body mb-5">{m.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {m.tags.map((tag) => (
                    <span key={tag} className="chip-sand text-[10px] py-0.5">{tag}</span>
                  ))}
                </div>
                <Link
                  href={m.href}
                  className="inline-flex items-center gap-1.5 text-ur-gold font-display font-semibold text-xs uppercase tracking-wider hover:gap-2.5 transition-all duration-200 cursor-pointer"
                >
                  Saiba mais <ArrowRight size={13} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link href="/cadastro" className="btn-primary">
            Começar pelo UR Play
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

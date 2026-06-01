import ScrollReveal from "@/components/ui/ScrollReveal";

const problems = [
  "Sem ranking público",
  "Sem histórico de performance",
  "Sem calendário contínuo",
  "Sem visibilidade para atletas",
  "Sem critério por nível",
  "Sem métricas para parceiros",
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-ur-graphite relative overflow-hidden">
      <div className="absolute inset-0 court-lines opacity-20" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">O problema</p>
            <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.5rem)] text-ur-white leading-none mb-6">
              O ESPORTE AMADOR<br />
              <span className="text-gold-gradient">MERECE MAIS.</span>
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-ur-sand text-base leading-relaxed font-body mb-6">
              Por muito tempo, atletas amadores jogaram eventos soltos, sem ranking claro, sem histórico, sem calendário contínuo, sem mídia e sem critérios consistentes de evolução.
            </p>
            <p className="text-ur-gold font-display font-semibold text-sm uppercase tracking-wider">
              O Ultimate Rivals transforma jogos soltos em uma jornada contínua.
            </p>
          </div>

          <ScrollReveal>
            <div className="grid grid-cols-2 gap-3">
              {problems.map((p) => (
                <div
                  key={p}
                  className="bg-card rounded-sm p-4 border border-white/5 flex items-start gap-3 group hover:border-ur-gold/20 transition-all duration-300"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-ur-muted mt-1.5 flex-shrink-0 group-hover:bg-ur-gold transition-colors duration-300" />
                  <span className="text-ur-muted text-sm font-body group-hover:text-ur-sand transition-colors duration-300">{p}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

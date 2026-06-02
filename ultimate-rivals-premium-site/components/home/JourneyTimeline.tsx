import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    id: "ur-play",
    label: "UR Play",
    number: "01",
    color: "#5A8A5A",
    desc: "Entrada oficial. Cadastro, jogos semanais, observação, nivelamento e primeiro histórico.",
    tags: ["Individual", "Dupla", "Quarteto"],
  },
  {
    id: "ur-sprint",
    label: "UR Sprint",
    number: "02",
    color: "#D4A437",
    desc: "Primeira disputa oficial dos polos. Pontos no ranking, visibilidade e construção de trajetória.",
    tags: ["Ranking", "Polos", "Classificação"],
  },
  {
    id: "ur-series",
    label: "UR Series",
    number: "03",
    color: "#F0C060",
    desc: "Classificados dos polos se encontram em uma disputa entre comunidades, com equipes e duplas disputando por nível.",
    tags: ["Interpolos", "N1/N2/N3"],
  },
  {
    id: "ur-legends",
    label: "UR Legends",
    number: "04",
    color: "#FFD700",
    desc: "Evento principal da temporada. Atletas de destaque representam seus polos no maior espetáculo da jornada.",
    tags: ["Espetáculo", "Destaque", "Polo"],
  },
];

export default function JourneyTimeline() {
  return (
    <section className="py-14 sm:py-24 bg-ur-graphite">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="section-label mb-4">A Jornada</p>
          <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.5rem)] text-ur-white leading-none mb-4">
            DO PRIMEIRO JOGO<br />
            <span className="text-gold-gradient">AO ESPETÁCULO.</span>
          </h2>
          <p className="text-ur-sand text-base font-body max-w-xl mx-auto">
            Você começa jogando. A temporada transforma sua participação em trajetória.
          </p>
        </div>

        {/* Timeline */}
        <ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-ur-gold/20 to-transparent hidden lg:block" />

          {steps.map((step, i) => (
            <div key={step.id} className="relative">
              <div className="bg-card-gold rounded-sm p-6 border border-ur-gold/15 hover:border-ur-gold/40 transition-all duration-300 group h-full">
                {/* Number */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="font-display font-black text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                  {i < steps.length - 1 && (
                    <ArrowRight size={14} className="text-ur-gold opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
                  )}
                </div>

                <p className="font-display font-black uppercase text-lg text-ur-white mb-3 group-hover:text-ur-gold transition-colors duration-200">
                  {step.label}
                </p>
                <p className="text-ur-sand text-sm leading-relaxed font-body mb-4">{step.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {step.tags.map((tag) => (
                    <span key={tag} className="chip-sand text-[10px] py-0.5">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { Star } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

const cards = [
  { title: "Representar o Polo", desc: "Você não vai apenas como atleta. Vai como símbolo da comunidade que construiu." },
  { title: "Ser Destaque", desc: "Sua trajetória na temporada foi notada. O UR Legends é o reconhecimento disso." },
  { title: "Viver o Espetáculo", desc: "A atmosfera de arena, o público, a intensidade — tudo que o esporte merece." },
  { title: "Pontuar para o Polo", desc: "Cada performance no UR Legends movimenta o Ranking dos Polos da temporada." },
];

export default function LegendsSection() {
  return (
    <section className="py-14 sm:py-24 bg-ur-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* @asset-slot: legends/event-hero — replace with event photo when available */}
        <ImagePlaceholder
          label="UR Legends · Evento"
          aspectRatio="aspect-[21/9]"
          className="rounded-sm mb-16 border-ur-gold/10"
        />

        <div className="text-center mb-16">
          <Star size={24} className="text-ur-gold mx-auto mb-4 opacity-80" />
          <p className="section-label mb-4">UR Legends</p>
          <h2 className="font-display font-black uppercase text-[clamp(1.8rem,6vw,5rem)] text-ur-white leading-none mb-4">
            O EVENTO QUE TODO<br />
            <span className="text-gold-gradient">ATLETA QUER ALCANÇAR.</span>
          </h2>
          <p className="text-ur-sand text-base font-body max-w-xl mx-auto mb-4">
            Atletas de destaque representam seus polos no maior espetáculo da temporada.
          </p>
          <p className="text-ur-muted text-sm font-body max-w-md mx-auto">
            Estar no UR Legends significa que sua trajetória chamou atenção.
          </p>
        </div>

        <ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-card-gold rounded-sm p-6 border border-ur-gold/15 hover:border-ur-gold/40 hover:shadow-gold-glow transition-all duration-300 group"
              >
                <div className="w-6 h-6 rounded-sm bg-ur-gold/15 border border-ur-gold/30 flex items-center justify-center mb-4">
                  <Star size={12} className="text-ur-gold" />
                </div>
                <h3 className="font-display font-bold text-sm uppercase text-ur-white mb-2 group-hover:text-ur-gold transition-colors duration-200">{card.title}</h3>
                <p className="text-ur-muted text-xs font-body leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="text-center bg-card border border-ur-gold/10 rounded-sm p-6 max-w-lg mx-auto">
          <p className="text-ur-muted text-xs font-body leading-relaxed">
            <span className="text-ur-gold font-display font-bold uppercase tracking-wider text-[10px]">Regra · </span>
            A pontuação especial do UR Legends movimenta apenas o Ranking dos Polos.
          </p>
        </div>
      </div>
    </section>
  );
}

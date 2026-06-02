import Link from "next/link";
import { ArrowRight } from "lucide-react";

const pilares = [
  { title: "Mentalidade Hunter", desc: "Disciplina, foco e postura competitiva como hábito diário." },
  { title: "Leitura de Jogo", desc: "Antecipação, posicionamento e tomada de decisão em quadra." },
  { title: "Desenvolvimento do Atleta", desc: "Evolução técnica, física e comportamental com critério." },
  { title: "Equipes Hunters", desc: "Como construir times com identidade, química e propósito." },
  { title: "Evolução Contínua", desc: "Métricas claras, feedback constante e ciclos de melhoria." },
  { title: "Aplicação na Temporada", desc: "Como a metodologia conecta ao UR Play e à jornada." },
];

export default function HunterSection() {
  return (
    <section className="py-24 bg-ur-graphite">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-4">Metodologia Hunter</p>
            <h2 className="font-display font-black uppercase text-[clamp(2rem,4.5vw,3rem)] text-ur-white leading-none mb-6">
              HUNTER NÃO É OLHEIRO.<br />
              <span className="text-gold-gradient">É MENTALIDADE.</span>
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-ur-sand text-base leading-relaxed font-body mb-6">
              A Metodologia Hunter desenvolve disciplina, leitura de jogo, postura, evolução contínua e mentalidade competitiva.
            </p>
            <div className="bg-ur-graphite-2 border border-ur-gold/10 rounded-lg p-4 text-xs text-ur-muted font-body leading-relaxed mb-8">
              A Metodologia Hunter não promete carreira profissional. Ela cria base para atletas evoluírem com direção, critério e mentalidade.
            </div>
            <Link href="/metodologia-hunter" className="btn-primary text-sm">
              Conhecer a metodologia
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pilares.map((p, i) => (
              <div
                key={p.title}
                className="bg-card rounded-lg p-5 border border-white/5 hover:border-ur-gold/20 transition-all duration-300 group"
              >
                <div className="w-6 h-6 rounded-sm bg-ur-gold/10 border border-ur-gold/20 flex items-center justify-center mb-3">
                  <span className="font-display font-black text-[10px] text-ur-gold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-display font-bold text-sm uppercase text-ur-white mb-2 group-hover:text-ur-gold transition-colors duration-200">{p.title}</h3>
                <p className="text-ur-muted text-xs font-body leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

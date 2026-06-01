import Link from "next/link";
import { TrendingUp, TrendingDown, Minus, ArrowRight } from "lucide-react";

const topAtletas = [
  { pos: 1, nome: "Carlos M.", polo: "BH", nivel: "N1", pontos: 2840, trend: "up" },
  { pos: 2, nome: "Rafael S.", polo: "BT", nivel: "N1", pontos: 2710, trend: "up" },
  { pos: 3, nome: "Thiago L.", polo: "CG", nivel: "N1", pontos: 2690, trend: "stable" },
  { pos: 4, nome: "Bruno A.", polo: "BH", nivel: "N2", pontos: 2450, trend: "up" },
  { pos: 5, nome: "Pedro V.", polo: "BT", nivel: "N1", pontos: 2380, trend: "down" },
];

const categorias = ["Atletas", "Equipes", "Duplas", "Polos", "Evolução", "Fair Play"];

const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === "up") return <TrendingUp size={12} className="text-green-400" />;
  if (trend === "down") return <TrendingDown size={12} className="text-red-400" />;
  return <Minus size={12} className="text-ur-muted" />;
};

export default function RankingSpectacle() {
  return (
    <section className="py-24 bg-ur-black relative overflow-hidden">
      <div className="absolute inset-0 bg-arena-gradient opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-ur-gold/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <p className="section-label mb-4">Ranking</p>
            <h2 className="font-display font-black uppercase text-[clamp(2rem,5vw,3.5rem)] text-ur-white leading-none mb-6">
              RANKING QUE GERA<br />
              <span className="text-gold-gradient">HISTÓRICO E VISIBILIDADE.</span>
            </h2>
            <div className="divider-gold mb-6" />
            <p className="text-ur-sand text-base leading-relaxed font-body mb-8">
              No Ultimate Rivals, ranking não é só tabela. É critério, narrativa, evolução e reconhecimento. A visibilidade é parte da entrega.
            </p>

            {/* Categorias */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categorias.map((cat, i) => (
                <span key={cat} className={i === 0 ? "chip-gold" : "chip-sand"}>
                  {cat}
                </span>
              ))}
            </div>

            {/* Legends rule */}
            <div className="bg-card-gold rounded-sm p-4 border border-ur-gold/15 text-xs font-body text-ur-sand leading-relaxed">
              <span className="text-ur-gold font-display font-bold uppercase tracking-wider text-[10px]">Regra UR Legends · </span>
              A pontuação especial do UR Legends vale apenas para o Ranking dos Polos. Demais rankings seguem regras próprias.
            </div>

            <div className="mt-8">
              <Link href="/ranking" className="btn-primary text-sm">
                Ver ranking
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Right — ranking panel */}
          <div>
            <div className="bg-card rounded-sm p-6 border border-white/5 shadow-card-premium">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-display font-black text-sm uppercase text-ur-white">Ranking dos Atletas</p>
                  <p className="text-ur-muted text-[10px] font-body mt-0.5">Temporada 1</p>
                </div>
                <span className="chip-gold text-[10px]">N1 · N2 · N3</span>
              </div>

              {/* Top 3 podium */}
              <div className="flex items-end justify-center gap-2 mb-6 h-24">
                {[topAtletas[1], topAtletas[0], topAtletas[2]].map((a, i) => {
                  const heights = ["h-16", "h-24", "h-14"];
                  const podiumPos = [2, 1, 3];
                  return (
                    <div key={a.nome} className={`flex flex-col items-center ${heights[i]}`}>
                      <span className="font-display font-black text-xs text-ur-gold mb-1">{a.nome.split(" ")[0]}</span>
                      <div
                        className={`flex-1 w-14 rounded-t-sm flex items-end justify-center pb-1 ${
                          i === 1 ? "bg-ur-gold/20 border border-ur-gold/30" : "bg-white/5 border border-white/5"
                        }`}
                      >
                        <span className="font-display font-black text-base" style={{ color: i === 1 ? "#D4A437" : "#6B6B74" }}>
                          {podiumPos[i]}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Table */}
              <div className="space-y-2">
                {topAtletas.map((a) => (
                  <div
                    key={a.pos}
                    className="flex items-center gap-3 p-2.5 rounded-sm hover:bg-white/3 transition-colors duration-150 group"
                  >
                    <span className="w-5 font-display font-bold text-xs text-ur-muted text-center">{a.pos}</span>
                    <div className="flex-1">
                      <span className="font-display font-semibold text-sm text-ur-white">{a.nome}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className="chip text-[10px] py-0 px-1.5 border"
                        style={{
                          backgroundColor: `${a.nivel === "N1" ? "#D4A437" : "#F0C060"}15`,
                          borderColor: `${a.nivel === "N1" ? "#D4A437" : "#F0C060"}30`,
                          color: a.nivel === "N1" ? "#D4A437" : "#F0C060",
                        }}
                      >
                        {a.nivel}
                      </span>
                      <span className="chip-sand text-[10px] py-0 px-1.5">{a.polo}</span>
                      <span className="font-display font-bold text-xs text-ur-gold">{a.pontos.toLocaleString()}</span>
                      <TrendIcon trend={a.trend} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

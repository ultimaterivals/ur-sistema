import Link from "next/link";
import { TrendingUp, TrendingDown, Minus, ArrowRight, Star } from "lucide-react";

const topAtletas = [
  { pos: 1, nome: "Carlos Vieira", polo: "BH", nivel: "N1", pontos: 2150, trend: "up", modality: "Quarteto" },
  { pos: 2, nome: "André Lemos", polo: "BT", nivel: "N1", pontos: 1840, trend: "up", modality: "Dupla" },
  { pos: 3, nome: "Diego Faria", polo: "CG", nivel: "N1", pontos: 1720, trend: "stable", modality: "Dupla" },
  { pos: 4, nome: "Marcos Lima", polo: "BH", nivel: "N1", pontos: 1580, trend: "up", modality: "Quarteto" },
  { pos: 5, nome: "Rafael Cunha", polo: "BT", nivel: "N2", pontos: 1430, trend: "down", modality: "Dupla" },
];

const categorias = ["Atletas", "Equipes", "Duplas", "Polos", "Evolução", "Fair Play"];

const levelColors: Record<string, { color: string; bg: string; border: string }> = {
  N1: { color: "#D4A437", bg: "#D4A43715", border: "#D4A43730" },
  N2: { color: "#F0C060", bg: "#F0C06015", border: "#F0C06030" },
  N3: { color: "#C8B99A", bg: "#C8B99A15", border: "#C8B99A30" },
};

const TrendIcon = ({ trend }: { trend: string }) => {
  if (trend === "up") return <TrendingUp size={11} className="text-green-400" />;
  if (trend === "down") return <TrendingDown size={11} className="text-red-400" />;
  return <Minus size={11} className="text-ur-muted" />;
};

const podiumOrder = [topAtletas[1], topAtletas[0], topAtletas[2]];
const podiumHeights = ["h-14", "h-20", "h-12"];
const podiumPositions = [2, 1, 3];
const podiumColors = ["#C8B99A", "#D4A437", "#8B7355"];

export default function RankingSpectacle() {
  return (
    <section className="py-24 bg-ur-black relative overflow-hidden">

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
            <p className="text-ur-sand text-base leading-relaxed font-body mb-4">
              Cada ponto registra trajetória. No Ultimate Rivals, ranking não é só tabela — é critério, narrativa, evolução e reconhecimento.
            </p>
            <p className="text-ur-sand text-base leading-relaxed font-body mb-8">
              O atleta precisa jogar, aparecer, evoluir e ser lembrado. A visibilidade é parte da entrega.
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
            <div className="bg-card-gold rounded-sm p-4 border border-ur-gold/15 mb-8">
              <div className="flex items-start gap-2.5">
                <Star size={13} className="text-ur-gold shrink-0 mt-0.5" />
                <p className="text-ur-sand text-xs font-body leading-relaxed">
                  <span className="text-ur-gold font-display font-bold uppercase tracking-wider text-[10px]">Regra UR Legends · </span>
                  A pontuação especial do UR Legends vale apenas para o Ranking dos Polos. Demais rankings seguem regras próprias.
                </p>
              </div>
            </div>

            <Link href="/ranking" className="btn-primary text-sm">
              Ver ranking completo
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right — ranking panel */}
          <div>
            <div className="bg-card rounded-sm border border-white/5 shadow-card-premium overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <div>
                  <p className="font-display font-black text-sm uppercase text-ur-white tracking-wide">
                    Ranking dos Atletas
                  </p>
                  <p className="text-ur-muted text-[10px] font-body mt-0.5">Temporada 1</p>
                </div>
                <div className="flex gap-1.5">
                  {["N1", "N2", "N3"].map((n) => (
                    <span
                      key={n}
                      className="font-display font-bold text-[9px] uppercase px-1.5 py-0.5 rounded-sm border"
                      style={{
                        color: levelColors[n].color,
                        backgroundColor: levelColors[n].bg,
                        borderColor: levelColors[n].border,
                      }}
                    >
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* Podium bars */}
              <div className="px-5 pt-5 pb-3">
                <p className="text-ur-muted text-[10px] font-display uppercase tracking-wider mb-3">
                  Pódio Atual
                </p>
                <div className="flex items-end justify-center gap-3 h-24">
                  {podiumOrder.map((a, i) => {
                    const isFirst = podiumPositions[i] === 1;
                    return (
                      <div key={a.nome} className={`flex flex-col items-center ${podiumHeights[i]} flex-1 max-w-[80px]`}>
                        <span
                          className="font-display font-black text-[11px] mb-1 truncate max-w-full px-1"
                          style={{ color: podiumColors[i] }}
                        >
                          {a.nome.split(" ")[0]}
                        </span>
                        <div
                          className="flex-1 w-full rounded-t-sm flex items-center justify-center border"
                          style={{
                            backgroundColor: isFirst ? "#D4A43720" : "#FFFFFF08",
                            borderColor: isFirst ? "#D4A43740" : "#FFFFFF10",
                          }}
                        >
                          <span
                            className="font-display font-black text-lg"
                            style={{ color: podiumColors[i] }}
                          >
                            {podiumPositions[i]}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div className="mx-5 h-px bg-white/5" />

              {/* Table rows */}
              <div className="px-5 py-3 space-y-1">
                {topAtletas.map((a) => {
                  const lvl = levelColors[a.nivel];
                  return (
                    <div
                      key={a.pos}
                      className="flex items-center gap-2.5 px-2 py-2 rounded-sm hover:bg-white/3 transition-colors group"
                    >
                      <TrendIcon trend={a.trend} />
                      <span
                        className={`w-4 font-display font-bold text-xs text-center tabular-nums ${
                          a.pos <= 3 ? "text-ur-gold" : "text-ur-muted"
                        }`}
                      >
                        {a.pos}
                      </span>
                      <span className="flex-1 font-display font-semibold text-sm text-ur-white group-hover:text-ur-gold transition-colors duration-150 truncate">
                        {a.nome}
                      </span>
                      <span className="chip-sand text-[9px] py-0 px-1.5">{a.polo}</span>
                      <span
                        className="font-display font-bold text-[10px] px-1.5 py-0.5 rounded-sm border"
                        style={{ color: lvl.color, backgroundColor: lvl.bg, borderColor: lvl.border }}
                      >
                        {a.nivel}
                      </span>
                      <span className="font-display font-bold text-xs text-ur-gold tabular-nums">
                        {a.pontos.toLocaleString("pt-BR")}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-white/5 text-center">
                <Link
                  href="/ranking"
                  className="text-ur-gold font-display font-semibold text-xs uppercase tracking-wider hover:text-ur-gold-light transition-colors duration-150"
                >
                  Ver ranking completo →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

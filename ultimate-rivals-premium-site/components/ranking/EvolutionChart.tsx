interface ChartPoint {
  rodada: number;
  pontos: number;
}

interface AthleteEvolution {
  name: string;
  color: string;
  data: ChartPoint[];
}

const defaultAthletes: AthleteEvolution[] = [
  {
    name: "Carlos Vieira",
    color: "#D4A437",
    data: [
      { rodada: 1, pontos: 820 },
      { rodada: 2, pontos: 1100 },
      { rodada: 3, pontos: 1380 },
      { rodada: 4, pontos: 1620 },
      { rodada: 5, pontos: 1900 },
      { rodada: 6, pontos: 2150 },
    ],
  },
  {
    name: "André Lemos",
    color: "#C8B99A",
    data: [
      { rodada: 1, pontos: 760 },
      { rodada: 2, pontos: 980 },
      { rodada: 3, pontos: 1220 },
      { rodada: 4, pontos: 1490 },
      { rodada: 5, pontos: 1700 },
      { rodada: 6, pontos: 1840 },
    ],
  },
  {
    name: "Diego Faria",
    color: "#7A7A85",
    data: [
      { rodada: 1, pontos: 710 },
      { rodada: 2, pontos: 900 },
      { rodada: 3, pontos: 1100 },
      { rodada: 4, pontos: 1340 },
      { rodada: 5, pontos: 1560 },
      { rodada: 6, pontos: 1720 },
    ],
  },
];

const W = 600;
const H = 220;
const PAD = { top: 24, right: 24, bottom: 44, left: 52 };
const INNER_W = W - PAD.left - PAD.right;
const INNER_H = H - PAD.top - PAD.bottom;

function toPath(data: ChartPoint[], minP: number, rangeP: number): string {
  const xStep = INNER_W / (data.length - 1);
  return data
    .map((pt, i) => {
      const x = PAD.left + i * xStep;
      const y = PAD.top + INNER_H - ((pt.pontos - minP) / rangeP) * INNER_H;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
}

function toAreaPath(data: ChartPoint[], minP: number, rangeP: number): string {
  const linePath = toPath(data, minP, rangeP);
  const xStep = INNER_W / (data.length - 1);
  const lastX = (PAD.left + (data.length - 1) * xStep).toFixed(1);
  const baseY = (PAD.top + INNER_H).toFixed(1);
  return `${linePath} L ${lastX} ${baseY} L ${PAD.left} ${baseY} Z`;
}

export default function EvolutionChart({
  athletes = defaultAthletes,
}: {
  athletes?: AthleteEvolution[];
}) {
  const allPts = athletes.flatMap((a) => a.data.map((d) => d.pontos));
  const minPts = Math.max(0, Math.min(...allPts) - 150);
  const maxPts = Math.max(...allPts) + 150;
  const rangeP = maxPts - minPts;

  const gridCount = 4;
  const gridLines = Array.from({ length: gridCount + 1 }, (_, i) => {
    const val = minPts + (rangeP / gridCount) * i;
    const y = PAD.top + INNER_H - ((val - minPts) / rangeP) * INNER_H;
    return { val: Math.round(val), y: y.toFixed(1) };
  });

  const xStep = INNER_W / 5;
  const rodadas = Array.from({ length: 6 }, (_, i) => ({
    label: `R${i + 1}`,
    x: (PAD.left + i * xStep).toFixed(1),
  }));

  return (
    <div className="bg-card rounded-sm p-5 border border-white/5">
      <div className="flex items-start justify-between mb-4 gap-2">
        <div>
          <p className="font-display font-bold text-sm uppercase text-ur-white tracking-wide">
            Evolução de Pontos
          </p>
          <p className="text-ur-muted text-[10px] font-body mt-0.5">Temporada 1 · Rodadas 1–6</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {athletes.map((a, idx) => (
            <div key={idx} className="flex items-center gap-1.5 shrink-0">
              <span
                className="w-6 h-[2px] rounded-full inline-block"
                style={{ backgroundColor: a.color }}
              />
              <span className="text-[10px] font-body text-ur-muted">{a.name.split(" ")[0]}</span>
            </div>
          ))}
        </div>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        style={{ height: "auto", maxHeight: 200 }}
        role="img"
        aria-label="Gráfico de evolução de pontos por rodada"
      >
        <defs>
          {athletes.map((a, idx) => (
            <linearGradient key={idx} id={`evo-grad-${idx}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={a.color} stopOpacity="0.18" />
              <stop offset="100%" stopColor={a.color} stopOpacity="0" />
            </linearGradient>
          ))}
        </defs>

        {/* Grid */}
        {gridLines.map(({ val, y }) => (
          <g key={val}>
            <line
              x1={PAD.left}
              y1={y}
              x2={W - PAD.right}
              y2={y}
              stroke="#252528"
              strokeWidth="1"
            />
            <text
              x={PAD.left - 8}
              y={Number(y) + 4}
              textAnchor="end"
              fill="#7A7A85"
              fontSize="9"
              fontFamily="Barlow, sans-serif"
            >
              {val >= 1000 ? `${(val / 1000).toFixed(1)}k` : val}
            </text>
          </g>
        ))}

        {/* X labels */}
        {rodadas.map(({ label, x }) => (
          <text
            key={label}
            x={x}
            y={H - 8}
            textAnchor="middle"
            fill="#7A7A85"
            fontSize="10"
            fontFamily="Barlow, sans-serif"
          >
            {label}
          </text>
        ))}

        {/* Area fills */}
        {athletes.map((a, idx) => (
          <path
            key={`area-${idx}`}
            d={toAreaPath(a.data, minPts, rangeP)}
            fill={`url(#evo-grad-${idx})`}
          />
        ))}

        {/* Lines */}
        {athletes.map((a, idx) => (
          <path
            key={`line-${idx}`}
            d={toPath(a.data, minPts, rangeP)}
            fill="none"
            stroke={a.color}
            strokeWidth={idx === 0 ? "2.5" : "1.5"}
            strokeLinejoin="round"
            strokeLinecap="round"
            opacity={idx === 0 ? 1 : 0.7}
          />
        ))}

        {/* Dots */}
        {athletes.map((a, idx) =>
          a.data.map((pt, i) => {
            const cx = PAD.left + i * xStep;
            const cy = PAD.top + INNER_H - ((pt.pontos - minPts) / rangeP) * INNER_H;
            return (
              <circle
                key={`dot-${idx}-${i}`}
                cx={cx.toFixed(1)}
                cy={cy.toFixed(1)}
                r={idx === 0 ? "3.5" : "2.5"}
                fill={a.color}
                stroke="#141416"
                strokeWidth="2"
                opacity={idx === 0 ? 1 : 0.8}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}

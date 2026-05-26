import { URBadge } from "./URBadge";

interface RankingRow {
  rank: number;
  name: string;
  pole: string;
  level: string;
  points: number;
  variation?: number;
}

interface RankingBroadcastPanelProps {
  title?: string;
  rows: readonly RankingRow[];
  showLive?: boolean;
  className?: string;
}

export function RankingBroadcastPanel({
  title = "RANKING EM FORMAÇÃO",
  rows,
  showLive = true,
  className,
}: RankingBroadcastPanelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-[rgba(212,164,55,0.15)] bg-[#14141A] shadow-[0_8px_40px_rgba(0,0,0,0.5)] ${className ?? ""}`}
    >
      {/* Broadcast texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "url(/season-1/textures/bg-broadcast.svg)", backgroundSize: "cover" }}
      />
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] px-5 py-4">
        <div className="flex items-center gap-3">
          <img alt="Força dos Polos" className="h-5 w-5 opacity-70" loading="lazy" src="/season-1/symbols/forca-dos-polos-line.svg" />
          <h3
            className="text-sm font-bold uppercase tracking-widest text-[#F4F0E6]"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
          >
            {title}
          </h3>
        </div>
        {showLive && (
          <span className="flex items-center gap-1.5 rounded-full border border-[#FF4D4D]/40 bg-[#FF4D4D]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FF4D4D]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4D4D]" />
            Em formação
          </span>
        )}
      </div>
      {/* Rows */}
      <div className="relative z-10 divide-y divide-[rgba(255,255,255,0.06)]">
        {rows.map((row) => (
          <div key={row.rank} className="flex items-center gap-4 px-5 py-3.5 hover:bg-[rgba(212,164,55,0.04)] transition-colors">
            {/* Rank badge */}
            <div className="shrink-0">
              {row.rank <= 3 ? (
                <URBadge type={`n${row.rank}` as "n1" | "n2" | "n3"} size={32} />
              ) : (
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] text-xs font-bold text-[#8A8A93]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {row.rank}
                </div>
              )}
            </div>
            {/* Name + pole */}
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold uppercase leading-tight text-[#F4F0E6] truncate" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}>
                {row.name}
              </p>
              <p className="text-[11px] text-[#8A8A93] mt-0.5" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
                {row.pole} · {row.level}
              </p>
            </div>
            {/* Points */}
            <div className="shrink-0 text-right">
              <p
                className="text-sm font-bold text-[#D4A437]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}
              >
                {row.points > 0 ? row.points.toLocaleString("pt-BR") : "—"}
              </p>
              <p className="text-[10px] text-[#8A8A93]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>pts</p>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="relative z-10 border-t border-[rgba(255,255,255,0.06)] px-5 py-3">
        <p className="text-center text-[11px] text-[#8A8A93]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
          Ranking atualizado conforme participação confirmada
        </p>
      </div>
    </div>
  );
}

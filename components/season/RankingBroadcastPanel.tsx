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

function VariationBadge({ v }: { v: number }) {
  if (v > 0)
    return (
      <span
        className="text-[10px] font-bold text-[#22c55e]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        +{v}
      </span>
    );
  if (v < 0)
    return (
      <span
        className="text-[10px] font-bold text-[#ef4444]"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        {v}
      </span>
    );
  return (
    <span
      className="text-[10px] text-[#8A8A93]"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      —
    </span>
  );
}

const levelColor: Record<string, string> = {
  N1: "rgba(212,164,55,0.15)",
  N2: "rgba(255,255,255,0.08)",
  N3: "rgba(255,255,255,0.05)",
};

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
        style={{
          backgroundImage: "url(/season-1/textures/bg-broadcast.svg)",
          backgroundSize: "cover",
        }}
      />

      {/* Header — broadcast style */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-[rgba(255,255,255,0.08)] px-4 py-4 sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <img
            alt="Força dos Polos"
            className="h-6 w-6 opacity-80"
            loading="lazy"
            src="/season-1/symbols/forca-dos-polos-line.svg"
          />
          <h3
            className="text-sm font-bold uppercase tracking-widest text-[#F4F0E6] sm:text-base"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.1em" }}
          >
            {title}
          </h3>
        </div>
        {showLive && (
          <span
            className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#FF4D4D]/40 bg-[#FF4D4D]/10 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#FF4D4D]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF4D4D]" />
            EM FORMAÇÃO
          </span>
        )}
      </div>

      {/* Rows */}
      <div className="relative z-10">
        {rows.map((row, idx) => (
          <div
            key={row.rank}
            className="group relative flex items-center gap-3 px-4 py-4 transition-all hover:bg-[rgba(212,164,55,0.05)] sm:gap-4 sm:px-5"
            style={{
              borderBottom:
                idx < rows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            {/* Gold left accent on hover */}
            <div className="absolute inset-y-0 left-0 w-1 rounded-r bg-[#D4A437] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

            {/* Rank badge */}
            <div className="shrink-0">
              {row.rank <= 3 ? (
                <URBadge type={`n${row.rank}` as "n1" | "n2" | "n3"} size={32} />
              ) : (
                <div
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)] text-xs font-bold text-[#8A8A93]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {row.rank}
                </div>
              )}
            </div>

            {/* Name + pole + level */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p
                  className="text-sm font-bold uppercase leading-tight text-[#F4F0E6] truncate"
                  style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
                >
                  {row.name}
                </p>
                {/* Level pill */}
                <span
                  className="shrink-0 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[#D4A437]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    background: levelColor[row.level] ?? levelColor.N3,
                  }}
                >
                  {row.level}
                </span>
              </div>
              <p
                className="mt-0.5 text-[11px] text-[#8A8A93]"
                style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
              >
                {row.pole}
              </p>
            </div>

            {/* Points + variation */}
            <div className="shrink-0 text-right">
              <p
                className="text-sm font-bold text-[#D4A437]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: "0.05em",
                }}
              >
                {row.points > 0 ? row.points.toLocaleString("pt-BR") : "—"}
              </p>
              <div className="flex items-center justify-end gap-1">
                <span
                  className="text-[9px] text-[#8A8A93]"
                  style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
                >
                  pts
                </span>
                {row.variation !== undefined && (
                  <VariationBadge v={row.variation} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 border-t border-[rgba(255,255,255,0.06)] px-5 py-2.5">
        <p
          className="text-center text-[10px] text-[#8A8A93]/70"
          style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
        >
          Atualizado conforme participação confirmada
        </p>
      </div>
    </div>
  );
}

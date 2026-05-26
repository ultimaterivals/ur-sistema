import { URArtCard } from "./URArtCard";

interface TerritoryArtCardProps {
  pole: {
    id: string;
    name: string;
    short: string;
    shieldPath: string;
    activeTeams: number;
    totalPoints: number;
    status: string;
  };
  rank?: number;
  className?: string;
}

export function TerritoryArtCard({ pole, rank, className }: TerritoryArtCardProps) {
  const maxPoints = 100; // placeholder — when season starts this will reflect real max
  const progress = pole.totalPoints > 0 ? Math.min((pole.totalPoints / maxPoints) * 100, 100) : 0;
  const rankLabel = rank !== undefined ? `#${String(rank).padStart(2, "0")}` : null;

  return (
    <URArtCard
      className={[
        "flex flex-col gap-4 p-5 md:p-6 cursor-pointer sm:hover:scale-[1.02]",
        className ?? "",
      ].join(" ")}
    >
      {/* Sand texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)",
          backgroundSize: "cover",
          opacity: 0.07,
        }}
      />

      <div className="relative z-10 flex flex-col gap-4 w-full">
        {/* Top row: rank + live status */}
        <div className="flex items-center justify-between">
          {rankLabel ? (
            <span
              className="text-xs font-bold text-[#8A8A93]"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
            >
              {rankLabel}
            </span>
          ) : (
            <span />
          )}
          <span
            className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(212,164,55,0.3)] bg-[rgba(212,164,55,0.08)] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-[#D4A437]"
            style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A437]" />
            {pole.status}
          </span>
        </div>

        {/* Shield — 120×144px */}
        <div className="flex justify-center">
          <div className="w-[120px] h-[144px] flex items-center justify-center">
            <img
              alt={`Polo ${pole.name}`}
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
              src={pole.shieldPath}
              style={{ transition: "transform 300ms cubic-bezier(0.4,0,0.2,1)" }}
            />
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <h3
            className="text-xl md:text-2xl font-bold uppercase tracking-wider text-[#F4F0E6] group-hover:text-[#D4A437] transition-colors"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
          >
            {pole.name}
          </h3>
          <p
            className="mt-0.5 text-sm font-bold text-[#D4A437]"
            style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}
          >
            {pole.short}
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex flex-col gap-1.5">
          <div className="relative h-1.5 w-full rounded-full overflow-hidden bg-[rgba(255,255,255,0.08)]">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-[#D4A437] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span
              className="text-[10px] text-[#8A8A93]"
              style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
            >
              Força do Polo
            </span>
            <span
              className="text-[10px] font-bold text-[#D4A437]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              {progress > 0 ? `${Math.round(progress)}%` : "—"}
            </span>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="flex items-center justify-between border-t border-[rgba(255,255,255,0.06)] pt-3"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px" }}
        >
          <span className="text-[#8A8A93]">
            {pole.activeTeams} equipes
          </span>
          <span className="font-bold text-[#D4A437]">
            {pole.totalPoints > 0 ? `${pole.totalPoints.toLocaleString("pt-BR")} pts` : "—"}
          </span>
        </div>
      </div>
    </URArtCard>
  );
}

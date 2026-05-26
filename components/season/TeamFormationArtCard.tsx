import { URArtCard } from "./URArtCard";
import { URBadge } from "./URBadge";

interface TeamFormationArtCardProps {
  teamName: string;
  pole: string;
  modality: string;
  isOfficial?: boolean;
  athleteCount?: number;
  className?: string;
}

export function TeamFormationArtCard({
  teamName,
  pole,
  modality,
  isOfficial = false,
  athleteCount = 4,
  className,
}: TeamFormationArtCardProps) {
  const initials = teamName.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  return (
    <URArtCard
      variant={isOfficial ? "active" : "default"}
      className={`flex flex-col gap-4 p-5 ${className ?? ""}`}
    >
      {/* Arena grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "url(/season-1/textures/bg-arena-grid.svg)", backgroundSize: "cover" }}
      />
      <div className="relative z-10 flex items-start gap-4">
        {/* Team avatar placeholder */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg border border-[rgba(212,164,55,0.3)] bg-[rgba(212,164,55,0.08)] text-lg font-bold text-[#D4A437]" style={{ fontFamily: "'Oswald', sans-serif" }}>
          {initials}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h4
              className="text-lg font-bold uppercase leading-tight text-[#F4F0E6] group-hover:text-[#D4A437] transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
            >
              {teamName}
            </h4>
            {isOfficial && <URBadge type="formacao-oficial" size={28} />}
          </div>
          <p className="mt-1 text-xs text-[#8A8A93]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
            {pole} · {modality}
          </p>
        </div>
      </div>
      {/* Athlete slots */}
      <div className="relative z-10 grid grid-cols-4 gap-1.5">
        {Array.from({ length: athleteCount }, (_, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center rounded border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[10px] text-[#8A8A93]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {String(i + 1).padStart(2, "0")}
          </div>
        ))}
      </div>
      {/* Status */}
      <div className="relative z-10 border-t border-[rgba(255,255,255,0.06)] pt-3">
        <p className="text-[10px] text-[#8A8A93]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
          {isOfficial ? "Formação oficial confirmada" : "Cadastro em análise · registro com critério"}
        </p>
      </div>
    </URArtCard>
  );
}

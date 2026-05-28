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
  const initials = teamName
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <URArtCard
      variant={isOfficial ? "active" : "default"}
      className={`flex min-h-[240px] flex-col gap-4 p-5 sm:p-6 ${className ?? ""}`}
    >
      {/* Arena grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/season-1/textures/bg-arena-grid.svg)",
          backgroundSize: "cover",
          opacity: 0.06,
        }}
      />

      {/* Official treatment: gold left border line */}
      {isOfficial && (
        <div className="absolute inset-y-0 left-0 w-1 bg-[#D4A437] rounded-l" />
      )}

      <div className="relative z-10 flex items-start gap-4">
        {/* Team avatar — 56×56, rounded-lg, gold tones */}
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg text-lg font-bold text-[#D4A437]"
          style={{
            fontFamily: "'Oswald', sans-serif",
            border: isOfficial
              ? "2px solid rgba(212,164,55,0.55)"
              : "1px solid rgba(212,164,55,0.3)",
            background: isOfficial
              ? "rgba(212,164,55,0.14)"
              : "rgba(212,164,55,0.08)",
          }}
        >
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
          {/* Official tag */}
          {isOfficial && (
            <span
              className="mt-1 inline-block text-[9px] font-bold uppercase tracking-widest text-[#D4A437]"
              style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
            >
              Formação Oficial
            </span>
          )}
          <p
            className="mt-1 text-sm leading-6 text-[#8A8A93]"
            style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
          >
            {pole} · {modality}
          </p>
        </div>
      </div>

      {/* Athlete slots — more visual */}
      <div className="relative z-10 grid grid-cols-4 gap-1.5">
        {Array.from({ length: athleteCount }, (_, i) => (
          <div
            key={i}
            className="relative flex aspect-square items-center justify-center rounded overflow-hidden text-[10px] text-[#8A8A93]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Subtle gradient inside slot */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  isOfficial
                    ? "linear-gradient(135deg, rgba(212,164,55,0.08) 0%, rgba(255,255,255,0.02) 100%)"
                    : "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
              }}
            />
            <span className="relative z-10">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      {/* Status */}
      <div className="relative z-10 border-t border-[rgba(255,255,255,0.06)] pt-3">
        <p
          className="text-xs leading-5 text-[#8A8A93]"
          style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
        >
          {isOfficial
            ? "Formação oficial confirmada"
            : "Cadastro em análise · registro com critério"}
        </p>
      </div>
    </URArtCard>
  );
}

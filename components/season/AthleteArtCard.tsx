import { URBadge } from "./URBadge";
import { URArtCard } from "./URArtCard";

interface AthleteArtCardProps {
  name: string;
  pole: string;
  level: string;
  points: number;
  rank?: number;
  isEditorial?: boolean;
  variant?: "default" | "legends";
  className?: string;
}

export function AthleteArtCard({
  name,
  pole,
  level,
  points,
  rank,
  isEditorial = true,
  variant = "default",
  className,
}: AthleteArtCardProps) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <URArtCard
      variant={variant}
      className={`flex flex-col sm:hover:scale-[1.02] ${className ?? ""}`}
    >
      {/* Photo area — 3:4 aspect */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-lg bg-[#0D0D12]">
        {/* Energy lines texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/season-1/textures/bg-energy-lines.svg)",
            backgroundSize: "cover",
            opacity: 0.12,
          }}
        />

        {/* Bottom vignette gradient */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,11,0.85) 0%, rgba(10,10,11,0.30) 50%, transparent 100%)",
          }}
        />

        {/* Monogram — always visible, centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold text-[#D4A437] group-hover:scale-105 transition-transform duration-300"
            style={{
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.05em",
              border: "2px solid rgba(212,164,55,0.4)",
              background: "rgba(212,164,55,0.10)",
              transition: "transform 300ms cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {initials}
          </div>
        </div>

        {/* Top-left: rank badge (only 1-3) */}
        {rank !== undefined && rank <= 3 && (
          <div className="absolute left-3 top-3">
            <URBadge type={`n${rank}` as "n1" | "n2" | "n3"} size={36} />
          </div>
        )}

        {/* Top-right: level pill */}
        <div className="absolute right-3 top-3">
          <span
            className="inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background: "#F4F0E6",
              color: "#0A0A0B",
            }}
          >
            {level}
          </span>
        </div>
      </div>

      {/* Info footer */}
      <div className="p-3">
        <h4
          className="text-base font-bold uppercase leading-tight text-[#F4F0E6] group-hover:text-[#D4A437] transition-colors"
          style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
        >
          {name}
        </h4>
        <div className="mt-1.5 flex items-center justify-between">
          <span
            className="text-xs text-[#8A8A93]"
            style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
          >
            {pole} · {level}
          </span>
          <span
            className="text-xs font-bold text-[#D4A437]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {points > 0 ? `${points.toLocaleString("pt-BR")} pts` : "0 pts"}
          </span>
        </div>
        {isEditorial && (
          <p
            className="mt-1.5 text-[10px] italic"
            style={{
              color: "rgba(138,138,147,0.6)",
              fontFamily: "'Manrope', system-ui, sans-serif",
            }}
          >
            Dados editoriais — ranking em formação
          </p>
        )}
      </div>
    </URArtCard>
  );
}

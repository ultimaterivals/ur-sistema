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
  const initials = name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();

  return (
    <URArtCard
      variant={variant}
      className={`flex flex-col ${className ?? ""}`}
    >
      {/* Photo area */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-t-lg bg-[rgba(255,255,255,0.03)]">
        {/* Energy lines texture */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{ backgroundImage: "url(/season-1/textures/bg-energy-lines.svg)", backgroundSize: "cover" }}
        />
        {/* Initials placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(212,164,55,0.3)] bg-[rgba(212,164,55,0.08)] text-2xl font-bold text-[#D4A437]"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
          >
            {initials}
          </div>
        </div>
        {/* Rank badge */}
        {rank && rank <= 3 && (
          <div className="absolute right-3 top-3">
            <URBadge type={`n${rank}` as "n1" | "n2" | "n3"} size={36} />
          </div>
        )}
        {/* Overlay on hover — reveals stats */}
        <div
          className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-250 bg-[rgba(10,10,11,0.88)] p-3"
          style={{ transition: "transform 250ms cubic-bezier(0.4,0,0.2,1)" }}
        >
          <div className="grid grid-cols-2 gap-2 text-center">
            <div>
              <p className="text-[10px] text-[#8A8A93] uppercase tracking-wider" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>Polo</p>
              <p className="text-sm font-bold text-[#F4F0E6]" style={{ fontFamily: "'Oswald', sans-serif" }}>{pole}</p>
            </div>
            <div>
              <p className="text-[10px] text-[#8A8A93] uppercase tracking-wider" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>Nível</p>
              <p className="text-sm font-bold text-[#D4A437]" style={{ fontFamily: "'Oswald', sans-serif" }}>{level}</p>
            </div>
          </div>
        </div>
      </div>
      {/* Info */}
      <div className="p-4">
        <h4
          className="text-base font-bold uppercase leading-tight text-[#F4F0E6] group-hover:text-[#D4A437] transition-colors"
          style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
        >
          {name}
        </h4>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-[#8A8A93]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>{pole} · {level}</span>
          <span className="text-xs font-bold text-[#D4A437]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {points > 0 ? `${points.toLocaleString("pt-BR")} pts` : "em disputa"}
          </span>
        </div>
        {isEditorial && (
          <p className="mt-2 text-[10px] text-[#8A8A93]/60 italic" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Dados editoriais — ranking em formação
          </p>
        )}
      </div>
    </URArtCard>
  );
}

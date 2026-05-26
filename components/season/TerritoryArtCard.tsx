import { URArtCard } from "./URArtCard";

interface TerritoryArtCardProps {
  pole: { id: string; name: string; short: string; shieldPath: string; activeTeams: number; status: string };
  className?: string;
}

export function TerritoryArtCard({ pole, className }: TerritoryArtCardProps) {
  return (
    <URArtCard
      className={`flex flex-col items-center gap-4 p-6 md:p-8 cursor-pointer ${className ?? ""}`}
    >
      {/* Sand texture */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{ backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)", backgroundSize: "cover" }}
      />
      <div className="relative z-10 flex flex-col items-center gap-4 w-full">
        {/* Shield */}
        <div className="w-[80px] h-[96px] md:w-[100px] md:h-[120px] flex items-center justify-center">
          <img
            alt={`Polo ${pole.name}`}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-250"
            loading="lazy"
            src={pole.shieldPath}
          />
        </div>
        {/* Info */}
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8A8A93]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Polo Ativo
          </p>
          <h3
            className="mt-1 text-xl md:text-2xl font-bold uppercase tracking-wider text-[#F4F0E6] group-hover:text-[#D4A437] transition-colors"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
          >
            {pole.name}
          </h3>
          <p className="mt-2 text-sm text-[#8A8A93]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            {pole.activeTeams} equipes ativas
          </p>
        </div>
        {/* Status badge */}
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(212,164,55,0.3)] bg-[rgba(212,164,55,0.08)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4A437]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4A437]" />
          {pole.status}
        </span>
      </div>
    </URArtCard>
  );
}

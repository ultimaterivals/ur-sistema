import Link from "next/link";
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
  ctaHref?: string;
  ctaLabel?: string;
  featured?: boolean;
  subtitle?: string;
}

export function TerritoryArtCard({ pole, rank, className, ctaHref, ctaLabel, featured = false, subtitle }: TerritoryArtCardProps) {
  const maxPoints = 100; // placeholder — when season starts this will reflect real max
  const progress = pole.totalPoints > 0 ? Math.min((pole.totalPoints / maxPoints) * 100, 100) : 0;
  const rankLabel = rank !== undefined ? `#${String(rank).padStart(2, "0")}` : null;

  if (featured) {
    return (
      <URArtCard
        className={[
          "flex h-full min-h-[330px] flex-col overflow-hidden p-0 cursor-pointer sm:hover:scale-[1.02]",
          className ?? "",
        ].join(" ")}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)",
            backgroundSize: "cover",
            opacity: 0.08,
          }}
        />

        <div className="relative z-10 flex min-h-[150px] items-center justify-center overflow-hidden border-b border-[rgba(255,255,255,0.08)] bg-[radial-gradient(circle_at_center,rgba(212,164,55,0.20),rgba(20,20,26,0.62)_48%,rgba(10,10,11,0.78))] px-5 py-5">
          <div className="absolute left-4 top-4 flex items-center gap-2">
            {rankLabel ? (
              <span
                className="rounded border border-white/10 bg-black/30 px-2 py-1 text-xs font-bold text-[#8A8A93]"
                style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.08em" }}
              >
                {rankLabel}
              </span>
            ) : null}
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(212,164,55,0.3)] bg-[rgba(212,164,55,0.08)] px-2.5 py-1 text-[9px] font-bold uppercase tracking-widest text-[#D4A437]"
              style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#D4A437]" />
              {pole.status}
            </span>
          </div>
          <img
            alt={`Polo ${pole.name}`}
            className="h-[112px] w-auto object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.42)] transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            src={pole.shieldPath}
          />
        </div>

        <div className="relative z-10 flex flex-1 flex-col p-4 md:p-5">
          <div>
            <h3
              className="text-3xl font-bold uppercase leading-[0.9] text-[#F4F0E6] group-hover:text-[#D4A437] transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.05em" }}
            >
              {pole.name}
            </h3>
            <p
              className="mt-1 text-sm font-bold uppercase text-[#D4A437]"
              style={{ fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.1em" }}
            >
              {pole.short}
            </p>
            {subtitle ? (
              <p
                className="mt-3 text-sm leading-5 text-[#8A8A93]"
                style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
              >
                {subtitle}
              </p>
            ) : null}
          </div>

          <div className="mt-4 flex flex-col gap-1.5">
            <div className="relative h-1.5 w-full rounded-full overflow-hidden bg-[rgba(255,255,255,0.08)]">
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-[#D4A437] transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#8A8A93]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
                Força do Polo
              </span>
              <span className="text-[10px] font-bold text-[#D4A437]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                {progress > 0 ? `${Math.round(progress)}%` : "em formação"}
              </span>
            </div>
          </div>

          <div
            className="mt-auto flex items-center justify-between border-t border-[rgba(255,255,255,0.06)] pt-3"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px" }}
          >
            <span className="text-[#8A8A93]">{pole.activeTeams} equipes</span>
            {ctaHref ? (
              <Link
                className="font-bold uppercase tracking-[0.14em] text-[#D4A437] transition hover:text-[#ffe98b]"
                href={ctaHref}
              >
                {ctaLabel ?? "Ver polo"}
              </Link>
            ) : (
              <span className="font-bold text-[#D4A437]">
                {pole.totalPoints > 0 ? `${pole.totalPoints.toLocaleString("pt-BR")} pts` : "—"}
              </span>
            )}
          </div>
        </div>
      </URArtCard>
    );
  }

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

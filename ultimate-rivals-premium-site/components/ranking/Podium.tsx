import { Star, Award, TrendingUp } from "lucide-react";

interface PodiumAthlete {
  pos: 1 | 2 | 3;
  name: string;
  polo: string;
  modality: string;
  level: "N1" | "N2" | "N3";
  pts: number;
  trend: "up" | "down" | "stable";
}

const defaultPodium: PodiumAthlete[] = [
  { pos: 2, name: "André Lemos", polo: "Betim", modality: "Dupla", level: "N1", pts: 1840, trend: "up" },
  { pos: 1, name: "Carlos Vieira", polo: "BH", modality: "Quarteto", level: "N1", pts: 2150, trend: "up" },
  { pos: 3, name: "Diego Faria", polo: "Contagem", modality: "Dupla", level: "N1", pts: 1720, trend: "stable" },
];

const medal = {
  1: { text: "#D4A437", bg: "#D4A43715", border: "#D4A43740", label: "Ouro" },
  2: { text: "#C8B99A", bg: "#C8B99A10", border: "#C8B99A35", label: "Prata" },
  3: { text: "#8B7355", bg: "#8B735510", border: "#8B735535", label: "Bronze" },
} as const;

function PosIcon({ pos }: { pos: 1 | 2 | 3 }) {
  if (pos === 1) return <Star size={17} className="text-ur-gold" />;
  if (pos === 2) return <Award size={16} className="text-ur-sand" />;
  return <TrendingUp size={15} style={{ color: "#8B7355" }} />;
}

export default function Podium({ athletes = defaultPodium }: { athletes?: PodiumAthlete[] }) {
  const ordered = [
    athletes.find((a) => a.pos === 2),
    athletes.find((a) => a.pos === 1),
    athletes.find((a) => a.pos === 3),
  ].filter((a): a is PodiumAthlete => Boolean(a));

  return (
    <div className="flex flex-col sm:flex-row items-end justify-center gap-3 sm:gap-2">
      {ordered.map((athlete) => {
        const m = medal[athlete.pos];
        const isFirst = athlete.pos === 1;
        return (
          <div
            key={athlete.name}
            className={`relative group ${
              isFirst
                ? "sm:order-2 w-full sm:w-52"
                : athlete.pos === 2
                ? "sm:order-1 w-full sm:w-44"
                : "sm:order-3 w-full sm:w-44"
            }`}
          >
            <div
              className={`rounded-sm border text-center px-5 transition-all duration-300 group-hover:shadow-card-hover ${
                isFirst
                  ? "bg-card-gold py-8 shadow-gold-glow-sm"
                  : "bg-card py-6"
              }`}
              style={{ borderColor: m.border }}
            >
              {/* Medal */}
              <div className="flex justify-center mb-3">
                <div
                  className="w-11 h-11 rounded-sm flex items-center justify-center border"
                  style={{ backgroundColor: m.bg, borderColor: m.border }}
                >
                  <PosIcon pos={athlete.pos} />
                </div>
              </div>

              {/* Position */}
              <div
                className={`font-display font-black leading-none mb-3 ${isFirst ? "text-5xl" : "text-4xl"}`}
                style={{ color: m.text }}
              >
                #{athlete.pos}
              </div>

              {/* Name */}
              <h3 className="font-display font-black uppercase text-sm text-ur-white mb-1 leading-tight group-hover:text-ur-gold transition-colors duration-200">
                {athlete.name}
              </h3>

              {/* Polo + Modality */}
              <div className="flex items-center justify-center gap-1.5 mb-4">
                <span className="text-ur-muted text-[11px] font-body">{athlete.polo}</span>
                <span className="text-ur-muted text-[11px]">·</span>
                <span className="text-ur-muted text-[11px] font-body">{athlete.modality}</span>
              </div>

              {/* Points */}
              <div className="flex items-baseline justify-center gap-1 mb-3">
                <span
                  className={`font-display font-black ${isFirst ? "text-2xl" : "text-xl"}`}
                  style={{ color: m.text }}
                >
                  {athlete.pts.toLocaleString("pt-BR")}
                </span>
                <span className="text-ur-muted text-xs">pts</span>
              </div>

              {/* Level badge */}
              <span
                className="inline-block font-display font-bold text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-sm border"
                style={{ color: m.text, backgroundColor: m.bg, borderColor: m.border }}
              >
                {athlete.level} · {m.label}
              </span>
            </div>

            {/* Base bar */}
            <div
              className="h-2 rounded-b-sm"
              style={{ backgroundColor: m.border }}
            />
          </div>
        );
      })}
    </div>
  );
}

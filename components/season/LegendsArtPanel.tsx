import Link from "next/link";
import { Button } from "@/components/ui/button";

interface LegendsArtPanelProps {
  className?: string;
}

export function LegendsArtPanel({ className }: LegendsArtPanelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border-2 border-[#D4A437] shadow-[0_0_40px_rgba(212,164,55,0.25)] ${className ?? ""}`}
      style={{ background: "linear-gradient(180deg, #2A1F0C 0%, #14141A 60%, #0A0A0B 100%)" }}
    >
      {/* Legends texture */}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: "url(/season-1/textures/bg-legends.svg)", backgroundSize: "cover" }}
      />
      {/* Watermark symbol */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          alt=""
          aria-hidden
          className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] opacity-[0.06]"
          loading="lazy"
          src="/season-1/symbols/ur-legends-solid.svg"
        />
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-10 md:px-10 md:py-14 text-center">
        <img alt="UR Legends" className="h-14 w-14 md:h-20 md:w-20" loading="lazy" src="/season-1/symbols/ur-legends-badge.svg" />
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#D4A437]/70" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
            Temporada 1 · Virada da Temporada
          </p>
          <h2
            className="mt-3 text-3xl md:text-5xl font-bold uppercase leading-[0.9] text-[#D4A437]"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.03em" }}
          >
            UR Legends
          </h2>
          <p className="mt-4 max-w-2xl text-base md:text-lg leading-7 text-[#F4F0E6]/80" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
            No Legends, o atleta joga pelo nome, representa o escudo e fortalece seu território.
          </p>
        </div>
        <div className="rounded-lg border border-[rgba(212,164,55,0.25)] bg-[rgba(0,0,0,0.35)] px-5 py-4 max-w-xl text-sm text-[#F4F0E6]/68 leading-6" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
          <strong className="block text-[#D4A437] font-bold uppercase tracking-wider text-xs mb-2" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}>Regra oficial</strong>
          No UR Legends, a pontuação individual e a pontuação das equipes seguem a tabela oficial normal do evento. Apenas o Ranking de Força dos Polos recebe multiplicador especial.
        </div>
        <Button href="/cadastro#atleta" className="mt-2">
          Entrar na Temporada
        </Button>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { season1 } from "@/lib/content/season1";

interface LegendsArtPanelProps {
  className?: string;
}

export function LegendsArtPanel({ className }: LegendsArtPanelProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className ?? ""}`}
      style={{
        background: "linear-gradient(180deg, #2A1F0C 0%, #14141A 60%, #0A0A0B 100%)",
        border: "2px solid #D4A437",
        boxShadow: "0 0 60px rgba(212,164,55,0.25)",
      }}
    >
      {/* Legends texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/season-1/textures/bg-legends.svg)",
          backgroundSize: "cover",
          opacity: 0.15,
        }}
      />

      {/* Watermark symbol — 320px desktop, 240px mobile */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          alt=""
          aria-hidden
          className="opacity-[0.08]"
          loading="lazy"
          src="/season-1/symbols/ur-legends-solid.svg"
          style={{ width: "clamp(240px, 40vw, 320px)", height: "clamp(240px, 40vw, 320px)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-10 md:px-10 md:py-16 text-center">
        {/* Badge — 80px centered */}
        <img
          alt="UR Legends"
          className="h-20 w-20"
          loading="lazy"
          src="/season-1/symbols/ur-legends-badge.svg"
        />

        {/* Title block */}
        <div>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#D4A437]/70"
            style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
          >
            Temporada 1 · UR Legends
          </p>
          <h2
            className="mt-3 font-bold uppercase leading-[0.9] text-[#D4A437]"
            style={{
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.03em",
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
            }}
          >
            TEMPORADA 1<br />
            <span style={{ color: "#F4F0E6" }}>UR LEGENDS</span>
          </h2>
          <p
            className="mt-4 max-w-lg text-base md:text-lg leading-7"
            style={{
              color: "rgba(244,240,230,0.70)",
              fontFamily: "'Manrope', system-ui, sans-serif",
            }}
          >
            O atleta joga pelo nome. O polo leva o resultado.
          </p>
        </div>

        {/* Required text */}
        <p
          className="max-w-2xl text-sm leading-6"
          style={{
            color: "rgba(244,240,230,0.75)",
            fontFamily: "'Manrope', system-ui, sans-serif",
          }}
        >
          No Legends, o atleta joga pelo nome, representa o escudo e fortalece seu território.
        </p>

        {/* Rule card */}
        <div
          className="rounded-lg max-w-xl w-full text-left px-5 py-4"
          style={{
            border: "1px solid rgba(212,164,55,0.25)",
            background: "rgba(0,0,0,0.40)",
          }}
        >
          <strong
            className="block text-[#D4A437] font-bold uppercase tracking-wider text-xs mb-2"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
          >
            Regra Oficial
          </strong>
          <p
            className="text-sm leading-6"
            style={{
              color: "rgba(244,240,230,0.68)",
              fontFamily: "'Manrope', system-ui, sans-serif",
            }}
          >
            No UR Legends, a pontuação individual e a pontuação das equipes seguem a tabela oficial
            normal do evento. Apenas o Ranking de Força dos Polos recebe multiplicador especial.
          </p>
        </div>

        {/* Pole shields row */}
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {season1.poles.map((p) => (
            <div key={p.id} className="flex flex-col items-center gap-2">
              <img
                alt={`Polo ${p.name}`}
                loading="lazy"
                src={p.shieldPath}
                style={{ width: 48, height: "auto", opacity: 0.9 }}
              />
              <span
                className="text-[10px] font-bold uppercase tracking-wider"
                style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}
              >
                {p.short}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button href="/cadastro#atleta" className="mt-2">
          Entrar na Temporada
        </Button>
      </div>
    </div>
  );
}

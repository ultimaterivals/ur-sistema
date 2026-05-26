interface BracketMatch {
  id: string;
  a: string;
  b: string;
  winner: string | null;
}

interface URBracketPreviewProps {
  stage: "sprint" | "series" | "legends";
  quarterfinals: BracketMatch[];
  semifinals: BracketMatch[];
  final: BracketMatch;
  className?: string;
}

function MatchSlot({ match, small }: { match: BracketMatch; small?: boolean }) {
  return (
    <div
      className={`rounded border border-[rgba(212,164,55,0.2)] bg-[#14141A] ${small ? "p-2 text-xs" : "p-3 text-sm"} min-w-[120px]`}
    >
      <div className={`flex items-center gap-2 ${match.winner === match.a ? "text-[#D4A437] font-bold" : "text-[#F4F0E6]"}`}>
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(212,164,55,0.4)]" />
        <span className="truncate" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}>{match.a}</span>
      </div>
      <div className={`mt-1.5 flex items-center gap-2 ${match.winner === match.b ? "text-[#D4A437] font-bold" : "text-[#F4F0E6]"}`}>
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(212,164,55,0.4)]" />
        <span className="truncate" style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}>{match.b}</span>
      </div>
    </div>
  );
}

export function URBracketPreview({
  stage,
  quarterfinals,
  semifinals,
  final,
  className,
}: URBracketPreviewProps) {
  const symbolPath = `/season-1/symbols/ur-${stage}-solid.svg`;

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-[rgba(212,164,55,0.15)] bg-[#14141A] p-5 md:p-7 ${className ?? ""}`}
    >
      {/* Bracket texture */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "url(/season-1/textures/bg-bracket.svg)", backgroundSize: "cover" }}
      />
      {/* Header */}
      <div className="relative z-10 mb-6 flex items-center gap-3">
        <img alt={stage} className="h-8 w-8" loading="lazy" src={symbolPath} />
        <h3
          className="text-lg font-bold uppercase tracking-widest text-[#F4F0E6]"
          style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
        >
          UR {stage.charAt(0).toUpperCase() + stage.slice(1)} · Bracket
        </h3>
        <span className="ml-auto rounded-full border border-[rgba(212,164,55,0.3)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-[#D4A437]" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>
          Em organização
        </span>
      </div>
      {/* Bracket grid — scrollable horizontal on mobile */}
      <div className="relative z-10 overflow-x-auto pb-2">
        <div className="flex items-center gap-6 min-w-max">
          {/* QF */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#8A8A93] mb-1" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>Quartas</p>
            {quarterfinals.map((m) => <MatchSlot key={m.id} match={m} small />)}
          </div>
          {/* Connector */}
          <div className="flex flex-col justify-center gap-10">
            {[0, 1].map((i) => (
              <div key={i} className="h-px w-8 bg-[rgba(212,164,55,0.25)]" />
            ))}
          </div>
          {/* SF */}
          <div className="flex flex-col gap-3 mt-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#8A8A93] mb-1" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>Semifinais</p>
            {semifinals.map((m) => <MatchSlot key={m.id} match={m} small />)}
          </div>
          {/* Connector */}
          <div className="h-px w-8 bg-[rgba(212,164,55,0.25)]" />
          {/* Final */}
          <div className="flex flex-col mt-16">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#8A8A93] mb-1" style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}>Final</p>
            <MatchSlot match={final} />
          </div>
        </div>
      </div>
    </div>
  );
}

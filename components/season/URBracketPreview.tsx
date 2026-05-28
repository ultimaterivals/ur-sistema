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

function MatchSlot({
  match,
  isFinal = false,
}: {
  match: BracketMatch;
  isFinal?: boolean;
}) {
  const aIsWinner = match.winner === match.a;
  const bIsWinner = match.winner === match.b;
  const pending = match.winner === null;

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{
        border: isFinal
          ? "2px solid #D4A437"
          : "1px solid rgba(212,164,55,0.20)",
        background: isFinal
          ? "rgba(212,164,55,0.06)"
          : "#14141A",
        boxShadow: isFinal
          ? "0 0 24px rgba(212,164,55,0.18)"
          : undefined,
        minWidth: isFinal ? "144px" : "120px",
      }}
    >
      {/* Player A */}
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          opacity: !pending && bIsWinner ? 0.45 : 1,
        }}
      >
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{
            background:
              aIsWinner ? "#D4A437" : "rgba(212,164,55,0.25)",
          }}
        />
        <span
          className="truncate text-xs"
          style={{
            fontFamily: "'Oswald', sans-serif",
            letterSpacing: "0.04em",
            color: aIsWinner ? "#D4A437" : "#F4F0E6",
            fontWeight: aIsWinner ? 700 : 400,
            textDecoration: !pending && bIsWinner ? "line-through" : undefined,
          }}
        >
          {match.a}
        </span>
      </div>
      {/* Player B */}
      <div
        className="flex items-center gap-2 px-3 py-2"
        style={{
          opacity: !pending && aIsWinner ? 0.45 : 1,
        }}
      >
        <span
          className="h-1.5 w-1.5 shrink-0 rounded-full"
          style={{
            background:
              bIsWinner ? "#D4A437" : "rgba(212,164,55,0.25)",
          }}
        />
        <span
          className="truncate text-xs"
          style={{
            fontFamily: "'Oswald', sans-serif",
            letterSpacing: "0.04em",
            color: bIsWinner ? "#D4A437" : "#F4F0E6",
            fontWeight: bIsWinner ? 700 : 400,
            textDecoration: !pending && aIsWinner ? "line-through" : undefined,
          }}
        >
          {match.b}
        </span>
      </div>
    </div>
  );
}

/** L-shaped connector using CSS borders */
function Connector({
  pairIndex,
  totalPairs,
}: {
  pairIndex: number;
  totalPairs: number;
}) {
  // Connect pairs 0&1, 2&3, etc to the next stage
  const isTopOfPair = pairIndex % 2 === 0;
  return (
    <div className="relative flex h-full items-center" style={{ width: 32 }}>
      {isTopOfPair ? (
        // Top of pair: draw right + down arm
        <div
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            width: "100%",
            height: "50%",
            borderTop: "2px solid rgba(212,164,55,0.35)",
            borderRight: "2px solid rgba(212,164,55,0.35)",
          }}
        />
      ) : (
        // Bottom of pair: draw right + up arm
        <div
          style={{
            position: "absolute",
            bottom: "50%",
            right: 0,
            width: "100%",
            height: "50%",
            borderBottom: "2px solid rgba(212,164,55,0.35)",
            borderRight: "2px solid rgba(212,164,55,0.35)",
          }}
        />
      )}
      {/* Horizontal exit from the right edge to the next column */}
      {isTopOfPair && (
        <div
          style={{
            position: "absolute",
            top: "25%",
            right: 0,
            width: "100%",
            height: 2,
            background: "rgba(212,164,55,0.35)",
            transform: "translateY(-50%) translateX(100%)",
          }}
        />
      )}
    </div>
  );
}

const stageNames: Record<string, string> = {
  sprint: "UR Sprint",
  series: "UR Series",
  legends: "UR Legends",
};

const phaseLabel = (text: string) => (
  <div className="mb-2">
    <p
      className="text-xs font-bold uppercase tracking-widest text-[#D4A437]"
      style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.12em" }}
    >
      {text}
    </p>
    <div className="mt-0.5 h-px w-full bg-[rgba(212,164,55,0.35)]" />
  </div>
);

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
        style={{
          backgroundImage: "url(/season-1/textures/bg-bracket.svg)",
          backgroundSize: "cover",
        }}
      />

      {/* Header */}
      <div className="relative z-10 mb-6 flex items-center gap-3">
        <img alt={stage} className="h-8 w-8" loading="lazy" src={symbolPath} />
        <h3
          className="text-lg font-bold uppercase tracking-widest text-[#F4F0E6]"
          style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.08em" }}
        >
          {stageNames[stage]} · Bracket
        </h3>
        <span
          className="ml-auto rounded-full border border-[rgba(212,164,55,0.35)] bg-[rgba(212,164,55,0.08)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#D4A437] flex items-center gap-1.5"
          style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#D4A437] animate-pulse" />
          Em organização
        </span>
      </div>

      {/* Bracket grid — scrollable horizontal on mobile */}
      <div className="relative z-10 overflow-x-auto pb-2">
        <div className="flex gap-0 min-w-max">
          {/* QF column */}
          <div className="flex flex-col" style={{ gap: 8 }}>
            {phaseLabel("Quartas")}
            {quarterfinals.map((m, i) => (
              <div
                key={m.id}
                style={{
                  marginBottom: i % 2 === 0 ? 0 : 16,
                }}
              >
                <MatchSlot match={m} />
              </div>
            ))}
          </div>

          {/* QF→SF connectors */}
          <div className="flex flex-col" style={{ width: 40, paddingTop: 28, gap: 8 }}>
            {[0, 1].map((pairIdx) => (
              <div
                key={pairIdx}
                style={{
                  height: 2 * 58 + 16, // two match slots + gap
                  position: "relative",
                }}
              >
                {/* Top bracket arm */}
                <div
                  style={{
                    position: "absolute",
                    top: "25%",
                    left: 0,
                    right: "50%",
                    height: "50%",
                    borderTop: "2px solid rgba(212,164,55,0.35)",
                    borderRight: "2px solid rgba(212,164,55,0.35)",
                    borderBottom: "2px solid rgba(212,164,55,0.35)",
                  }}
                />
                {/* Horizontal exit */}
                <div
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: 0,
                    left: "50%",
                    height: 2,
                    background: "rgba(212,164,55,0.35)",
                    transform: "translateY(-50%)",
                  }}
                />
              </div>
            ))}
          </div>

          {/* SF column */}
          <div className="flex flex-col" style={{ gap: 8, paddingTop: 28 }}>
            {phaseLabel("Semifinais")}
            <div style={{ marginTop: 8 }}>
              {semifinals.map((m, i) => (
                <div key={m.id} style={{ marginBottom: i < semifinals.length - 1 ? 72 : 0 }}>
                  <MatchSlot match={m} />
                </div>
              ))}
            </div>
          </div>

          {/* SF→F connector */}
          <div
            style={{
              width: 40,
              paddingTop: 28 + 8,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "40%",
                left: 0,
                right: "50%",
                height: "22%",
                borderTop: "2px solid rgba(212,164,55,0.35)",
                borderRight: "2px solid rgba(212,164,55,0.35)",
                borderBottom: "2px solid rgba(212,164,55,0.35)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "51%",
                right: 0,
                left: "50%",
                height: 2,
                background: "rgba(212,164,55,0.35)",
                transform: "translateY(-50%)",
              }}
            />
          </div>

          {/* Final column */}
          <div className="flex flex-col" style={{ gap: 8, paddingTop: 28, justifyContent: "center" }}>
            {phaseLabel("Final")}
            <div style={{ marginTop: 32 }}>
              <MatchSlot match={final} isFinal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

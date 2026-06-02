import { ChevronUp, ChevronDown, Minus, User } from "lucide-react";

interface LeaderboardRow {
  pos: number;
  name: string;
  polo: string;
  level: "N1" | "N2" | "N3";
  pts: number;
  change: "up" | "down" | "stable";
  modality: string;
  jogos: number;
}

const defaultRows: LeaderboardRow[] = [
  { pos: 1, name: "Carlos Vieira", polo: "BH", pts: 2150, level: "N1", change: "up", modality: "Quarteto", jogos: 24 },
  { pos: 2, name: "André Lemos", polo: "Betim", pts: 1840, level: "N1", change: "up", modality: "Dupla", jogos: 21 },
  { pos: 3, name: "Diego Faria", polo: "Contagem", pts: 1720, level: "N1", change: "stable", modality: "Dupla", jogos: 19 },
  { pos: 4, name: "Marcos Lima", polo: "BH", pts: 1580, level: "N1", change: "up", modality: "Quarteto", jogos: 18 },
  { pos: 5, name: "Rafael Cunha", polo: "Betim", pts: 1430, level: "N2", change: "down", modality: "Dupla", jogos: 22 },
  { pos: 6, name: "Bruno Salles", polo: "Contagem", pts: 1390, level: "N2", change: "up", modality: "Quarteto", jogos: 17 },
  { pos: 7, name: "Gabriel Torres", polo: "BH", pts: 1280, level: "N2", change: "up", modality: "Dupla", jogos: 15 },
  { pos: 8, name: "Lucas Almeida", polo: "Betim", pts: 1190, level: "N3", change: "stable", modality: "Quarteto", jogos: 14 },
  { pos: 9, name: "Mateus Freitas", polo: "Contagem", pts: 1050, level: "N3", change: "up", modality: "Dupla", jogos: 12 },
  { pos: 10, name: "Felipe Rocha", polo: "BH", pts: 980, level: "N2", change: "down", modality: "Quarteto", jogos: 11 },
];

const levelConfig: Record<string, { color: string; bg: string; border: string }> = {
  N1: { color: "#D4A437", bg: "#D4A43715", border: "#D4A43730" },
  N2: { color: "#F0C060", bg: "#F0C06015", border: "#F0C06030" },
  N3: { color: "#C8B99A", bg: "#C8B99A15", border: "#C8B99A30" },
};

function ChangeIcon({ change }: { change: string }) {
  if (change === "up") return <ChevronUp size={13} className="text-green-400 shrink-0" />;
  if (change === "down") return <ChevronDown size={13} className="text-red-400 shrink-0" />;
  return <Minus size={13} className="text-ur-muted shrink-0" />;
}

export default function Leaderboard({ rows = defaultRows }: { rows?: LeaderboardRow[] }) {
  return (
    <div className="bg-card rounded-sm overflow-hidden border border-white/5">
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
        <h3 className="font-display font-bold text-base uppercase text-ur-white tracking-wide">
          Classificação Geral
        </h3>
        <span className="text-ur-muted text-[10px] font-body italic">Temporada 1 · dados de referência</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[480px]">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left px-5 py-3 text-ur-muted text-[10px] font-display uppercase tracking-wider w-14">
                Pos
              </th>
              <th className="text-left px-4 py-3 text-ur-muted text-[10px] font-display uppercase tracking-wider">
                Atleta
              </th>
              <th className="text-left px-3 py-3 text-ur-muted text-[10px] font-display uppercase tracking-wider">
                Polo
              </th>
              <th className="text-left px-3 py-3 text-ur-muted text-[10px] font-display uppercase tracking-wider hidden sm:table-cell">
                Nível
              </th>
              <th className="text-left px-3 py-3 text-ur-muted text-[10px] font-display uppercase tracking-wider hidden md:table-cell">
                Modalidade
              </th>
              <th className="text-left px-3 py-3 text-ur-muted text-[10px] font-display uppercase tracking-wider hidden lg:table-cell">
                Jogos
              </th>
              <th className="text-right px-5 py-3 text-ur-muted text-[10px] font-display uppercase tracking-wider">
                Pontos
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const lvl = levelConfig[row.level];
              const isTop3 = row.pos <= 3;
              return (
                <tr
                  key={row.pos}
                  className="border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-1.5">
                      <ChangeIcon change={row.change} />
                      <span
                        className={`font-display font-bold text-sm tabular-nums ${
                          isTop3 ? "text-ur-gold" : "text-ur-muted"
                        }`}
                      >
                        {row.pos}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 bg-ur-graphite-2 rounded-full flex items-center justify-center shrink-0 border border-white/5">
                        <User size={12} className="text-ur-muted" />
                      </div>
                      <span className="font-body font-semibold text-sm text-ur-white group-hover:text-ur-gold transition-colors duration-150">
                        {row.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-3 py-3.5">
                    <span className="chip-sand text-[10px] py-0.5">{row.polo}</span>
                  </td>
                  <td className="px-3 py-3.5 hidden sm:table-cell">
                    <span
                      className="inline-block font-display font-bold text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-sm border"
                      style={{ color: lvl.color, backgroundColor: lvl.bg, borderColor: lvl.border }}
                    >
                      {row.level}
                    </span>
                  </td>
                  <td className="px-3 py-3.5 hidden md:table-cell">
                    <span className="chip-sand text-[10px] py-0.5">{row.modality}</span>
                  </td>
                  <td className="px-3 py-3.5 hidden lg:table-cell">
                    <span className="font-body text-sm text-ur-muted tabular-nums">{row.jogos}</span>
                  </td>
                  <td className="px-5 py-3.5 text-right">
                    <span className="font-display font-bold text-sm text-ur-gold tabular-nums">
                      {row.pts.toLocaleString("pt-BR")}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="px-5 py-3 border-t border-white/5 flex items-center justify-between">
        <span className="text-ur-muted text-[10px] font-body">
          Exibindo {rows.length} atletas
        </span>
        <span className="text-ur-muted text-[10px] font-body italic">Temporada 1 em andamento</span>
      </div>
    </div>
  );
}

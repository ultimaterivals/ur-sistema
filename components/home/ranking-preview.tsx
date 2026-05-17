import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { rankingTypes } from "@/lib/content/home";

const previewRows = [
  { label: "Ranking individual", value: "ranking em formação" },
  { label: "Ranking de equipes", value: "equipes em formação" },
  { label: "Destaque da semana", value: "dados em validação" },
] as const;

export function RankingPreview() {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
      <div className="rounded-lg border border-[#ffd84d]/25 bg-[radial-gradient(circle_at_18%_0%,rgba(255,216,77,0.12),transparent_32%),#050607] p-5 shadow-[0_22px_64px_rgba(0,0,0,0.28)] md:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Badge>Ranking preview</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
            Sem dados reais ainda
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {previewRows.map((row, index) => (
            <div
              className="grid grid-cols-[auto_1fr] items-center gap-4 rounded-lg border border-white/10 bg-white/[0.055] p-4"
              key={row.label}
            >
              <span className="grid h-10 w-10 place-items-center rounded-md bg-[#ffd84d] text-sm font-black text-black">
                {index + 1}
              </span>
              <div>
                <div className="font-black uppercase text-white">{row.label}</div>
                <div className="mt-1 text-sm text-white/70">{row.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {rankingTypes.map((type) => (
          <Card className="min-h-[116px] p-4 md:p-5" key={type}>
            <div className="text-sm font-black uppercase tracking-[0.08em] text-white">{type}</div>
            <p className="mt-2 text-sm text-white/70">ranking em formação</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

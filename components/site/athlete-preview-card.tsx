import { UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export type AthletePreviewRow = {
  label: string;
  status: string;
  note: string;
};

export type AthletePreviewSideCard = {
  title: string;
  note?: string;
};

type AthletePreviewCardProps = {
  eyebrow: string;
  emptyNote?: string;
  rows: readonly AthletePreviewRow[];
  sideCards: readonly AthletePreviewSideCard[];
};

export function AthletePreviewCard({
  eyebrow,
  emptyNote = "sem dados reais de atleta nesta etapa",
  rows,
  sideCards,
}: AthletePreviewCardProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <Card className="p-4 md:p-6" premium>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Badge>{eyebrow}</Badge>
          <span className="text-xs font-black uppercase tracking-[0.14em] text-white/60">
            perfil ativo após validação
          </span>
        </div>
        <div className="mt-6 space-y-3">
          {rows.map((row, index) => (
            <div
              className="grid grid-cols-[auto_1fr] gap-4 rounded-lg border border-white/10 bg-black/30 p-4"
              key={row.label}
            >
              <span className="grid h-11 w-11 place-items-center rounded-md bg-[#ffd84d] text-sm font-black text-black">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-base font-black uppercase leading-tight text-white">{row.label}</h3>
                <p className="mt-1 text-sm font-bold text-[#ffe98b]">{row.status}</p>
                <p className="mt-2 text-sm leading-6 text-white/62">{row.note}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid gap-3 sm:grid-cols-2">
        {sideCards.map((item) => (
          <Card className="min-h-[132px] p-4 md:p-5" key={item.title}>
            <span className="grid h-10 w-10 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
              <UserRound aria-hidden className="h-5 w-5 text-[#ffd84d]" />
            </span>
            <h3 className="mt-3 text-sm font-black uppercase leading-tight tracking-[0.08em] text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-white/65">{item.note ?? emptyNote}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";
import { Building2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export type PartnerActivationItem = {
  icon?: LucideIcon;
  label: string;
  status: string;
  description: string;
  items?: readonly string[];
};

type PartnerActivationCardProps = {
  item: PartnerActivationItem;
  premium?: boolean;
};

export function PartnerActivationCard({ item, premium = false }: PartnerActivationCardProps) {
  const Icon = item.icon ?? Building2;
  return (
    <Card className="flex min-h-[280px] flex-col p-4 md:p-5" premium={premium}>
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
          <Icon aria-hidden className="h-5 w-5 text-[#ffd84d]" />
        </span>
        <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
          {item.status}
        </span>
      </div>
      <h3 className="mt-5 text-xl font-black uppercase leading-tight text-white">{item.label}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
      {item.items && item.items.length > 0 ? (
        <div className="mt-5 space-y-2">
          {item.items.map((i) => (
            <span
              className="block rounded-md border border-white/10 bg-black/25 px-3 py-2 text-xs font-black uppercase leading-5 tracking-[0.1em] text-white/75"
              key={i}
            >
              {i}
            </span>
          ))}
        </div>
      ) : null}
    </Card>
  );
}

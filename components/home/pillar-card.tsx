import type { IconContent } from "@/lib/content/home";
import { Card } from "@/components/ui/card";

export function PillarCard({ item }: { item: IconContent }) {
  const Icon = item.icon;

  return (
    <Card className="h-full min-h-[236px]" premium>
      <div className="flex items-start justify-between gap-4">
        <span className="grid h-11 w-11 place-items-center rounded-md border border-[#ffd84d]/20 bg-black/30">
          <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
        </span>
        <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#ffe98b]">
          UR
        </span>
      </div>
      <h3 className="mt-5 text-lg font-black uppercase leading-tight text-white md:text-xl">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
    </Card>
  );
}

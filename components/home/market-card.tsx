import { ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { marketItems } from "@/lib/content/home";

type MarketCardProps = {
  item: (typeof marketItems)[number];
};

export function MarketCard({ item }: MarketCardProps) {
  return (
    <Card className="flex h-full min-h-[218px] flex-col">
      <span className="grid h-11 w-11 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
        <ShoppingBag aria-hidden className="h-6 w-6 text-[#ffd84d]" />
      </span>
      <h3 className="mt-5 text-lg font-black uppercase leading-tight text-white md:text-xl">{item.title}</h3>
      <p className="mt-2 text-sm text-white/65">{item.category}</p>
      <p className="mt-auto rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#ffe98b]">
        {item.status}
      </p>
    </Card>
  );
}

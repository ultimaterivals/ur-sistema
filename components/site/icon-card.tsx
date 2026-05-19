import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

export type IconCardItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type IconCardProps = {
  item: IconCardItem;
  premium?: boolean;
  className?: string;
};

export function IconCard({ item, premium = false, className }: IconCardProps) {
  const Icon = item.icon;
  return (
    <Card className={`flex h-full min-h-[194px] flex-col ${className ?? ""}`} premium={premium}>
      <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
        <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
      </span>
      <h3 className="mt-5 text-lg font-black uppercase leading-tight text-white md:text-xl">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
    </Card>
  );
}

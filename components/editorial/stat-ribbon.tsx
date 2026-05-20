import { cn } from "@/lib/utils/cn";

type StatRibbonProps = {
  items: readonly { label: string; value: string }[];
  className?: string;
};

export function StatRibbon({ items, className }: StatRibbonProps) {
  return (
    <div className={cn("grid overflow-hidden rounded-lg border border-[#ffd84d]/20 bg-black/40 md:grid-cols-3", className)}>
      {items.map((item) => (
        <div className="border-b border-white/10 p-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-5" key={item.label}>
          <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ffe98b]">{item.label}</div>
          <div className="mt-2 text-sm font-extrabold uppercase leading-5 text-white/82">{item.value}</div>
        </div>
      ))}
    </div>
  );
}


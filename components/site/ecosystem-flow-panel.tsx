import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

export type FlowItem = {
  label: string;
  description: string;
};

const colClasses: Record<number, string> = {
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-6",
};

type EcosystemFlowPanelProps = {
  items: readonly FlowItem[];
  cols?: 3 | 4 | 5 | 6;
  showArrows?: boolean;
};

export function EcosystemFlowPanel({ items, cols = 4, showArrows = true }: EcosystemFlowPanelProps) {
  const colClass = colClasses[cols] ?? "md:grid-cols-4";

  return (
    <Card className="p-4 md:p-6" premium>
      <div className={`grid gap-3 ${colClass}`}>
        {items.map((item, index) => (
          <div className="relative rounded-lg border border-white/10 bg-black/25 p-4" key={item.label}>
            {showArrows && index < items.length - 1 ? (
              <ArrowRight
                aria-hidden
                className="absolute -right-4 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-[#ffd84d] md:block"
              />
            ) : null}
            <div className="text-xs font-black uppercase tracking-[0.16em] text-[#ffe98b]">
              {String(index + 1).padStart(2, "0")}
            </div>
            <h3 className="mt-3 text-base font-black uppercase leading-tight text-white">{item.label}</h3>
            <p className="mt-3 text-sm leading-6 text-white/68">{item.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

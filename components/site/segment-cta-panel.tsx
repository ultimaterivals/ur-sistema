import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type SegmentCtaPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions: ReactNode;
  items?: readonly string[];
  statusLabel?: string;
  className?: string;
};

export function SegmentCtaPanel({
  eyebrow,
  title,
  description,
  actions,
  items,
  statusLabel,
  className = "",
}: SegmentCtaPanelProps) {
  return (
    <section
      className={`overflow-hidden border-t border-[#ffd84d]/15 bg-[linear-gradient(135deg,#090a0f,#030405)] px-5 py-12 md:py-16 lg:px-8 lg:py-[72px] ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <Card
          className="grid gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.52fr)] lg:items-center"
          premium
        >
          <div>
            <Badge>{eyebrow}</Badge>
            {statusLabel ? (
              <span className="ml-2 inline-flex rounded-md border border-white/10 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white/60">
                {statusLabel}
              </span>
            ) : null}
            <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,8vw,3.55rem)] font-black uppercase leading-[0.96] text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">{description}</p>
            {items?.length ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    className="rounded-md border border-[#ffd84d]/15 bg-[#ffd84d]/5 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#ffe98b]"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <div className="grid gap-3">{actions}</div>
        </Card>
      </div>
    </section>
  );
}

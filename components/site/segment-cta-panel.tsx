import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type SegmentCtaPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions: ReactNode;
  className?: string;
};

export function SegmentCtaPanel({
  eyebrow,
  title,
  description,
  actions,
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
            <h2 className="mt-5 max-w-3xl text-[clamp(2.3rem,8vw,3.55rem)] font-black uppercase leading-[0.96] text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/75">{description}</p>
          </div>
          <div className="grid gap-3">{actions}</div>
        </Card>
      </div>
    </section>
  );
}

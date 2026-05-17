import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  action,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-7 grid gap-5 md:mb-9 md:grid-cols-[minmax(0,0.92fr)_minmax(280px,0.68fr)] md:items-end",
        className,
      )}
    >
      <div>
        <Badge>{eyebrow}</Badge>
        <h2 className="mt-4 max-w-[760px] text-balance text-[clamp(1.95rem,8vw,2.45rem)] font-black uppercase leading-[1.02] tracking-normal text-white md:text-[clamp(2.45rem,3.4vw,3.15rem)]">
          {title}
        </h2>
      </div>
      <div className="space-y-5 md:justify-self-end">
        {description ? <p className="max-w-xl text-base leading-7 text-white/75">{description}</p> : null}
        {action}
      </div>
    </div>
  );
}

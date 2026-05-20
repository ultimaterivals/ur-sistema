import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils/cn";

type SectionHeadingPremiumProps = {
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeadingPremium({
  eyebrow,
  title,
  description,
  action,
  align = "left",
  className,
}: SectionHeadingPremiumProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-7 grid gap-5 md:mb-10",
        centered ? "place-items-center text-center" : "lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.65fr)] lg:items-end",
        className,
      )}
    >
      <div className={cn(centered ? "max-w-3xl" : "min-w-0")}>
        <Badge>{eyebrow}</Badge>
        <h2 className="mt-4 max-w-[820px] text-balance text-[clamp(2.25rem,9vw,3.6rem)] font-black uppercase leading-[0.92] text-white md:text-[clamp(3rem,4.3vw,4.05rem)]">
          {title}
        </h2>
      </div>
      <div className={cn("space-y-5", centered ? "max-w-2xl" : "lg:justify-self-end")}>
        {description ? <p className="max-w-xl text-base leading-7 text-white/72 md:text-lg">{description}</p> : null}
        {action}
      </div>
    </div>
  );
}


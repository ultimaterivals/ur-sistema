import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { Card } from "@/components/ui/card";

type PremiumEmptyStateProps = {
  icon?: LucideIcon;
  eyebrow?: string;
  title: string;
  description: string;
  footer?: string;
  className?: string;
};

export function PremiumEmptyState({
  icon: Icon,
  eyebrow,
  title,
  description,
  footer,
  className,
}: PremiumEmptyStateProps) {
  const hasHeader = Boolean(Icon) || Boolean(eyebrow);

  return (
    <Card className={cn("flex min-h-[258px] flex-col", className)} premium>
      {hasHeader ? (
        <div className="flex items-start justify-between gap-4">
          {Icon ? (
            <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
              <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
            </span>
          ) : null}
          {eyebrow ? (
            <span className="rounded-md border border-[#ffd84d]/20 px-2 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
              {eyebrow}
            </span>
          ) : null}
        </div>
      ) : null}
      <h3
        className={cn(
          "text-[clamp(1.9rem,7vw,2.45rem)] font-black uppercase leading-[0.98] text-white",
          hasHeader && "mt-6",
        )}
      >
        {title}
      </h3>
      <p className="mt-4 text-sm leading-6 text-white/72">{description}</p>
      {footer ? (
        <p className="mt-auto pt-6 text-xs font-black uppercase leading-5 tracking-[0.14em] text-[#ffe98b]">
          {footer}
        </p>
      ) : null}
    </Card>
  );
}

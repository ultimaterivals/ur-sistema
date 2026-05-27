import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { URArtCard } from "./URArtCard";
import { cn } from "@/lib/utils/cn";

export type SeasonBenefitItem = {
  label?: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  href?: string;
  meta?: string;
};

type SeasonBenefitGridProps = {
  items: readonly SeasonBenefitItem[];
  columns?: 2 | 3 | 4;
  className?: string;
};

const columnClasses = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 xl:grid-cols-3",
  4: "sm:grid-cols-2 xl:grid-cols-4",
} as const;

function BenefitCard({ item }: { item: SeasonBenefitItem }) {
  const Icon = item.icon;
  const content = (
    <URArtCard className="flex min-h-[220px] flex-col gap-4 p-5">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url(/season-1/textures/bg-energy-lines.svg)",
          backgroundSize: "cover",
        }}
      />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div className="min-w-0">
          {item.label ? (
            <p
              className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4A437]"
              style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
            >
              {item.label}
            </p>
          ) : null}
          <h3
            className="mt-2 text-2xl font-bold uppercase leading-[0.95] text-[#F4F0E6]"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
          >
            {item.title}
          </h3>
        </div>
        {Icon ? (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[rgba(212,164,55,0.24)] bg-[rgba(212,164,55,0.08)] text-[#D4A437]">
            <Icon aria-hidden className="h-5 w-5" />
          </span>
        ) : null}
      </div>
      <p
        className="relative z-10 text-sm leading-6 text-[#8A8A93]"
        style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
      >
        {item.description}
      </p>
      {item.meta ? (
        <p
          className="relative z-10 mt-auto border-t border-white/10 pt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#D4A437]/70"
          style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
        >
          {item.meta}
        </p>
      ) : null}
      {item.href ? (
        <span
          className="relative z-10 mt-auto inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#D4A437]"
          style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
        >
          Ver caminho
          <ArrowRight aria-hidden className="h-3.5 w-3.5" />
        </span>
      ) : null}
    </URArtCard>
  );

  if (item.href) {
    return (
      <Link className="block min-w-0" href={item.href}>
        {content}
      </Link>
    );
  }

  return content;
}

export function SeasonBenefitGrid({ items, columns = 3, className }: SeasonBenefitGridProps) {
  return (
    <div className={cn("grid gap-4", columnClasses[columns], className)}>
      {items.map((item) => (
        <BenefitCard item={item} key={`${item.title}-${item.label ?? "card"}`} />
      ))}
    </div>
  );
}

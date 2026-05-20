import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

type FeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  href?: string;
  cta?: string;
  icon?: LucideIcon;
  featured?: boolean;
  className?: string;
};

export function FeatureCard({ eyebrow, title, description, href, cta, icon: Icon, featured = false, className }: FeatureCardProps) {
  return (
    <Card className={cn("group flex h-full min-h-[238px] flex-col", featured && "md:p-7", className)} premium={featured}>
      <div className="flex items-start justify-between gap-4">
        <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ffe98b]">{eyebrow}</div>
        {Icon ? (
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#ffd84d]/20 bg-[#ffd84d]/10 text-[#ffd84d]">
            <Icon aria-hidden className="h-5 w-5" />
          </span>
        ) : null}
      </div>
      <h3 className="mt-5 text-balance text-2xl font-black uppercase leading-[0.96] text-white md:text-3xl">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-white/70">{description}</p>
      {href && cta ? (
        <div className="mt-auto pt-6">
          <Button className="min-h-10 px-4 py-2 text-xs" href={href} variant={featured ? "primary" : "secondary"}>
            {cta}
            <ArrowUpRight aria-hidden className="h-4 w-4" />
          </Button>
        </div>
      ) : null}
    </Card>
  );
}


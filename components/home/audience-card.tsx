import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { audienceCards } from "@/lib/content/home";

type AudienceCardProps = {
  item: (typeof audienceCards)[number];
  featured?: boolean;
};

export function AudienceCard({ item, featured = false }: AudienceCardProps) {
  const Icon = item.icon;

  return (
    <Card className="flex h-full min-h-[252px] flex-col" premium={featured}>
      <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
        <Icon aria-hidden className="h-7 w-7 text-[#ffd84d]" />
      </span>
      <h3 className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-6 text-white/72">{item.description}</p>
      <Link
        className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.08em] text-[#ffe98b] transition hover:gap-3"
        href={item.href}
      >
        {item.cta}
        <ChevronRight aria-hidden className="h-4 w-4" />
      </Link>
    </Card>
  );
}

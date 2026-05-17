import type { IconContent } from "@/lib/content/home";
import { Card } from "@/components/ui/card";

export function ProblemCard({ item }: { item: IconContent }) {
  const Icon = item.icon;

  return (
    <Card className="h-full min-h-[188px]">
      <span className="grid h-11 w-11 place-items-center rounded-md border border-[#ffd84d]/20 bg-[#ffd84d]/10">
        <Icon aria-hidden className="h-6 w-6 text-[#ffd84d]" />
      </span>
      <h3 className="mt-5 text-lg font-black uppercase leading-tight text-white md:text-xl">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/70">{item.description}</p>
    </Card>
  );
}

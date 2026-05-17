import { CalendarDays, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { eventCards } from "@/lib/content/home";

type EventCardProps = {
  item: (typeof eventCards)[number];
};

export function EventCard({ item }: EventCardProps) {
  return (
    <Card className="flex h-full min-h-[258px] flex-col" premium>
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-md border border-[#ffd84d]/25 bg-black/30">
          <CalendarDays aria-hidden className="h-6 w-6 text-[#ffd84d]" />
        </span>
        <span className="max-w-[58%] rounded-md border border-[#ffd84d]/25 px-2 py-1 text-right text-[10px] font-black uppercase leading-4 tracking-[0.14em] text-[#ffe98b]">
          {item.status}
        </span>
      </div>
      <h3 className="mt-5 text-[clamp(1.7rem,7vw,2rem)] font-black uppercase leading-[0.98] text-white">{item.title}</h3>
      <p className="mt-4 text-sm leading-6 text-white/72">{item.description}</p>
      <div className="mt-auto grid gap-2 pt-5 text-sm text-white/70">
        <span className="rounded-md border border-white/10 bg-white/[0.045] px-3 py-2 font-bold">{item.modality}</span>
        <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-3 py-2">
          <MapPin aria-hidden className="h-4 w-4 text-[#ffd84d]" />
          {item.location}
        </span>
      </div>
    </Card>
  );
}

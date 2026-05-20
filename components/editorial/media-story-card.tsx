import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { EditorialCard } from "@/lib/content/home-editorial";
import { siteImages } from "@/lib/content/site-images";
import { EditorialImage } from "./editorial-image";

type MediaStoryCardProps = {
  story: EditorialCard;
};

export function MediaStoryCard({ story }: MediaStoryCardProps) {
  const Icon = story.icon;
  const image = story.imageKey ? siteImages[story.imageKey] : undefined;

  return (
    <article className="grid min-h-full overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-[0_20px_60px_rgba(0,0,0,0.24)] md:grid-rows-[180px_1fr]">
      <EditorialImage className="min-h-[180px] rounded-none border-0" image={image} label={story.eyebrow} />
      <div className="flex min-h-[244px] flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ffe98b]">{story.eyebrow}</div>
          {Icon ? <Icon aria-hidden className="h-5 w-5 shrink-0 text-[#ffd84d]" /> : null}
        </div>
        <h3 className="mt-4 text-2xl font-black uppercase leading-[0.95] text-white">{story.title}</h3>
        <p className="mt-3 text-sm leading-6 text-white/68">{story.description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-5">
          {story.meta ? (
            <span className="text-[11px] font-black uppercase tracking-[0.14em] text-white/45">{story.meta}</span>
          ) : null}
          {story.href && story.cta ? (
            <Button className="min-h-9 px-3 py-2 text-[11px]" href={story.href} variant="secondary">
              {story.cta}
              <ArrowUpRight aria-hidden className="h-3.5 w-3.5" />
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}


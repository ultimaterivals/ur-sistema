import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { SiteImage } from "@/lib/content/site-images";
import { cn } from "@/lib/utils/cn";
import { EditorialImage } from "./editorial-image";

type ImageFeatureCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  image?: SiteImage;
  href?: string;
  cta?: string;
  className?: string;
};

export function ImageFeatureCard({ eyebrow, title, description, image, href, cta, className }: ImageFeatureCardProps) {
  return (
    <article className={cn("group relative min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-[#111218]", className)}>
      <EditorialImage className="absolute inset-0 rounded-none border-0" image={image} />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.82))]" />
      <div className="relative flex min-h-[360px] flex-col justify-end p-5 md:p-7">
        <div className="text-[11px] font-black uppercase tracking-[0.16em] text-[#ffe98b]">{eyebrow}</div>
        <h3 className="mt-3 max-w-xl text-balance text-[clamp(2rem,8vw,3.35rem)] font-black uppercase leading-[0.9] text-white">{title}</h3>
        <p className="mt-4 max-w-xl text-sm leading-6 text-white/76 md:text-base">{description}</p>
        {href && cta ? (
          <div className="mt-6">
            <Button className="min-h-10 px-4 py-2 text-xs" href={href}>
              {cta}
              <ArrowUpRight aria-hidden className="h-4 w-4" />
            </Button>
          </div>
        ) : null}
      </div>
    </article>
  );
}


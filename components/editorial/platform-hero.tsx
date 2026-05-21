import { ArrowRight, CircleDot, Radio, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { SiteImage } from "@/lib/content/site-images";
import { cn } from "@/lib/utils/cn";
import { EditorialImage } from "./editorial-image";

type PlatformHeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

type PlatformHeroMetric = {
  label: string;
  value: string;
};

type PlatformHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: SiteImage;
  actions?: PlatformHeroAction[];
  badges?: readonly string[];
  metrics?: readonly PlatformHeroMetric[];
  statusLabel?: string;
  statusTitle?: string;
  statusDescription?: string;
  className?: string;
  imagePosition?: string;
};

export function PlatformHero({
  eyebrow,
  title,
  description,
  image,
  actions = [],
  badges = [],
  metrics = [],
  statusLabel = "próximo ciclo",
  statusTitle = "Tudo começa com cadastro, presença e respeito.",
  statusDescription = "A entrada passa por validação para manter equilíbrio, respeito e organização, sem nomes, datas ou promessas inventadas.",
  className,
  imagePosition = "center",
}: PlatformHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden border-t border-white/10 bg-[#030405] px-5 pb-10 pt-24 md:pb-14 md:pt-28 lg:px-8 lg:pb-16",
        className,
      )}
    >
      <EditorialImage
        className="absolute inset-0 -z-20 min-h-0 rounded-none border-0"
        image={image}
        objectPosition={imagePosition}
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,4,5,0.96)_0%,rgba(3,4,5,0.82)_42%,rgba(3,4,5,0.42)_72%,rgba(3,4,5,0.74)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-[linear-gradient(180deg,transparent,#030405_88%)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.09] [background-image:linear-gradient(rgba(255,255,255,.42)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.42)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="mx-auto grid max-w-7xl items-end gap-8 lg:grid-cols-[minmax(0,1.04fr)_minmax(330px,0.7fr)]">
        <div className="min-w-0">
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-5 max-w-5xl text-balance text-[clamp(2.55rem,9vw,4.6rem)] font-black uppercase leading-[0.96] tracking-normal text-white md:text-[clamp(3.35rem,5.8vw,5.25rem)]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 md:text-lg md:leading-8">
            {description}
          </p>

          {actions.length > 0 ? (
            <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
              {actions.map((action, index) => (
                <Button
                  className={index === 0 ? "w-full sm:w-auto" : "min-h-10 w-full px-3 py-2 text-xs shadow-none sm:w-auto"}
                  href={action.href}
                  key={action.href}
                  variant={action.variant ?? (index === 0 ? "primary" : "secondary")}
                >
                  {action.label}
                  {index === 0 ? <ArrowRight aria-hidden className="h-4 w-4" /> : null}
                </Button>
              ))}
            </div>
          ) : null}

          {badges.length > 0 ? (
            <div className="mt-7 flex max-w-3xl flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  className="rounded-md border border-white/10 bg-black/35 px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-white/70"
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="rounded-xl border border-[#ffd84d]/20 bg-black/55 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur md:p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">
                <Radio aria-hidden className="h-4 w-4" />
                {statusLabel}
              </div>
              <h2 className="mt-3 text-2xl font-black uppercase leading-[0.98] text-white">
                {statusTitle}
              </h2>
            </div>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[#ffd84d]/25 bg-[#ffd84d]/10 text-[#ffd84d]">
              <Trophy aria-hidden className="h-5 w-5" />
            </span>
          </div>

          <p className="mt-4 text-sm leading-6 text-white/68">{statusDescription}</p>

          {metrics.length > 0 ? (
            <div className="mt-5 grid gap-2">
              {metrics.map((metric) => (
                <div
                  className="grid grid-cols-1 gap-2 rounded-lg border border-white/10 bg-white/[0.045] px-3 py-3 sm:grid-cols-[110px_1fr] sm:gap-3"
                  key={`${metric.label}-${metric.value}`}
                >
                  <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.12em] text-white/45">
                    <CircleDot aria-hidden className="h-3 w-3 text-[#ffd84d]" />
                    {metric.label}
                  </span>
                  <span className="text-sm font-black uppercase leading-5 text-white">{metric.value}</span>
                </div>
              ))}
            </div>
          ) : null}
        </aside>
      </div>
    </section>
  );
}

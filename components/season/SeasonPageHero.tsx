import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { EditorialImage } from "@/components/editorial/editorial-image";
import { Button } from "@/components/ui/button";
import type { SiteImage } from "@/lib/content/site-images";
import { cn } from "@/lib/utils/cn";

type SeasonHeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

type SeasonHeroStat = {
  label: string;
  value: string;
};

type SeasonPageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  image: SiteImage;
  actions?: readonly SeasonHeroAction[];
  badges?: readonly string[];
  stats?: readonly SeasonHeroStat[];
  panel?: ReactNode;
  className?: string;
  imagePosition?: string;
};

export function SeasonPageHero({
  eyebrow,
  title,
  description,
  image,
  actions = [],
  badges = [],
  stats = [],
  panel,
  className,
  imagePosition = "center",
}: SeasonPageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-[#0A0A0B] px-5 pb-12 pt-12 md:py-18 lg:px-8 lg:py-20",
        className,
      )}
    >
      <EditorialImage
        className="absolute inset-0 -z-30 min-h-0 rounded-none border-0 opacity-28"
        image={image}
        objectPosition={imagePosition}
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(10,10,11,0.97)_0%,rgba(10,10,11,0.82)_52%,rgba(10,10,11,0.56)_100%)]" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.1]"
        style={{
          backgroundImage: "url(/season-1/textures/bg-sand-texture.svg)",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage: "url(/season-1/textures/bg-arena-grid.svg)",
          backgroundSize: "cover",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-[linear-gradient(180deg,transparent,#0A0A0B)]" />

      <div className="mx-auto grid max-w-7xl gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.46fr)] lg:items-end">
        <div className="min-w-0">
          <span
            className="inline-flex items-center gap-2 rounded-sm border border-[rgba(212,164,55,0.35)] bg-[rgba(212,164,55,0.10)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#D4A437]"
            style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4A437]" />
            {eyebrow}
          </span>
          <h1
            className="mt-5 max-w-5xl text-balance text-[clamp(3rem,13vw,5.7rem)] font-bold uppercase leading-[0.88] text-[#F4F0E6]"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.02em" }}
          >
            {title}
          </h1>
          <p
            className="mt-5 max-w-2xl text-[15px] leading-7 md:text-lg md:leading-8"
            style={{ color: "rgba(244,240,230,0.74)", fontFamily: "'Manrope', system-ui, sans-serif" }}
          >
            {description}
          </p>

          {actions.length ? (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {actions.map((action, index) => (
                <Button
                  className={index === 0 ? "w-full sm:w-auto" : "w-full sm:w-auto"}
                  href={action.href}
                  key={`${action.href}-${action.label}`}
                  variant={action.variant ?? (index === 0 ? "primary" : "secondary")}
                >
                  {action.label}
                  {index === 0 ? <ArrowRight aria-hidden className="h-4 w-4" /> : null}
                </Button>
              ))}
            </div>
          ) : null}

          {badges.length ? (
            <div className="mt-7 flex max-w-3xl flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  className="rounded border border-[rgba(212,164,55,0.18)] bg-[#14141A]/75 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D4A437]"
                  key={badge}
                  style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
                >
                  {badge}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <aside className="rounded-lg border border-[rgba(212,164,55,0.18)] bg-[#14141A]/90 p-3 shadow-[0_8px_40px_rgba(0,0,0,0.55)] backdrop-blur sm:p-4">
          {panel ?? (
            <div className="grid gap-3">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4A437]"
                style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
              >
                Resumo rápido
              </p>
              {stats.map((stat) => (
                <div
                  className="flex items-center justify-between gap-3 rounded border border-white/10 bg-white/[0.035] px-3 py-3"
                  key={`${stat.label}-${stat.value}`}
                >
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A8A93]"
                    style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="text-sm font-bold uppercase text-[#D4A437]"
                    style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.06em" }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          )}
        </aside>
      </div>
    </section>
  );
}

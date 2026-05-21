import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2, CircleDot, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { SiteImage } from "@/lib/content/site-images";
import { cn } from "@/lib/utils/cn";
import { EditorialImage } from "./editorial-image";

type Action = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "ghost";
};

type Point = {
  title: string;
  description: string;
};

type ImageFeaturePanelProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: SiteImage;
  imagePosition?: string;
  points?: readonly Point[];
  actions?: readonly Action[];
  reverse?: boolean;
  statusLabel?: string;
};

export function ImageFeaturePanel({
  eyebrow,
  title,
  description,
  image,
  imagePosition = "center",
  points,
  actions,
  reverse = false,
  statusLabel,
}: ImageFeaturePanelProps) {
  return (
    <div
      className={cn(
        "grid gap-5 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,0.97fr)] lg:items-stretch",
        reverse && "lg:grid-cols-[minmax(0,0.97fr)_minmax(0,1.03fr)]",
      )}
    >
      <div className={cn("relative min-h-[390px] lg:min-h-[520px]", reverse && "lg:order-2")}>
        <EditorialImage
          className="absolute inset-0 rounded-lg border-[#ffd84d]/22"
          image={image}
          objectPosition={imagePosition}
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <Card className="flex flex-col justify-between p-5 md:p-8" premium>
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{eyebrow}</Badge>
            {statusLabel ? (
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-white/56">
                {statusLabel}
              </span>
            ) : null}
          </div>
          <h2 className="mt-5 text-balance text-[clamp(2.3rem,7vw,4rem)] font-black uppercase leading-[0.9] text-white">
            {title}
          </h2>
          <p className="mt-5 text-base leading-7 text-white/72 md:text-lg">{description}</p>
        </div>

        {points?.length ? (
          <div className="mt-7 grid gap-3">
            {points.map((point) => (
              <div className="rounded-lg border border-white/10 bg-black/24 p-4" key={point.title}>
                <h3 className="text-sm font-black uppercase tracking-[0.1em] text-[#ffe98b]">{point.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/64">{point.description}</p>
              </div>
            ))}
          </div>
        ) : null}

        {actions?.length ? (
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {actions.map((action) => (
              <Button href={action.href} key={action.href} variant={action.variant ?? "primary"}>
                {action.label}
                <ArrowRight aria-hidden className="h-4 w-4" />
              </Button>
            ))}
          </div>
        ) : null}
      </Card>
    </div>
  );
}

type TimelineStep = {
  label: string;
  title: string;
  description: string;
  status?: string;
};

export function ProcessTimeline({
  eyebrow,
  title,
  description,
  steps,
}: {
  eyebrow: string;
  title: string;
  description: string;
  steps: readonly TimelineStep[];
}) {
  return (
    <Card className="overflow-hidden p-0" premium>
      <div className="grid gap-4 border-b border-white/10 p-5 md:p-7 lg:grid-cols-[0.82fr_1fr] lg:items-end">
        <div>
          <Badge>{eyebrow}</Badge>
          <h2 className="mt-5 text-balance text-[clamp(2.2rem,7vw,3.7rem)] font-black uppercase leading-[0.9] text-white">
            {title}
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-white/68 lg:justify-self-end">{description}</p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <div
            className="relative min-h-[188px] border-b border-white/10 p-5 last:border-b-0 md:border-r md:last:border-r-0 xl:[&:nth-child(3n)]:border-r-0"
            key={step.label}
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-[#ffe98b]">{step.label}</span>
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#ffd84d]/22 bg-[#ffd84d]/10 text-sm font-black text-[#ffd84d]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 text-2xl font-black uppercase leading-[0.92] text-white">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-white/62">{step.description}</p>
            {step.status ? (
              <div className="mt-4 inline-flex rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-white/48">
                {step.status}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </Card>
  );
}

type DataItem = {
  label: string;
  value: string;
  detail: string;
  icon?: LucideIcon;
};

export function DataBoard({
  eyebrow,
  title,
  description,
  items,
  footer,
}: {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly DataItem[];
  footer?: ReactNode;
}) {
  return (
    <Card className="p-5 md:p-7" premium>
      <div className="grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
        <div>
          <Badge>{eyebrow}</Badge>
          <h2 className="mt-5 text-balance text-[clamp(2.2rem,7vw,3.8rem)] font-black uppercase leading-[0.9] text-white">
            {title}
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-white/68 lg:justify-self-end">{description}</p>
      </div>
      <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon ?? CircleDot;

          return (
            <div className="rounded-lg border border-white/10 bg-black/28 p-4" key={item.label}>
              <div className="flex items-start justify-between gap-3">
                <div className="text-[10px] font-black uppercase tracking-[0.14em] text-white/46">{item.label}</div>
                <Icon aria-hidden className="h-5 w-5 shrink-0 text-[#ffd84d]" />
              </div>
              <div className="mt-5 text-2xl font-black uppercase leading-none text-white">{item.value}</div>
              <p className="mt-3 text-sm leading-6 text-white/60">{item.detail}</p>
            </div>
          );
        })}
      </div>
      {footer ? <div className="mt-6">{footer}</div> : null}
    </Card>
  );
}

type LeaderboardItem = {
  position: string;
  title: string;
  status: string;
  meta: string;
};

export function LeaderboardPanel({
  eyebrow,
  title,
  description,
  tabs,
  rows,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  tabs: readonly string[];
  rows: readonly LeaderboardItem[];
  image?: SiteImage;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
      {image ? (
        <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-[#ffd84d]/22 bg-black">
          <EditorialImage className="absolute inset-0 rounded-none border-0" image={image} objectPosition="center 38%" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.74)_74%,#030405)]" />
          <div className="relative flex min-h-[430px] flex-col justify-end p-5 md:p-7">
            <Badge>{eyebrow}</Badge>
            <h2 className="mt-4 text-balance text-[clamp(2.2rem,7vw,3.9rem)] font-black uppercase leading-[0.88] text-white">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/72">{description}</p>
          </div>
        </div>
      ) : null}
      <Card className="p-4 md:p-6" premium>
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab, index) => (
            <span
              className={cn(
                "rounded-md border px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em]",
                index === 0
                  ? "border-[#ffd84d]/45 bg-[#ffd84d]/12 text-[#ffe98b]"
                  : "border-white/10 bg-white/[0.04] text-white/46",
              )}
              key={tab}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="mt-5 grid gap-3">
          {rows.map((row, index) => (
            <div
              className={cn(
                "grid grid-cols-[auto_1fr] gap-4 rounded-lg border p-4",
                index === 0 ? "border-[#ffd84d]/35 bg-[#ffd84d]/10" : "border-white/10 bg-black/24",
              )}
              key={row.position}
            >
              <div className="grid h-14 w-14 place-items-center rounded-lg border border-[#ffd84d]/24 bg-black/30 text-xl font-black text-[#ffd84d]">
                {row.position}
              </div>
              <div>
                <h3 className="text-xl font-black uppercase leading-none text-white">{row.title}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-[#ffe98b]">{row.status}</p>
                <p className="mt-2 text-sm leading-6 text-white/58">{row.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

type ProfileField = {
  label: string;
  value: string;
};

export function ProfileMockup({
  eyebrow,
  title,
  description,
  fields,
  highlights,
  image,
  cta,
}: {
  eyebrow: string;
  title: string;
  description: string;
  fields: readonly ProfileField[];
  highlights?: readonly string[];
  image?: SiteImage;
  cta?: Action;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:items-stretch">
      <Card className="p-5 md:p-7" premium>
        <Badge>{eyebrow}</Badge>
        <h2 className="mt-5 text-balance text-[clamp(2.2rem,7vw,3.8rem)] font-black uppercase leading-[0.9] text-white">
          {title}
        </h2>
        <p className="mt-5 text-base leading-7 text-white/70">{description}</p>
        <div className="mt-7 grid gap-3 sm:grid-cols-2">
          {fields.map((field) => (
            <div className="rounded-lg border border-white/10 bg-black/28 p-4" key={field.label}>
              <div className="text-[10px] font-black uppercase tracking-[0.14em] text-white/42">{field.label}</div>
              <div className="mt-3 text-lg font-black uppercase leading-none text-white">{field.value}</div>
            </div>
          ))}
        </div>
        {highlights?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {highlights.map((highlight) => (
              <span
                className="inline-flex items-center gap-2 rounded-md border border-[#ffd84d]/16 bg-[#ffd84d]/6 px-3 py-2 text-xs font-bold uppercase tracking-[0.08em] text-[#ffe98b]"
                key={highlight}
              >
                <CheckCircle2 aria-hidden className="h-4 w-4" />
                {highlight}
              </span>
            ))}
          </div>
        ) : null}
        {cta ? (
          <Button className="mt-7 w-full sm:w-auto" href={cta.href} variant={cta.variant ?? "primary"}>
            {cta.label}
            <ArrowRight aria-hidden className="h-4 w-4" />
          </Button>
        ) : null}
      </Card>
      <div className="relative min-h-[410px]">
        {image ? (
          <EditorialImage className="absolute inset-0 border-[#ffd84d]/20" image={image} objectPosition="center 38%" />
        ) : (
          <Card className="grid place-items-center text-center" premium>
            <Trophy aria-hidden className="h-12 w-12 text-[#ffd84d]" />
          </Card>
        )}
      </div>
    </div>
  );
}

type CommercialAsset = {
  label: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};

export function CommercialAssetPanel({
  eyebrow,
  title,
  description,
  assets,
}: {
  eyebrow: string;
  title: string;
  description: string;
  assets: readonly CommercialAsset[];
}) {
  return (
    <Card className="p-5 md:p-7" premium>
      <div className="grid gap-5 lg:grid-cols-[0.72fr_1fr] lg:items-end">
        <div>
          <Badge>{eyebrow}</Badge>
          <h2 className="mt-5 text-balance text-[clamp(2.2rem,7vw,3.7rem)] font-black uppercase leading-[0.9] text-white">
            {title}
          </h2>
        </div>
        <p className="max-w-2xl text-base leading-7 text-white/68 lg:justify-self-end">{description}</p>
      </div>
      <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {assets.map((asset) => {
          const Icon = asset.icon ?? CircleDot;

          return (
            <div className="rounded-lg border border-white/10 bg-black/28 p-4" key={asset.title}>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#ffe98b]">
                  {asset.label}
                </span>
                <Icon aria-hidden className="h-5 w-5 text-[#ffd84d]" />
              </div>
              <h3 className="mt-5 text-xl font-black uppercase leading-none text-white">{asset.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{asset.description}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

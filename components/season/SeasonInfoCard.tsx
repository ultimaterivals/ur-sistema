import type { ReactNode } from "react";
import { URArtCard } from "./URArtCard";

type SeasonInfoCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  icon?: string;
  meta?: string;
  children?: ReactNode;
  className?: string;
};

export function SeasonInfoCard({
  eyebrow,
  title,
  description,
  icon,
  meta,
  children,
  className,
}: SeasonInfoCardProps) {
  return (
    <URArtCard className={`flex min-h-[232px] flex-col gap-4 p-5 sm:p-6 ${className ?? ""}`}>
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage: "url(/season-1/textures/bg-energy-lines.svg)",
          backgroundSize: "cover",
        }}
      />
      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          {eyebrow ? (
            <p
              className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D4A437]"
              style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
            >
              {eyebrow}
            </p>
          ) : null}
          <h3
            className="mt-2 text-2xl font-bold uppercase leading-[0.95] text-[#F4F0E6] group-hover:text-[#D4A437]"
            style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.04em" }}
          >
            {title}
          </h3>
        </div>
        {icon ? (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-[rgba(212,164,55,0.24)] bg-[rgba(212,164,55,0.08)]">
            <img alt="" aria-hidden className="h-6 w-6" loading="lazy" src={icon} />
          </span>
        ) : null}
      </div>
      <p
        className="relative z-10 text-[15px] leading-7 text-[#8A8A93]"
        style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
      >
        {description}
      </p>
      {children ? <div className="relative z-10 mt-auto">{children}</div> : null}
      {meta ? (
        <p
          className="relative z-10 mt-auto border-t border-white/10 pt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#D4A437]/70"
          style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
        >
          {meta}
        </p>
      ) : null}
    </URArtCard>
  );
}

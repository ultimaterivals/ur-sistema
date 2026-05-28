import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type SeasonSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: string;
  children: ReactNode;
  className?: string;
  variant?: "base" | "raised";
};

export function SeasonSection({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  variant = "base",
}: SeasonSectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-24 overflow-hidden border-t border-[rgba(212,164,55,0.12)] px-5 py-12 md:scroll-mt-28 md:py-16 lg:px-8 lg:py-20",
        variant === "base" ? "bg-[#0A0A0B]" : "bg-[#0D0D12]",
        className,
      )}
      id={id}
    >
      <div className="mx-auto max-w-7xl">
        {eyebrow || title || description ? (
          <div className="mb-8 max-w-3xl">
            {eyebrow ? (
              <p
                className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D4A437]"
                style={{ fontFamily: "'Manrope', system-ui, sans-serif" }}
              >
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2
                className="mt-3 text-balance text-3xl font-bold uppercase leading-[0.92] text-[#F4F0E6] md:text-4xl"
                style={{ fontFamily: "'Oswald', sans-serif", letterSpacing: "0.03em" }}
              >
                {title}
              </h2>
            ) : null}
            {description ? (
              <p
                className="mt-4 text-sm leading-6 md:text-base md:leading-7"
                style={{ color: "#8A8A93", fontFamily: "'Manrope', system-ui, sans-serif" }}
              >
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}

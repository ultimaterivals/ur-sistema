import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  id,
  className,
  children,
  tone = "base",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "base" | "deep" | "panel";
}) {
  const bg =
    tone === "deep"
      ? "bg-ur-black-deep"
      : tone === "panel"
        ? "bg-ur-graphite/40"
        : "bg-transparent";
  return (
    <section id={id} className={cn("relative py-20 sm:py-28", bg, className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("ur-eyebrow inline-flex items-center gap-2 text-xs text-ur-gold", className)}>
      <span className="h-px w-6 bg-ur-gold/60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="ur-display max-w-3xl text-4xl leading-[0.92] text-ur-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {lead ? (
        <p className={cn("max-w-2xl text-base leading-7 text-ur-sand/70 sm:text-lg", align === "center" && "mx-auto")}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
};

export function UrButton({ href, children, variant = "primary", size = "md", className }: ButtonProps) {
  const base =
    "ur-condensed group inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ur-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ur-black";
  const sizes = size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm";
  const variants = {
    primary:
      "bg-gradient-to-b from-ur-gold-bright to-ur-gold text-ur-black-deep shadow-[0_8px_30px_rgba(224,168,46,0.28)] hover:shadow-[0_12px_44px_rgba(224,168,46,0.42)] hover:-translate-y-0.5",
    secondary:
      "border border-ur-gold/40 text-ur-gold hover:border-ur-gold hover:bg-ur-gold/10",
    ghost: "text-ur-sand/80 hover:text-ur-gold",
  }[variant];
  return (
    <Link href={href} className={cn(base, sizes, variants, className)}>
      {children}
      {variant === "primary" ? (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      ) : (
        <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
      )}
    </Link>
  );
}

export function GoldDivider({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-gradient-to-r from-transparent via-ur-gold/30 to-transparent", className)} />;
}

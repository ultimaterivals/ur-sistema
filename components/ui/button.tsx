import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[linear-gradient(135deg,#ffd84d,#c9a84c)] text-black shadow-[0_0_24px_rgba(255,216,77,0.18)] hover:brightness-110",
  secondary:
    "border-[#ffd84d]/35 bg-[#ffd84d]/10 text-[#ffe98b] hover:border-[#ffd84d]/55 hover:bg-[#ffd84d]/15",
  ghost:
    "border-white/10 bg-white/[0.045] text-white/80 hover:border-white/25 hover:bg-white/[0.075]",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 max-w-full items-center justify-center gap-2 rounded-lg border px-5 py-3 text-center text-sm font-extrabold uppercase leading-5 tracking-[0.08em] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ffd84d]",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link aria-label={ariaLabel} className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button aria-label={ariaLabel} className={classes} type={type}>
      {children}
    </button>
  );
}

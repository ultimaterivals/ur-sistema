import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit max-w-full items-center rounded-md border border-[#ffd84d]/25 bg-[#ffd84d]/10 px-3 py-1 text-[11px] font-extrabold uppercase leading-4 tracking-[0.18em] text-[#ffe98b]",
        className,
      )}
    >
      {children}
    </span>
  );
}

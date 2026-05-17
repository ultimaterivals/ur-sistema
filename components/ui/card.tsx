import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  premium?: boolean;
};

export function Card({ children, className, premium = false }: CardProps) {
  return (
    <div
      className={cn(
        "min-h-full min-w-0 rounded-lg border bg-[#111218]/90 p-5 shadow-[0_18px_48px_rgba(0,0,0,0.24)] transition duration-200 hover:-translate-y-0.5 hover:border-[#ffd84d]/25 md:p-6",
        premium
          ? "border-[#ffd84d]/25 bg-[radial-gradient(circle_at_18%_0%,rgba(255,216,77,0.13),transparent_34%),linear-gradient(160deg,rgba(255,216,77,0.09),rgba(17,18,24,0.94)_42%,rgba(255,255,255,0.035))]"
          : "border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))]",
        className,
      )}
    >
      {children}
    </div>
  );
}

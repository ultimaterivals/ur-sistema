import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface URArtCardProps {
  className?: string;
  variant?: "default" | "active" | "legends" | "disabled";
  onClick?: () => void;
  children: ReactNode;
  as?: "div" | "article" | "li";
}

export function URArtCard({
  className,
  variant = "default",
  onClick,
  children,
  as: Tag = "div",
}: URArtCardProps) {
  const base =
    "relative overflow-hidden rounded-lg border transition-all duration-250 group";
  const variants = {
    default:
      "bg-[#14141A] border-[rgba(212,164,55,0.15)] shadow-[0_4px_24px_rgba(0,0,0,0.30)] hover:border-[#D4A437] hover:shadow-[0_8px_48px_rgba(212,164,55,0.15)] hover:scale-[1.02] hover:bg-[rgba(212,164,55,0.04)]",
    active:
      "bg-[#14141A] border-2 border-[#D4A437]",
    legends:
      "bg-[linear-gradient(180deg,#2A1F0C_0%,#14141A_100%)] border-2 border-[#D4A437] shadow-[0_0_40px_rgba(212,164,55,0.30)]",
    disabled:
      "bg-[#14141A] border-[rgba(138,138,147,0.2)] opacity-50 pointer-events-none",
  };

  return (
    <Tag
      className={cn(base, variants[variant], className)}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      style={{ transition: "all 250ms cubic-bezier(0.4,0,0.2,1)" }}
    >
      {children}
    </Tag>
  );
}

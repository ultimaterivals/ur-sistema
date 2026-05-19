import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type PageSectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export function PageSection({ id, children, className = "" }: PageSectionProps) {
  return (
    <section
      className={cn(
        "scroll-mt-24 overflow-hidden border-t border-white/10 px-5 py-10 md:scroll-mt-28 md:py-14 lg:px-8 lg:py-16",
        className,
      )}
      id={id}
    >
      <div className="mx-auto max-w-7xl min-w-0">{children}</div>
    </section>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function RouteScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.history.scrollRestoration = "manual";

    if (window.location.hash) return;

    window.requestAnimationFrame(() => {
      window.scrollTo({ behavior: "auto", left: 0, top: 0 });
    });
  }, [pathname]);

  return null;
}

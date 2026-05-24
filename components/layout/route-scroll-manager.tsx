'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function RouteScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const hasHash = window.location.hash && window.location.hash.length > 1;

    if (hasHash) return;

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    scrollToTop();

    const frame = window.requestAnimationFrame(scrollToTop);
    const timeout = window.setTimeout(scrollToTop, 120);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [pathname]);

  return null;
}

export default RouteScrollManager;
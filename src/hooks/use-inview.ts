import { RefObject, useEffect } from "react";

type UseInViewOptions = {
  selector?: string;
  className?: string;
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
};

/**
 * useInView
 * Observes elements inside a container and adds a class when they enter the viewport.
 * - Uses IntersectionObserver (efficient)
 * - Applies class inside requestAnimationFrame to avoid layout thrashing
 * - Optionally unobserves elements after first reveal (once=true)
 */
export function useInView(
  containerRef: RefObject<HTMLElement | null>,
  {
    selector = ".animate-on-scroll",
    className = "fade-in-up",
    // Trigger earlier: small threshold + positive bottom rootMargin expands the viewport
    threshold = 0.05,
    rootMargin = "0px 0px 20% 0px",
    once = true,
  }: UseInViewOptions = {}
) {
  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const elements = Array.from(container.querySelectorAll<HTMLElement>(selector));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            // apply class in rAF to batch visual updates
            window.requestAnimationFrame(() => {
              el.classList.add(className);
            });
            if (once) obs.unobserve(el);
          }
        });
      },
      { threshold, rootMargin }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef, selector, className, threshold, rootMargin, once]);
}

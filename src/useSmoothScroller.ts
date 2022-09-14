import { useEffect, useRef } from "react";
import gsap from "gsap";

const useSmoothScroller = (ease = 0.6) => {
  let bestEase = Math.min(ease, 1);

  if (ease < 0) {
    bestEase = Math.min(Math.abs(ease), 1);
  }

  const container = useRef<HTMLDivElement>(null);
  const spacer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setupHeight = () => {
      if (container.current && spacer.current) {
        const height = container.current.getBoundingClientRect().height;
        spacer.current.style.height = `${height}px`;
      }
    };

    if (container.current) {
      container.current.style.position = "fixed";
      container.current.style.left = "0px";
      container.current.style.top = "0px";
      container.current.style.width = "100%";
      container.current.style.height = "min-content";
      container.current.style.zIndex = "0";
      container.current.style.boxSizing = "border-box";
    }

    if (spacer.current) {
      spacer.current.style.position = "relative";
      spacer.current.style.width = "1px";
      spacer.current.style.zIndex = "-10000";
    }

    setupHeight();

    window.addEventListener("resize", setupHeight);

    let animationFrame: number;

    const animate = () => {
      if (container.current) {
        const currentScrollPosition = window.scrollY || window.pageYOffset;
        gsap.to(container.current, {
          y: -currentScrollPosition,
          duration: bestEase,
        });
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setupHeight);

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return { container, spacer };
};

export default useSmoothScroller;

import { useEffect, useRef, useState } from "react";

export const useGradientHover = () => {
  const elementRef = useRef<HTMLHeadingElement>(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setGradientPosition({ x, y });
    };

    const handleMouseLeave = () => {
      setGradientPosition({ x: 50, y: 50 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const gradientStyle = {
    background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, hsl(var(--neon-green-light)), hsl(var(--neon-green)), hsl(var(--neon-green-dark)))`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: "background 0.1s ease",
  };

  return { elementRef, gradientStyle };
};

import { useEffect, useRef, useState } from "react";

export const useGradientHover = () => {
  const elementRef = useRef<HTMLHeadingElement>(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setGradientPosition({ x, y });
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setGradientPosition({ x: 50, y: 50 });
      setIsHovering(false);
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  const gradientStyle = isHovering ? {
    background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, hsl(var(--neon-green-light)), hsl(var(--neon-green)), hsl(var(--accent)))`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    transition: "all 0.1s ease",
    userSelect: "none" as const,
  } : {
    color: "hsl(var(--foreground))",
    transition: "all 0.3s ease",
    userSelect: "none" as const,
  };

  return { elementRef, gradientStyle };
};

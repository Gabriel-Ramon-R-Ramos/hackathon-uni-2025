import { useEffect, useRef, useState } from "react";

export const useGradientHover = () => {
  const elementRef = useRef<HTMLHeadingElement>(null);
  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Ensure the element has the CSS class that applies background-clip:text
    element.classList.add("gradient-dynamic");

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
      element.classList.remove("gradient-dynamic");
    };
  }, []);

  // Expose only CSS variables and display-related props; the actual gradient is defined
  // in the CSS class (.gradient-dynamic) to avoid mixing inline background-image with class-based background-clip.
  const gradientStyle: Record<string, string> = {
    "--gx": `${gradientPosition.x}%`,
    "--gy": `${gradientPosition.y}%`,
    display: "inline-block",
  };

  return { elementRef, gradientStyle };
};

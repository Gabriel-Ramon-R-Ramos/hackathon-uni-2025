import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-background opacity-20" />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text-hover animate-on-scroll">
          Pronto para Inovar?
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
          Não perca a oportunidade de transformar suas ideias em realidade. 
          Junte-se a nós nesta jornada de inovação e aprendizado.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-on-scroll" style={{ animationDelay: "0.4s" }}>
          <Button 
            size="lg"
            className="text-xl px-12 py-8 bg-primary text-primary-foreground hover:bg-primary/90 pulse-glow transition-all duration-300 hover:scale-105"
          >
            Garantir Minha Vaga
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">48h</div>
            <div className="text-sm text-muted-foreground">De Imersão</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Participantes</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Possibilidades</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

import { useEffect, useRef } from "react";
import { useGradientHover } from "@/hooks/use-gradient-hover";

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { elementRef, gradientStyle } = useGradientHover();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scale-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      title: "Empregabilidade",
      description: "Desenvolva habilidades práticas e um portfólio que destaca você no mercado de trabalho",
      icon: "💼",
      color: "from-primary/20 to-primary/5"
    },
    {
      title: "Networking",
      description: "Conecte-se com profissionais, empresas e outros estudantes apaixonados por tecnologia",
      icon: "🤝",
      color: "from-accent/20 to-accent/5"
    },
    {
      title: "Inovação",
      description: "Aprenda metodologias ágeis e design thinking na prática, criando soluções inovadoras",
      icon: "✨",
      color: "from-primary/20 to-primary/5"
    },
    {
      title: "Impacto Social",
      description: "Contribua com soluções que fazem diferença real na comunidade e na sociedade",
      icon: "🌟",
      color: "from-accent/20 to-accent/5"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/20 rounded-lg rotate-12 float" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border border-accent/20 rounded-full float-delayed" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={elementRef}
          style={gradientStyle}
          className="text-4xl md:text-6xl font-bold text-center mb-4 animate-on-scroll cursor-default"
        >
          Por Que Participar?
        </h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-16 animate-on-scroll" />

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`animate-on-scroll group relative overflow-hidden bg-gradient-to-br ${benefit.color} border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 gradient-text-hover transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 transform rotate-45 translate-x-10 -translate-y-10 group-hover:bg-primary/20 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

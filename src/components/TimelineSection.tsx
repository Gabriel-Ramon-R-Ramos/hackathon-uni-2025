import { useEffect, useRef } from "react";

const TimelineSection = () => {
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

  const stages = [
    {
      number: "01",
      title: "Inscrições",
      description: "Abra as portas para a inovação. Inscreva-se individualmente ou com sua equipe e prepare-se para a jornada.",
      icon: "📝"
    },
    {
      number: "02",
      title: "Formação de Times",
      description: "Conecte-se com outros participantes. Monte equipes multidisciplinares e diversas para maximizar a criatividade.",
      icon: "👥"
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "48 horas intensas de colaboração, prototipagem e desenvolvimento. Transforme ideias em soluções tangíveis.",
      icon: "💻"
    },
    {
      number: "04",
      title: "Avaliação",
      description: "Apresente seu projeto para jurados especializados. Demonstre inovação, viabilidade e impacto social.",
      icon: "🏆"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden bg-darker-bg">
      {/* Background lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 glow-text animate-on-scroll">
          Etapas do Evento
        </h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-16 animate-on-scroll" />

        <div className="space-y-12">
          {stages.map((stage, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 animate-on-scroll ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-1 md:text-right">
                <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 glow-box-hover">
                  <div className="text-6xl mb-4">{stage.icon}</div>
                  <div className="text-4xl font-bold text-primary mb-2">{stage.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{stage.title}</h3>
                  <p className="text-muted-foreground">{stage.description}</p>
                </div>
              </div>

              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-primary border-4 border-background flex items-center justify-center pulse-glow">
                  <div className="w-4 h-4 rounded-full bg-background" />
                </div>
              </div>

              <div className="flex-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;

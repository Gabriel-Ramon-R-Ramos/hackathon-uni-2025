import { useEffect, useRef } from "react";
import { useGradientHover } from "@/hooks/use-gradient-hover";
import { useInView } from "@/hooks/use-inview";

const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { elementRef, gradientStyle } = useGradientHover();

  useInView(sectionRef, { selector: ".animate-on-scroll", className: "fade-in-up", threshold: 0.05, rootMargin: "0px 0px 18% 0px", once: true });

  const stages = [
    {
      number: "01",
      title: "Inscrições",
      description: "Abra as portas para a inovação. Inscreva-se individualmente ou com sua equipe e prepare-se para a jornada.",
      icon: (
        <svg viewBox="0 0 32 32" className="w-16 h-16 md:w-20 md:h-20" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden>
          <defs>
            <linearGradient id="grad-timeline-inscricoes" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--neon-green) / 1)" />
              <stop offset="100%" stopColor="hsl(var(--neon-green-light) / 1)" />
            </linearGradient>
          </defs>
          <path stroke="url(#grad-timeline-inscricoes)" strokeLinejoin="round" strokeWidth="2" d="M6 5a2 2 0 012-2h16a2 2 0 012 2v22a2 2 0 01-2 2H8a2 2 0 01-2-2V5z" />
          <path stroke="url(#grad-timeline-inscricoes)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 9h4M10 16h12M10 20h12M10 24h4" />
          <circle cx="22" cy="9" r="1" fill="url(#grad-timeline-inscricoes)" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Formação de Times",
      description: "Conecte-se com outros participantes. Monte equipes multidisciplinares e diversas para maximizar a criatividade.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-20 md:h-20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="grad-timeline-formacao" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--neon-green) / 1)" />
              <stop offset="100%" stopColor="hsl(var(--neon-green-light) / 1)" />
            </linearGradient>
          </defs>
          <path fill="url(#grad-timeline-formacao)" d="M16 6C14.3432 6 13 7.34315 13 9C13 10.6569 14.3432 12 16 12C17.6569 12 19 10.6569 19 9C19 7.34315 17.6569 6 16 6ZM11 9C11 6.23858 13.2386 4 16 4C18.7614 4 21 6.23858 21 9C21 10.3193 20.489 11.5193 19.6542 12.4128C21.4951 13.0124 22.9176 14.1993 23.8264 15.5329C24.1374 15.9893 24.0195 16.6114 23.5631 16.9224C23.1068 17.2334 22.4846 17.1155 22.1736 16.6591C21.1979 15.2273 19.4178 14 17 14C13.166 14 11 17.0742 11 19C11 19.5523 10.5523 20 10 20C9.44773 20 9.00001 19.5523 9.00001 19C9.00001 18.308 9.15848 17.57 9.46082 16.8425C9.38379 16.7931 9.3123 16.7323 9.24889 16.6602C8.42804 15.7262 7.15417 15 5.50001 15C3.84585 15 2.57199 15.7262 1.75114 16.6602C1.38655 17.075 0.754692 17.1157 0.339855 16.7511C-0.0749807 16.3865 -0.115709 15.7547 0.248886 15.3398C0.809035 14.7025 1.51784 14.1364 2.35725 13.7207C1.51989 12.9035 1.00001 11.7625 1.00001 10.5C1.00001 8.01472 3.01473 6 5.50001 6C7.98529 6 10 8.01472 10 10.5C10 11.7625 9.48013 12.9035 8.64278 13.7207C9.36518 14.0785 9.99085 14.5476 10.5083 15.0777C11.152 14.2659 11.9886 13.5382 12.9922 12.9945C11.7822 12.0819 11 10.6323 11 9ZM3.00001 10.5C3.00001 9.11929 4.1193 8 5.50001 8C6.88072 8 8.00001 9.11929 8.00001 10.5C8.00001 11.8807 6.88072 13 5.50001 13C4.1193 13 3.00001 11.8807 3.00001 10.5Z" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Desenvolvimento",
      description: "48 horas intensas de colaboração, prototipagem e desenvolvimento. Transforme ideias em soluções tangíveis.",
      icon: (
        <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-20 md:h-20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="grad-timeline-desenvolvimento" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--neon-green) / 1)" />
              <stop offset="100%" stopColor="hsl(var(--neon-green-light) / 1)" />
            </linearGradient>
          </defs>
          <path d="M3 19H21M6 17H18C19.1046 17 20 16.1046 20 15V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V15C4 16.1046 4.89543 17 6 17Z" stroke="url(#grad-timeline-desenvolvimento)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Avaliação",
      description: "Apresente seu projeto para jurados especializados. Demonstre inovação, viabilidade e impacto social.",
      icon: (
        <svg viewBox="0 0 32 32" className="w-16 h-16 md:w-20 md:h-20" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id="grad-timeline-avaliacao" x1="0%" x2="100%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--neon-green) / 1)" />
              <stop offset="100%" stopColor="hsl(var(--neon-green-light) / 1)" />
            </linearGradient>
          </defs>
          <path fill="url(#grad-timeline-avaliacao)" d="M24,27v-7c0-0.552-0.448-1-1-1h-4v-1.519c3.491-1.239,6-4.571,6-8.481V1c0-0.552-0.448-1-1-1H8
    C7.448,0,7,0.448,7,1v7.682c0,3.951,2.457,7.487,6,8.786V19H9c-0.552,0-1,0.448-1,1v7H7c-0.552,0-1,0.448-1,1v3c0,0.552,0.448,1,1,1
    h18c0.552,0,1-0.448,1-1v-3c0-0.552-0.448-1-1-1H24z M24,30H8v-1h16V30z M15,18h2v2h-2V18z M9,2h14v2H9V2z M9,9V5h14v4
    c0,3.86-3.14,7-7,7S9,12.86,9,9z M10,21h12v7H10V21z M12,23h8v1h-8V23z M12,25h8v1h-8V25z" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden bg-darker-bg">
      {/* Background lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent hidden md:block" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={elementRef}
          style={gradientStyle}
          className="text-4xl md:text-6xl font-bold text-center mb-4 animate-on-scroll cursor-default"
        >
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
                  <div className="mb-4">{stage.icon}</div>
                  <div className="text-4xl font-bold text-primary mb-2">{stage.number}</div>
                  <h3 className="text-2xl font-bold mb-3">{stage.title}</h3>
                  <p className="text-muted-foreground">{stage.description}</p>
                </div>
              </div>

              <div className="relative">
                <div className="timeline-bullet pulse-glow" aria-hidden>
                  <div className="timeline-bullet-inner" />
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

import { useEffect, useRef } from "react";
import { useGradientHover } from "@/hooks/use-gradient-hover";
import { useInView } from "@/hooks/use-inview";

const BenefitsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { elementRef, gradientStyle } = useGradientHover();

  useInView(sectionRef, { selector: ".animate-on-scroll", className: "scale-in", threshold: 0.05, rootMargin: "0px 0px 20% 0px", once: true });

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
                  {index === 0 && (
                    <svg viewBox="0 0 24 24" className="w-16 h-14 md:w-20 md:h-16" xmlns="http://www.w3.org/2000/svg" aria-hidden preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <linearGradient id="grad-empregabilidade" x1="0%" x2="100%">
                          <stop offset="0%" stopColor="hsl(var(--neon-green-light))" />
                          <stop offset="100%" stopColor="hsl(var(--neon-green))" />
                        </linearGradient>
                      </defs>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.052 1.25H11.948C11.0495 1.24997 10.3003 1.24995 9.70552 1.32991C9.07773 1.41432 8.51093 1.59999 8.05546 2.05546C7.59999 2.51093 7.41432 3.07773 7.32991 3.70552C7.24995 4.3003 7.24997 5.04951 7.25 5.94799V6.02572C7.07755 6.03136 6.91097 6.03824 6.75 6.04663V14.25L10.0345 14.25C10.2396 14.2499 10.4614 14.2498 10.6486 14.275C10.8679 14.3045 11.1481 14.3803 11.3839 14.6161C11.6197 14.8519 11.6955 15.1321 11.725 15.3514C11.7502 15.5387 11.7501 15.7605 11.75 15.9656V17.0345C11.7501 17.2396 11.7502 17.4614 11.725 17.6486C11.6955 17.8679 11.6197 18.1481 11.3839 18.3839C11.1481 18.6197 10.8679 18.6955 10.6486 18.725C10.4614 18.7502 10.2396 18.7501 10.0345 18.75L6.75 18.75V21.9534C7.64461 22 8.7124 22 10 22H14C15.2876 22 16.3554 22 17.25 21.9534V6.04663C17.089 6.03824 16.9225 6.03136 16.75 6.02572V5.94801C16.75 5.04954 16.7501 4.3003 16.6701 3.70552C16.5857 3.07773 16.4 2.51093 15.9445 2.05546C15.4891 1.59999 14.9223 1.41432 14.2945 1.32991C13.6997 1.24995 12.9505 1.24997 12.052 1.25ZM15.25 6.00189V6C15.25 5.03599 15.2484 4.38843 15.1835 3.9054C15.1214 3.44393 15.0142 3.24644 14.8839 3.11612C14.7536 2.9858 14.5561 2.87858 14.0946 2.81654C13.6116 2.7516 12.964 2.75 12 2.75C11.036 2.75 10.3884 2.7516 9.90539 2.81654C9.44393 2.87858 9.24644 2.9858 9.11612 3.11612C8.9858 3.24644 8.87858 3.44393 8.81654 3.9054C8.7516 4.38843 8.75 5.03599 8.75 6V6.00189C9.14203 6 9.55807 6 10 6H14C14.4419 6 14.858 6 15.25 6.00189Z" fill="url(#grad-empregabilidade)" />
                    </svg>
                  )}

                  {index === 1 && (
                    <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-20 md:h-20" xmlns="http://www.w3.org/2000/svg" aria-hidden preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <linearGradient id="grad-networking" x1="0%" x2="100%">
                          <stop offset="0%" stopColor="hsl(var(--neon-green-light))" />
                          <stop offset="100%" stopColor="hsl(var(--neon-green))" />
                        </linearGradient>
                      </defs>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2.90049C11.8811 3.07699 11.7346 3.33717 11.5164 3.72853L11.3853 3.96367C11.3756 3.98113 11.3655 3.99938 11.3551 4.01827C11.2466 4.21557 11.0991 4.48359 10.8555 4.66849C10.6074 4.85681 10.3083 4.92266 10.0944 4.96974C10.0741 4.97421 10.0546 4.97851 10.0359 4.98273L9.78136 5.04032C9.31618 5.14557 9.02629 5.21294 8.83149 5.28104C8.95194 5.462 9.15411 5.70102 9.48207 6.08453L9.6556 6.28745C9.66837 6.30237 9.68167 6.31778 9.69541 6.33367C9.84315 6.50471 10.0397 6.73224 10.1306 7.02438C10.2205 7.31348 10.19 7.61259 10.1668 7.84122C10.1646 7.86257 10.1625 7.88331 10.1605 7.90336L10.1343 8.1741C10.0874 8.65774 10.0586 8.9706 10.0594 9.19191C10.2516 9.12379 10.5149 9.0042 10.9166 8.81921L11.155 8.70948C11.1725 8.7014 11.1909 8.69281 11.21 8.68386C11.4078 8.59128 11.6885 8.45994 12 8.45994C12.3116 8.45994 12.5922 8.59128 12.7901 8.68386C12.8092 8.69281 12.8276 8.7014 12.8451 8.70948L13.0834 8.81921C13.4852 9.00421 13.7485 9.1238 13.9407 9.19191C13.9415 8.9706 13.9126 8.65774 13.8658 8.1741L13.8395 7.90336C13.8376 7.88331 13.8355 7.86257 13.8333 7.84123C13.8101 7.61259 13.7796 7.31348 13.8695 7.02438C13.9604 6.73224 14.1569 6.5047 14.3047 6.33367C14.3184 6.31778 14.3317 6.30237 14.3445 6.28744L14.518 6.08453C14.846 5.70102 15.0481 5.462 15.1686 5.28104C14.9738 5.21294 14.6839 5.14557 14.2187 5.04032L13.9642 4.98273C13.9455 4.97851 13.926 4.97421 13.9057 4.96974C13.6918 4.92266 13.3926 4.85681 13.1446 4.66849C12.901 4.48359 12.7535 4.21556 12.6449 4.01826C12.6345 3.99937 12.6245 3.98113 12.6148 3.96367L12.4837 3.72853C12.2655 3.33717 12.119 3.07699 12 2.90049Z" fill="url(#grad-networking)" />
                    </svg>
                  )}

                  {index === 2 && (
                    <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-20 md:h-20" xmlns="http://www.w3.org/2000/svg" aria-hidden preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <linearGradient id="grad-inovacao" x1="0%" x2="100%">
                          <stop offset="0%" stopColor="hsl(var(--neon-green-light))" />
                          <stop offset="100%" stopColor="hsl(var(--neon-green))" />
                        </linearGradient>
                      </defs>
                      <path d="M19.2107 6.36148C18.1707 4.26148 16.1607 2.71148 13.8307 2.20148C11.3907 1.66148 8.8907 2.24148 6.9807 3.78148C5.0607 5.31148 3.9707 7.60148 3.9707 10.0515C3.9707 12.6415 5.5207 15.3515 7.8607 16.9215V17.7515C7.8507 18.0315 7.8407 18.4615 8.1807 18.8115C8.5307 19.1715 9.0507 19.2115 9.4607 19.2115H14.5907C15.1307 19.2115 15.5407 19.0615 15.8207 18.7815C16.2007 18.3915 16.1907 17.8915 16.1807 17.6215V16.9215C19.2807 14.8315 21.2307 10.4215 19.2107 6.36148Z" fill="url(#grad-inovacao)" />
                      <path d="M15.2592 21.9984C15.1992 21.9984 15.1292 21.9884 15.0692 21.9684C13.0592 21.3984 10.9492 21.3984 8.93918 21.9684C8.56918 22.0684 8.17918 21.8584 8.07918 21.4884C7.96918 21.1184 8.18918 20.7284 8.55918 20.6284C10.8192 19.9884 13.1992 19.9884 15.4592 20.6284C15.8292 20.7384 16.0492 21.1184 15.9392 21.4884C15.8392 21.7984 15.5592 21.9984 15.2592 21.9984Z" fill="url(#grad-inovacao)" />
                    </svg>
                  )}

                  {index === 3 && (
                    <svg viewBox="0 0 24 24" className="w-16 h-16 md:w-20 md:h-20" xmlns="http://www.w3.org/2000/svg" aria-hidden preserveAspectRatio="xMidYMid meet">
                      <defs>
                        <radialGradient id="grad-impacto" cx="30%" cy="30%">
                          <stop offset="0%" stopColor="hsl(var(--neon-green-light))" />
                          <stop offset="60%" stopColor="hsl(var(--neon-green))" />
                          <stop offset="100%" stopColor="hsl(var(--neon-green-dark))" />
                        </radialGradient>
                      </defs>
                      <circle opacity="0.5" cx="12" cy="12" r="10" fill="url(#grad-impacto)" />
                      <path d="M8.57516 9.44737C8.3879 7.36316 6.7806 5.42105 6.00035 4.71053L5.56934 4.34189C7.30792 2.88037 9.55133 2 12.0004 2C14.2137 2 16.2592 2.7191 17.9158 3.93642C18.1498 4.64695 17.704 6.13158 17.2359 6.84211C17.0663 7.09947 16.6818 7.41898 16.2602 7.72186C15.3097 8.40477 14.1102 8.74254 13.5004 10C13.326 10.3595 13.3335 10.7108 13.4173 11.0163C13.4776 11.2358 13.5161 11.4745 13.5167 11.708C13.5187 12.4629 12.7552 13.0082 12.0004 13C10.0361 12.9786 8.7502 11.3955 8.57516 9.44737Z" fill="url(#grad-impacto)" />
                      <path d="M13.4365 18.2761C14.4246 16.414 17.7182 16.414 17.7182 16.414C21.1502 16.3782 21.6138 14.2944 21.9237 13.2412C21.369 17.7226 17.8494 21.2849 13.3885 21.9046C13.0659 21.2256 12.6837 19.6946 13.4365 18.2761Z" fill="url(#grad-impacto)" />
                    </svg>
                  )}
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

import { useEffect, useRef } from "react";

const AboutSection = () => {
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
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 glow-text animate-on-scroll">
          Sobre o Hackathon
        </h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-12 animate-on-scroll" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 animate-on-scroll glow-box-hover">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Propósito</h3>
            <p className="text-muted-foreground leading-relaxed">
              O Hackathon Universitário é um projeto de extensão que estimula estudantes a criarem soluções tecnológicas 
              para problemas reais da comunidade, conectando teoria e prática através de metodologias inovadoras.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 animate-on-scroll glow-box-hover" style={{ animationDelay: "0.2s" }}>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Metodologia</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fundamentado em conteúdos do Moodle, aprendizagem experiencial, design thinking e inovação aberta. 
              Uma experiência prática que transforma conhecimento em ação.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 animate-on-scroll glow-box-hover" style={{ animationDelay: "0.4s" }}>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Impacto Social</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fortalece a relação entre universidade, empresas e comunidade, gerando soluções que fazem diferença 
              na vida das pessoas e no desenvolvimento da sociedade.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 animate-on-scroll glow-box-hover" style={{ animationDelay: "0.6s" }}>
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💡</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Inovação</h3>
            <p className="text-muted-foreground leading-relaxed">
              Incentiva o empreendedorismo, aumenta a empregabilidade e promove o pensamento criativo 
              através de desafios reais e colaboração multidisciplinar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

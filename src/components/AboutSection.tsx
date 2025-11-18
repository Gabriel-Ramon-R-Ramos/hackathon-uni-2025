import { useEffect, useRef } from "react";
import { useGradientHover } from "@/hooks/use-gradient-hover";
import { useInView } from "@/hooks/use-inview";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { elementRef, gradientStyle } = useGradientHover();

  useInView(sectionRef, { selector: ".animate-on-scroll", className: "fade-in-up", threshold: 0.05, rootMargin: "0px 0px 20% 0px", once: true });

  return (
    <section ref={sectionRef} className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 
          ref={elementRef}
          style={gradientStyle}
          className="text-4xl md:text-6xl font-bold text-center mb-4 animate-on-scroll cursor-default"
        >
          Sobre o Hackathon
        </h2>
        <div className="w-32 h-1 bg-primary mx-auto mb-12 animate-on-scroll" />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="fancy-card bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 animate-on-scroll" style={{}}>
            <div className="fancy-icon mb-4" aria-hidden>
              <svg viewBox="0 0 16 16" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <radialGradient id="grad-proposito" cx="30%" cy="30%">
                    <stop offset="0%" stopColor="hsl(var(--neon-green-light))" />
                    <stop offset="60%" stopColor="hsl(var(--neon-green))" />
                    <stop offset="100%" stopColor="hsl(var(--neon-green-dark))" />
                  </radialGradient>
                </defs>
                <path d="M8.16923 2.00234C8.11301 2.00078 8.0566 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 7.9434 13.9992 7.88699 13.9977 7.83077L15.7642 6.06422C15.9182 6.68407 16 7.33249 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C8.66751 0 9.31593 0.0817526 9.93578 0.235791L8.16923 2.00234Z" fill="url(#grad-proposito)" />
                <path d="M4 7.99996C4 6.13612 5.27477 4.57002 7 4.12598V6.26752C6.4022 6.61333 6 7.25968 6 7.99996C6 9.10453 6.89543 9.99996 8 9.99996C8.74028 9.99996 9.38663 9.59776 9.73244 8.99996H11.874C11.4299 10.7252 9.86384 12 8 12C5.79086 12 4 10.2091 4 7.99996Z" fill="url(#grad-proposito)" />
                <path d="M14 2L13 0L10 3V4.58579L7.79289 6.79289L9.20711 8.20711L11.4142 6H13L16 3L14 2Z" fill="url(#grad-proposito)" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Propósito</h3>
            <p className="text-muted-foreground leading-relaxed">
              O Hackathon Universitário é um projeto de extensão que estimula estudantes a criarem soluções tecnológicas 
              para problemas reais da comunidade, conectando teoria e prática através de metodologias inovadoras.
            </p>
          </div>

          <div className="fancy-card bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 animate-on-scroll" style={{ animationDelay: "0.2s" }}>
            <div className="fancy-icon mb-4" aria-hidden>
              <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id="grad-metodologia" x1="0%" x2="100%">
                    <stop offset="0%" stopColor="hsl(var(--neon-green-light))" />
                    <stop offset="100%" stopColor="hsl(var(--neon-green))" />
                  </linearGradient>
                </defs>
                <path fillRule="evenodd" clipRule="evenodd" d="M15.5023 14.3674L20.5319 9.35289C21.2563 8.63072 21.6185 8.26963 21.8092 7.81046C22 7.3513 22 6.84065 22 5.81937V5.33146C22 3.76099 22 2.97576 21.5106 2.48788C21.0213 2 20.2337 2 18.6585 2H18.1691C17.1447 2 16.6325 2 16.172 2.19019C15.7114 2.38039 15.3493 2.74147 14.6249 3.46364L9.59522 8.47817C8.74882 9.32202 8.224 9.84526 8.02078 10.3506C7.95657 10.5103 7.92446 10.6682 7.92446 10.8339C7.92446 11.5238 8.48138 12.0791 9.59522 13.1896L9.74492 13.3388L11.4985 11.5591C11.7486 11.3053 12.1571 11.3022 12.4109 11.5523C12.6647 11.8024 12.6678 12.2109 12.4177 12.4647L10.6587 14.2499L10.7766 14.3674C11.8905 15.4779 12.4474 16.0331 13.1394 16.0331C13.2924 16.0331 13.4387 16.006 13.5858 15.9518C14.1048 15.7607 14.6345 15.2325 15.5023 14.3674ZM17.8652 8.47854C17.2127 9.12904 16.1548 9.12904 15.5024 8.47854C14.8499 7.82803 14.8499 6.77335 15.5024 6.12284C16.1548 5.47233 17.2127 5.47233 17.8652 6.12284C18.5177 6.77335 18.5177 7.82803 17.8652 8.47854Z" fill="url(#grad-metodologia)" />
                <path fillRule="evenodd" clipRule="evenodd" d="M2.77409 12.4814C3.07033 12.778 3.07004 13.2586 2.77343 13.5548L2.61779 13.7103C2.48483 13.8431 2.48483 14.058 2.61779 14.1908C2.75125 14.3241 2.96801 14.3241 3.10147 14.1908L4.8136 12.4807C5.1102 12.1845 5.59079 12.1848 5.88704 12.4814C6.18328 12.778 6.18298 13.2586 5.88638 13.5548L4.17426 15.2648C3.4481 15.9901 2.27116 15.9901 1.545 15.2648C0.818334 14.5391 0.818333 13.362 1.545 12.6362L1.70065 12.4807C1.99725 12.1845 2.47784 12.1848 2.77409 12.4814ZM7.29719 16.696C7.5903 16.9957 7.58495 17.4762 7.28525 17.7693L5.55508 19.4614C5.25538 19.7545 4.77481 19.7491 4.48171 19.4494C4.1886 19.1497 4.19395 18.6692 4.49365 18.3761L6.22382 16.684C6.52352 16.3909 7.00409 16.3963 7.29719 16.696ZM11.4811 18.118C11.7774 18.4146 11.7771 18.8952 11.4805 19.1915L9.76834 20.9015C9.63539 21.0343 9.63539 21.2492 9.76834 21.382C9.9018 21.5153 10.1186 21.5153 10.252 21.382L10.4077 21.2265C10.7043 20.9303 11.1849 20.9306 11.4811 21.2272C11.7774 21.5238 11.7771 22.0044 11.4805 22.3006L11.3248 22.4561C10.5987 23.1813 9.42171 23.1813 8.69556 22.4561C7.96889 21.7303 7.96889 20.5532 8.69556 19.8274L10.4077 18.1174C10.7043 17.8211 11.1849 17.8214 11.4811 18.118Z" fill="url(#grad-metodologia)" />
                <g opacity="0.5">
                  <path d="M10.8461 5.40925L8.65837 7.59037C8.25624 7.99126 7.88737 8.35901 7.59606 8.69145C7.40899 8.90494 7.22204 9.13861 7.06368 9.39679L7.04237 9.37554C7.00191 9.3352 6.98165 9.31501 6.96133 9.29529C6.58108 8.92635 6.1338 8.63301 5.64342 8.43097C5.61722 8.42018 5.59062 8.40964 5.53743 8.38856L5.2117 8.25949C4.77043 8.08464 4.65283 7.51659 4.9886 7.18184C5.95224 6.22112 7.10923 5.06765 7.6676 4.83597C8.16004 4.63166 8.692 4.56368 9.20505 4.6395C9.67514 4.70897 10.1198 4.95043 10.8461 5.40925Z" fill="url(#grad-metodologia)" />
                  <path d="M14.5816 16.8934C14.7579 17.0723 14.8749 17.1987 14.9808 17.3337C15.1204 17.5119 15.2453 17.7012 15.3542 17.8996C15.4767 18.123 15.5718 18.3616 15.7621 18.8389C15.9169 19.2274 16.4315 19.3301 16.7303 19.0322L16.8026 18.9601C17.7662 17.9993 18.9232 16.8458 19.1556 16.2891C19.3605 15.7982 19.4287 15.2678 19.3526 14.7563C19.283 14.2877 19.0408 13.8444 18.5807 13.1205L16.3857 15.3089C15.9745 15.7189 15.5974 16.0949 15.2564 16.3894C15.052 16.5659 14.8284 16.7423 14.5816 16.8934Z" fill="url(#grad-metodologia)" />
                </g>
                <g opacity="0.5">
                  <path d="M7.68621 14.5633C7.98263 14.2669 7.98263 13.7863 7.68621 13.4899C7.38979 13.1935 6.90919 13.1935 6.61277 13.4899L4.47036 15.6323C4.17394 15.9287 4.17394 16.4093 4.47036 16.7057C4.76679 17.0021 5.24738 17.0021 5.5438 16.7057L7.68621 14.5633Z" fill="url(#grad-metodologia)" />
                  <path d="M10.4954 17.369C10.7918 17.0726 10.7918 16.592 10.4954 16.2956C10.1989 15.9992 9.71835 15.9992 9.42193 16.2956L7.29417 18.4233C6.99774 18.7198 6.99774 19.2003 7.29417 19.4968C7.59059 19.7932 8.07118 19.7932 8.36761 19.4968L10.4954 17.369Z" fill="url(#grad-metodologia)" />
                </g>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Metodologia</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fundamentado em conteúdos do Moodle, aprendizagem experiencial, design thinking e inovação aberta. 
              Uma experiência prática que transforma conhecimento em ação.
            </p>
          </div>

          <div className="fancy-card bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 animate-on-scroll" style={{ animationDelay: "0.4s" }}>
            <div className="fancy-icon mb-4" aria-hidden>
              <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
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
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">Impacto Social</h3>
            <p className="text-muted-foreground leading-relaxed">
              Fortalece a relação entre universidade, empresas e comunidade, gerando soluções que fazem diferença 
              na vida das pessoas e no desenvolvimento da sociedade.
            </p>
          </div>

          <div className="fancy-card bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 animate-on-scroll" style={{ animationDelay: "0.6s" }}>
            <div className="fancy-icon mb-4" aria-hidden>
              <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id="grad-inovacao" x1="0%" x2="100%">
                    <stop offset="0%" stopColor="hsl(var(--neon-green-light))" />
                    <stop offset="100%" stopColor="hsl(var(--neon-green))" />
                  </linearGradient>
                </defs>
                <path d="M19.2107 6.36148C18.1707 4.26148 16.1607 2.71148 13.8307 2.20148C11.3907 1.66148 8.8907 2.24148 6.9807 3.78148C5.0607 5.31148 3.9707 7.60148 3.9707 10.0515C3.9707 12.6415 5.5207 15.3515 7.8607 16.9215V17.7515C7.8507 18.0315 7.8407 18.4615 8.1807 18.8115C8.5307 19.1715 9.0507 19.2115 9.4607 19.2115H14.5907C15.1307 19.2115 15.5407 19.0615 15.8207 18.7815C16.2007 18.3915 16.1907 17.8915 16.1807 17.6215V16.9215C19.2807 14.8315 21.2307 10.4215 19.2107 6.36148Z" fill="url(#grad-inovacao)" />
                <path d="M15.2592 21.9984C15.1992 21.9984 15.1292 21.9884 15.0692 21.9684C13.0592 21.3984 10.9492 21.3984 8.93918 21.9684C8.56918 22.0684 8.17918 21.8584 8.07918 21.4884C7.96918 21.1184 8.18918 20.7284 8.55918 20.6284C10.8192 19.9884 13.1992 19.9884 15.4592 20.6284C15.8292 20.7384 16.0492 21.1184 15.9392 21.4884C15.8392 21.7984 15.5592 21.9984 15.2592 21.9984Z" fill="url(#grad-inovacao)" />
              </svg>
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

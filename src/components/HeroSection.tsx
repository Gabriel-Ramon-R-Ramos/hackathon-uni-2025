import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hackathon Universitário 2025";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animation: "particle 10s linear infinite",
            }}
          />
        ))}
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30 rounded-lg float" />
      <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-accent/30 rotate-45 float-delayed" />
      <div className="absolute top-40 right-32 w-16 h-16 bg-primary/10 rounded-full float" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text-hover">
            {typedText}
            <span className="inline-block w-1 h-16 md:h-24 bg-primary ml-2 animate-pulse" />
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto fade-in-up" style={{ animationDelay: "3.5s" }}>
          Transforme ideias em soluções reais. Conecte teoria e prática. Inove com propósito.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up" style={{ animationDelay: "4s" }}>
          <Button 
            size="lg"
            className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 glow-box-hover transition-all duration-300 hover:scale-105"
          >
            Inscreva-se Agora
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300"
          >
            Saiba Mais
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 fade-in" style={{ animationDelay: "4.5s" }}>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

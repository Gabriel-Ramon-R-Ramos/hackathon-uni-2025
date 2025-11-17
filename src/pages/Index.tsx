import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TimelineSection from "@/components/TimelineSection";
import BenefitsSection from "@/components/BenefitsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <BenefitsSection />
      <CTASection />
      
      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="mb-2">Hackathon Universitário 2025</p>
          <p className="text-sm">Um projeto de extensão que transforma conhecimento em impacto social</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

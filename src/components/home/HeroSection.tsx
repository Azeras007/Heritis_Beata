import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  investorCta?: string;
  ownerCta?: string;
}

const HeroSection = ({
  title = "Investissez dans l'Avenir de la Viticulture",
  subtitle = "Connectez-vous avec des propriétaires de vignobles, financez des projets exceptionnels et rejoignez une communauté viticole florissante avec des avantages et récompenses exclusifs.",
  backgroundImage = "https://images.unsplash.com/photo-1566903451935-7e8833da3cb0?w=1920&q=80",
  investorCta = "Commencer à Investir",
  ownerCta = "Inscrire Votre Vignoble",
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[600px] bg-[#722F37] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Paysage de vignoble"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#722F37]/90 to-black/50"></div>
      </div>
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-cream-100 mb-8 max-w-xl text-white">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#722F37] hover:bg-[#5a252c] text-white border-2 border-white px-8 py-6 flex items-center gap-2"
              onClick={() => (window.location.href = "/projects")}
            >
              {investorCta}
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-6 flex items-center gap-2"
              onClick={() => (window.location.href = "/register")}
            >
              {ownerCta}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=investor${i}`}
                  alt="Investisseur"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="text-white text-sm">
              <span className="font-bold">500+</span> investisseurs déjà
              inscrits
            </p>
          </div>
        </div>
      </div>
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-24 bg-[#F5F5DC]/20 blur-3xl"></div>
      <div className="absolute top-20 right-20 w-24 h-24 rounded-full bg-[#2F4F4F]/20 blur-3xl"></div>
    </div>
  );
};

export default HeroSection;

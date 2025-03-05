import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Grape, Coins, Users } from "lucide-react";

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

const StepCard = ({
  icon = <Grape className="h-10 w-10 text-[#722F37]" />,
  title = "Titre de l'Étape",
  description = "Description de l'étape ici",
  stepNumber = 1,
}: StepCardProps) => {
  return (
    <Card className="relative overflow-hidden bg-white border-muted h-full">
      <div className="absolute top-0 right-0 bg-muted/10 text-muted-foreground font-bold text-5xl opacity-20 p-4">
        {stepNumber}
      </div>
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

interface HowItWorksProps {
  title?: string;
  subtitle?: string;
  investorSteps?: StepCardProps[];
  vineyardSteps?: StepCardProps[];
}

const HowItWorks = ({
  title = "Comment Fonctionne Heritis",
  subtitle = "Rejoignez notre communauté d'amateurs de vin et de propriétaires de vignobles pour créer un avenir durable pour la viticulture",
  investorSteps = [
    {
      icon: <Users className="h-10 w-10 text-[#722F37]" />,
      title: "Créez un Compte",
      description:
        "Inscrivez-vous et complétez votre profil d'investisseur pour commencer à découvrir des projets viticoles.",
      stepNumber: 1,
    },
    {
      icon: <Grape className="h-10 w-10 text-[#722F37]" />,
      title: "Découvrez des Projets",
      description:
        "Parcourez les vignobles en vedette et trouvez des projets qui correspondent à vos intérêts d'investissement.",
      stepNumber: 2,
    },
    {
      icon: <Coins className="h-10 w-10 text-[#722F37]" />,
      title: "Investissez & Gagnez des Récompenses",
      description:
        "Choisissez votre modèle d'investissement et recevez des récompenses exclusives en vin basées sur votre contribution.",
      stepNumber: 3,
    },
  ],
  vineyardSteps = [
    {
      icon: <Users className="h-10 w-10 text-[#722F37]" />,
      title: "Enregistrez Votre Vignoble",
      description:
        "Créez un profil détaillé présentant l'histoire de votre vignoble, son terroir et ses qualités uniques.",
      stepNumber: 1,
    },
    {
      icon: <Grape className="h-10 w-10 text-[#722F37]" />,
      title: "Créez un Projet",
      description:
        "Définissez vos objectifs de financement, le calendrier et les récompenses exclusives en vin pour vos investisseurs.",
      stepNumber: 2,
    },
    {
      icon: <Coins className="h-10 w-10 text-[#722F37]" />,
      title: "Recevez des Financements",
      description:
        "Connectez-vous avec des investisseurs passionnés et recevez le capital nécessaire pour développer votre vignoble.",
      stepNumber: 3,
    },
  ],
}: HowItWorksProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-[#F9F5F0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
            <span className="bg-[#722F37] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">
              1
            </span>
            Pour les Amateurs de Vin & Investisseurs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {investorSteps.map((step, index) => (
              <StepCard key={`investor-step-${index}`} {...step} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              className="bg-[#722F37] hover:bg-[#5a252c] text-white"
              size="lg"
            >
              Commencer à Investir <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
            <span className="bg-[#722F37] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">
              2
            </span>
            Pour les Propriétaires de Vignobles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {vineyardSteps.map((step, index) => (
              <StepCard key={`vineyard-step-${index}`} {...step} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button
              className="bg-[#722F37] hover:bg-[#5a252c] text-white"
              size="lg"
            >
              Inscrire Votre Vignoble <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

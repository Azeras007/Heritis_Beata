import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GiftIcon, CoinsIcon, TrendingUpIcon } from "lucide-react";

interface InvestmentOptionProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  benefits?: string[];
  buttonText?: string;
  accentColor?: string;
}

const InvestmentOptionCard = ({
  title = "Option d'Investissement",
  description = "Description de cette option d'investissement",
  icon,
  benefits = ["Avantage 1", "Avantage 2", "Avantage 3"],
  buttonText = "En Savoir Plus",
  accentColor = "#722F37",
}: InvestmentOptionProps) => {
  return (
    <Card
      className="flex flex-col h-full bg-white border-t-4"
      style={{ borderTopColor: accentColor }}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <div
            className="p-3 rounded-full"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            {icon}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </div>
        <CardDescription className="mt-2 text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <h4 className="font-medium mb-2 text-gray-800">Avantages:</h4>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="min-w-4 mt-1">
                <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              </div>
              <span className="text-sm text-gray-600">{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Button
          className="w-full text-white"
          style={{ backgroundColor: accentColor, borderColor: accentColor }}
          variant="outline"
          onClick={() => (window.location.href = "/projects")}
        >
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

interface InvestmentOptionsProps {
  title?: string;
  subtitle?: string;
  options?: InvestmentOptionProps[];
}

const InvestmentOptions = ({
  title = "Options d'Investissement",
  subtitle = "Choisissez le modèle d'investissement qui vous convient le mieux",
  options = [
    {
      title: "Don",
      description:
        "Soutenez les projets viticoles que vous aimez sans retour financier, mais recevez des récompenses exclusives en vin.",
      icon: <GiftIcon className="w-6 h-6 text-[#722F37]" />,
      benefits: [
        "Recevez des récompenses exclusives en vin selon votre niveau de contribution",
        "Invitations à des événements spéciaux au vignoble",
        "Reconnaissance sur le mur des soutiens du vignoble",
        "Avantages fiscaux là où c'est applicable",
      ],
      buttonText: "Faire un Don aux Projets",
      accentColor: "#722F37",
    },
    {
      title: "Prêt",
      description:
        "Fournissez du capital aux vignobles avec remboursement à terme fixe et intérêts, plus des avantages en vin.",
      icon: <CoinsIcon className="w-6 h-6 text-[#5E8C31]" />,
      benefits: [
        "Rendements d'intérêts fixes sur une période convenue",
        "Remboursement du principal à la fin du terme",
        "Allocation de vin basée sur le montant du prêt",
        "Risque plus faible que les investissements en actions",
      ],
      buttonText: "Explorer les Options de Prêt",
      accentColor: "#5E8C31",
    },
    {
      title: "Actions",
      description:
        "Devenez propriétaire partiel de vignobles avec potentiel de rendements à long terme et avantages premium.",
      icon: <TrendingUpIcon className="w-6 h-6 text-[#B8860B]" />,
      benefits: [
        "Participation au capital dans les opérations du vignoble",
        "Part des bénéfices et appréciation potentielle",
        "Allocations de vin premium et privilèges de propriétaire",
        "Droits de vote sur les décisions clés du vignoble",
      ],
      buttonText: "Investir en Actions",
      accentColor: "#B8860B",
    },
  ],
}: InvestmentOptionsProps) => {
  return (
    <section className="py-16 px-4 bg-[#F9F7F4]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => (
            <InvestmentOptionCard key={index} {...option} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;

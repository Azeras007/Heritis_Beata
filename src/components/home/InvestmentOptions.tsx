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
  title = "Investment Option",
  description = "Description of this investment option",
  icon,
  benefits = ["Benefit 1", "Benefit 2", "Benefit 3"],
  buttonText = "Learn More",
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
        <h4 className="font-medium mb-2 text-gray-800">Benefits:</h4>
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
          className="w-full"
          style={{ backgroundColor: accentColor, borderColor: accentColor }}
          variant="outline"
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
  title = "Investment Options",
  subtitle = "Choose the investment model that works best for you",
  options = [
    {
      title: "Donation",
      description:
        "Support vineyard projects you love with no financial return, but receive exclusive wine rewards.",
      icon: <GiftIcon className="w-6 h-6 text-[#722F37]" />,
      benefits: [
        "Receive exclusive wine rewards based on contribution level",
        "Invitations to special vineyard events",
        "Recognition on vineyard supporter wall",
        "Tax benefits where applicable",
      ],
      buttonText: "Donate to Projects",
      accentColor: "#722F37",
    },
    {
      title: "Loan",
      description:
        "Provide capital to vineyards with fixed-term repayment and interest, plus wine benefits.",
      icon: <CoinsIcon className="w-6 h-6 text-[#5E8C31]" />,
      benefits: [
        "Fixed interest returns over agreed time period",
        "Principal repayment at end of term",
        "Wine allocation based on loan amount",
        "Lower risk than equity investments",
      ],
      buttonText: "Explore Loan Options",
      accentColor: "#5E8C31",
    },
    {
      title: "Equity",
      description:
        "Become a partial owner of vineyards with potential for long-term returns and premium benefits.",
      icon: <TrendingUpIcon className="w-6 h-6 text-[#B8860B]" />,
      benefits: [
        "Ownership stake in vineyard operations",
        "Share in profits and potential appreciation",
        "Premium wine allocations and owner privileges",
        "Voting rights on key vineyard decisions",
      ],
      buttonText: "Invest in Equity",
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

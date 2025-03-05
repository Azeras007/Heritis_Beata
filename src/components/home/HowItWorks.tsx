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
  title = "Step Title",
  description = "Step description goes here",
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
  title = "How Heritis Works",
  subtitle = "Join our community of wine enthusiasts and vineyard owners to create a sustainable future for viticulture",
  investorSteps = [
    {
      icon: <Users className="h-10 w-10 text-[#722F37]" />,
      title: "Create an Account",
      description:
        "Sign up and complete your investor profile to start discovering vineyard projects.",
      stepNumber: 1,
    },
    {
      icon: <Grape className="h-10 w-10 text-[#722F37]" />,
      title: "Discover Projects",
      description:
        "Browse featured vineyards and find projects that align with your investment interests.",
      stepNumber: 2,
    },
    {
      icon: <Coins className="h-10 w-10 text-[#722F37]" />,
      title: "Invest & Earn Rewards",
      description:
        "Choose your investment model and receive exclusive wine rewards based on your contribution.",
      stepNumber: 3,
    },
  ],
  vineyardSteps = [
    {
      icon: <Users className="h-10 w-10 text-[#722F37]" />,
      title: "Register Your Vineyard",
      description:
        "Create a detailed profile showcasing your vineyard's history, terroir, and unique qualities.",
      stepNumber: 1,
    },
    {
      icon: <Grape className="h-10 w-10 text-[#722F37]" />,
      title: "Create a Project",
      description:
        "Define your funding goals, timeline, and the exclusive wine rewards for your investors.",
      stepNumber: 2,
    },
    {
      icon: <Coins className="h-10 w-10 text-[#722F37]" />,
      title: "Receive Funding",
      description:
        "Connect with passionate investors and receive the capital needed to grow your vineyard.",
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
            For Wine Enthusiasts & Investors
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
              Start Investing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 flex items-center">
            <span className="bg-[#722F37] text-white rounded-full w-8 h-8 inline-flex items-center justify-center mr-3 text-sm">
              2
            </span>
            For Vineyard Owners
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
              List Your Vineyard <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

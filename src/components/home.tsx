import React from "react";
import Navbar from "./layout/Navbar";
import HeroSection from "./home/HeroSection";
import FeaturedProjects from "./home/FeaturedProjects";
import HowItWorks from "./home/HowItWorks";
import InvestmentOptions from "./home/InvestmentOptions";
import MarketplacePreview from "./home/MarketplacePreview";
import Footer from "./layout/Footer";

interface HomePageProps {
  isLoggedIn?: boolean;
  userType?: "investor" | "vineyard";
  userName?: string;
  userAvatar?: string;
}

const HomePage = ({
  isLoggedIn = false,
  userType = "investor",
  userName = "Utilisateur Invité",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=guest",
}: HomePageProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar
        isLoggedIn={isLoggedIn}
        userType={userType}
        userName={userName}
        userAvatar={userAvatar}
      />

      <main className="pt-20">
        {" "}
        {/* Add padding top to account for fixed navbar */}
        <HeroSection />
        <FeaturedProjects />
        <MarketplacePreview />
        <HowItWorks />
        <InvestmentOptions />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

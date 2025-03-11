import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VineyardProfileForm from "@/components/profile/VineyardProfileForm";
import InvestorProfileForm from "@/components/profile/InvestorProfileForm";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<"investor" | "vineyard">("investor");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUserType =
      (localStorage.getItem("userType") as "investor" | "vineyard") ||
      "investor";

    setIsLoggedIn(storedIsLoggedIn);
    setUserType(storedUserType);

    // Force login status to true for demo purposes
    if (!storedIsLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userType", "investor");
      localStorage.setItem("userName", "Jean Dupont");
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-24 pb-16 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mon Profil
          </h1>
          <p className="text-lg text-gray-600">
            {userType === "investor"
              ? "Gérez vos informations personnelles, suivez vos investissements et consultez votre calendrier de récompenses."
              : "Gérez votre profil de domaine, créez des projets de financement et mettez en vente vos vins."}
          </p>
        </div>

        {userType === "investor" ? (
          <InvestorProfileForm />
        ) : (
          <VineyardProfileForm />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProfilePage;

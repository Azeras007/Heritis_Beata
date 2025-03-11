import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbar from "./layout/Navbar.native";
import HeroSection from "./home/HeroSection.native";
import FeaturedProjects from "./home/FeaturedProjects.native";
import HowItWorks from "./home/HowItWorks.native/index";
import InvestmentOptions from "./home/InvestmentOptions.native/index";
import MarketplacePreview from "./home/MarketplacePreview.native/index";
import Footer from "./layout/Footer.native";

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
  const [userData, setUserData] = useState({
    isLoggedIn,
    userType,
    userName,
    userAvatar,
  });

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedIsLoggedIn =
          (await AsyncStorage.getItem("isLoggedIn")) === "true";
        const storedUserType =
          ((await AsyncStorage.getItem("userType")) as
            | "investor"
            | "vineyard") || userType;
        const storedUserName =
          (await AsyncStorage.getItem("userName")) || userName;
        const storedUserAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${storedUserName.replace(/\s+/g, "")}`;

        setUserData({
          isLoggedIn: storedIsLoggedIn,
          userType: storedUserType,
          userName: storedUserName,
          userAvatar: storedUserAvatar,
        });
      } catch (error) {
        console.error("Error loading user data:", error);
      }
    };

    loadUserData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Navbar
        isLoggedIn={userData.isLoggedIn}
        userType={userData.userType}
        userName={userData.userName}
        userAvatar={userData.userAvatar}
      />
      <ScrollView style={styles.scrollView}>
        <HeroSection />
        <FeaturedProjects />
        <MarketplacePreview />
        <HowItWorks />
        <InvestmentOptions />
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollView: {
    flex: 1,
  },
});

export default HomePage;

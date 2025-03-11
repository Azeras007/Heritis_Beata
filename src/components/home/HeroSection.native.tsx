import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

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
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.primaryButton}
            onPress={() => {
              // @ts-ignore
              navigation.navigate("Projects");
            }}
          >
            <Text style={styles.primaryButtonText}>{investorCta}</Text>
            <Icon name="arrow-right" size={18} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => {
              // @ts-ignore
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.secondaryButtonText}>{ownerCta}</Text>
            <Icon name="arrow-right" size={18} color="#fff" />
          </TouchableOpacity>
        </View>

        <View style={styles.investorInfo}>
          <View style={styles.avatarContainer}>
            {[1, 2, 3, 4].map((i) => (
              <View
                key={i}
                style={[styles.avatarWrapper, { marginLeft: i > 1 ? -15 : 0 }]}
              >
                <ImageBackground
                  source={{
                    uri: `https://api.dicebear.com/7.x/avataaars/svg?seed=investor${i}`,
                  }}
                  style={styles.avatar}
                  imageStyle={styles.avatarImage}
                />
              </View>
            ))}
          </View>
          <Text style={styles.investorText}>
            <Text style={styles.investorBold}>500+</Text> investisseurs déjà
            inscrits
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 600,
    width: "100%",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(114, 47, 55, 0.7)",
  },
  contentContainer: {
    paddingHorizontal: 24,
    maxWidth: 600,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
    lineHeight: 40,
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 24,
    lineHeight: 24,
    opacity: 0.9,
  },
  buttonContainer: {
    marginTop: 8,
    flexDirection: "column",
    gap: 12,
  },
  primaryButton: {
    backgroundColor: "#722F37",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 4,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  secondaryButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  investorInfo: {
    marginTop: 36,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  avatarContainer: {
    flexDirection: "row",
  },
  avatarWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fff",
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  avatarImage: {
    borderRadius: 20,
  },
  investorText: {
    color: "#fff",
    fontSize: 14,
  },
  investorBold: {
    fontWeight: "bold",
  },
});

export default HeroSection;

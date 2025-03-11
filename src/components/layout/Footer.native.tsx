import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";

interface FooterProps {
  companyName?: string;
  companyLogo?: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
}

const Footer = ({
  companyName = "Heritis",
  companyLogo = "/vite.svg",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  contactInfo = {
    email: "contact@heritis.com",
    phone: "+33 (0)1 23 45 67 89",
    address: "123 Chemin des Vignes, Bordeaux, France 33000",
  },
}: FooterProps) => {
  return (
    <View style={styles.footer}>
      <View style={styles.content}>
        {/* Company Info */}
        <View style={styles.section}>
          <View style={styles.companyHeader}>
            <Icon name="wine" size={24} color="#fff" />
            <Text style={styles.companyName}>{companyName}</Text>
          </View>
          <Text style={styles.companyDescription}>
            Connecter les propriétaires de vignobles avec des investisseurs
            passionnés pour créer un avenir viticole durable.
          </Text>
          <View style={styles.socialLinks}>
            <TouchableOpacity style={styles.socialIcon}>
              <Icon name="facebook" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Icon name="twitter" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Icon name="instagram" size={20} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialIcon}>
              <Icon name="linkedin" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Links */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Liens Rapides</Text>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>À Propos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Comment ça Marche</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Parcourir les Projets</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Démarrer un Projet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.link}>
            <Text style={styles.linkText}>Histoires de Réussite</Text>
          </TouchableOpacity>
        </View>

        {/* Contact */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contactez-nous</Text>
          <View style={styles.contactItem}>
            <Icon
              name="map-pin"
              size={16}
              color="#722F37"
              style={styles.contactIcon}
            />
            <Text style={styles.contactText}>{contactInfo.address}</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon
              name="phone"
              size={16}
              color="#722F37"
              style={styles.contactIcon}
            />
            <Text style={styles.contactText}>{contactInfo.phone}</Text>
          </View>
          <View style={styles.contactItem}>
            <Icon
              name="mail"
              size={16}
              color="#722F37"
              style={styles.contactIcon}
            />
            <Text style={styles.contactText}>{contactInfo.email}</Text>
          </View>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contactez-nous</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.bottom}>
        <Text style={styles.copyright}>
          &copy; {new Date().getFullYear()} {companyName}. Tous droits réservés.
        </Text>
        <View style={styles.legalLinks}>
          <TouchableOpacity>
            <Text style={styles.legalText}>Politique de Confidentialité</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.legalText}>Conditions d'Utilisation</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#1A2E1C",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: "column",
    gap: 30,
  },
  section: {
    marginBottom: 20,
  },
  companyHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  companyName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 8,
  },
  companyDescription: {
    fontSize: 14,
    color: "#ccc",
    marginBottom: 16,
    lineHeight: 20,
  },
  socialLinks: {
    flexDirection: "row",
    gap: 16,
  },
  socialIcon: {
    padding: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 16,
  },
  link: {
    marginBottom: 10,
  },
  linkText: {
    fontSize: 14,
    color: "#ccc",
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  contactIcon: {
    marginRight: 8,
    marginTop: 3,
  },
  contactText: {
    fontSize: 14,
    color: "#ccc",
    flex: 1,
  },
  contactButton: {
    borderWidth: 1,
    borderColor: "#722F37",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 14,
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginVertical: 20,
  },
  bottom: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  copyright: {
    fontSize: 12,
    color: "#999",
    marginBottom: 12,
  },
  legalLinks: {
    flexDirection: "row",
    gap: 16,
  },
  legalText: {
    fontSize: 12,
    color: "#999",
  },
});

export default Footer;

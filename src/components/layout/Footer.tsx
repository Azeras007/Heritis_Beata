import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
    <footer className="w-full bg-[#1A2E1C] text-white py-12 px-4 md:px-8 lg:px-12 bg-opacity-95">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={companyLogo} alt={companyName} className="h-8 w-auto" />
              <span className="text-xl font-bold">{companyName}</span>
            </div>
            <p className="text-gray-300 text-sm">
              Connecter les propriétaires de vignobles avec des investisseurs
              passionnés pour créer un avenir viticole durable.
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks.facebook}
                aria-label="Facebook"
                className="hover:text-[#722F37] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href={socialLinks.twitter}
                aria-label="Twitter"
                className="hover:text-[#722F37] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                aria-label="Instagram"
                className="hover:text-[#722F37] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                aria-label="LinkedIn"
                className="hover:text-[#722F37] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Comment ça Marche
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Parcourir les Projets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Démarrer un Projet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Histoires de Réussite
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Ressources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Guide des Vignobles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ Investissement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Éducation Viticole
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ressources Juridiques
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contactez-nous</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin
                  size={18}
                  className="text-[#722F37] mt-1 flex-shrink-0"
                />
                <span className="text-gray-300 text-sm">
                  {contactInfo.address}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#722F37] flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {contactInfo.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#722F37] flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {contactInfo.email}
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-[#722F37] text-white hover:bg-[#722F37] hover:text-white mt-2"
            >
              Contactez-nous
            </Button>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {companyName}. Tous droits
            réservés.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Politique de Confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Conditions d'Utilisation
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Politique des Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

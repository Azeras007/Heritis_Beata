import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Wine,
  Grape,
  ArrowRight,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FooterProps {
  companyName?: string;
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
    <footer className="w-full bg-gradient-to-br from-[#1A2E1C] to-[#2A3E2C] text-white py-16 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-[#722F37]/10 backdrop-blur-sm rounded-xl p-8 mb-12 border border-[#722F37]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-xl font-bold mb-2">Restez informé</h3>
              <p className="text-gray-300 text-sm">
                Inscrivez-vous à notre newsletter pour recevoir les dernières
                actualités sur les projets viticoles et les opportunités
                d'investissement.
              </p>
            </div>
            <div className="w-full md:w-auto flex-1 max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Votre email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-[#722F37] hover:bg-[#5a252c] text-white whitespace-nowrap">
                  S'inscrire <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-lg p-2 shadow-md">
                <Wine className="h-8 w-8 text-[#722F37]" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#722F37] to-[#9A3B45]">
                  {companyName}
                </span>
                <div className="text-xs text-gray-400">
                  INVESTISSEMENT VITICOLE
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecter les propriétaires de vignobles avec des investisseurs
              passionnés pour créer un avenir viticole durable et innovant.
            </p>
            <div className="flex space-x-3">
              <a
                href={socialLinks.facebook}
                aria-label="Facebook"
                className="bg-white/10 hover:bg-[#722F37] p-2.5 rounded-full transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href={socialLinks.twitter}
                aria-label="Twitter"
                className="bg-white/10 hover:bg-[#722F37] p-2.5 rounded-full transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href={socialLinks.instagram}
                aria-label="Instagram"
                className="bg-white/10 hover:bg-[#722F37] p-2.5 rounded-full transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                aria-label="LinkedIn"
                className="bg-white/10 hover:bg-[#722F37] p-2.5 rounded-full transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Grape className="h-5 w-5 text-[#722F37]" />
              Liens Rapides
            </h3>
            <ul className="space-y-3 grid grid-cols-1">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] group-hover:w-2 transition-all"></span>
                  À Propos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] group-hover:w-2 transition-all"></span>
                  Comment ça Marche
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] group-hover:w-2 transition-all"></span>
                  Parcourir les Projets
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] group-hover:w-2 transition-all"></span>
                  Démarrer un Projet
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] group-hover:w-2 transition-all"></span>
                  Histoires de Réussite
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Wine className="h-5 w-5 text-[#722F37]" />
              Ressources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] group-hover:w-2 transition-all"></span>
                  Guide des Vignobles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] group-hover:w-2 transition-all"></span>
                  FAQ Investissement
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] group-hover:w-2 transition-all"></span>
                  Éducation Viticole
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] group-hover:w-2 transition-all"></span>
                  Ressources Juridiques
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#722F37] group-hover:w-2 transition-all"></span>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#722F37]" />
              Contactez-nous
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                <MapPin
                  size={18}
                  className="text-[#722F37] mt-0.5 flex-shrink-0"
                />
                <span className="text-gray-300 text-sm">
                  {contactInfo.address}
                </span>
              </div>
              <div className="flex items-center gap-3 group bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                <Phone size={18} className="text-[#722F37] flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {contactInfo.phone}
                </span>
              </div>
              <div className="flex items-center gap-3 group bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
                <Mail size={18} className="text-[#722F37] flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  {contactInfo.email}
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="border-[#722F37] text-white hover:bg-[#722F37] hover:text-white mt-2 w-full"
            >
              Contactez-nous
            </Button>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <div className="mb-4 md:mb-0 flex items-center gap-2">
            <Heart size={14} className="text-[#722F37]" />
            &copy; {new Date().getFullYear()} {companyName}. Tous droits
            réservés.
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-white transition-colors text-sm">
              Politique de Confidentialité
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm">
              Conditions d'Utilisation
            </a>
            <a href="#" className="hover:text-white transition-colors text-sm">
              Politique des Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

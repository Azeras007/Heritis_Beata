import React, { useState } from "react";
import { Menu, Wine, User, LogIn, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavbarProps {
  isLoggedIn?: boolean;
  userType?: "investor" | "vineyard";
  userName?: string;
  userAvatar?: string;
}

const Navbar = ({
  isLoggedIn = false,
  userType = "investor",
  userName = "Utilisateur Invité",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=guest",
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Wine className="h-8 w-8 text-[#722F37]" />
          <span className="ml-2 text-2xl font-bold text-[#722F37]">
            Heritis
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/"
                  className={navigationMenuTriggerStyle()}
                >
                  Accueil
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Découvrir</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <div className="p-2 hover:bg-slate-100 rounded-md">
                      <NavigationMenuLink
                        href="/projects/featured"
                        className="block font-medium"
                      >
                        Vignobles en Vedette
                      </NavigationMenuLink>
                      <p className="text-sm text-gray-500">
                        Explorez notre sélection de projets viticoles
                        exceptionnels
                      </p>
                    </div>
                    <div className="p-2 hover:bg-slate-100 rounded-md">
                      <NavigationMenuLink
                        href="/projects/new"
                        className="block font-medium"
                      >
                        Nouveaux Arrivages
                      </NavigationMenuLink>
                      <p className="text-sm text-gray-500">
                        Découvrez les derniers projets viticoles en recherche de
                        financement
                      </p>
                    </div>
                    <div className="p-2 hover:bg-slate-100 rounded-md">
                      <NavigationMenuLink
                        href="/projects/map"
                        className="block font-medium"
                      >
                        Carte des Vignobles
                      </NavigationMenuLink>
                      <p className="text-sm text-gray-500">
                        Parcourez les projets par région et terroir
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Comment ça Marche</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <div className="p-2 hover:bg-slate-100 rounded-md">
                      <NavigationMenuLink
                        href="/how-it-works/investors"
                        className="block font-medium"
                      >
                        Pour les Investisseurs
                      </NavigationMenuLink>
                      <p className="text-sm text-gray-500">
                        Apprenez comment investir dans des projets viticoles et
                        gagner des récompenses
                      </p>
                    </div>
                    <div className="p-2 hover:bg-slate-100 rounded-md">
                      <NavigationMenuLink
                        href="/how-it-works/vineyards"
                        className="block font-medium"
                      >
                        Pour les Propriétaires de Vignobles
                      </NavigationMenuLink>
                      <p className="text-sm text-gray-500">
                        Découvrez comment financer votre projet viticole via
                        notre plateforme
                      </p>
                    </div>
                    <div className="p-2 hover:bg-slate-100 rounded-md">
                      <NavigationMenuLink
                        href="/investment-options"
                        className="block font-medium"
                      >
                        Options d'Investissement
                      </NavigationMenuLink>
                      <p className="text-sm text-gray-500">
                        Explorez différentes façons de soutenir les projets
                        viticoles
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={navigationMenuTriggerStyle()}
                >
                  À Propos
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Search, Auth and User Menu */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>

          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <img
                    src={userAvatar}
                    alt={userName}
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="hidden md:inline">{userName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Mon Profil</span>
                </DropdownMenuItem>
                {userType === "investor" ? (
                  <DropdownMenuItem>
                    <span>Mes Investissements</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem>
                    <span>Mes Projets Viticoles</span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem>
                  <span>Paramètres</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Déconnexion</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex space-x-2">
              <Button variant="ghost">
                <LogIn className="mr-2 h-4 w-4" /> Connexion
              </Button>
              <Button className="bg-[#722F37] hover:bg-[#5a252c] text-white">
                S'inscrire
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-lg">
          <div className="p-4 space-y-4">
            <a href="/" className="block py-2 font-medium">
              Accueil
            </a>
            <a href="/projects/featured" className="block py-2 font-medium">
              Découvrir
            </a>
            <a
              href="/how-it-works/investors"
              className="block py-2 font-medium"
            >
              Comment ça Marche
            </a>
            <a href="/about" className="block py-2 font-medium">
              À Propos
            </a>
            <div className="pt-4 border-t border-gray-200">
              {!isLoggedIn && (
                <div className="space-y-2">
                  <Button variant="outline" className="w-full">
                    <LogIn className="mr-2 h-4 w-4" /> Connexion
                  </Button>
                  <Button className="w-full bg-[#722F37] hover:bg-[#5a252c] text-white">
                    S'inscrire
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

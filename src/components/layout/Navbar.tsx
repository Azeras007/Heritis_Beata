import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Wine, User, LogIn, Search, LogOut } from "lucide-react";
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
import { useToast } from "@/components/ui/use-toast";

interface NavbarProps {
  isLoggedIn?: boolean;
  userType?: "investor" | "vineyard";
  userName?: string;
  userAvatar?: string;
}

const Navbar = ({
  isLoggedIn: propIsLoggedIn = false,
  userType: propUserType = "investor",
  userName: propUserName = "Utilisateur Invité",
  userAvatar:
    propUserAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=guest",
}: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(propIsLoggedIn);
  const [userType, setUserType] = useState(propUserType);
  const [userName, setUserName] = useState(propUserName);
  const [userAvatar, setUserAvatar] = useState(propUserAvatar);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check local storage for login status on component mount
  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const storedUserType =
      (localStorage.getItem("userType") as "investor" | "vineyard") ||
      propUserType;
    const storedUserName = localStorage.getItem("userName") || propUserName;

    // Force login status to true for demo purposes
    if (!storedIsLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userType", "investor");
      localStorage.setItem("userName", "Jean Dupont");
      setIsLoggedIn(true);
      setUserType("investor");
      setUserName("Jean Dupont");
      setUserAvatar(
        `https://api.dicebear.com/7.x/avataaars/svg?seed=JeanDupont`,
      );
    } else {
      setIsLoggedIn(storedIsLoggedIn);
      setUserType(storedUserType);
      setUserName(storedUserName);

      // Generate avatar based on username
      if (storedIsLoggedIn) {
        setUserAvatar(
          `https://api.dicebear.com/7.x/avataaars/svg?seed=${storedUserName.replace(/\s+/g, "")}`,
        );
      }
    }
  }, [propIsLoggedIn, propUserType, propUserName, propUserAvatar]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userType");
    localStorage.removeItem("userName");

    setIsLoggedIn(false);
    setUserType("investor");
    setUserName("Utilisateur Invité");
    setUserAvatar("https://api.dicebear.com/7.x/avataaars/svg?seed=guest");

    toast({
      title: "Déconnexion réussie",
      description: "À bientôt sur Heritis!",
    });

    navigate("/");
  };

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
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Accueil
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Découvrir</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px]">
                    <div className="p-2 hover:bg-slate-100 rounded-md">
                      <Link to="/projects">
                        <NavigationMenuLink className="block font-medium">
                          Vignobles en Vedette
                        </NavigationMenuLink>
                      </Link>
                      <p className="text-sm text-gray-500">
                        Explorez notre sélection de projets viticoles
                        exceptionnels
                      </p>
                    </div>
                    <div className="p-2 hover:bg-slate-100 rounded-md">
                      <Link to="/projects">
                        <NavigationMenuLink className="block font-medium">
                          Nouveaux Arrivages
                        </NavigationMenuLink>
                      </Link>
                      <p className="text-sm text-gray-500">
                        Découvrez les derniers projets viticoles en recherche de
                        financement
                      </p>
                    </div>
                    <div className="p-2 hover:bg-slate-100 rounded-md">
                      <Link to="/marketplace">
                        <NavigationMenuLink className="block font-medium">
                          Boutique de Vins
                        </NavigationMenuLink>
                      </Link>
                      <p className="text-sm text-gray-500">
                        Achetez des vins directement auprès des vignobles
                      </p>
                    </div>
                    <div className="p-2 hover:bg-slate-100 rounded-md">
                      <Link to="/projects">
                        <NavigationMenuLink className="block font-medium">
                          Carte des Vignobles
                        </NavigationMenuLink>
                      </Link>
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
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    À Propos
                  </NavigationMenuLink>
                </Link>
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
                <DropdownMenuItem onClick={() => navigate("/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Mon Profil</span>
                </DropdownMenuItem>
                {userType === "investor" ? (
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <span>Mes Investissements</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <span>Mes Projets Viticoles</span>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem>
                  <span>Paramètres</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Déconnexion</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex space-x-2">
              <Button variant="ghost" onClick={() => navigate("/login")}>
                <LogIn className="mr-2 h-4 w-4" /> Connexion
              </Button>
              <Button
                className="bg-[#722F37] hover:bg-[#5a252c] text-white"
                onClick={() => navigate("/register")}
              >
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
            <a href="/projects" className="block py-2 font-medium">
              Projets
            </a>
            <a href="/marketplace" className="block py-2 font-medium">
              Boutique
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
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      navigate("/login");
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <LogIn className="mr-2 h-4 w-4" /> Connexion
                  </Button>
                  <Button
                    className="w-full bg-[#722F37] hover:bg-[#5a252c] text-white"
                    onClick={() => {
                      navigate("/register");
                      setIsMobileMenuOpen(false);
                    }}
                  >
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

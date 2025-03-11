import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import {
  AuthUser,
  AuthError,
  signIn,
  signUp,
  signOut,
  getCurrentUser,
} from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (
    email: string,
    password: string,
    name: string,
    userType: "investor" | "vineyard",
  ) => Promise<boolean>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Vérifier si l'utilisateur est déjà connecté
    async function loadUser() {
      setIsLoading(true);
      const { user, error } = await getCurrentUser();

      if (user) {
        setUser(user);
        // Stocker les informations dans localStorage pour la compatibilité avec le code existant
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userType", user.userType);
        localStorage.setItem("userName", user.name);
      } else {
        setUser(null);
      }

      setIsLoading(false);
    }

    loadUser();
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    const { user: authUser, error } = await signIn(email, password);
    setIsLoading(false);

    if (error || !authUser) {
      toast({
        title: "Erreur de connexion",
        description: error?.message || "Impossible de se connecter",
        variant: "destructive",
      });
      return false;
    }

    setUser(authUser);

    // Stocker les informations dans localStorage pour la compatibilité avec le code existant
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userType", authUser.userType);
    localStorage.setItem("userName", authUser.name);

    toast({
      title: "Connexion réussie",
      description: `Bienvenue, ${authUser.name}!`,
    });

    return true;
  };

  const register = async (
    email: string,
    password: string,
    name: string,
    userType: "investor" | "vineyard",
  ): Promise<boolean> => {
    setIsLoading(true);
    const { user: authUser, error } = await signUp(
      email,
      password,
      name,
      userType,
    );
    setIsLoading(false);

    if (error || !authUser) {
      toast({
        title: "Erreur d'inscription",
        description: error?.message || "Impossible de créer le compte",
        variant: "destructive",
      });
      return false;
    }

    setUser(authUser);

    // Stocker les informations dans localStorage pour la compatibilité avec le code existant
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userType", authUser.userType);
    localStorage.setItem("userName", authUser.name);

    toast({
      title: "Inscription réussie",
      description: `Bienvenue sur Heritis, ${authUser.name}!`,
    });

    return true;
  };

  const logout = async (): Promise<void> => {
    setIsLoading(true);
    const { error } = await signOut();

    if (error) {
      toast({
        title: "Erreur de déconnexion",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setUser(null);

      // Nettoyer localStorage
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("userType");
      localStorage.removeItem("userName");

      toast({
        title: "Déconnexion réussie",
        description: "À bientôt sur Heritis!",
      });
    }

    setIsLoading(false);
  };

  const value = {
    user,
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

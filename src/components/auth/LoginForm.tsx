import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Wine, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface LoginFormProps {
  onSuccess?: () => void;
}

const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Connexion réussie",
        description: "Bienvenue sur Heritis!",
      });

      // In a real app, you would store the user session
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userType", "investor");
      localStorage.setItem("userName", "Jean Dupont");

      if (onSuccess) {
        onSuccess();
      } else {
        navigate("/");
      }
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-center mb-2">
          <Wine className="h-10 w-10 text-[#722F37]" />
          <span className="ml-2 text-2xl font-bold text-[#722F37]">
            Heritis
          </span>
        </div>
        <CardTitle className="text-2xl font-bold text-center">
          Connexion
        </CardTitle>
        <CardDescription className="text-center">
          Entrez vos identifiants pour accéder à votre compte
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                type="email"
                placeholder="exemple@email.com"
                className="pl-10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Mot de passe</Label>
              <a
                href="/forgot-password"
                className="text-sm text-[#722F37] hover:underline"
              >
                Mot de passe oublié?
              </a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-gray-400" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-[#722F37] hover:bg-[#5a252c] text-white"
            disabled={isLoading}
          >
            {isLoading ? "Connexion en cours..." : "Se connecter"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-center text-sm">
          Vous n'avez pas de compte?{" "}
          <a
            href="/register"
            className="text-[#722F37] hover:underline font-medium"
          >
            S'inscrire
          </a>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-gray-500">
              Ou continuer avec
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              toast({
                title: "Information",
                description:
                  "Connexion avec Google non disponible pour le moment",
              });
            }}
          >
            Google
          </Button>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              toast({
                title: "Information",
                description:
                  "Connexion avec Facebook non disponible pour le moment",
              });
            }}
          >
            Facebook
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;

import React from "react";
import LoginForm from "@/components/auth/LoginForm";
import { Wine } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#F9F5F0] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <LoginForm />
      </div>
      <div className="mt-8 text-center">
        <a
          href="/"
          className="text-[#722F37] hover:underline flex items-center justify-center"
        >
          <Wine className="h-4 w-4 mr-1" />
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
};

export default LoginPage;

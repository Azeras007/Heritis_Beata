import { supabase } from "./supabase";

export interface AuthUser {
  id: string;
  email: string;
  userType: "investor" | "vineyard";
  name: string;
  avatarUrl?: string;
}

export interface AuthError {
  message: string;
}

export async function signUp(
  email: string,
  password: string,
  name: string,
  userType: "investor" | "vineyard",
): Promise<{ user: AuthUser | null; error: AuthError | null }> {
  try {
    // Créer un utilisateur dans Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) throw authError;
    if (!authData.user) throw new Error("Échec de la création du compte");

    // Ajouter les informations supplémentaires dans la table profiles
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .insert([
        {
          id: authData.user.id,
          email,
          name,
          user_type: userType,
          avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.replace(/\s+/g, "")}`,
        },
      ])
      .select()
      .single();

    if (profileError) throw profileError;

    return {
      user: {
        id: authData.user.id,
        email,
        name,
        userType,
        avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name.replace(/\s+/g, "")}`,
      },
      error: null,
    };
  } catch (error: any) {
    console.error("Erreur d'inscription:", error);
    return {
      user: null,
      error: { message: error.message || "Erreur lors de l'inscription" },
    };
  }
}

export async function signIn(
  email: string,
  password: string,
): Promise<{ user: AuthUser | null; error: AuthError | null }> {
  try {
    // Authentifier l'utilisateur
    const { data: authData, error: authError } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    if (authError) throw authError;
    if (!authData.user) throw new Error("Échec de la connexion");

    // Récupérer les informations du profil
    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", authData.user.id)
      .single();

    if (profileError) throw profileError;

    return {
      user: {
        id: authData.user.id,
        email: authData.user.email || "",
        name: profileData.name,
        userType: profileData.user_type,
        avatarUrl: profileData.avatar_url,
      },
      error: null,
    };
  } catch (error: any) {
    console.error("Erreur de connexion:", error);
    return {
      user: null,
      error: { message: error.message || "Erreur lors de la connexion" },
    };
  }
}

export async function signOut(): Promise<{ error: AuthError | null }> {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    return { error: null };
  } catch (error: any) {
    console.error("Erreur de déconnexion:", error);
    return {
      error: { message: error.message || "Erreur lors de la déconnexion" },
    };
  }
}

export async function getCurrentUser(): Promise<{
  user: AuthUser | null;
  error: AuthError | null;
}> {
  try {
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError) throw sessionError;
    if (!session?.user) return { user: null, error: null };

    const { data: profileData, error: profileError } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", session.user.id)
      .single();

    if (profileError) throw profileError;

    return {
      user: {
        id: session.user.id,
        email: session.user.email || "",
        name: profileData.name,
        userType: profileData.user_type,
        avatarUrl: profileData.avatar_url,
      },
      error: null,
    };
  } catch (error: any) {
    console.error("Erreur de récupération de l'utilisateur:", error);
    return {
      user: null,
      error: {
        message:
          error.message || "Erreur lors de la récupération de l'utilisateur",
      },
    };
  }
}

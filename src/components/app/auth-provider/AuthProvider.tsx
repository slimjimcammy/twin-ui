import React, { createContext, useContext, useState, useEffect } from "react";
import useGoogle from "./hooks/useGoogle";
import type { CredentialResponse } from "@react-oauth/google";

export interface User {
  id: string;
  email: string;
  first_name?: string | null;
  last_name?: string | null;
  profile_img_url?: string | null;
  role: string;
  join_date: string;
}

type AuthOptions = {
  google: {
    register: (credentialResponse: CredentialResponse) => void;
    login: (credentialResponse: CredentialResponse) => void;
  };
  // TODO: extend for other sign in methods like manual
};

interface AuthContextType {
  user: User | null;
  loading: boolean;
  options: AuthOptions;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const { registerWithGoogle, signInWithGoogle } = useGoogle();

  const options = {
    google: {
      register: (credentialResponse: CredentialResponse) =>
        registerWithGoogle(credentialResponse, setUser),
      login: (credentialResponse: CredentialResponse) =>
        signInWithGoogle(credentialResponse, setUser),
    },
  };

  return (
    <AuthContext.Provider value={{ user, loading, options }}>
      {children}
    </AuthContext.Provider>
  );
}

import React, { createContext, useContext, useEffect, useState } from 'react';

const clientID = "499106697903-doporbmj6p4quj7umsqci4fvh81teiu1.apps.googleusercontent.com"
interface AuthContextType {
  isAuthenticated: boolean;
  user: any | null;
  loginWithGoogle: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  loginWithGoogle: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await fetch('/api/me', { credentials: 'include' });
  //       if (res.ok) {
  //         const data = await res.json();
  //         setUser(data);
  //         setIsAuthenticated(true);
  //       }
  //     } catch (err) {
  //       console.error("Auto login failed", err);
  //     }
  //   })();
  // }, []);

  // const loginWithGoogle = async (idToken: string) => {
  //   try {
  //     const res = await fetch('/api/auth/google', {
  //       method: 'POST',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ idToken }),
  //     });

  //     if (res.ok) {
  //       const data = await res.json();
  //       setUser(data.user);
  //       setIsAuthenticated(true);
  //     } else {
  //       console.error("Login failed");
  //     }
  //   } catch (err) {
  //     console.error("Login error", err);
  //   }
  // };
  const loginWithGoogle = () => {
    if (window.google) {
      google.accounts.id.initialize({
        client_id: clientID,
        callback: (response: any) => {
          setUser({ idToken: response.credential });
          setIsAuthenticated(true);
        },
      });

      google.accounts.id.prompt();
    } else {
      console.error("Google script not loaded.");
    }
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

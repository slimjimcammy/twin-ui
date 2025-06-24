import { type Theme, ThemeContext } from "./hooks/useTheme";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme: Theme;
}

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
  );
}

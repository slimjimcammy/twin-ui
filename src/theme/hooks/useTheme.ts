import { createContext, useContext } from "react";

export type Theme = {
  palette: {
    text: {
      default: "#F5F6FA";
      dimmed: "#8B93A8";
      dark: "#212732";
    };
    background: {
      dark: "#05070A";
      dimmed: "#343B4C";
      light: "#F5F6FA";
      success: "#4CAF50";
      error: "#F44336";
    };
  };
  border: {
    dimmed: string;
    light: string;
  };
  animation: {
    quick: string;
    standard: string;
    slow: string;
  };
  shadow: {
    glow: string;
    levitate: string;
  };
};

type ThemeContextType = {
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

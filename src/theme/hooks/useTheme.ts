import { createContext, useContext } from "react";

export type Theme = {
  text: {
    font: {
      default: string;
      header: string;
    };
    size: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
      p: string;
      span: string;
      caption: string;
    };
    weight: {
      thin: string;
      light: string;
      default: string;
      bold: string;
    };
  };
  color: {
    text: {
      default: string;
      dimmed: string;
      dark: string;
    };
    background: {
      dark: string;
      dimmed: string;
      light: string;
      success: string;
      error: string;
    };
  };
  border: {
    dimmed: string;
    light: string;
  };
  radius: {
    sm: string;
    md: string;
    lg: string;
    round: string;
  };
  padding: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
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

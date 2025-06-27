import { type Theme } from "../hooks/useTheme";

export const defaultTheme: Theme = {
  text: {
    font: {
      default: "font-[Public_Sans]",
      header: "font-[Lexend_Deca]",
    },
    size: {
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base",
      p: "text-sm",
      span: "text-sm",
      caption: "text-sm",
    },
    weight: {
      thin: "font-thin",
      light: "font-light",
      default: "font-normal",
      bold: "font-bold",
    },
  },
  color: {
    text: {
      default: "text-[#F5F6FA]",
      dimmed: "text-[#8B93A8]",
      dark: "text-[#212732]",
    },
    background: {
      dark: "bg-[#05070A]",
      dimmed: "bg-[#343B4C]",
      light: "bg-[#F5F6FA]",
      success: "bg-[#4CAF50]",
      error: "bg-[#F44336]",
    },
  },
  border: {
    dimmed: "border-[#212732] border-[0.5px] border-solid",
    light: "border-[#212732] border-[0.5px] border-solid",
  },
  radius: {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    round: "rounded-full",
  },
  padding: {
    sm: "p-2",
    md: "p-4",
    lg: "p-8",
    xl: "p-16",
  },
  animation: {
    quick: "transition-all duration-75",
    standard: "transition-all duration-150",
    slow: "transition-all duration-300",
  },
  shadow: {
    glow: "shadow-[0_0_32px_4px_rgba(52,59,76,0.15)]",
    levitate: "",
  },
};

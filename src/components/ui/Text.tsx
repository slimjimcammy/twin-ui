import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType } from "react";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-sm",
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-bold",
      h4: "text-xl font-bold",
      h5: "text-lg font-bold",
      h6: "text-base font-default",
      p: "text-base font-default",
      p2: "text-sm font-light",
      span: "text-sm font-default",
      span2: "text-xs font-light",
      caption: "text-xs font-light",
      strong: "text-sm font-bold",
    },
    color: {
      default: "text-light",
      dimmed: "text-subtitle",
      dark: "text-primary",
    },
    width: {
      default: "w-auto",
      stretch: "w-full",
      fit: "w-fit",
    },
    font: {
      default: "font-default",
      header: "font-header",
    },
    transform: {
      none: "",
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    weight: {
      thin: "font-thin",
      light: "font-light",
      default: "font-normal",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "default",
    width: "default",
    font: "default",
    color: "default",
    transform: "none",
    align: "left",
    weight: "default",
  },
});

const elementMap = new Map<string, ElementType>([
  ["default", "p"],
  ["h1", "h1"],
  ["h2", "h2"],
  ["h3", "h3"],
  ["h4", "h4"],
  ["h5", "h5"],
  ["h6", "h6"],
  ["p", "p"],
  ["p2", "p"],
  ["caption", "p"],
  ["strong", "p"],
  ["span", "span"],
  ["span2", "span"],
]);

export interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Text({
  children,
  className,
  variant,
  color,
  width,
  font,
  transform,
  align,
  weight,
  ...props
}: TextProps) {
  const Component = elementMap.get(variant || "default") || "p";

  return (
    <Component
      className={cn(
        textVariants({ variant, color, width, font, transform, align, weight }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

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
      h6: "text-base font-bold",
      p: "text-sm",
    },
    color: {
      default: "text-black",
      light: "text-gray-500",
    },
    width: {
      default: "w-auto",
      stretch: "w-full",
      fit: "w-fit",
    },
    font: {
      default: "font-[Public_Sans]",
      heading: "font-[Lexend_Deca]",
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
  },
  defaultVariants: {
    variant: "default",
    width: "default",
    font: "default",
    color: "default",
    transform: "none",
    align: "left",
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
]);

export interface TextProps extends VariantProps<typeof textVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Text({
  children,
  className,
  variant = "default",
  color,
  width,
  font,
  transform,
  align,
  ...props
}: TextProps) {
  const Component = elementMap.get(variant || "default") || "p";

  return (
    <Component
      className={cn(
        textVariants({ variant, color, width, font, transform, align }),
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";

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
    defaultVariants: {
      variant: "default",
      width: "default",
    },
  },
});

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
  ...props
}: TextProps) {
  return (
    <p
      className={cn(textVariants({ variant, color, width, font }), className)}
      {...props}
    >
      {children}
    </p>
  );
}

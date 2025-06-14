import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Container } from "./Container";

const widgetVariants = cva("border-[#212732] border-[0.5px] border-solid", {
  variants: {
    variant: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    glow: {
      none: "",
      light: "shadow-[0_0_32px_4px_rgba(52,59,76,0.15)]",
    },
  },
  defaultVariants: {
    variant: "md",
    glow: "none",
  },
});

export interface WidgetProps extends VariantProps<typeof widgetVariants> {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "xs" | "sm" | "md" | "lg";
}

export default function Widget({
  children,
  className,
  variant,
  padding,
  glow,
}: WidgetProps) {
  return (
    <Container
      padding={padding}
      className={cn(widgetVariants({ variant, glow }), className)}
    >
      {children}
    </Container>
  );
}

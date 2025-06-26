import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Flex, type FlexProps } from "./Flex";

const widgetVariants = cva("border-line border-[0.5px] border-solid", {
  variants: {
    variant: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
    glow: {
      none: "",
      light: "shadow-glow",
    },
  },
  defaultVariants: {
    variant: "md",
    glow: "none",
  },
});

export interface WidgetProps
  extends FlexProps,
    VariantProps<typeof widgetVariants> {
  children: React.ReactNode;
  className?: string;
}

export default function Widget({
  children,
  className,
  variant,
  glow,
  ...props
}: WidgetProps) {
  return (
    <Flex
      className={cn(widgetVariants({ variant, glow }), className)}
      {...props}
    >
      {children}
    </Flex>
  );
}

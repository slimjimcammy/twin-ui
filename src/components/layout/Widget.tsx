import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Container } from "./Container";

const widgetVariants = cva("", {
  variants: {
    variant: {
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    variant: "sm",
  },
});

export interface WidgetProps extends VariantProps<typeof widgetVariants> {
  children: React.ReactNode;
  className?: string;
}

export default function Widget({ children, className, variant }: WidgetProps) {
  return (
    <Container className={cn(widgetVariants({ variant, className }))}>
      {children}
    </Container>
  );
}

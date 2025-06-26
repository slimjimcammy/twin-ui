import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";

const containerVariants = cva("box-border", {
  variants: {
    width: {
      stretch: "w-full",
      default: "w-auto",
      screen: "w-screen",
    },
    height: {
      stretch: "h-full",
      default: "h-auto",
      screen: "h-screen",
    },
    padding: {
      none: "p-0",
      xs: "p-2 p-1",
      sm: "p-4 p-2",
      md: "p-6 p-3",
      lg: "p-8 p-4",
      xl: "p-10 p-5",
      xxl: "p-12 p-6",
    },
    radius: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      round: "rounded-full",
    },
  },
  defaultVariants: {
    width: "default",
    height: "default",
    padding: "none",
    radius: "none",
  },
});

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Container({
  children,
  width,
  height,
  padding,
  radius,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        containerVariants({ width, height, padding, radius }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

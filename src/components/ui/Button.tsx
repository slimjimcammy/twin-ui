import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
}

const buttonVariants = cva("hover:cursor-pointer", {
  variants: {
    variant: {
      primary: [
        "bg-primary",
        "hover:bg-secondary",
        "hover:border-transparent",
        "transition-all",
        "duration-150",
      ].join(" "),
      secondary: [
        "bg-light",
        "text-dark",
        "border-transparent",
        "hover:bg-dark",
        "hover:text-light",
      ].join(" "),
    },
    width: {
      default: "w-fit",
      stretch: "w-full",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      circle: "rounded-full",
    },
    size: {
      default: "px-md py-sm text-md",
      sm: "px-sm py-xs text-sm",
      md: "px-md py-sm text-md",
      lg: "px-lg py-md text-lg",
      centeredSm: "p-sm text-sm",
      centeredMd: "p-md text-md",
      centeredLg: "p-lg text-lg",
    },
    align: {
      none: "",
      center: "mx-auto",
    },
  },
  defaultVariants: {
    variant: "primary",
    width: "default",
    size: "default",
    rounded: "md",
    align: "center",
  },
});

export default function Button({
  children,
  className,
  variant,
  width,
  size,
  rounded,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({ variant, width, size, rounded }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

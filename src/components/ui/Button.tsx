import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
}

const buttonVariants = cva("", {
  variants: {
    variant: {
      primary: [
        "bg-black",
        "text-white",
        "border-black",
        "border-2",
        "hover:bg-white",
        "hover:text-black",
        "transition-all",
        "duration-150",
      ].join(" "),
      secondary: [
        "bg-[#F5F6FA]",
        "hover:bg-gray-300",
        "hover:text-black",
        "hover:border-transparent",
        "transition-all",
        "duration-150",
      ].join(" "),
      tertiary: [
        "bg-transparent",
        "text-black",
        "border-transparent",
        "hover:bg-[#343B4C]",
        "hover:text-black",
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
      default: "pt-2 pb-2 pl-2.5 pr-2.5 text-md",
      sm: "pt-1 pb-1 pl-1.5 pr-1.5 text-sm",
      md: "pt-2 pb-2 pl-2.5 pr-2.5 text-md",
      lg: "pt-3 pb-3 pl-3.5 pr-3.5 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    width: "default",
    size: "default",
    rounded: "md",
  },
});

export default function Button({
  children,
  className,
  variant,
  width,
  size,
  rounded,
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({ variant, width, size, rounded }),
        className
      )}
    >
      {children}
    </button>
  );
}

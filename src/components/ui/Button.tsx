import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
}

const buttonVariants = cva("hover:bg-gray-100 p-2 rounded-sm", {
  variants: {
    variant: {
      default: [
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
        "bg-white",
        "text-black",
        "border-black",
        "border-2",
        "hover:bg-gray-200",
        "hover:text-black",
        "hover:border-transparent",
        "transition-all",
        "duration-150",
      ].join(" "),
    },
    width: {
      default: "w-fit",
      stretch: "w-full",
    },
    size: {
      default: "pt-2 pb-2 pl-3 pr-3 text-md",
      sm: "pt-1 pb-1 pl-2 pr-2 text-sm",
      md: "pt-2 pb-2 pl-4 pr-4 text-md",
      lg: "pt-3 pb-3 pl-5 pr-5 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    width: "default",
    size: "default",
  },
});

export default function Button({
  children,
  className,
  variant,
  width,
  size,
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, width, size }), className)}>
      {children}
    </button>
  );
}

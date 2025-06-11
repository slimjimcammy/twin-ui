import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
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
      taro: [
        "bg-[#C5A1FF]",
        "text-black",
        "border-black",
        "border-2",
        "hover:bg-[#A87CFF]",
        "hover:text-white",
        "transition-all",
        "duration-150",
      ].join(" "),
      tan: [
        "bg-[#F8D6B4]",
        "text-black",
        "border-black",
        "border-2",
        "hover:bg-[#E6B88F]",
        "hover:text-white",
        "transition-all",
        "duration-150",
      ].join(" "),
      bright: [
        "bg-[#F4D839]",
        "text-black",
        "border-black",
        "border-2",
        "hover: text-white",
        "hover:bg-[#D2B700]",
        "transition-all",
        "duration-150"
      ].join(" "),
    },
    width: {
      default: "w-fit",
      stretch: "w-full",
    },
    size: {
      default: "pt-2 pb-2 pl-3 pr-3 text-md",
      xs: "p-1 text-xs",
      sm: "pt-1 pb-1 pl-2 pr-2 text-sm",
      md: "pt-2 pb-2 pl-4 pr-4 text-md",
      lg: "pt-3 pb-3 pl-5 pr-5 text-lg",
    },
    shape: {
      default: " ",
      circle: " rounded-full aspect-square",
    },
  },
  defaultVariants: {
    variant: "default",
    width: "default",
    size: "default",
    shape: "default"
  },
});

export default function Button({
  children,
  className,
  variant,
  width,
  size,
  shape,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, width, size, shape }), className)}
    {...props}>
      {children}
    </button>
  );
}

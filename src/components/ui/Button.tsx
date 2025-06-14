import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 79259d94f21e68e7b02c73353e19ac3e0ee5396a
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
<<<<<<< HEAD
      default: "pt-2 pb-2 pl-3 pr-3 text-md",
      xs: "p-1 text-xs",
      sm: "pt-1 pb-1 pl-2 pr-2 text-sm",
      md: "pt-2 pb-2 pl-4 pr-4 text-md",
      lg: "pt-3 pb-3 pl-5 pr-5 text-lg",
=======
      default: "pt-2 pb-2 pl-2.5 pr-2.5 text-md",
      sm: "pt-1 pb-1 pl-1.5 pr-1.5 text-sm",
      md: "pt-2 pb-2 pl-2.5 pr-2.5 text-md",
      lg: "pt-3 pb-3 pl-3.5 pr-3.5 text-lg",
>>>>>>> 79259d94f21e68e7b02c73353e19ac3e0ee5396a
    },
    shape: {
      default: " ",
      circle: " rounded-full aspect-square",
    },
  },
  defaultVariants: {
    variant: "primary",
    width: "default",
    size: "default",
<<<<<<< HEAD
    shape: "default"
=======
    rounded: "md",
>>>>>>> 79259d94f21e68e7b02c73353e19ac3e0ee5396a
  },
});

export default function Button({
  children,
  className,
  variant,
  width,
  size,
<<<<<<< HEAD
  shape,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, width, size, shape }), className)}
    {...props}>
=======
  rounded,
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({ variant, width, size, rounded }),
        className
      )}
    >
>>>>>>> 79259d94f21e68e7b02c73353e19ac3e0ee5396a
      {children}
    </button>
  );
}

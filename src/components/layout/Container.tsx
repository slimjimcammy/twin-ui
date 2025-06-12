import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";

const containerVariants = cva("w-full box-border", {
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
      xs: "p-2",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
    border: {
      none: "border-none",
      all: "border-black border-2 border-solid",
      top: "border-t-black border-t-2 border-t-solid",
      bottom: "border-b-black border-b-2 border-b-solid",
      left: "border-l-black border-l-2 border-l-solid",
      right: "border-r-black border-r-2 border-r-solid",
      topLeft: "border-tl-black border-tl-2 border-tl-solid",
      topRight: "border-tr-black border-tr-2 border-tr-solid",
      bottomLeft: "border-bl-black border-bl-2 border-bl-solid",
      bottomRight: "border-br-black border-br-2 border-br-solid",
      topBottom:
        "border-t-black border-t-2 border-t-solid border-b-black border-b-2 border-b-solid",
      leftRight:
        "border-l-black border-l-2 border-l-solid border-r-black border-r-2 border-r-solid",
      topLeftBottomRight:
        "border-tl-black border-tl-2 border-tl-solid border-br-black border-br-2 border-br-solid",
      topRightBottomLeft:
        "border-tr-black border-tr-2 border-tr-solid border-bl-black border-bl-2 border-bl-solid",
      topLeftBottom:
        "border-tl-black border-tl-2 border-tl-solid border-b-black border-b-2 border-b-solid",
      topRightBottom:
        "border-tr-black border-tr-2 border-tr-solid border-b-black border-b-2 border-b-solid",
      topLeftRight:
        "border-tl-black border-tl-2 border-tl-solid border-r-black border-r-2 border-r-solid",
      topRightLeft:
        "border-tr-black border-tr-2 border-tr-solid border-l-black border-l-2 border-l-solid",
      bottomLeftRight:
        "border-bl-black border-bl-2 border-bl-solid border-r-black border-r-2 border-r-solid",
      bottomRightLeft:
        "border-br-black border-br-2 border-br-solid border-l-black border-l-2 border-l-solid",
    },
    center: {
      true: "mx-auto",
      false: "mx-0",
    },
  },
  defaultVariants: {
    width: "default",
    padding: "none",
    center: false,
  },
});

export interface ContainerProps extends VariantProps<typeof containerVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Container({
  children,
  width,
  height,
  padding,
  className = "",
  border,
  center,
}: ContainerProps) {
  return (
    <div
      className={cn(
        containerVariants({ width, height, padding, border, center }),
        className
      )}
    >
      {children}
    </div>
  );
}

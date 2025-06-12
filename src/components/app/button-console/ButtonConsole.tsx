import { cva } from "class-variance-authority";
import { cn } from "../../cn";
import { Flex } from "../../layout/Flex";
import Widget from "../../layout/Widget";
import ButtonConsoleItem from "./ButtonConsoleItem";

const buttonConsoleVariants = cva("relative", {
  variants: {
    variant: {
      default: "h-[50px]",
      sm: "h-[40px]",
      md: "h-[50px]",
      lg: "h-[60px]",
      fit: "h-fit",
    },
    width: {
      default: "w-auto",
      stretch: "w-full",
      fit: "w-fit",
    },
  },
  defaultVariants: {
    variant: "default",
    width: "default",
  },
});

export interface ButtonConsoleProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "sm" | "md" | "lg" | "fit";
  width?: "default" | "stretch" | "fit";
}

export default function ButtonConsole({
  children,
  className,
  variant,
  width,
}: ButtonConsoleProps) {
  return (
    <Widget
      variant="sm"
      className={cn(buttonConsoleVariants({ variant, width }), className)}
    >
      <Flex direction="row" gap="sm" width="stretch" align="center">
        {children}
      </Flex>
    </Widget>
  );
}

ButtonConsole.Item = ButtonConsoleItem;

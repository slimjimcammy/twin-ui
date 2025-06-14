import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../cn";
import { Flex } from "../../layout/Flex";
import Button from "../../ui/Button";
import type { ComponentProps } from "react";

const buttonConsoleVariants = cva("relative", {
  variants: {
    variant: {
      inline: "",
      alone: "border-[#212732] border-[0.5px] border-solid",
    },
    width: {
      default: "w-auto",
      stretch: "w-full",
      fit: "w-fit",
    },
    rounded: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
    },
  },
  defaultVariants: {
    variant: "inline",
    width: "default",
    rounded: "md",
  },
});

export interface ButtonConsoleProps
  extends VariantProps<typeof buttonConsoleVariants> {
  buttons: Array<ComponentProps<typeof Button> & { children: React.ReactNode }>;
  className?: string;
  width?: "default" | "stretch" | "fit";
}

export default function ButtonConsole({
  buttons,
  className,
  variant,
  width,
  rounded,
}: ButtonConsoleProps) {
  return (
    <Flex
      direction="row"
      gap={variant === "alone" ? "none" : "md"}
      width="stretch"
      align="center"
      className={cn(
        buttonConsoleVariants({ variant, width, rounded }),
        className,
        "overflow-x-auto"
      )}
    >
      {buttons.map(({ children, ...buttonProps }, index) => (
        <Button
          key={index}
          {...buttonProps}
          rounded={variant === "alone" ? "none" : "md"}
          className={cn(
            buttonProps.className,
            index !== buttons.length - 1 &&
              variant === "alone" &&
              "border-[#212732] border-r-[0.5px] border-solid"
          )}
        >
          {children}
        </Button>
      ))}
    </Flex>
  );
}

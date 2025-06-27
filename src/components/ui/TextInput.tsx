import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Flex } from "../layout/Flex";
import { Text } from "./Text";
import { type FlexProps } from "../layout/Flex";

const inputVariants = cva(
  [
    "font-default",
    "transition-all duration-150",
    "focus:outline-none",
    "focus:border-transparent",
    "focus:border-light border-[0.5px] border-solid",
    "text-light",
    "text-xs",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "border-[#212732] border-[0.5px] border-solid",
        error: "border-red-500 focus:border-b-red-500",
        success: "border-green-500 focus:border-b-green-500",
      },
      width: {
        default: "w-auto",
        stretch: "w-full",
        fit: "w-fit",
      },
      padding: {
        default: "px-md py-sm text-md focus:px-5",
        sm: "px-sm py-xs text-sm focus:px-md focus:px-4",
        md: "px-md py-sm text-md focus:px-lg focus:px-5",
        lg: "px-lg py-md text-lg focus:px-xl focus:px-6",
      },
      radius: {
        none: "",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      width: "default",
      padding: "default",
      radius: "md",
    },
  }
);

export interface TextInputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "size" | "width" | "height" | "padding" | "children"
    >,
    VariantProps<typeof inputVariants> {
  label?: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
  inputClassName?: string;
  required?: boolean;
  flexProps?: Omit<FlexProps, "children" | "className">;
}

export default function TextField({

  type = "text",
  label,
  placeholder,
  helperText,
  className,
  inputClassName,
  required,
  variant,
  width,
  padding,
  radius,
  flexProps,
  ...inputProps
}: TextInputProps) {
  return (
    <Flex direction="column" className={cn("gap-xs", className)} {...flexProps}>
      {label && (
        <Flex direction="row" gap="sm" align="center" justify="start">
          <Text variant="caption">{label}</Text>
          {required && <Text variant="p">*</Text>}
        </Flex>
      )}
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className={cn(
          inputVariants({ variant, width, padding, radius }),
          inputClassName
        )}
        {...inputProps}
      />
      {helperText && (
        <Text color="dimmed" className="text-[10px]">
          {helperText}
        </Text>
      )}
    </Flex>
  );
}

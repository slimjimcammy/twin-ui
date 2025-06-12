import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Flex } from "../layout/Flex";
import { Text } from "./Text";

const inputVariants = cva(
  [
    "font-[Public_Sans]",
    "p-2",
    "border-2 border-black border-solid",
    "rounded-sm",
    "transition-all duration-150",
    "focus:outline-none",
    "focus:border-transparent focus:border-b-2 focus:border-b-black",
    "focus:bg-gray-100",
  ].join(" "),
  {
    variants: {
      variant: {
        default: "",
        error: "border-red-500 focus:border-b-red-500",
        success: "border-green-500 focus:border-b-green-500",
      },
      width: {
        default: "w-auto",
        stretch: "w-full",
        fit: "w-fit",
        sm: "w-24",
        md: "w-48",
        lg: "w-64",
        xl: "w-96",
      },
    },
    defaultVariants: {
      variant: "default",
      width: "default",
    },
  }
);

export interface TextInputProps extends VariantProps<typeof inputVariants> {
  label?: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
  inputClassName?: string;
  required?: boolean;
}

export default function TextInput({
  label,
  placeholder,
  helperText,
  className,
  inputClassName,
  required,
  variant,
  width,
}: TextInputProps) {
  return (
    <Flex direction="column" gap="sm" className={className}>
      {label && (
        <Flex direction="row" gap="sm" align="center" justify="start">
          <Text variant="h6">{label}</Text>
          {required && <Text variant="p">*</Text>}
        </Flex>
      )}
      <input
        type="text"
        placeholder={placeholder}
        required={required}
        className={cn(inputVariants({ variant, width }), inputClassName)}
      />
      {helperText && (
        <Text variant="p" color="light">
          {helperText}
        </Text>
      )}
    </Flex>
  );
}

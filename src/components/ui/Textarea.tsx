import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Flex } from "../layout/Flex";
import { Text } from "./Text";

const textareaVariants = cva(
  [
    "font-[Public_Sans]",
    "p-2",
    "border-2 border-black border-solid",
    "rounded-sm",
    "transition-all duration-150",
    "focus:outline-none",
    "focus:border-transparent focus:border-b-2 focus:border-b-black",
    "focus:bg-gray-100",
    "resize-none",
    "min-h-[100px]",
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
      height: {
        default: "h-[100px]",
        sm: "h-[80px]",
        md: "h-[120px]",
        lg: "h-[160px]",
        xl: "h-[200px]",
        auto: "h-auto",
      },
    },
    defaultVariants: {
      variant: "default",
      width: "default",
      height: "default",
    },
  }
);

export interface TextareaProps extends VariantProps<typeof textareaVariants> {
  label?: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
  textareaClassName?: string;
  required?: boolean;
  rows?: number;
  maxLength?: number;
}

export default function Textarea({
  label,
  placeholder,
  helperText,
  className,
  textareaClassName,
  required,
  variant,
  width,
  height,
  rows,
  maxLength,
}: TextareaProps) {
  return (
    <Flex direction="column" gap="sm" className={className}>
      {label && (
        <Flex direction="row" gap="sm" align="center" justify="start">
          <Text variant="h6">{label}</Text>
          {required && <Text variant="p">*</Text>}
        </Flex>
      )}
      <textarea
        placeholder={placeholder}
        required={required}
        className={cn(
          textareaVariants({ variant, width, height }),
          textareaClassName
        )}
        rows={rows}
        maxLength={maxLength}
      />
      {helperText && (
        <Text variant="p" color="light">
          {helperText}
        </Text>
      )}
      {maxLength && (
        <Text variant="p" color="light" className="text-right">
          {maxLength} characters maximum
        </Text>
      )}
    </Flex>
  );
}

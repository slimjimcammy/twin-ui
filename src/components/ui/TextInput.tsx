import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Flex } from "../layout/Flex";
import { Text } from "./Text";

const inputVariants = cva(
  [
    "font-[Public_Sans]",
    "p-2",
    "rounded-sm",
    "transition-all duration-150",
    "focus:outline-none",
    "focus:border-transparent",
    "focus:border-[#F5F6FA] border-[0.5px] border-solid focus:px-3",
    "text-[#F5F6FA]",
    "text-[12px]",
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
    <Flex direction="column" className="gap-1">
      {label && (
        <Flex direction="row" gap="sm" align="center" justify="start">
          <Text className="text-[12px]" weight="light">
            {label}
          </Text>
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
        <Text color="dimmed" className="text-[10px]">
          {helperText}
        </Text>
      )}
    </Flex>
  );
}

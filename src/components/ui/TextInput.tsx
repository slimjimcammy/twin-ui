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

const fileInputClasses =
  "file:mr-4 file:py-2 file:px-4 file:rounded file:border-2 file:text-sm file:font-semibold file:bg-gray-400 file:text-black hover:file:bg-gray-600 hover:file:text-white";

export interface InputFieldProps extends VariantProps<typeof inputVariants> {
  type?: "text" | "file";
  label?: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
  inputClassName?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
}

export default function InputField({

  type = "text",
  label,
  placeholder,
  helperText,
  className,
  inputClassName,
  required,
  variant,
  width,
  onChange,
  accept,
}: InputFieldProps) {
  const isFile = type === "file";
  return (
    <Flex direction="column" gap="small" className={className}>
      {label && (
        <Flex direction="row" gap="small" align="center" justify="start">
          <Text variant="h6">{label}</Text>
          {required && <Text variant="p">*</Text>}
        </Flex>
      )}
      <input
        type={type}
        placeholder={isFile? undefined: placeholder}
        required={required}
        accept={isFile ? accept ?? ".mp3, audio" : undefined}
        onChange={onChange}
        className={cn(inputVariants({ variant, width }), isFile? fileInputClasses : "", inputClassName)}
      />
      {helperText && (
        <Text variant="p" color="light">
          {helperText}
        </Text>
      )}
    </Flex>
  );
}

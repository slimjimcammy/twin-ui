import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Flex } from "../layout/Flex";
import { Text } from "./Text";
import Button from "./Button";
import { useRef, useState } from "react";
const fileInputVariants = cva(
  [
    "font-[Public_Sans]",
    "p-2",
    "border-2 border-gray-700 border-solid",
    "rounded",
    "transition-all duration-150",
    "focus:outline-none",
    "focus:border-transparent focus:border-b-2 focus:border-b-black",
    "focus:bg-gray-100",
    "mr-4",
    "text-white",
    "hover:bg-[#343B4C]",
    "hover:text-white",
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

export interface InputFieldProps extends VariantProps<typeof fileInputVariants> {
  label?: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
  inputClassName?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  accept?: string;
  name?: string;
  inputId?: string,
}

export default function InputField({

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
  name,
  inputId = "file-upload",
  
}: InputFieldProps) 

{
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const handleClick = () => {
    fileInputRef.current?.click();
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
    onChange?.(e);
  }
  return (
    <Flex direction="column" gap="sm" className={className}>
    {label && <Text variant="h6">{label}</Text>}
      <input
        ref={fileInputRef}
        id={inputId}
        type="file"
        name={name}
        required={required}
        accept={accept}
        onChange={handleFileChange}
        className="hidden"
      />
      <Button
        onClick={handleClick}
        size='sm'
        className={cn(fileInputVariants({ variant, width }), inputClassName)}
      >
        Choose File
      </Button>
      {fileName && (
      <Text variant="p" color="default" className="text-sm text-gray-500 mt-1">
        Selected: {fileName}
      </Text>
    )}
      {helperText && (
        <Text variant="p" color="default">
          {helperText}
        </Text>
      )}
    </Flex>
  );
}

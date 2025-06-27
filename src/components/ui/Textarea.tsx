import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";
import { Flex } from "../layout/Flex";
import { Text } from "./Text";

const textareaVariants = cva(
  [
    "font-default",
    "border-line border-[0.5px] border-solid",
    "transition-all duration-150",
    "focus:outline-none",
    "resize-none",
  ].join(" "),
  {
    variants: {
      width: {
        default: "w-auto",
        stretch: "w-full",
        fit: "w-fit",
      },
      height: {
        default: "h-[100px]",
        sm: "h-[80px]",
        md: "h-[120px]",
        lg: "h-[160px]",
        xl: "h-[200px]",
        auto: "h-auto",
      },
      padding: {
        default: "px-md py-sm focus:px-lg focus:py-md",
        sm: "px-sm py-xs focus:px-md focus:py-xs",
        md: "px-lg py-md focus:px-xl focus:py-lg",
      },
    },
    defaultVariants: {
      width: "default",
      height: "default",
      padding: "default",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
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
  width,
  height,
  rows,
  padding,
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
        rows={rows}
        maxLength={maxLength}
        className={cn(
          textareaVariants({ width, height, padding }),
          textareaClassName
        )}
      />
      {helperText && <Text variant="p">{helperText}</Text>}
      {maxLength && <Text variant="p">{maxLength} characters maximum</Text>}
    </Flex>
  );
}

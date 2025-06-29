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
    "text-light",
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
  helperText?: string;
  className?: string;
  textareaClassName?: string;
}

export default function Textarea({
  label,
  helperText,
  className,
  textareaClassName,
  width,
  height,
  padding,
  ...props
}: TextareaProps) {
  return (
    <Flex direction="column" gap="sm" className={className}>
      {label && (
        <Flex direction="row" gap="sm" align="center" justify="start">
          <Text variant="caption">{label}</Text>
        </Flex>
      )}
      <textarea
        {...props}
        className={cn(
          textareaVariants({ width, height, padding }),
          textareaClassName
        )}
      />
      {helperText && <Text variant="p">{helperText}</Text>}
    </Flex>
  );
}

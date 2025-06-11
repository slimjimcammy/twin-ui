import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";
import Image from "./Image";

const iconVariants = cva("", {
  variants: {
    size: {
      default: "w-4 h-4",
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface IconProps extends VariantProps<typeof iconVariants> {
  src: string;
  alt: string;
  className?: string;
}

export function Icon({ src, alt, className, size, ...props }: IconProps) {
  return (
    <div className={cn(iconVariants({ size }), className)}>
      <Image src={src} alt={alt} width="stretch" height="stretch" {...props} />
    </div>
  );
}

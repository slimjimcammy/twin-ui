import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";

export interface ImageProps extends VariantProps<typeof imageVariants> {
  src: string;
  alt: string;
  className?: string;
}

const imageVariants = cva("w-auto h-auto object-cover", {
  variants: {
    width: {
      default: "w-auto",
      stretch: "w-full",
      fit: "w-fit",
    },
    height: {
      default: "h-auto",
      stretch: "h-full",
      fit: "h-fit",
    },
    defaultVariants: {
      width: "default",
      height: "default",
    },
  },
});

export default function Image({
  src,
  alt,
  className,
  width,
  height,
  ...props
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        imageVariants({ width, height }),
        className,
        "object-cover"
      )}
      {...props}
    />
  );
}

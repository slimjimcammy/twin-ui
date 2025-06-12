import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../cn";
import { Text } from "./Text";

// this component is not yet finished
export interface LinkProps extends VariantProps<typeof linkVariants> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const linkVariants = cva("text-blue-500 hover:text-blue-600", {
  variants: {
    variant: {
      default: "",
    },
  },
});

export default function Link({
  href,
  children,
  className,
  variant,
}: LinkProps) {
  return (
    <a href={href} className={cn(linkVariants({ variant }), className)}>
      <Text variant="p">{children}</Text>
    </a>
  );
}

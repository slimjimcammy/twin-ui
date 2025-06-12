import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../cn";
import { Flex } from "../../layout/Flex";
import VerticalNavGroup from "./VerticalNavGroup";
import VerticalNavItem from "./VerticalNavItem";
import VerticalNavFooter from "./VerticalNavFooter";
import VerticalNavHeader from "./VerticalNavHeader";
import Widget from "../../layout/Widget";

const verticalNavVariants = cva("relative", {
  variants: {
    variant: {
      default: "p-2 w-[250px]",
      sm: "p-2 w-[200px]",
      md: "p-2 w-[250px]",
      lg: "p-2 w-[300px]",
      fit: "p-2 w-fit",
    },
    height: {
      default: "h-auto",
      stretch: "h-full",
      fit: "h-fit",
    },
  },
  defaultVariants: {
    variant: "default",
    height: "default",
  },
});

export interface VerticalNavProps
  extends VariantProps<typeof verticalNavVariants> {
  children: React.ReactNode;
  className?: string;
}

export function VerticalNav({
  children,
  className,
  variant,
  height,
}: VerticalNavProps) {
  return (
    <Widget
      variant="sm"
      className={cn(verticalNavVariants({ variant, height }), className)}
    >
      <Flex direction="column" gap="sm" height="stretch" justify="start">
        {children}
      </Flex>
    </Widget>
  );
}

// Attach compound components
VerticalNav.Group = VerticalNavGroup;
VerticalNav.Item = VerticalNavItem;
VerticalNav.Footer = VerticalNavFooter;
VerticalNav.Header = VerticalNavHeader;

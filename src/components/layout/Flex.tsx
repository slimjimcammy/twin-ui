import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";

export interface FlexProps extends VariantProps<typeof flexVariants> {
  children: React.ReactNode;
  className?: string;
}

const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      column: "flex-col",
      rowReverse: "flex-row-reverse",
      columnReverse: "flex-col-reverse",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    wrap: {
      wrap: "flex-wrap",
      nowrap: "flex-nowrap",
    },
    gap: {
      none: "gap-0",
      sm: "gap-1",
      md: "gap-2",
      lg: "gap-3",
    },
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
      direction: "row",
      justify: "start",
      align: "start",
      wrap: "wrap",
      gap: "none",
    },
  },
});

export function Flex({
  children,
  className,
  direction,
  justify,
  align,
  wrap,
  gap,
  height,
  ...props
}: FlexProps) {
  return (
    <div
      className={cn(
        flexVariants({ direction, justify, align, wrap, gap, height }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

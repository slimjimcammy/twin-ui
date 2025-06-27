import { cn } from "../cn";
import { cva, type VariantProps } from "class-variance-authority";

export interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof flexVariants> {
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
      xs: "gap-xs",
      sm: "gap-sm",
      md: "gap-md",
      lg: "gap-lg",
      xl: "gap-xl",
    },
    width: {
      default: "w-auto",
      stretch: "w-full",
      fit: "w-fit",
      screen: "w-screen",
    },
    height: {
      default: "h-auto",
      stretch: "h-full",
      fit: "h-fit",
      screen: "h-screen",
    },
    padding: {
      none: "",
      sm: "p-sm",
      md: "p-md",
      lg: "p-lg",
      xl: "p-xl",
    },
    radius: {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      round: "rounded-full",
    },
    defaultVariants: {
      direction: "row",
      justify: "start",
      align: "start",
      wrap: "wrap",
      gap: "none",
      padding: "none",
      radius: "none",
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
  width,
  height,
  padding,
  radius,
  ...props
}: FlexProps) {
  return (
    <div
      className={cn(
        flexVariants({
          direction,
          justify,
          align,
          wrap,
          width,
          gap,
          height,
          padding,
          radius,
        }),
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

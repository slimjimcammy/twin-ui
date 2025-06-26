import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../cn";

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  children: React.ReactNode;
  className?: string;
}

const gridVariants = cva("grid", {
  variants: {
    cols: {
      one: "grid-cols-1",
      two: "grid-cols-1 sm:grid-cols-2",
      three: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      four: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      five: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6",
      auto: "grid-cols-auto",
      "auto-fit": "grid-cols-[repeat(auto-fit,minmax(250px,1fr))]",
      "auto-fill": "grid-cols-[repeat(auto-fill,minmax(250px,1fr))]",
    },
    spacing: {
      none: "gap-0",
      sm: "gap-sm",
      md: "gap-md",
      lg: "gap-lg",
      xl: "gap-xl",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
    width: {
      fit: "w-fit",
      stretch: "w-full",
      screen: "w-screen",
    },
    height: {
      fit: "h-fit",
      stretch: "h-full",
      screen: "h-screen",
    },
  },
  defaultVariants: {
    cols: "auto-fit",
    spacing: "sm",
    align: "stretch",
    justify: "start",
  },
});

export function Grid({
  children,
  cols,
  spacing,
  align,
  justify,
  width,
  height,
  className,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(
        gridVariants({
          cols,
          spacing,
          align,
          justify,
          width,
          height,
          className,
        })
      )}
      {...props}
    >
      {children}
    </div>
  );
}

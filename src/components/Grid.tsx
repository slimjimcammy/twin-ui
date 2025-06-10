import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const gridVariants = cva(
  // Base styles
  'grid',
  {
    variants: {
      cols: {
        1: 'grid-cols-1',
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        6: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6',
        auto: 'grid-cols-auto',
        'auto-fit': 'grid-cols-[repeat(auto-fit,minmax(250px,1fr))]',
        'auto-fill': 'grid-cols-[repeat(auto-fill,minmax(250px,1fr))]',
      },
      spacing: {
        none: 'gap-0',
        xs: 'gap-1',
        sm: 'gap-2',
        md: 'gap-4',
        lg: 'gap-6',
        xl: 'gap-8',
      },
      align: {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
      },
    },
    defaultVariants: {
      cols: 'auto-fit',
      spacing: 'md',
      align: 'stretch',
      justify: 'start',
    },
  }
);

export interface GridProps extends VariantProps<typeof gridVariants> {
  children: ReactNode;
  className?: string;
}

export function Grid({
  children,
  cols,
  spacing,
  align,
  justify,
  className = '',
}: GridProps) {
  return (
    <div className={gridVariants({ cols, spacing, align, justify, className })}>
      {children}
    </div>
  );
} 
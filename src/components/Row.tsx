import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const rowVariants = cva(
  // Base styles
  'flex flex-row',
  {
    variants: {
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
        baseline: 'items-baseline',
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly',
      },
      wrap: {
        wrap: 'flex-wrap',
        nowrap: 'flex-nowrap',
        wrapReverse: 'flex-wrap-reverse',
      },
    },
    defaultVariants: {
      spacing: 'md',
      align: 'center',
      justify: 'start',
      wrap: 'nowrap',
    },
  }
);

export interface RowProps extends VariantProps<typeof rowVariants> {
  children: ReactNode;
  className?: string;
}

export function Row({
  children,
  spacing,
  align,
  justify,
  wrap,
  className = '',
}: RowProps) {
  return (
    <div className={rowVariants({ spacing, align, justify, wrap, className })}>
      {children}
    </div>
  );
} 
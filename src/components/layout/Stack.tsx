import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const stackVariants = cva(
  // Base styles
  'flex flex-col',
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
      },
      justify: {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
      },
    },
    defaultVariants: {
      spacing: 'md',
      align: 'stretch',
      justify: 'start',
    },
  }
);

export interface StackProps extends VariantProps<typeof stackVariants> {
  children: ReactNode;
  className?: string;
}

export function Stack({
  children,
  spacing,
  align,
  justify,
  className = '',
}: StackProps) {
  return (
    <div className={stackVariants({ spacing, align, justify, className })}>
      {children}
    </div>
  );
} 
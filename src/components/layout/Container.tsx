import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const containerVariants = cva(
  // Base styles
  'mx-auto w-full',
  {
    variants: {
      width: {
        full: 'max-w-none',
        default: 'max-w-7xl',
        narrow: 'max-w-5xl',
        tight: 'max-w-3xl',
      },
      padding: {
        none: 'px-0',
        small: 'px-4',
        default: 'px-4 sm:px-6 lg:px-8',
        large: 'px-6 sm:px-8 lg:px-12',
      },
    },
    defaultVariants: {
      width: 'default',
      padding: 'default',
    },
  }
);

export interface ContainerProps extends VariantProps<typeof containerVariants> {
  children: ReactNode;
  className?: string;
}

export function Container({
  children,
  width,
  padding,
  className = '',
}: ContainerProps) {
  return (
    <div className={containerVariants({ width, padding, className })}>
      {children}
    </div>
  );
} 
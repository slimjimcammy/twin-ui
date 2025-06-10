import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const cardVariants = cva(
  // Base styles
  'rounded-lg bg-white',
  {
    variants: {
      padding: {
        none: 'p-0',
        small: 'p-3',
        default: 'p-4',
        large: 'p-6',
        xl: 'p-8',
      },
      shadow: {
        none: '',
        sm: 'shadow-sm',
        default: 'shadow',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl',
      },
      border: {
        none: 'border-0',
        default: 'border border-gray-200',
        colored: 'border-2 border-blue-500',
      },
      hover: {
        none: '',
        lift: 'transition-transform hover:-translate-y-1',
        grow: 'transition-transform hover:scale-105',
        highlight: 'transition-colors hover:border-blue-500',
      },
    },
    defaultVariants: {
      padding: 'default',
      shadow: 'default',
      border: 'default',
      hover: 'none',
    },
  }
);

export interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

export function Card({
  children,
  padding,
  shadow,
  border,
  hover,
  className = '',
}: CardProps) {
  return (
    <div className={cardVariants({ padding, shadow, border, hover, className })}>
      {children}
    </div>
  );
} 
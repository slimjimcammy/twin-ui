import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';


const buttonVariants = cva(
  // Base styles
  'rounded-lg bg-white',
  {
    variants: {
        background: {
            default: 'bg-gray-500 text-white',
            record: 'bg-red-300 text-white',
            transparent: 'bg-transparent', 
        },
        size: {
            small: 'h-8 text-sm',
            default: 'h-12 text-base',
            large: 'h-16 text-lg'
        },
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
        blue: 'border-2 border-blue-500',
        red: 'border-2 border-red-500',
        black: 'border border-black-500',
      },
      hover: {
        none: '',
        gray: 'hover:bg-gray-700',
        red: 'hover:bg-red-500',
        blue: 'hover:border-blue-500',
        transparent: 'hover:bg-gray-100',
      },
      layout: {
        default: "flex flex-col items-center justify-center",
        not_center: 'flex flex-col',
      },
    },
    defaultVariants: {
      background: 'default',
      size: 'default',
      padding: 'default',
      shadow: 'default',
      border: 'default',
      hover: 'none',
      layout: 'default'
    },
  }
);

export interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode;
  className?: string;
}

export function Button({
  children,
  background,
  size,
  padding,
  shadow,
  border,   
  hover,
  layout,
  className = '',
}: ButtonProps) {
  return (
    <div className={buttonVariants({ background, size, padding, shadow, border, hover, layout, className })}>
      {children}
    </div>
  );
} 
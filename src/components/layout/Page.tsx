import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const pageVariants = cva(
  // Base styles
  'min-h-screen w-full',
  {
    variants: {
      layout: {
        default: 'flex flex-col',
        centered: 'flex flex-col items-center justify-center',
        fluid: 'flex flex-col',
      },
      background: {
        none: '',
        light: 'bg-gray-50',
        dark: 'bg-gray-900 text-white',
        gradient: 'bg-gradient-to-b from-blue-50 to-purple-50',
      },
      spacing: {
        none: '',
        default: 'gap-8',
        large: 'gap-12',
      },
    },
    defaultVariants: {
      layout: 'default',
      background: 'none',
      spacing: 'default',
    },
  }
);

export interface PageProps extends VariantProps<typeof pageVariants> {
  children: ReactNode;
  className?: string;
}

export function Page({
  children,
  layout,
  background,
  spacing,
  className = '',
}: PageProps) {
  return (
    <main className={pageVariants({ layout, background, spacing, className })}>
      {children}
    </main>
  );
} 
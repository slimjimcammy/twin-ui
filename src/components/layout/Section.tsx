import { type ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const sectionVariants = cva(
  // Base styles
  'w-full',
  {
    variants: {
      padding: {
        none: 'py-0',
        small: 'py-4 md:py-6',
        default: 'py-8 md:py-12',
        large: 'py-12 md:py-16',
        xl: 'py-16 md:py-24',
      },
      background: {
        none: '',
        light: 'bg-gray-50',
        dark: 'bg-gray-900 text-white',
        primary: 'bg-blue-50',
        secondary: 'bg-purple-50',
      },
    },
    defaultVariants: {
      padding: 'default',
      background: 'none',
    },
  }
);

export interface SectionProps extends VariantProps<typeof sectionVariants> {
  children: ReactNode;
  className?: string;
}

export function Section({
  children,
  padding,
  background,
  className = '',
}: SectionProps) {
  return (
    <section className={sectionVariants({ padding, background, className })}>
      {children}
    </section>
  );
} 
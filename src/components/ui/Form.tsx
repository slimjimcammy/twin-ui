import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../cn";

// README:
// - This component is not yet finished
export interface FormProps extends VariantProps<typeof formVariants> {
  children: React.ReactNode;
  className?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const formVariants = cva("flex flex-col gap-2", {
  variants: {
    variant: {  
      default: "",
      inline: "flex sm:flex-row sm:items-center", 
    },
    theme: {
      none: "",
      light: "bg-white text-black",
      dark: "bg-black text-white"
    },
    size: {
      sm: "text-sm gap-5",
      md: "text-md gap-10",
      lg: "text-lg gap-20",
    },
  },
  defaultVariants: {
    variant: "default",
    theme:"none",
    size:"md",
  },
});

export default function Form({ children, className, variant, theme, size, onSubmit, onChange, }: FormProps) {
  return (
    <form 
      onSubmit={onSubmit}
      onChange={onChange}
      className={cn(formVariants({ variant, theme, size }), className)}>{children}
    </form>
  );
}

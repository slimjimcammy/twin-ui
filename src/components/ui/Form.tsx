import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../cn";

// README:
// - This component is not yet finished
export interface FormProps
  extends React.FormHTMLAttributes<HTMLFormElement>,
    VariantProps<typeof formVariants> {
  children: React.ReactNode;
  className?: string;
}

const formVariants = cva("flex flex-col gap-2", {
  variants: {
    variant: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function Form({
  children,
  className,
  variant,
  onSubmit,
  onChange,
}: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      onChange={onChange}
      className={cn(formVariants({ variant }), className)}
    >
      {children}
    </form>
  );
}

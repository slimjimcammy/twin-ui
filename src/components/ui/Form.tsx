import { cn } from "../cn";
import { Flex, type FlexProps } from "../layout/Flex";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Form({ className, children, ...props }: FormProps) {
  return (
    <form className={cn(className, "flex flex-col gap-md")} {...props}>
      {children}
    </form>
  );
}

interface FormRowProps
  extends Omit<FlexProps, "children" | "direction" | "align"> {
  children: React.ReactNode;
}

export function FormRow({ children, ...props }: FormRowProps) {
  return (
    <Flex direction="row" align="center" {...props}>
      {children}
    </Flex>
  );
}

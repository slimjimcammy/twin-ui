import { cn } from "../../cn";
import { Flex } from "../../layout/Flex";
import Button from "../../ui/Button";

export interface ButtonConsoleItemProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary";
}

export default function ButtonConsoleItem({
  children,
  className,
  variant,
}: ButtonConsoleItemProps) {
  return (
    <Button variant={variant} size="md" className={cn(className)}>
      <Flex direction="row" gap="md" align="center">
        {children}
      </Flex>
    </Button>
  );
}

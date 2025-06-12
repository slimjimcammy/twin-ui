import { cn } from "../../cn";
import { Flex } from "../../layout/Flex";
import Button from "../../ui/Button";

export interface ButtonConsoleItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function ButtonConsoleItem({
  children,
  className,
}: ButtonConsoleItemProps) {
  return (
    <Button variant="tertiary" size="md" className={cn(className)}>
      <Flex direction="row" gap="md" align="center">
        {children}
      </Flex>
    </Button>
  );
}

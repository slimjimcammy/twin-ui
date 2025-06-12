import { cn } from "../../cn";
import { Flex } from "../../layout/Flex";
import Button from "../../ui/Button";

export interface VerticalNavItemProps {
  children: React.ReactNode;
  className?: string;
}

export default function VerticalNavItem({
  children,
  className,
}: VerticalNavItemProps) {
  return (
    <Button
      variant="tertiary"
      size="md"
      width="stretch"
      className={cn(className)}
    >
      <Flex direction="row" gap="md" align="center">
        {children}
      </Flex>
    </Button>
  );
}

import { Flex } from "../../layout/Flex";
import { Text } from "../../ui/Text";

export interface VerticalNavGroupProps {
  children: React.ReactNode;
  label: string;
}

export default function VerticalNavGroup({
  children,
  label,
}: VerticalNavGroupProps) {
  return (
    <Flex direction="column" gap="sm">
      <Text
        variant="h6"
        color="default"
        width="stretch"
        font="default"
        transform="uppercase"
      >
        {label}
      </Text>
      <Flex direction="column" gap="sm">
        {children}
      </Flex>
    </Flex>
  );
}

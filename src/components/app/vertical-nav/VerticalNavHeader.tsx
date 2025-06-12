import { Text } from "../../ui/Text";

export interface VerticalNavHeaderProps {
  children: React.ReactNode;
  size: "default";
}

export default function VerticalNavHeader({
  children,
}: VerticalNavHeaderProps) {
  return (
    <Text variant="h1" color="default" font="default" align="center">
      {children}
    </Text>
  );
}

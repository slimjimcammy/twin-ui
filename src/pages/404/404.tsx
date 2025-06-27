import { Flex } from "../../components/layout/Flex";
import { Text } from "../../components/ui/Text";

export default function NotFound() {
  return (
    <Flex
      width="stretch"
      height="stretch"
      align="center"
      justify="center"
      gap="md"
      direction="column"
    >
      <Text variant="h1">404</Text>
      <Text variant="h6" color="dimmed">
        The content you requested could not be found.
      </Text>
    </Flex>
  );
}

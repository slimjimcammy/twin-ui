import { Flex } from "../components/layout/Flex";
import { Text } from "../components/ui/Text";

export default function Login() {
  return (
    <Flex
      width="stretch"
      height="stretch"
      align="center"
      justify="center"
      gap="md"
      direction="column"
    >
      <Text variant="h1">Twin</Text>
      <Text variant="h6" color="dimmed">
        Log in with Google
      </Text>
    </Flex>
  );
}

import { Container } from "./components/layout/Container";
import { Grid } from "./components/layout/Grid";
import { Icon } from "./components/ui/Icon";
import { Text } from "./components/ui/Text";
import { Flex } from "./components/layout/Flex";
import TextInput from "./components/ui/TextInput";
import Button from "./components/ui/Button";
import Textarea from "./components/ui/Textarea";

export default function App() {
  return (
    <Container padding="small" height="screen">
      <Text variant="h1" color="default" width="stretch" font="heading">
        Hello World
      </Text>
      <Icon src="/vite.svg" alt="Logo" />
      <Grid cols="two" spacing="none" align="center" justify="center">
        <Button className="flex items-center gap-2" size="md">
          {/* <Icon src="/vite.svg" alt="Logo" size="sm" /> */}
          Button
        </Button>
        <TextInput
          label="Name"
          placeholder="Enter your name"
          required
          helperText="Put both first and last name"
        />
      </Grid>
      <Textarea
        label="Message"
        placeholder="Enter your message"
        width="default"
        height="xl"
        helperText="This is a helper text"
        required
      />
    </Container>
  );
}

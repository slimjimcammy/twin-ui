import { Container } from "./components/layout/Container";
import { Grid } from "./components/layout/Grid";
import { Icon } from "./components/ui/Icon";
import { Text } from "./components/ui/Text";
import { Flex } from "./components/layout/Flex";
import Button from "./components/ui/Button";
import Textarea from "./components/ui/Textarea";
import LikeButton from "./components/ui/LikeButton";
import InputField from "./components/ui/TextInput";
export default function App() {
  
  return (
    
    <Container padding="small" height="screen">
      <Text variant="h1" color="default" width="stretch" font="heading">
        Hello World
      </Text>
      <Icon src="/vite.svg" alt="Logo" />
      <Grid cols="two" spacing="none" align="center" justify="center">
        <Button className="flex items-center gap-2" variant="tan" size="sm">
          {/* <Icon src="/vite.svg" alt="Logo" size="sm" /> */}
          Post
        </Button>
        <Button className="flex items-center gap-2" variant="taro" size="sm">
          {/* <Icon src="/vite.svg" alt="Logo" size="sm" /> */}
          Connect MIDI
        </Button>
        <LikeButton variant="bright"  size="sm"/> 
         <LikeButton iconType="play" variant="bright"  size="sm"/> 
        <InputField
          type="text"
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
      <InputField
        type="file"
        label="Upload MP3"
        helperText="Only .mp3 files accepted"
        width="fit"
        required
        onChange={(e) => console.log("KYOTO Virtual Ryot Remix")}
      />
    </Container>
  );
}

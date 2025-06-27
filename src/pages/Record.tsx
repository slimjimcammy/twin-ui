import Form, { FormRow } from "../components/ui/Form";
import TextInput from "../components/ui/TextInput";
import FileInput from "../components/ui/FileInput";
import { Grid } from "../components/layout/Grid";
import { Text } from "../components/ui/Text";
import Button from "../components/ui/Button";
import Widget from "../components/layout/Widget";
import Image from "../components/ui/Image";
import { Flex } from "../components/layout/Flex";
import { useState } from "react";
export default function Record() {
  const [midiConnected, setMidiConnected] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMidiConnected(true);
  };

  return (
    <Flex
      direction="column"
      gap="md"
      className="pl-4 h-full min-h-0 overflow-x-hidden"
      height="stretch"
      width="stretch"
    >
      <Text variant="h1" weight="bold" font="header">
        RECORD
      </Text>
      <Flex direction="row" gap="md" height="stretch">
        <Widget
          direction="column"
          padding="md"
          gap="sm"
          className="min-w-[250px]"
          height="fit"
        >
          <Flex direction="column" gap="xs">
            <Text variant="h6" font="default">
              1. Fill Out Form{" "}
            </Text>
            <Text variant="caption" weight="thin" color="dimmed">
              (Fill all required fields)
            </Text>
          </Flex>
          <Flex direction="column" gap="xs">
            <Text variant="h6" font="default">
              2. Connect MIDI device{" "}
            </Text>
            <Text variant="caption" weight="thin" color="dimmed">
              (Await confirmpation pop-up)
            </Text>
          </Flex>
          <Flex direction="column" gap="xs">
            <Text variant="h6" font="default">
              3. Hit record on Cerato
            </Text>
            <Text variant="caption" weight="thin" color="dimmed">
              (Button on X deck, on the Y)
            </Text>
          </Flex>
          <Flex direction="column" gap="xs">
            <Text variant="h6" font="default">
              4. Press capture here
            </Text>
            <Text variant="caption" weight="thin" color="dimmed">
              (and start DJ-ing!)
            </Text>
          </Flex>
        </Widget>
        <Flex height="stretch" width="stretch">
          <Flex direction="column" width="stretch">
            <Form className="w-full">
              <FormRow gap="md">
                <TextInput
                  label="Transition name"
                  className="flex-1"
                  required
                />
                <FileInput
                  label="Audio"
                  buttonProps={{
                    variant: "secondary",
                    size: "sm",
                  }}
                />
              </FormRow>
              <FormRow gap="md">
                <TextInput
                  label="Song 1"
                  placeholder="KYOTO"
                  helperText="Help"
                  className="w-full"
                />
                <TextInput
                  label="Song 2"
                  placeholder="JACKIE CHAN"
                  helperText="HelpterText"
                  className="w-full"
                />
              </FormRow>

              <Widget
                className="w-full aspect-square relative overflow-hidden"
                padding="sm"
              >
                <Image
                  src="/beyonce.jpg"
                  alt="Album Cover"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </Widget>
              <Widget
                className="w-full aspect-square relative overflow-hidden"
                padding="sm"
              >
                <Image
                  src="/dragons.jpg"
                  alt="Album Cover"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </Widget>
            </Form>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

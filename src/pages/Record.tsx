import Form, { FormRow } from "../components/ui/Form";
import TextInput from "../components/ui/TextInput";
import FileInput from "../components/ui/FileInput";
import { Text } from "../components/ui/Text";
import Button from "../components/ui/Button";
import Textarea from "../components/ui/Textarea";
import Widget from "../components/layout/Widget";
import Image from "../components/ui/Image";
import { Flex } from "../components/layout/Flex";
import { useState } from "react";
import "../index.css";
export default function Record() {
  const [midiConnected, setMidiConnected] = useState(false);

  const handleMIDIConnect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMidiConnected(true);
  };

  // Can later put in a filler image when we implement code to get cover image
  const [trackPairs, setTrackPairs] = useState([
    { label: "Track 1", image: "beyonce.jpg" },
    { label: "Track 2", image: "dragons.jpg" },
  ]);

  // again, can change img to a filler img we have
  const addTrack = () => {
    const nextNum = trackPairs.length + 1;
    const newTrack = {
      label: `Track ${nextNum}`,
      image: "beyonce.jpg",
    };
    setTrackPairs([...trackPairs, newTrack]);
  };

  const removeTrack = (index: number) => {
    const updated = trackPairs.filter((_, i) => i !== index);
    const relabel = updated.map((trackPairs, i) => ({
      ...trackPairs,
      label: `Track ${i + 1}`,
    }));
    setTrackPairs(relabel);
  };

  return (
    <Flex
      direction="column"
      gap="md"
      className="pl-4 h-full min-h-0 overflow-x-hidden scrollbar pr-4"
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
            <Button
              variant="secondary"
              onClick={handleMIDIConnect}
              size="sm"
              className="mx-0"
            >
              ConnectMIDI
            </Button>
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
          <Flex direction="row" gap="xs">
            <Button variant="secondary" onClick={handleMIDIConnect} size="sm">
              Connect MIDI
            </Button>
            <Button
              variant="secondary"
              size="sm"
              disabled={!midiConnected}
              className={`transition-all duration-250 ${midiConnected ? "bg-success" : "bg-error opacity-50"}`}
            >
              Record
            </Button>
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
              <Textarea label="Description" />
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
              <Flex direction="row" gap="sm">
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
              </Flex>
              {/*Later on make it so when all fields are filled change color?*/}
              <Button
                variant="secondary"
                size="md"
                className="bg-error opacity-50"
              >
                POST
              </Button>
            </Form>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

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
import "../index.css"
import { useNavigate } from "react-router-dom";
export default function Record() {
  const [midiConnected, setMidiConnected] = useState(false);

  const handleMIDIConnect = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Eventual code to connect MIDI
    setMidiConnected(true);
  };

  // Can later put in a filler image when we implement code to get cover image 
  const [trackPairs, setTrackPairs] = useState([
    {id: crypto.randomUUID(), name: "", image: "beyonce.jpg"},
    {id: crypto.randomUUID(), name: "", image: "dragons.jpg"},
  ])

  // again, can change img to a filler img we have
  const addTrack = () => {
    if (trackPairs.length >= 4) return;
    const newTrack = {
        id: crypto.randomUUID(),
        name: "",
        image: "beyonce.jpg",
    }
    setTrackPairs([...trackPairs, newTrack])
  }
  const nameChange = (id: string, newName: string) => {
    setTrackPairs((prev) => 
        prev.map((track) => 
            track.id === id ? {...track, name: newName} : track
        )
    )
  }

  const removeTrack = (index: number) => {
    if (trackPairs.length <= 2) return;
    const updated = trackPairs.filter((_, i) => i !== index)
    setTrackPairs(updated)
  }


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
              <Button variant='secondary' onClick={handleMIDIConnect} size='sm' className="mx-0">
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
            <Button variant='secondary' size='sm' disabled={!midiConnected} className={`transition-all duration-250 mx-0 ${midiConnected? "bg-success" : "bg-error opacity-30"}`}>
                Record  
            </Button>
         
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
              <Textarea  label="Description"/>
              <Flex
                    direction={trackPairs.length > 2 ? "column" : "row"}
                    gap="sm"
                    justify={trackPairs.length > 2 ? "start" : "evenly"}
                >
                    {trackPairs.map((track, i) => (
                    <Flex key={track.id}  direction="column" gap="xs" className="w-full">
                        <FormRow>
                        <TextInput
                            key={track.id}
                            label={`Track ${trackPairs.indexOf(track) + 1}`}
                            name={`song-${i}`}
                            placeholder={`Track ${trackPairs.indexOf(track) + 1}`}
                            onChange={(e) => nameChange(track.id, e.target.value)}
                            className="w-full"
                            required
                        />
                        <Button type="button" onClick={() => removeTrack(i)} size='sm' className="bg-light text-error relative mt-7">
                            x
                        </Button>
                        </FormRow>
                        <Widget className={`${trackPairs.length > 2 ? "w-1/7" : "w-1/2"} aspect-square relative overflow-hidden mx-auto`} padding="sm">
                        <Image
                            src={track.image}
                            alt={`Album Cover ${trackPairs.indexOf(track) + 1}`}
                            className="absolute inset-0 w-full object-cover"
                        />
                        </Widget>
                    </Flex>
                    ))}
                </Flex>
                <Button type='button' className="bg-light" onClick={addTrack} size='sm' >
                    Add Song
                </Button>
              {/*Eventual code to enable the button based on required forms (ref?) */}
              <Button variant='disabled' size="md" disabled className="bg-light">
                POST
            </Button>
            </Form>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

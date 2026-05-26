import Form, { FormRow } from "../components/ui/Form";
import TextInput from "../components/ui/TextInput";
import FileInput from "../components/ui/FileInput";
import { Text } from "../components/ui/Text";
import Button from "../components/ui/Button";
import Textarea from "../components/ui/Textarea";
import Widget from "../components/layout/Widget";
import Image from "../components/ui/Image";
import { Flex } from "../components/layout/Flex";
import { useState, useRef } from "react";
import "../index.css"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/app/auth/AuthContext";
import TrackSearchInput from "./view-transition/components/SongSearchDropdown";
// IMPORTANT, ADD FEATURE WHERE IF NOT LOGGED IN CAN'T POST/UPLOAD
export default function Record() {
  const [midiConnected, setMidiConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);
  const[isRecording, setIsRecording] = useState(false);
  const isRecordingRef = useRef(false);
  const { isAuthenticated } = useAuth();
  const [transitionName, setTransitionName] = useState("");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [description, setDescription] = useState("");
  const midiEventsRef = useRef<any[]>([]);



  const handleRecord = async (e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
    if (!isRecordingRef.current) {
    console.log("Starting recording");
    midiEventsRef.current = [];
  } else
  {
    console.log("We are recording, time to stop recording");
    const stopMessage = JSON.stringify({ command: "KILL/SUMMARIZE" });
    socketRef.current?.send(stopMessage);
  }

  isRecordingRef.current = !isRecordingRef.current;
  setIsRecording(isRecordingRef.current);
};

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  if(!audioFile)
  {
    alert("Audio File is required!");
    return;
  }
  const uploadInit = await fetch("http://localhost:8000/uploads/track-pair", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      mp3_filename: audioFile.name,
      mp3_content_type: audioFile.type,
      json_filename: "metadata.json",
      json_content_type: "application/json",
    }),
  });

  const uploadData = await uploadInit.json();

  const mp3UploadUrl = uploadData.mp3.upload_url;
  const mp3Key = uploadData.mp3.s3_key;

  const jsonUploadUrl = uploadData.json.upload_url;
  const jsonKey = uploadData.json.s3_key;

  const mp3Res = await fetch(mp3UploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": audioFile.type,
    },
    body: audioFile,
  });

    if (!mp3Res.ok) {
    console.error("Failed to upload MP3", mp3Res.status, await mp3Res.text());
    alert("Failed to upload MP3 to S3");
    return;
  }

  const recordingData = {
    events: midiEventsRef.current
  };

  const jsonUpload = await fetch(jsonUploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recordingData),
  });

  if (!jsonUpload.ok) {
    console.error("Failed to upload JSON", jsonUpload.status, await jsonUpload.text());
    alert("Failed to upload JSON to S3");
    return;
  }

  await Promise.all(
  trackPairs
    .filter((pair) => pair?.song)
      .map((pair) =>
        fetch("http://localhost:8000/songs/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            soundcloud_song_id: pair.song.soundcloud_song_id,
            title: pair.song.title,
            artist_name: pair.song.artist_name,
            album_cover_img_url: pair.song.album_cover_img_url,
          }),
        })
      )
  );
  const postRes = await fetch("http://localhost:8000/posts/from-upload", 
    {
      method: "POST",
      credentials: "include",
      headers:
      {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      transition_name: transitionName,
      description: description,
      transition_audio_url:  mp3Key,
      transition_json_summary_url: jsonKey,
      song_1_id: trackPairs[0].song?.soundcloud_song_id,
      song_2_id: trackPairs[1].song?.soundcloud_song_id, 
      song_3_id: trackPairs[2].song?.soundcloud_song_id,
      song_4_id: trackPairs[3]?.song?.soundcloud_song_id, 
    }),
    }
  )
  if(!postRes.ok)
  {
    alert("post creation failed");
    return;
  }
  alert("Upload done");
}

  const handleMIDIConnect = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!navigator.requestMIDIAccess) {
        alert("Web MIDI not supported for browser.");
        return;
      }
    const socket = new WebSocket("ws://localhost:6789")
   
    socket.onopen = async () => {
      console.log("websocket connected to python");
      setMidiConnected(true);
       socketRef.current = socket;
       const midiAccess = await navigator.requestMIDIAccess(); 
    console.log("pooooop");
    for (let input of midiAccess.inputs.values()) {
        input.onmidimessage = (msg) => {
          const [status, data1, data2] = msg.data;
          //Filter out the connection noise

          if (status === 248) return;
          const timestamp = Date.now();

          const midiEvent = { status, data1, data2, timestamp };
          console.log(isRecording);
          if (isRecordingRef.current && socketRef.current?.readyState === WebSocket.OPEN) {
              console.log("Sending MIDI:", midiEvent);
              socketRef.current.send(JSON.stringify(midiEvent));
              midiEventsRef.current.push(midiEvent);
          }
        };
      }
    }
    socket.onerror = (error) => {
      console.log("error connecting:", error)
    } 
    
  };

  // Can later put in a filler image when we implement code to get cover image
  // UH id should be something real
 type TrackPair = {
  id: string;
  name: string;
  image: string;
  song?: Song;
};

const [trackPairs, setTrackPairs] = useState<TrackPair[]>([
  { id: crypto.randomUUID(), name: "", image: "beyonce.jpg" },
  { id: crypto.randomUUID(), name: "", image: "dragons.jpg" },
]);

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
            <Button
              variant="secondary"
              onClick={handleMIDIConnect}
              size="sm"

              className="mx-0 px-0"
            >
              ConnectMIDI
            </Button>
          </Flex>
          <Flex direction="column" gap="xs">
            <Text variant="h6" font="default">
              3. Hit record on Serato
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
            <Button
              variant="secondary"
              size="sm"
              disabled={!midiConnected}
              className={`transition-all duration-250 mx-0 ${midiConnected ? "bg-success opacity-50" : "bg-error opacity-30"} 
              ${!isRecording && midiConnected  ? "opacity-100" : ""}`}
              onClick={handleRecord}
            >
                {isRecording? "Stop Recording" : "Record"} 
            </Button>
            <Text variant="caption" weight="thin"> {isRecording? "Currently Recording..." : "Not Currently Recording..."}
              
            </Text>
        </Widget>
        <Flex height="stretch" width="stretch">
          <Flex direction="column" width="stretch">
            <Form className="w-full" onSubmit={handleSubmit}>
              <FormRow gap="md">
                <TextInput
                  label="Transition name"
                  className="flex-1"
                  required
                  value={transitionName}
                  onChange={(e) => setTransitionName(e.target.value)}
                />
                <FileInput
                  label="Audio"
                  accept="audio/*"
                  onChange={(e) => setAudioFile(e.target.files?.[0] ?? null)}
                  valueLabel={audioFile?.name}
                  buttonProps={{
                    variant: "secondary",
                    size: "sm",
                  }}
                />
              </FormRow>
                <Textarea label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              <Flex
                    direction={trackPairs.length > 2 ? "column" : "row"}
                    gap="sm"
                    justify={trackPairs.length > 2 ? "start" : "evenly"}
               >
                    {trackPairs.map((track, i) => (
                    <Flex key={track.id}  direction="column" gap="xs" className="w-full">
                        <FormRow>
                        <TrackSearchInput
                          label={`Track ${i + 1}`}
                          value={track.name}
                          onChange={(val) => nameChange(track.id, val)}
                          onSelect={(song) => {
                            setTrackPairs((prev) =>
                              prev.map((t) =>
                                t.id === track.id
                                  ? {
                                      ...t,
                                      name: `${song.title} - ${song.artist_name}`,
                                      image: song.album_cover_img_url,
                                      song
                                    }
                                  : t
                              )
                            );
                          }}
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
              <Button size="md" type="submit" disabled={!transitionName || !audioFile || trackPairs.some(t => !t.name)} className="bg-light">
                POST
              </Button>
            </Form>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

import { Flex } from "../../../components/layout/Flex";
import { SeekBar } from "../../../components/ui/SeekBar";
import { PlayerHeader } from "../../../components/app/showing-transition/components/PlayerHeader";
import { PlayerControls } from "../../../components/app/showing-transition/components/PlayerControls";
import { useRef, useState } from "react";
import {
  TrackInfo,
  type TrackInfoProps,
} from "../../../components/app/showing-transition/components/TrackInfo";

type ArtistInfo = {
  name: string;
  imageSrc: string;
};

type ShowingTransitionProps = {
  artists: ArtistInfo[];
  trackInfo: TrackInfoProps;
  audioSrc?: string;
};

export default function ShowingTransition({
  artists,
  trackInfo,
  audioSrc,
}: ShowingTransitionProps) {
  const fromArtist = artists[0];
  const toArtist = artists[artists.length - 1];
  const middleArtists = artists.slice(1, -1);
  if (!fromArtist || !toArtist) return null;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingSong, setIsPlayingSong] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  function togglePause() {
    const audio = audioRef.current;
    if(!audio) return;
    if(isPlayingSong) {
      audio.pause();
      setIsPlayingSong(false);
    } else {
      audio.play();
      setIsPlayingSong(true);
    }
  }
  function skipBy(seconds: number) {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = Math.max(
      0,
      Math.min(audio.currentTime + seconds, audio.duration || 0)
    );
  }

  function handleSeek(time: number) {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = time;
    setCurrentTime(time);
  }


  return (
    <Flex
      direction="column"
      height="stretch"
      className="w-full min-w-[500px] gap-3 overflow-y-scroll h-fit border-b-[0.5px] border-solid border-b-[#212732]"
    >
      <audio
        ref={audioRef}
        src={audioSrc}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onEnded={() => setIsPlayingSong(false)}
      />
      <PlayerHeader
        fromArtist={fromArtist}
        toArtist={toArtist}
        middleArtists={middleArtists}
      />
      <SeekBar className="mt-2"
        currentTime={currentTime}
        duration={duration}
        onSeek={handleSeek}
      />
      <PlayerControls
        isPlaying={isPlayingSong}
        onPlayPause={togglePause}
        onRewind5={() => skipBy(-5)}
        onRewind10={() => skipBy(-10)}
        onSkip5={() => skipBy(5)}
        onSkip10={() => skipBy(10)}
      />
      <TrackInfo {...trackInfo} />
    </Flex>
  );
}

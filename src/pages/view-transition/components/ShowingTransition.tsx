import { Flex } from "../../../components/layout/Flex";
import { SeekBar } from "../../../components/ui/SeekBar";
import { PlayerHeader } from "../../../components/app/showing-transition/components/PlayerHeader";
import { PlayerControls } from "../../../components/app/showing-transition/components/PlayerControls";

import {
  TrackInfo,
  type TrackInfoProps,
} from "../../../components/app/showing-transition/components/TrackInfo";

type ArtistInfo = {
  name: string;
  imageSrc: string;
};

type ShowingTransitionProps = {
  fromArtist: ArtistInfo;
  toArtist: ArtistInfo;
  trackInfo: TrackInfoProps;
  isPlaying?: boolean;
};

export default function ShowingTransition({
  fromArtist,
  toArtist,
  trackInfo,
  isPlaying,
}: ShowingTransitionProps) {
  return (
    <Flex
      direction="column"
      height="stretch"
      className="w-full min-w-[500px] gap-3 overflow-y-scroll h-fit border-b-[0.5px] border-solid border-b-[#212732]"
    >
      <PlayerHeader fromArtist={fromArtist} toArtist={toArtist} />
      <SeekBar className="mt-2" />
      <PlayerControls isPlaying={isPlaying} />
      <TrackInfo {...trackInfo} />
    </Flex>
  );
}

import { Flex } from "../../../layout/Flex";
import Button from "../../../ui/Button";
import { PlayIcon } from "../../../../icons/PlayIcon";
import { PauseIcon } from "../../../../icons/PauseIcon";
import { Rewind5Icon } from "../../../../icons/Rewind5Icon";
import { Rewind10Icon } from "../../../../icons/Rewind10Icon";
import { Skip10Icon } from "../../../../icons/Skip10Icon";
import { Skip5Icon } from "../../../../icons/Skip5Icon";

type PlayerControlsProps = {
  isPlaying?: boolean;
  onPlayPause?: () => void;
  onRewind5?: () => void;
  onRewind10?: () => void;
  onSkip5?: () => void;
  onSkip10?: () => void;
};

export function PlayerControls({
  isPlaying = false,
  onPlayPause,
  onRewind5,
  onRewind10,
  onSkip5,
  onSkip10,
}: PlayerControlsProps) {
  return (
    <Flex justify="center" gap="lg" align="center">
      <Button variant="secondary" rounded="circle" onClick={onRewind5}>
        <Rewind5Icon size={12} />
      </Button>
      <Button variant="secondary" rounded="circle" onClick={onRewind10}>
        <Rewind10Icon size={16} />
      </Button>
      <Button variant="secondary" rounded="circle" onClick={onPlayPause}>
        {isPlaying ? <PauseIcon size={24} /> : <PlayIcon size={24} />}
      </Button>
      <Button variant="secondary" rounded="circle" onClick={onSkip10}>
        <Skip10Icon size={16} />
      </Button>
      <Button variant="secondary" rounded="circle" onClick={onSkip5}>
        <Skip5Icon size={12} />
      </Button>
    </Flex>
  );
}

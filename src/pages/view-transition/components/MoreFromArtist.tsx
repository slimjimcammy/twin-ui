import { Flex } from "../../../components/layout/Flex";
import { Text } from "../../../components/ui/Text";

import {
  SongTransitionHeaderList,
  type TransitionItem,
} from "./SongTransitionHeaderList";

type MoreFromArtistProps = {
  title: string;
  transitions: TransitionItem[];
};

export function MoreFromArtist({ title, transitions }: MoreFromArtistProps) {
  return (
    <Flex
      direction="column"
      height="stretch"
      padding="md"
      className="w-[50%] min-w-[400px] h-full"
      gap="md"
    >
      <Text variant="h4" weight="bold">
        {title}
      </Text>
      <SongTransitionHeaderList transitions={transitions} />
    </Flex>
  );
}

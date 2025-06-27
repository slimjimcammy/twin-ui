import { Flex } from "../../../components/layout/Flex";
import Widget from "../../../components/layout/Widget";
import Image from "../../../components/ui/Image";
import { Text } from "../../../components/ui/Text";
import { HeartIcon } from "../../../icons/HeartIcon";

export type TransitionItem = {
  from: {
    name: string;
    imageSrc: string;
  };
  to: {
    name: string;
    imageSrc: string;
  };
  likes: number;
};

type SongTransitionHeaderListProps = {
  transitions: TransitionItem[];
};

export function SongTransitionHeaderList({
  transitions,
}: SongTransitionHeaderListProps) {
  return (
    <Flex
      direction="column"
      width="stretch"
      gap="md"
      className="overflow-y-auto"
    >
      {transitions.map((item, idx) => (
        <Flex direction="row" align="center" justify="between" key={idx}>
          <Flex direction="row" gap="sm" align="center" className="min-w-0">
            <Widget className="w-[30px] h-[30px] overflow-hidden flex-shrink-0">
              <Image
                src={item.from.imageSrc}
                alt={item.from.name}
                width="stretch"
                height="stretch"
              />
            </Widget>
            <Widget className="w-[30px] h-[30px] overflow-hidden flex-shrink-0">
              <Image
                src={item.to.imageSrc}
                alt={item.to.name}
                width="stretch"
                height="stretch"
              />
            </Widget>
            <Text variant="caption" weight="light" className="truncate">
              {item.from.name} song to
              <Text variant="span2" color="dimmed">
                {" "}
                {item.to.name}
              </Text>
            </Text>
          </Flex>

          <Flex direction="row" align="center" gap="sm">
            <HeartIcon color="#F5F6FA" size={16} />
            <Text variant="caption">{item.likes}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

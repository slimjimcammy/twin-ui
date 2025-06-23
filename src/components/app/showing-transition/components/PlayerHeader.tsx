import { useExtractColors } from "react-extract-colors";
import { Flex } from "../../../layout/Flex";
import Widget from "../../../layout/Widget";
import Image from "../../../ui/Image";
import { Text } from "../../../ui/Text";

type ArtistInfoProps = {
  name: string;
  imageSrc: string;
};

type PlayerHeaderProps = {
  fromArtist: ArtistInfoProps;
  toArtist: ArtistInfoProps;
};

const DARK_BACKGROUND_COLOR = "#05070A";

export function PlayerHeader({ fromArtist, toArtist }: PlayerHeaderProps) {
  const { dominantColor: fromColor } = useExtractColors(fromArtist.imageSrc, {
    format: "hex",
  });
  const { dominantColor: toColor } = useExtractColors(toArtist.imageSrc, {
    format: "hex",
  });

  const gradientBackground = {
    backgroundImage: `radial-gradient(ellipse at top left, ${
      fromColor || "transparent"
    } 0%, transparent 60%),
                      radial-gradient(ellipse at top right, ${
                        toColor || "transparent"
                      } 0%, transparent 60%)`,
    backgroundColor: DARK_BACKGROUND_COLOR,
  };

  return (
    <div style={gradientBackground} className="p-4 rounded-t-lg">
      <Flex direction="row" justify="between">
        <Flex direction="row" gap="lg">
          <Widget className="overflow-hidden">
            <Image
              src={fromArtist.imageSrc}
              alt={fromArtist.name}
              className="w-[100px]"
            />
          </Widget>
          <Flex direction="column" justify="center">
            <Text variant="h6">{fromArtist.name}</Text>
            <Text variant="p" weight="thin">
              Artist
            </Text>
          </Flex>
        </Flex>
        <Flex direction="row" gap="lg">
          <Flex direction="column" justify="center">
            <Text variant="h6" align="right">
              {toArtist.name}
            </Text>
            <Text variant="p" weight="thin" align="right">
              Artist
            </Text>
          </Flex>
          <Widget className="overflow-hidden">
            <Image
              src={toArtist.imageSrc}
              alt={toArtist.name}
              className="w-[100px]"
            />
          </Widget>
        </Flex>
      </Flex>
    </div>
  );
}

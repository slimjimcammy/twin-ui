import { Flex } from "../../../components/layout/Flex";
import Image from "../../../components/ui/Image";
import { Text } from "../../../components/ui/Text";
import Button from "../../../components/ui/Button";

type ProfileCardProps = {
  name: string;
  avatarSrc: string;
  followerCount: string;
  onFollow?: () => void;
};

export function ProfileCard({
  name,
  avatarSrc,
  followerCount,
}: ProfileCardProps) {
  return (
    <Flex
      direction="column"
      justify="start"
      align="center"
      gap="sm"
      className="p-4 w-[200px]"
    >
      <Image
        src={avatarSrc}
        alt="Profile icon"
        className="rounded-full w-[108px] h-[108px]"
      />
      <Text variant="p" weight="bold" align="center">
        {name}
      </Text>
      <Text variant="pSm" weight="bold" align="center" color="dimmed">
        {followerCount}
      </Text>
      <Button variant="secondary" size="sm" className="mt-2">
        Follow
      </Button>
    </Flex>
  );
}

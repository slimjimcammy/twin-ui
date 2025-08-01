import { Flex } from "../../../layout/Flex";
import { Text } from "../../../ui/Text";

export function TransitionMeta({
  userAvatarSrc,
  userName,
  description,
}: {
  userAvatarSrc: string;
  userName: string;
  description: string;
}) {
  return (
    <Flex direction="column" justify="between" className="pb-4 ps-4" gap="md">
      <Flex direction="row" gap="md" align="center">
        <img
          src={userAvatarSrc}
          alt={userName}
          className="rounded-full"
          style={{ width: 20, height: 20 }}
        />
        <Text
          variant="caption"
          color="default"
          font="header"
          className="overflow-hidden whitespace-nowrap text-ellipsis pr-2"
        >
          {userName}
        </Text>
      </Flex>
      <Text
        variant="caption"
        color="default"
        font="default"
        weight="thin"
        className="line-clamp-2 h-[32px]"
      >
        {description}
      </Text>
    </Flex>
  );
}

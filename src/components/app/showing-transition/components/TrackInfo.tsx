import { Flex } from "../../../layout/Flex";
import Image from "../../../ui/Image";
import { Text } from "../../../ui/Text";
import ButtonConsole from "../../button-console/ButtonConsole";

type SocialCounts = {
  likes: number;
  comments: number;
  shares: number;
};

export type TrackInfoProps = {
  user: {
    name: string;
    avatarSrc: string;
  };
  socials: SocialCounts;
  description: string;
};

export function TrackInfo({ user, socials, description }: TrackInfoProps) {
  return (
    <Flex direction="column" gap="lg" className="px-4 pb-4">
      <Flex direction="row" align="center" justify="between">
        <Flex direction="row" align="center" gap="md">
          <Image
            src={user.avatarSrc}
            alt="Profile picture"
            className="w-[24px] h-[24px] rounded-full"
          />
          <Text variant="h6">{user.name}</Text>
        </Flex>
        <ButtonConsole
          variant="inline"
          orientation="horizontal"
          buttons={[
            {
              children: (
                <Flex direction="row" gap="sm" align="center">
                  <img
                    src="/heart.svg"
                    alt="Like"
                    className="brightness-0 invert"
                    style={{ width: 24, height: 24 }}
                  />
                  <Text variant="p" color="default" font="default">
                    {socials.likes}
                  </Text>
                </Flex>
              ),
              variant: "tertiary",
            },
            {
              children: (
                <Flex direction="row" gap="sm" align="center">
                  <img
                    src="/comment.svg"
                    alt="Comment"
                    className="brightness-0 invert"
                    style={{ width: 24, height: 24 }}
                  />
                  <Text variant="p" color="default" font="default">
                    {socials.comments}
                  </Text>
                </Flex>
              ),
              variant: "tertiary",
            },
            {
              children: (
                <Flex direction="row" gap="sm" align="center">
                  <img
                    src="/share.svg"
                    alt="Share"
                    className="brightness-0 invert"
                    style={{ width: 24, height: 24 }}
                  />
                  <Text variant="p" color="default" font="default">
                    {socials.shares}
                  </Text>
                </Flex>
              ),
              variant: "tertiary",
            },
          ]}
        />
      </Flex>
      <Text
        variant="pSm"
        weight="light"
        color="dimmed"
        className="line-clamp-5"
      >
        {description}
      </Text>
    </Flex>
  );
}

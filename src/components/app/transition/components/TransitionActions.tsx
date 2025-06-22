import { Flex } from "../../../layout/Flex";
import { Text } from "../../../ui/Text";
import ButtonConsole from "../../button-console/ButtonConsole";

export function TransitionActions({
  likes,
  comments,
  shares,
}: {
  likes: number;
  comments: number;
  shares: number;
}) {
  return (
    <Flex direction="row" gap="sm" justify="end" className="p-4 pt-0">
      <ButtonConsole
        variant="alone"
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
                  {likes}
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
                  {comments}
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
                  {shares}
                </Text>
              </Flex>
            ),
            variant: "tertiary",
          },
        ]}
      />
    </Flex>
  );
}

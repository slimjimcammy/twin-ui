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
                  style={{ width: 16, height: 16 }}
                />
                <Text variant="strong" color="default" font="header">
                  {likes}
                </Text>
              </Flex>
            ),
            variant: "primary",
            size: "sm",
          },
          {
            children: (
              <Flex direction="row" gap="sm" align="center">
                <img
                  src="/comment.svg"
                  alt="Comment"
                  className="brightness-0 invert"
                  style={{ width: 16, height: 16 }}
                />
                <Text variant="strong" color="default" font="header">
                  {comments}
                </Text>
              </Flex>
            ),
            variant: "primary",
            size: "sm",
          },
          {
            children: (
              <Flex direction="row" gap="sm" align="center">
                <img
                  src="/share.svg"
                  alt="Share"
                  className="brightness-0 invert"
                  style={{ width: 16, height: 16 }}
                />
                <Text variant="strong" color="default" font="header">
                  {shares}
                </Text>
              </Flex>
            ),
            variant: "primary",
            size: "sm",
          },
        ]}
      />
    </Flex>
  );
}

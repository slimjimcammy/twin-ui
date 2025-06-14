import { Container } from "../components/layout/Container";
import { Text } from "../components/ui/Text";
import { Grid } from "../components/layout/Grid";
import Widget from "../components/layout/Widget";
import Image from "../components/ui/Image";
import { Flex } from "../components/layout/Flex";

export default function ForYou() {
  return (
    <Container className="mt-12">
      <Text variant="h1" color="default" font="heading">
        Explore
      </Text>
      <Grid cols="three" spacing="md" className="mt-12">
        <Widget className="h-[500px] overflow-hidden" glow="light" padding="md">
          <Flex direction="row" width="stretch" justify="between" gap="md">
            <Widget
              className="w-full aspect-square relative overflow-hidden"
              padding="sm"
            >
              <Image
                src="/beyonce.jpg"
                alt="Album Cover"
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />
              <Widget
                padding="sm"
                className="absolute bottom-sm left-sm w-fit h-fit bg-[#05070A] z-10"
                glow="light"
              >
                <Text
                  variant="pSm"
                  color="default"
                  font="heading"
                  align="left"
                  width="fit"
                >
                  Beyonce Song
                </Text>
              </Widget>
            </Widget>
            <Widget
              className="w-full aspect-square relative overflow-hidden"
              padding="sm"
            >
              <Image
                src="/dragons.jpg"
                alt="Album Cover"
                className="absolute inset-0 w-full h-full object-cover opacity-10"
              />
              <Widget
                padding="sm"
                className="absolute bottom-sm left-sm w-fit h-fit bg-[#05070A] z-10"
                glow="light"
              >
                <Text
                  variant="pSm"
                  color="default"
                  font="heading"
                  align="left"
                  width="fit"
                >
                  Bad Liar
                </Text>
              </Widget>
            </Widget>
          </Flex>
        </Widget>
        <Widget className="h-[500px]" glow="light">
          <Text variant="h2" color="default" font="heading">
            For You
          </Text>
        </Widget>
        <Widget className="h-[500px]" glow="light">
          <Text variant="h2" color="default" font="heading">
            For You
          </Text>
        </Widget>
      </Grid>
    </Container>
  );
}

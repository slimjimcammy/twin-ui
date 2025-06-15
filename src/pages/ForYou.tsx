import { Container } from "../components/layout/Container";
import { Text } from "../components/ui/Text";
import { Grid } from "../components/layout/Grid";
import Widget from "../components/layout/Widget";
import Image from "../components/ui/Image";
import { Flex } from "../components/layout/Flex";
import Button from "../components/ui/Button";
import ButtonConsole from "../components/app/button-console/ButtonConsole";
import Transition from "../components/app/transition/Tranisiton";

export default function ForYou() {
  return (
    <Container className="mt-12">
      <Text variant="h1" color="default" font="heading">
        Explore
      </Text>
      <Widget padding="lg">
        {/* <Flex direction="column" gap="md" className=""></Flex> */}
        <Transition />
      </Widget>
    </Container>
  );
}

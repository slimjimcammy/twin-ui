import Widget from "../../layout/Widget";

import { Flex } from "../../layout/Flex";
import { Text } from "../../ui/Text";
import Image from "../../ui/Image";
import { Icon } from "../../ui/Icon";
import ButtonConsole from "../button-console/ButtonConsole";
import Button from "../../ui/Button";

export default function Transition() {
  return (
    <Widget className="w-1/3 group">
      <Flex direction="column" className="relative">
        <Flex direction="row">
          <Widget className="w-1/2 overflow-hidden rounded-r-none relative border-none rounded-b-none">
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] from-15% via-[#05070a]/40 via-45% to-transparent z-10" />
            <Image
              src="/beyonce.jpg"
              alt="Transition"
              className="object-cover transition-opacity duration-200 opacity-65 group-hover:opacity-100"
            />
            <Text
              variant="h4"
              color="default"
              font="heading"
              className="absolute bottom-4 left-4 z-20"
            >
              Beyonce
            </Text>
          </Widget>
          <Widget className="w-1/2 overflow-hidden rounded-l-none relative border-none rounded-b-none">
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] from-15% via-[#05070a]/40 via-45% to-transparent z-10" />
            <Image
              src="/dragons.jpg"
              alt="Transition"
              className="object-cover transition-opacity duration-200 opacity-65 group-hover:opacity-100"
            />
            <Text
              variant="h4"
              color="default"
              font="heading"
              align="right"
              className="absolute bottom-4 right-4 z-20"
            >
              Dragons
            </Text>
          </Widget>
        </Flex>
        <Flex
          direction="column"
          justify="between"
          className="pb-4 ps-4"
          gap="md"
        >
          <Flex direction="row" gap="lg">
            <Icon
              src="/beyonce.jpg"
              alt="Beyonce"
              className="rounded-full"
              size="lg"
            />
            <Text variant="p" color="default" font="heading">
              minski
            </Text>
          </Flex>
          <Text
            variant="p"
            color="default"
            font="default"
            weight="thin"
            className="line-clamp-2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quisquam, quos.
          </Text>
        </Flex>
        <Flex direction="row" gap="sm" justify="end" className="p-4 pt-0">
          <ButtonConsole
            variant="alone"
            buttons={[
              {
                children: (
                  <Flex direction="row" gap="sm" align="center">
                    <Icon
                      src="/heart.svg"
                      alt="Like"
                      className="brightness-0 invert"
                    />
                    <Text variant="p" color="default" font="default">
                      40
                    </Text>
                  </Flex>
                ),
                variant: "tertiary",
              },
              {
                children: (
                  <Flex direction="row" gap="sm" align="center">
                    <Icon
                      src="/comment.svg"
                      alt="Comment"
                      className="brightness-0 invert"
                    />
                    <Text variant="p" color="default" font="default">
                      2
                    </Text>
                  </Flex>
                ),
                variant: "tertiary",
              },
              {
                children: (
                  <Flex direction="row" gap="sm" align="center">
                    <Icon
                      src="/share.svg"
                      alt="Share"
                      className="brightness-0 invert"
                    />
                    <Text variant="p" color="default" font="default">
                      1
                    </Text>
                  </Flex>
                ),
                variant: "tertiary",
              },
            ]}
          />
        </Flex>
      </Flex>
    </Widget>
  );
}

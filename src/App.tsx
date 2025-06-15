import ForYou from "./pages/ForYou";
import { Page } from "./components/layout/Page";
import HorizontalNav from "./components/app/horizontal-nav/HorizontalNav";
import { Text } from "./components/ui/Text";
import ButtonConsole from "./components/app/button-console/ButtonConsole";
import { Flex } from "./components/layout/Flex";
import { Icon } from "./components/ui/Icon";

export default function App() {
  return (
    <Page className="bg-[#05070A] max-w-[1440px] mx-auto">
      <HorizontalNav
        centerJustify="start"
        slotLeft={
          <Text variant="h4" color="default" font="heading">
            TWIN
          </Text>
        }
        slotCenter={
          <ButtonConsole
            variant="inline"
            buttons={[
              {
                children: (
                  <Flex direction="row" gap="sm" align="center">
                    <Icon src="/vite.svg" alt="Logo" />
                    <Text variant="p" color="default" font="default">
                      For You
                    </Text>
                  </Flex>
                ),
                variant: "tertiary",
              },
              {
                children: (
                  <Text variant="p" color="default" font="default">
                    Forum
                  </Text>
                ),
                variant: "tertiary",
              },
              {
                children: (
                  <Text variant="p" color="default" font="default">
                    Record
                  </Text>
                ),
                variant: "tertiary",
              },
            ]}
          />
        }
        slotRight={
          <ButtonConsole
            variant="inline"
            buttons={[
              {
                children: (
                  <Text variant="p" color="default" font="default">
                    Sign In
                  </Text>
                ),
                variant: "tertiary",
              },
              {
                children: (
                  <Text variant="p" color="dark" font="default">
                    Sign Up
                  </Text>
                ),
                variant: "secondary",
              },
            ]}
          />
        }
      />
      <ForYou />
    </Page>
  );
}

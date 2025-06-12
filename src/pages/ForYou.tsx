import { VerticalNav } from "../components/app/vertical-nav/VerticalNav";
import { Page } from "../components/layout/Page";
import Widget from "../components/layout/Widget";
import { Icon } from "../components/ui/Icon";
import { Text } from "../components/ui/Text";
import ButtonConsole from "../components/app/button-console/ButtonConsole";

export default function ForYou() {
  return (
    <Page className="bg-black" padding="xs">
      <ButtonConsole
        variant="fit"
        width="fit"
        className="border-white border-[0.5px] border-solid"
      >
        <ButtonConsole.Item>
          <Icon src="/vite.svg" alt="Logo" />
        </ButtonConsole.Item>
        <ButtonConsole.Item>
          <Icon src="/vite.svg" alt="Logo" />
        </ButtonConsole.Item>
        <ButtonConsole.Item>
          <Icon src="/vite.svg" alt="Logo" />
        </ButtonConsole.Item>
      </ButtonConsole>
      <Widget className="rounded-lg w-full h-full p-2 border-white border-[0.5px] border-solid">
        <VerticalNav className="bg-white" variant="fit" height="stretch">
          {/* <VerticalNav.Header size="default">Header</VerticalNav.Header> */}
          <VerticalNav.Item>
            <Icon src="/vite.svg" alt="Logo" />
            {/* <Text variant="p" color="default" font="default">
              Item 1
            </Text> */}
          </VerticalNav.Item>
          <VerticalNav.Item>
            <Icon src="/vite.svg" alt="Logo" />
            {/* <Text variant="p" color="default" font="default">
              Item 1
            </Text> */}
          </VerticalNav.Item>
          <VerticalNav.Item>
            <Icon src="/vite.svg" alt="Logo" />
            {/* <Text variant="p" color="default" font="default">
              Item 2
            </Text> */}
          </VerticalNav.Item>
          <VerticalNav.Footer>
            <Icon src="/vite.svg" alt="Logo" />
          </VerticalNav.Footer>
        </VerticalNav>
      </Widget>
    </Page>
  );
}

import { Page } from "./components/layout/Page";
import HorizontalNav from "./components/app/horizontal-nav/HorizontalNav";
import ButtonConsole from "./components/app/button-console/ButtonConsole";
import { Text } from "./components/ui/Text";
import { Flex } from "./components/layout/Flex";
import { VerticalNav } from "./components/app/vertical-nav/VerticalNav";
import { Container } from "./components/layout/Container";
import { ExploreIcon } from "./icons/ExploreIcon";
import { FollowIcon } from "./icons/FollowIcon";
import { ForumIcon } from "./icons/ForumIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import { RecordIcon } from "./icons/RecordIcon";
import { SettingsIcon } from "./icons/SettingsIcon";

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <Page className="bg-[#05070A] max-w-[1440px] mx-auto flex flex-col gap-4">
      <HorizontalNav
        centerJustify="start"
        slotLeft={
          <Text variant="h4" color="default" font="heading">
            TWIN
          </Text>
        }
        slotCenter={<></>}
        slotRight={
          <ButtonConsole
            variant="inline"
            orientation="horizontal"
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
      <Flex direction="row" height="stretch" className="py-2 h-full min-h-0">
        <VerticalNav
          expanded={false}
          groups={[
            {
              label: "EXPLORE",
              actions: [
                {
                  icon: <ExploreIcon color="#F5F6FA" />,
                  label: "For You",
                  variant: "tertiary",
                },
                {
                  icon: <FollowIcon color="#F5F6FA" />,
                  label: "Following",
                  variant: "tertiary",
                },
                {
                  icon: <ForumIcon color="#F5F6FA" />,
                  label: "Forum",
                  variant: "tertiary",
                },
              ],
            },
            {
              label: "ACCOUNT",
              actions: [
                {
                  icon: <ProfileIcon color="#F5F6FA" />,
                  label: "Profile",
                  variant: "tertiary",
                },
                {
                  icon: <RecordIcon color="#F5F6FA" />,
                  label: "Record",
                  variant: "tertiary",
                },
                {
                  icon: <SettingsIcon color="#F5F6FA" />,
                  label: "Settings",
                  variant: "tertiary",
                },
              ],
            },
          ]}
        />
        <div className="flex-1 h-full min-h-0">{children}</div>
      </Flex>
    </Page>
  );
}

import HorizontalNav from "./components/app/horizontal-nav/HorizontalNav";
import ButtonConsole from "./components/app/button-console/ButtonConsole";
import { Text } from "./components/ui/Text";
import { Flex } from "./components/layout/Flex";
import { VerticalNav } from "./components/app/vertical-nav/VerticalNav";
import { ExploreIcon } from "./icons/ExploreIcon";
import { FollowIcon } from "./icons/FollowIcon";
import { ForumIcon } from "./icons/ForumIcon";
import { ProfileIcon } from "./icons/ProfileIcon";
import { RecordIcon } from "./icons/RecordIcon";
import { SettingsIcon } from "./icons/SettingsIcon";
import { useNavigate } from "react-router-dom";
interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const navigate = useNavigate();
  return (
    <Flex
      direction="column"
      padding="md"
      height="screen"
      width="screen"
      gap="sm"
      className="max-w-[1440px] mx-auto overflow-x-hidden"
      justify="between"
    >
      <HorizontalNav
        centerJustify="start"
        slotLeft={
          <Text variant="h4" color="default" font="header">
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
                  <Text variant="caption" color="default" font="default">
                    Sign In
                  </Text>
                ),
                variant: "primary",
                size: "sm",
              },
              {
                children: (
                  <Text variant="caption" color="dark" font="default">
                    Sign Up
                  </Text>
                ),
                variant: "secondary",
                size: "sm",
              },
            ]}
          />
        }
      />
      <Flex
        direction="row"
        height="stretch"
        padding="sm"
        className="h-full min-h-0"
      >
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
                  onClick: () => navigate("/for-you")
                },
                {
                  icon: <FollowIcon color="#F5F6FA" />,
                  label: "Following",
                  variant: "tertiary",
                  disabled: true,
                },
                {
                  icon: <ForumIcon color="#F5F6FA" />,
                  label: "Forum",
                  variant: "tertiary",
                  disabled: true,
                },
              ],
            },
            {
              label: "ACCOUNT",
              actions: [
                {
                  icon: <RecordIcon color="#F5F6FA" />,
                  label: "Record",
                  variant: "tertiary",
                  onClick: () => navigate("/record"),
                },
                {
                  icon: <SettingsIcon color="#F5F6FA" />,
                  label: "Settings",
                  variant: "tertiary",
                  disabled: true,
                },
                {
                  icon: <ProfileIcon color="#F5F6FA" />,
                  label: "Profile",
                  variant: "tertiary",
                },
              ],
            },
          ]}
        />
        {children}
      </Flex>
    </Flex>
  );
}

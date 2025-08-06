import { Text } from "../components/ui/Text";
import { Grid } from "../components/layout/Grid";
import Widget from "../components/layout/Widget";
import { Flex } from "../components/layout/Flex";
import Transition from "../components/app/transition/Transition";
import TextInput from "../components/ui/TextInput";
import { RightArrowIcon } from "../icons/RightArrowIcon";

export default function ForYou() {
  return (
    <Flex
      direction="column"
      gap="md"
      className="pl-4 h-full min-h-0"
      height="stretch"
      width="stretch"
    >
      <Flex direction="row" align="center" justify="between">
        <Text
          variant="h1"
          color="default"
          font="header"
          className="hidden sm:block"
        >
          Explore
        </Text>
        <Flex direction="row" align="center" gap="sm">
          <TextInput
            label="Base"
            required
            placeholder="Search..."
            padding="sm"
          />
          <div className="mt-lg">
            <RightArrowIcon size={20} color="#F5F6FA" />
          </div>
          <TextInput
            label="Twin"
            required
            placeholder="Search..."
            padding="sm"
          />
        </Flex>
      </Flex>

      <Widget height="stretch" className="flex-1 min-h-0" padding="md">
        <Grid
          cols="three"
          spacing="md"
          className="flex-1 min-h-0 overflow-y-auto"
        >
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Sorry" },
              { album_cover_img_url: "/dragons.jpg", title: "Zero" },
            ]}
            userAvatarSrc="/user.png"
            userName="minski"
            description="Creative transition between my two favorite songs."
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/gkmc.jpeg", title: "Poetic Justice" },
              { album_cover_img_url: "/Ready_To_Die.jpg", title: "Big Poppa" },
            ]}
            userAvatarSrc="/user.png"
            userName="dragonfan"
            description="This transition is wild!"
            likes={12}
            comments={5}
            shares={3}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/hitz.jpg", title: "HITZ 4 THE HOOD" },
              { album_cover_img_url: "/yosemite.jpeg", title: "Yosemite" },
            ]}
            userAvatarSrc="/user.png"
            userName="queenb"
            description="Going UKG this time"
            likes={100}
            comments={20}
            shares={10}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/5hours.jpg", title: "SINGLE LADIES (5HOURS HOUSE REMIX)" },
              { album_cover_img_url: "/fties.jpg", title: "Family Ties (GUDFELLA Edit)" },
            ]}
            userAvatarSrc="/user.png"
            userName="dragonmaster"
            description="Some unofficial remixes"
            likes={55}
            comments={8}
            shares={4}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/chanel.jpeg", title: "Chanel (Shankz Remix)" },
              { album_cover_img_url: "/acraze.jpg", title: "A Milli ACRAZE remix" },
            ]}
            userAvatarSrc="/user.png"
            userName="minski"
            description="House remixes are so good"
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Formation" },
              { album_cover_img_url: "/dragons.jpg", title: "Bad Liar" },
            ]}
            userAvatarSrc="/user.png"
            userName="dragonfan"
            description="These two songs go so well together"
            likes={12}
            comments={5}
            shares={3}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/notthesame.jpg", title: "Guess We're Not the Same" },
              { album_cover_img_url: "/animals.png", title: "Animals" },
            ]}
            userAvatarSrc="/user.png"
            userName="technouser"
            description="Mixing UKG with Progressive house is a fun challenge!"
            likes={100}
            comments={20}
            shares={10}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/borderline.jpg", title: "BORDERLINE (AVELLO REMIX)" },
              { album_cover_img_url: "/skrillex.jpeg", title: "Butterflies" },
            ]}
            userAvatarSrc="/user.png"
            userName="dragonmaster"
            description="Mixing unreleased with released bangers"
            likes={55}
            comments={8}
            shares={4}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/otis.jpg", title: "otis dub" },
              { album_cover_img_url: "/littlecloser.jpg", title: "A Little Closer" },
            ]}
            userAvatarSrc="/user.png"
            userName="minski"
            description="The SoundCloud only song is so fire!"
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Sand Castles" },
              { album_cover_img_url: "/dragons.jpg", title: "Stuck" },
            ]}
            userAvatarSrc="/user.png"
            userName="dragonfan"
            description="Had to do another transition between my two favorite artists!"
            likes={12}
            comments={5}
            shares={3}
          />
        </Grid>
      </Widget>
    </Flex>
  );
}

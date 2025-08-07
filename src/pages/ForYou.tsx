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
          postID={1}
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Sorry", RealName: "Beyonce" },
              { album_cover_img_url: "/dragons.jpg", title: "Zero", RealName: "Imagine Dragons"},
            ]}
            userAvatarSrc="/user.png"
            userName="minski"
            description="Creative transition between my two favorite songs."
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
          postID={2}
            songs={[
              { album_cover_img_url: "/gkmc.jpeg", title: "Poetic Justice", RealName: "Kendrick Lamar"},
              { album_cover_img_url: "/Ready_To_Die.jpg", title: "Big Poppa", RealName: "Notorious B.I.G."  },
            ]}
            userAvatarSrc="/user.png"
            userName="dragonfan"
            description="This transition is wild!"
            likes={12}
            comments={5}
            shares={3}
          />
          <Transition
          postID={3}
            songs={[
              { album_cover_img_url: "/hitz.jpg", title: "HITZ 4 THE HOOD", RealName: "Charlie Shell"  },
              { album_cover_img_url: "/yosemite.jpeg", title: "Yosemite", RealName: "Interplanetary Criminal"  },
            ]}
            userAvatarSrc="/user.png"
            userName="queenb"
            description="Going UKG this time"
            likes={100}
            comments={20}
            shares={10}
          />
          <Transition
          postID={4}
            songs={[
              { album_cover_img_url: "/5hours.jpg", title: "SINGLE LADIES (5HOURS HOUSE REMIX)" , RealName: "5hours" },
              { album_cover_img_url: "/fties.jpg", title: "Family Ties (GUDFELLA Edit)", RealName: "Gudfella" },
            ]}
            userAvatarSrc="/user.png"
            userName="dragonmaster"
            description="Some unofficial remixes"
            likes={55}
            comments={8}
            shares={4}
          />
          <Transition
          postID={5}
            songs={[
              { album_cover_img_url: "/chanel.jpeg", title: "Chanel (Shankz Remix)", RealName: "Shankz"  },
              { album_cover_img_url: "/acraze.jpg", title: "A Milli ACRAZE remix", RealName: "Acraze"  },
            ]}
            userAvatarSrc="/user.png"
            userName="minski"
            description="House remixes are so good"
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
          postID={6}
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Formation", RealName: "Beyonce"  },
              { album_cover_img_url: "/dragons.jpg", title: "Bad Liar", RealName: "Imagine Dragons"  },
            ]}
            userAvatarSrc="/user.png"
            userName="dragonfan"
            description="These two songs go so well together"
            likes={12}
            comments={5}
            shares={3}
          />
          <Transition
          postID={7}
            songs={[
              { album_cover_img_url: "/notthesame.jpg", title: "Guess We're Not the Same", RealName: "Sammy Virji"  },
              { album_cover_img_url: "/animals.png", title: "Animals", RealName: "Martin Garrix"  },
            ]}
            userAvatarSrc="/user.png"
            userName="technouser"
            description="Mixing UKG with Progressive house is a fun challenge!"
            likes={100}
            comments={20}
            shares={10}
          />
          <Transition
          postID={8}
            songs={[
              { album_cover_img_url: "/borderline.jpg", title: "BORDERLINE (AVELLO REMIX)", RealName: "Avello"  },
              { album_cover_img_url: "/skrillex.jpeg", title: "Butterflies", RealName: "Skrillex"  },
            ]}
            userAvatarSrc="/user.png"
            userName="dragonmaster"
            description="Mixing unreleased with released bangers"
            likes={55}
            comments={8}
            shares={4}
          />
          <Transition
          postID={9}
            songs={[
              { album_cover_img_url: "/otis.jpg", title: "otis dub", RealName: "Oppidan"  },
              { album_cover_img_url: "/littlecloser.jpg", title: "A Little Closer", RealName: "Diffrent"  },
            ]}
            userAvatarSrc="/user.png"
            userName="minski"
            description="The SoundCloud only song is so fire!"
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
          postID={10}
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Sand Castles", RealName: "Beyonce"  },
              { album_cover_img_url: "/dragons.jpg", title: "Stuck", RealName: "Imagine Dragons"  },
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

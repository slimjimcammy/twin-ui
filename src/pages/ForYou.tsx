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
              { album_cover_img_url: "/beyonce.jpg", title: "Beyonce adoiuhawiof owa wao fawhi" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },  
            ]}
            userAvatarSrc="/beyonce.jpg"
            userName="minski"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. oiahoifha owoi aoao oawhdio aua iiua hiu diaiu iua iuw iu"
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Beyonce adoiuhawiof owa wao fawhi" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
            ]}
            userAvatarSrc="/dragons.jpg"
            userName="dragonfan"
            description="Another description for a different transition."
            likes={12}
            comments={5}
            shares={3}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Beyonce adoiuhawiof owa wao fawhi" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
            ]}
            userAvatarSrc="/beyonce.jpg"
            userName="queenb"
            description="Beyonce everywhere!"
            likes={100}
            comments={20}
            shares={10}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Beyonce adoiuhawiof owa wao fawhi" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
            ]}
            userAvatarSrc="/dragons.jpg"
            userName="dragonmaster"
            description="All about dragons."
            likes={55}
            comments={8}
            shares={4}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Beyonce adoiuhawiof owa wao fawhi" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
            ]}
            userAvatarSrc="/beyonce.jpg"
            userName="minski"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Beyonce adoiuhawiof owa wao fawhi" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
            ]}
            userAvatarSrc="/dragons.jpg"
            userName="dragonfan"
            description="Another description for a different transition."
            likes={12}
            comments={5}
            shares={3}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Beyonce adoiuhawiof owa wao fawhi" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
            ]}
            userAvatarSrc="/beyonce.jpg"
            userName="queenb"
            description="Beyonce everywhere!"
            likes={100}
            comments={20}
            shares={10}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Beyonce adoiuhawiof owa wao fawhi" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
            ]}
            userAvatarSrc="/dragons.jpg"
            userName="dragonmaster"
            description="All about dragons."
            likes={55}
            comments={8}
            shares={4}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Beyonce adoiuhawiof owa wao fawhi" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
            ]}
            userAvatarSrc="/beyonce.jpg"
            userName="minski"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
            songs={[
              { album_cover_img_url: "/beyonce.jpg", title: "Beyonce adoiuhawiof owa wao fawhi" },
              { album_cover_img_url: "/dragons.jpg", title: "Dragons" },
            ]}
            userAvatarSrc="/dragons.jpg"
            userName="dragonfan"
            description="Another description for a different transition."
            likes={12}
            comments={5}
            shares={3}
          />
        </Grid>
      </Widget>
    </Flex>
  );
}

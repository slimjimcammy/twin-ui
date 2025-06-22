import { Text } from "../components/ui/Text";
import { Grid } from "../components/layout/Grid";
import Widget from "../components/layout/Widget";
import { Flex } from "../components/layout/Flex";
import Transition from "../components/app/transition/Tranisiton";

export default function ForYou() {
  return (
    <Flex
      direction="column"
      gap="lg"
      className="pl-4 h-full min-h-0"
      height="stretch"
      width="stretch"
    >
      <Text variant="h1" color="default" font="heading">
        Explore
      </Text>
      <Widget className="flex-1 min-h-0 p-4 overflow-y-auto">
        <Grid cols="three">
          <Transition
            leftCoverSrc="/beyonce.jpg"
            leftTitle="Beyonce adoiuhawiof owa wao fawhi"
            rightCoverSrc="/dragons.jpg"
            rightTitle="Dragons"
            userAvatarSrc="/beyonce.jpg"
            userName="minski"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. oiahoifha owoi aoao oawhdio aua iiua hiu diaiu iua iuw iu"
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
            leftCoverSrc="/dragons.jpg"
            leftTitle="Dragons"
            rightCoverSrc="/beyonce.jpg"
            rightTitle="Beyonce"
            userAvatarSrc="/dragons.jpg"
            userName="dragonfan"
            description="Another description for a different transition."
            likes={12}
            comments={5}
            shares={3}
          />
          <Transition
            leftCoverSrc="/beyonce.jpg"
            leftTitle="Beyonce"
            rightCoverSrc="/beyonce.jpg"
            rightTitle="Beyonce Again"
            userAvatarSrc="/beyonce.jpg"
            userName="queenb"
            description="Beyonce everywhere!"
            likes={100}
            comments={20}
            shares={10}
          />
          <Transition
            leftCoverSrc="/dragons.jpg"
            leftTitle="Dragons"
            rightCoverSrc="/dragons.jpg"
            rightTitle="More Dragons"
            userAvatarSrc="/dragons.jpg"
            userName="dragonmaster"
            description="All about dragons."
            likes={55}
            comments={8}
            shares={4}
          />
          <Transition
            leftCoverSrc="/beyonce.jpg"
            leftTitle="Beyonce"
            rightCoverSrc="/dragons.jpg"
            rightTitle="Dragons"
            userAvatarSrc="/beyonce.jpg"
            userName="minski"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
            leftCoverSrc="/dragons.jpg"
            leftTitle="Dragons"
            rightCoverSrc="/beyonce.jpg"
            rightTitle="Beyonce"
            userAvatarSrc="/dragons.jpg"
            userName="dragonfan"
            description="Another description for a different transition."
            likes={12}
            comments={5}
            shares={3}
          />
          <Transition
            leftCoverSrc="/beyonce.jpg"
            leftTitle="Beyonce"
            rightCoverSrc="/beyonce.jpg"
            rightTitle="Beyonce Again"
            userAvatarSrc="/beyonce.jpg"
            userName="queenb"
            description="Beyonce everywhere!"
            likes={100}
            comments={20}
            shares={10}
          />
          <Transition
            leftCoverSrc="/dragons.jpg"
            leftTitle="Dragons"
            rightCoverSrc="/dragons.jpg"
            rightTitle="More Dragons"
            userAvatarSrc="/dragons.jpg"
            userName="dragonmaster"
            description="All about dragons."
            likes={55}
            comments={8}
            shares={4}
          />
          <Transition
            leftCoverSrc="/beyonce.jpg"
            leftTitle="Beyonce"
            rightCoverSrc="/dragons.jpg"
            rightTitle="Dragons"
            userAvatarSrc="/beyonce.jpg"
            userName="minski"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
            likes={40}
            comments={2}
            shares={1}
          />
          <Transition
            leftCoverSrc="/dragons.jpg"
            leftTitle="Dragons"
            rightCoverSrc="/beyonce.jpg"
            rightTitle="Beyonce"
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

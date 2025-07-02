import { Flex } from "../../components/layout/Flex";
import Widget from "../../components/layout/Widget";
import { Text } from "../../components/ui/Text";
import { ProfileCard } from "../view-transition/components/ProfileCard";
import { useParams } from "react-router-dom";
import Transition from "../../components/app/transition/Transition";
import { Grid } from "../../components/layout/Grid";

export default function Profile() {
  const { name } = useParams();
  // TODO: will eventually need state fetched from DB by handle name
  //            -- hardcode for now
  //   const [avatarSrc, setAvatarSrc] = useState("/beyonce.jpg");
  //   const [followerCount, setFollowerCount] = useState("1000");

  const avatarSrc = "/beyonce.jpg";
  const followerCount = "1000";

  console.log(name);

  return (
    <Flex
      direction="row"
      gap="md"
      height="stretch"
      width="stretch"
      className="pl-md"
    >
      <Widget
        direction="column"
        gap="md"
        className="min-w-[150px] w-1/4 h-[200px]"
        padding="md"
        justify="center"
        align="center"
      >
        <Flex direction="column" gap="md">
          <ProfileCard
            name={name || ""}
            avatarSrc={avatarSrc}
            followerCount={followerCount}
          />
        </Flex>
      </Widget>
      <Widget padding="md" className="w-[60%] min-w-[500px]">
        <Flex direction="column" gap="md">
          <Text variant="h3">My sets</Text>
          <Widget height="stretch" className="flex-1 min-h-0" padding="md">
            <Grid
              cols="one"
              spacing="md"
              className="flex-1 min-h-0 overflow-y-auto"
            >
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
      </Widget>
    </Flex>
  );
}

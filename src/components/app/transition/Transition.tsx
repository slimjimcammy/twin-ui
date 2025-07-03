import Widget from "../../layout/Widget";
import { Flex } from "../../layout/Flex";
import { TransitionCover } from "./components/TransitionCover";
import { TransitionMeta } from "./components/TransitionMeta";
import { TransitionActions } from "./components/TransitionActions";
import { useNavigate } from "react-router-dom";
export interface TransitionProps {
  leftCoverSrc: string;
  leftTitle: string;
  rightCoverSrc: string;
  rightTitle: string;
  userAvatarSrc: string;
  userName: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
}

export default function Transition({
  leftCoverSrc,
  leftTitle,
  rightCoverSrc,
  rightTitle,
  userAvatarSrc,
  userName,
  description,
  likes,
  comments,
  shares,
}: TransitionProps) {
  const navigate = useNavigate();
  return (
    <Widget className="group hover:cursor-pointer" height="fit" variant="md">
      {/*No postIDs yet for these posts so will just go to post 1 */}
      <Flex direction="column" className="relative" onClick={() => navigate("/posts/1")}>
        <Flex direction="row">
          <TransitionCover src={leftCoverSrc} title={leftTitle} align="left" />
          <TransitionCover
            src={rightCoverSrc}
            title={rightTitle}
            align="right"
          />
        </Flex>
        <TransitionMeta
          userAvatarSrc={userAvatarSrc}
          userName={userName}
          description={description}
        />
        {/* <TransitionActions likes={likes} comments={comments} shares={shares} /> */}
      </Flex>
    </Widget>
  );
}

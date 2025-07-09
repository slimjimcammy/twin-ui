import Widget from "../../layout/Widget";
import { Flex } from "../../layout/Flex";
import { TransitionCover } from "./components/TransitionCover";
import { TransitionMeta } from "./components/TransitionMeta";
import { TransitionActions } from "./components/TransitionActions";
import { useNavigate } from "react-router-dom";
export interface TransitionProps {
  songs: {
    album_cover_img_url: string;
    title: string;
  }[];
  userAvatarSrc: string;
  userName: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
}

export default function Transition({
  songs,  
  userAvatarSrc,
  userName,
  description,
  likes,
  comments,
  shares,
}: TransitionProps) {
  const navigate = useNavigate();
  const songPairs = [];
  for(let i = 0; i < songs.length; i += 2) {
    songPairs.push(songs.slice(i, i + 2));
  }
  const coverSize = songs.length > 2 ? "sm" : "md";
  return (
    <Widget className="group hover:cursor-pointer" height="full" variant="md">
      {/*No postIDs yet for these posts so will just go to post 1 */}
      <Flex direction="column" className="relative" onClick={() => navigate("/posts/1")}>
        {songPairs.map((pair, index) => (
          <Flex direction="row" key={index}>
            {pair.map((song, i) => (
              song.album_cover_img_url && song.title && (
                <TransitionCover
                  key={i}
                  src={song.album_cover_img_url}
                  title={song.title}  
                  align={i === 0 ? "left" : "right"}
                  size={coverSize}
                />
              )
            ))}
          </Flex>
        ))}
        <TransitionMeta
          userAvatarSrc={userAvatarSrc}
          userName={userName}
          description={description}
        />
        <TransitionActions likes={likes} comments={comments} shares={shares} />
      </Flex>
    </Widget>
  );
}

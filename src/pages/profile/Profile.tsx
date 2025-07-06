import { Flex } from "../../components/layout/Flex";
import Widget from "../../components/layout/Widget";
import { Text } from "../../components/ui/Text";
import { ProfileCard } from "../view-transition/components/ProfileCard";
import { useParams } from "react-router-dom";
import Transition from "../../components/app/transition/Transition";
import { Grid } from "../../components/layout/Grid";
import { useEffect, useState } from "react";

export interface User{
    id: number,
    email: string,
    password: string,
    join_date: string,
    first_name: string,
    last_name: string,
    profile_img_url: string,
    role: string,
    nickname: string,
  }
export interface Song{
  id: number,
  soundcloud_song_id: number,
  title: string,
  artist_name: string,
  album_cover_img_url: string,
}

export interface Post {
  id: number,
  user_id: number,
  transition_audio_url: string,
  transition_json_summary_url: string,
  post_date: string,
  likes: number,
  shares: number,
  description: string,
  outgoing_song_id: number,
  incoming_song_id: number,
}

export interface Comments {
  id: number,
  parent_comment_id: number,
  user_id: number,
  post_id: number,
  content: string,
  comment_date: string,
}

type PostWithSongs = {
  post: Post;
  songs: Song[];
}

export default function Profile() {
  const { userID } = useParams<{userID: string}>();
  const [user, setUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [PostWithSongs, setPostWithSongs] = useState<PostWithSongs[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      const user_id = Number(userID)
      try {
        const userResult = await fetch(`http://localhost:8000/users/${user_id}`);
        const userData = await userResult.json();
        console.log("User data from backend:", userData);
        setUser(userData)

        const postResult = await fetch(`http://localhost:8000/posts/${user_id}`);
        const posts: Post[] = await postResult.json();
        {/* need to change post backend to store more songs */}
        const postAndSongs = await Promise.all(
          posts.map(async (post) => {
            const songIDs = [
              post.outgoing_song_id,
              post.incoming_song_id,
            ];
            const songPromises = songIDs.map((id) => 
            fetch(`http://localhost:8000/songs/${id}`).then((res) => res.json())
            );
            const songs = await Promise.all(songPromises);

            return {post, songs}
          })
        );
        setPostWithSongs(postAndSongs)
        // const userPosts = await postResult.json();
        // setPosts(userPosts)
      } catch (error) {
        console.error("failed to get user data", error);
      }
    };
    fetchData();
  }, [userID])

  if (!user) return <Text> User not Found, Please Login</Text>
  // TODO: will eventually need state fetched from DB by handle name
  //            -- hardcode for now
  //   const [avatarSrc, setAvatarSrc] = useState("/beyonce.jpg");
  //   const [followerCount, setFollowerCount] = useState("1000");

  const avatarSrc = "/beyonce.jpg";
  const followerCount = "1000";

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
            name={`${user?.nickname}`}
            avatarSrc={user?.profile_img_url || avatarSrc}
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
              {PostWithSongs.map(({post, songs}) => (
                <Transition
                  key={post.id}
                  leftCoverSrc={songs[0].album_cover_img_url ??"/beyonce.jpg"}
                  leftTitle={songs[0].title ?? "Unkown"}
                  rightCoverSrc={songs[1].album_cover_img_url ??"/dragons.jpg"}
                  rightTitle={songs[1].title ??"Unknown Right Title"}
                  userAvatarSrc={user?.profile_img_url || "/default-avatar.jpg"}
                  userName={`${user.nickname}`}
                  description={post.description}
                  likes={post.likes}
                  comments={0}
                  shares={post.shares}
                />
              ))}
              {/* <Transition
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
                shares={3} */}
              {/* /> */}
            </Grid>
          </Widget>
        </Flex>
      </Widget>
    </Flex>
  );
}

import { Flex } from "../../components/layout/Flex";
import Widget from "../../components/layout/Widget";
import { Text } from "../../components/ui/Text";
import { ProfileCard } from "../view-transition/components/ProfileCard";
import { useParams } from "react-router-dom";
import Transition from "../../components/app/transition/Transition";
import { Grid } from "../../components/layout/Grid";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/app/auth/AuthContext";
import Button from "../../components/ui/Button";

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
  song_1_id: number,
  song_2_id: number,
  song_3_id?: number | null,
  song_4_id?: number | null,
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
  const { user: currentUser } = useAuth();
  const [user, setUser] = useState<User | null>(null);
  //const [posts, setPosts] = useState<Post[]>([]);
  const [PostWithSongs, setPostWithSongs] = useState<PostWithSongs[]>([]);
  const [nicknameInput, setNicknameInput] = useState("");
  const [selectedPfpFile, setSelectedPfpFile] = useState<File | null>(null);
  const [savingProfile, setSavingProfile] = useState(false);
  const isOwnProfile = currentUser?.id === Number(userID);

  const handleSaveNickname = async () => {
    try {
      setSavingProfile(true);

      const res = await fetch("http://localhost:8000/me", {
        method: "PATCH",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nickname: nicknameInput,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update nickname");
      }

      const updatedUser = await res.json();
      setUser(updatedUser);
    } catch (error) {
      console.error("Failed to save nickname", error);
    } finally {
      setSavingProfile(false);
    }
  };

  const handleProfilePictureUpload = async () => {
    if (!selectedPfpFile) return;

    try {
      setSavingProfile(true);

      const createUploadRes = await fetch("http://localhost:8000/uploads/pfp", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filename: selectedPfpFile.name,
          content_type: selectedPfpFile.type,
        }),
      });

      if (!createUploadRes.ok) {
        throw new Error("Failed to create profile picture upload");
      }

      const uploadData = await createUploadRes.json();

      const s3UploadRes = await fetch(uploadData.upload_url, {
        method: "PUT",
        headers: {
          "Content-Type": selectedPfpFile.type,
        },
        body: selectedPfpFile,
      });

      if (!s3UploadRes.ok) {
        throw new Error("Failed to upload file to S3");
      }

      const completeRes = await fetch("http://localhost:8000/uploads/pfp/complete", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          s3_key: uploadData.s3_key,
        }),
      });

      if (!completeRes.ok) {
        throw new Error("Failed to save profile picture in database");
      }

      const completeData = await completeRes.json();

      setUser((prev) =>
        prev
          ? {
              ...prev,
              profile_img_url: completeData.profile_img_url,
            }
          : prev
      );

      setSelectedPfpFile(null);
    } catch (error) {
      console.error("Failed to upload profile picture", error);
    } finally {
      setSavingProfile(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log(user?.id)
      if (!userID) return;
      const user_id = Number(userID);
      console.log(user_id);
      try {
        const userResult = await fetch(`http://localhost:8000/users/${user_id}`);
        const userData = await userResult.json();
        console.log(userData);
        if(!userResult.ok || !userData) {
          setUser(null);
          return;
        }
        setUser(userData)
        setNicknameInput(userData.nickname || "");

        const postResult = await fetch(`http://localhost:8000/posts/${user_id}`);
        const posts: Post[] = await postResult.json();
        {/* need to change post backend to store more songs */}
        const postAndSongs = await Promise.all(
          posts.map(async (post) => {
            const songIDs = [
              post.song_1_id,
              post.song_2_id,
              post.song_3_id,
              post.song_4_id,
            ].filter((id): id is number => id !== null && id !== undefined);

            const songPromises = songIDs.map((id) =>
              fetch(`http://localhost:8000/songs/${id}`).then((res) => res.json())
            );

            const songs = await Promise.all(songPromises);

            return { post, songs };
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
      align="start"
      className="pl-md min-h-0"
    >
      <Widget
        direction="column"
        gap="md"
        className="w-[320px] min-w-[280px] h-fit self-start"
        padding="md"
        justify="start"
        align="stretch"
      >
      <Flex direction="column" gap="md" width="stretch" className="min-w-0">
        <Flex direction="column" align="center" className="mb-4">
          <ProfileCard
            name={`${user?.nickname}`}
            avatarSrc={user?.profile_img_url || avatarSrc}
            followerCount={followerCount}
          />
        </Flex>

        {isOwnProfile && (
          <Flex
            direction="column"
            gap="sm"
            width="stretch"
            align="center"
            className="pt-4"
          >
            <Text variant="p" className="mt-2">
              Edit nickname
            </Text>
            <input
              type="text"
              value={nicknameInput}
              onChange={(e) => setNicknameInput(e.target.value)}
              className="w-[220px] rounded-md px-3 py-2 bg-[#111] border border-[#333] text-white"
            />

            <Button
              onClick={handleSaveNickname}
              variant="secondary"
              size="sm"
              disabled={savingProfile}
            >
              Save nickname
            </Button>

            <Text variant="p" className="mt-2">
              Upload profile picture
            </Text>
            <input
              type="file"
              accept="image/*"
              className="w-[220px] text-sm text-center"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setSelectedPfpFile(file);
              }}
            />

            <Button
              onClick={handleProfilePictureUpload}
              variant="secondary"
              size="sm"
              disabled={!selectedPfpFile || savingProfile}
            >
              Upload profile picture
            </Button>
          </Flex>
        )}
      </Flex>
      </Widget>
      <Widget padding="md" className="flex-1 min-w-0 h-full">
        <Flex
          direction="column"
          gap="md"
          align="center"
          width="stretch"
          className="text-center"
        >
          <Text variant="h3">My sets</Text>
          <Widget height="stretch" className={`flex-1 min-h-0 ${PostWithSongs.length === 0 ? "border-0" : ""}`} padding="md" >
            <Grid
              cols="one"
              spacing="md"
              className="flex-1 min-h-0 overflow-y-auto"
            >
              {PostWithSongs.length == 0 ? (
                <Text>No sets recorded.</Text>
              ) :
              (PostWithSongs.map(({post, songs}) => (
                <Transition
                  key={post.id}
                  songs={songs}
                  userAvatarSrc={user?.profile_img_url || "/default-avatar.jpg"}
                  userName={`${user.nickname}`}
                  description={post.description}
                  likes={post.likes}
                  comments={0}
                  shares={post.shares}
                />
              )))}
            </Grid>
          </Widget>
        </Flex>
      </Widget>
    </Flex>
  );
}

import { Flex } from "../../components/layout/Flex";
import Widget from "../../components/layout/Widget";
import ShowingTransition from "./components/ShowingTransition";
import { ArtistProfileSection } from "./components/ArtistProfileSection";
import { useEffect, useState } from "react";
import Image from "../../components/ui/Image";
import Button from "../../components/ui/Button";
import { useParams } from "react-router-dom";
import type { Post } from "../profile/Profile"
import type { Song } from "../profile/Profile";
import type { User } from "../profile/Profile";
import { Text } from "../../components/ui/Text";
export default function ViewTransition() {
  const { post_id } = useParams<{post_id: string}>();
  const [post, setPost] = useState<Post | null>(null);
  const [User, setUser] = useState<User | null>(null);
  const [songs, setSongs] = useState<Song[]>([]);
  const [audioURL, setAudioURL] = useState("");
  const [jsonURL, setJSONURL] = useState("");
  const [otherPosts, setOtherPosts] = useState<Post[]>([]);
  const [notFound, setNotFound] = useState(false);
  useEffect (() => {
    async function getPost() {
      const postID = Number(post_id);
      console.log(postID)
      const postData = await fetch(`http://localhost:8000/post/${postID}`);
      if (!postData.ok) {
        setNotFound(true);
        return;
      }
      const data = await postData.json();
      console.log(data);
      setPost(data);
    }
    getPost();
  }, [post_id]);

  useEffect(() => {
    if(!post) return;
    async function getUser() {
      const userData = await fetch (`http://localhost:8000/users/${post.user_id}`)
      const data = await userData.json();

      setUser(data);
    }

    getUser();
  }, [post]);



  useEffect(() => {
    if(!User) return;
    async function getRestPosts() {
      const restPosts = await fetch (`http://localhost:8000/posts/songs/${post.user_id}`)
      const data = await restPosts.json();

      setOtherPosts(data)
    }

    getRestPosts();
  }, [User])

  useEffect(() => {
    if(!post) return;
    const postID = Number(post_id)
    async function getPostMedia() {
      const postMedia = await fetch(`http://localhost:8000/posts/${postID}/media`)
      const data = await postMedia.json();

      setAudioURL(data.audio_url);
      setJSONURL(data.json_url);
    }
    getPostMedia();
  }, [post])

  useEffect(() => {
    if(!post) return;
    async function getSongInfo() {
      const songIds = [
      post?.song_1_id,
      post?.song_2_id,
      post?.song_3_id,
      post?.song_4_id,
    ].filter(Boolean);

    const songResponses = await Promise.all(
      songIds.map((id) =>
        fetch(`http://localhost:8000/songs/${id}`).then((res) => res.json())
      )
    );

    setSongs(songResponses);
    }
    getSongInfo();
  }, [post])


  const [visualize, setVisualize] = useState(false);
  const trackInfo = {
    user: {
      name: User?.nickname ?? "unknown",
      avatarSrc: User?.profile_img_url ?? "beyonce.jpg",
    },
    socials: {
      likes: post?.likes ?? 0,
      // comments: post?.comments ?? 0,
      shares: post?.shares ?? 0,
    },
    description: post?.description ?? "unkown",
  };

  const artistProfileData = {
    profile: {
      name: User?.nickname ?? "uknwown",
      avatarSrc: User?.profile_img_url ?? "beyonce.jpg",
      followerCount: "11K",
    },
    moreFromArtist: {
      title: "More from this artist",
      transitions: otherPosts.filter((otherPosts) => otherPosts.id !== post?.id).map((item) => ({
      id: item.id,
      from: {
        name: item?.song_1.artist_name,
        imageSrc: item?.song_1.album_cover_img_url,
      },
      to: {
        name: item?.song_2.artist_name,
        imageSrc: item?.song_2.album_cover_img_url,
      },
      likes: post?.likes,
    }))
        },
      };
  

    if (notFound) {
      return (
        <Flex  height="stretch">
          <Text variant="h3">Post not found</Text>
        </Flex>
      );
    }


  return (
    <Flex
  direction="column"
  gap="md"
  className="pl-4 h-full min-h-0 overflow-y-hidden"
  height="stretch"
  width="stretch"
>
  <Widget padding="none" className="h-full overflow-hidden w-full">
    <Flex
      direction="column"
      width="stretch"
      height="stretch"
      className="min-h-0"
    >
  
      <ShowingTransition
        artists={songs.map((song) => ({
          name: song.artist_name,
          imageSrc: song.album_cover_img_url,
        }))}
        trackInfo={trackInfo}
        audioSrc={audioURL || undefined}
      />

      <Button
        onClick={() => setVisualize(!visualize)}
        variant="secondary"
        size="sm"
        className="ml-auto mr-4 mt-2"
      >
        {visualize ? "Back to Suggestions" : "Visualize"}
    </Button>


      {visualize ? (
        <Flex direction="column" justify="center" align="center" className="flex-1">
          <Image
            src="/Djsim.png"
            alt="DJ Simulation"
            className="w-[500px] h-auto rounded-xl shadow-lg"
          />
          <p className="text-sm text-subtitle">Visualizer in progress...</p>
        </Flex>
      ) : (
        <ArtistProfileSection
          profile={artistProfileData.profile}
          moreFromArtist={artistProfileData.moreFromArtist}
        />
      )}
    </Flex>
  </Widget>
</Flex>
  );
}

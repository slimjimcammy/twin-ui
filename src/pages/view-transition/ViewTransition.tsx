import { Flex } from "../../components/layout/Flex";
import Widget from "../../components/layout/Widget";
import ShowingTransition from "./components/ShowingTransition";
import { ArtistProfileSection } from "./components/ArtistProfileSection";
import { useState } from "react";
import Image from "../../components/ui/Image";
import Button from "../../components/ui/Button";
import { useLocation } from "react-router-dom"

export default function ViewTransition() {
  const location = useLocation();
  const state = location.state || {};
  const song1 = state.songs?.[0];
  const song2 = state.songs?.[1];
  const [visualize, setVisualize] = useState(false);
  // state={{
  //         songs,
  //         userAvatarSrc,
  //         userName,
  //         description,
  //         likes,
  //         comments,
  //         shares,
  //       }}
  const trackInfo = {
    user: {
      name: state.userName,
      avatarSrc: state.userAvatarSrc,
    },
    socials: {
      likes: state.likes,
      comments: state.comments,
      shares: state.shares,
    },
    description: state.description,
  };

  const artistProfileData = {
    profile: {
      name: state.userName,
      avatarSrc: state.userAvatarSrc,
      followerCount: "11K",
    },
    moreFromArtist: {
      title: "More from this artist",
      transitions: [
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: {
            name: "Zero",
            imageSrc: "/dragons.jpg",
          },
          likes: 841,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 1,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 2,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 500444,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 300,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 67,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 690,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 21,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 10,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 9,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 3890,
        },
        {
          from: { name: "Sorry", imageSrc: "/beyonce.jpg" },
          to: { name: "Zero", imageSrc: "/dragons.jpg" },
          likes: 320,
        },
      ],
    },
  };

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
        fromArtist={{ name: song1.title, imageSrc: song1.album_cover_img_url, RealName: song1.RealName }}
        toArtist={{ name: song2.title, imageSrc: song2.album_cover_img_url, RealName: song2.RealName }}
        trackInfo={trackInfo}
        isPlaying={false}
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

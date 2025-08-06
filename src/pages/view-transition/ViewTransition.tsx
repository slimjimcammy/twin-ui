import { Flex } from "../../components/layout/Flex";
import Widget from "../../components/layout/Widget";
import ShowingTransition from "./components/ShowingTransition";
import { ArtistProfileSection } from "./components/ArtistProfileSection";
import { useState } from "react";
import Image from "../../components/ui/Image";
import Button from "../../components/ui/Button";

export default function ViewTransition() {
  const [visualize, setVisualize] = useState(false);
  const trackInfo = {
    user: {
      name: "minski",
      avatarSrc: "/beyonce.jpg",
    },
    socials: {
      likes: 40,
      comments: 11,
      shares: 3,
    },
    description: `Descps9f osoi seoijosI  mizsm ow popa dcsl;pl a;;a wfp feiwoo qijoijq wooi cdosivnksek joeoi sois oik nkx,m skel awo afpo vflml lokpoe kfopk spdk;ok ;skdo;`,
  };

  const artistProfileData = {
    profile: {
      name: "minski",
      avatarSrc: "/beyonce.jpg",
      followerCount: "11K",
    },
    moreFromArtist: {
      title: "More from this artist",
      transitions: [
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: {
            name: "Imagine Dragons Imagine Dragons",
            imageSrc: "/dragons.jpg",
          },
          likes: 841,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
        },
        {
          from: { name: "Beyonce", imageSrc: "/beyonce.jpg" },
          to: { name: "Imagine Dragons", imageSrc: "/dragons.jpg" },
          likes: 500,
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
        fromArtist={{ name: "Beyonce", imageSrc: "/beyonce.jpg" }}
        toArtist={{ name: "Dragons", imageSrc: "/dragons.jpg" }}
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

import { Flex } from "../../../components/layout/Flex";
import { ProfileCard } from "./ProfileCard";
import { MoreFromArtist } from "./MoreFromArtist";
import { type TransitionItem } from "./SongTransitionHeaderList";

type ArtistProfileSectionProps = {
  profile: {
    name: string;
    avatarSrc: string;
    followerCount: string;
  };
  moreFromArtist: {
    title: string;
    transitions: TransitionItem[];
  };
};

export function ArtistProfileSection({
  profile,
  moreFromArtist,
}: ArtistProfileSectionProps) {
  return (
    <Flex
      direction="row"
      gap="lg"
      className="pt-4 flex-1 min-h-0"
      height="stretch"
    >
      <ProfileCard
        name={profile.name}
        avatarSrc={profile.avatarSrc}
        followerCount={profile.followerCount}
      />
      <MoreFromArtist
        title={moreFromArtist.title}
        transitions={moreFromArtist.transitions}
      />
    </Flex>
  );
}

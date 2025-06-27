import Widget from "../../layout/Widget";
import Image from "../../ui/Image";

export default function ShowingTransition({
  leftCoverSrc,
  leftTitle,
  rightCoverSrc,
  rightTitle,
}: {
  leftCoverSrc: string;
  leftTitle: string;
  rightCoverSrc: string;
  rightTitle: string;
}) {
  return (
    <Widget className="group hover:cursor-pointer p-4">
      <div className="grid">
        {/* Base Image */}
        <Image
          src={leftCoverSrc}
          alt={leftTitle}
          width="stretch"
          height="fit"
          className="col-start-1 row-start-1 rounded-lg"
        />
        {/* Overlapping Image, offset with translate */}
        <Image
          src={rightCoverSrc}
          alt={rightTitle}
          width="stretch"
          height="fit"
          className="col-start-1 row-start-1 translate-x-4 translate-y-4 rounded-lg"
        />
      </div>
    </Widget>
  );
}

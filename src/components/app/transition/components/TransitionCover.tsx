import Widget from "../../../layout/Widget";
import { Text } from "../../../ui/Text";
import Image from "../../../ui/Image";

export function TransitionCover({
  src,
  title,
  align,
  size = "md",
}: {
  src: string;
  title: string;
  align: "left" | "right";
  size?: "sm" | "md";
}) {

  const aspectClass = size === "sm" ? "aspect-[10/5]" : "aspect-square";
  return (
    <Widget className="w-1/2 overflow-hidden relative border-none rounded-none">
      <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] from-15% via-[#05070a]/40 via-45% to-transparent z-10" />
      <Image
        src={src}
        alt={title}
        className={`object-cover transition-opacity duration-200 opacity-65  group-hover:opacity-100  ${aspectClass} ${align === "left" ? "rounded-tl-md" : "rounded-tr-md"}`}
      />
      <Text
        variant="strong"
        color="default"
        font="header"
        align={align}
        className={`absolute bottom-4 ${align === "left" ? "left-4" : "right-4"} z-20 w-fit overflow-hidden whitespace-nowrap text-ellipsis`}
      >
        {title}
      </Text>
    </Widget>
  );
}

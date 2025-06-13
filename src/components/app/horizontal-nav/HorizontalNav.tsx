import Widget from "../../layout/Widget";
import { Flex } from "../../layout/Flex";

export interface HorizontalNavProps {
  slotLeft: React.ReactNode;
  slotCenter: React.ReactNode;
  slotRight: React.ReactNode;
  className?: string;
  centerJustify?: "start" | "center" | "end";
}

export default function HorizontalNav({
  slotLeft,
  slotCenter,
  slotRight,
  centerJustify,
  className,
}: HorizontalNavProps) {
  return (
    <Widget glow="light" padding="md" className={className}>
      <Flex
        direction="row"
        gap="lg"
        width="stretch"
        align="center"
        justify="between"
      >
        {slotLeft}
        <Flex
          direction="row"
          width="stretch"
          height="stretch"
          justify={centerJustify}
          className="flex-1"
        >
          {slotCenter}
        </Flex>
        {slotRight}
      </Flex>
    </Widget>
  );
}

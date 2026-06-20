export type DeckSide = "LEFT" | "RIGHT";
export type KnobSize = "sm" | "md";

export type KnobProps = {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  size?: KnobSize;
  active?: boolean;
};

export type FaderProps = {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  active?: boolean;
};

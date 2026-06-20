import type { FaderProps } from "../../types/deck";

export default function VerticalFader({
  label,
  value,
  min = 0,
  max = 100,
  onChange,
  active = false,
}: FaderProps) {
  return (
    <div className="tempo-block">
      <input
        className={`tempo-fader vertical-range ${active ? "fader-glow" : ""}`}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={label}
      />
      <span>{label}</span>
    </div>
  );
}

import type { FaderProps } from "../../types/deck";

export default function ChannelFader({
  label,
  value,
  onChange,
  active = false,
}: FaderProps) {
  return (
    <div className="channel-fader-block">
      <input
        className={`channel-fader vertical-range ${active ? "fader-glow" : ""}`}
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={label}
      />
      <span>{label}</span>
    </div>
  );
}

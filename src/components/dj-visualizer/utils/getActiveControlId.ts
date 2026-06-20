import type { ActiveControlId, MidiLogEvent } from "../types/controller";

export function getActiveControlId(event: MidiLogEvent): ActiveControlId | null {
  const action = event.action;
  if (!action) return null;

  const deck = action.startsWith("deck1_")
    ? "deck1"
    : action.startsWith("deck2_")
      ? "deck2"
      : null;

  const channel = deck === "deck1" ? "channel1" : deck === "deck2" ? "channel2" : null;

  if (deck && action.includes("tempo")) return `${deck}.tempo` as ActiveControlId;
  if (deck && action.includes("jog")) return `${deck}.jog` as ActiveControlId;

  if (channel && action.includes("trim")) return `${channel}.trim` as ActiveControlId;
  if (channel && action.includes("high_eq")) return `${channel}.high` as ActiveControlId;
  if (channel && action.includes("mid_eq")) return `${channel}.mid` as ActiveControlId;
  if (channel && action.includes("low_eq")) return `${channel}.low` as ActiveControlId;
  if (channel && action.includes("filter")) return `${channel}.filter` as ActiveControlId;
  if (channel && action.includes("volume_fader")) return `${channel}.volume` as ActiveControlId;

  if (action.includes("crossfader")) return "mixer.crossfader";

  if (action.includes("fx") && action.includes("knob")) return "mixer.fxLevel";

  return null;
}

import type { MixerChannelState } from "../../types/controller";
import Knob from "../controls/Knob";
import ChannelFader from "../controls/ChannelFader";

type MixerChannelProps = {
  state: MixerChannelState;
  onChange: (nextState: MixerChannelState) => void;
  activePrefix: "channel1" | "channel2";
  activeControlIds: Set<string>;
};

export default function MixerChannel({
  state,
  onChange,
  activePrefix,
  activeControlIds,
}: MixerChannelProps) {
  const setPartial = (partial: Partial<MixerChannelState>) => {
    onChange({
      ...state,
      ...partial,
    });
  };

  return (
    <div className="mixer-channel">
      <Knob
        label="TRIM"
        value={state.trim}
        onChange={(trim) => setPartial({ trim })}
        size="sm"
        active={activeControlIds.has(`${activePrefix}.trim`)}
      />

      <Knob
        label="HIGH"
        value={state.high}
        onChange={(high) => setPartial({ high })}
        size="sm"
        active={activeControlIds.has(`${activePrefix}.high`)}
      />

      <Knob
        label="MID"
        value={state.mid}
        onChange={(mid) => setPartial({ mid })}
        size="sm"
        active={activeControlIds.has(`${activePrefix}.mid`)}
      />

      <Knob
        label="LOW"
        value={state.low}
        onChange={(low) => setPartial({ low })}
        size="sm"
        active={activeControlIds.has(`${activePrefix}.low`)}
      />

      <Knob
        label="FILTER"
        value={state.filter}
        onChange={(filter) => setPartial({ filter })}
        size="sm"
        active={activeControlIds.has(`${activePrefix}.filter`)}
      />

      <button
        className={`headphone-cue ${state.cue ? "headphone-cue-on" : ""}`}
        onClick={() => setPartial({ cue: !state.cue })}
      >
        CUE
      </button>

      <ChannelFader
        label="LEVEL"
        value={state.volume}
        onChange={(volume) => setPartial({ volume })}
        active={activeControlIds.has(`${activePrefix}.volume`)}
      />
    </div>
  );
}

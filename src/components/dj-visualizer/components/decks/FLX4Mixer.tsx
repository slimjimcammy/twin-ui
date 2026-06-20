import type { MixerState } from "../../types/controller";
import Knob from "../controls/Knob";
import MixerChannel from "./MixerChannel";
import BrowserStrip from "./BrowserStrip";
import FXSection from "./FXSection";
import type { ActiveControlId } from "../../types/controller";

type FLX4MixerProps = {
  state: MixerState;
  onChange: (nextState: MixerState) => void;
  activeControlIds: Set<ActiveControlId>;
};

export default function FLX4Mixer({
  state,
  onChange,
  activeControlIds,
}: FLX4MixerProps) {
  const setPartial = (partial: Partial<MixerState>) => {
    onChange({
      ...state,
      ...partial,
    });
  };

  return (
    <section className="mixer-section">
      <BrowserStrip />

      <div className="mixer-layout">
        <div className="side-utility side-utility-left">
          <div className="headphones-bottom">
            <Knob
              label="HEADPHONES"
              value={state.headphones}
              onChange={(headphones) => setPartial({ headphones })}
              size="sm"
            />
          </div>
        </div>

        <MixerChannel
          state={state.channel1}
          activePrefix="channel1"
          activeControlIds={activeControlIds}
          onChange={(channel1) => setPartial({ channel1 })}
        />

        <div className="meter-column">
          {Array.from({ length: 13 }).map((_, index) => (
            <span key={index} className={index < 8 ? "meter-on" : ""} />
          ))}
        </div>

        <MixerChannel
          state={state.channel2}
          activePrefix="channel2"
          activeControlIds={activeControlIds}
          onChange={(channel2) => setPartial({ channel2 })}
        />

        <div className="side-utility side-utility-right">
          <Knob
            label="MASTER"
            value={state.master}
            onChange={(master) => setPartial({ master })}
            size="sm"
          />

          <FXSection
            fxLevel={state.fxLevel}
            fxSelect={state.fxSelect}
            fxOn={state.fxOn}
            fxActive={activeControlIds.has("mixer.fxLevel")}
            onFxLevelChange={(fxLevel) => setPartial({ fxLevel })}
            onFxSelectChange={(fxSelect) => setPartial({ fxSelect })}
            onFxOnChange={(fxOn) => setPartial({ fxOn })}
          />
        </div>
      </div>

      <div className="crossfader-area">
        <div className="cross-labels">
          <span>1</span>
          <span>2</span>
        </div>

        <input
          className="crossfader"
          type="range"
          min="0"
          max="100"
          value={state.crossfader}
          onChange={(event) =>
            setPartial({ crossfader: Number(event.target.value) })
          }
          aria-label="Crossfader"
        />
      </div>
    </section>
  );
}

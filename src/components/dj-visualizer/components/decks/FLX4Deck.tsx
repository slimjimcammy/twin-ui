import type { DeckSide } from "../../types/deck";
import type { DeckVisualState } from "../../types/controller";
import VerticalFader from "../controls/VerticalFader";
import JogWheel from "../controls/JogWheel";
import RoundTransportButton from "../controls/RoundTransportButton";
import Pad from "../controls/Pad";
import LoopSection from "./LoopSection";
import type { ActiveControlId } from "../../types/controller";

type FLX4DeckProps = {
  side: DeckSide;
  state: DeckVisualState;
  activeControlIds: Set<ActiveControlId>;
  onChange: (nextState: DeckVisualState) => void;
};

export default function FLX4Deck({
  side,
  state,
  activeControlIds,
  onChange,
}: FLX4DeckProps) {
  const setPartial = (partial: Partial<DeckVisualState>) => {
    onChange({
      ...state,
      ...partial,
    });
  };

  return (
    <section className="deck-section">
      <button
        className={`sync-button ${state.sync ? "button-active" : ""}`}
        onClick={() => setPartial({ sync: !state.sync })}
      >
        SYNC
      </button>

      <LoopSection
        loopIn={state.loopIn}
        loopOut={state.loopOut}
        loopExit={state.loopExit}
        onLoopInChange={(loopIn) => setPartial({ loopIn })}
        onLoopOutChange={(loopOut) => setPartial({ loopOut })}
        onLoopExitChange={(loopExit) => setPartial({ loopExit })}
      />

      <JogWheel
        side={side}
        active={state.playing}
        externalRotation={state.jogRotation}
      />

      <div className="deck-lower-controls">
        <div className="deck-bottom-row">
          <div className="transport-column">
            <button
              className={`shift-button ${state.shift ? "button-active" : ""}`}
              onClick={() => setPartial({ shift: !state.shift })}
            >
              SHIFT
            </button>

            <RoundTransportButton
              label="CUE"
              variant="cue"
              active={state.cue}
              onClick={() => setPartial({ cue: !state.cue })}
            />

            <RoundTransportButton
              label={state.playing ? "PAUSE" : "PLAY"}
              variant="play"
              active={state.playing}
              onClick={() => setPartial({ playing: !state.playing })}
            />

            <div />
          </div>

          <div className="pads-section">
            <div className="pad-mode-row">
              <button>HOT CUE</button>
              <button>PAD FX</button>
              <button>BEAT JUMP</button>
              <button>SAMPLER</button>
            </div>

            <div className="pad-grid">
              {state.pads.map((active, index) => (
                <Pad
                  key={index}
                  label={`${index + 1}`}
                  active={active}
                  onClick={() =>
                    setPartial({
                      pads: state.pads.map((item, itemIndex) =>
                        itemIndex === index ? !item : item
                      ),
                    })
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="deck-tempo-column">
          <VerticalFader
            label="TEMPO"
            value={state.tempo}
            onChange={(tempo) => setPartial({ tempo })}
            active={activeControlIds.has(side === "LEFT" ? "deck1.tempo" : "deck2.tempo")}
          />
        </div>
      </div>
    </section>
  );
}

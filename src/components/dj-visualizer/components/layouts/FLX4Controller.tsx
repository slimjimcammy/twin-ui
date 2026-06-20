import FLX4Deck from "../decks/FLX4Deck";
import FLX4Mixer from "../decks/FLX4Mixer";
import { useMidiPlayback } from "../../hooks/useMidiPlayback";
import type { MidiLogEvent } from "../../types/controller";

type FLX4ControllerProps = {
  events: MidiLogEvent[];
  speed?: number;
};

export default function FLX4Controller({
  events,
  speed = 1,
}: FLX4ControllerProps) {
  const {
    controllerState,
    setControllerState,
    activeControlIds,
    isPlayingLog,
    play,
    reset,
  } = useMidiPlayback({
    events,
    speed,
  });

  return (
    <main className="flx-page">
      <div className="playback-controls">
        <button onClick={play} disabled={isPlayingLog}>
          {isPlayingLog ? "PLAYING LOG" : "PLAY MIDI LOG"}
        </button>
        <button onClick={reset}>RESET</button>
      </div>

      <div className="flx-controller">
        <FLX4Deck
          side="LEFT"
          state={controllerState.deck1}
          activeControlIds={activeControlIds}
          onChange={(deck1) =>
            setControllerState((current) => ({
              ...current,
              deck1,
            }))
          }
        />

        <FLX4Mixer
          state={controllerState.mixer}
          activeControlIds={activeControlIds}
          onChange={(mixer) =>
            setControllerState((current) => ({
              ...current,
              mixer,
            }))
          }
        />

        <FLX4Deck
          side="RIGHT"
          state={controllerState.deck2}
          activeControlIds={activeControlIds}
          onChange={(deck2) =>
            setControllerState((current) => ({
              ...current,
              deck2,
            }))
          }
        />
      </div>
    </main>
  );
}

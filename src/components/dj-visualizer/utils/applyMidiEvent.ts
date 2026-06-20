import type {
  ChannelId,
  ControllerState,
  DeckId,
  MidiLogEvent,
} from "../types/controller";

const normalize127To100 = (value: number) => {
  return Math.max(0, Math.min(100, (value / 127) * 100));
};

const isButtonOn = (value: number) => value > 0;

const getDeckId = (action: string): DeckId | null => {
  if (action.startsWith("deck1_")) return "deck1";
  if (action.startsWith("deck2_")) return "deck2";
  return null;
};

const getChannelId = (deckId: DeckId): ChannelId => {
  return deckId === "deck1" ? "channel1" : "channel2";
};

const getJogDelta = (value: number) => {
  // Most relative MIDI encoders use 65+ for clockwise and 63- for counterclockwise.
  // Your example log uses values like 65, 66, 68 for jog movement.
  if (value === 64) return 0;
  if (value > 64) return (value - 64) * 5;
  return -(64 - value) * 5;
};

export function applyMidiEvent(
  previous: ControllerState,
  event: MidiLogEvent
): ControllerState {
  const action = event.action;
  if (!action) return previous;

  const deckId = getDeckId(action);
  const value100 = normalize127To100(event.value);
  const buttonOn = isButtonOn(event.value);

  // Deck-specific controls
  if (deckId) {
    const channelId = getChannelId(deckId);

    if (action.includes("jog_turn") || action.includes("jog_ring_turn") || action.includes("jog_platter_turn")) {
      return {
        ...previous,
        [deckId]: {
          ...previous[deckId],
          jogRotation: previous[deckId].jogRotation + getJogDelta(event.value),
        },
      };
    }
    

    if (action.includes("play")) {
      if (!buttonOn) return previous;

      return {
        ...previous,
        [deckId]: {
          ...previous[deckId],
          playing: !previous[deckId].playing,
        },
      };
    }

    if (action.endsWith("_cue") && !action.includes("headphones")) {
      return {
        ...previous,
        [deckId]: {
          ...previous[deckId],
          cue: buttonOn,
        },
      };
    }

    if (action.includes("sync")) {
      return {
        ...previous,
        [deckId]: {
          ...previous[deckId],
          sync: buttonOn,
        },
      };
    }

    if (action.includes("shift")) {
      return {
        ...previous,
        [deckId]: {
          ...previous[deckId],
          shift: buttonOn,
        },
      };
    }

    if (action.includes("tempo")) {
      return {
        ...previous,
        [deckId]: {
          ...previous[deckId],
          tempo: value100,
        },
      };
    }

    if (action.includes("loop_in")) {
      return {
        ...previous,
        [deckId]: {
          ...previous[deckId],
          loopIn: buttonOn,
        },
      };
    }

    if (action.includes("loop_out")) {
      return {
        ...previous,
        [deckId]: {
          ...previous[deckId],
          loopOut: buttonOn,
        },
      };
    }

    if (
      action.includes("loop_active") ||
      action.includes("reloop") ||
      action.includes("auto_loop")
    ) {
      return {
        ...previous,
        [deckId]: {
          ...previous[deckId],
          loopExit: buttonOn,
        },
      };
    }

    const padMatch = action.match(/deck[12]_(?:pad_|hot_cue_)(\d+)/);
    if (padMatch) {
      const padIndex = Number(padMatch[1]) - 1;

      if (padIndex >= 0 && padIndex < 8) {
        return {
          ...previous,
          [deckId]: {
            ...previous[deckId],
            pads: previous[deckId].pads.map((pad, index) =>
              index === padIndex ? buttonOn : pad
            ),
          },
        };
      }
    }

    // Mixer channel controls
    if (action.includes("trim")) {
      return {
        ...previous,
        mixer: {
          ...previous.mixer,
          [channelId]: {
            ...previous.mixer[channelId],
            trim: value100,
          },
        },
      };
    }

    if (action.includes("high_eq")) {
      return {
        ...previous,
        mixer: {
          ...previous.mixer,
          [channelId]: {
            ...previous.mixer[channelId],
            high: value100,
          },
        },
      };
    }

    if (action.includes("mid_eq")) {
      return {
        ...previous,
        mixer: {
          ...previous.mixer,
          [channelId]: {
            ...previous.mixer[channelId],
            mid: value100,
          },
        },
      };
    }

    if (action.includes("low_eq")) {
      return {
        ...previous,
        mixer: {
          ...previous.mixer,
          [channelId]: {
            ...previous.mixer[channelId],
            low: value100,
          },
        },
      };
    }

    if (action.includes("filter")) {
      return {
        ...previous,
        mixer: {
          ...previous.mixer,
          [channelId]: {
            ...previous.mixer[channelId],
            filter: value100,
          },
        },
      };
    }

    if (action.includes("volume_fader")) {
      return {
        ...previous,
        mixer: {
          ...previous.mixer,
          [channelId]: {
            ...previous.mixer[channelId],
            volume: value100,
          },
        },
      };
    }

    if (action.includes("headphones_cue")) {
      return {
        ...previous,
        mixer: {
          ...previous.mixer,
          [channelId]: {
            ...previous.mixer[channelId],
            cue: buttonOn,
          },
        },
      };
    }
  }

  // Global mixer controls
  if (action.includes("crossfader")) {
    return {
      ...previous,
      mixer: {
        ...previous.mixer,
        crossfader: value100,
      },
    };
  }

  // FX
  if (action.includes("fx") && action.includes("knob")) {
    return {
      ...previous,
      mixer: {
        ...previous.mixer,
        fxLevel: value100,
      },
    };
  }

  if (action.includes("fx") && action.includes("button")) {
    return {
      ...previous,
      mixer: {
        ...previous.mixer,
        fxOn: buttonOn,
      },
    };
  }

  return previous;
}

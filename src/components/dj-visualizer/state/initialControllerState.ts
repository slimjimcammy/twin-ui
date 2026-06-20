import type { ControllerState, DeckVisualState, MixerChannelState } from "../types/controller";

const createDeckState = (): DeckVisualState => ({
  playing: false,
  cue: false,
  sync: false,
  shift: false,
  tempo: 50,
  jogRotation: 0,
  pads: [false, false, false, false, false, false, false, false],
  loopIn: false,
  loopOut: false,
  loopExit: false,
});

const createChannelState = (): MixerChannelState => ({
  trim: 50,
  high: 50,
  mid: 50,
  low: 50,
  filter: 50,
  volume: 72,
  cue: false,
});

export const initialControllerState: ControllerState = {
  deck1: createDeckState(),
  deck2: createDeckState(),
  mixer: {
    channel1: createChannelState(),
    channel2: createChannelState(),
    crossfader: 50,
    master: 65,
    headphones: 58,
    fxLevel: 50,
    fxSelect: false,
    fxOn: false,
  },
};

export type DeckSide = "LEFT" | "RIGHT";
export type DeckId = "deck1" | "deck2";
export type ChannelId = "channel1" | "channel2";

export type MidiLogEvent = {
  timestamp: string;
  action?: string;
  midi?: string;
  value: number;
};

export type DeckVisualState = {
  playing: boolean;
  cue: boolean;
  sync: boolean;
  shift: boolean;
  tempo: number;
  jogRotation: number;
  pads: boolean[];
  loopIn: boolean;
  loopOut: boolean;
  loopExit: boolean;
};

export type MixerChannelState = {
  trim: number;
  high: number;
  mid: number;
  low: number;
  filter: number;
  volume: number;
  cue: boolean;
};

export type MixerState = {
  channel1: MixerChannelState;
  channel2: MixerChannelState;
  crossfader: number;
  master: number;
  headphones: number;
  fxLevel: number;
  fxSelect: boolean;
  fxOn: boolean;
};

export type ControllerState = {
  deck1: DeckVisualState;
  deck2: DeckVisualState;
  mixer: MixerState;
};

export type ActiveControlId =
  | "deck1.tempo"
  | "deck2.tempo"
  | "deck1.jog"
  | "deck2.jog"
  | "channel1.trim"
  | "channel1.high"
  | "channel1.mid"
  | "channel1.low"
  | "channel1.filter"
  | "channel1.volume"
  | "channel2.trim"
  | "channel2.high"
  | "channel2.mid"
  | "channel2.low"
  | "channel2.filter"
  | "channel2.volume"
  | "mixer.crossfader"
  | "mixer.master"
  | "mixer.headphones"
  | "mixer.fxLevel";

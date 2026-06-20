import { DJDeckVisualizer } from "../components/dj-visualizer";
import midiLog from "../components/dj-visualizer/data/midiLog.json";
import type { MidiLogEvent } from "../components/dj-visualizer";

export default function TestVisualizer() {
  return <DJDeckVisualizer midiLog={midiLog as MidiLogEvent[]} speed={1} />;
}

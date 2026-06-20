import FLX4Controller from "./components/layouts/FLX4Controller";
import type { MidiLogEvent } from "./types/controller";
import "./styles/flx4.css";

type DJDeckVisualizerProps = {
  midiLog: MidiLogEvent[];
  speed?: number;
};

export default function DJDeckVisualizer({
  midiLog,
  speed = 1,
}: DJDeckVisualizerProps) {
  return <FLX4Controller events={midiLog} speed={speed} />;
}

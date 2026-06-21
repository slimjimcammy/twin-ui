import FLX4Controller from "./components/layouts/FLX4Controller";
import type { MidiLogEvent } from "./types/controller";
import "./styles/flx4.css";

type DJDeckVisualizerProps = {
  midiLog: MidiLogEvent[];
  speed?: number;
  className?: string;
};

export default function DJDeckVisualizer({
  midiLog,
  speed = 1,
  className = "",
}: DJDeckVisualizerProps) {
  return (
    <div className={`dj-visualizer-shell ${className}`}>
      <FLX4Controller events={midiLog} speed={speed} />
    </div>
  );
}

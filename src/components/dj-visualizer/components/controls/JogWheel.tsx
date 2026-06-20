import { useRef, useState } from "react";
import type { DeckSide } from "../../types/deck";

type JogWheelProps = {
  side: DeckSide;
  active: boolean;
  externalRotation?: number;
};

export default function JogWheel({
  side,
  active,
  externalRotation = 0,
}: JogWheelProps) {
  const [manualRotation, setManualRotation] = useState(0);
  const lastX = useRef(0);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    lastX.current = event.clientX;
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;

    const deltaX = event.clientX - lastX.current;
    lastX.current = event.clientX;

    setManualRotation((current) => current + deltaX * 1.5);
  };

  return (
    <div
      className={`jog-wheel ${active ? "active" : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
    >
      <div
        className="jog-outer"
        style={{ transform: `rotate(${externalRotation + manualRotation}deg)` }}
      >
        <div className="jog-center">
          <span>{side === "LEFT" ? "1" : "2"}</span>
        </div>
      </div>
    </div>
  );
}

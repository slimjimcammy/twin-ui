import { useCallback, useRef, useState } from "react";
import type { KnobProps } from "../../types/deck";
import { clamp, mapRange } from "../../utils/range";

export default function Knob({
  label,
  value,
  min = 0,
  max = 100,
  onChange,
  size = "md",
  active = false,
}: KnobProps) {
  const [isDragging, setIsDragging] = useState(false);
  const startY = useRef(0);
  const startValue = useRef(value);

  const angle = mapRange(value, min, max, -135, 135);

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.currentTarget.setPointerCapture(event.pointerId);
      startY.current = event.clientY;
      startValue.current = value;
      setIsDragging(true);
    },
    [value]
  );

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;

      const deltaY = startY.current - event.clientY;
      const sensitivity = (max - min) / 150;

      onChange(clamp(startValue.current + deltaY * sensitivity, min, max));
    },
    [max, min, onChange]
  );

  const stopDrag = useCallback(() => {
    setIsDragging(false);
  }, []);

  return (
    <div className="knob-block">
      <div
        className={`knob ${size === "sm" ? "knob-sm" : ""} ${
          isDragging || active ? "knob-glow" : ""
        }`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stopDrag}
        onPointerCancel={stopDrag}
        onLostPointerCapture={stopDrag}
        role="slider"
        aria-label={label}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={Math.round(value)}
        tabIndex={0}
      >
        <div className="knob-face" style={{ transform: `rotate(${angle}deg)` }}>
          <span className="knob-indicator" />
        </div>
      </div>

      <div className="control-label">{label}</div>
    </div>
  );
}

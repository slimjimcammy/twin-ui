import { useEffect, useRef, useState } from "react";
import type {
  ActiveControlId,
  ControllerState,
  MidiLogEvent,
} from "../types/controller";
import { applyMidiEvent } from "../utils/applyMidiEvent";
import { getActiveControlId } from "../utils/getActiveControlId";
import { initialControllerState } from "../state/initialControllerState";

type UseMidiPlaybackArgs = {
  events: MidiLogEvent[];
  speed?: number;
};

export function useMidiPlayback({ events, speed = 1 }: UseMidiPlaybackArgs) {
  const [controllerState, setControllerState] = useState<ControllerState>(
    initialControllerState
  );

  const [isPlayingLog, setIsPlayingLog] = useState(false);
  const timersRef = useRef<number[]>([]);

  const clearTimers = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  };


  const [activeControlIds, setActiveControlIds] = useState<Set<ActiveControlId>>(
    new Set()
  );

  const reset = () => {
    clearTimers();
    setIsPlayingLog(false);
    setControllerState(initialControllerState);
    setActiveControlIds(new Set());
  };


  const play = () => {
    clearTimers();

    if (events.length === 0) return;

    setIsPlayingLog(true);
    setControllerState(initialControllerState);

    const sortedEvents = [...events].sort(
      (a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );

    const startTime = new Date(sortedEvents[0].timestamp).getTime();

    sortedEvents.forEach((event) => {
      const eventTime = new Date(event.timestamp).getTime();
      const delayMs = Math.max(0, (eventTime - startTime) / speed);

      const timer = window.setTimeout(() => {
        const activeControlId = getActiveControlId(event);

        if (activeControlId) {
          setActiveControlIds((current) => {
            const next = new Set(current);
            next.add(activeControlId);
            return next;
          });

          window.setTimeout(() => {
            setActiveControlIds((current) => {
              const next = new Set(current);
              next.delete(activeControlId);
              return next;
            });
          }, 180);
        }

        setControllerState((current) => applyMidiEvent(current, event));
      }, delayMs);

      timersRef.current.push(timer);
    });

    const lastTime = new Date(sortedEvents[sortedEvents.length - 1].timestamp).getTime();
    const totalDelayMs = Math.max(0, (lastTime - startTime) / speed);

    const endTimer = window.setTimeout(() => {
      setIsPlayingLog(false);
    }, totalDelayMs + 100);

    timersRef.current.push(endTimer);
  };

  useEffect(() => {
    return () => clearTimers();
  }, []);

  return {
    controllerState,
    setControllerState,
    activeControlIds,
    isPlayingLog,
    play,
    reset,
  };
}

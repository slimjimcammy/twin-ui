import { useState } from "react";
import { cn } from "../cn";

interface SeekBarProps {
  className?: string;
}

export function SeekBar({ className }: SeekBarProps) {
  const [progress, setProgress] = useState(0);
  const totalDuration = 30; // Assuming a total duration of 3:45 (225 seconds)

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget;
    const clickPosition = e.clientX - bar.getBoundingClientRect().left;
    const newProgress = (clickPosition / bar.offsetWidth) * 100;
    setProgress(newProgress);
  };

  const currentTime = (progress / 100) * totalDuration;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60)
    .toString()
    .padStart(2, "0");

  return (
    <div className={cn("w-full flex items-center gap-4 px-4", className)}>
      <span className="text-xs text-gray-400">
        {minutes}:{seconds}
      </span>
      <div
        className="w-full h-1 bg-gray-700 rounded-full cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="h-full bg-white rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="text-xs text-gray-400">0:30</span>
    </div>
  );
}

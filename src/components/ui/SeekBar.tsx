
import { cn } from "../cn";

interface SeekBarProps {
  className?: string;
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
}

export function SeekBar({ className, currentTime, duration, onSeek}: SeekBarProps) {

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = e.currentTarget;
    const clickPosition = e.clientX - bar.getBoundingClientRect().left;
    const percent = clickPosition / bar.offsetWidth;
    const newTime = percent * duration;
    onSeek(newTime);
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;
  
  
  const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

  return (
    <div className={cn("w-full flex items-center gap-4 px-4", className)}>
      <span className="text-xs text-gray-400">
        {formatTime(currentTime)}
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
      <span className="text-xs text-gray-400">{formatTime(duration)}</span>
    </div>
  );
}

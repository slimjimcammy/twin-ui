import { useState } from "react";
import { Heart } from "lucide-react";
import Button from "./Button";
import type { ButtonProps } from "./Button";


interface LikeButtonProps extends Omit<ButtonProps, "children"> {}

export default function LikeButton({
  variant,
  size,
  shape,
  className,
  ...props
}: LikeButtonProps) {
  const [liked, setLiked] = useState(false);

  return (
    <Button
      {...props}
      className={`flex items-center justify-center ${className ?? ""}`}
      size={size}
      shape={shape ?? "circle"}
      variant={liked ? "taro" : variant ?? "default"}
      onClick={() => setLiked(!liked)}
      aria-label={liked ? "Unlike" : "Like"}
    >
      <Heart
        className={`w-4 h-4 transition-transform duration-150 ${
          liked ? "fill-red-500 stroke-red-500 scale-110" : ""
        }`}
      />
    </Button>
  );
}

// import { useState } from "react";
// import { Heart, Play, Pause } from "lucide-react";
// import Button from "./Button";
// import type { ButtonProps } from "./Button";

// type IconType = "heart" | "play";

// interface LikeButtonProps extends Omit<ButtonProps, "children"> {
//     iconType?: IconType;
// }

// export default function LikeButton({
//   variant,
//   size,
//   shape,
//   className,
//   iconType = "heart",
//   ...props
// }: LikeButtonProps) {
//   const [liked, setLiked] = useState(false);

  
//   const iconClass = (() => {
//     switch (iconType) {
//       case "heart":
//         return `w-4 h-4 transition-transform duration-150 ${
//           liked ? "fill-red-500 stroke-red-500 scale-110" : ""
//         }`;
//       case "play":
//         return "w-4 h-4 transition-transform duration-150 fill-black";
//       default:
//         return "w-4 h-4";
//     }
//   })();

//   const IconComponent = iconType === "heart" ? Heart : liked ? Pause : Play;
  
//   return (
//     <Button
//       {...props}
//       className={`flex items-center justify-center ${className ?? ""}`}
//       size={size}
//       shape={shape ?? "circle"}
//       variant={liked ? "default" : variant ?? "default"}
//       onClick={() => setLiked(!liked)}
//       aria-label={liked ? "Unlike" : "Like"}
//     >
//       <IconComponent className={iconClass}/>
//     </Button>
//   );
// }

import React from "react";
import { Icon } from "../components/ui/Icon";

export function PlayIcon({ color = "currentColor", size = 24, ...props }) {
  return (
    <Icon color={color} size={size} viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M8 5v14l11-7z"></path>
    </Icon>
  );
}

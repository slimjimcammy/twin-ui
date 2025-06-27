import React from "react";
import { Icon } from "../components/ui/Icon";

export function PauseIcon({ color = "currentColor", size = 24, ...props }) {
  return (
    <Icon color={color} size={size} viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
    </Icon>
  );
}

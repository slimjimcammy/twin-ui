import React from "react";
import { Icon } from "../components/ui/Icon";

export function ShareIcon({ color = "currentColor", size = 24, ...props }) {
  return (
    <Icon color={color} size={size} viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M14 5v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7zm2 4.83L18.17 12L16 14.17V12.9h-2c-2.07 0-3.93.38-5.66.95c1.4-1.39 3.2-2.48 5.94-2.85l1.72-.27z"
      />
    </Icon>
  );
}

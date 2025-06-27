import React from "react";
import { Icon } from "../components/ui/Icon";

export function CommentIcon({ color = "currentColor", size = 24, ...props }) {
  return (
    <Icon color={color} size={size} viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12z"
      />
    </Icon>
  );
}

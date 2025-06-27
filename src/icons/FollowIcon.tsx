import React from "react";
import { Icon } from "../components/ui/Icon";

export function FollowIcon({
  color = "#F5F6FA",
  size = 24,
  ...props
}: {
  color?: string;
  size?: number;
  [key: string]: any;
}) {
  return (
    <Icon color={color} size={size} viewBox="0 -960 960 960" {...props}>
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm240-40 240-160-240-160v320ZM160-680v-80h640v80H160Zm120-120v-80h400v80H280ZM160-160v-400 400Z"
        fill="currentColor"
      />
    </Icon>
  );
}

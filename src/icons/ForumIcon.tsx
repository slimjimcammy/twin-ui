import React from "react";
import { Icon } from "../components/ui/Icon";

export function ForumIcon({ color = "currentColor", size = 24, ...props }) {
  return (
    <Icon color={color} size={size} viewBox="0 -960 960 960" {...props}>
      <path
        d="M880-80 720-240H320q-33 0-56.5-23.5T240-320v-40h440q33 0 56.5-23.5T760-440v-280h40q33 0 56.5 23.5T880-640v560ZM160-473l47-47h393v-280H160v327ZM80-280v-520q0-33 23.5-56.5T160-880h440q33 0 56.5 23.5T680-800v280q0 33-23.5 56.5T600-440H240L80-280Zm80-240v-280 280Z"
        fill="currentColor"
      />
    </Icon>
  );
}

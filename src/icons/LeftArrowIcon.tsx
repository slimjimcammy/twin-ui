import { Icon } from "../components/ui/Icon";

export function LeftArrowIcon({ color = "currentColor", size = 24, ...props }) {
  return (
    <Icon color={color} size={size} viewBox="0 -960 960 960" {...props}>
      <path
        d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"
        fill="currentColor"
      />
    </Icon>
  );
}

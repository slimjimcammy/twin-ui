import { Icon } from "../components/ui/Icon";

export function RightArrowIcon({
  color = "currentColor",
  size = 24,
  ...props
}) {
  return (
    <Icon color={color} size={size} viewBox="0 -960 960 960" {...props}>
      <path
        d="m560-240-56-58 142-142H160v-80h486L504-662l56-58 240 240-240 240Z"
        fill="currentColor"
      />
    </Icon>
  );
}

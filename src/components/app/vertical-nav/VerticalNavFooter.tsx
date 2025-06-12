import { cn } from "../../cn";
import VerticalNavItem from "./VerticalNavItem";

export interface VerticalNavFooterProps {
  children: React.ReactNode;
}

export default function VerticalNavFooter({
  children,
}: VerticalNavFooterProps) {
  return (
    <VerticalNavItem className={cn("mt-auto")}>{children}</VerticalNavItem>
  );
}

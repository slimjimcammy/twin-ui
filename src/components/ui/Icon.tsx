import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
  children: React.ReactNode;
}

export function Icon({
  color = "currentColor",
  size = 24,
  children,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      viewBox={`0 0 ${size} ${size}`}
      style={{ color }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {children}
    </svg>
  );
}

import { Flex } from "../layout/Flex";
import { Text } from "./Text";
import Button from "./Button";
import { useRef } from "react";

export interface FileInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "onClick"
  > {
  label?: string;
  helperText?: string;
  buttonProps?: {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
  };
  valueLabel?: string;
  className?: string;
}

export default function FileInput({
  className,
  label,
  helperText,
  buttonProps,
  valueLabel,
  ...inputProps
}: FileInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <Flex direction="column" gap="sm" className={className}>
      {label && <Text variant="caption">{label}</Text>}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        {...inputProps}
      />
      <Button 
        type="button"
        onClick={() =>  {
          console.log("clicked");
          fileInputRef.current?.click() }} {...buttonProps} >
        Choose File
      </Button>

      {valueLabel && (
        <Text variant="caption" color="dimmed">
          {valueLabel}
        </Text>
      )}

      {helperText && (
        <Text variant="p" color="default">
          {helperText}
        </Text>
      )}
    </Flex>
  );
}

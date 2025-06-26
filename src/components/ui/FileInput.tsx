import { Flex } from "../layout/Flex";
import { Text } from "./Text";
import Button, { type ButtonProps } from "./Button";
import { useRef } from "react";

export interface FileInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type" | "onClick"
  > {
  label?: string;
  helperText?: string;
  buttonProps?: ButtonProps;
  className?: string;
}

export default function FileInput({
  className,
  label,
  helperText,
  buttonProps,
  ...inputProps
}: FileInputProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <Flex direction="column" gap="sm" className={className}>
      {label && <Text variant="h6">{label}</Text>}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        {...inputProps}
      />
      <Button onClick={() => fileInputRef.current?.click()} {...buttonProps}>
        Choose File
      </Button>
      {helperText && (
        <Text variant="p" color="default">
          {helperText}
        </Text>
      )}
    </Flex>
  );
}

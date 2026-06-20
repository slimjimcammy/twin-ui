type RoundTransportButtonProps = {
  label: string;
  active?: boolean;
  variant: "cue" | "play";
  onClick: () => void;
};

export default function RoundTransportButton({
  label,
  active,
  variant,
  onClick,
}: RoundTransportButtonProps) {
  return (
    <button
      className={`round-transport ${variant} ${active ? "transport-active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

type PadProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

export default function Pad({ label, active, onClick }: PadProps) {
  return (
    <button className={`pad ${active ? "pad-active" : ""}`} onClick={onClick}>
      {label}
    </button>
  );
}

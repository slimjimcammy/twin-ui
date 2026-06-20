import Knob from "../controls/Knob";

type FXSectionProps = {
  fxLevel: number;
  fxSelect: boolean;
  fxOn: boolean;
  onFxLevelChange: (value: number) => void;
  onFxSelectChange: (value: boolean) => void;
  onFxOnChange: (value: boolean) => void;
  fxActive?: boolean;
};

export default function FXSection({
  fxLevel,
  fxSelect,
  fxOn,
  onFxLevelChange,
  onFxSelectChange,
  onFxOnChange,
  fxActive = false,
}: FXSectionProps) {
  return (
    <div className="fx-section">
      <Knob
        label="FX LEVEL"
        value={fxLevel}
        onChange={onFxLevelChange}
        size="sm"
        active={fxActive}
      />

      <div className="fx-buttons">
        <button
          className={`fx-button ${fxSelect ? "fx-button-active" : ""}`}
          onClick={() => onFxSelectChange(!fxSelect)}
        >
          FX SEL
        </button>

        <button
          className={`fx-button ${fxOn ? "fx-on" : ""}`}
          onClick={() => onFxOnChange(!fxOn)}
        >
          FX ON
        </button>
      </div>
    </div>
  );
}

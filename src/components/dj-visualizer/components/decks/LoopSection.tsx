type LoopSectionProps = {
  loopIn: boolean;
  loopOut: boolean;
  loopExit: boolean;
  onLoopInChange: (value: boolean) => void;
  onLoopOutChange: (value: boolean) => void;
  onLoopExitChange: (value: boolean) => void;
};

export default function LoopSection({
  loopIn,
  loopOut,
  loopExit,
  onLoopInChange,
  onLoopOutChange,
  onLoopExitChange,
}: LoopSectionProps) {
  return (
    <div className="loop-section">
      <div className="loop-control">
        <div className="loop-label">IN</div>
        <button
          className={`loop-button loop-orange ${loopIn ? "loop-active" : ""}`}
          onClick={() => onLoopInChange(!loopIn)}
          aria-label="Loop in"
        />
        <div className="loop-sub-label">IN ADJ</div>
      </div>

      <div className="loop-link" />

      <div className="loop-control">
        <div className="loop-label">OUT</div>
        <button
          className={`loop-button loop-orange ${loopOut ? "loop-active" : ""}`}
          onClick={() => onLoopOutChange(!loopOut)}
          aria-label="Loop out"
        />
        <div className="loop-sub-label">OUT ADJ</div>
      </div>

      <div className="loop-link" />

      <div className="loop-control loop-exit-control">
        <div className="loop-label">4 BEAT / EXIT</div>
        <button
          className={`loop-button loop-exit ${loopExit ? "loop-exit-active" : ""}`}
          onClick={() => onLoopExitChange(!loopExit)}
          aria-label="Loop exit"
        />
        <div className="loop-sub-label">ACTIVE</div>
      </div>
    </div>
  );
}

import React from "react";
import { minutesToDuration } from "../utils/duration";

const Break = ({ breakDuration, setBreakDuration, isTimerRunning }) => {
  const handleAddition = () => setBreakDuration(Math.min(15, breakDuration + 1));
  const handleSubtraction = () => setBreakDuration(Math.max(1, breakDuration - 1));

  return (
    <div className="col">
      <div className="float-right">
        <div className="input-group input-group-lg mb-2">
          <span className="input-group-text" data-testid="duration-break">
            Break Duration: {minutesToDuration(breakDuration)}
          </span>
          <div className="input-group-append">
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="decrease-break"
              onClick={handleSubtraction}
              disabled={breakDuration === 1 || isTimerRunning}
            >
              <span className="oi oi-minus" />
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-testid="increase-break"
              onClick={handleAddition}
              disabled={breakDuration === 15 || isTimerRunning}
            >
              <span className="oi oi-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Break;

import React from "react";
import { minutesToDuration } from "../utils/duration";

const Focus = ({ focusDuration, setFocusDuration, isTimerRunning }) => {
  const handleAddition = () => setFocusDuration(Math.min(60, focusDuration + 5));
  const handleSubtraction = () => setFocusDuration(Math.max(5, focusDuration - 5));
  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          Focus Duration: {minutesToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={handleSubtraction}
            disabled={focusDuration === 5 || isTimerRunning}
          >
            <span className="oi oi-minus" />
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={handleAddition}
            disabled={focusDuration === 60 || isTimerRunning}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Focus;

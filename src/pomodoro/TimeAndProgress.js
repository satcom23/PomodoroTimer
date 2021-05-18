import React from "react";
import { secondsToDuration,minutesToDuration } from "../utils/duration";

const TimeAndProgress = ({ session, focusDuration, breakDuration, isTimerRunning }) => {
  let remaining = session?.label === "Focusing" ? focusDuration : breakDuration;
  const result = 100 - (session?.timeRemaining / (remaining * 60)) * 100;
  if(!session){
    return(null)
  }
  return (
    <>
      <div className="row mb-2">
        <div className="col">
          <h2 data-testid="session-title">
            {session?.label} for{" "}
            {minutesToDuration(session?.label === "Focusing" ? focusDuration : breakDuration)}{" "}
            minutes
          </h2>
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(session?.timeRemaining)} remaining
          </p>
          {(!isTimerRunning) ?<h3>PAUSED</h3> :null }
        </div>
      </div>
      <div className="row mb-2">
        <div className="col">
          <div className="progress" style={{ height: "20px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
              aria-valuenow={result}
              style={{ width: `${result}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeAndProgress;

import React, { useState } from "react";
import PlayPauseButtons from "./PlayPauseButtons";
import useInterval from "../utils/useInterval";
import TimeAndProgress from "./TimeAndProgress";
import Focus from "./Focus";
import Break from "./Break";

function nextTick(prevState) {
  const timeRemaining = Math.max(0, prevState.timeRemaining - 1);
  return {
    ...prevState,
    timeRemaining,
  };
}
function nextSession(focusDuration, breakDuration) {
  return (currentSession) => {
    if (currentSession.label === "Focusing") {
      return {
        label: "On Break",
        timeRemaining: breakDuration * 60,
      };
    }
    return {
      label: "Focusing",
      timeRemaining: focusDuration * 60,
    };
  };
}

function Pomodoro() {
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [session, setSession] = useState(null);
  const [focusDuration, setFocusDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  useInterval(
    () => {
      if (session.timeRemaining === 0) {
        new Audio("https://bigsoundbank.com/UPLOAD/mp3/1482.mp3").play();
        return setSession(nextSession(focusDuration, breakDuration));
      }
      return setSession(nextTick);
    },
    isTimerRunning ? 1000 : null
  );

  return (
    <div className="pomodoro">
      <div className="row">
        <Focus
          isTimerRunning={isTimerRunning}
          focusDuration={focusDuration}
          setFocusDuration={setFocusDuration}
        />
        <Break
          isTimerRunning={isTimerRunning}
          breakDuration={breakDuration}
          setBreakDuration={setBreakDuration}
        />
      </div>
      <PlayPauseButtons
        focusDuration={focusDuration}
        setFocusDuration={setFocusDuration}
        breakDuration={breakDuration}
        setBreakDuration={setBreakDuration}
        isTimerRunning={isTimerRunning}
        setIsTimerRunning={setIsTimerRunning}
        setSession={setSession}
        session={session}
      />
      <TimeAndProgress
        session={session}
        focusDuration={focusDuration}
        breakDuration={breakDuration}
        isTimerRunning={isTimerRunning}
      />
    </div>
  );
}
export default Pomodoro;

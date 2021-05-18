import React from 'react';
// focus
const TimerSet = ({ isFocusTimer = true, timerValue }) => {
  const handleButtonClick = (event) => {
    const focusTimer = event.target.getAttribute('data-isFocusTimer');
    const behavior = event.target.getAttribute('data-behavior');
    let maximumTimer = focusTimer ? 60 : 15;
    let minimumTimer = focusTimer ? 5 : 1;
    // if databehavior is === 'increase', increase value up to maximum(60) else is ==="decrease" value up to minimum
    if (behavior === 'increase') {
      if (timerValue < maximumTimer) {
        timerValue++;
      }
    }
    if (behavior === 'decrease') {
      if (timerValue > minimumTimer) {
        timerValue--;
      }
    }
 } };
  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* TODO: Update this text to display the current focus session duration */}
          {isFocusTimer ? 'Focus' : 'Break'} Duration: {timerValue}:00
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            data-behavior="decrease"
            data-isFocusTimer={isFocusTimer}
            onClick={handleButtonClick}
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            data-behavior="increase"
            data-isFocusTimer={isFocusTimer}
            onClick={handleButtonClick}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
export default TimerSet;
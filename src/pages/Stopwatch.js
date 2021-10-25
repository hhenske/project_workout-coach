import React, { useState } from "react";



const Stopwatch = () => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);
  const [stopTime, setStopTime] = React.useState();

  React.useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!timerOn) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  const saveTimeOnStopHandler = (event) => {
    setStopTime(event.target.value);

  }



  return (
    <div style={{"font-size":"40px"}}>
        <br /><br />
    <div className='stopwatch-card' className="row mx-auto border border-info rounded-top text-center font-weight-bold">
      <h2>Timer</h2>
      <div id="display">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>

      <div id="buttons">
        {!timerOn && time === 0 && (
          <button onClick={() => setTimerOn(true)}>Start</button>
        )}
        {timerOn && <button onClick={() => setTimerOn(false)} onClick={saveTimeOnStopHandler}>Stop</button>}
          {/* Here, I need to save the time and push it to the log entry for 
          the current workout ... variable name is time */}

        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        
        
        )}
      </div>
    </div>
    </div>
  );
};

export default Stopwatch;
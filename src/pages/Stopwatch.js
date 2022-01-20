import { ScrollSpy } from "bootstrap";
import React, { Fragment } from "react";
import { NavLink } from 'react-router-dom';
import SuggestedWorkout from "./SuggestedWorkout";


const Stopwatch = (props) => {
  const [time, setTime] = React.useState(0);
  const [timerOn, setTimerOn] = React.useState(false);

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


  return (
    <Fragment>
    <div style={{"font-size":"40px"}}>
        <br /><br />
    <div className='stopwatch-card' className="row mx-auto border border-gray rounded-top rounded-bottom text-center font-weight-bold">
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
        {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
        {setTime}
        {/* {console.log(time)} */}
        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
        {!timerOn && time > 0 && (
          <button onClick={() => setTimerOn(true)}>Resume</button>
        )}
      </div>
    </div>
    <div>
      {/* <CoreSuggestion />
      <CoreSelector /> */}
    </div>
    <NavLink to="/Log" type="button" className="btn btn-secondary brn-lg btn-block active" role="button" aria-pressed="true" time={time}>
    Log Workout</NavLink>
    </div>
    <div>
    {/* <SuggestedWorkout /> */}
    {/* (that displays the buttons only not the suggested workout) */}
    </div>
    
    </Fragment>
  );
};

export default Stopwatch;

// I would like the time to be in a fixed position so it stays even when user ScrollS
// behind that / under will be the exercise suggestion again so user can see what they are supposed to Complete
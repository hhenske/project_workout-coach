import React, { Fragment, useState } from 'react';
import classes from './form.module.css';
import SuggestedWorkout from './SuggestedWorkout';

const Form = () => {

  const categoryChoiceHandler = (event) => {
    const [enteredCategory, setEnteredCategory] = useState('');
    setEnteredCategory(event.target.value);
    
  };

  const intensityChoiceHandler = (event) => {
    const [enteredIntensity, setEnteredIntensity] = useState('');
    setEnteredIntensity(event.target.value);
    
  };

  const formSubmissionHandler = event => {
    event.preventDefault();
  };

return (
  <Fragment>
    <form onSubmit={formSubmissionHandler}>
      <div className="text-center">
        <br /><br />
        <h2>Let's choose a workout!</h2>
        <br />
        <label><h3>What kind of workout would you like today?</h3>
          <select name = "workoutCategory" onChange={categoryChoiceHandler}>
                        <option value = "">* Choose an activity *</option>
                        <option value="1">Core Exercises</option>
                        <option value="2">Strength Training</option>
                        <option value="3">Cardio Activity</option>
                        <option value="4">Yoga Stretching</option>
            </select></label>
        </div>
        <br />
        <div className="text-center">
        <label><h4>How are you feeling today?</h4>
          <select name = "workoutIntensity" onChange={intensityChoiceHandler}>
                        <option value = "">* Choose one*</option>
                        <option value="1">Great! up for a super hard workout!</option>
                        <option value="2">Fine! Ready to work out!</option>
                        <option value="3">Still tired or sore from last workout</option>
                        <option value="4">Extra-fatigued or sick</option>
            </select></label>
           
          </div>
        </form>
        <div>
          <SuggestedWorkout />
        </div>
  </Fragment>
        
      
)};

export default Form;
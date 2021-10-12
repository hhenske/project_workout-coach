import React, { Fragment, useState } from 'react';
import classes from './form.module.css';
import SuggestedWorkout from './SuggestedWorkout';
import { NavLink } from 'react-router-dom';


const Form = () => {
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredIntensity, setEnteredIntensity] = useState('');

  const categoryChoiceHandler = (event) => {
    setEnteredCategory(event.target.value);
    
  };

  const intensityChoiceHandler = (event) => {
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
          <select name = "workoutCategory" 
            onChange={categoryChoiceHandler}
            >
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
          <select name = "workoutIntensity" 
            onChange={intensityChoiceHandler}
            >
                        <option value = "">* Choose one*</option>
                        <option value="1">Great! up for a super hard workout!</option>
                        <option value="2">Fine! Ready to work out!</option>
                        <option value="3">Still tired or sore from last workout</option>
                        <option value="4">Extra-fatigued or sick</option>
            </select></label>


            {/* This code only appears after form is submitted and it will be a workout suggestion that user can 
            accept or have another suggestion */}
            <div>
              <br /><br />
              <button type ="button" className="btn btn-outline-info">Submit</button>
              <br /><br />
              <SuggestedWorkout />
             
                <NavLink to="Timer" type="button" class="btn btn-info">Yes! This is my workout!</NavLink>
                {/* this button will link to stopwatch page */}
                {' '}
                <NavLink to="Form" button type="button" class="btn btn-info">No, choose another workout
                </NavLink>
                {/* This button will choose a different random workout from users input */}
            </div>
          </div>
        </form>
        {/* <div>
          <SuggestedWorkout />
        </div> */}
  </Fragment>
        
      
)};

export default Form;
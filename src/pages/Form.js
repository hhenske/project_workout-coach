import React, { Fragment, useState } from 'react';

import SuggestedWorkout from './SuggestedWorkout';




const Form = () => {
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredIntensity, setEnteredIntensity] = useState('');
  const [formIsValid, setFormIsValid] = useState(true);


  const categoryChoiceHandler = (event) => {
    setEnteredCategory(event.target.value);
    
  };
  

  const intensityChoiceHandler = (event) => {
    setEnteredIntensity(event.target.value);
    
  };



  const formSubmissionHandler = event => {
    event.preventDefault();

    if (enteredCategory === '' || enteredIntensity === '') {
      setFormIsValid(false);
      return;
    }

    if (enteredCategory != '' && enteredIntensity != '') {
      setFormIsValid(true);
      return;
    }
    
// take these out before 'go time'
    console.log(enteredCategory);
    console.log(enteredIntensity);
    console.log(formIsValid);
   

    // on Submit, we want to ...1) store the entered category for adding to the activity log AND for choosing the workout
                                // 2) randomly choose a workout in the correct category and intensity
    //                          3) make the "How about...." code appear (otherwise, it shouldn't be displayed) (currently it IS displayed 
                                //  because the form is set as valid from start)
    
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
            
            {!formIsValid && alert('Please be to select an option in both fields')}

            
            <div>
              <br /><br />
              <button type ="button" className="btn btn-outline-info" onClick = {formSubmissionHandler}>Submit</button>
              <br /><br />
              
              {formIsValid && <SuggestedWorkout />} 
              {/* this displays at first render because we start with form being valid.... need to NOT display at beginning */}
             
      
            </div>
          </div>
        </form>
        
  </Fragment>
        
      
)};

export default Form;
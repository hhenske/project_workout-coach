import React, { Fragment, useState, useEffect } from 'react';
import SuggestedWorkout from './SuggestedWorkout';

// Don't touch this component.  It is done


const Form = () => {
  const [enteredCategory, setEnteredCategory] = useState('');
  const [enteredIntensity, setEnteredIntensity] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [submitTouched, setSubmitTouched] = useState(false);
  // const [enteredIntensityTouched, setEnteredIntensityTouched] = useState(false);

  let formIsInvalid = !formIsValid  && submitTouched;
  
  useEffect(() => {
    if (formIsInvalid) {
      alert("Please be sure to select an option in both fields")
    }
  } , [submitTouched, formIsInvalid])

  const categoryChoiceHandler = (event) => {
    setEnteredCategory(event.target.value);
    
    
  };
  
  

  const intensityChoiceHandler = (event) => {
    setEnteredIntensity(event.target.value);
    
    
  };

  const formSubmissionHandler = event => {
    event.preventDefault();

    setSubmitTouched(true);
    

    if (enteredCategory === '' || enteredIntensity === '') {
      setFormIsValid(false);
      return;
    }

    if (enteredCategory !== '' && enteredIntensity !== '') {
      setFormIsValid(true);
      return;
    }
    

    // on Submit, we want to ...1) store the entered category for adding to the activity log AND for choosing the workout DONE w/state and sent to Suggestedworkout through props
                                // 2) randomly choose a workout in the correct category and intensity - to be done in SuggestedWorkout component
    //                          3) make the "How about...." code appear (otherwise, it shouldn't be displayed) (DONE)
    
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
            <div>
              <br /><br />
              <button type ="button" className="btn btn-outline-info" onClick = {formSubmissionHandler}>Submit</button>
              <br /><br />
            
              
              
              {formIsValid && <SuggestedWorkout category={enteredCategory} intensity={enteredIntensity}/>} 
              
      
            </div>
          </div>
        </form>
        
  </Fragment>
        
      
)};

export default Form;
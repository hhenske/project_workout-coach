import React from 'react';


const Form = () => {

return (
  <div>
    <form>
      <div>
        <label><h2>What kind of workout would you like today?</h2>
          <select name = "workoutCategory">
                        <option value = "">* Choose an activity *</option>
                        <option value="1">Core Exercises</option>
                        <option value="2">Strength Training</option>
                        <option value="3">Cardio Activity</option>
                        <option value="4">Yoga Stretching</option>
            </select></label>
        </div>
        <div>
        <label><h4>How ar you feeling today?</h4>
          <select name = "workoutIntensity">
                        <option value = "">* Choose one*</option>
                        <option value="1">Great! up for a super hard workout!</option>
                        <option value="2">Fine! Ready to work out!</option>
                        <option value="3">Still tired or sore from last workout</option>
                        <option value="4">fatigued or sick</option>
            </select></label>
           
          </div>
        </form>
      </div>
)};

export default Form;
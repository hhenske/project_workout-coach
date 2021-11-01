
import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CardioSuggestion from './CardioSuggestion';
import StrengthSuggestion from './StrengthSuggestion';
import CoreSuggestion from './CoreSuggestion';
import YogaSuggestion from './YogaSuggestion';



// this component takes the enteredCategory and the enteredIntensity and suggests a workout
const SuggestedWorkout = (props) => {

    const [enteredCategory, setEnteredCategory] = useState('');
    const [enteredIntensity, setEnteredIntensity] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);
    const [submitTouched, setSubmitTouched] = useState(false);

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
        };
       
    };

    
    return (
        <Fragment>
            <h2>How about....</h2>
            <br />
           
            <div>
            {props.category === "3" ? <CardioSuggestion intensity={props.intensity}/> : null}
                
            {props.category === "2" ? <StrengthSuggestion  intensity={props.intensity} /> : null}
                
            {props.category === "1" ? <CoreSuggestion intensity={props.intensity} /> : null}
              
            {props.category === "4" ? <YogaSuggestion intensity={props.intensity} /> : null}

           
                
                
            </div>
            <br /><br />
            <NavLink to="Timer" type="button" className="btn btn-info">Yes! Ready to work out!</NavLink>
                {' '} 
                <NavLink to="Form" type="button" className="btn btn-info" onClick = {formSubmissionHandler}>
                    No, choose another workout</NavLink>
               
                {/* I would like this button to rerun the submit and suggested workout so a new randomized workout renders*/}
               {/* it's working now, but only one time AND I re-did the submit handler because I couldn't pass it down*/}
        </Fragment>

    );
};

export default SuggestedWorkout;
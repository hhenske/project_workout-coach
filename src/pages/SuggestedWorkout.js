import axios from 'axios';
import React, { Component, Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CardioSuggestion from './CardioSuggestion';
import StrengthSuggestion from './StrengthSuggestion';
import CoreSuggestion from './CoreSuggestion';
import YogaSuggestion from './YogaSuggestion';

// this component takes the enteredCategory and the enteredIntensity and suggests a workout


const SuggestedWorkout = (props) => {
    
      
      
    

    
    // console.log(strengthDataArray)
    // console.log(strengthData);
    // the above works... until I try to put an index. then it is undefined
    // console.log(typeof(strengthDataArray)) always comes out as an object, even though on the API it says it's a JSON array of exercises
    // - it is an object, so I can't use an array method on it
    //  console.log(Math.floor(Math.random() * 1326))
    //  the above works to generate a random number which will be the index.  I would like to generate 6
    // for easy/med and 8 for med/hard strength workouts
    // randomIndex = Math.floor(Math.random() * 1326) 
    // console.log(strengthData[randomIndex]) 
    // doesn't work because strengthData is undefined right now....even though we did it above with [4]
    // console.log(randomIndex)
    // the above works!
    // console.log(Object.values(strengthData.data))
  



    return (
        <Fragment>
            <h2>How about....</h2>
            <br />
           
            <div>
            {props.category == 3 ? <CardioSuggestion /> : null}
                
            {props.category == 2 ? <StrengthSuggestion /> : null}
                
            {props.category == 1 ? <CoreSuggestion /> : null}
              
            {props.category == 4 ? <YogaSuggestion /> : null}

            {/* {props.category == 4 && props.intensity == 2 ? <p>Yoga Workout</p> : null}
            {props.category == 4 && props.intensity > 2 ? <p>Restaurative Yoga</p> : null} */}


                {/* <p>{props.category}</p>
                <p>{props.intensity}</p> */}
                
                
            </div>
            <br /><br />
            <NavLink to="Timer" type="button" className="btn btn-info">Yes! Ready to work out!</NavLink>
               
                {' '}
                <NavLink to="Form" type="button" className="btn btn-info">No, choose another workout
                </NavLink>

        </Fragment>

    );
};

export default SuggestedWorkout;
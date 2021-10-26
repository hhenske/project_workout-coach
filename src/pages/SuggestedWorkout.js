
import React, { Component, Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import CardioSuggestion from './CardioSuggestion';
import StrengthSuggestion from './StrengthSuggestion';
import CoreSuggestion from './CoreSuggestion';
import YogaSuggestion from './YogaSuggestion';


// this component takes the enteredCategory and the enteredIntensity and suggests a workout


const SuggestedWorkout = (props) => {


    return (
        <Fragment>
            <h2>How about....</h2>
            <br />
           
            <div>
            {props.category == 3 ? <CardioSuggestion intensity={props.intensity}/> : null}
                
            {props.category == 2 ? <StrengthSuggestion  intensity={props.intensity} /> : null}
                
            {props.category == 1 ? <CoreSuggestion intensity={props.intensity} /> : null}
              
            {props.category == 4 ? <YogaSuggestion intensity={props.intensity} /> : null}

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
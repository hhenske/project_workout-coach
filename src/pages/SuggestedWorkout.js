import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import CardioWorkout from '../components/CardioWorkout';
import Form from './Form';



var axios = require("axios").default;

var options = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    'x-rapidapi-key': '226f1f3dc3msh4967f81ea387d7cp16bcfdjsn289968c31ba3'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data[4].name, response.data[4].gifUrl, response.data[4].bodyPart);
    // consolelog works meaning the address is right, the key is right and this is how to access the things I need
    // but it DOESN'T work in the function, where I need it.  Do I need to store it in a variable? or pass props?

    let strengthData = response.data
    // cannot access this in the component function either?
    // does this whole thing need to be inside the Component... or should I create a new component and pass in props?

}).catch(function (error) {
	console.error(error);
});



const SuggestedWorkout = (props) => {



    if (props.category === 3 && props.intensity === 1) {
        // randomly choose a workout from the hardCardio Object, located in DUMMY_DATA
        // suggestion =
    }

    if (props.category === 3 && props.intesity === 2) {
        // randomly choose a workout from the medCardio Object, located in DUMMY_DATA
        // suggestion =
    }

    if (props.category === 3 && props.intensity > 2) {
        // randomly choose a workout from the easyCardio Object, locatin in DUMMY_DATA)
        // suggestion = 
    }

    if (props.category === 2 && props.intensity === 1) {
    //    strength exersize routine
        // suggestion =
    }

    if (props.category === 2 && props.intesity === 2) {
        // strength exersize routine
        // suggestion =
    }

    if (props.category === 1 && props.intesity <= 2) {
        // core exersize routine
        // suggestion =
    }

    if (props.category === 1 && props.intensity > 2) {
        // core exersize routine
        // suggestion = 
    }  

    if (props.category === 4 && props.intesity <= 2) {
    //    yoga routine
        // suggestion =
    }

    if (props.category === 4 && props.intensity > 2) {
        // yoga routine
        // suggestion = 
    }
    




    return (
        <Fragment>
            <h2>How about....</h2>
            <br />
            {/* This code will be dynamic...it'll be the randomly chosen workout from the category the user chose on the form */}
            <div>
                <p>{props.category}</p>
                <p>{CardioWorkout[1]}</p>
                <p>{response.data[4].name, response.data[4].gifUrl, response.data[4].bodyPart}</p>
                <p>{props.intensity}</p>
                
                {/* <p>Exercise: {strengthData.data[4].name} Photo: {strengthData.data[4].gifUrl} Target Muscle: {strengthData.data[4].bodyPart}</p>
               
                 */}
            </div>
            <br /><br />
            <NavLink to="Timer" type="button" class="btn btn-info">Yes! Ready to work out!</NavLink>
               
                {' '}
                <NavLink to="Form" button type="button" class="btn btn-info">No, choose another workout
                </NavLink>

        </Fragment>

    );
};

export default SuggestedWorkout;
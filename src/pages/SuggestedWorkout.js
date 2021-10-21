import React, { Component, Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';


// this component takes the enteredCategory and the enteredIntensity and suggests a workout


const SuggestedWorkout = (props) => {
    const [strengthData, setStrengthData] = useState([]);
    const [cardioData, setCardioData] = useState([]);
    const [yogaData, setYogaData] = useState([]);
    const [absData, setAbsData] = useState([]);

    // // accesses the API for strenth execises:
    // const axios = require("axios").default;
    
    // const options = {
    //     method: 'GET',
    //     url: 'https://exercisedb.p.rapidapi.com/exercises',
    //     headers: {
    //         'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
    //         'x-rapidapi-key': '226f1f3dc3msh4967f81ea387d7cp16bcfdjsn289968c31ba3'
    //     }
    //     };

    // axios.request(options).then(function (response) {
    //     console.log(response.data[4].name, response.data[4].gifUrl, response.data[4].bodyPart);
    //     // console.log works meaning the address is right, the key is right and this is how to access the things I need
    //     // but it DOESN'T work in return, where I need it.  Do I need to store it in a variable? or pass props?
    //     setStrengthData([response]);
    // }).catch(function (error) {
    //     console.error(error);
    // });
    
      
    // data for cardio exercises:

    const easyCardio = [
        {
        id: '101',
        act: 'run',
        type: 'interval',
        intervals: '3 min / 2 min',
        intensity: 'easy'
        },
        {
        id: '102',
        act: 'run',
        type: '20-40 min',
        intervals: 'none',
        intensity: 'easy'
        },
        {
        id: '103',
        act: 'cycling',
        type: '45-75 min',
        intervals: 'none',
        intensity: 'easy'
        },
        {
        id: '104',
        act: 'hike',
        type: '30-75 min',
        intervals: 'none',
        intensity: 'easy'
        },
        {
        id: '105',
        act: 'walk',
        type: '30-75 min',
        intervals: 'none',
        intensity: 'easy',
        },
        {
        id: '106',
        act: 'swim',
        type: '30-60 min',
        intervals: 'none',
        intensity: 'easy'
        }
    ]
    const medCardio = [
        {
            id: '201',
            act: 'run',
            type: 'interval',
            intervals: '5-7 min / 2 min',
            intensity: 'medium'
            },
            {
            id: '202',
            act: 'run',
            type: '30-55 min',
            intervals: 'none',
            intensity: 'medium'
            },
            {
            id: '203',
            act: 'cycling',
            type: '50-90 min',
            intervals: 'none',
            intensity: 'medium'
            },
            {
            id: '204',
            act: 'hike',
            type: '50-90 min',
            intervals: 'none',
            intensity: 'medium'
            },
            {
            id: '205',
            act: 'cycling',
            type: 'interval',
            intervals: 'hills or 4-6 min.',
            intensity: 'medium',
            },
            {
            id: '206',
            act: 'swim',
            type: '40-60 min',
            intervals: 'easy, med-easy, med-hard',
            intensity: 'medium',
            }

    ]
    const hardCardio = [
        {
            id: '301',
            act: 'run',
            type: 'interval',
            intervals: 'timed quarters at race pace',
            intensity: 'hard'
            },
            {
            id: '302',
            act: 'run',
            type: '45-77 min',
            intervals: 'none',
            intensity: 'medium'
            },
            {
            id: '303',
            act: 'cycling',
            type: '70+ min',
            intervals: 'none',
            intensity: 'medium-hard'
            },
            {
            id: '304',
            act: 'hike',
            type: '60-120 min',
            intervals: 'none',
            intensity: 'hilly'
            },
            {
            id: '306',
            act: 'cycling',
            type: 'interval',
            intervals: 'hills or 4-6 min.',
            intensity: 'hard',
            },
            {
            id: '307',
            act: 'swim',
            type: '50-75 min',
            intervals: 'med-easy, medium, med-hard',
            intensity: 'hard',
            }
    ]

    
    
    if (props.category === 3 && props.intensity === 1) {
        // randomly choose a workout from the hardCardio Object,
        // suggestion =
        //random works on arrays, so the array is of objects.... what will be randomized? what will be returned?
        setCardioData(hardCardio.act[Math.floor(Math.random() * hardCardio.length)]);
    }
    console.log('workoutSuggestion')

    if (props.category === 3 && props.intesity === 2) {
        // randomly choose a workout from the medCardio Object, located in DUMMY_DATA
        // suggestion =
        // workoutSuggestion = medCardio[Math.floor(Math.random() * hardCardio.length)];
    }

    if (props.category === 3 && props.intensity > 2) {
        // randomly choose a workout from the easyCardio Object, locatin in DUMMY_DATA)
        // suggestion = 
        // workoutSuggestion = easyCardio[Math.floor(Math.random() * hardCardio.length)];
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
                {/* <p>{workoutSuggestion}</p> */}
                <p>{hardCardio[2]}</p>
                {/* <p>{strengthData[3].name}</p> */}
                <p>cardioData</p>
                <p>{props.intensity}</p>
                
                
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
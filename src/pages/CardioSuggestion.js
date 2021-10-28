import { useState, Fragment } from 'react';

import run from '../images/run.png';
import swim from '../images/swim.png';
import bike from '../images/bike.png';
import hike from '../images/hike.png';
import walk from '../images/walk.png';


const CardioSuggestion = (props) => {

    
    let workoutSuggestion='';

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

    //     // const userChoiceHandler = (props) => {
    //     //     if (props.intensity == 1) {
    //     //        setCardioSuggestion(hardCardio[randomIndex])
    //     //     } cant get that to work
        
    //     // }
    
        
    // // const EasyCardioSuggestion = () => {
    // //     easyCardioIndex = Math.floor(Math.random() * 5)
    // //     easyCardioSuggestion = easyCardio[easyCardioIndex]

    // function randomIndex() {
    //     if (props.intensity > 2) {
            
    let randomIndex= Math.floor(Math.random() * 5);
        if (props.intensity > 2) {
            workoutSuggestion=easyCardio[randomIndex]
        }

        if (props.intensity > 1 && props.intensity < 3) {
            workoutSuggestion=medCardio[randomIndex]
        }

        if (props.intensity < 2) {
            workoutSuggestion=hardCardio[randomIndex]
        }


    //         return randomIndex
    // console.log(props.intensity)
    // console.log(randomIndex)
    // console.log(hardCardio[2].act)
    // console.log(typeof(easyCardio)) (object)
    
    // console logs above all work, meaning I have what I need to make this work
                
    console.log(workoutSuggestion.act)
    
       

        return (
            <Fragment>
            
                <h1>Cardio workout</h1>
                {/* <p>{workoutSuggestion.act}</p> */}
                <table className="table border border-dark table-hover text-center justify-content-center ">
                <thead>
                    <td className="font-weight-bold">{workoutSuggestion.act}</td>
                </thead> 
                <tbody>
                    <tr>{workoutSuggestion.type}</tr>
                    <tr>intervals: {workoutSuggestion.intervals}</tr>
                    <tr>intensity: {workoutSuggestion.intensity}</tr>
                    <tr>{workoutSuggestion.act == 'swim' ? <img src = {swim} />: null}
                        {workoutSuggestion.act == 'run' ? <img src = {run} />: null}
                        {workoutSuggestion.act == 'cycling' ? <img src = {bike} />: null}
                        {workoutSuggestion.act == 'hike' ? <img src = {hike} />: null}
                        {workoutSuggestion.act == 'walk' ? <img src = {walk} />: null} 
                   </tr> 
                    {/* displays all pictures. I just want the one chosen */}
                </tbody>
            </table>
            
            </Fragment>
        )

        }
        

export default CardioSuggestion;   
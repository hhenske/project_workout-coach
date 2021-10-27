import React, { Component, Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import StrengthSelector from './StrengthSelector';
import Form from "./Form";


const StrengthSuggestion = (props) => {

    const [strengthData, setStrengthData] = useState([]);
   
    
    

    // let randomIndex;
    let randomIndexArray=[];
    
   
               
    // // accesses the API for strenth execises:
    

    useEffect(() => {
        const axios = require("axios").default;
        
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises',
            headers: {
                'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
                'x-rapidapi-key': '226f1f3dc3msh4967f81ea387d7cp16bcfdjsn289968c31ba3'
            }
            };

        axios.request(options).then(function (response) {
            console.log(response.data[1325].name, response.data[1325].gifUrl, response.data[1325].bodyPart);
            //the above works, which means it is an array and index works on it
            

            setStrengthData(response.data);
            // strengthDataArray.push(strengthData);
            // console.log(Object.values(strengthData))
        
        }).catch(function (error) {
            console.error(error);
        });
    }, []);


    // if (strengthData.length != 0) {
    //     console.log(strengthData)}   works
    // console.log(props.intensity) works

    function randomIndex() {
        if (strengthData.length != 0 && props.intensity > 2) {
            for (let i=0; i < 8; i++) {
                randomIndex= Math.floor(Math.random() * 1325);
                randomIndexArray.push(strengthData[randomIndex])
            }
        }
        if (strengthData.length != 0 && props.intensity < 3) {
            for (let i=0; i < 6; i++) {
                randomIndex= Math.floor(Math.random() * 1325);
                randomIndexArray.push(strengthData[randomIndex])
            }
        }
    }
    
    randomIndex();
        
    

    return (
        
        <Fragment>
            <h1>Strength Exercises:</h1>
            <p>Do 3 repetitions, 2 if you need an easier/shorter workout</p>
            
            {strengthData.length != 0 ? 
                <ol>
                {randomIndexArray.map((exercise) =>  
                     <StrengthSelector key={exercise.name}
                        name={exercise.name}
                        target={exercise.target}
                        gifUrl={exercise.gifUrl}/> 
                )}
                
                
                </ol>
               : null}
                
        </Fragment>
    )
}

export default StrengthSuggestion;
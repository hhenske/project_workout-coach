import React, { Fragment, useState, useEffect } from 'react'
import StrengthSelector from './StrengthSelector';



const StrengthSuggestion = (props) => {

    const [strengthData, setStrengthData] = useState([]);

    let randomIndexArray=[];
    
   
               
    // accesses the API for strenth execises:
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

            setStrengthData(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        
    }, []);
    

    function randomIndex() {
        if (strengthData.length !== 0 && props.intensity > 2) {
            for (let i=0; i < 8; i++) {
                randomIndex= Math.floor(Math.random() * 1326);
                randomIndexArray.push(strengthData[randomIndex])
            }
        }
        if (strengthData.length !== 0 && props.intensity < 3) {
            for (let i=0; i < 6; i++) {
                randomIndex= Math.floor(Math.random() * 1326);
                randomIndexArray.push(strengthData[randomIndex])
            }
        }
    }
    
    randomIndex();
        
    
    return (
        
        <Fragment>
            <h1>Strength Exercises:</h1>
            <p>Do 10-20 repetitions 3 times, 2 if you need an easier/shorter workout</p>
            
            {strengthData.length !== 0 ? 
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
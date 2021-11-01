import React, { Fragment, useState, useEffect } from 'react';
import CoreSelector from './CoreSelector';


const CoreSuggestion = (props) => {

    const [coreData, setCoreData] = useState([]);

    let coreExerciseArray=[];
    let randomIndex=0

    

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
            
            setCoreData(response.data);
            
            
        
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

   
   

    function createCoreArray() {
        if (coreData.length !== 0 && props.intensity > 2)  {
            while (coreExerciseArray.length < 4) {
                randomIndex= Math.floor(Math.random() * 1326);
                if (coreData[randomIndex].target==='abs' || coreData[randomIndex].target==='adductors' || coreData[randomIndex].target==='glutes' || coreData[randomIndex].target==='spine') {
                    coreExerciseArray.push(coreData[randomIndex])
            }
        }
    }
        
        if (coreData.length !== 0 && props.intensity < 3) {
            while (coreExerciseArray.length < 6) {
                randomIndex=Math.floor(Math.random() * 1326);
                if (coreData[randomIndex].target==='abs' || coreData[randomIndex].target==='adductors' || coreData[randomIndex].target==='glutes' || coreData[randomIndex].target==='spine') {
                    coreExerciseArray.push(coreData[randomIndex])
            }
        
        }
    }
}
    createCoreArray();



    return (
        <Fragment>
            <h1>Core Workout Suggestion</h1>
            <p>Do 10-20 repetitions 3 times, 2 times if you need an easier/shorter workout</p>
                

                {coreData.length !== 0 ? 
                   <div> 
                    {coreExerciseArray.map((exercise) =>  
                        <CoreSelector key={exercise.name}
                            name={exercise.name}
                            target={exercise.target}
                            gifUrl={exercise.gifUrl} /> 
                    )}
                    
                    </div>
                : null}
                
        </Fragment>
    )

} 


export default CoreSuggestion;
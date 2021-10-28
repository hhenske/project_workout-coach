import React, { Component, Fragment, useState, useEffect } from 'react';
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
            // console.log(response.data[1325].name, response.data[1325].gifUrl, response.data[1325].bodyPart);
            setCoreData(response.data);
            
        
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    
    // if (coreData.length != 0) {
    //     console.log(coreData[0].target);
    //     console.log(props.intensity);
    // } both work

//     function createCoreArray() {
//         if (coreData.length !== 0 && props.intensity > 2)  {
//             while (coreExerciseArray.length < 5) {
//             if (coreData[randomIndex].target==='abs' || coreData[randomIndex].target==='adductors' || coreData[randomIndex].target==='glutes' || coreData[randomIndex].target==='spine') {
//                 randomIndex= Math.floor(Math.random() * 1325);
                
//                 coreExerciseArray.push(coreData[randomIndex])
//             }
//         }
//     }
        
//         if (coreData.length !== 0 && props.intensity < 3) {
//             while (coreExerciseArray.length < 6) {
//             if (coreData[randomIndex].target==='abs' || coreData[randomIndex].target==='adductors' || coreData[randomIndex].target==='glutes' || coreData[randomIndex].target==='spine') {
//                 randomIndex=Math.floor(Math.random() * 1325);
                
//                 coreExerciseArray.push(coreData[randomIndex])
//             }
        
//         }
//     }
// }
//     createCoreArray();

    console.log(coreExerciseArray)
    console.log(coreData[randomIndex])

    return (
        <Fragment>
            <p>Core Suggestion</p>
            <p>Do 3 repetitions, 2 if you need an easier/shorter workout</p>
                

                {coreData.length !== 0 ? 
                    <ol>
                    {coreExerciseArray.map((exercise) =>  
                        <CoreSelector key={exercise.name}
                            name={exercise.name}
                            target={exercise.target}
                            gifUrl={exercise.gifUrl} /> 
                    )}
                    
                    </ol>
                : null}
                
        </Fragment>
    )

} 
// end of component function

export default CoreSuggestion;
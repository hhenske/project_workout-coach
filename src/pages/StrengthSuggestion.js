import React, { Component, Fragment, useState, useEffect } from 'react'



const StrengthSuggestion = () => {

    const [strengthData, setStrengthData] = useState([]);
    
    // let randomIndex = '';
    let strengthDataArray = [];
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
            console.log(response.data[4].name, response.data[4].gifUrl, response.data[4].bodyPart);
            //the above works, which means it is an array and index works on it
            
            setStrengthData([response.data]);
            strengthDataArray.push(strengthData)
        
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

      console.log(strengthData) //this is the array I want! when it runs the 2nd time...why is it running twice?
    //   console.log(strengthData[201]) this is undefined
    return (
        <p>{strengthData}</p>
    )
}

export default StrengthSuggestion;
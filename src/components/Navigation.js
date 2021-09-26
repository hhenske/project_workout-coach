import React, { useState } from 'react';
import classes from "./Navigation.module.css";
import Button from "./Button";
import App from '../App';


const Navigation = (props) => {
  const [homeButton, setHomeButton] = useState(true);
  const [logButton, setLogButton] = useState(false);

  const homeButtonHandler = (event) => {
  setHomeButton(true)
  // return 
  console.log("this works");
};

const logButtonHandler = () => {
  setLogButton(true)
  // return 
  console.log('This also works');
  // ironically, neither works because in Navigation.js, these handlers are undefined
};

  return (
    <nav className = {classes.nav}>
      <h2 className = {classes.h2}>Navigation</h2>
      <br />
      <Button onClick={props.homeButtonHandler}>Home</Button>
      <br />
      <Button onClick={props.logButtonHandler}>Workout Log</Button>
      <br />


      
     
      <h2>Links</h2>
      <a href="https://www.acefitness.org/education-and-resources/lifestyle/exercise-library/experience/beginner/">Exercise Data Base</a>
      <br />
      <br />
      <a href="https://developers.google.com/android/reference/com/google/android/gms/fitness/data/WorkoutExercises">Strentgh Exercise Data Base</a>
    </nav>
  )
};


export default Navigation;
import React from 'react';
import {withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classes from "./Navigation.module.css";
import App from "../App";
import Button from "./Button"


const Navigation = () => {


  return (
    <nav className = {classes.nav}>
      <h2 className = {classes.h2}>Navigation</h2>
      <br />
      <Button>Home</Button>
      <br />
      <Button>Workout Log</Button>
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
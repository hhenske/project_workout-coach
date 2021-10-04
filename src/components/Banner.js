import React from 'react';
import classes from './Banner.module.css';
import runner from '../images/runner.png';

const Banner = () => {


  return (
    <React.Fragment>
      <div className="col-7 text-right">
      <h1 className={classes.banner}>Workout</h1>
      <h1>Coach</h1>
      </div>
      <div className="col-5 text-left text-bottom">
      <img src={runner} 
      width='50'
       height="50"/>
       </div>
    </React.Fragment>
  )};

export default Banner;
import React from 'react';
import {withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navigation = () => {


  return (
    <nav>
      <h2>Navigation</h2>
      <Link to ="/App">Home</Link>
      <Link to ="/components/Log">Exercise Log</Link>
     
    </nav>
  )
};


export default Navigation;
import React, { useState } from 'react';
import './App.module.css';
import Navigation from './components/Navigation'; 
//import Navbar from './components/Navbar';
import Form from './components/Form';
//import Log from './components/Log';

import Banner from './components/Banner';


function App() {

const [homeButton, setHomeButton] = useState(true);
const [logButton, setLogButton] = useState(false);

const homeButtonHandler = () => {
  
};

const logButtonHandler = () => {

};

  return (
    <React.Fragment>
      <div id = "testing" style={{textAlign:"center", 
                  backgroundImage:"linear-gradient(to left, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
                  margin: "0px"
                  }}>
        <Banner />
      </div>
     
      <nav>
        <Navigation />
      </nav>
     
      <main>
        
        <br />
        <Form />
        {/* <Log /> (if Workout button is pushed) */}
      </main>
    </React.Fragment>
  );
}

export default App;

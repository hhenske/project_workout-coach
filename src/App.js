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
  return 
  console.log("this works")
};

const logButtonHandler = () => {
  return 
  console.log('This also works')
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
     {/* In main, will be the logic for displaying home or the workout log in the main section */}
      <main>
        
        <br />
        <Form />
      </main>
    </React.Fragment>
  );
}

export default App;

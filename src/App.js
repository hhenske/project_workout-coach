import React, { useState } from 'react';
import './App.module.css';
// import Navigation from './components/Navigation'; 
import Form from './components/Form';
import Banner from './components/Banner';
import Log from './components/Log';
import classes from "./components/Navigation.module.css";
import Button from "./components/Button";


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
      <Button onClick={homeButtonHandler}>Home</Button>
      <br />
      <Button onClick={logButtonHandler}>Workout Log</Button>
      <br />
      </nav>
      )
     };


const App = () => {

// const [homeButton, setHomeButton] = useState(true);
// const [logButton, setLogButton] = useState(false);

// const homeButtonHandler = (event) => {
//   setHomeButton(true)
  
//   console.log("this works");
//   console.log(event);
// };

// const logButtonHandler = () => {
//   setLogButton(true)
   
//   console.log('This also works');
//   // ironically, neither works because in Navigation.js, these handlers are undefined
// };

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
        {HomeButton ? <Form /> : <Log />}
      </main>
    </React.Fragment>
  );
}

export default App;

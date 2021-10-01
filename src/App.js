import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import './App.module.css';
// import Navigation from './components/Navigation'; 
import Form from './components/Form';
import Banner from './components/Banner';
import Log from './components/Log';
import classes from "./components/Navigation.module.css";
import Button from "./components/Button";

// https://www.youtube.com/watch?v=fL8cFqhTHwA


const Navigation = (props) => {
  const [homeButton, setHomeButton] = useState(true);
  const [logButton, setLogButton] = useState(false);

  const homeButtonHandler = (event) => {
  setHomeButton(true)
};

const logButtonHandler = () => {
  setLogButton(true)
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
  const activities = [
    { 
      activity: 'cardio',
      time: '80',
      date: new Date(2021, 2, 28)
    },
    {
      activity: 'core',
      time: '40',
      date: new Date(2021, 2, 29)
    },
    {
      activity: 'yoga',
      time: '62',
      date: new Date(2021, 3, 1)
    },
    {
      activity: 'cardio',
      time: '90',
      date: new Date(2021, 3, 2)
    }
  ];
// const [homeButton, setHomeButton] = useState(true);
 const [logButton, setLogButton] = useState(false);

// const homeButtonHandler = (event) => {
//   setHomeButton(true)
  
//   console.log("this works");
//   console.log(event);
// };

// const logButtonHandler = () => {
//   setLogButton(true)
   
//   console.log('This also works');
  
// };

  return (
    <React.Fragment className = "container-fluid">
      <div style={{textAlign:"center", 
                  backgroundImage:"linear-gradient(to left, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
                  margin: "0px"
                  }}>
        <div className="row">
          <Banner />
        </div>
      </div>
      <div className = "row">
      <nav>
        <Navigation className="col-3"/>
      </nav>
     {/* In main, will be the logic for displaying home or the workout log in the main section */}
      
      <main className="col-9"
      // {...logButton && <Log />}
      // {...homeButton && <Form />}
      >  <h1> Workout Log</h1>
      <Log activity={activities[0].activity} time= {activities[0].time} date={activities[0].date} />
      <Log activity={activities[1].activity} time= {activities[1].time} date={activities[1].date} />
      <Log activity={activities[2].activity} time= {activities[2].time} date={activities[2].date} />
      <Log activity={activities[3].activity} time= {activities[3].time} date={activities[3].date} />
      <br />    
      </main>
      </div>
      </React.Fragment>
  );
}

export default App;

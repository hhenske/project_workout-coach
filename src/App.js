import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Form from './pages/Form';
import Banner from './components/Banner';
import Log from './pages/Log';
import Stopwatch from './pages/Stopwatch';
import Navigation from './components/Navigation';


// https://www.youtube.com/watch?v=fL8cFqhTHwA


const App = () => {
  


  return (
    <div>
      <div style={{textAlign:"center", 
                  backgroundImage:"linear-gradient(to left, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)",
                  margin: "0px"
                  }}>
        <div className="row">
          <Banner />
        </div>
      </div>
      <div className = "container-fluid min-vh=100">
        <div className = "row justify-content-center min-vh-100">
          <nav className = "col-3 no-float bg-info bg-gradient container-fluid h=100 flex-grow=2">
            <Navigation />
          </nav>
    
      
          <main className="col-9 no float bg-secondary bg-gradient d-flex justify-content-center" >
           
          <br />
          <Route exact path="/">
            <Redirect to="/Form" />
          </Route>
          <Route path = "/form">
              <Form />
          </Route>
          <Route path = "/timer">
              <Stopwatch />
          </Route>
          <Route path = "/log">
              <Log />
          </Route>

          <br />  
        </main>
      </div>
    </div>
  </div>
  );
}

export default App;

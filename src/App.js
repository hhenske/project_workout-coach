import React, { BrowserRouter, Route, Switch } from 'react';
import './App.module.css';
//import Navigation from './components/Navigation'; 
import Navbar from './components/Navbar';
import Form from './components/Form';
import Log from './components/Log';

import Banner from './components/Banner';

function App() {
  return (
    <>
      <div className = "banner">
        <Banner />
      </div>
      <nav>
        <BrowserRouter>
          <Navbar />
          <div className="container mt-2" style={{ marginTop: 40 }}>
            <Switch>
              <Route path="./App">
                <App />
              </Route>
              <Route path="/Log">
                <Log />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </nav>
      <main>
        <h2 className="title is-1">Let's choose a workout!</h2>
        <Form />
      </main>
    </>
  );
}

export default App;

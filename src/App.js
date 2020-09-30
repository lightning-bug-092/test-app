import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Submit from './components/Submit'
import {Step1Provider} from './contexts/Step1ConText';
function App() {
  return (
    <Step1Provider>
      <Router>
          <div className="App">
        
        <Switch>
            <Route exact path="/">
            <Step1 />
            </Route>
            <Route  path="/step2">
            <Step2 />
            </Route>
            <Route  path="/step3">
            <Step3 />
            </Route>
            <Route  path="/step4">
            <Step4 />
            </Route>
            <Route  path="/sub">
            <Submit />
            </Route>
          </Switch>
        </div>
      </Router>
    </Step1Provider>
     
  );
}

export default App;

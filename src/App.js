import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Header from './Component/Header'
import Project from './Component/Project'
import Error from './Component/Error'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/project" component={Project} />
        <Route component={Error}/>
      </Switch>


      <div id="page-wrap">

      </div>
    </div>
    
  );
}

export default App;

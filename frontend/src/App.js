import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Redirect, 
  Switch } 
from 'react-router-dom';

import './App.css'
import Users from './user/pages/Users'
import NewPlace from './places/pages/NewPlace'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>
            Let's Start!
          </h1>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
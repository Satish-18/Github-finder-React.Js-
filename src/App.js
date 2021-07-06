import React from 'react';
import Dashboard from './pages/dashboard';
import Error from './pages/error';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact={true}>
          <Dashboard></Dashboard>
        </Route>
        <Route path='*'>
          <Error></Error>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

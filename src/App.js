import React from 'react';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import MyMap from './components/MyMap';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/home'} component={Home} />        
      </Switch>
    </Router>
  );
}

export default App;

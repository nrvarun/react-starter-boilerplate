import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import about from './About';
import NoMatch from './NoMatch';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={about} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

export default App;

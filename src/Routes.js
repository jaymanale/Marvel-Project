import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Characters from './components/Characters';
import Events from './components/Events';
import Series from './components/Series';
import Stories from './components/Stories';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/characters" exact component={Characters}></Route>
        <Route path="/events" exact component={Events}></Route>
        <Route path="/series" exact component={Series}></Route>
        <Route path="/stories" exact component={Stories}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

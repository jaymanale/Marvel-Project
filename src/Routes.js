import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Characters from './components/Characters';
import Events from './components/Events';
import Series from './components/Series';
import Comics from './components/Comics';
import Creators from './components/Creators';
import PageNotFound from './common/PageNotFound';
import InformationCard from './common/InformationCard';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route
          path="/characters/:id"
          render={(props) => <InformationCard {...props} />}
        ></Route>
        <Route path="/characters" exact component={Characters}></Route>
        <Route
          path="/comics/:id"
          render={(props) => <InformationCard {...props} />}
        ></Route>
        <Route path="/comics" exact component={Comics}></Route>
        <Route
          path="/events/:id"
          render={(props) => <InformationCard {...props} />}
        ></Route>
        <Route path="/events" exact component={Events}></Route>
        <Route
          path="/series/:id"
          render={(props) => <InformationCard {...props} />}
        ></Route>
        <Route path="/series" exact component={Series}></Route>

        <Route
          path="/creators/:id"
          render={(props) => <InformationCard {...props} />}
        ></Route>
        <Route path="/creators" exact component={Creators}></Route>
        {/* <Route path="/stories" exact component={Stories}></Route> */}
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

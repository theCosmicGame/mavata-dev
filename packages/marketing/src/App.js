import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

import Landing from './components/Landing';
import EarlyAccess from './components/LandingPages/EarlyAccess';

import WebFont from 'webfontloader';

if (process.env.NODE_ENV === 'development') {
  WebFont.load({
    google: {
      families: ['Barlow', 'Playfair Display', 'Overpass']
    }
  });
}

function Boo() {
  return (
    <h1>Heyyy</h1>
  )
}

/* 
Rather than create a memory history object inside app.js, we create it in bootstrap.js because we want to customize it quite a bit
*/
export default ({ history }) => {

  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/earlyaccess" component={EarlyAccess} />
          <Route exact path="/learn" component={EarlyAccess} />
          <Route path="/" component={Landing} />
        </Switch>
      </Router>
    </div>
  );
};

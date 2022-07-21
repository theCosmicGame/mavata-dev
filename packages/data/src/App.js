import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';

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
          <Route path="/" component={Boo} />
        </Switch>
      </Router>
    </div>
  );
};

import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components';

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Barlow', 'Playfair Display', 'Overpass', 'Montserrat']
  }
});

import Progress from './components/navbar/Progress';
import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const CompaniesLazy = lazy(() => import('./components/CompanyApp'));

const history = createBrowserHistory();

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }
`

export default function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  useEffect(() => {
    if (isSignedIn) {
      console.log('once?')
      history.push('/companies/last')
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <div>
      <GlobalStyle />
      <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
      <Suspense fallback={<Progress />} >
        <Switch>
          <Route path="/auth/*">
            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
          </Route>
          <Route path="/companies/last">
            { !isSignedIn && <Redirect to="/" />}
            <CompaniesLazy />
          </Route>
          <Route path="/companies">
            { !isSignedIn && <Redirect to="/" />}
            <CompaniesLazy />
          </Route>
          <Route path="/user">
            { !isSignedIn && <Redirect to="/" />}
            <CompaniesLazy />
          </Route>
          <Route path="/" component={MarketingLazy} />
        </Switch>
      </Suspense>
    </div>
    </Router>
  );
};
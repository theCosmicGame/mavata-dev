import React, { useState } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { port } from './variables/global';
import "./assets/css/mdb.css";

import Companies from './components/Companies';
import Company from './components/Company';
import NavbarDev from './components/NavbarDev';

import { crows, ccols } from './variables/companies';
import { urows, ucols } from './variables/users';

import WebFont from 'webfontloader';

if (process.env.NODE_ENV === 'development') {
  WebFont.load({
    google: {
      families: ['Barlow', 'Playfair Display', 'Overpass']
    }
  });
}

function CompaniesRouter() {
  return (
    <Switch>

    </Switch>
  )
}

function Boo() {
  return (
    <React.Fragment>
      <h1>hey</h1>
    </React.Fragment>
  )
}


const Firm = {
  id: '1',
  name: 'Rock Equity',
  domain: '@rockequity.com',
  companies: {
    columns: ccols,
    rows: crows,
  },
  users: {
    columns: ucols,
    rows: urows,
  },
}

export default ({ history }) => {
  let whatPort = location.port;
  
  const [firstRender, setFirstRender] = useState(true);
  const [firmData, setFirmData] = useState(Firm)

  const ActiveUser = firmData.users.rows.filter(entry => entry.id === '1')[0] // Jennifer Doe
  const LastCompany = firmData.companies.rows.filter(entry => entry.last === true)[0]
  console.log(LastCompany)

  
  function Test() {
    
    let el = (
      <React.Fragment>
        <h1>hellooooo</h1>
      </React.Fragment>
    )

      if (process.env.NODE_ENV === 'development' && firstRender) {
        el = <Redirect to='/companies/last' />
        setFirstRender(false);
      }

    return el
  }

  return (
    <Router history={history}>
      {(process.env.NODE_ENV === 'development' && whatPort === port.toString()) ? <NavbarDev /> : ''}
      <Switch>
        <Route exact path="/companies/last">
          <Company companies={firmData.companies} />
        </Route>
        <Route path='/companies/:companyName'>
          <Company companies={firmData.companies} /> 
        </Route>
        <Route exact path="/user/settings">
          <Companies companies={firmData.companies} />
        </Route>
        <Route exact path="/companies">
          <Companies companies={firmData.companies} />
        </Route>
        <Route path='/'>
          <Test setFirstRender={setFirstRender} />
        </Route>
      </Switch>
    </Router>
  );
};
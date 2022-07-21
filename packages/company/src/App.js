import React, { useState } from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import { port } from './variables/global';
import "./assets/css/mdb.css";

import Companies from './components/Companies';
import Company from './components/Company';
import NavbarDev from './components/NavbarDev';
import App from './components/test/08-finished/src/App'

import { crows, ccols } from './variables/companies';
import { urows, ucols } from './variables/users';

import WebFont from 'webfontloader';

if (process.env.NODE_ENV === 'development') {
  WebFont.load({
    google: {
      families: ['Barlow', 'Playfair Display', 'Overpass', 'Montserrat']
    }
  });
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
  const [companiesData, setCompaniesData] = useState(firmData.companies)
  const [UsersData, setUsersData] = useState(firmData.users);

  const ActiveUser = UsersData.rows.filter(entry => entry.id === '1')[0] // Jennifer Doe

  const updateFirmHandler = (enteredCompaniesData) => {
    setFirmData(prevState => ({
      ...prevState,
      companies: {
        ...prevState.companies,
        rows: [...enteredCompaniesData]
      },
    }))
  }

  // takes in 'companies.row' array to update in the state
  const updateCompaniesHandler = (updatedCompaniesData) => {
    // update companies array
    setCompaniesData(prevState => ({
      ...prevState,
      rows: [...updatedCompaniesData]
    }))

    // update firmData
    updateFirmHandler(updatedCompaniesData)
  }

  const DevHome = (props) => {
    return (
      <Route path='/'>
        <Test setFirstRender={props.setFirstRender} />
      </Route>
    )
  }

  function Test(props) {

    let el = (
      <React.Fragment>
        <h1>hellooooo</h1>
      </React.Fragment>
    )

    if (process.env.NODE_ENV === 'development' && firstRender && whatPort === port.toString()) {
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
          <Company 
            companies={companiesData} 
            Users={UsersData} 
            onUpdateCompanies={(data) => updateCompaniesHandler(data)} 
          />
        </Route>
        <Route path='/companies/:companyName'>
          <Company 
            companies={companiesData} 
            Users={UsersData} 
            onUpdateCompanies={(data) => updateCompaniesHandler(data)} 
          />
        </Route>
        <Route exact path="/user/settings">
          {/* <Companies companies={firmData.companies} /> */}
          <App />
        </Route>
        <Route exact path="/companies">
          <Companies companies={companiesData} onUpdateCompanies={updateFirmHandler} />
        </Route>
        {(process.env.NODE_ENV === 'development' && whatPort === port.toString()) ? <DevHome setFirstRender={setFirstRender} /> : ''}
      </Switch>
    </Router>
  );
};
import React, { useEffect, useState } from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { port } from './variables/global';
import "./assets/css/mdb.css";

import Companies from './components/Companies';
import Company from './components/Company';
import NavbarDev from './components/NavbarDev';
import App from './components/test/08-finished/src/App'

import { firms } from './variables/firms'

import WebFont from 'webfontloader';

if (process.env.NODE_ENV === 'development') {
  WebFont.load({
    google: {
      families: ['Barlow', 'Playfair Display', 'Overpass', 'Montserrat']
    }
  });
}

export default ({ history }) => {
  let whatPort = location.port;

  const [firmData, setFirmData] = useState(firms[0])  // Rock Equity (BEM TO DO)
  const [companiesData, setCompaniesData] = useState(firmData.companies)
  const [company, setCompany] = useState(companiesData.rows.filter(entry => entry.last === true)[0])
  const ActiveUser = company.users.rows.filter(entry => entry.id === 1)[0] // Jennifer Doe .. BEM TO DO: set at Auth per user session

  useEffect(() => {
    history.push('/companies/last')
  }, [])

  function NewDevHome() {
    return (
      <React.Fragment>
        <h1>heyyyy</h1>
      </React.Fragment>
    )
  }

  const onNavigateCompany = (oldCompany, newCompany) => {
    // update last company on navigate
    if (oldCompany.id !== newCompany.id) {
      let newCompanies = companiesData.rows.map(c => {
        if (c.id !== oldCompany.id && c.id !== newCompany.id) {
          return c
        } else if (c.id === oldCompany.id) {
          return oldCompany
        } else {
          return newCompany
        }
      })

      // update companiesData to persist the change
      setCompaniesData(prevState => ({
        ...prevState,
        rows: newCompanies
      }))
    } 
    
    setCompany(newCompany)
  }

  // BEM TO DO: causing Cognitive Complexity to be too high
  const updateFirmHandler = (enteredCompaniesData, newUsersData) => {
    if (newUsersData === []) {
      setFirmData(prevState => ({
        ...prevState,
        companies: {
          ...prevState.companies,
          rows: [...enteredCompaniesData]
        },
      }))
    } else if (enteredCompaniesData === []) {
      setFirmData(prevState => ({
        ...prevState,
        users: {
          ...prevState.users,
          rows: [...newUsersData]
        }
      }))


    } else {
      setFirmData(prevState => ({
        ...prevState,
        companies: {
          ...prevState.companies,
          rows: [...enteredCompaniesData]
        },
        users: {
          ...prevState.users,
          rows: [...newUsersData]
        }
      }))
    }
  }
  
  const updateCompanyHandler = (updatedCompanyData) => {
    if (company.id === updatedCompanyData.id) {
      setCompany(updatedCompanyData)
    }

    let newCompanies = companiesData.rows.map(c => {
      if (c.id === updatedCompanyData.id) {
        return updatedCompanyData
      } else {
        return c
      }
    })

    setCompaniesData(prevState => ({
      ...prevState,
      rows: newCompanies
    }))

    console.log('in App.js updateCompanyHandler', companiesData, newCompanies, updatedCompanyData)
  }

  const updateCompanyForUsers = (updatedUsersData) => {
    setCompany(prevState => ({
      ...prevState,
      users: {
        ...prevState.users,
        rows: updatedUsersData
      }
    }))

    let newCompanies = companiesData.rows.map(c => {
      if (c.id === company.id) {
        return {
          ...company,
          users: {
            ...company.users,
            rows: updatedUsersData
          }
        }
      } else {
        return c
      }
    })

    setCompaniesData(prevState => ({
      ...prevState,
      rows: newCompanies
    }))
    console.log('in App.js', companiesData, updatedUsersData)
  }

  const updateUsersHandler = (updatedUsersData) => {
    // setUsersData(updatedUsersData)
    // BEM TO DO: update Companies per Company per user change
    // console.log('in App.js', updatedUsersData)
    updateCompanyForUsers(updatedUsersData)
    updateFirmHandler([], updatedUsersData)
  }

  return (
    <Router history={history}>
      {(process.env.NODE_ENV === 'development' && whatPort === port.toString()) ? <NavbarDev /> : ''}
      <Switch>
        <Route exact path="/companies/last">
          <Company 
            companies={companiesData} 
            onNavigateCompany={onNavigateCompany} 
            activeUser={ActiveUser} 
            onUpdateCompanies={(data) => updateCompanyHandler(data)} 
            onUpdateUsers={(data) => updateUsersHandler(data)} 
          />
        </Route>
        <Route path='/companies/:companyName'>
          <Company 
            companies={companiesData} 
            onNavigateCompany={onNavigateCompany} 
            activeUser={ActiveUser} 
            onUpdateCompanies={(data) => updateCompanyHandler(data)} 
            onUpdateUsers={(data) => updateUsersHandler(data)} 
          />
        </Route>
        <Route exact path="/user/settings">
          {/* <Companies companies={firmData.companies} /> */}
          <App />
        </Route>
        <Route exact path="/companies">
          <Companies 
            companies={companiesData} 
            onNavigateCompany={onNavigateCompany} 
            activeUser={ActiveUser} 
            onUpdateCompanies={updateFirmHandler} // BEM TO DO: fix one or the other
            onUpdateUsers={(data) => updateUsersHandler(data)} 
          />
        </Route>
        <Route path='/' component={NewDevHome} />
      </Switch>
    </Router>
  );
};
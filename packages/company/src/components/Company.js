/* 
    BEM TO DO
    - update table buttons to send email
    - edit user settings button in table
    - make add data connection button functional
    - 
*/

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Col, Row } from 'antd';
import styled from 'styled-components';
import { getWindowWidth, strToUrl } from 'containerMfe/Functions';

import '../assets/css/antd.css';

import Sidebar from './sidebar/Sidebar';
import Profile from './company/Profile';


const Wrapper = styled.div`
  background-color: #fff;
  position: relative;
  display: table;
  width: 100%;
  height: 100%;
`

const StyledSection = styled.div`
  margin-left: ${props => props.isExpanded ? '250px' : props.sidebarWidth};
  transition: margin 0.3s ease;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 0;

  width: ${props => props.sidebarWidth ? `calc(100% - props.sidebarWidth)` : '100%'};
`

const Main = styled.main`
  padding: 10px 15px;
  margin: 0;

  background: #E5E5E5;

  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  vertical-align: top;

  position: relative;
`

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

const Company = (props) => {
  const { companies, onNavigateCompany, onUpdateCompanies, activeUser, onUpdateUsers } = props;
  // BEM TO DO: get ID from company and pass as prop instead of company --> ????
  let { companyName } = useParams();
  const useCompany = (companyName ? companies.rows.filter(entry => entry.condensedName === companyName)[0] : companies.rows.filter(entry => entry.last === true)[0])
  const [company, setCompany] = useState(useCompany);
  
  console.log('in Company.js', activeUser, company)
  // BEM TO DO: set user state and determine which view to render (edits to permissions happen after user session or on refresh of page??) (admin, collaborator, viewer)
  // console.log('in Company.js', company, company.users.rows)
  // const [view, setView] = activeUser.

  // sidebar collapse
  localStorage.setItem('sidebar-collapsed', (window.innerWidth > 850) ? false : true);
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed');
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true);
  const [sidebarWidth, setSidebarWidth] = useState(isExpanded ? '250px' : '50px')
  const [mainWidth, setMainWidth] = useState(window.innerWidth - parseInt(sidebarWidth))

  function setWidthSidebar() {
    let w = getWindowWidth();
    let x = (w > 850) ? '50px' : '0px';
    let y = (isExpanded && (w > 850)) ? '250px' : x;

    setSidebarWidth(y);
    let z = (w - parseInt(y))
    setMainWidth(z);

    return y;
  }

  // resize on sidebar collapse or window resize
  useEffect(() => {
    setWidthSidebar();
    
    const debouncedHandleResize = debounce(function handleResize() {
      if (isExpanded && (getWindowWidth() <= 850)) {
        setIsExpanded(false)
        localStorage.setItem('sidebar-collapsed', true);
        setSidebarWidth('0px')
      } else if (getWindowWidth() <= 850) {
        localStorage.setItem('sidebar-collapsed', true);
        setSidebarWidth('0px')
      } else {
        localStorage.removeItem('sidebar-collapse')
      }

      let y = setWidthSidebar();

    }, 100);

    
    if (sidebarWidth + mainWidth > getWindowWidth()) {
      console.log('NEED A FIX')
      let y = setWidthSidebar();
    }

    window.addEventListener('resize', debouncedHandleResize);

    // necessary cleanup
    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    };
  });

  useEffect(() => {
    onUpdateCompanies(company)
    console.log('in Company.js useEffect', company.users.rows)
  }, [company])

  const updateUsersPermissionsHandler = (newUsers) => {
    onUpdateUsers(newUsers);

    setCompany(prevState => ({
      ...prevState,
      users: {
        ...prevState.users,
        rows: newUsers
      }
    }))
  };

  const removeUserHandler = (newUsers) => {
    console.log('in Company.js', newUsers)
    
    setCompany(prevState => ({
      ...prevState,
      users: {
        ...prevState.users,
        rows: newUsers
      }
    }))
  }

  const updateCompanyDescriptionHandler = (enteredCompanyData) => {
    setCompany(prevState => ({
      ...prevState,
      description: enteredCompanyData.enteredDescription,
    }))
  };

  const updateCompanyHandler = (enteredCompanyData) => {
    
    setCompany(prevState => ({
      ...prevState,
      name: enteredCompanyData.enteredName.trim(),
      condensedName: strToUrl(enteredCompanyData.enteredName.trim()),
      description: enteredCompanyData.enteredDescription,
      sector: enteredCompanyData.enteredSector.trim(),
      location: enteredCompanyData.enteredLocation.trim(),
      website: enteredCompanyData.enteredWebsite.trim()
    }))
    
    // console.log('in Company.js', company, enteredCompanyData)
    const newCompaniesList = [...companies.rows.filter(entry => entry.id !== company.id), {
      ...company,
      name: enteredCompanyData.enteredName.trim(),
      condensedName: strToUrl(enteredCompanyData.enteredName.trim()),
      description: enteredCompanyData.enteredDescription,
      sector: enteredCompanyData.enteredSector.trim(),
      location: enteredCompanyData.enteredLocation.trim(),
      website: enteredCompanyData.enteredWebsite.trim()
    }];

    const { compare } = Intl.Collator('en-US');
    newCompaniesList.sort((a,b) => compare(a.id, b.id))

    onUpdateCompanies(newCompaniesList)
  }

  // console.log('sidebar width', sidebarWidth)

  return (
    <Wrapper>
      <Col flex={sidebarWidth}>
        <Sidebar 
          company={company} 
          isExpanded={isExpanded} 
          setIsExpanded={setIsExpanded} 
          mainWidth={mainWidth} 
          setWidthSidebar={setWidthSidebar} 
        />
      </Col>
      <StyledSection sidebarWidth={sidebarWidth} >
        <Main>
          <Profile 
            company={company} 
            onUdpdateUsers={updateUsersPermissionsHandler}
            onRemoveUser={removeUserHandler}
            activeUser={activeUser} 
            onUpdateCompany={updateCompanyHandler}
            onUpdateDescription={updateCompanyDescriptionHandler}
            isExpanded={isExpanded} 
            mainWidth={mainWidth} 
          />
        </Main>
      </StyledSection>
    </Wrapper>
  );
};

export default Company
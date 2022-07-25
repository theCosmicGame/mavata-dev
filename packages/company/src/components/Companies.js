import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import CompaniesHeading from './companies/CompaniesHeading';
import CompaniesTable from './companies/CompaniesTable';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    min-height: 100vh;
  }

  html {
    height: 100%;
  }
`

const Wrapper = styled.div`
  left: 0;
  background-color: #fff;

  min-height: 100vh;
`

const Main = styled.main`
  margin: 0;
  padding: 10px 50px;
  position: relative;

  max-height: 100%;
  height: 100%;
  min-height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  display: block;
  top: 0;
  left: 0;
  color: #000;
  font-family: Barlow;
`

export default function Companies({ companies, activeUser, onNavigateCompany, onUpdateCompanies }) {
  // BEM TO DO: create state on add/remove company
  const userCompanies = {
    columns: companies.columns,
    rows: companies.rows.filter(company => activeUser.companies.includes(company.id)).map(company => {
      let r = 'User';
      if (activeUser.roles.admin.includes(company.id)) {
        r = 'Admin';
      } else if (activeUser.roles.collaborator.includes(company.id)) {
        r = 'Collaborator'
      } else if (activeUser.roles.viewer.includes(company.id) && activeUser.emailraw.slice(activeUser.emailraw.search('@')) !== company.firmDomain) {
        // console.log(user.emailraw.slice(user.emailraw.search('@')), )       
        r = 'External User'
      }
      return {...company, role: r}
    })
  }
  
  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <Main>
          <Content>
            <CompaniesHeading companies={userCompanies} />
            <CompaniesTable 
              companies={userCompanies} 
              activeUser={activeUser} 
              onUpdateCompanies={onUpdateCompanies} 
              onNavigateCompany={onNavigateCompany} 
            />
          </Content>
        </Main>
      </Wrapper>
    </React.Fragment>
  );
}

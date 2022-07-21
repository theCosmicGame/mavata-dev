import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import CompaniesHeading from './companies/CompaniesHeading';
import CompaniesTable from './table/CompaniesTable';

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

export default function Companies({ companies, onUpdateCompanies }) {
   
  return (
    <React.Fragment>
      <GlobalStyle />
      <Wrapper>
        <Main>
          <Content>
            <CompaniesHeading companies={companies} />
            <CompaniesTable companies={companies} onUpdateCompanies={onUpdateCompanies} />
          </Content>
        </Main>
      </Wrapper>
    </React.Fragment>
  );
}

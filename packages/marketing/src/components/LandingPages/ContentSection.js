import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    min-height: 100vh;
  }

  html {
    height: 100%;
  }
`

const YellowContainer = styled.div`
  background-color: #ffd343;
  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;
`

const StyledSection = styled.section`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  background-color: #ffd343;
  max-width: none;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  @media screen and (max-width: 991px) {
    padding: 50px 5% 65px;
  }

  @media screen and (max-width: 767px) {
    padding: 40px 4%;
  }

  @media screen and (max-width: 479px) {
    padding: 30px 5%;
  }
  
  & div {
    width: auto;
    max-width: 1400px;
    margin-top: 20px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 30px;
    position: relative;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    &.megaNav-container {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;

      @media screen and (max-width: 991px) {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: start;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
      }
    }
  }
`

export default function ContentSection(props) {
  return (
    <React.Fragment>
      <GlobalStyle />
      <YellowContainer>
        <StyledSection>
          <div>{props.children}</div>
        </StyledSection>
      </YellowContainer>
    </React.Fragment>
  )
};

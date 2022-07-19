import React from 'react';
import styled from 'styled-components';

const StyledNode1 = styled.div`
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;

  width: 100%;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
      
  -ms-grid-column: 1;
  grid-column-start: 1;
  -ms-grid-column-span: 1;
  grid-column-end: 2;
  -ms-grid-row: 1;
  grid-row-start: 1;
  -ms-grid-row-span: 1;
  grid-row-end: 2;

  & h1 {
    font-family: 'Playfair Display', sans-serif;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 48px;
    line-height: 42px;
    margin-top: 20px;
    
    color: #0c0a89;
  }

  & p {
    font-family: Barlow, sans-serif;
    color: #0c0a89;
    font-size: 16px;

    margin-top: 0;
    margin-bottom: 20px;
  }
`

const StyledNode2 = styled.div`
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  -ms-grid-row-align: center;
  align-self: center;

  width: 100%;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
      
  -ms-grid-column: 1;
  grid-column-start: 1;
  -ms-grid-column-span: 1;
  grid-column-end: 2;
  -ms-grid-row: 1;
  grid-row-start: 1;
  -ms-grid-row-span: 1;
  grid-row-end: 2;

  & h1 {
    font-family: 'Playfair Display', sans-serif;
    font-weight: bold;
    margin-bottom: 10px;
    
    color: #0c0a89;
    font-size: 38px;
    line-height: 44px;
    margin-top: 20px;
  }
  
  & p {
    font-family: Barlow, sans-serif;
    color: #0c0a89;

    margin: 0 0 10px 0;
  }
`

const StyledNode3 = styled.div`
  align-self: center;

  -ms-grid-column: 2;
  grid-column-start: 2;
  -ms-grid-column-span: 1;
  grid-column-end: 3;
  -ms-grid-row: 1;
  grid-row-start: 1;
  -ms-grid-row-span: 1;
  grid-row-end: 2;

  & div {
    margin-top: 25px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`

const ContactLink = styled.a`
  margin-bottom: 19px;
  font-family: 'Playfair Display', sans-serif;
  color: #0c0a89;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
`

function AccessHeading11() {
  return (
    <React.Fragment>
      <StyledNode1 id='1'>
        <h1>Get Early Access</h1>
        <p>Apply below and we'll reach out to discuss upcoming private beta access!</p>
      </StyledNode1>
    </React.Fragment>
  )
}

function AccessHeading12() {
  return (
    <React.Fragment>
      <StyledNode2 id='2'>
        <h1>Learn More</h1>
        <p>Share your contact details below and a representative will provide more information on Mavata.</p>
      </StyledNode2>
    </React.Fragment>
  )
}

function AccessHeading2() {
  return (
    <React.Fragment>
      <StyledNode3>
        <div>
          <ContactLink to="mailto:info@mavata.com?subject=Early%20Access">info@mavata.com</ContactLink>
        </div>
      </StyledNode3>
    </React.Fragment>
  )
}

export { AccessHeading11, AccessHeading12, AccessHeading2 };
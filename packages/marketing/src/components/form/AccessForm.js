import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import SubmitButton from '../buttons/SubmitButton';
import { AccessHeading11, AccessHeading12, AccessHeading2 } from './AccessHeading';
import AccessCheckbox from './AccessCheckbox';

const StyledGridItem12 = styled.div`
  -ms-grid-column: 1;
  grid-column-start: 1;
  -ms-grid-column-span: 1;
  grid-column-end: 2;
  -ms-grid-row: 2;
  grid-row-start: 2;
  -ms-grid-row-span: 1;
  grid-row-end: 3;
`

const StyledGridItem11 = styled.div`
  -ms-grid-column: 1;
  grid-column-start: 1;
  -ms-grid-column-span: 1;
  grid-column-end: 2;
  -ms-grid-row: 1;
  grid-row-start: 1;
  -ms-grid-row-span: 1;
  grid-row-end: 2;
`

const StyledGridItem21 = styled.div`
  -ms-grid-column: 2;
  grid-column-start: 2;
  -ms-grid-column-span: 2;
  grid-column-end: 3;
  -ms-grid-row: 1;
  grid-row-start: 1;
  -ms-grid-row-span: 1;
  grid-row-end: 2;
`

const StyledGridItem22 = styled.div`
  -ms-grid-column: 2;
  grid-column-start: 2;
  -ms-grid-column-span: 2;
  grid-column-end: 3;
  -ms-grid-row: 2;
  grid-row-start: 2;
  -ms-grid-row-span: 1;
  grid-row-end: 3;
`

const StyledForm = styled.form`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  @media screen and (max-width: 479px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
`

const GridContainer = styled.div`
  display: grid;

  width: 100%;
  margin-bottom: 0px;

  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 28px;
  grid-column-gap: 28px;

  @media screen and (max-width: 767px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 479px) {
    margin-bottom: 0px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
`

const Controls = styled.div`
  width: 100%;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  text-align: left;
  float: left;

  -ms-grid-column: 1;
  grid-column-start: 1;
  -ms-grid-column-span: 1;
  grid-column-end: 2;
  -ms-grid-row: 2;
  grid-row-start: 2;
  -ms-grid-row-span: 1;
  grid-row-end: 3;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

const ControlLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`

const ControlInput = styled.input.attrs({ type: 'text' })`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 100%;

`

const FormInput = styled.input`
  display: block;

  height: 55px;
  width: 100%;
  line-height: 1.428571429;

  padding: 0 12px;
  margin-bottom: 10px;

  font-size: 14px;
  font-family: 'Playfair Display', sans-serif;
  color: '#333';
  vertical-align: middle;
  border: 1px solid #15113b;
  border-radius: 3px;
  background-color: #fff;

  :hover {
    border-style: solid;
    background-color: hsla(0, 0%, 100%, 0.5);
  }

  :focus {
    border-color: #15113b;
    border-style: solid;
    outline: 0;
    background-color: #ffd343;
  }

  :active {
    border-style: solid;
    background-color: #ffd343;
  }

  ::placeholder, :-moz-placeholder, 
  :-ms-input-placeholder, ::-webkit-input-placeholder {
    font-family: 'Playfair Display', sans-serif;
    color: #999;
    opacity: 1;
  }
`

const Actions = styled.div`
  text-align: left;
`

const StyledHeading = styled.h4`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  font-family: 'Playfair Display';

  position: relative;
  padding: 0px;
  color: #15113b;
  font-weight: 700;
`

const StyledGrid = styled.div`
  display: -ms-grid;
  display: grid;
  grid-auto-columns: 1fr;
  -ms-grid-columns: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  -ms-grid-rows: auto auto;
  grid-template-rows: auto auto;
  grid-row-gap: 16px;
  grid-column-gap: 16px;
`

function AccessForm(props) {
  let location = useLocation();
  console.log(location.pathname);

  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredFirm, setEnteredFirm] = useState('');

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const firmChangeHandler = (event) => {
    setEnteredFirm(event.target.value);
  };

  const supportChangeHandler = (event) => {};

  const pricingChangeHandler = (event) => {};

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = {
      name: enteredName,
      email: enteredEmail,
      firm: enteredFirm,
    };

    // BEM TO DO: save to list, send email, display temporary success message

    // reset form
    setEnteredName('');
    setEnteredEmail('');
    setEnteredFirm('');
  };

  const LearnMoreSection = () => {    
    return (
      <React.Fragment>
        <StyledHeading>I'm interested in: </StyledHeading>
        <StyledGrid>
          <AccessCheckbox name="Support">Learn More</AccessCheckbox>
          <AccessCheckbox name="Pricing-and-Plans">Getting Early Access</AccessCheckbox>
        </StyledGrid>
      </React.Fragment>
    )
  };

  return (
    <StyledForm onSubmit={submitHandler} id="email-form" data-name="Contact Form" name="Contact-Form" >
      <GridContainer>

        <StyledGridItem11>
          {(location.pathname === '/learn') ? <AccessHeading12 /> : <AccessHeading11 />}
        </StyledGridItem11>

        <StyledGridItem12>
          <Controls>
            <ul><FormInput type='text' placeholder="Full Name" value={enteredName} onChange={nameChangeHandler} maxLength="256" name="Full-Name" data-name="Full Name" id="Full-Name" required="" /></ul>
            <ul><FormInput type='email' placeholder="Email" value={enteredEmail} onChange={emailChangeHandler} maxLength="256" name="Email-5" data-name="Email 5" id="Email-5" required="" /></ul>
            <ul><FormInput type='text' placeholder="Firm" value={enteredFirm} onChange={firmChangeHandler} maxLength="256" name="Firm" data-name="Firm" id="Firm-2" required="" /></ul>
          </Controls>

          {(location.pathname === '/learn') ? <LearnMoreSection /> : ''}

          <Actions>
            <SubmitButton />
          </Actions>
        </StyledGridItem12>

        <StyledGridItem21>
          <AccessHeading2 />
        </StyledGridItem21>

        <StyledGridItem22>
          <div></div>
        </StyledGridItem22>
      </GridContainer>
    </StyledForm>
  )
};

export default AccessForm;
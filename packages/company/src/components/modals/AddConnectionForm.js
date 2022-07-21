import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FormDiv = styled.div`
  width: fit-content;
  padding: 10px;    /* same as ModalHeading in NewProfile.js */
  margin: 0;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;

  justify-content: flex-start;
`

const Control = styled.div`
  & label {
    font-family: Barlow, sans-serif;
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  & input {
    font: inherit;
    color: 000;
    font-family: Barlow, sans-serif;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
`

const ButtonDiv = styled.div`
  position: relative;
  vertical-align: middle;
  white-space: nowrap;

  width: fit-content;
  block-size: fit-content;

  display: flex;
  float: left;
  align: left;
`

const StyledButton = styled.button`
  && {
    min-height: 35px;

    float: left;
    align: left;

    padding: 11px 15px 11px 15px;
    margin: 0 auto;

    vertical-align: middle;

    background-color: #0c0a89;
    color: white;
    border-color: #0c0a89;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 8px;
    font-weight: bold;
    font-family: Overpass;
    font-size: 15px;
    letter-spacing: -0.02em;
    color: #FFFFFF;

    &:hover {
      margin-left: 0px;
      border-color: transparent;
      background-color: #15113b;
      box-shadow: 1px 1px 12px 0 rgba(0; 0; 0; 0.08);
      -webkit-transform: translate(5px; 0px);
      -ms-transform: translate(5px; 0px);
      transform: translate(5px; 0px);
      color: #fff;
      text-decoration: none;
    }
  }

  & div {
    width: fit-content;
    block-size: fit-content;
    width: 100%;
    margin-left: 6%;
    margin-top: 5px;
    margin-bottom: 5px;

    font-family: Overpass;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    /* identical to box height; or 133% */
    letter-spacing: -0.02em;
    color: #FFFFFF;
    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;
  }
`

export default function AddConnectionForm({ company, onAddConnection, closeModal}) {
  const [userInput, setUserInput] = useState({
    enteredName: company.name,
  });

  useEffect(() => {
    setUserInput((prevState) => ({
      ...prevState,
      enteredName: company.name
    }))
  }, [company]);

  const addConnectionHandler = (event) => {
    event.preventDefault();
    
    onAddConnection()
  }

  const nameChangeHandler = (event) => {
    // setEnteredName(event.target.value)
    setUserInput((prevState) => {
      return { ...prevState, enteredName: event.target.value }
    })
  }

  return (
    <React.Fragment>
      <FormDiv>
        <Form onSubmit={addConnectionHandler}>
          <Control>
            <label htmlFor="business-name">Business Name</label>
            <input 
              id='business-name' 
              type='text' 
              value={userInput.enteredName} 
              onChange={nameChangeHandler}
            />
          </Control>
          <ButtonDiv>
            <StyledButton type='submit'>Find Company</StyledButton>
          </ButtonDiv>
        </Form>
      </FormDiv>
    </React.Fragment>
  )
}
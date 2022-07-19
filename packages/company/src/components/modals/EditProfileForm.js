import React, { useState } from 'react';
import styled from 'styled-components';

import ButtonWorkflow from '../buttons/ButtonWorkflow';

const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`

const Control = styled.div`
  & label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    display: block;
  }

  & input {
    font: inherit;
    padding: 0.5rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    width: 20rem;
    max-width: 100%;
  }
`

export default function EditProfileForm(props) {
  const { company } = props;

  const [userInput, setUserInput] = useState({
    enteredName: company.name,
    enteredDescription: company.description,
    enteredSector: company.sector,
    enteredLocation: company.location,
    enteredWebsite: company.website,
  })
  // const [enteredName, setEnteredName] = useState('');
  // const [enteredDescription, setEnteredDescription] = useState('');
  // const [enteredSector, setEnteredSector] = useState('');
  // const [enteredLocation, setEnteredLocation] = useState('');
  // const [enteredWebsite, setEnteredWebsite] = useState('');

  const nameChangeHandler = (event) => {
    // setEnteredName(event.target.value)

    setUserInput((prevState) => {
      return { ...prevState, enteredName: event.target.value}
    })
  }

  const descriptionChangeHandler = (event) => {
    // setEnteredName(event.target.value)
    setUserInput((prevState) => {
      return { ...prevState, enteredDescription: event.target.value}
    })
  }

  const sectorChangeHandler = (event) => {
    // setEnteredName(event.target.value)
    setUserInput((prevState) => {
      return { ...prevState, enteredSector: event.target.value}
    })
  }

  const locationChangeHandler = (event) => {
    // setEnteredName(event.target.value)
    setUserInput((prevState) => {
      return { ...prevState, enteredLocation: event.target.value}
    })
  }

  const websiteChangeHandler = (event) => {
    // setEnteredName(event.target.value)
    setUserInput((prevState) => {
      return { ...prevState, enteredWebsite: event.target.value}
    })
  }

  const submitHandler = (event) => {
    event.preventDefault();
    
    props.onSaveProfile();
    
    setUserInput({
      enteredName: '',
      enteredDescription: '',
      enteredSector: '',
      enteredLocation: '',
      enteredWebsite: '',
    })
  }

  return (
    <React.Fragment>
      <Form onSubmit={submitHandler}>
        <Control>
          <label>Company Name</label>
          <input type='text' value={userInput.enteredName} onChange={nameChangeHandler} />
        </Control>
        <Control>
          <label>Description</label>
          <input type='text' value={userInput.enteredDescription} onChange={descriptionChangeHandler} />
        </Control>
        <Control>
          <label>Sector</label>
          <input type='text' value={userInput.enteredSector} onChange={sectorChangeHandler} />
        </Control>
        <Control>
          <label>Headquarters</label>
          <input type='text' value={userInput.enteredLocation} onChange={locationChangeHandler} />
        </Control>
        <Control>
          <label>Website</label>
          <input type='text' value={userInput.enteredWebsite} onChange={websiteChangeHandler} />
        </Control>
        <ButtonWorkflow type='submit'>Update Profile</ButtonWorkflow>
      </Form>
    </React.Fragment>
  )
}
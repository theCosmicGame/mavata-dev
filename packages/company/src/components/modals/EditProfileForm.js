import React, { useState } from 'react';
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

const DescriptionInput = styled.textarea`
  font: inherit;
  color: 000;
  font-family: Barlow, sans-serif;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 40rem;
  max-width: 100%;

  height: 100px;
  word-wrap: break-word!important;
  word-break: break-all!important;

  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
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

// fetching Profile Data logic
// BEM TO DO: create dropdown for sector with custom 'other' input
export default function EditProfileForm({ company, onSaveProfile, closeModal }) {
  const [userInput, setUserInput] = useState({
    enteredName: company.name,
    enteredDescription: company.description,
    enteredSector: company.sector,
    enteredLocation: company.location,
    enteredWebsite: company.website,
  })

  const nameChangeHandler = (event) => {
    // setEnteredName(event.target.value)
    setUserInput((prevState) => {
      return { ...prevState, enteredName: event.target.value }
    })
  }

  const descriptionChangeHandler = (event) => {
    // setEnteredName(event.target.value)
    setUserInput((prevState) => {
      return { ...prevState, enteredDescription: event.target.value }
    })
  }

  const sectorChangeHandler = (event) => {
    // setEnteredName(event.target.value)
    setUserInput((prevState) => {
      return { ...prevState, enteredSector: event.target.value }
    })
  }

  const locationChangeHandler = (event) => {
    // setEnteredName(event.target.value)
    setUserInput((prevState) => {
      return { ...prevState, enteredLocation: event.target.value }
    })
  }

  const websiteChangeHandler = (event) => {
    // setEnteredName(event.target.value)

    // BEM TO DO: validation logic that it is a web domain 

    setUserInput((prevState) => {
      return { ...prevState, enteredWebsite: event.target.value }
    })
  }

  const updateProfileHandler = (event) => {
    event.preventDefault();

    // BEM TO DO: finish validation logic

    if (userInput.enteredName.trim().length === 0) {
      // BEM TO DO: show error modal
      return;
    }

    if (userInput.enteredDescription.trim().length === 0) {
      setUserInput((prevState) => {
        return { ...prevState, enteredDescription: 'Enter a company description' }
      })
    }

    onSaveProfile(userInput);

    setUserInput({
      enteredName: '',
      enteredDescription: '',
      enteredSector: '',
      enteredLocation: '',
      enteredWebsite: '',
    })

    closeModal();
  }

  return (
    <React.Fragment>
      <FormDiv>
        <Form onSubmit={updateProfileHandler}>
          <Control>
            <label htmlFor='company-name'>Company Name</label>
            <input
              id='company-name'
              type='text'
              value={userInput.enteredName}
              onChange={nameChangeHandler}
            />
          </Control>
          <Control>
            <label htmlFor='company-description'>Description</label>
            <DescriptionInput
              id='company-description'
              name='text'
              rows="14"
              cols="10"
              wrap="soft"
              value={userInput.enteredDescription}
              onChange={descriptionChangeHandler}
            />
          </Control>
          <Control>
            <label htmlFor='sector'>Sector</label>
            <input
              id='sector'
              type='text'
              value={userInput.enteredSector}
              onChange={sectorChangeHandler}
            />
          </Control>
          <Control>
            <label htmlFor='location'>Headquarters</label>
            <input
              id='location'
              type='text'
              value={userInput.enteredLocation}
              onChange={locationChangeHandler}
            />
          </Control>
          <Control>
            <label htmlFor='website'>Website</label>
            <input
              id='website'
              type='text'
              value={userInput.enteredWebsite}
              onChange={websiteChangeHandler}
            />
          </Control>
          {/* <SubmitButton onClick={updateProfileHandler}>Update Profile</SubmitButton> */}
          <ButtonDiv>
            <StyledButton type='submit'>Update Profile</StyledButton>
          </ButtonDiv>
        </Form>
      </FormDiv>
    </React.Fragment>
  )
}
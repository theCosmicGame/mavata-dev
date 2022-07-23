import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { adminPermissions, collabPermissions } from '../../variables/users';

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
  font-family: Barlow, sans-serif;
  
  & h5 {
    font-family: Barlow, sans-serif;
    font-weight: bold;
    font-size: var(--mdb-body-font-size);
    padding-right: 10px;
    display: inline-block;
  }

  & select {
    width: 100%;
    font-size: inherit;
    padding: 5px;
  }

  & label {
    font-family: Barlow, sans-serif;
    font-weight: bold;
    /* margin-bottom: 0.5rem; */
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

const FormGroup = styled.div`
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-family: Barlow, sans-serif;

  & h3 {
    font-size: var(--mdb-body-font-size);
    font-weight: bold;
  }

  & div {
    flex-basis: 100%;
  }

  & input {
    padding: 0.5rem;
    margin: 0.5rem;
    display: inline-block;
  }

  & label {
    font-family: Barlow, sans-serif;
    font-size: var(--mdb-body-font-size);
    display: inline-block;
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

export default function EditUserPermissionsForm({ company, user, onEditPermissions, closeModal }) {
  console.log('in EditUserPermissionsForm.js', user)
  
  const permissions = user.permissions[company.id]

  const [userName, setUserName] = useState(user.name);
  const [dropdown, setDropdown] = useState((user.role.includes('User') ? 'Viewer' : user.role));
  const [dataIsChecked, setDataIsChecked] = useState(permissions.data === 'full' || permissions.data === 'view')  // BEM TO DO
  const [viewIsChecked, setViewIsChecked] = useState(permissions.users === 'edit' || permissions.users === 'view')
  const [detailsIsChecked, setDetailsIsChecked] = useState(permissions.details === 'edit')
  const [empty, setEmpty] = useState('');

  const editPermissionsHandler = (event) => {
    event.preventDefault();
    let p = permissions;

    let da = (dataIsChecked ? 'view' : 'none')
    let u = (viewIsChecked ? 'view' : 'none')
    let dt = (detailsIsChecked ? 'edit' : 'view')
    let r = dropdown;

    p = {
      data: da,
      users: u,
      details: dt
    }
    
    if (dropdown === 'Collaborator') {
      p = collabPermissions
    } else {
      r = user.role;
    }
    // BEM TO DO: confirmation modal and validation logic
    let enteredPermissions = {
      name: userName,
      role: dropdown,
      permissions: p,
      empty: empty
    }

    // console.log('form submit', r, enteredPermissions)

    onEditPermissions(enteredPermissions)
    closeModal();
  }

  const dropdownHandler = (event) => {
    // setEnteredName(event.target.value)
    setDropdown(event.target.value)
    console.log(dropdown)
  }

  const emptyHandler = (event) => {
    setEmpty(event.target.value)
  }

  const dataCheckboxHandler = (event) => {
    setDataIsChecked(event.target.checked)
  }

  const viewCheckboxHandler = (event) => {
    setViewIsChecked(event.target.checked)
  }

  const detailsCheckboxHandler = (event) => {
    setDetailsIsChecked(event.target.checked)
  }

  return (
    <React.Fragment>
      <FormDiv>
        <Form onSubmit={editPermissionsHandler}>
          <Control>
            <label htmlFor="user-name">Name</label>
            <input
              id='user-name'
              type='text'
              readOnly
              value={userName}
            />
          </Control>
          <Control>
            <label htmlFor='user-role'><h5>Role</h5>
              <select value={dropdown} onChange={dropdownHandler}>
                <option value='Collaborator'>Collaborator</option>
                <option value='Viewer'>Viewer</option>
              </select>
            </label>
          </Control>
          {(dropdown === 'Viewer') ?
            <FormGroup>
              <h3>Permissions</h3>
              <div>
                <input
                  id='permissions-data'
                  type='checkbox'
                  value='Data'
                  checked={dataIsChecked} 
                  onChange={dataCheckboxHandler}
                /><label htmlFor='permissions-data'>Data (View Only)</label>
              </div>
              <div>
                <input
                  id='permissions-users-view'
                  type='checkbox'
                  value='Data'
                  checked={viewIsChecked} 
                  onChange={viewCheckboxHandler}
                /><label htmlFor='permissions-users'>Users (View Only)</label>
              </div>
              <div>
                <input
                  id='permissions-details'
                  type='checkbox'
                  value='Data'
                  checked={detailsIsChecked} 
                  onChange={detailsCheckboxHandler}
                /><label htmlFor='permissions-details'>Details (Edit)</label>
              </div>
            </FormGroup>
            : ''}
          <Control>
            <label htmlFor='empty'>La la la</label>
            <input
              id='empty'
              type='text'
              value={empty}
              onChange={emptyHandler}
            />
          </Control>
          <ButtonDiv>
            <StyledButton type='submit'>Update Permissions</StyledButton>
          </ButtonDiv>
        </Form>
      </FormDiv>
    </React.Fragment>
  )
}
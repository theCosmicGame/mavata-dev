import React, { useState } from 'react';
import styled from 'styled-components';

import Intro from './Intro';
import DataConnection from './DataConnection';
import UsersTable from '../table/UsersTable';

import NewProfile from '../modals/NewProfile';
import NewConnection from '../modals/NewConnection';

const ContentSection = styled.div`
  display: block;
  top: 0;
  left: 0;
  color: #000;
  font-family: Barlow;
`

export default function Profile(props) {
  const { company, onUpdateCompany, onUpdateDescription, isExpanded, mainWidth } = props;

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  // console.log('show', showProfileModal, showConnectionModal)
  console.log('in Profile.js', company)
  const updateProfileHandler = (enteredProfileData) => {
    onUpdateCompany(enteredProfileData)
    onUpdateDescription(enteredProfileData);
  }

  const openProfileModal = () => {
    setShowProfileModal(true);
  }

  const closeProfileModal = () => {
    setShowProfileModal(false);
  }

  const openConnectionModal = () => {
    setShowConnectionModal(true);
  }

  const closeConnectionModal = () => {
    setShowConnectionModal(false);
  }

  const addConnectionHandler = (enteredConnectionData) => {

  }

  return (
    <React.Fragment>
      {showProfileModal ? 
        <NewProfile 
          company={company} 
          onUpdateProfile={(data) => updateProfileHandler(data)} 
          showModal={showProfileModal} 
          closeModal={closeProfileModal} 
        /> : 
      ''}
      {showConnectionModal ? 
        <NewConnection 
          company={company} 
          onAddConnection={addConnectionHandler} 
          showModal={showConnectionModal} 
          closeModal={closeConnectionModal} 
        /> : 
      ''}
      <ContentSection>
        <Intro 
            company={company} 
            openModal={openProfileModal} 
            onUpdateDescription={onUpdateDescription}
            isExpanded={isExpanded} 
            mainWidth={mainWidth} 
          />
        <DataConnection company={company} openModal={openConnectionModal} />
        <UsersTable company={company} />
      </ContentSection>
    </React.Fragment>
  )
}
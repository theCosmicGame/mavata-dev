import React, { useState } from 'react';
import styled from 'styled-components';

import Intro from './Intro';
import Data from './Data';
import UsersTable from '../table/UsersTable';

import NewProfile from '../modals/NewProfile';
import NewConnection from '../modals/NewConnection';
import UserPermissions from '../modals/UserPermissions';

const ContentSection = styled.div`
  display: block;
  top: 0;
  left: 0;
  color: #000;
  font-family: Barlow;
`

export default function Profile(props) {
  const { company, activeUser, onUdpdateUsers, 
          onUpdateCompany, onUpdateDescription, isExpanded, 
          mainWidth } = props;

  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showConnectionModal, setShowConnectionModal] = useState(false);
  const [showOtherUserModal, setShowOtherUserModal] = useState(false);
  const [editUser, setEditUser] = useState({});

  const [hasConnection, setHasConnection] = useState(false);

  // BEM TO DO: determine what view to render

  // Admin can remove users and edit their permissions
  // Collaborator can edit company details and add a connection but cannot change (/see ?) other users 
  // Viewer can only view select company details (Intro, maybe data channels, maybe other users (not External))
  let userRole = {}

  if (activeUser.roles.admin.includes(company.id)) {
    userRole = {
      role: 'Admin',
      data: true,
      users: 'edit'
    }
  } else if (activeUser.roles.collaborator.includes(company.id)) {
    userRole = {
      role: 'Collaborator',
      data: true,
      users: 'view'
    }
  // BEM TO DO: check if external?
  } else if (activeUser.roles.viewer.includes(company.id) && company.firmId === activeUser.firmId) {
    userRole = {
      role: 'Viewer',
      data: false,  // BEM TO DO
      users: 'view' // BEM TO DO
    }
  } else {
    userRole = {
      role: 'Viewer', // admin, collaborator, viewer
      data: false,  // false, true
      users: false // false, view, edit
    }
  }
  // console.log(activeUser, company.id, userRole)

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

  const openUserModal = (user) => {
    setEditUser(user)
    setShowOtherUserModal(true);
  }

  const closeUserModal = () => {
    setShowOtherUserModal(false);
  }

  const editPermissionsHandler = (enteredUserPermissions) => {
    // update editUser
    // update Users
    // update company.users.rows
    setEditUser(prevState => ({
      ...prevState,
      role: enteredUserPermissions.role,
      empty: enteredUserPermissions.empty
    }))

    let newUsers = company.users.rows.map((user, idx) => {
      if (user.id === editUser.id) {
        return {
          ...user,
          role: enteredUserPermissions.role,
          permissions: enteredUserPermissions.permissions,
          empty: enteredUserPermissions.empty
        }
      } else {
        return user
      }
    })

    onUdpdateUsers(newUsers)
    // console.log('in Profile.js', editUser, newUsers)

  }

  const openConnectionModal = () => {
    setShowConnectionModal(true);
  }

  const closeConnectionModal = () => {
    setShowConnectionModal(false);
  }

  const addConnectionHandler = (enteredConnectionData) => {
    setHasConnection(true);
    closeConnectionModal();
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
      {showOtherUserModal ? 
        <UserPermissions 
          company={company} 
          editUser={editUser}
          onEditPermissions={editPermissionsHandler} 
          showModal={showOtherUserModal} 
          closeModal={closeUserModal} 
        /> : 
      ''}
      <ContentSection>
       {/* every viewer */}
        <Intro 
            company={company} 
            openModal={openProfileModal} 
            onUpdateDescription={onUpdateDescription}
            isExpanded={isExpanded} 
            mainWidth={mainWidth} 
          />
        { /* select viewers */}
         <Data 
          company={company} 
          userRole={userRole}
          openModal={openConnectionModal} 
          hasConnection={hasConnection}
        />
        { /* admin only */}
        <UsersTable 
          company={company} 
          editUser={editUser} 
          openModal={openUserModal}
          onEditUser={editPermissionsHandler}
        />
      </ContentSection>
    </React.Fragment>
  )
}
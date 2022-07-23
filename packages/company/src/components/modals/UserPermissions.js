import React, { useState } from 'react';

import Modal from './Modal';
import EditUserPermissionsForm from './EditUserPermissionsForm';

export default function UserPermissions(props) {
  const { company, editUser, onEditPermissions, showModal, closeModal } = props;
  // console.log('in UserPermissions.js', editUser)
  
  return (
    <React.Fragment>
      <Modal closeModal={closeModal} >
        <h1>{`Edit ${editUser.name}'s Permissions`}</h1>
        <EditUserPermissionsForm
          company={company} 
          user={editUser} 
          onEditPermissions={onEditPermissions} 
          closeModal={closeModal} 
        />
      </Modal>
    </React.Fragment>
  )
}
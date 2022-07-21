import React, { useState } from 'react';
import styled from 'styled-components';

import EditProfileForm from './EditProfileForm';
import Modal from './Modal';

export default function NewProfile({ company, onUpdateProfile, closeModal }) {
  return (
    <React.Fragment>
      {/* add backdrop confirmation when data was editted */}
      <Modal closeModal={closeModal} >
        <h1>Edit Company Profile</h1>
        <EditProfileForm
          company={company}
          onSaveProfile={(data) => onUpdateProfile(data)}
          closeModal={closeModal}
        />
      </Modal>
    </React.Fragment>
  )
}
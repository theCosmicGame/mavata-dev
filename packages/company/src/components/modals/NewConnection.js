import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from './Modal';
import AddConnectionForm from './AddConnectionForm';

export default function NewConnection({ company, onAddConnection, closeModal }) {
  return (
    <React.Fragment>
      <Modal closeModal={closeModal} >
        <h1>Add Company Data Connection</h1>
        <AddConnectionForm
          company={company}
          onAddConnection={onAddConnection}
          closeModal={closeModal}
        />
      </Modal>
    </React.Fragment>
  )
}
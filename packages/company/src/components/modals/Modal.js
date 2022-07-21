import { OmitProps } from 'antd/lib/transfer/ListBody';
import React, { useState } from 'react';
import styled from 'styled-components';

import EditProfileForm from './EditProfileForm';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`

const ModalWindow = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;

  padding: 15px;
  margin: 0;

  position: fixed;
  top: 15vh;
  left: 10%;
  width: 50vw;
  max-height: 80vh;
  z-index: 100;
  overflow-y: auto;

  & h1 {
    font-family: Barlow, sans-serif;
    font-weight: 900;
    color: #0c0a89;
    font-size: 2em;

    padding: 10px;  /* same as FormDiv in EditProfileForm.js */
    margin: 0;
  }

  @media (min-width: 768px) {
    left: calc(50% - 20rem);
    width: 45rem;
  }

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

const ModalHeading = styled.h1`
  font-family: Barlow, sans-serif;
  font-weight: 900;
  color: #0c0a89;
  font-size: 2em;

  padding: 10px;  /* same as FormDiv in EditProfileForm.js */
  margin: 0;
`

export default function Modal({ closeModal, ...props }) {
  return (
    <React.Fragment>
      {/* add backdrop confirmation when data was editted */}
      <Backdrop onClick={closeModal} />
      <ModalWindow>
        {props.children}
      </ModalWindow>
    </React.Fragment>
  )
}
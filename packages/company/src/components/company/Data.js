import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Wrapper from '../Wrapper';
import EmptyConnection from '../connection/EmptyConnection';

export default function Data({ company, openModal, hasConnection }) {
  const [connection, setConnection] = useState(false);

  useEffect(() => {
    setConnection(hasConnection)
  }, [hasConnection])

  return (
    <Wrapper>
      {!connection ? <EmptyConnection company={company} openModal={openModal} /> : ''}
    </Wrapper>
  )
}
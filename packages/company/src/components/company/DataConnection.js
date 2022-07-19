import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Wrapper';

import DataLayer from '../../assets/img/icons/data-layer.png';
import ButtonWorkflow from '../buttons/ButtonWorkflow';

const ImgEmpty = styled.img.attrs({ src: `${DataLayer}` })`
  margin: auto;
  padding: 30px;

  /* center an image */
  display: block;
  align: center;

  order: 2;

`

const EmptyConnectionText = styled.p`
  margin: 10px 0;
  width: 305px;

  font-family: 'Overpass';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* or 133% */
  text-align: center;
  letter-spacing: -0.03em;
  /* Grays/002 */
  color: #595874;
  /* Inside auto layout */
  order: 2;
  flex-grow: 0;
`

const ConnectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align: center;

  width: auto;
  margin: auto;
`

const StyledButton = styled.div`
  order: 3;
  flex-grow: 0;
  padding: 20px 30px 30px;
`

export default function DataConnection() {

  return (
    <Wrapper>
      <ConnectionContainer>
        <ImgEmpty alt='Add Connection' />
        <EmptyConnectionText>Your data channels are currently empty. Add a connection to continue.</EmptyConnectionText>
        <StyledButton><ButtonWorkflow to='/addconnection'>Add Data Connection</ButtonWorkflow></StyledButton>
      </ConnectionContainer>
    </Wrapper>
  )
}
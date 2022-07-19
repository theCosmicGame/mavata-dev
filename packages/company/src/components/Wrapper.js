import React from 'react';
import styled from 'styled-components';
import Container from '@mui/material/Container';

const Wrap = styled(Container)`
  margin: 5px;
  padding: 5px;
  width: auto;

  background: #ffffff;

  box-sizing: border-box;
  border: 1px solid #EEF1F6;
  border-radius: 12px;  
`

export default function Wrapper(props) {

  return (
    <Wrap maxWidth={false} >
      {props.children}
    </Wrap>
  )
}
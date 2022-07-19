import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  border-radius: 3px;
  border: 0;
  background-color: #15113b;
  color: #fff;

  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;

  font-family: 'Playfair Display', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: inherit;
  text-decoration: none;

  display: inline-block;
  padding: 9px 15px;
  height: auto;
  cursor: pointer;

  @media screen and (max-width: 479px) {
    min-height: 45px;
    text-align: center;
  }

  @media screen and (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
  }
  
  &:hover {
    background-color: #15113b;
    -webkit-transform: translate(0px, -2px);
    -ms-transform: translate(0px, -2px);
    transform: translate(0px, -2px);
    color: #fff;
    text-decoration: none;
  }
`

export default function SubmitButton() {
  return (
    <React.Fragment>
      <StyledInput type="submit" value="Send " data-wait="Please wait..." />
    </React.Fragment>
  );
};
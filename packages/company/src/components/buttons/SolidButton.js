import React from 'react';
import styled from 'styled-components';

import { inStr } from 'containerMfe/Functions';
import PlusCircle from '../../assets/img/icons/plus-circle-white.png';

const StyledDiv = styled.div`
  position: relative;
  vertical-align: middle;
  white-space: nowrap;

  width: fit-content;
  block-size: fit-content;

  display: flex;
  float: left;
  align: left;
`

const StyledButton = styled.button`
  display: flex;
  
  && {
    min-height: 35px;

    padding: 11px 15px 11px 15px;
    margin: 0 auto;

    vertical-align: middle;

    background-color: #0c0a89;
    color: white;
    border-color: #0c0a89;
    line-height: inherit;
    text-decoration: none;
    cursor: pointer;
    border-radius: 8px;
    font-weight: bold;
    font-family: Overpass;
    font-size: 15px;
    letter-spacing: -0.02em;
    color: #FFFFFF;

    &:hover {
      margin-left: 0px;
      border-color: transparent;
      background-color: #15113b;
      box-shadow: 1px 1px 12px 0 rgba(0; 0; 0; 0.08);
      -webkit-transform: translate(5px; 0px);
      -ms-transform: translate(5px; 0px);
      transform: translate(5px; 0px);
      color: #fff;
      text-decoration: none;
    }
  }
`

const ButtonContents = styled.div`
  align-self: flex-start;
  align-items: baseline;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  gap: 0.5%;
  align: center;
  width: fit-content;
  block-size: fit-content;
  padding: 0;

  font-family: Overpass;
  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  /* identical to box height; or 133% */
  letter-spacing: -0.02em;
  line-height: 20px;
  color: #FFFFFF;

  & img {
    align-items: center;
    align-self: center;
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;
    margin-right: 5px; 
    vertical-align: top;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-self: center;
    justify-content: flex-end;

    width: fit-content;
  }
`

export default function SolidButton(props) {
  const buttonType = (props.type || 'button');

  return (
    <StyledDiv>
      <StyledButton
        type={buttonType} 
        onClick={props.onClick}
      >
        <ButtonContents>
          {inStr('add', buttonType) ? <img src={PlusCircle} alt='add connection' /> : ''}
          {props.children}
        </ButtonContents>
      </StyledButton>
    </StyledDiv>
  )
}
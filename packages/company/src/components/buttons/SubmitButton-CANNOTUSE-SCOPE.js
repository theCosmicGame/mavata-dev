import React from 'react';
import styled from 'styled-components';

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
  && {
    min-height: 35px;

    float: left;
    align: left;

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

  & div {
    width: fit-content;
    block-size: fit-content;
    width: 100%;
    margin-left: 6%;
    margin-top: 5px;
    margin-bottom: 5px;

    font-family: Overpass;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    /* identical to box height; or 133% */
    letter-spacing: -0.02em;
    color: #FFFFFF;
    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;
  }
`

export default function SubmitButton(props) {
  return (
    <StyledDiv>
      <StyledButton 
        type={props.type || 'button'} 
        onClick={props.onClick}
      >
        {props.children}
      </StyledButton>
    </StyledDiv>
  )
}
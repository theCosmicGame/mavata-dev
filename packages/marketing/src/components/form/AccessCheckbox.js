import React from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;

  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0px;

  border-bottom: 3px solid #15113b;
  font-family: Barlow, sans-serif;
  color: #0c0a89;
  text-align: left;

  :before {
    content: ' ';
    display: table;
    -ms-grid-column-span: 1;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    -ms-grid-row: 1;
    -ms-grid-row-span: 1;
    -ms-grid-column: 1;
  }

  :after {
    content: ' ';
    display: table;
    -ms-grid-column-span: 1;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    -ms-grid-column: 1;
    -ms-grid-row-span: 1;
    -ms-grid-row: 1;
    clear: both;
  }

  @media screen and (max-width: 991px) {
    width: 45%;
    margin-right: 5%;
  }

  @media screen and (max-width: 479px) {
    width: 100%;
    margin-top: 6px;
    border-bottom-color: #15113b;
    color: #15113b;
  }
`

const StyledCheckbox = styled.input.attrs({ type: 'checkbox' })`
  width: 9%;
  margin-left: 0px;

  box-sizing: border-box;
  padding: 0;

  float: left;
  margin-bottom: 0px;
  margin-right: 0px;
  margin-top: 4px;
  line-height: normal;

  vertical-align: middle;
  position: relative;
  marginleft: 30px;
  paddingleft: 30px;
`

const StyledSpan = styled.span`
  font-family: 'Playfair Display', sans-serif;
  margin-bottom: 0px;
  padding-left: 5px;
  color: #15113b;
  font-size: 16px;
  line-height: 1em;
  font-weight: 400;

  display: inline-block;
  cursor: pointer;

  @media screen and (max-width: 479px) {
    padding-left: 0px;
  }
`


export default function FieldCheckbox(props) {
  return (
    <React.Fragment>
      <StyledLabel>
        <StyledCheckbox id={props.name} name={props.name} data-name={props.name} />
        <StyledSpan htmlFor={props.name}>{props.children}</StyledSpan>
      </StyledLabel>
  </React.Fragment>
  )
}
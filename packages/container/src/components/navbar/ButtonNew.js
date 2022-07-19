import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.ul`
  display: inline-block;
  margin: 4px;
  padding: 0px;
`

const ButtonLink = styled(RouterLink)`
  margin-top: 0px;
  border-color: #0c0a89;
  color: #0c0a89;
  font-weight: bold;
  cursor: pointer;
  line-height: inherit;
  padding: 9px 15px;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  border-color: #15113b;
  border-radius: 3px;
  background-color: transparent;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  font-family: 'Playfair Display', sans-serif;
  font-size: 16px;
  font-weight: 400,
  text-transform: uppercase;
  
  &:hover {
    color: #fff;
    background-color: #15113b;
    border-color: transparent;
    margin-left: 0px;
    box-shadow: none;
    -webkit-transform: translate(2px, 0px);
    -ms-transform: translate(2px, 0px);
    transform: translate(2px, 0px);
    text-decoration: none;
  }
`

export default function ButtonNew(props) {
  return (
    <ButtonWrapper>
      <ButtonLink to={props.to} onClick={props.onClick}>{props.children}</ButtonLink>
    </ButtonWrapper>
  )
}
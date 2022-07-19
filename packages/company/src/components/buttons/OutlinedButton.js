import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import PlusCircleBlue from '../../assets/img/icons/plus-circle-blue.png'

const ButtonWrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;

  vertical-align: middle;
  white-space: nowrap;
  min-height: 35px;

  width: fit-content;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;

  &.hide {
    display: none!important;
  }
`

const OutlinedLink = styled(RouterLink)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;

  align: center;
  width: 150px;

  padding: 11px 30px 9px 15px;
  height: 100%;
  margin-bottom: 0px;

  border-style: solid;
  border-width: 1px;
  border-color: #08048C;
  border-radius: 16px;

  background-color: transparent;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  font-family: 'Playfair Display', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #08048C!important;
  
  &:hover {
    margin-left: 0px;
    border-width: 3px;
    box-shadow: 1px 1px 12px 0 rgba(0; 0; 0; 0.08);
    -webkit-transform: translate(2px; 0px);
    -ms-transform: translate(2px; 0px);
    transform: translate(2px; 0px);
    text-decoration: none;
    cursor: pointer;
  }
`

const PlusCircleIconMain = styled.img`
  display: block;
  width: 20px;
  height: 20px;
  left: 50%;
  top: 50%;
  margin: 0;
  padding: 0;
  vertical-align: middle;
`

const ButtonText = styled.span`
    margin-left: 6%;
    margin-bottom: 0px;
  
    font-family: Overpass;
    font-style: normal;
    font-weight: 700,
    font-size: 16px;
    align: left;
    /* identical to box height, or 133% */
    letter-spacing: -0.01em;
    /* Inside auto layout */
    flex: none;
    order: 2;
    flex-grow: 0;

    @media screen and (max-width: 767px) {
      display: none;
    };
`


export default function OutlinedButton(props) {
  return (
    <ButtonWrapper className={props.isExpanded ? '' : 'hide'}>
      <OutlinedLink to={props.to} onClick={props.onClick}>
        <PlusCircleIconMain src={PlusCircleBlue} alt='add' />
        <ButtonText>{props.children}</ButtonText>
      </OutlinedLink>
    </ButtonWrapper>
  )
}
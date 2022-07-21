import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import PlusCircle from '../../assets/img/icons/plus-circle-white.png';

const StyledDiv = styled.div`
  position: relative;
  vertical-align: middle;
  white-space: nowrap;

  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled(RouterLink)`
  min-height: 35px;

  flex: 0 0 auto;

  padding: 11px 30px 11px 15px;
  margin: 0 auto;

  align: center;
  vertical-align: middle;

  background-color: #0c0a89;
  color: white;
  border-color: #0c0a89;
  line-height: inherit;
  text-decoration: none;
  cursor: pointer;
  border-radius: 8px;
  font-weight: bold;

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

  @media screen and (max-width: 767px) {
    max-width: 50px;
  }

  & img {
    width: 20px;
    height: 20px;
    left: 50%;
    top: 50%;

    vertical-align: middle;
  }

  & span {
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

    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`

export default function ButtonLink(props) {
  return (
    <StyledDiv>
      <StyledButton to={props.to} onClick={props.onClick} type={props.type}>
        <img src={PlusCircle} alt='add' /><span>{props.children}</span>
      </StyledButton>
    </StyledDiv>
  )
}
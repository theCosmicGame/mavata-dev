import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const SolidButtonLink = styled(RouterLink)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
  padding: 9px 15px;
  cursor: pointer;

  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;

  border-radius: 3px;
  background-color: #ffd343;
  color: #000;
  font-family: 'Playfair Display', sans-serif;
  font-weight: 400;
  line-height: inherit;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  
  @media screen and (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
  }

  &:hover {
    margin-left: 0px;
    background-color: #09d5b0;
    color: #15113b;
    -webkit-transform: translate(0px, -2px);
    -ms-transform: translate(0px, -2px);
    transform: translate(0px, -2px);
    text-decoration: none;
  }

  & span {
    float: right;
  }
`

const OutlinedButtonLink = styled(RouterLink)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
  padding: 9px 15px;

  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;

  border-style: solid;
  border-width: 1px;
  border-color: #fff;
  border-radius: 3px;

  font-family: 'Playfair Display', sans-serif;
  font-size: 16px;
  line-height: inherit;
  background-color: transparent;
  color: #fff;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  
  &:hover {
    margin-left: 0px;
    color: #000;
    border-color: #09d5b0;
    background-color: #09d5b0;

    box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.08);
    -webkit-transform: translate(2px, 0px);
    -ms-transform: translate(2px, 0px);
    transform: translate(2px, 0px);
    text-decoration: none;
  }

  & span {
    float: right;
  }

  @media screen and (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`

const ButtonsContainer = styled.div`
  width: 380px;
  margin-left: 150px;

  @media screen and (max-width: 991px) {
    width: 360px;
    margin-left: 12px;
  }

  @media screen and (max-width: 767px) {
    width: 360px;
    margin-left: 0px;
    padding-top: 24px;
  }

  @media screen and (max-width: 467px) {
    width: 100%;
  }
`

export default function FooterButtons() {
  return (
    <React.Fragment>
      <ButtonsContainer>
        <SolidButtonLink to='/earlyaccess'>Early Access <span>➝</span></SolidButtonLink>
        <OutlinedButtonLink to='/learn'>Learn More <span>➝</span></OutlinedButtonLink>
      </ButtonsContainer>
    </React.Fragment>
  )
}
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

const DisplayBlock = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: center;
  border-radius: 3px;
  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  color: #000;
  font-size: 16px;
  text-transform: uppercase;

  @media screen and (max-width: 767px) {
    padding-top: 10px;
  }
`

const EarlyAccessLink = styled(RouterLink).attrs({ to: '/earlyaccess'})`
  display: inline-block;
  padding: 9px 15px;
  margin-top: 20px;

  border: 0;
  border-radius: 3px;

  font-family: 'Playfair Display', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: inherit;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  
  background-color: #0c0a89;
  color: #fff;

  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;
  
  &:hover {
    background-color: #09d5b0;
    -webkit-transform: translate(0px, -2px);
    -ms-transform: translate(0px, -2px);
    transform: translate(0px, -2px);
    text-decoration: none;
  }

  @media screen and (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`

const LearnMoreLink = styled(RouterLink).attrs({ to: '/learn'})`
  cursor: pointer;

  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  margin-top: 20px;
  margin-left: 15px;
  padding: 9px 15px;

  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;

  border-style: solid;
  border-width: 1px;
  border-color: #15113b;
  border-radius: 3px;

  -webkit-transition: all 350ms ease;
  transition: all 350ms ease;

  background-color: transparent;
  color: #0c0a89;
  font-family: 'Playfair Display', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: inherit;
  text-decoration: none;
  text-transform: uppercase;
  
  @media screen and (max-width: 991px) {
    padding-right: 15px;
    padding-left: 15px;
  }

  &:hover {
    background-color: #15113b;
    border-color: #ffd343;
    color: #fff;
    box-shadow: 1px 1px 12px 0 rgba(0, 0, 0, 0.08);
    text-decoration: none;
    -webkit-transform: translate(0px, -2px);
    -ms-transform: translate(0px, -2px);
    transform: translate(0px, -2px);
    text-decoration: none;
  }
`

export default function Buttons() {
  return (
    <React.Fragment>
      <DisplayBlock>
          <EarlyAccessLink>Early Access</EarlyAccessLink>
          <LearnMoreLink>Learn More</LearnMoreLink>
      </DisplayBlock>
    </React.Fragment>
  )
}
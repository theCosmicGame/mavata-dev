import React from 'react';
import styled from 'styled-components';

const LargeHeading = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-weight: 300;

  @media screen and (max-width: 767px) {
    margin-top: 14px;
    font-size: 20px;
    line-height: 30px;
  }

  text-align: center;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Barlow, sans-serif;
  color: #0c0a89;
  font-size: 20px;
`

const StyledHeading = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 90px;
  margin-top: 20px;

  font-family: Playfair Display; sans-serif;
  color: #0c0a89;
  text-align: center;

  font-size: 48px;
  line-height: 60px;
  max-width: none;
  text-align: center;
`

const SubHeading = styled.p`
  font-size: 24px;
  line-height: 36px;
  font-weight: 300;

  @media screen and (max-width: 767px) {
    margin-top: 14px;
    font-size: 20px;
    line-height: 30px;
  }

  max-width: 750px;
  margin: 40px auto;
  font-family: Barlow, sans-serif;
  color: #0c0a89;
  font-size: 20px;
  line-height: 24px;
  text-align: center;

  padding-left: 0px;
`

export default function HeroContent() {
  return (
    <React.Fragment>
      <LargeHeading>Aggregate & Collaborate</LargeHeading>
      <StyledHeading>Modern Data Collection for PE/IB</StyledHeading>
      <SubHeading>Collect operating data without burdening management and simplify data collaboration.</SubHeading>
    </React.Fragment>
  );
};